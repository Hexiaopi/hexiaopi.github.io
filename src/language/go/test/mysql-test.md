---
title: MySQL测试
date: 2024-06-11
tag:
 - Go
 - 测试
category:
 - 编程语言
---


Go项目中经常使用MySQL作为存储，一般写测试会建立真实连接进行测试，但带来的问题有很多：

- 依赖测试数据，如果数据库中某个数据变更导致测试用例失败
- 依赖数据库环境，如果无法连通将导致测试失败

因此，优秀的项目会杜绝这些问题。本文介绍Go语言的`sql/driver`的mock库。


## 安装mock库

```shell
go get github.com/DATA-DOG/go-sqlmock
```

## 官网用例

### 业务SQL函数


```go{24,27}
package main

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

func recordStats(db *sql.DB, userID, productID int64) (err error) {
	tx, err := db.Begin()
	if err != nil {
		return
	}

	defer func() {
		switch err {
		case nil:
			err = tx.Commit()
		default:
			tx.Rollback()
		}
	}()

	if _, err = tx.Exec("UPDATE products SET views = views + 1"); err != nil {
		return
	}
	if _, err = tx.Exec("INSERT INTO product_viewers (user_id, product_id) VALUES (?, ?)", userID, productID); err != nil {
		return
	}
	return
}
```

::: info
`recordStats` 函数负责记录用户浏览产品信息，包括：
- 更新商品的 views 个数+1
- 插入一条用户浏览商品数据到 product_viewers 表

以上两个操作在同一个事物中执行
:::

### 成功的测试用例

```go{8-11,19}
func TestShouldUpdateStats(t *testing.T) {
	db, mock, err := sqlmock.New()
	if err != nil {
		t.Fatalf("an error '%s' was not expected when opening a stub database connection", err)
	}
	defer db.Close()

	mock.ExpectBegin()
	mock.ExpectExec("UPDATE products").WillReturnResult(sqlmock.NewResult(1, 1))
	mock.ExpectExec("INSERT INTO product_viewers").WithArgs(2, 3).WillReturnResult(sqlmock.NewResult(1, 1))
	mock.ExpectCommit()

	// now we execute our method
	if err = recordStats(db, 2, 3); err != nil {
		t.Errorf("error was not expected while updating stats: %s", err)
	}

	// we make sure that all expectations were met
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
	}
}
```

::: info
其中：
- 8-11行为我们期望执行的SQL语句，包括返回值。
- 19行检验是否符合我们的期望。
:::

### 失败的测试用例

```go{10,13,16,19}
func TestShouldRollbackStatUpdatesOnFailure(t *testing.T) {
	db, mock, err := sqlmock.New()
	if err != nil {
		t.Fatalf("an error '%s' was not expected when opening a stub database connection", err)
	}
	defer db.Close()

	mock.ExpectBegin()
	mock.ExpectExec("UPDATE products").WillReturnResult(sqlmock.NewResult(1, 1))
	mock.ExpectExec("INSERT INTO product_viewers").
		WithArgs(2, 3).
		WillReturnError(fmt.Errorf("some error"))
	mock.ExpectRollback()

	// now we execute our method
	if err = recordStats(db, 2, 3); err == nil {
		t.Errorf("was expecting an error, but there was none")
	}

	// we make sure that all expectations were met
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
	}
}
```

::: info
其中
- 第10行模拟执行插入失败错误，第13行期望事务回滚。
- 第16行按照预期肯定返回错误
- 第19行则检验是否符合我们的预期
:::

## 小试牛刀

### 业务dao层

```go
type UserDao struct {
	db *gorm.DB
}

func NewUserDao(db *gorm.DB) *UserDao {
	return &UserDao{db: db}
}

func (dao *UserDao) Get(ctx context.Context, options ...store.Option) (*model.User, error) {
	user := model.User{}
	query := dao.db.WithContext(ctx).Model(&model.User{})
	for _, option := range options {
		option.(Option)(query)
	}
	if err := query.First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}
```

