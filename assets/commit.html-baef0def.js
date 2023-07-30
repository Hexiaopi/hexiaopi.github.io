import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as s,c as o,e as i,f as e,d as n,a as l}from"./app-ac29efd4.js";const r={},c=i("h2",{id:"commit-message",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#commit-message","aria-hidden":"true"},"#"),e(" Commit Message")],-1),u=i("code",null,"Commit message",-1),m={href:"https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines",target:"_blank",rel:"noopener noreferrer"},h=l(`<ul><li>根据摘要信息就可以知道每次变更哪些内容</li><li>可以过滤某些commit，例如只关注新增加的功能</li><li>根据commit生成<code>Change log</code></li></ul><p>在Angular规范中，Commit Message包含三个部分：Header、Body、Footer，格式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;
// 空一行
&lt;body&gt;
// 空一行
&lt;footer&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><code>&lt;scope&gt;</code>必须用括号()括起来</li><li><code>&lt;type&gt;(&lt;scope&gt;)</code>后必须紧跟冒号，冒号后紧跟空格</li><li><code>&lt;body&gt;</code>和<code>&lt;footer&gt;</code>之前两个空行也必须要有</li></ul><p>建议每行字符控制在<code>72</code>个字符之内</p></div><h3 id="header-必须项" tabindex="-1"><a class="header-anchor" href="#header-必须项" aria-hidden="true">#</a> Header（必须项）</h3><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fix($compile): couple of unit tests for IE9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="type-必须项" tabindex="-1"><a class="header-anchor" href="#type-必须项" aria-hidden="true">#</a> type（必须项）</h4><blockquote><p>type用来说明commit的类型：</p></blockquote><ul><li>feat：新功能（feature）</li><li>fix：修补bug</li><li>perf: 提高代码性能的变更</li><li>docs：文档（documentation）</li><li>style： 格式（不影响代码运行的变动）</li><li>refactor：优化重构（即不是新增功能，也不是修改bug的代码变动，例如：变量重命名、冗余代码删除、代码简化或增加注释）</li><li>test：增加测试</li><li>chore：构建过程或辅助工具的变动</li></ul><p>type为<code>feat</code>和<code>fix</code>的可以出现在<code>Change log</code>中，其他建议不要</p><h4 id="scope-可选项" tabindex="-1"><a class="header-anchor" href="#scope-可选项" aria-hidden="true">#</a> scope（可选项）</h4><blockquote><p>scope用于说明commit影响范围，视项目不同而不同。<br> 如果项目包含多个组件，建议每个组件作为scope<br> 如果项目只有一个组件，建议根据分成作为scope，例如数据层、控制层、视图层</p></blockquote><h4 id="subject-可选项" tabindex="-1"><a class="header-anchor" href="#subject-可选项" aria-hidden="true">#</a> subject（可选项）</h4><blockquote><p>subject是commit的简短描述，建议：</p><ul><li>以动词开头、使用第一人称现在时</li><li>第一个字母小写</li><li>结尾不加句号</li></ul></blockquote><h3 id="body-可选项" tabindex="-1"><a class="header-anchor" href="#body-可选项" aria-hidden="true">#</a> Body（可选项）</h3><blockquote><p>Body用于对本次commit的详细描述，可以分多行。建议：<br> 说明本次修改的冬季<br> 和上一版本相比的改动点</p></blockquote><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>More detailed explanatory text, if necessary.  Wrap it to 
about 72 characters or so. 

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="footer-可选项" tabindex="-1"><a class="header-anchor" href="#footer-可选项" aria-hidden="true">#</a> Footer（可选项）</h3><blockquote><p>用来说明本次commit导致的后果，常用来说明：</p><ul><li>不兼容的改动，以<code>BREAKING CHANGE</code>开头</li><li>关闭的Issue列表<br> 示例：</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>BREAKING CHANGE: isolate scope bindings definition has changed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: &#39;attribute&#39;,
    }

    After:

    scope: {
      myAttr: &#39;@&#39;,
    }

    The removed \`inject\` wasn&#39;t generaly useful for directives so there should be no code using it.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Closes #123, #245, #992
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="change-log" tabindex="-1"><a class="header-anchor" href="#change-log" aria-hidden="true">#</a> Change Log</h2>`,25),v=i("code",null,"CHANGELOG",-1),b=i("br",null,null,-1),g={href:"https://github.com/git-chglog/git-chglog",target:"_blank",rel:"noopener noreferrer"},p=i("code",null,"CHANGELOG",-1),f=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>git-chglog <span class="token parameter variable">-o</span> CHANGELOG.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="semver" tabindex="-1"><a class="header-anchor" href="#semver" aria-hidden="true">#</a> SemVer</h2>`,2),x={href:"https://github.com/arnaud-deprez/gsemver",target:"_blank",rel:"noopener noreferrer"};function _(y,k){const a=d("ExternalLinkIcon");return s(),o("div",null,[c,i("p",null,[e("Git每次提交代码，都需要写"),u,e("，好的规范例如："),i("a",m,[e("Angular规范"),n(a)]),e("，可以帮助我们：")]),h,i("p",null,[e("我们可以使用一些工具根据git提交记录自动生成"),v,e("，例如："),b,i("a",g,[e("git-chglog"),n(a)]),e("，本项目的"),p,e("就是使用该工具自动生成，非常方便。")]),f,i("p",null,[e("可以使用"),i("a",x,[e("gsemver"),n(a)]),e("工具根据git提交记录生成下一个版本")])])}const A=t(r,[["render",_],["__file","commit.html.vue"]]);export{A as default};
