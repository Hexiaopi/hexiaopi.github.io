---
title: 设计原则
icon: handshake
date: 2022-10-15
tag:
 - Go
 - 设计原则
category:
 - 设计模式
star: true
---

<!-- more -->

设计原则是心法，对于构建高质量的软件系统提供**指导**和**约束**，它具有以下作用：

- 提高代码质量：设计原则强调代码的清晰性、可读性和可维护性。通过遵循设计原则，可以编写出更结构化、更模块化的代码，减少代码重复和冗余。
- 降低耦合度：设计原则鼓励松散耦合的设计，将系统划分为更小的、相互独立的模块。这样可以减少模块之间的依赖关系，提高系统的灵活性和可扩展性。
- 促进代码重用：设计原则推崇封装、继承、多态等面向对象的特性，使得代码更易于重用。通过设计模式和设计原则，可以将通用的解决方案抽象出来，并在不同的场景中重复应用。
- 简化系统维护：良好的设计原则可以减少系统的耦合和复杂度，使系统更易于理解和维护。当需要对系统进行修改或扩展时，通过遵循设计原则，可以更快速、更安全地进行变更。
- 提高团队协作效率：设计原则提供了一种通用的设计思维和规范，使整个团队在设计和开发过程中能够更好地进行交流和协作。团队成员可以共同理解和遵循设计原则，降低沟通成本，提高开发效率。



## SOLID原则

SOLID原则是由罗伯特·C·马丁在21世纪早期引入，指代了面向对象编程和面向对象设计的五个基本原则。遵循SOLID原则可以确保我们设计的代码是易维护、易扩展、易阅读的。SOLID原则同样也适用于Go程序设计。具体SOLID编码原则见下表：

| 简写 | 全称                                | 中文描述     |
| ---- | ----------------------------------- | ------------ |
| SRP  | The Single Responsibility Principle | 单一功能原则 |
| OCP  | The Open Closed Principle           | 开闭原则     |
| LSP  | The Liskov Substitution Principle   | 里氏替换原则 |
| DIP  | The Dependency Inversion Principle  | 依赖倒置原则 |
| ISP  | The Interface Segregation Principle | 接口分离原则 |

### 单一功能原则

>单一功能原则：一个类或者模块只负责完成一个职责(或者功能)。

简单来说就是保证我们在设计函数、方法时做到功能单一，权责明确，当发生改变时，只有一个改变它的原因。如果函数/方法承担的功能过多，就意味着很多功能会相互耦合，这样当其中一个功能发生改变时，可能会影响其它功能。单一功能原则，可以使代码后期的维护成本更低、改动风险更低。

例如，有以下代码，用来创建一个班级，班级包含老师和学生，代码如下：

```go
package srp

type Class struct {
	Teacher *Teacher
	Student *Student
}

type Teacher struct {
	Name  string
	Class int
}

type Student struct {
	Name  string
	Class int
}

func createClass(teacherName, studentName string, class int) (*Teacher, *Student) {
	teacher := &Teacher{
		Name:  teacherName,
		Class: class,
	}
	student := &Student{
		Name:  studentName,
		Class: class,
	}

	return teacher, student
}

func CreateClass() *Class {
	teacher, student := createClass("colin", "lily", 1)
	return &Class{
		Teacher: teacher,
		Student: student,
	}
}
```

上面的代码段通过`createClass`函数创建了一个老师和学生，老师和学生属于同一个班级。但是现在因为老师资源不够，要求一个老师管理多个班级。这时候，需要修改`createClass`函数的class参数，因为创建学生和老师是通过`createClass`函数的class参数偶合在一起，所以修改创建老师的代码，势必会影响创建学生的代码，其实，创建学生的代码我们是压根不想改动的。这时候`createClass`函数就不满足单一功能原则。需要修改为满足单一功能原则的代码，修改后代码段如下：

```go
package srp

type Class struct {
	Teacher *Teacher
	Student *Student
}

type Teacher struct {
	Name  string
	Class int
}

type Student struct {
	Name  string
	Class int
}

func CreateStudent(name string, class int) *Student {
	return &Student{
		Name:  name,
		Class: class,
	}
}

func CreateTeacher(name string, classes []int) *Teacher {
	return &Teacher{
		Name:  name,
		Class: classes,
	}
}

func CreateClass() *Class {
	teacher := CreateTeacher("colin", []int{1, 2})
	student := CreateStudent("lily", 1)
	return &Class{
		Teacher: teacher,
		Student: student,
	}
}
```

上述代码，我们将`createClass`函数拆分成2个函数`CreateStudent`和`CreateTeacher`，分别用来创建学生和老师，各司其职，代码互不影响。

### 开闭原则

>开闭原则：软件实体应该对扩展开放、对修改关闭。

