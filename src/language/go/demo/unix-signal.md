---
title: unix-signal 实现简单的进程通信
date: 2026-02-13
tag:
 - Go
 - Signal
category:
 - 编程语言
---


> 这篇[文章](https://leandronsp.com/articles/you-dont-need-kafka-building-a-message-queue-with-only-two-unix-signals)介绍了利用 UNIX 的两个自定义信号（SIGUSR1/SIGUSR2）实现极简的进程间通信和消息队列。我觉得蛮有意思，话不多说，提供 Go 语言示例 Demo。

本文演示用 SIGUSR1/SIGUSR2 传输比特位：
- `SIGUSR1` 表示 0，`SIGUSR2` 表示 1。
- 每 8 个信号还原 1 个字节。
- 使用 NULL 终止符（\0）结束一条消息。

注意事项：
- 仅适用于 Unix-like 系统（Linux/macOS），Windows 不支持 SIGUSR1/SIGUSR2。
- 本例按 LSB -> MSB 的顺序发送位（0-7 位）。


## receiver

负责捕获 SIGUSR1/SIGUSR2，累计比特位还原为字符串，识别 NULL 终止符并换行，打印自身 PID 供生产者使用。

```go
package main

import (
	"fmt"
	"os"
	"os/signal"
	"syscall"
	"sync/atomic"
)

// 全局状态：保证信号处理的原子性
var (
	accumulator uint8  = 0 // 字节累加器
	position    uint32 = 0 // 比特位位置（0-7）
)

func main() {
	fmt.Printf("Receiver PID: %d\n", os.Getpid())
	fmt.Println("Waiting for signals...")

	// 注册信号捕获
	sigChan := make(chan os.Signal, 2)
	signal.Notify(sigChan, syscall.SIGUSR1, syscall.SIGUSR2)

	// 处理信号
	for sig := range sigChan {
		var bit uint8
		switch sig {
		case syscall.SIGUSR1:
			bit = 0 // SIGUSR1 -> 0
		case syscall.SIGUSR2:
			bit = 1 // SIGUSR2 -> 1
		}
		decodeBit(bit)
	}
}

// 解码单个比特位，累计8位还原为字节
func decodeBit(bit uint8) {
	pos := atomic.LoadUint32(&position)
	accumulator += bit << pos // 位左移拼接

	atomic.AddUint32(&position, 1)
	// 累计8位，完成1个字节的解码
	if atomic.LoadUint32(&position) == 8 {
		handleByte(accumulator)
		// 重置状态
		accumulator = 0
		atomic.StoreUint32(&position, 0)
	}
}

// 处理解码后的字节：NULL终止符(\0)换行，否则打印字符
func handleByte(b uint8) {
	if b == 0 {
		fmt.Println() // 终止符，换行
		return
	}
	fmt.Print(string(b))
}
```

## sender

接收接收者 PID和发送消息作为入参，将消息每个字符编码为 8 个信号（SIGUSR1/SIGUSR2），末尾发送 NULL 终止符（8 次 SIGUSR1）。

```go
package main

import (
	"fmt"
	"os"
	"os/exec"
	"strconv"
	"strings"
	"time"
)

const signalDelay = 1 * time.Millisecond // 信号延迟，防止接收方处理不及时

func main() {
	// 入参校验：go run sender.go <receiver-pid> <message>
	if len(os.Args) < 3 {
		fmt.Printf("Usage: %s <receiver-pid> <message>\n", os.Args[0])
		os.Exit(1)
	}
	// 解析接收者PID
	pid, err := strconv.Atoi(os.Args[1])
	if err != nil {
		fmt.Println("Invalid PID:", err)
		os.Exit(1)
	}
	// 拼接消息
	message := strings.Join(os.Args[2:], " ")

	fmt.Printf("Sending message to PID %d: %s\n", pid, message)
	// 编码消息并发送信号
	sendMessage(pid, message)
	// 发送NULL终止符（8个SIGUSR1）
	sendNullTerminator(pid)

	fmt.Println("Message sent successfully")
}

// 发送消息：每个字符编码为8个信号
func sendMessage(pid int, msg string) {
	for _, c := range msg {
		byteVal := uint8(c)
		// 提取每个比特位（从LSB到MSB，0-7位）
		for i := 0; i < 8; i++ {
			bit := (byteVal >> i) & 1
			if bit == 0 {
				sendSignal(pid, syscall.SIGUSR1)
			} else {
				sendSignal(pid, syscall.SIGUSR2)
			}
			time.Sleep(signalDelay)
		}
	}
}

// 发送NULL终止符：8次SIGUSR1（00000000）
func sendNullTerminator(pid int) {
	for i := 0; i < 8; i++ {
		sendSignal(pid, syscall.SIGUSR1)
		time.Sleep(signalDelay)
	}
}

// 发送指定信号到目标PID
func sendSignal(pid int, sig syscall.Signal) {
	// Go中通过kill命令发送信号（跨平台兼容，也可直接调用syscall.Kill）
	cmd := exec.Command("kill", "-"+strconv.Itoa(int(sig)), strconv.Itoa(pid))
	if err := cmd.Run(); err != nil {
		fmt.Printf("Failed to send signal: %v\n", err)
		os.Exit(1)
	}
}
```

## 测试流程

### 启动receiver

```sh
go run receiver.go
# 输出示例：
# Receiver PID: 12345
# Waiting for signals...
```

### 启动sender发送消息

```sh
go run sender.go 12345 Hello, World!
# 输出示例：
# Sending message to PID 12345: Hello, World!
# Message sent successfully
```

### receiver接收消息

```sh
Receiver PID: 12345
Waiting for signals...
Hello, World!
```
