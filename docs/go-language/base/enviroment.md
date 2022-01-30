当下载完Go安装包后，需设置3个环境变量，分别是：

1. GOROOR：Go语言安装根目录的路径，这是下载的Go语言安装路径。
2. GOPATH：工作区目录的路径，这是我们写代码存放的地方。
3. GOBIN：Go程序生成的可执行文件的路径。

可使用命令`go env`来查看当前的设置。

这里重点关注GOPATH，因为这是我们项目存放的地方，且需按照Go语言的源码组织方式组织我们的项目。GOPATH包含多个工作区，每个工作区包含三个文件夹，分别是：

1. src：Go语言的源码文件（source file）。
2. pkg：安装后的归档文件（archive file），即程序编译后生产的静态库文件。同时会根据操作系统和计算机架构生产平台相关目录，例如是linux_amd64则表示是Linux系统，CPU是amd64架构。
3. bin：可执行文件（executable file）。

![GOPATH](./image/GOPATH.png)