简单来说就是通过在已有代码基础上扩展代码，而非修改代码的方式来完成新功能的添加。开闭原则，并不是说完全杜绝修改，而是尽可能不修改或者以最小的代码修改代价来完成新功能的添加。

以下是一个满足开闭原则的代码段：

```go
type IBook interface {
	GetName() string
	GetPrice() int
}

// NovelBook 小说
type NovelBook struct {
	Name   string
	Price  int
}

func (n *NovelBook) GetName() string {
	return n.Name
}

func (n *NovelBook) GetPrice() int {
	return n.Price
}
```

上述代码段，定义了一个Book接口和Book接口的一个实现：NovelBook（小说）。现在有新的需求，对所有小说打折统一打5折，根据开闭原则，**打折相关的功能应该利用扩展实现，而不是在原有代码上修改**，所以，新增一个OffNovelBook接口，继承NovelBook，并重写GetPrice方法。

```go
type OffNovelBook struct {
	NovelBook
}

// 重写GetPrice方法
func (n *OffNovelBook) GetPrice() int {
	return n.NovelBook.GetPrice() / 5
}
```

### 里氏替换原则

>里氏替换原则：如果S是T的子类型，则类型T的对象可以替换为类型S的对象，而不会破坏程序。在Go开发中，里氏替换原则可以通过接口来实现。

例如，以下是一个符合里氏替换原则的代码段：

```go
type Reader interface {
	Read(p []byte) (n int, err error)
}

type Writer interface {
	Write(p []byte) (n int, err error)
}

type ReadWriter interface {
	Reader
	Writer
}

func Write(w Writer, p []byte) (int, error) {
	return w.Write(p)
}
```

我们可以将Write函数中的Writer参数替换为其子类型ReadWriter，而不影响已有程序：

```go
func Write(rw ReadWriter, p []byte) (int, error) {
	return rw.Write(p)
}
```

### 依赖倒置原则

>依赖倒置原则：依赖于抽象而不是一个实例，其本质是要面向接口编程，不要面向实现编程。

以下是一个符合依赖倒置原则的代码段：

```go
package solid

import "fmt"

// IDriver 司机抽象接口
type IDriver interface {
	Drive(car ICar) // 开车
}

// Driver 具体的司机
type Driver struct{}

// Drive 实现IDriver接口
func (Driver) Drive(car ICar) {
	car.Run()
}

// ICar 汽车抽象接口
type ICar interface {
	Run()
}

// 不同汽车的实现
// Benz 奔驰汽车
type Benz struct{}

func (Benz) Run() {
	fmt.Println("奔驰汽车开始运行...")
}

// BMW 宝马汽车
type BMW struct{}

func (BMW) Run() {
	fmt.Println("宝马汽车开始运行...")
}
```

上述代码中，IDriver接口的Drive方法，依赖于ICar接口，而不是某一具体的汽车类型。这样司机就可以开不同的汽车。

### 接口隔离原则

>接口隔离原则：客户端程序不应该依赖它不需要的方法。

例如，我们通过Save函数将文档保存到磁盘：

```go
// Save writes the contents of doc to the file f.
func Save(f *os.File, doc *Document) error
```

上面的Save函数虽然能够完成任务，但有下面的问题：

1. Save函数使用*os.File做为保存Document的文件，如果后面需要将Document保存到网络存储，Save函数就无法满足。
2. 因为Save函数直接保存文档到磁盘，不方便后续的测试。
3. *os.File包含了许多跟Save函数的方法，例如：读取路径以及检查路径是否是软连接等。

可以说上述的Save方法不满足接口隔离原则。可以优化为：

```go
// Save writes the contents of doc to the supplied ReadWriter.
func Save(rw io.ReadWriter, doc *Document) error
```

但是上述的Save函数仍然有问题，我们其实只需要写操作，不需要读操作，因此，Save函数可以进一步优化为：

```go
// Save writes the contents of doc to the supplied Writer.
func Save(w io.Writer, doc *Document) error
```

`func Save(w io.Writer, doc *Document) error`就是最终的符合接口隔离原则的函数。

## DRY原则

>DRY: Don't Repeat Yourself，不要重复自己
>
>避免在代码中出现重复的逻辑和代码，可以通过封装来实现重复代码的复用。

## KISS原则

>KISS: Keep It Simple,Stupid，尽可能简化代码
>
>不要使用过于复杂的算法和设计模式。

## YANGI原则

>YANGI: You Ain't Gonna Need It，你不会需要它
>
>在编写代码时，不要过度设计，只保持足够的可扩展性，不要编写没有必要的代码。

## LOD原则

>LOD: Law of Demeter,迪米特法则。或者称为：The Least Knowledge Principle，最小知识原则。
>
>一个对象应该对其它对象有最少的了解。避免在代码中出现过多的依赖关系，可以通过使用接口和依赖注入等方式来实现。