dao层使用gorm ORM框架，但不妨碍我们采用go-sqlmock进行测试

### 测试用例

```go{2,7}
func TestUserDao_Get(t *testing.T) {
	db, mock, err := sqlmock.New(sqlmock.QueryMatcherOption(sqlmock.QueryMatcherEqual))
	if err != nil {
		t.Fatalf("an error '%s' was not expected when opening a stub database connection", err)
	}
	defer db.Close()
	gdb, err := gorm.Open(mysql.New(mysql.Config{DriverName: "mysql", Conn: db, SkipInitializeWithVersion: true}), &gorm.Config{})
	if err != nil {
		t.Fatal(err)
	}
	dao := NewUserDao(gdb)

	{ //根据name查询用户
		rows := sqlmock.NewRows([]string{"id", "name"}).AddRow(1, "admin")
		mock.ExpectQuery("SELECT * FROM `sys_user` WHERE name = ? ORDER BY `sys_user`.`id` LIMIT ?").WithArgs("admin", 1).WillReturnRows(rows)
		user, err := dao.Get(context.Background(), NewOption().WithUserName("admin"))
		if err != nil {
			t.Fatal(err)
		}
		t.Log(user)
		if err := mock.ExpectationsWereMet(); err != nil {
			t.Errorf("there were unfulfilled expectations: %s", err)
		}
	}
	{ //根据id查询用户
		rows := sqlmock.NewRows([]string{"id", "name"}).AddRow(1, "admin")
		mock.ExpectQuery("SELECT * FROM `sys_user` WHERE id = ? ORDER BY `sys_user`.`id` LIMIT ?").WithArgs(1, 1).WillReturnRows(rows)
		user, err := dao.Get(context.Background(), NewOption().WithId(1))
		if err != nil {
			t.Fatal(err)
		}
		t.Log(user)
		if err := mock.ExpectationsWereMet(); err != nil {
			t.Errorf("there were unfulfilled expectations: %s", err)
		}
	}
}
```

::: info
其中：
- 第2行我们使用了严格的匹配方式，即`sqlmock.QueryMatcherEqual`，即要求SQL语句完全一致，否则会报错SQL不是期望所得。
- 由于使用了GORM框架，所以第7行需要初始化gdb，但是由于GORM初始化会执行`SELECT VERSION()`，所以我们需要通过`SkipInitializeWithVersion`跳过初始化。
:::

遇见的一些问题：

::: warning
```go{3}
	{ //根据name查询用户
		rows := sqlmock.NewRows([]string{"id", "name"}).AddRow(1, "admin")
		mock.ExpectQuery("SELECT * FROM `sys_user` WHERE name = ? ORDER BY `sys_user`.`id` LIMIT 1").WithArgs("admin").WillReturnRows(rows)
		user, err := dao.Get(context.Background(), NewOption().WithUserName("admin"))
		if err != nil {
			t.Fatal(err)
		}
		t.Log(user)
		if err := mock.ExpectationsWereMet(); err != nil {
			t.Errorf("there were unfulfilled expectations: %s", err)
		}
	}
```
第3行，我们通过直接写死`LIMIT 1`而不是`LIMIT ?`来限制查询结果，但实际执行时，会报错SQL不是期望所得，导致测试用例不通过。因此需要特别注意，需要通过传参的方式。
:::

## 个人观点

go-sqlmock通过定义我们期望的SQL语句，然后通过模拟执行，来达到测试的目的。但我们通常使用相关的ORM框架，如GORM，已经不再写SQL语句，框架会自动帮助我们补充完整。因此对于一般肉眼可以审查的代码，我觉得使用go-sqlmock进行测试意义不大。

如果有非常复杂的SQL语句，或者ORM框架无法满足需求，尤其是一些业务逻辑下沉到dao层，那么使用go-sqlmock进行测试是值得的。

## 参考文献

- [李文周](https://www.liwenzhou.com/posts/Go/unit-test-2/)
- [知乎](https://zhuanlan.zhihu.com/p/693058578)
