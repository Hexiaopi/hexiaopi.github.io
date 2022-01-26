Git每次提交代码，都需要写`Commit message`，好的规范例如：Angular规范，可以帮助我们：
- 根据摘要信息就可以知道每次变更哪些内容
- 可以过滤某些commit，例如只关注新增加的功能
- 根据commit生成`Change log`

在Angular规范中，Commit Message包含三个部分：Header、Body、Footer，格式如下：
```
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```

## Header（必须项）
示例：
```
fix($compile): couple of unit tests for IE9
```
### type（必须项）
> type用来说明commit的类型：
- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：优化重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

type为`feat`和`fix`的可以出现在`Change log`中，其他建议不要

### scope（可选项）
> scope用于说明commit影响范围，视项目不同而不同。
> 如果项目包含多个组件，建议每个组件作为scope
> 如果项目只有一个组件，建议根据分成作为scope，例如数据层、控制层、视图层

### subject（可选项）
> subject是commit的简短描述，建议：
> - 以动词开头、使用第一人称现在时
> - 第一个字母小写
> - 结尾不加句号

## Body（可选项）
> Body用于对本次commit的详细描述，可以分多行。建议：
> 说明本次修改的冬季
> 和上一版本相比的改动点

示例：
```
More detailed explanatory text, if necessary.  Wrap it to 
about 72 characters or so. 

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
```

## Footer（可选项）
> 用来说明本次commit导致的后果，常用来说明：
> - 不兼容的改动，以`BREAKING CHANGE`开头
> - 关闭的Issue列表
示例：
```
BREAKING CHANGE: isolate scope bindings definition has changed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
    }

    After:

    scope: {
      myAttr: '@',
    }

    The removed `inject` wasn't generaly useful for directives so there should be no code using it.
```
或
```
Closes #123, #245, #992
```
