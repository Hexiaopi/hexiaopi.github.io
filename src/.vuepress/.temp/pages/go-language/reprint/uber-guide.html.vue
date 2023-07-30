<template><div><p>【转】<a href="https://github.com/xxjwxc/uber_go_guide_cn" target="_blank" rel="noopener noreferrer">原文链接<ExternalLinkIcon/></a></p>
<!-- more -->
<p>Uber Go 语言编码规范</p>
<p><a href="https://www.uber.com/" target="_blank" rel="noopener noreferrer">Uber<ExternalLinkIcon/></a> 是一家美国硅谷的科技公司，也是 Go 语言的早期 adopter。其开源了很多 golang 项目，诸如被 Gopher 圈熟知的 <a href="https://github.com/uber-go/zap" target="_blank" rel="noopener noreferrer">zap<ExternalLinkIcon/></a>、<a href="https://github.com/jaegertracing/jaeger" target="_blank" rel="noopener noreferrer">jaeger<ExternalLinkIcon/></a> 等。2018 年年末 Uber 将内部的 <a href="https://github.com/uber-go/guide" target="_blank" rel="noopener noreferrer">Go 风格规范<ExternalLinkIcon/></a> 开源到 GitHub，经过一年的积累和更新，该规范已经初具规模，并受到广大 Gopher 的关注。本文是该规范的中文版本。本版本会根据原版实时更新。</p>
<h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h2>
<ul>
<li>当前更新版本：2022-10-19 版本地址：<a href="https://github.com/uber-go/guide/commit/4478e672bddf9d4f7ca4a561ab0779e08e469577" target="_blank" rel="noopener noreferrer">commit:#158<ExternalLinkIcon/></a></li>
<li>如果您发现任何更新、问题或改进，请随时 fork 和 PR</li>
<li>Please feel free to fork and PR if you find any updates, issues or improvement.</li>
</ul>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<ul>
<li><a href="#%E7%89%88%E6%9C%AC">版本</a></li>
<li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li>
<li><a href="#%E4%BB%8B%E7%BB%8D">介绍</a></li>
<li><a href="#%E6%8C%87%E5%AF%BC%E5%8E%9F%E5%88%99">指导原则</a>
<ul>
<li><a href="#%E6%8C%87%E5%90%91-interface-%E7%9A%84%E6%8C%87%E9%92%88">指向 interface 的指针</a></li>
<li><a href="#interface-%E5%90%88%E7%90%86%E6%80%A7%E9%AA%8C%E8%AF%81">Interface 合理性验证</a></li>
<li><a href="#%E6%8E%A5%E6%94%B6%E5%99%A8-receiver-%E4%B8%8E%E6%8E%A5%E5%8F%A3">接收器 (receiver) 与接口</a></li>
<li><a href="#%E9%9B%B6%E5%80%BC-mutex-%E6%98%AF%E6%9C%89%E6%95%88%E7%9A%84">零值 Mutex 是有效的</a></li>
<li><a href="#%E5%9C%A8%E8%BE%B9%E7%95%8C%E5%A4%84%E6%8B%B7%E8%B4%9D-slices-%E5%92%8C-maps">在边界处拷贝 Slices 和 Maps</a>
<ul>
<li><a href="#%E6%8E%A5%E6%94%B6-slices-%E5%92%8C-maps">接收 Slices 和 Maps</a></li>
<li><a href="#%E8%BF%94%E5%9B%9E-slices-%E6%88%96-maps">返回 slices 或 maps</a></li>
</ul>
</li>
<li><a href="#%E4%BD%BF%E7%94%A8-defer-%E9%87%8A%E6%94%BE%E8%B5%84%E6%BA%90">使用 defer 释放资源</a></li>
<li><a href="#channel-%E7%9A%84-size-%E8%A6%81%E4%B9%88%E6%98%AF-1%E8%A6%81%E4%B9%88%E6%98%AF%E6%97%A0%E7%BC%93%E5%86%B2%E7%9A%84">Channel 的 size 要么是 1，要么是无缓冲的</a></li>
<li><a href="#%E6%9E%9A%E4%B8%BE%E4%BB%8E-1-%E5%BC%80%E5%A7%8B">枚举从 1 开始</a></li>
<li><a href="#%E4%BD%BF%E7%94%A8-time-%E5%A4%84%E7%90%86%E6%97%B6%E9%97%B4">使用 time 处理时间</a>
<ul>
<li><a href="#%E4%BD%BF%E7%94%A8-timetime-%E8%A1%A8%E8%BE%BE%E7%9E%AC%E6%97%B6%E6%97%B6%E9%97%B4">使用 <code v-pre>time.Time</code> 表达瞬时时间</a></li>
<li><a href="#%E4%BD%BF%E7%94%A8-timeduration-%E8%A1%A8%E8%BE%BE%E6%97%B6%E9%97%B4%E6%AE%B5">使用 <code v-pre>time.Duration</code> 表达时间段</a></li>
<li><a href="#%E5%AF%B9%E5%A4%96%E9%83%A8%E7%B3%BB%E7%BB%9F%E4%BD%BF%E7%94%A8-timetime-%E5%92%8C-timeduration">对外部系统使用 <code v-pre>time.Time</code> 和 <code v-pre>time.Duration</code></a></li>
</ul>
</li>
<li><a href="#errors">Errors</a>
<ul>
<li><a href="#%E9%94%99%E8%AF%AF%E7%B1%BB%E5%9E%8B">错误类型</a></li>
<li><a href="#%E9%94%99%E8%AF%AF%E5%8C%85%E8%A3%85">错误包装</a></li>
<li><a href="#%E9%94%99%E8%AF%AF%E5%91%BD%E5%90%8D">错误命名</a></li>
</ul>
</li>
<li><a href="#%E5%A4%84%E7%90%86%E6%96%AD%E8%A8%80%E5%A4%B1%E8%B4%A5">处理断言失败</a></li>
<li><a href="#%E4%B8%8D%E8%A6%81%E4%BD%BF%E7%94%A8-panic">不要使用 panic</a></li>
<li><a href="#%E4%BD%BF%E7%94%A8-gouberorgatomic">使用 go.uber.org/atomic</a></li>
<li><a href="#%E9%81%BF%E5%85%8D%E5%8F%AF%E5%8F%98%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F">避免可变全局变量</a></li>
<li><a href="#%E9%81%BF%E5%85%8D%E5%9C%A8%E5%85%AC%E5%85%B1%E7%BB%93%E6%9E%84%E4%B8%AD%E5%B5%8C%E5%85%A5%E7%B1%BB%E5%9E%8B">避免在公共结构中嵌入类型</a></li>
<li><a href="#%E9%81%BF%E5%85%8D%E4%BD%BF%E7%94%A8%E5%86%85%E7%BD%AE%E5%90%8D%E7%A7%B0">避免使用内置名称</a></li>
<li><a href="#%E9%81%BF%E5%85%8D%E4%BD%BF%E7%94%A8-init">避免使用 <code v-pre>init()</code></a></li>
<li><a href="#%E8%BF%BD%E5%8A%A0%E6%97%B6%E4%BC%98%E5%85%88%E6%8C%87%E5%AE%9A%E5%88%87%E7%89%87%E5%AE%B9%E9%87%8F">追加时优先指定切片容量</a></li>
<li><a href="#%E4%B8%BB%E5%87%BD%E6%95%B0%E9%80%80%E5%87%BA%E6%96%B9%E5%BC%8F-exit">主函数退出方式 (Exit)</a>
<ul>
<li><a href="#%E4%B8%80%E6%AC%A1%E6%80%A7%E9%80%80%E5%87%BA">一次性退出</a></li>
</ul>
</li>
<li><a href="#%E5%9C%A8%E5%BA%8F%E5%88%97%E5%8C%96%E7%BB%93%E6%9E%84%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%AD%97%E6%AE%B5%E6%A0%87%E8%AE%B0">在序列化结构中使用字段标记</a></li>
<li><a href="#%E4%B8%8D%E8%A6%81%E4%B8%80%E5%8A%B3%E6%B0%B8%E9%80%B8%E5%9C%B0%E4%BD%BF%E7%94%A8-goroutine">不要一劳永逸地使用 goroutine</a>
<ul>
<li><a href="#%E7%AD%89%E5%BE%85-goroutines-%E9%80%80%E5%87%BA">等待 goroutines 退出</a></li>
<li><a href="#%E4%B8%8D%E8%A6%81%E5%9C%A8-init-%E4%BD%BF%E7%94%A8-goroutines">不要在 <code v-pre>init()</code> 使用 goroutines</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E6%80%A7%E8%83%BD">性能</a>
<ul>
<li><a href="#%E4%BC%98%E5%85%88%E4%BD%BF%E7%94%A8-strconv-%E8%80%8C%E4%B8%8D%E6%98%AF-fmt">优先使用 strconv 而不是 fmt</a></li>
<li><a href="#%E9%81%BF%E5%85%8D%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%88%B0%E5%AD%97%E8%8A%82%E7%9A%84%E8%BD%AC%E6%8D%A2">避免字符串到字节的转换</a></li>
<li><a href="#%E6%8C%87%E5%AE%9A%E5%AE%B9%E5%99%A8%E5%AE%B9%E9%87%8F">指定容器容量</a>
<ul>
<li><a href="#%E6%8C%87%E5%AE%9Amap%E5%AE%B9%E9%87%8F%E6%8F%90%E7%A4%BA">指定Map容量提示</a></li>
<li><a href="#%E6%8C%87%E5%AE%9A%E5%88%87%E7%89%87%E5%AE%B9%E9%87%8F">指定切片容量</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E8%A7%84%E8%8C%83">规范</a>
<ul>
<li><a href="#%E9%81%BF%E5%85%8D%E8%BF%87%E9%95%BF%E7%9A%84%E8%A1%8C">避免过长的行</a></li>
<li><a href="#%E4%B8%80%E8%87%B4%E6%80%A7">一致性</a></li>
<li><a href="#%E7%9B%B8%E4%BC%BC%E7%9A%84%E5%A3%B0%E6%98%8E%E6%94%BE%E5%9C%A8%E4%B8%80%E7%BB%84">相似的声明放在一组</a></li>
<li><a href="#import-%E5%88%86%E7%BB%84">import 分组</a></li>
<li><a href="#%E5%8C%85%E5%90%8D">包名</a></li>
<li><a href="#%E5%87%BD%E6%95%B0%E5%90%8D">函数名</a></li>
<li><a href="#%E5%AF%BC%E5%85%A5%E5%88%AB%E5%90%8D">导入别名</a></li>
<li><a href="#%E5%87%BD%E6%95%B0%E5%88%86%E7%BB%84%E4%B8%8E%E9%A1%BA%E5%BA%8F">函数分组与顺序</a></li>
<li><a href="#%E5%87%8F%E5%B0%91%E5%B5%8C%E5%A5%97">减少嵌套</a></li>
<li><a href="#%E4%B8%8D%E5%BF%85%E8%A6%81%E7%9A%84-else">不必要的 else</a></li>
<li><a href="#%E9%A1%B6%E5%B1%82%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E">顶层变量声明</a></li>
<li><a href="#%E5%AF%B9%E4%BA%8E%E6%9C%AA%E5%AF%BC%E5%87%BA%E7%9A%84%E9%A1%B6%E5%B1%82%E5%B8%B8%E9%87%8F%E5%92%8C%E5%8F%98%E9%87%8F%E4%BD%BF%E7%94%A8_%E4%BD%9C%E4%B8%BA%E5%89%8D%E7%BC%80">对于未导出的顶层常量和变量，使用_作为前缀</a></li>
<li><a href="#%E7%BB%93%E6%9E%84%E4%BD%93%E4%B8%AD%E7%9A%84%E5%B5%8C%E5%85%A5">结构体中的嵌入</a></li>
<li><a href="#%E6%9C%AC%E5%9C%B0%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E">本地变量声明</a></li>
<li><a href="#nil-%E6%98%AF%E4%B8%80%E4%B8%AA%E6%9C%89%E6%95%88%E7%9A%84-slice">nil 是一个有效的 slice</a></li>
<li><a href="#%E7%BC%A9%E5%B0%8F%E5%8F%98%E9%87%8F%E4%BD%9C%E7%94%A8%E5%9F%9F">缩小变量作用域</a></li>
<li><a href="#%E9%81%BF%E5%85%8D%E5%8F%82%E6%95%B0%E8%AF%AD%E4%B9%89%E4%B8%8D%E6%98%8E%E7%A1%AE-avoid-naked-parameters">避免参数语义不明确 (Avoid Naked Parameters)</a></li>
<li><a href="#%E4%BD%BF%E7%94%A8%E5%8E%9F%E5%A7%8B%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AD%97%E9%9D%A2%E5%80%BC%E9%81%BF%E5%85%8D%E8%BD%AC%E4%B9%89">使用原始字符串字面值，避免转义</a></li>
<li><a href="#%E5%88%9D%E5%A7%8B%E5%8C%96%E7%BB%93%E6%9E%84%E4%BD%93">初始化结构体</a>
<ul>
<li><a href="#%E4%BD%BF%E7%94%A8%E5%AD%97%E6%AE%B5%E5%90%8D%E5%88%9D%E5%A7%8B%E5%8C%96%E7%BB%93%E6%9E%84">使用字段名初始化结构</a></li>
<li><a href="#%E7%9C%81%E7%95%A5%E7%BB%93%E6%9E%84%E4%B8%AD%E7%9A%84%E9%9B%B6%E5%80%BC%E5%AD%97%E6%AE%B5">省略结构中的零值字段</a></li>
<li><a href="#%E5%AF%B9%E9%9B%B6%E5%80%BC%E7%BB%93%E6%9E%84%E4%BD%BF%E7%94%A8-var">对零值结构使用 <code v-pre>var</code></a></li>
<li><a href="#%E5%88%9D%E5%A7%8B%E5%8C%96-struct-%E5%BC%95%E7%94%A8">初始化 Struct 引用</a></li>
</ul>
</li>
<li><a href="#%E5%88%9D%E5%A7%8B%E5%8C%96-maps">初始化 Maps</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2-string-format">字符串 string format</a></li>
<li><a href="#%E5%91%BD%E5%90%8D-printf-%E6%A0%B7%E5%BC%8F%E7%9A%84%E5%87%BD%E6%95%B0">命名 Printf 样式的函数</a></li>
</ul>
</li>
<li><a href="#%E7%BC%96%E7%A8%8B%E6%A8%A1%E5%BC%8F">编程模式</a>
<ul>
<li><a href="#%E8%A1%A8%E9%A9%B1%E5%8A%A8%E6%B5%8B%E8%AF%95">表驱动测试</a></li>
<li><a href="#%E5%8A%9F%E8%83%BD%E9%80%89%E9%A1%B9">功能选项</a></li>
</ul>
</li>
<li><a href="#linting">Linting</a>
<ul>
<li><a href="#lint-runners">Lint Runners</a></li>
</ul>
</li>
<li><a href="#stargazers-over-time">Stargazers over time</a></li>
</ul>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>样式 (style) 是支配我们代码的惯例。术语<code v-pre>样式</code>有点用词不当，因为这些约定涵盖的范围不限于由 gofmt 替我们处理的源文件格式。</p>
<p>本指南的目的是通过详细描述在 Uber 编写 Go 代码的注意事项来管理这种复杂性。这些规则的存在是为了使代码库易于管理，同时仍然允许工程师更有效地使用 Go 语言功能。</p>
<p>该指南最初由 <a href="https://github.com/prashantv" target="_blank" rel="noopener noreferrer">Prashant Varanasi<ExternalLinkIcon/></a> 和 <a href="https://github.com/nomis52" target="_blank" rel="noopener noreferrer">Simon Newton<ExternalLinkIcon/></a> 编写，目的是使一些同事能快速使用 Go。多年来，该指南已根据其他人的反馈进行了修改。</p>
<p>本文档记录了我们在 Uber 遵循的 Go 代码中的惯用约定。其中许多是 Go 的通用准则，而其他扩展准则依赖于下面外部的指南：</p>
<ol>
<li><a href="https://golang.org/doc/effective_go.html" target="_blank" rel="noopener noreferrer">Effective Go<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/golang/go/wiki/CommonMistakes" target="_blank" rel="noopener noreferrer">Go Common Mistakes<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/golang/go/wiki/CodeReviewComments" target="_blank" rel="noopener noreferrer">Go Code Review Comments<ExternalLinkIcon/></a></li>
</ol>
<p>我们的目标是使代码示例能够准确地用于Go的两个发布版本 <a href="https://go.dev/doc/devel/release" target="_blank" rel="noopener noreferrer">releases<ExternalLinkIcon/></a>.</p>
<p>所有代码都应该通过<code v-pre>golint</code>和<code v-pre>go vet</code>的检查并无错误。我们建议您将编辑器设置为：</p>
<ul>
<li>保存时运行 <code v-pre>goimports</code></li>
<li>运行 <code v-pre>golint</code> 和 <code v-pre>go vet</code> 检查错误</li>
</ul>
<p>您可以在以下 Go 编辑器工具支持页面中找到更为详细的信息：<br>
<a href="https://github.com/golang/go/wiki/IDEsAndTextEditorPlugins" target="_blank" rel="noopener noreferrer">https://github.com/golang/go/wiki/IDEsAndTextEditorPlugins<ExternalLinkIcon/></a></p>
<h2 id="指导原则" tabindex="-1"><a class="header-anchor" href="#指导原则" aria-hidden="true">#</a> 指导原则</h2>
<h3 id="指向-interface-的指针" tabindex="-1"><a class="header-anchor" href="#指向-interface-的指针" aria-hidden="true">#</a> 指向 interface 的指针</h3>
<p>您几乎不需要指向接口类型的指针。您应该将接口作为值进行传递，在这样的传递过程中，实质上传递的底层数据仍然可以是指针。</p>
<p>接口实质上在底层用两个字段表示：</p>
<ol>
<li>一个指向某些特定类型信息的指针。您可以将其视为&quot;type&quot;。</li>
<li>数据指针。如果存储的数据是指针，则直接存储。如果存储的数据是一个值，则存储指向该值的指针。</li>
</ol>
<p>如果希望接口方法修改基础数据，则必须使用指针传递 (将对象指针赋值给接口变量)。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> F <span class="token keyword">interface</span> <span class="token punctuation">{</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> S1 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s S1<span class="token punctuation">)</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> S2 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>S2<span class="token punctuation">)</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// f1.f() 无法修改底层数据</span>
<span class="token comment">// f2.f() 可以修改底层数据，给接口变量 f2 赋值时使用的是对象指针</span>
<span class="token keyword">var</span> f1 F <span class="token operator">=</span> S1<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> f2 F <span class="token operator">=</span> <span class="token operator">&amp;</span>S2<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="interface-合理性验证" tabindex="-1"><a class="header-anchor" href="#interface-合理性验证" aria-hidden="true">#</a> Interface 合理性验证</h3>
<p>在编译时验证接口的符合性。这包括：</p>
<ul>
<li>将实现特定接口的导出类型作为接口 API 的一部分进行检查</li>
<li>实现同一接口的 (导出和非导出) 类型属于实现类型的集合</li>
<li>任何违反接口合理性检查的场景，都会终止编译，并通知给用户</li>
</ul>
<p>补充：上面 3 条是编译器对接口的检查机制，<br>
大体意思是错误使用接口会在编译期报错。<br>
所以可以利用这个机制让部分问题在编译期暴露。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// 如果 Handler 没有实现 http.Handler，会在运行时报错</span>
<span class="token keyword">type</span> Handler <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>Handler<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>
  w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span>
  r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Handler <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token comment">// 用于触发编译期的接口的合理性检查机制</span>
<span class="token comment">// 如果 Handler 没有实现 http.Handler，会在编译期报错</span>
<span class="token keyword">var</span> <span class="token boolean">_</span> http<span class="token punctuation">.</span>Handler <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">*</span>Handler<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>Handler<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>
  w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span>
  r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>如果 <code v-pre>*Handler</code> 与 <code v-pre>http.Handler</code> 的接口不匹配，<br>
那么语句 <code v-pre>var _ http.Handler = (*Handler)(nil)</code> 将无法编译通过。</p>
<p>赋值的右边应该是断言类型的零值。<br>
对于指针类型（如 <code v-pre>*Handler</code>）、切片和映射，这是 <code v-pre>nil</code>；<br>
对于结构类型，这是空结构。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> LogHandler <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  h   http<span class="token punctuation">.</span>Handler
  log <span class="token operator">*</span>zap<span class="token punctuation">.</span>Logger
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token boolean">_</span> http<span class="token punctuation">.</span>Handler <span class="token operator">=</span> LogHandler<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>h LogHandler<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>
  w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span>
  r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接收器-receiver-与接口" tabindex="-1"><a class="header-anchor" href="#接收器-receiver-与接口" aria-hidden="true">#</a> 接收器 (receiver) 与接口</h3>
<p>使用值接收器的方法既可以通过值调用，也可以通过指针调用。</p>
<p>带指针接收器的方法只能通过指针或 <a href="https://golang.org/ref/spec#Method_values" target="_blank" rel="noopener noreferrer">addressable values<ExternalLinkIcon/></a> 调用。</p>
<p>例如，</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> S <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  data <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s S<span class="token punctuation">)</span> <span class="token function">Read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span>data
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>S<span class="token punctuation">)</span> <span class="token function">Write</span><span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  s<span class="token punctuation">.</span>data <span class="token operator">=</span> str
<span class="token punctuation">}</span>

sVals <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span>S<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">"A"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment">// 你通过值只能调用 Read</span>
sVals<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 这不能编译通过：</span>
<span class="token comment">//  sVals[1].Write("test")</span>

sPtrs <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token operator">*</span>S<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">"A"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment">// 通过指针既可以调用 Read，也可以调用 Write 方法</span>
sPtrs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
sPtrs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类似的，即使方法有了值接收器，也同样可以用指针接收器来满足接口。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> F <span class="token keyword">interface</span> <span class="token punctuation">{</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> S1 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s S1<span class="token punctuation">)</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> S2 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>S2<span class="token punctuation">)</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

s1Val <span class="token operator">:=</span> S1<span class="token punctuation">{</span><span class="token punctuation">}</span>
s1Ptr <span class="token operator">:=</span> <span class="token operator">&amp;</span>S1<span class="token punctuation">{</span><span class="token punctuation">}</span>
s2Val <span class="token operator">:=</span> S2<span class="token punctuation">{</span><span class="token punctuation">}</span>
s2Ptr <span class="token operator">:=</span> <span class="token operator">&amp;</span>S2<span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">var</span> i F
i <span class="token operator">=</span> s1Val
i <span class="token operator">=</span> s1Ptr
i <span class="token operator">=</span> s2Ptr

<span class="token comment">//  下面代码无法通过编译。因为 s2Val 是一个值，而 S2 的 f 方法中没有使用值接收器</span>
<span class="token comment">//   i = s2Val</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://golang.org/doc/effective_go.html" target="_blank" rel="noopener noreferrer">Effective Go<ExternalLinkIcon/></a> 中有一段关于 <a href="https://golang.org/doc/effective_go.html#pointers_vs_values" target="_blank" rel="noopener noreferrer">pointers vs. values<ExternalLinkIcon/></a> 的精彩讲解。</p>
<p>补充：</p>
<ul>
<li>一个类型可以有值接收器方法集和指针接收器方法集
<ul>
<li>值接收器方法集是指针接收器方法集的子集，反之不是</li>
</ul>
</li>
<li>规则
<ul>
<li>值对象只可以使用值接收器方法集</li>
<li>指针对象可以使用 值接收器方法集 + 指针接收器方法集</li>
</ul>
</li>
<li>接口的匹配 (或者叫实现)
<ul>
<li>类型实现了接口的所有方法，叫匹配</li>
<li>具体的讲，要么是类型的值方法集匹配接口，要么是指针方法集匹配接口</li>
</ul>
</li>
</ul>
<p>具体的匹配分两种：</p>
<ul>
<li>值方法集和接口匹配
<ul>
<li>给接口变量赋值的不管是值还是指针对象，都 ok，因为都包含值方法集</li>
</ul>
</li>
<li>指针方法集和接口匹配
<ul>
<li>只能将指针对象赋值给接口变量，因为只有指针方法集和接口匹配</li>
<li>如果将值对象赋值给接口变量，会在编译期报错 (会触发接口合理性检查机制)</li>
</ul>
</li>
</ul>
<p>为啥 i = s2Val 会报错，因为值方法集和接口不匹配。</p>
<h3 id="零值-mutex-是有效的" tabindex="-1"><a class="header-anchor" href="#零值-mutex-是有效的" aria-hidden="true">#</a> 零值 Mutex 是有效的</h3>
<p>零值 <code v-pre>sync.Mutex</code> 和 <code v-pre>sync.RWMutex</code> 是有效的。所以指向 mutex 的指针基本是不必要的。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>mu <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>sync<span class="token punctuation">.</span>Mutex<span class="token punctuation">)</span>
mu<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> mu sync<span class="token punctuation">.</span>Mutex
mu<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>如果你使用结构体指针，mutex 应该作为结构体的非指针字段。即使该结构体不被导出，也不要直接把 mutex 嵌入到结构体中。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> SMap <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  sync<span class="token punctuation">.</span>Mutex

  data <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewSMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>SMap <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&amp;</span>SMap<span class="token punctuation">{</span>
    data<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>SMap<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>k <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  m<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">defer</span> m<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> m<span class="token punctuation">.</span>data<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> SMap <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  mu sync<span class="token punctuation">.</span>Mutex

  data <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewSMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>SMap <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&amp;</span>SMap<span class="token punctuation">{</span>
    data<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>SMap<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>k <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  m<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">defer</span> m<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> m<span class="token punctuation">.</span>data<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
<tr><td>
<p><code v-pre>Mutex</code> 字段， <code v-pre>Lock</code> 和 <code v-pre>Unlock</code> 方法是 <code v-pre>SMap</code> 导出的 API 中不刻意说明的一部分。</p>
 </td><td>
<p>mutex 及其方法是 <code v-pre>SMap</code> 的实现细节，对其调用者不可见。</p>
 </td></tr>
 </tbody></table>
<h3 id="在边界处拷贝-slices-和-maps" tabindex="-1"><a class="header-anchor" href="#在边界处拷贝-slices-和-maps" aria-hidden="true">#</a> 在边界处拷贝 Slices 和 Maps</h3>
<p>slices 和 maps 包含了指向底层数据的指针，因此在需要复制它们时要特别注意。</p>
<h4 id="接收-slices-和-maps" tabindex="-1"><a class="header-anchor" href="#接收-slices-和-maps" aria-hidden="true">#</a> 接收 Slices 和 Maps</h4>
<p>请记住，当 map 或 slice 作为函数参数传入时，如果您存储了对它们的引用，则用户可以对其进行修改。</p>
<table>
<thead><tr><th>Bad</th> <th>Good</th></tr></thead>
<tbody>
<tr>
<td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Driver<span class="token punctuation">)</span> <span class="token function">SetTrips</span><span class="token punctuation">(</span>trips <span class="token punctuation">[</span><span class="token punctuation">]</span>Trip<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  d<span class="token punctuation">.</span>trips <span class="token operator">=</span> trips
<span class="token punctuation">}</span>

trips <span class="token operator">:=</span> <span class="token operator">...</span>
d1<span class="token punctuation">.</span><span class="token function">SetTrips</span><span class="token punctuation">(</span>trips<span class="token punctuation">)</span>

<span class="token comment">// 你是要修改 d1.trips 吗？</span>
trips<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td>
<td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Driver<span class="token punctuation">)</span> <span class="token function">SetTrips</span><span class="token punctuation">(</span>trips <span class="token punctuation">[</span><span class="token punctuation">]</span>Trip<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  d<span class="token punctuation">.</span>trips <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>Trip<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>trips<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token function">copy</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>trips<span class="token punctuation">,</span> trips<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

trips <span class="token operator">:=</span> <span class="token operator">...</span>
d1<span class="token punctuation">.</span><span class="token function">SetTrips</span><span class="token punctuation">(</span>trips<span class="token punctuation">)</span>

<span class="token comment">// 这里我们修改 trips[0]，但不会影响到 d1.trips</span>
trips<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td>
</tr>
</tbody>
</table>
<h4 id="返回-slices-或-maps" tabindex="-1"><a class="header-anchor" href="#返回-slices-或-maps" aria-hidden="true">#</a> 返回 slices 或 maps</h4>
<p>同样，请注意用户对暴露内部状态的 map 或 slice 的修改。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Stats <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  mu sync<span class="token punctuation">.</span>Mutex

  counters <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">// Snapshot 返回当前状态。</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Stats<span class="token punctuation">)</span> <span class="token function">Snapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
  s<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">defer</span> s<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> s<span class="token punctuation">.</span>counters
<span class="token punctuation">}</span>

<span class="token comment">// snapshot 不再受互斥锁保护</span>
<span class="token comment">// 因此对 snapshot 的任何访问都将受到数据竞争的影响</span>
<span class="token comment">// 影响 stats.counters</span>
snapshot <span class="token operator">:=</span> stats<span class="token punctuation">.</span><span class="token function">Snapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Stats <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  mu sync<span class="token punctuation">.</span>Mutex

  counters <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Stats<span class="token punctuation">)</span> <span class="token function">Snapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
  s<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">defer</span> s<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  result <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>counters<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> s<span class="token punctuation">.</span>counters <span class="token punctuation">{</span>
    result<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token comment">// snapshot 现在是一个拷贝</span>
snapshot <span class="token operator">:=</span> stats<span class="token punctuation">.</span><span class="token function">Snapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="使用-defer-释放资源" tabindex="-1"><a class="header-anchor" href="#使用-defer-释放资源" aria-hidden="true">#</a> 使用 defer 释放资源</h3>
<p>使用 defer 释放资源，诸如文件和锁。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>p<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> p<span class="token punctuation">.</span>count <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>
  p<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> p<span class="token punctuation">.</span>count
<span class="token punctuation">}</span>

p<span class="token punctuation">.</span>count<span class="token operator">++</span>
newCount <span class="token operator">:=</span> p<span class="token punctuation">.</span>count
p<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">return</span> newCount

<span class="token comment">// 当有多个 return 分支时，很容易遗忘 unlock</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>p<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">defer</span> p<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> p<span class="token punctuation">.</span>count <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> p<span class="token punctuation">.</span>count
<span class="token punctuation">}</span>

p<span class="token punctuation">.</span>count<span class="token operator">++</span>
<span class="token keyword">return</span> p<span class="token punctuation">.</span>count

<span class="token comment">// 更可读</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>Defer 的开销非常小，只有在您可以证明函数执行时间处于纳秒级的程度时，才应避免这样做。使用 defer 提升可读性是值得的，因为使用它们的成本微不足道。尤其适用于那些不仅仅是简单内存访问的较大的方法，在这些方法中其他计算的资源消耗远超过 <code v-pre>defer</code>。</p>
<h3 id="channel-的-size-要么是-1-要么是无缓冲的" tabindex="-1"><a class="header-anchor" href="#channel-的-size-要么是-1-要么是无缓冲的" aria-hidden="true">#</a> Channel 的 size 要么是 1，要么是无缓冲的</h3>
<p>channel 通常 size 应为 1 或是无缓冲的。默认情况下，channel 是无缓冲的，其 size 为零。任何其他尺寸都必须经过严格的审查。我们需要考虑如何确定大小，考虑是什么阻止了 channel 在高负载下和阻塞写时的写入，以及当这种情况发生时系统逻辑有哪些变化。(翻译解释：按照原文意思是需要界定通道边界，竞态条件，以及逻辑上下文梳理)</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// 应该足以满足任何情况！</span>
c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// 大小：1</span>
c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 或者</span>
<span class="token comment">// 无缓冲 channel，大小为 0</span>
c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="枚举从-1-开始" tabindex="-1"><a class="header-anchor" href="#枚举从-1-开始" aria-hidden="true">#</a> 枚举从 1 开始</h3>
<p>在 Go 中引入枚举的标准方法是声明一个自定义类型和一个使用了 iota 的 const 组。由于变量的默认值为 0，因此通常应以非零值开头枚举。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Operation <span class="token builtin">int</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
  Add Operation <span class="token operator">=</span> <span class="token boolean">iota</span>
  Subtract
  Multiply
<span class="token punctuation">)</span>

<span class="token comment">// Add=0, Subtract=1, Multiply=2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Operation <span class="token builtin">int</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
  Add Operation <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">1</span>
  Subtract
  Multiply
<span class="token punctuation">)</span>

<span class="token comment">// Add=1, Subtract=2, Multiply=3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>在某些情况下，使用零值是有意义的（枚举从零开始），例如，当零值是理想的默认行为时。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> LogOutput <span class="token builtin">int</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
  LogToStdout LogOutput <span class="token operator">=</span> <span class="token boolean">iota</span>
  LogToFile
  LogToRemote
<span class="token punctuation">)</span>

<span class="token comment">// LogToStdout=0, LogToFile=1, LogToRemote=2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-time-处理时间" tabindex="-1"><a class="header-anchor" href="#使用-time-处理时间" aria-hidden="true">#</a> 使用 time 处理时间</h3>
<p>时间处理很复杂。关于时间的错误假设通常包括以下几点。</p>
<ol>
<li>一天有 24 小时</li>
<li>一小时有 60 分钟</li>
<li>一周有七天</li>
<li>一年 365 天</li>
<li><a href="https://infiniteundo.com/post/25326999628/falsehoods-programmers-believe-about-time" target="_blank" rel="noopener noreferrer">还有更多<ExternalLinkIcon/></a></li>
</ol>
<p>例如，<em>1</em> 表示在一个时间点上加上 24 小时并不总是产生一个新的日历日。</p>
<p>因此，在处理时间时始终使用 <a href="https://golang.org/pkg/time/" target="_blank" rel="noopener noreferrer"><code v-pre>&quot;time&quot;</code><ExternalLinkIcon/></a> 包，因为它有助于以更安全、更准确的方式处理这些不正确的假设。</p>
<h4 id="使用-time-time-表达瞬时时间" tabindex="-1"><a class="header-anchor" href="#使用-time-time-表达瞬时时间" aria-hidden="true">#</a> 使用 <code v-pre>time.Time</code> 表达瞬时时间</h4>
<p>在处理时间的瞬间时使用 <a href="https://golang.org/pkg/time/#Time" target="_blank" rel="noopener noreferrer"><code v-pre>time.Time</code><ExternalLinkIcon/></a>，在比较、添加或减去时间时使用 <code v-pre>time.Time</code> 中的方法。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">isActive</span><span class="token punctuation">(</span>now<span class="token punctuation">,</span> start<span class="token punctuation">,</span> stop <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> start <span class="token operator">&lt;=</span> now <span class="token operator">&amp;&amp;</span> now <span class="token operator">&lt;</span> stop
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">isActive</span><span class="token punctuation">(</span>now<span class="token punctuation">,</span> start<span class="token punctuation">,</span> stop time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>start<span class="token punctuation">.</span><span class="token function">Before</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span> <span class="token operator">||</span> start<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> now<span class="token punctuation">.</span><span class="token function">Before</span><span class="token punctuation">(</span>stop<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h4 id="使用-time-duration-表达时间段" tabindex="-1"><a class="header-anchor" href="#使用-time-duration-表达时间段" aria-hidden="true">#</a> 使用 <code v-pre>time.Duration</code> 表达时间段</h4>
<p>在处理时间段时使用 <a href="https://golang.org/pkg/time/#Duration" target="_blank" rel="noopener noreferrer"><code v-pre>time.Duration</code><ExternalLinkIcon/></a> .</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">poll</span><span class="token punctuation">(</span>delay <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span>delay<span class="token punctuation">)</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">poll</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// 是几秒钟还是几毫秒？</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">poll</span><span class="token punctuation">(</span>delay time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">poll</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>回到第一个例子，在一个时间瞬间加上 24 小时，我们用于添加时间的方法取决于意图。如果我们想要下一个日历日 (当前天的下一天) 的同一个时间点，我们应该使用 <a href="https://golang.org/pkg/time/#Time.AddDate" target="_blank" rel="noopener noreferrer"><code v-pre>Time.AddDate</code><ExternalLinkIcon/></a>。但是，如果我们想保证某一时刻比前一时刻晚 24 小时，我们应该使用 <a href="https://golang.org/pkg/time/#Time.Add" target="_blank" rel="noopener noreferrer"><code v-pre>Time.Add</code><ExternalLinkIcon/></a>。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>newDay <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">AddDate</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token comment">/* years */</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token comment">/* months */</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token comment">/* days */</span><span class="token punctuation">)</span>
maybeNewDay <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">24</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Hour<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="对外部系统使用-time-time-和-time-duration" tabindex="-1"><a class="header-anchor" href="#对外部系统使用-time-time-和-time-duration" aria-hidden="true">#</a> 对外部系统使用 <code v-pre>time.Time</code> 和 <code v-pre>time.Duration</code></h4>
<p>尽可能在与外部系统的交互中使用 <code v-pre>time.Duration</code> 和 <code v-pre>time.Time</code> 例如 :</p>
<ul>
<li>
<p>Command-line 标志: <a href="https://golang.org/pkg/flag/" target="_blank" rel="noopener noreferrer"><code v-pre>flag</code><ExternalLinkIcon/></a> 通过 <a href="https://golang.org/pkg/time/#ParseDuration" target="_blank" rel="noopener noreferrer"><code v-pre>time.ParseDuration</code><ExternalLinkIcon/></a> 支持 <code v-pre>time.Duration</code></p>
</li>
<li>
<p>JSON: <a href="https://golang.org/pkg/encoding/json/" target="_blank" rel="noopener noreferrer"><code v-pre>encoding/json</code><ExternalLinkIcon/></a> 通过其 <a href="https://golang.org/pkg/time/#Time.UnmarshalJSON" target="_blank" rel="noopener noreferrer"><code v-pre>UnmarshalJSON</code> method<ExternalLinkIcon/></a> 方法支持将 <code v-pre>time.Time</code> 编码为 <a href="https://tools.ietf.org/html/rfc3339" target="_blank" rel="noopener noreferrer">RFC 3339<ExternalLinkIcon/></a> 字符串</p>
</li>
<li>
<p>SQL: <a href="https://golang.org/pkg/database/sql/" target="_blank" rel="noopener noreferrer"><code v-pre>database/sql</code><ExternalLinkIcon/></a> 支持将 <code v-pre>DATETIME</code> 或 <code v-pre>TIMESTAMP</code> 列转换为 <code v-pre>time.Time</code>，如果底层驱动程序支持则返回</p>
</li>
<li>
<p>YAML: <a href="https://godoc.org/gopkg.in/yaml.v2" target="_blank" rel="noopener noreferrer"><code v-pre>gopkg.in/yaml.v2</code><ExternalLinkIcon/></a> 支持将 <code v-pre>time.Time</code> 作为 <a href="https://tools.ietf.org/html/rfc3339" target="_blank" rel="noopener noreferrer">RFC 3339<ExternalLinkIcon/></a> 字符串，并通过 <a href="https://golang.org/pkg/time/#ParseDuration" target="_blank" rel="noopener noreferrer"><code v-pre>time.ParseDuration</code><ExternalLinkIcon/></a> 支持 <code v-pre>time.Duration</code>。</p>
</li>
</ul>
<p>当不能在这些交互中使用 <code v-pre>time.Duration</code> 时，请使用 <code v-pre>int</code> 或 <code v-pre>float64</code>，并在字段名称中包含单位。</p>
<p>例如，由于 <code v-pre>encoding/json</code> 不支持 <code v-pre>time.Duration</code>，因此该单位包含在字段的名称中。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// {"interval": 2}</span>
<span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Interval <span class="token builtin">int</span> <span class="token string">`json:"interval"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// {"intervalMillis": 2000}</span>
<span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  IntervalMillis <span class="token builtin">int</span> <span class="token string">`json:"intervalMillis"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>当在这些交互中不能使用 <code v-pre>time.Time</code> 时，除非达成一致，否则使用 <code v-pre>string</code> 和 <a href="https://tools.ietf.org/html/rfc3339" target="_blank" rel="noopener noreferrer">RFC 3339<ExternalLinkIcon/></a> 中定义的格式时间戳。默认情况下，<a href="https://golang.org/pkg/time/#Time.UnmarshalText" target="_blank" rel="noopener noreferrer"><code v-pre>Time.UnmarshalText</code><ExternalLinkIcon/></a> 使用此格式，并可通过 <a href="https://golang.org/pkg/time/#RFC3339" target="_blank" rel="noopener noreferrer"><code v-pre>time.RFC3339</code><ExternalLinkIcon/></a> 在 <code v-pre>Time.Format</code> 和 <code v-pre>time.Parse</code> 中使用。</p>
<p>尽管这在实践中并不成问题，但请记住，<code v-pre>&quot;time&quot;</code> 包不支持解析闰秒时间戳（<a href="https://github.com/golang/go/issues/8728" target="_blank" rel="noopener noreferrer">8728<ExternalLinkIcon/></a>），也不在计算中考虑闰秒（<a href="https://github.com/golang/go/issues/15190" target="_blank" rel="noopener noreferrer">15190<ExternalLinkIcon/></a>）。如果您比较两个时间瞬间，则差异将不包括这两个瞬间之间可能发生的闰秒。</p>
<!-- TODO: section on String methods for enums -->
<h3 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h3>
<h4 id="错误类型" tabindex="-1"><a class="header-anchor" href="#错误类型" aria-hidden="true">#</a> 错误类型</h4>
<p>声明错误的选项很少。<br>
在选择最适合您的用例的选项之前，请考虑以下事项。</p>
<ul>
<li>调用者是否需要匹配错误以便他们可以处理它？<br>
如果是，我们必须通过声明顶级错误变量或自定义类型来支持 <a href="https://golang.org/pkg/errors/#Is" target="_blank" rel="noopener noreferrer"><code v-pre>errors.Is</code><ExternalLinkIcon/></a> 或 <a href="https://golang.org/pkg/errors/#As" target="_blank" rel="noopener noreferrer"><code v-pre>errors.As</code><ExternalLinkIcon/></a> 函数。</li>
<li>错误消息是否为静态字符串，还是需要上下文信息的动态字符串？<br>
如果是静态字符串，我们可以使用 <a href="https://golang.org/pkg/errors/#New" target="_blank" rel="noopener noreferrer"><code v-pre>errors.New</code><ExternalLinkIcon/></a>，但对于后者，我们必须使用 <a href="https://golang.org/pkg/fmt/#Errorf" target="_blank" rel="noopener noreferrer"><code v-pre>fmt.Errorf</code><ExternalLinkIcon/></a> 或自定义错误类型。</li>
<li>我们是否正在传递由下游函数返回的新错误？<br>
如果是这样，请参阅<a href="#%E9%94%99%E8%AF%AF%E5%8C%85%E8%A3%85">错误包装部分</a>。</li>
</ul>
<table>
<thead>
<tr>
<th>错误匹配？</th>
<th>错误消息</th>
<th>指导</th>
</tr>
</thead>
<tbody>
<tr>
<td>No</td>
<td>static</td>
<td><a href="https://golang.org/pkg/errors/#New" target="_blank" rel="noopener noreferrer"><code v-pre>errors.New</code><ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>No</td>
<td>dynamic</td>
<td><a href="https://golang.org/pkg/fmt/#Errorf" target="_blank" rel="noopener noreferrer"><code v-pre>fmt.Errorf</code><ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>Yes</td>
<td>static</td>
<td>top-level <code v-pre>var</code> with <a href="https://golang.org/pkg/errors/#New" target="_blank" rel="noopener noreferrer"><code v-pre>errors.New</code><ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>Yes</td>
<td>dynamic</td>
<td>custom <code v-pre>error</code> type</td>
</tr>
</tbody>
</table>
<p>例如，<br>
使用 <a href="https://golang.org/pkg/errors/#New" target="_blank" rel="noopener noreferrer"><code v-pre>errors.New</code><ExternalLinkIcon/></a> 表示带有静态字符串的错误。<br>
如果调用者需要匹配并处理此错误，则将此错误导出为变量以支持将其与 <code v-pre>errors.Is</code> 匹配。</p>
<table>
<thead><tr><th>无错误匹配</th><th>错误匹配</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// package foo</span>

<span class="token keyword">func</span> <span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"could not open"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// package bar</span>

<span class="token keyword">if</span> err <span class="token operator">:=</span> foo<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token comment">// Can't handle the error.</span>
  <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">"unknown error"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// package foo</span>

<span class="token keyword">var</span> ErrCouldNotOpen <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"could not open"</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> ErrCouldNotOpen
<span class="token punctuation">}</span>

<span class="token comment">// package bar</span>

<span class="token keyword">if</span> err <span class="token operator">:=</span> foo<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> foo<span class="token punctuation">.</span>ErrCouldNotOpen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// handle the error</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">"unknown error"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>对于动态字符串的错误，<br>
如果调用者不需要匹配它，则使用 <a href="https://golang.org/pkg/fmt/#Errorf" target="_blank" rel="noopener noreferrer"><code v-pre>fmt.Errorf</code><ExternalLinkIcon/></a>，<br>
如果调用者确实需要匹配它，则自定义 <code v-pre>error</code>。</p>
<table>
<thead><tr><th>无错误匹配</th><th>错误匹配</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// package foo</span>

<span class="token keyword">func</span> <span class="token function">Open</span><span class="token punctuation">(</span>file <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"file %q not found"</span><span class="token punctuation">,</span> file<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// package bar</span>

<span class="token keyword">if</span> err <span class="token operator">:=</span> foo<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"testfile.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token comment">// Can't handle the error.</span>
  <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">"unknown error"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// package foo</span>

<span class="token keyword">type</span> NotFoundError <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  File <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>NotFoundError<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"file %q not found"</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>File<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Open</span><span class="token punctuation">(</span>file <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&amp;</span>NotFoundError<span class="token punctuation">{</span>File<span class="token punctuation">:</span> file<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// package bar</span>

<span class="token keyword">if</span> err <span class="token operator">:=</span> foo<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"testfile.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> notFound <span class="token operator">*</span>NotFoundError
  <span class="token keyword">if</span> errors<span class="token punctuation">.</span><span class="token function">As</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token operator">&amp;</span>notFound<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// handle the error</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">"unknown error"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>请注意，如果您从包中导出错误变量或类型，<br>
它们将成为包的公共 API 的一部分。</p>
<h4 id="错误包装" tabindex="-1"><a class="header-anchor" href="#错误包装" aria-hidden="true">#</a> 错误包装</h4>
<p>如果调用其他方法时出现错误, 通常有三种处理方式可以选择：</p>
<ul>
<li>将原始错误原样返回</li>
<li>使用 <code v-pre>fmt.Errorf</code> 搭配 <code v-pre>%w</code> 将错误添加进上下文后返回</li>
<li>使用 <code v-pre>fmt.Errorf</code> 搭配 <code v-pre>%v</code> 将错误添加进上下文后返回</li>
</ul>
<p>如果没有要添加的其他上下文，则按原样返回原始错误。<br>
这将保留原始错误类型和消息。<br>
这非常适合底层错误消息有足够的信息来追踪它来自哪里的错误。</p>
<p>否则，尽可能在错误消息中添加上下文<br>
这样就不会出现诸如“连接被拒绝”之类的模糊错误，<br>
您会收到更多有用的错误，例如“调用服务 foo：连接被拒绝”。</p>
<p>使用 <code v-pre>fmt.Errorf</code> 为你的错误添加上下文，<br>
根据调用者是否应该能够匹配和提取根本原因，在 <code v-pre>%w</code> 或 <code v-pre>%v</code> 动词之间进行选择。</p>
<ul>
<li>如果调用者应该可以访问底层错误，请使用 <code v-pre>%w</code>。<br>
对于大多数包装错误，这是一个很好的默认值，<br>
但请注意，调用者可能会开始依赖此行为。因此，对于包装错误是已知<code v-pre>var</code>或类型的情况，请将其作为函数契约的一部分进行记录和测试。</li>
<li>使用 <code v-pre>%v</code> 来混淆底层错误。<br>
调用者将无法匹配它，但如果需要，您可以在将来切换到 <code v-pre>%w</code>。</li>
</ul>
<p>在为返回的错误添加上下文时，通过避免使用&quot;failed to&quot;之类的短语来保持上下文简洁，当错误通过堆栈向上渗透时，它会一层一层被堆积起来：</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>s<span class="token punctuation">,</span> err <span class="token operator">:=</span> store<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span>
        <span class="token string">"failed to create new store: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>s<span class="token punctuation">,</span> err <span class="token operator">:=</span> store<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span>
        <span class="token string">"new store: %w"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr><tr><td>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>failed to x: failed to y: failed to create new store: the error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td><td>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>x: y: new store: the error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>然而，一旦错误被发送到另一个系统，应该清楚消息是一个错误（例如<code v-pre>err</code> 标签或日志中的&quot;Failed&quot;前缀）。</p>
<p>另见 <a href="https://dave.cheney.net/2016/04/27/dont-just-check-errors-handle-them-gracefully" target="_blank" rel="noopener noreferrer">不要只检查错误，优雅地处理它们<ExternalLinkIcon/></a>。</p>
<h4 id="错误命名" tabindex="-1"><a class="header-anchor" href="#错误命名" aria-hidden="true">#</a> 错误命名</h4>
<p>对于存储为全局变量的错误值，<br>
根据是否导出，使用前缀 <code v-pre>Err</code> 或 <code v-pre>err</code>。<br>
请看指南 <a href="#%E5%AF%B9%E4%BA%8E%E6%9C%AA%E5%AF%BC%E5%87%BA%E7%9A%84%E9%A1%B6%E5%B1%82%E5%B8%B8%E9%87%8F%E5%92%8C%E5%8F%98%E9%87%8F%E4%BD%BF%E7%94%A8_%E4%BD%9C%E4%B8%BA%E5%89%8D%E7%BC%80">对于未导出的顶层常量和变量，使用_作为前缀</a>。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
  <span class="token comment">// 导出以下两个错误，以便此包的用户可以将它们与 errors.Is 进行匹配。</span>

  ErrBrokenLink <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"link is broken"</span><span class="token punctuation">)</span>
  ErrCouldNotOpen <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"could not open"</span><span class="token punctuation">)</span>

  <span class="token comment">// 这个错误没有被导出，因为我们不想让它成为我们公共 API 的一部分。 我们可能仍然在带有错误的包内使用它。</span>

  errNotFound <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"not found"</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于自定义错误类型，请改用后缀 <code v-pre>Error</code>。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// 同样，这个错误被导出，以便这个包的用户可以将它与 errors.As 匹配。</span>

<span class="token keyword">type</span> NotFoundError <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  File <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>NotFoundError<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"file %q not found"</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>File<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 并且这个错误没有被导出，因为我们不想让它成为公共 API 的一部分。 我们仍然可以在带有 errors.As 的包中使用它。</span>
<span class="token keyword">type</span> resolveError <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Path <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>resolveError<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"resolve %q"</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>Path<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="处理断言失败" tabindex="-1"><a class="header-anchor" href="#处理断言失败" aria-hidden="true">#</a> 处理断言失败</h3>
<p><a href="https://golang.org/ref/spec#Type_assertions" target="_blank" rel="noopener noreferrer">类型断言<ExternalLinkIcon/></a> 将会在检测到不正确的类型时，以单一返回值形式返回 panic。 因此，请始终使用“逗号 ok”习语。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>t <span class="token operator">:=</span> i<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>t<span class="token punctuation">,</span> ok <span class="token operator">:=</span> i<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
  <span class="token comment">// 优雅地处理错误</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<!-- TODO: There are a few situations where the single assignment form is
fine. -->
<h3 id="不要使用-panic" tabindex="-1"><a class="header-anchor" href="#不要使用-panic" aria-hidden="true">#</a> 不要使用 panic</h3>
<p>在生产环境中运行的代码必须避免出现 panic。panic 是 <a href="https://en.wikipedia.org/wiki/Cascading_failure" target="_blank" rel="noopener noreferrer">级联失败<ExternalLinkIcon/></a> 的主要根源 。如果发生错误，该函数必须返回错误，并允许调用方决定如何处理它。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">run</span><span class="token punctuation">(</span>args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">"an argument is required"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">run</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">run</span><span class="token punctuation">(</span>args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"an argument is required"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">run</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>panic/recover 不是错误处理策略。仅当发生不可恢复的事情（例如：nil 引用）时，程序才必须 panic。程序初始化是一个例外：程序启动时应使程序中止的不良情况可能会引起 panic。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> _statusTemplate <span class="token operator">=</span> template<span class="token punctuation">.</span><span class="token function">Must</span><span class="token punctuation">(</span>template<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">"_statusHTML"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>即使在测试代码中，也优先使用<code v-pre>t.Fatal</code>或者<code v-pre>t.FailNow</code>而不是 panic 来确保失败被标记。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// func TestFoo(t *testing.T)</span>

f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">CreateTemp</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"test"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">"failed to set up test"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// func TestFoo(t *testing.T)</span>

f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">CreateTemp</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"test"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">"failed to set up test"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<!-- TODO: Explain how to use _test packages. -->
<h3 id="使用-go-uber-org-atomic" tabindex="-1"><a class="header-anchor" href="#使用-go-uber-org-atomic" aria-hidden="true">#</a> 使用 <a href="http://go.uber.org/atomic" target="_blank" rel="noopener noreferrer">go.uber.org/atomic<ExternalLinkIcon/></a></h3>
<p>使用 <a href="https://golang.org/pkg/sync/atomic/" target="_blank" rel="noopener noreferrer">sync/atomic<ExternalLinkIcon/></a> 包的原子操作对原始类型 (<code v-pre>int32</code>, <code v-pre>int64</code>等）进行操作，因为很容易忘记使用原子操作来读取或修改变量。</p>
<p><a href="https://godoc.org/go.uber.org/atomic" target="_blank" rel="noopener noreferrer">go.uber.org/atomic<ExternalLinkIcon/></a> 通过隐藏基础类型为这些操作增加了类型安全性。此外，它包括一个方便的<code v-pre>atomic.Bool</code>类型。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> foo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  running <span class="token builtin">int32</span>  <span class="token comment">// atomic</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>f<span class="token operator">*</span> foo<span class="token punctuation">)</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> atomic<span class="token punctuation">.</span><span class="token function">SwapInt32</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>f<span class="token punctuation">.</span>running<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
     <span class="token comment">// already running…</span>
     <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// start the Foo</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>f <span class="token operator">*</span>foo<span class="token punctuation">)</span> <span class="token function">isRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> f<span class="token punctuation">.</span>running <span class="token operator">==</span> <span class="token number">1</span>  <span class="token comment">// race!</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> foo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  running atomic<span class="token punctuation">.</span>Bool
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>f <span class="token operator">*</span>foo<span class="token punctuation">)</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> f<span class="token punctuation">.</span>running<span class="token punctuation">.</span><span class="token function">Swap</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// already running…</span>
     <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// start the Foo</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>f <span class="token operator">*</span>foo<span class="token punctuation">)</span> <span class="token function">isRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> f<span class="token punctuation">.</span>running<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="避免可变全局变量" tabindex="-1"><a class="header-anchor" href="#避免可变全局变量" aria-hidden="true">#</a> 避免可变全局变量</h3>
<p>使用选择依赖注入方式避免改变全局变量。<br>
既适用于函数指针又适用于其他值类型</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// sign.go</span>
<span class="token keyword">var</span> _timeNow <span class="token operator">=</span> time<span class="token punctuation">.</span>Now
<span class="token keyword">func</span> <span class="token function">sign</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  now <span class="token operator">:=</span> <span class="token function">_timeNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token function">signWithTime</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> now<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// sign.go</span>
<span class="token keyword">type</span> signer <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  now <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> time<span class="token punctuation">.</span>Time
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">newSigner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>signer <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&amp;</span>signer<span class="token punctuation">{</span>
    now<span class="token punctuation">:</span> time<span class="token punctuation">.</span>Now<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>signer<span class="token punctuation">)</span> <span class="token function">Sign</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  now <span class="token operator">:=</span> s<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token function">signWithTime</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> now<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// sign_test.go</span>
<span class="token keyword">func</span> <span class="token function">TestSign</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  oldTimeNow <span class="token operator">:=</span> _timeNow
  _timeNow <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> time<span class="token punctuation">.</span>Time <span class="token punctuation">{</span>
    <span class="token keyword">return</span> someFixedTime
  <span class="token punctuation">}</span>
  <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> _timeNow <span class="token operator">=</span> oldTimeNow <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> want<span class="token punctuation">,</span> <span class="token function">sign</span><span class="token punctuation">(</span>give<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// sign_test.go</span>
<span class="token keyword">func</span> <span class="token function">TestSigner</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  s <span class="token operator">:=</span> <span class="token function">newSigner</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  s<span class="token punctuation">.</span>now <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> time<span class="token punctuation">.</span>Time <span class="token punctuation">{</span>
    <span class="token keyword">return</span> someFixedTime
  <span class="token punctuation">}</span>
  assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> want<span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token function">Sign</span><span class="token punctuation">(</span>give<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="避免在公共结构中嵌入类型" tabindex="-1"><a class="header-anchor" href="#避免在公共结构中嵌入类型" aria-hidden="true">#</a> 避免在公共结构中嵌入类型</h3>
<p>这些嵌入的类型泄漏实现细节、禁止类型演化和模糊的文档。</p>
<p>假设您使用共享的 <code v-pre>AbstractList</code> 实现了多种列表类型，请避免在具体的列表实现中嵌入 <code v-pre>AbstractList</code>。<br>
相反，只需手动将方法写入具体的列表，该列表将委托给抽象列表。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> AbstractList <span class="token keyword">struct</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 添加将实体添加到列表中。</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>AbstractList<span class="token punctuation">)</span> <span class="token function">Add</span><span class="token punctuation">(</span>e Entity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token comment">// 移除从列表中移除实体。</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>AbstractList<span class="token punctuation">)</span> <span class="token function">Remove</span><span class="token punctuation">(</span>e Entity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// ConcreteList 是一个实体列表。</span>
<span class="token keyword">type</span> ConcreteList <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  <span class="token operator">*</span>AbstractList
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// ConcreteList 是一个实体列表。</span>
<span class="token keyword">type</span> ConcreteList <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  list <span class="token operator">*</span>AbstractList
<span class="token punctuation">}</span>
<span class="token comment">// 添加将实体添加到列表中。</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>ConcreteList<span class="token punctuation">)</span> <span class="token function">Add</span><span class="token punctuation">(</span>e Entity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  l<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 移除从列表中移除实体。</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>ConcreteList<span class="token punctuation">)</span> <span class="token function">Remove</span><span class="token punctuation">(</span>e Entity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  l<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>Go 允许 <a href="https://golang.org/doc/effective_go.html#embedding" target="_blank" rel="noopener noreferrer">类型嵌入<ExternalLinkIcon/></a> 作为继承和组合之间的折衷。外部类型获取嵌入类型的方法的隐式副本。默认情况下，这些方法委托给嵌入实例的同一方法。</p>
<p>结构还获得与类型同名的字段。<br>
所以，如果嵌入的类型是 public，那么字段是 public。为了保持向后兼容性，外部类型的每个未来版本都必须保留嵌入类型。</p>
<p>很少需要嵌入类型。<br>
这是一种方便，可以帮助您避免编写冗长的委托方法。</p>
<p>即使嵌入兼容的抽象列表 <em>interface</em>，而不是结构体，这将为开发人员提供更大的灵活性来改变未来，但仍然泄露了具体列表使用抽象实现的细节。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// AbstractList 是各种实体列表的通用实现。</span>
<span class="token keyword">type</span> AbstractList <span class="token keyword">interface</span> <span class="token punctuation">{</span>
  <span class="token function">Add</span><span class="token punctuation">(</span>Entity<span class="token punctuation">)</span>
  <span class="token function">Remove</span><span class="token punctuation">(</span>Entity<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// ConcreteList 是一个实体列表。</span>
<span class="token keyword">type</span> ConcreteList <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  AbstractList
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// ConcreteList 是一个实体列表。</span>
<span class="token keyword">type</span> ConcreteList <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  list AbstractList
<span class="token punctuation">}</span>
<span class="token comment">// 添加将实体添加到列表中。</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>ConcreteList<span class="token punctuation">)</span> <span class="token function">Add</span><span class="token punctuation">(</span>e Entity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  l<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 移除从列表中移除实体。</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>ConcreteList<span class="token punctuation">)</span> <span class="token function">Remove</span><span class="token punctuation">(</span>e Entity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  l<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>无论是使用嵌入结构还是嵌入接口，都会限制类型的演化。</p>
<ul>
<li>向嵌入接口添加方法是一个破坏性的改变。</li>
<li>从嵌入结构体删除方法是一个破坏性改变。</li>
<li>删除嵌入类型是一个破坏性的改变。</li>
<li>即使使用满足相同接口的类型替换嵌入类型，也是一个破坏性的改变。</li>
</ul>
<p>尽管编写这些委托方法是乏味的，但是额外的工作隐藏了实现细节，留下了更多的更改机会，还消除了在文档中发现完整列表接口的间接性操作。</p>
<h3 id="避免使用内置名称" tabindex="-1"><a class="header-anchor" href="#避免使用内置名称" aria-hidden="true">#</a> 避免使用内置名称</h3>
<p>Go <a href="https://golang.org/ref/spec" target="_blank" rel="noopener noreferrer">语言规范<ExternalLinkIcon/></a> 概述了几个内置的，<br>
不应在 Go 项目中使用的 <a href="https://golang.org/ref/spec#Predeclared_identifiers" target="_blank" rel="noopener noreferrer">预先声明的标识符<ExternalLinkIcon/></a>。</p>
<p>根据上下文的不同，将这些标识符作为名称重复使用，<br>
将在当前作用域（或任何嵌套作用域）中隐藏原始标识符，或者混淆代码。<br>
在最好的情况下，编译器会报错；在最坏的情况下，这样的代码可能会引入潜在的、难以恢复的错误。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> <span class="token builtin">error</span> <span class="token builtin">string</span>
<span class="token comment">// `error` 作用域隐式覆盖</span>

<span class="token comment">// or</span>

<span class="token keyword">func</span> <span class="token function">handleErrorMessage</span><span class="token punctuation">(</span><span class="token builtin">error</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// `error` 作用域隐式覆盖</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> errorMessage <span class="token builtin">string</span>
<span class="token comment">// `error` 指向内置的非覆盖</span>

<span class="token comment">// or</span>

<span class="token keyword">func</span> <span class="token function">handleErrorMessage</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// `error` 指向内置的非覆盖</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Foo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// 虽然这些字段在技术上不构成阴影，但`error`或`string`字符串的重映射现在是不明确的。</span>
    <span class="token builtin">error</span>  <span class="token builtin">error</span>
    <span class="token builtin">string</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>f Foo<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    <span class="token comment">// `error` 和 `f.error` 在视觉上是相似的</span>
    <span class="token keyword">return</span> f<span class="token punctuation">.</span><span class="token builtin">error</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>f Foo<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token comment">// `string` and `f.string` 在视觉上是相似的</span>
    <span class="token keyword">return</span> f<span class="token punctuation">.</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Foo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// `error` and `string` 现在是明确的。</span>
    err <span class="token builtin">error</span>
    str <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>f Foo<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> f<span class="token punctuation">.</span>err
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>f Foo<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> f<span class="token punctuation">.</span>str
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>注意，编译器在使用预先分隔的标识符时不会生成错误，<br>
但是诸如<code v-pre>go vet</code>之类的工具会正确地指出这些和其他情况下的隐式问题。</p>
<h3 id="避免使用-init" tabindex="-1"><a class="header-anchor" href="#避免使用-init" aria-hidden="true">#</a> 避免使用 <code v-pre>init()</code></h3>
<p>尽可能避免使用<code v-pre>init()</code>。当<code v-pre>init()</code>是不可避免或可取的，代码应先尝试：</p>
<ol>
<li>无论程序环境或调用如何，都要完全确定。</li>
<li>避免依赖于其他<code v-pre>init()</code>函数的顺序或副作用。虽然<code v-pre>init()</code>顺序是明确的，但代码可以更改，<br>
因此<code v-pre>init()</code>函数之间的关系可能会使代码变得脆弱和容易出错。</li>
<li>避免访问或操作全局或环境状态，如机器信息、环境变量、工作目录、程序参数/输入等。</li>
<li>避免<code v-pre>I/O</code>，包括文件系统、网络和系统调用。</li>
</ol>
<p>不能满足这些要求的代码可能属于要作为<code v-pre>main()</code>调用的一部分（或程序生命周期中的其他地方），<br>
或者作为<code v-pre>main()</code>本身的一部分写入。特别是，打算由其他程序使用的库应该特别注意完全确定性，<br>
而不是执行“init magic”</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Foo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> _defaultFoo Foo
<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _defaultFoo <span class="token operator">=</span> Foo<span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> _defaultFoo <span class="token operator">=</span> Foo<span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token comment">// or，为了更好的可测试性：</span>
<span class="token keyword">var</span> _defaultFoo <span class="token operator">=</span> <span class="token function">defaultFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">defaultFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Foo <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Foo<span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> _config Config
<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Bad: 基于当前目录</span>
    cwd<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Getwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// Bad: I/O</span>
    raw<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span>
        path<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>cwd<span class="token punctuation">,</span> <span class="token string">"config"</span><span class="token punctuation">,</span> <span class="token string">"config.yaml"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    yaml<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>raw<span class="token punctuation">,</span> <span class="token operator">&amp;</span>_config<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">loadConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Config <span class="token punctuation">{</span>
    cwd<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Getwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// handle err</span>
    raw<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span>
        path<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>cwd<span class="token punctuation">,</span> <span class="token string">"config"</span><span class="token punctuation">,</span> <span class="token string">"config.yaml"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token comment">// handle err</span>
    <span class="token keyword">var</span> config Config
    yaml<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>raw<span class="token punctuation">,</span> <span class="token operator">&amp;</span>config<span class="token punctuation">)</span>
    <span class="token keyword">return</span> config
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>考虑到上述情况，在某些情况下，<code v-pre>init()</code>可能更可取或是必要的，可能包括：</p>
<ul>
<li>
<p>不能表示为单个赋值的复杂表达式。</p>
</li>
<li>
<p>可插入的钩子，如<code v-pre>database/sql</code>、编码类型注册表等。</p>
</li>
<li>
<p>对 <a href="https://cloud.google.com/functions/docs/bestpractices/tips#use_global_variables_to_reuse_objects_in_future_invocations" target="_blank" rel="noopener noreferrer">Google Cloud Functions<ExternalLinkIcon/></a> 和其他形式的确定性预计算的优化。</p>
</li>
</ul>
<h3 id="追加时优先指定切片容量" tabindex="-1"><a class="header-anchor" href="#追加时优先指定切片容量" aria-hidden="true">#</a> 追加时优先指定切片容量</h3>
<p>追加时优先指定切片容量</p>
<p>在尽可能的情况下，在初始化要追加的切片时为<code v-pre>make()</code>提供一个容量值。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> n<span class="token operator">++</span> <span class="token punctuation">{</span>
  data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">{</span>
    data <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> n<span class="token operator">++</span> <span class="token punctuation">{</span>
  data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span>
  <span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">{</span>
    data <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
<tr><td>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>BenchmarkBad-4    100000000    2.48s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td><td>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>BenchmarkGood-4   100000000    0.21s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="主函数退出方式-exit" tabindex="-1"><a class="header-anchor" href="#主函数退出方式-exit" aria-hidden="true">#</a> 主函数退出方式 (Exit)</h3>
<p>Go 程序使用 <a href="https://golang.org/pkg/os/#Exit" target="_blank" rel="noopener noreferrer"><code v-pre>os.Exit</code><ExternalLinkIcon/></a> 或者 <a href="https://golang.org/pkg/log/#Fatal" target="_blank" rel="noopener noreferrer"><code v-pre>log.Fatal*</code><ExternalLinkIcon/></a> 立即退出 (使用<code v-pre>panic</code>不是退出程序的好方法，请 <a href="#%E4%B8%8D%E8%A6%81%E4%BD%BF%E7%94%A8-panic">不要使用 panic</a>。)</p>
<p><strong>仅在<code v-pre>main()</code></strong> 中调用其中一个 <code v-pre>os.Exit</code> 或者 <code v-pre>log.Fatal*</code>。所有其他函数应将错误返回到信号失败中。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  body <span class="token operator">:=</span> <span class="token function">readFile</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">readFile</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  b<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  body<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">readFile</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">readFile</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">,</span> err
  <span class="token punctuation">}</span>
  b<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">,</span> err
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>原则上：退出的具有多种功能的程序存在一些问题：</p>
<ul>
<li>不明显的控制流：任何函数都可以退出程序，因此很难对控制流进行推理。</li>
<li>难以测试：退出程序的函数也将退出调用它的测试。这使得函数很难测试，并引入了跳过 <code v-pre>go test</code> 尚未运行的其他测试的风险。</li>
<li>跳过清理：当函数退出程序时，会跳过已经进入<code v-pre>defer</code>队列里的函数调用。这增加了跳过重要清理任务的风险。</li>
</ul>
<h4 id="一次性退出" tabindex="-1"><a class="header-anchor" href="#一次性退出" aria-hidden="true">#</a> 一次性退出</h4>
<p>如果可能的话，你的<code v-pre>main（）</code>函数中 <strong>最多一次</strong> 调用 <code v-pre>os.Exit</code>或者<code v-pre>log.Fatal</code>。如果有多个错误场景停止程序执行，请将该逻辑放在单独的函数下并从中返回错误。<br>
这会缩短 <code v-pre>main()</code> 函数，并将所有关键业务逻辑放入一个单独的、可测试的函数中。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  args <span class="token operator">:=</span> os<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">"missing file"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  name <span class="token operator">:=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">defer</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 如果我们调用 log.Fatal 在这条线之后</span>
  <span class="token comment">// f.Close 将会被执行。</span>
  b<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  args <span class="token operator">:=</span> os<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"missing file"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  name <span class="token operator">:=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> err
  <span class="token punctuation">}</span>
  <span class="token keyword">defer</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  b<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> err
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="在序列化结构中使用字段标记" tabindex="-1"><a class="header-anchor" href="#在序列化结构中使用字段标记" aria-hidden="true">#</a> 在序列化结构中使用字段标记</h3>
<p>任何序列化到JSON、YAML、，<br>
或其他支持基于标记的字段命名的格式应使用相关标记进行注释。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Stock <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Price <span class="token builtin">int</span>
  Name  <span class="token builtin">string</span>
<span class="token punctuation">}</span>
bytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>Stock<span class="token punctuation">{</span>
  Price<span class="token punctuation">:</span> <span class="token number">137</span><span class="token punctuation">,</span>
  Name<span class="token punctuation">:</span>  <span class="token string">"UBER"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Stock <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Price <span class="token builtin">int</span>    <span class="token string">`json:"price"`</span>
  Name  <span class="token builtin">string</span> <span class="token string">`json:"name"`</span>
  <span class="token comment">// Safe to rename Name to Symbol.</span>
<span class="token punctuation">}</span>
bytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>Stock<span class="token punctuation">{</span>
  Price<span class="token punctuation">:</span> <span class="token number">137</span><span class="token punctuation">,</span>
  Name<span class="token punctuation">:</span>  <span class="token string">"UBER"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>理论上：<br>
结构的序列化形式是不同系统之间的契约。<br>
对序列化表单结构（包括字段名）的更改会破坏此约定。在标记中指定字段名使约定明确，<br>
它还可以通过重构或重命名字段来防止意外违反约定。</p>
<h3 id="不要一劳永逸地使用-goroutine" tabindex="-1"><a class="header-anchor" href="#不要一劳永逸地使用-goroutine" aria-hidden="true">#</a> 不要一劳永逸地使用 goroutine</h3>
<p>Goroutines 是轻量级的，但它们不是免费的：<br>
至少，它们会为堆栈和 CPU 的调度消耗内存。<br>
虽然这些成本对于 Goroutines 的使用来说很小，但当它们在没有受控生命周期的情况下大量生成时会导致严重的性能问题。<br>
具有非托管生命周期的 Goroutines 也可能导致其他问题，例如防止未使用的对象被垃圾回收并保留不再使用的资源。</p>
<p>因此，不要在代码中泄漏 goroutine。<br>
使用 <a href="https://pkg.go.dev/go.uber.org/goleak" target="_blank" rel="noopener noreferrer">go.uber.org/goleak<ExternalLinkIcon/></a><br>
来测试可能产生 goroutine 的包内的 goroutine 泄漏。</p>
<p>一般来说，每个 goroutine:</p>
<ul>
<li>必须有一个可预测的停止运行时间； 或者</li>
<li>必须有一种方法可以向 goroutine 发出信号它应该停止</li>
</ul>
<p>在这两种情况下，都必须有一种方式代码来阻塞并等待 goroutine 完成。</p>
<p>For example:</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
  stop <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 告诉 goroutine 停止</span>
  done <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 告诉我们 goroutine 退出了</span>
<span class="token punctuation">)</span>
<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
  ticker <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTicker</span><span class="token punctuation">(</span>delay<span class="token punctuation">)</span>
  <span class="token keyword">defer</span> ticker<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token keyword">select</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>tick<span class="token punctuation">.</span>C<span class="token punctuation">:</span>
      <span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>stop<span class="token punctuation">:</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 其它...</span>
<span class="token function">close</span><span class="token punctuation">(</span>stop<span class="token punctuation">)</span>  <span class="token comment">// 指示 goroutine 停止</span>
<span class="token operator">&lt;-</span>done       <span class="token comment">// and wait for it to exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
<tr><td>
<p>没有办法阻止这个 goroutine。这将一直运行到应用程序退出。</p>
</td><td>
<p>这个 goroutine 可以用 <code v-pre>close(stop)</code>,<br>
我们可以等待它退出 <code v-pre>&lt;-done</code>.</p>
</td></tr>
</tbody></table>
<h4 id="等待-goroutines-退出" tabindex="-1"><a class="header-anchor" href="#等待-goroutines-退出" aria-hidden="true">#</a> 等待 goroutines 退出</h4>
<p>给定一个由系统生成的 goroutine，<br>
必须有一种方案能等待 goroutine 的退出。<br>
有两种常用的方法可以做到这一点：</p>
<ul>
<li>
<p>使用 <code v-pre>sync.WaitGroup</code>.<br>
如果您要等待多个 goroutine，请执行此操作</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// To wait for all to finish:</span>
wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>添加另一个 <code v-pre>chan struct{}</code>，goroutine 完成后会关闭它。<br>
如果只有一个 goroutine，请执行此操作。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// To wait for the goroutine to finish:</span>
<span class="token operator">&lt;-</span>done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="不要在-init-使用-goroutines" tabindex="-1"><a class="header-anchor" href="#不要在-init-使用-goroutines" aria-hidden="true">#</a> 不要在 <code v-pre>init()</code> 使用 goroutines</h4>
<p><code v-pre>init()</code> 函数不应该产生 goroutines。<br>
另请参阅 <a href="#%E9%81%BF%E5%85%8D%E4%BD%BF%E7%94%A8-init">避免使用 init()</a>。</p>
<p>如果一个包需要一个后台 goroutine，<br>
它必须公开一个负责管理 goroutine 生命周期的对象。<br>
该对象必须提供一个方法（<code v-pre>Close</code>、<code v-pre>Stop</code>、<code v-pre>Shutdown</code> 等）来指示后台 goroutine 停止并等待它的退出。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">go</span> <span class="token function">doWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">doWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Worker <span class="token keyword">struct</span><span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">NewWorker</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token operator">*</span>Worker <span class="token punctuation">{</span>
  w <span class="token operator">:=</span> <span class="token operator">&amp;</span>Worker<span class="token punctuation">{</span>
    stop<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    done<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">go</span> w<span class="token punctuation">.</span><span class="token function">doWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>w <span class="token operator">*</span>Worker<span class="token punctuation">)</span> <span class="token function">doWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>w<span class="token punctuation">.</span>done<span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>w<span class="token punctuation">.</span>stop<span class="token punctuation">:</span>
      <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Shutdown 告诉 worker 停止</span>
<span class="token comment">// 并等待它完成。</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>w <span class="token operator">*</span>Worker<span class="token punctuation">)</span> <span class="token function">Shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">close</span><span class="token punctuation">(</span>w<span class="token punctuation">.</span>stop<span class="token punctuation">)</span>
  <span class="token operator">&lt;-</span>w<span class="token punctuation">.</span>done
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
<tr><td>
<p>当用户导出这个包时，无条件地生成一个后台 goroutine。<br>
用户无法控制 goroutine 或停止它的方法。</p>
</td><td>
<p>仅当用户请求时才生成工作人员。<br>
提供一种关闭工作器的方法，以便用户可以释放工作器使用的资源。</p>
<p>请注意，如果工作人员管理多个 goroutine，则应使用<code v-pre>WaitGroup</code>。<br>
请参阅 <a href="#%E7%AD%89%E5%BE%85-goroutines-%E9%80%80%E5%87%BA">等待 goroutines 退出</a>。</p>
</td></tr>
</tbody></table>
<h2 id="性能" tabindex="-1"><a class="header-anchor" href="#性能" aria-hidden="true">#</a> 性能</h2>
<p>性能方面的特定准则只适用于高频场景。</p>
<h3 id="优先使用-strconv-而不是-fmt" tabindex="-1"><a class="header-anchor" href="#优先使用-strconv-而不是-fmt" aria-hidden="true">#</a> 优先使用 strconv 而不是 fmt</h3>
<p>将原语转换为字符串或从字符串转换时，<code v-pre>strconv</code>速度比<code v-pre>fmt</code>快。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  s <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprint</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  s <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
<tr><td>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>BenchmarkFmtSprint-4    143 ns/op    2 allocs/op
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td><td>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>BenchmarkStrconv-4    64.2 ns/op    1 allocs/op
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="避免字符串到字节的转换" tabindex="-1"><a class="header-anchor" href="#避免字符串到字节的转换" aria-hidden="true">#</a> 避免字符串到字节的转换</h3>
<p>不要反复从固定字符串创建字节 slice。相反，请执行一次转换并捕获结果。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">"Hello world"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">"Hello world"</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td>
</tr>
<tr><td>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>BenchmarkBad-4   50000000   22.2 ns/op
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td><td>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>BenchmarkGood-4  500000000   3.25 ns/op
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="指定容器容量" tabindex="-1"><a class="header-anchor" href="#指定容器容量" aria-hidden="true">#</a> 指定容器容量</h3>
<p>尽可能指定容器容量，以便为容器预先分配内存。这将在添加元素时最小化后续分配（通过复制和调整容器大小）。</p>
<h4 id="指定map容量提示" tabindex="-1"><a class="header-anchor" href="#指定map容量提示" aria-hidden="true">#</a> 指定Map容量提示</h4>
<p>在尽可能的情况下，在使用 <code v-pre>make()</code> 初始化的时候提供容量信息</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span>T1<span class="token punctuation">]</span>T2<span class="token punctuation">,</span> hint<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>向<code v-pre>make()</code>提供容量提示会在初始化时尝试调整 map 的大小，这将减少在将元素添加到 map 时为 map 重新分配内存。</p>
<p>注意，与 slices 不同。map capacity 提示并不保证完全的抢占式分配，而是用于估计所需的 hashmap bucket 的数量。<br>
因此，在将元素添加到 map 时，甚至在指定 map 容量时，仍可能发生分配。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>os<span class="token punctuation">.</span>FileInfo<span class="token punctuation">)</span>

files<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadDir</span><span class="token punctuation">(</span><span class="token string">"./files"</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> f <span class="token operator">:=</span> <span class="token keyword">range</span> files <span class="token punctuation">{</span>
    m<span class="token punctuation">[</span>f<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> f
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>
files<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadDir</span><span class="token punctuation">(</span><span class="token string">"./files"</span><span class="token punctuation">)</span>

m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>os<span class="token punctuation">.</span>FileInfo<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> f <span class="token operator">:=</span> <span class="token keyword">range</span> files <span class="token punctuation">{</span>
    m<span class="token punctuation">[</span>f<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> f
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
<tr><td>
<p><code v-pre>m</code> 是在没有大小提示的情况下创建的； 在运行时可能会有更多分配。</p>
</td><td>
<p><code v-pre>m</code> 是有大小提示创建的；在运行时可能会有更少的分配。</p>
</td></tr>
</tbody></table>
<h4 id="指定切片容量" tabindex="-1"><a class="header-anchor" href="#指定切片容量" aria-hidden="true">#</a> 指定切片容量</h4>
<p>在尽可能的情况下，在使用<code v-pre>make()</code>初始化切片时提供容量信息，特别是在追加切片时。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>T<span class="token punctuation">,</span> length<span class="token punctuation">,</span> capacity<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>与 maps 不同，slice capacity 不是一个提示：编译器将为提供给<code v-pre>make()</code>的 slice 的容量分配足够的内存，<br>
这意味着后续的 append()`操作将导致零分配（直到 slice 的长度与容量匹配，在此之后，任何 append 都可能调整大小以容纳其他元素）。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> n<span class="token operator">++</span> <span class="token punctuation">{</span>
  data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">{</span>
    data <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> n<span class="token operator">++</span> <span class="token punctuation">{</span>
  data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span>
  <span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">{</span>
    data <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
<tr><td>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>BenchmarkBad-4    100000000    2.48s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td><td>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>BenchmarkGood-4   100000000    0.21s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h2 id="规范" tabindex="-1"><a class="header-anchor" href="#规范" aria-hidden="true">#</a> 规范</h2>
<h3 id="避免过长的行" tabindex="-1"><a class="header-anchor" href="#避免过长的行" aria-hidden="true">#</a> 避免过长的行</h3>
<p>避免使用需要读者水平滚动或过度转动头部的代码行。</p>
<p>我们建议将行长度限制为 <strong>99 characters</strong> (99 个字符).<br>
作者应该在达到这个限制之前换行，<br>
但这不是硬性限制。<br>
允许代码超过此限制。</p>
<h3 id="一致性" tabindex="-1"><a class="header-anchor" href="#一致性" aria-hidden="true">#</a> 一致性</h3>
<p>本文中概述的一些标准都是客观性的评估，是根据场景、上下文、或者主观性的判断；</p>
<p>但是最重要的是，<strong>保持一致</strong>.</p>
<p>一致性的代码更容易维护、是更合理的、需要更少的学习成本、并且随着新的约定出现或者出现错误后更容易迁移、更新、修复 bug</p>
<p>相反，在一个代码库中包含多个完全不同或冲突的代码风格会导致维护成本开销、不确定性和认知偏差。所有这些都会直接导致速度降低、代码审查痛苦、而且增加 bug 数量。</p>
<p>将这些标准应用于代码库时，建议在 package（或更大）级别进行更改，子包级别的应用程序通过将多个样式引入到同一代码中，违反了上述关注点。</p>
<h3 id="相似的声明放在一组" tabindex="-1"><a class="header-anchor" href="#相似的声明放在一组" aria-hidden="true">#</a> 相似的声明放在一组</h3>
<p>Go 语言支持将相似的声明放在一个组内。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">"a"</span>
<span class="token keyword">import</span> <span class="token string">"b"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"a"</span>
  <span class="token string">"b"</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>这同样适用于常量、变量和类型声明：</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span>

<span class="token keyword">type</span> Area <span class="token builtin">float64</span>
<span class="token keyword">type</span> Volume <span class="token builtin">float64</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
  a <span class="token operator">=</span> <span class="token number">1</span>
  b <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
  a <span class="token operator">=</span> <span class="token number">1</span>
  b <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> <span class="token punctuation">(</span>
  Area <span class="token builtin">float64</span>
  Volume <span class="token builtin">float64</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>仅将相关的声明放在一组。不要将不相关的声明放在一组。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Operation <span class="token builtin">int</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
  Add Operation <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">1</span>
  Subtract
  Multiply
  EnvVar <span class="token operator">=</span> <span class="token string">"MY_ENV"</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Operation <span class="token builtin">int</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
  Add Operation <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">1</span>
  Subtract
  Multiply
<span class="token punctuation">)</span>

<span class="token keyword">const</span> EnvVar <span class="token operator">=</span> <span class="token string">"MY_ENV"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>分组使用的位置没有限制，例如：你可以在函数内部使用它们：</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  red <span class="token operator">:=</span> color<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token number">0xff0000</span><span class="token punctuation">)</span>
  green <span class="token operator">:=</span> color<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token number">0x00ff00</span><span class="token punctuation">)</span>
  blue <span class="token operator">:=</span> color<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token number">0x0000ff</span><span class="token punctuation">)</span>

  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> <span class="token punctuation">(</span>
    red   <span class="token operator">=</span> color<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token number">0xff0000</span><span class="token punctuation">)</span>
    green <span class="token operator">=</span> color<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token number">0x00ff00</span><span class="token punctuation">)</span>
    blue  <span class="token operator">=</span> color<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token number">0x0000ff</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>例外：如果变量声明与其他变量相邻，则应将变量声明（尤其是函数内部的声明）分组在一起。对一起声明的变量执行此操作，即使它们不相关。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>client<span class="token punctuation">)</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  caller <span class="token operator">:=</span> c<span class="token punctuation">.</span>name
  format <span class="token operator">:=</span> <span class="token string">"json"</span>
  timeout <span class="token operator">:=</span> <span class="token number">5</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second
  <span class="token keyword">var</span> err <span class="token builtin">error</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>client<span class="token punctuation">)</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> <span class="token punctuation">(</span>
    caller  <span class="token operator">=</span> c<span class="token punctuation">.</span>name
    format  <span class="token operator">=</span> <span class="token string">"json"</span>
    timeout <span class="token operator">=</span> <span class="token number">5</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second
    err <span class="token builtin">error</span>
  <span class="token punctuation">)</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="import-分组" tabindex="-1"><a class="header-anchor" href="#import-分组" aria-hidden="true">#</a> import 分组</h3>
<p>导入应该分为两组：</p>
<ul>
<li>标准库</li>
<li>其他库</li>
</ul>
<p>默认情况下，这是 goimports 应用的分组。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"fmt"</span>
  <span class="token string">"os"</span>
  <span class="token string">"go.uber.org/atomic"</span>
  <span class="token string">"golang.org/x/sync/errgroup"</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"fmt"</span>
  <span class="token string">"os"</span>

  <span class="token string">"go.uber.org/atomic"</span>
  <span class="token string">"golang.org/x/sync/errgroup"</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="包名" tabindex="-1"><a class="header-anchor" href="#包名" aria-hidden="true">#</a> 包名</h3>
<p>当命名包时，请按下面规则选择一个名称：</p>
<ul>
<li>全部小写。没有大写或下划线。</li>
<li>大多数使用命名导入的情况下，不需要重命名。</li>
<li>简短而简洁。请记住，在每个使用的地方都完整标识了该名称。</li>
<li>不用复数。例如<code v-pre>net/url</code>，而不是<code v-pre>net/urls</code>。</li>
<li>不要用“common”，“util”，“shared”或“lib”。这些是不好的，信息量不足的名称。</li>
</ul>
<p>另请参阅 <a href="https://blog.golang.org/package-names" target="_blank" rel="noopener noreferrer">Go 包命名规则<ExternalLinkIcon/></a> 和 <a href="https://rakyll.org/style-packages/" target="_blank" rel="noopener noreferrer">Go 包样式指南<ExternalLinkIcon/></a>.</p>
<h3 id="函数名" tabindex="-1"><a class="header-anchor" href="#函数名" aria-hidden="true">#</a> 函数名</h3>
<p>我们遵循 Go 社区关于使用 <a href="https://golang.org/doc/effective_go.html#mixed-caps" target="_blank" rel="noopener noreferrer">MixedCaps 作为函数名<ExternalLinkIcon/></a> 的约定。有一个例外，为了对相关的测试用例进行分组，函数名可能包含下划线，如：<code v-pre>TestMyFunction_WhatIsBeingTested</code>.</p>
<h3 id="导入别名" tabindex="-1"><a class="header-anchor" href="#导入别名" aria-hidden="true">#</a> 导入别名</h3>
<p>如果程序包名称与导入路径的最后一个元素不匹配，则必须使用导入别名。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"net/http"</span>

  client <span class="token string">"example.com/client-go"</span>
  trace <span class="token string">"example.com/trace/v2"</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在所有其他情况下，除非导入之间有直接冲突，否则应避免导入别名。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"fmt"</span>
  <span class="token string">"os"</span>

  nettrace <span class="token string">"golang.net/x/trace"</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"fmt"</span>
  <span class="token string">"os"</span>
  <span class="token string">"runtime/trace"</span>

  nettrace <span class="token string">"golang.net/x/trace"</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="函数分组与顺序" tabindex="-1"><a class="header-anchor" href="#函数分组与顺序" aria-hidden="true">#</a> 函数分组与顺序</h3>
<ul>
<li>函数应按粗略的调用顺序排序。</li>
<li>同一文件中的函数应按接收者分组。</li>
</ul>
<p>因此，导出的函数应先出现在文件中，放在<code v-pre>struct</code>, <code v-pre>const</code>, <code v-pre>var</code>定义的后面。</p>
<p>在定义类型之后，但在接收者的其余方法之前，可能会出现一个 <code v-pre>newXYZ()</code>/<code v-pre>NewXYZ()</code></p>
<p>由于函数是按接收者分组的，因此普通工具函数应在文件末尾出现。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>something<span class="token punctuation">)</span> <span class="token function">Cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">calcCost</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>weights<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> something <span class="token keyword">struct</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">calcCost</span><span class="token punctuation">(</span>n <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>something<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">newSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>something <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>something<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> something <span class="token keyword">struct</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">newSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>something <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>something<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>something<span class="token punctuation">)</span> <span class="token function">Cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">calcCost</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>weights<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>something<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">calcCost</span><span class="token punctuation">(</span>n <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="减少嵌套" tabindex="-1"><a class="header-anchor" href="#减少嵌套" aria-hidden="true">#</a> 减少嵌套</h3>
<p>代码应通过尽可能先处理错误情况/特殊情况并尽早返回或继续循环来减少嵌套。减少嵌套多个级别的代码的代码量。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> data <span class="token punctuation">{</span>
  <span class="token keyword">if</span> v<span class="token punctuation">.</span>F1 <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
    v <span class="token operator">=</span> <span class="token function">process</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      v<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> err
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Invalid v: %v"</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> data <span class="token punctuation">{</span>
  <span class="token keyword">if</span> v<span class="token punctuation">.</span>F1 <span class="token operator">!=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Invalid v: %v"</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token keyword">continue</span>
  <span class="token punctuation">}</span>

  v <span class="token operator">=</span> <span class="token function">process</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> err
  <span class="token punctuation">}</span>
  v<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="不必要的-else" tabindex="-1"><a class="header-anchor" href="#不必要的-else" aria-hidden="true">#</a> 不必要的 else</h3>
<p>如果在 if 的两个分支中都设置了变量，则可以将其替换为单个 if。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> a <span class="token builtin">int</span>
<span class="token keyword">if</span> b <span class="token punctuation">{</span>
  a <span class="token operator">=</span> <span class="token number">100</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>a <span class="token operator">:=</span> <span class="token number">10</span>
<span class="token keyword">if</span> b <span class="token punctuation">{</span>
  a <span class="token operator">=</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="顶层变量声明" tabindex="-1"><a class="header-anchor" href="#顶层变量声明" aria-hidden="true">#</a> 顶层变量声明</h3>
<p>在顶层，使用标准<code v-pre>var</code>关键字。请勿指定类型，除非它与表达式的类型不同。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> _s <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token function">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">"A"</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> _s <span class="token operator">=</span> <span class="token function">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 由于 F 已经明确了返回一个字符串类型，因此我们没有必要显式指定_s 的类型</span>
<span class="token comment">// 还是那种类型</span>

<span class="token keyword">func</span> <span class="token function">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">"A"</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>如果表达式的类型与所需的类型不完全匹配，请指定类型。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> myError <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>myError<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">"error"</span> <span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> myError <span class="token punctuation">{</span> <span class="token keyword">return</span> myError<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>

<span class="token keyword">var</span> _e <span class="token builtin">error</span> <span class="token operator">=</span> <span class="token function">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// F 返回一个 myError 类型的实例，但是我们要 error 类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对于未导出的顶层常量和变量-使用-作为前缀" tabindex="-1"><a class="header-anchor" href="#对于未导出的顶层常量和变量-使用-作为前缀" aria-hidden="true">#</a> 对于未导出的顶层常量和变量，使用_作为前缀</h3>
<p>在未导出的顶级<code v-pre>vars</code>和<code v-pre>consts</code>， 前面加上前缀_，以使它们在使用时明确表示它们是全局符号。</p>
<p>基本依据：顶级变量和常量具有包范围作用域。使用通用名称可能很容易在其他文件中意外使用错误的值。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// foo.go</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
  defaultPort <span class="token operator">=</span> <span class="token number">8080</span>
  defaultUser <span class="token operator">=</span> <span class="token string">"user"</span>
<span class="token punctuation">)</span>

<span class="token comment">// bar.go</span>

<span class="token keyword">func</span> <span class="token function">Bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  defaultPort <span class="token operator">:=</span> <span class="token number">9090</span>
  <span class="token operator">...</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Default port"</span><span class="token punctuation">,</span> defaultPort<span class="token punctuation">)</span>

  <span class="token comment">// We will not see a compile error if the first line of</span>
  <span class="token comment">// Bar() is deleted.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// foo.go</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
  _defaultPort <span class="token operator">=</span> <span class="token number">8080</span>
  _defaultUser <span class="token operator">=</span> <span class="token string">"user"</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p><strong>例外</strong>：未导出的错误值可以使用不带下划线的前缀 <code v-pre>err</code>。 参见<a href="#%E9%94%99%E8%AF%AF%E5%91%BD%E5%90%8D">错误命名</a>。</p>
<h3 id="结构体中的嵌入" tabindex="-1"><a class="header-anchor" href="#结构体中的嵌入" aria-hidden="true">#</a> 结构体中的嵌入</h3>
<p>嵌入式类型（例如 mutex）应位于结构体内的字段列表的顶部，并且必须有一个空行将嵌入式字段与常规字段分隔开。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Client <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  version <span class="token builtin">int</span>
  http<span class="token punctuation">.</span>Client
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Client <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  http<span class="token punctuation">.</span>Client

  version <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>内嵌应该提供切实的好处，比如以语义上合适的方式添加或增强功能。<br>
它应该在对用户没有任何不利影响的情况下使用。（另请参见：<a href="#%E9%81%BF%E5%85%8D%E5%9C%A8%E5%85%AC%E5%85%B1%E7%BB%93%E6%9E%84%E4%B8%AD%E5%B5%8C%E5%85%A5%E7%B1%BB%E5%9E%8B">避免在公共结构中嵌入类型</a>）。</p>
<p>例外：即使在未导出类型中，Mutex 也不应该作为内嵌字段。另请参见：<a href="#%E9%9B%B6%E5%80%BC-mutex-%E6%98%AF%E6%9C%89%E6%95%88%E7%9A%84">零值 Mutex 是有效的</a>。</p>
<p>嵌入 <strong>不应该</strong>:</p>
<ul>
<li>纯粹是为了美观或方便。</li>
<li>使外部类型更难构造或使用。</li>
<li>影响外部类型的零值。如果外部类型有一个有用的零值，则在嵌入内部类型之后应该仍然有一个有用的零值。</li>
<li>作为嵌入内部类型的副作用，从外部类型公开不相关的函数或字段。</li>
<li>公开未导出的类型。</li>
<li>影响外部类型的复制形式。</li>
<li>更改外部类型的 API 或类型语义。</li>
<li>嵌入内部类型的非规范形式。</li>
<li>公开外部类型的实现详细信息。</li>
<li>允许用户观察或控制类型内部。</li>
<li>通过包装的方式改变内部函数的一般行为，这种包装方式会给用户带来一些意料之外情况。</li>
</ul>
<p>简单地说，有意识地和有目的地嵌入。一种很好的测试体验是，<br>
&quot;是否所有这些导出的内部方法/字段都将直接添加到外部类型&quot;<br>
如果答案是<code v-pre>some</code>或<code v-pre>no</code>，不要嵌入内部类型 - 而是使用字段。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> A <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// Bad: A.Lock() and A.Unlock() 现在可用</span>
    <span class="token comment">// 不提供任何功能性好处，并允许用户控制有关 A 的内部细节。</span>
    sync<span class="token punctuation">.</span>Mutex
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> countingWriteCloser <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// Good: Write() 在外层提供用于特定目的，</span>
    <span class="token comment">// 并且委托工作到内部类型的 Write() 中。</span>
    io<span class="token punctuation">.</span>WriteCloser
    count <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>w <span class="token operator">*</span>countingWriteCloser<span class="token punctuation">)</span> <span class="token function">Write</span><span class="token punctuation">(</span>bs <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    w<span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token function">len</span><span class="token punctuation">(</span>bs<span class="token punctuation">)</span>
    <span class="token keyword">return</span> w<span class="token punctuation">.</span>WriteCloser<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>bs<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Book <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// Bad: 指针更改零值的有用性</span>
    io<span class="token punctuation">.</span>ReadWriter
    <span class="token comment">// other fields</span>
<span class="token punctuation">}</span>
<span class="token comment">// later</span>
<span class="token keyword">var</span> b Book
b<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>  <span class="token comment">// panic: nil pointer</span>
b<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// panic: nil pointer</span>
b<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token comment">// panic: nil pointer</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Book <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// Good: 有用的零值</span>
    bytes<span class="token punctuation">.</span>Buffer
    <span class="token comment">// other fields</span>
<span class="token punctuation">}</span>
<span class="token comment">// later</span>
<span class="token keyword">var</span> b Book
b<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>  <span class="token comment">// ok</span>
b<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// ok</span>
b<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token comment">// ok</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Client <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    sync<span class="token punctuation">.</span>Mutex
    sync<span class="token punctuation">.</span>WaitGroup
    bytes<span class="token punctuation">.</span>Buffer
    url<span class="token punctuation">.</span>URL
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Client <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    mtx sync<span class="token punctuation">.</span>Mutex
    wg  sync<span class="token punctuation">.</span>WaitGroup
    buf bytes<span class="token punctuation">.</span>Buffer
    url url<span class="token punctuation">.</span>URL
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="本地变量声明" tabindex="-1"><a class="header-anchor" href="#本地变量声明" aria-hidden="true">#</a> 本地变量声明</h3>
<p>如果将变量明确设置为某个值，则应使用短变量声明形式 (<code v-pre>:=</code>)。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">"foo"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>s <span class="token operator">:=</span> <span class="token string">"foo"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>但是，在某些情况下，<code v-pre>var</code> 使用关键字时默认值会更清晰。例如，<a href="https://github.com/golang/go/wiki/CodeReviewComments#declaring-empty-slices" target="_blank" rel="noopener noreferrer">声明空切片<ExternalLinkIcon/></a>。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">f</span><span class="token punctuation">(</span>list <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  filtered <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> list <span class="token punctuation">{</span>
    <span class="token keyword">if</span> v <span class="token operator">></span> <span class="token number">10</span> <span class="token punctuation">{</span>
      filtered <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>filtered<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">f</span><span class="token punctuation">(</span>list <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> filtered <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
  <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> list <span class="token punctuation">{</span>
    <span class="token keyword">if</span> v <span class="token operator">></span> <span class="token number">10</span> <span class="token punctuation">{</span>
      filtered <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>filtered<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="nil-是一个有效的-slice" tabindex="-1"><a class="header-anchor" href="#nil-是一个有效的-slice" aria-hidden="true">#</a> nil 是一个有效的 slice</h3>
<p><code v-pre>nil</code> 是一个有效的长度为 0 的 slice，这意味着，</p>
<ul>
<li>
<p>您不应明确返回长度为零的切片。应该返回<code v-pre>nil</code> 来代替。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">if</span> x <span class="token operator">==</span> <span class="token string">""</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">if</span> x <span class="token operator">==</span> <span class="token string">""</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
</li>
<li>
<p>要检查切片是否为空，请始终使用<code v-pre>len(s) == 0</code>。而非 <code v-pre>nil</code>。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span>s <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> s <span class="token operator">==</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span>s <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
</li>
<li>
<p>零值切片（用<code v-pre>var</code>声明的切片）可立即使用，无需调用<code v-pre>make()</code>创建。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// or, nums := make([]int)</span>

<span class="token keyword">if</span> add1 <span class="token punctuation">{</span>
  nums <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> add2 <span class="token punctuation">{</span>
  nums <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>

<span class="token keyword">if</span> add1 <span class="token punctuation">{</span>
  nums <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> add2 <span class="token punctuation">{</span>
  nums <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
</li>
</ul>
<p>记住，虽然 nil 切片是有效的切片，但它不等于长度为 0 的切片（一个为 nil，另一个不是），并且在不同的情况下（例如序列化），这两个切片的处理方式可能不同。</p>
<h3 id="缩小变量作用域" tabindex="-1"><a class="header-anchor" href="#缩小变量作用域" aria-hidden="true">#</a> 缩小变量作用域</h3>
<p>如果有可能，尽量缩小变量作用范围。除非它与 <a href="#%E5%87%8F%E5%B0%91%E5%B5%8C%E5%A5%97">减少嵌套</a>的规则冲突。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">WriteFile</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token number">0644</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">if</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">WriteFile</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token number">0644</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>如果需要在 if 之外使用函数调用的结果，则不应尝试缩小范围。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">if</span> data<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  err <span class="token operator">=</span> cfg<span class="token punctuation">.</span><span class="token function">Decode</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> err
  <span class="token punctuation">}</span>

  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>cfg<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>data<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> err
<span class="token punctuation">}</span>

<span class="token keyword">if</span> err <span class="token operator">:=</span> cfg<span class="token punctuation">.</span><span class="token function">Decode</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> err
<span class="token punctuation">}</span>

fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>cfg<span class="token punctuation">)</span>
<span class="token keyword">return</span> <span class="token boolean">nil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="避免参数语义不明确-avoid-naked-parameters" tabindex="-1"><a class="header-anchor" href="#避免参数语义不明确-avoid-naked-parameters" aria-hidden="true">#</a> 避免参数语义不明确 (Avoid Naked Parameters)</h3>
<p>函数调用中的<code v-pre>意义不明确的参数</code>可能会损害可读性。当参数名称的含义不明显时，请为参数添加 C 样式注释 (<code v-pre>/* ... */</code>)</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// func printInfo(name string, isLocal, done bool)</span>

<span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token string">"foo"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// func printInfo(name string, isLocal, done bool)</span>

<span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token string">"foo"</span><span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* isLocal */</span><span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* done */</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>对于上面的示例代码，还有一种更好的处理方式是将上面的 <code v-pre>bool</code> 类型换成自定义类型。将来，该参数可以支持不仅仅局限于两个状态（true/false）。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Region <span class="token builtin">int</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
  UnknownRegion Region <span class="token operator">=</span> <span class="token boolean">iota</span>
  Local
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Status <span class="token builtin">int</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
  StatusReady Status<span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">1</span>
  StatusDone
  <span class="token comment">// Maybe we will have a StatusInProgress in the future.</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">printInfo</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> region Region<span class="token punctuation">,</span> status Status<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用原始字符串字面值-避免转义" tabindex="-1"><a class="header-anchor" href="#使用原始字符串字面值-避免转义" aria-hidden="true">#</a> 使用原始字符串字面值，避免转义</h3>
<p>Go 支持使用 <a href="https://golang.org/ref/spec#raw_string_lit" target="_blank" rel="noopener noreferrer">原始字符串字面值<ExternalLinkIcon/></a>，也就是 &quot; ` &quot; 来表示原生字符串，在需要转义的场景下，我们应该尽量使用这种方案来替换。</p>
<p>可以跨越多行并包含引号。使用这些字符串可以避免更难阅读的手工转义的字符串。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>wantError <span class="token operator">:=</span> <span class="token string">"unknown name:\"test\""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>wantError <span class="token operator">:=</span> <span class="token string">`unknown error:"test"`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="初始化结构体" tabindex="-1"><a class="header-anchor" href="#初始化结构体" aria-hidden="true">#</a> 初始化结构体</h3>
<h4 id="使用字段名初始化结构" tabindex="-1"><a class="header-anchor" href="#使用字段名初始化结构" aria-hidden="true">#</a> 使用字段名初始化结构</h4>
<p>初始化结构时，几乎应该始终指定字段名。目前由 <a href="https://golang.org/cmd/vet/" target="_blank" rel="noopener noreferrer"><code v-pre>go vet</code><ExternalLinkIcon/></a> 强制执行。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>k <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token string">"John"</span><span class="token punctuation">,</span> <span class="token string">"Doe"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>k <span class="token operator">:=</span> User<span class="token punctuation">{</span>
    FirstName<span class="token punctuation">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
    LastName<span class="token punctuation">:</span> <span class="token string">"Doe"</span><span class="token punctuation">,</span>
    Admin<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>例外：当有 3 个或更少的字段时，测试表中的字段名<em>may</em>可以省略。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>tests <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">struct</span><span class="token punctuation">{</span>
  op Operation
  want <span class="token builtin">string</span>
<span class="token punctuation">}</span><span class="token punctuation">{</span>
  <span class="token punctuation">{</span>Add<span class="token punctuation">,</span> <span class="token string">"add"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>Subtract<span class="token punctuation">,</span> <span class="token string">"subtract"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="省略结构中的零值字段" tabindex="-1"><a class="header-anchor" href="#省略结构中的零值字段" aria-hidden="true">#</a> 省略结构中的零值字段</h4>
<p>初始化具有字段名的结构时，除非提供有意义的上下文，否则忽略值为零的字段。<br>
也就是，让我们自动将这些设置为零值</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>user <span class="token operator">:=</span> User<span class="token punctuation">{</span>
  FirstName<span class="token punctuation">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
  LastName<span class="token punctuation">:</span> <span class="token string">"Doe"</span><span class="token punctuation">,</span>
  MiddleName<span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  Admin<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>user <span class="token operator">:=</span> User<span class="token punctuation">{</span>
  FirstName<span class="token punctuation">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
  LastName<span class="token punctuation">:</span> <span class="token string">"Doe"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>这有助于通过省略该上下文中的默认值来减少阅读的障碍。只指定有意义的值。</p>
<p>在字段名提供有意义上下文的地方包含零值。例如，<a href="#%E8%A1%A8%E9%A9%B1%E5%8A%A8%E6%B5%8B%E8%AF%95">表驱动测试</a> 中的测试用例可以受益于字段的名称，即使它们是零值的。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>tests <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">struct</span><span class="token punctuation">{</span>
  give <span class="token builtin">string</span>
  want <span class="token builtin">int</span>
<span class="token punctuation">}</span><span class="token punctuation">{</span>
  <span class="token punctuation">{</span>give<span class="token punctuation">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span> want<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="对零值结构使用-var" tabindex="-1"><a class="header-anchor" href="#对零值结构使用-var" aria-hidden="true">#</a> 对零值结构使用 <code v-pre>var</code></h4>
<p>如果在声明中省略了结构的所有字段，请使用 <code v-pre>var</code> 声明结构。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>user <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> user User
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>这将零值结构与那些具有类似于为 <a href="#%E5%88%9D%E5%A7%8B%E5%8C%96-maps">初始化 Maps</a> 创建的，区别于非零值字段的结构区分开来，<br>
并与我们更喜欢的 <a href="https://github.com/golang/go/wiki/CodeReviewComments#declaring-empty-slices" target="_blank" rel="noopener noreferrer">声明空切片<ExternalLinkIcon/></a> 方式相匹配。</p>
<h4 id="初始化-struct-引用" tabindex="-1"><a class="header-anchor" href="#初始化-struct-引用" aria-hidden="true">#</a> 初始化 Struct 引用</h4>
<p>在初始化结构引用时，请使用<code v-pre>&amp;T{}</code>代替<code v-pre>new(T)</code>，以使其与结构体初始化一致。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>sval <span class="token operator">:=</span> T<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"foo"</span><span class="token punctuation">}</span>

<span class="token comment">// inconsistent</span>
sptr <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span>
sptr<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"bar"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>sval <span class="token operator">:=</span> T<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"foo"</span><span class="token punctuation">}</span>

sptr <span class="token operator">:=</span> <span class="token operator">&amp;</span>T<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"bar"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="初始化-maps" tabindex="-1"><a class="header-anchor" href="#初始化-maps" aria-hidden="true">#</a> 初始化 Maps</h3>
<p>对于空 map 请使用 <code v-pre>make(..)</code> 初始化， 并且 map 是通过编程方式填充的。<br>
这使得 map 初始化在表现上不同于声明，并且它还可以方便地在 make 后添加大小提示。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
  <span class="token comment">// m1 读写安全;</span>
  <span class="token comment">// m2 在写入时会 panic</span>
  m1 <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span>T1<span class="token punctuation">]</span>T2<span class="token punctuation">{</span><span class="token punctuation">}</span>
  m2 <span class="token keyword">map</span><span class="token punctuation">[</span>T1<span class="token punctuation">]</span>T2
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
  <span class="token comment">// m1 读写安全;</span>
  <span class="token comment">// m2 在写入时会 panic</span>
  m1 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span>T1<span class="token punctuation">]</span>T2<span class="token punctuation">)</span>
  m2 <span class="token keyword">map</span><span class="token punctuation">[</span>T1<span class="token punctuation">]</span>T2
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
<tr><td>
<p>声明和初始化看起来非常相似的。</p>
</td><td>
<p>声明和初始化看起来差别非常大。</p>
</td></tr>
</tbody></table>
<p>在尽可能的情况下，请在初始化时提供 map 容量大小，详细请看<a href="#%E6%8C%87%E5%AE%9Amap%E5%AE%B9%E9%87%8F%E6%8F%90%E7%A4%BA">指定Map容量提示</a></p>
<p>另外，如果 map 包含固定的元素列表，则使用 map literals(map 初始化列表) 初始化映射。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span>T1<span class="token punctuation">]</span>T2<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
m<span class="token punctuation">[</span>k1<span class="token punctuation">]</span> <span class="token operator">=</span> v1
m<span class="token punctuation">[</span>k2<span class="token punctuation">]</span> <span class="token operator">=</span> v2
m<span class="token punctuation">[</span>k3<span class="token punctuation">]</span> <span class="token operator">=</span> v3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>m <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span>T1<span class="token punctuation">]</span>T2<span class="token punctuation">{</span>
  k1<span class="token punctuation">:</span> v1<span class="token punctuation">,</span>
  k2<span class="token punctuation">:</span> v2<span class="token punctuation">,</span>
  k3<span class="token punctuation">:</span> v3<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>基本准则是：在初始化时使用 map 初始化列表 来添加一组固定的元素。否则使用 <code v-pre>make</code> (如果可以，请尽量指定 map 容量)。</p>
<h3 id="字符串-string-format" tabindex="-1"><a class="header-anchor" href="#字符串-string-format" aria-hidden="true">#</a> 字符串 string format</h3>
<p>如果你在函数外声明<code v-pre>Printf</code>-style 函数的格式字符串，请将其设置为<code v-pre>const</code>常量。</p>
<p>这有助于<code v-pre>go vet</code>对格式字符串执行静态分析。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>msg <span class="token operator">:=</span> <span class="token string">"unexpected values %v, %v\n"</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token string">"unexpected values %v, %v\n"</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<h3 id="命名-printf-样式的函数" tabindex="-1"><a class="header-anchor" href="#命名-printf-样式的函数" aria-hidden="true">#</a> 命名 Printf 样式的函数</h3>
<p>声明<code v-pre>Printf</code>-style 函数时，请确保<code v-pre>go vet</code>可以检测到它并检查格式字符串。</p>
<p>这意味着您应尽可能使用预定义的<code v-pre>Printf</code>-style 函数名称。<code v-pre>go vet</code>将默认检查这些。有关更多信息，请参见 <a href="https://golang.org/cmd/vet/#hdr-Printf_family" target="_blank" rel="noopener noreferrer">Printf 系列<ExternalLinkIcon/></a>。</p>
<p>如果不能使用预定义的名称，请以 f 结束选择的名称：<code v-pre>Wrapf</code>，而不是<code v-pre>Wrap</code>。<code v-pre>go vet</code>可以要求检查特定的 Printf 样式名称，但名称必须以<code v-pre>f</code>结尾。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token variable">$go</span> vet <span class="token parameter variable">-printfuncs</span><span class="token operator">=</span>wrapf,statusf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另请参阅 <a href="https://kuzminva.wordpress.com/2017/11/07/go-vet-printf-family-check/" target="_blank" rel="noopener noreferrer">go vet: Printf family check<ExternalLinkIcon/></a>.</p>
<h2 id="编程模式" tabindex="-1"><a class="header-anchor" href="#编程模式" aria-hidden="true">#</a> 编程模式</h2>
<h3 id="表驱动测试" tabindex="-1"><a class="header-anchor" href="#表驱动测试" aria-hidden="true">#</a> 表驱动测试</h3>
<p>当测试逻辑是重复的时候，通过  <a href="https://blog.golang.org/subtests" target="_blank" rel="noopener noreferrer">subtests<ExternalLinkIcon/></a> 使用 table 驱动的方式编写 case 代码看上去会更简洁。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// func TestSplitHostPort(t *testing.T)</span>

host<span class="token punctuation">,</span> port<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">SplitHostPort</span><span class="token punctuation">(</span><span class="token string">"192.0.2.0:8000"</span><span class="token punctuation">)</span>
require<span class="token punctuation">.</span><span class="token function">NoError</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token string">"192.0.2.0"</span><span class="token punctuation">,</span> host<span class="token punctuation">)</span>
assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token string">"8000"</span><span class="token punctuation">,</span> port<span class="token punctuation">)</span>

host<span class="token punctuation">,</span> port<span class="token punctuation">,</span> err <span class="token operator">=</span> net<span class="token punctuation">.</span><span class="token function">SplitHostPort</span><span class="token punctuation">(</span><span class="token string">"192.0.2.0:http"</span><span class="token punctuation">)</span>
require<span class="token punctuation">.</span><span class="token function">NoError</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token string">"192.0.2.0"</span><span class="token punctuation">,</span> host<span class="token punctuation">)</span>
assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token string">"http"</span><span class="token punctuation">,</span> port<span class="token punctuation">)</span>

host<span class="token punctuation">,</span> port<span class="token punctuation">,</span> err <span class="token operator">=</span> net<span class="token punctuation">.</span><span class="token function">SplitHostPort</span><span class="token punctuation">(</span><span class="token string">":8000"</span><span class="token punctuation">)</span>
require<span class="token punctuation">.</span><span class="token function">NoError</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> host<span class="token punctuation">)</span>
assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token string">"8000"</span><span class="token punctuation">,</span> port<span class="token punctuation">)</span>

host<span class="token punctuation">,</span> port<span class="token punctuation">,</span> err <span class="token operator">=</span> net<span class="token punctuation">.</span><span class="token function">SplitHostPort</span><span class="token punctuation">(</span><span class="token string">"1:8"</span><span class="token punctuation">)</span>
require<span class="token punctuation">.</span><span class="token function">NoError</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token string">"1"</span><span class="token punctuation">,</span> host<span class="token punctuation">)</span>
assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token string">"8"</span><span class="token punctuation">,</span> port<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// func TestSplitHostPort(t *testing.T)</span>

tests <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">struct</span><span class="token punctuation">{</span>
  give     <span class="token builtin">string</span>
  wantHost <span class="token builtin">string</span>
  wantPort <span class="token builtin">string</span>
<span class="token punctuation">}</span><span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    give<span class="token punctuation">:</span>     <span class="token string">"192.0.2.0:8000"</span><span class="token punctuation">,</span>
    wantHost<span class="token punctuation">:</span> <span class="token string">"192.0.2.0"</span><span class="token punctuation">,</span>
    wantPort<span class="token punctuation">:</span> <span class="token string">"8000"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    give<span class="token punctuation">:</span>     <span class="token string">"192.0.2.0:http"</span><span class="token punctuation">,</span>
    wantHost<span class="token punctuation">:</span> <span class="token string">"192.0.2.0"</span><span class="token punctuation">,</span>
    wantPort<span class="token punctuation">:</span> <span class="token string">"http"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    give<span class="token punctuation">:</span>     <span class="token string">":8000"</span><span class="token punctuation">,</span>
    wantHost<span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    wantPort<span class="token punctuation">:</span> <span class="token string">"8000"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    give<span class="token punctuation">:</span>     <span class="token string">"1:8"</span><span class="token punctuation">,</span>
    wantHost<span class="token punctuation">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
    wantPort<span class="token punctuation">:</span> <span class="token string">"8"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> tt <span class="token operator">:=</span> <span class="token keyword">range</span> tests <span class="token punctuation">{</span>
  t<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span>give<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    host<span class="token punctuation">,</span> port<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">SplitHostPort</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span>give<span class="token punctuation">)</span>
    require<span class="token punctuation">.</span><span class="token function">NoError</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>wantHost<span class="token punctuation">,</span> host<span class="token punctuation">)</span>
    assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>wantPort<span class="token punctuation">,</span> port<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>很明显，使用 test table 的方式在代码逻辑扩展的时候，比如新增 test case，都会显得更加的清晰。</p>
<p>我们遵循这样的约定：将结构体切片称为<code v-pre>tests</code>。 每个测试用例称为<code v-pre>tt</code>。此外，我们鼓励使用<code v-pre>give</code>和<code v-pre>want</code>前缀说明每个测试用例的输入和输出值。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>tests <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">struct</span><span class="token punctuation">{</span>
  give     <span class="token builtin">string</span>
  wantHost <span class="token builtin">string</span>
  wantPort <span class="token builtin">string</span>
<span class="token punctuation">}</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> tt <span class="token operator">:=</span> <span class="token keyword">range</span> tests <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并行测试，比如一些专门的循环（例如，生成goroutine或捕获引用作为循环体的一部分的那些循环）<br>
必须注意在循环的范围内显式地分配循环变量，以确保它们保持预期的值。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>tests <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">struct</span><span class="token punctuation">{</span>
  give <span class="token builtin">string</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> tt <span class="token operator">:=</span> <span class="token keyword">range</span> tests <span class="token punctuation">{</span>
  tt <span class="token operator">:=</span> tt <span class="token comment">// for t.Parallel</span>
  t<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span>give<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    t<span class="token punctuation">.</span><span class="token function">Parallel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，由于下面使用了<code v-pre>t.Parallel()</code>，我们必须声明一个作用域为循环迭代的<code v-pre>tt</code>变量。<br>
如果我们不这样做，大多数或所有测试都会收到一个意外的<code v-pre>tt</code>值，或者一个在运行时发生变化的值。</p>
<h3 id="功能选项" tabindex="-1"><a class="header-anchor" href="#功能选项" aria-hidden="true">#</a> 功能选项</h3>
<p>功能选项是一种模式，您可以在其中声明一个不透明 Option 类型，该类型在某些内部结构中记录信息。您接受这些选项的可变编号，并根据内部结构上的选项记录的全部信息采取行动。</p>
<p>将此模式用于您需要扩展的构造函数和其他公共 API 中的可选参数，尤其是在这些功能上已经具有三个或更多参数的情况下。</p>
<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// package db</span>

<span class="token keyword">func</span> <span class="token function">Open</span><span class="token punctuation">(</span>
  addr <span class="token builtin">string</span><span class="token punctuation">,</span>
  cache <span class="token builtin">bool</span><span class="token punctuation">,</span>
  logger <span class="token operator">*</span>zap<span class="token punctuation">.</span>Logger
<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Connection<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// package db</span>

<span class="token keyword">type</span> Option <span class="token keyword">interface</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">WithCache</span><span class="token punctuation">(</span>c <span class="token builtin">bool</span><span class="token punctuation">)</span> Option <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">WithLogger</span><span class="token punctuation">(</span>log <span class="token operator">*</span>zap<span class="token punctuation">.</span>Logger<span class="token punctuation">)</span> Option <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// Open creates a connection.</span>
<span class="token keyword">func</span> <span class="token function">Open</span><span class="token punctuation">(</span>
  addr <span class="token builtin">string</span><span class="token punctuation">,</span>
  opts <span class="token operator">...</span>Option<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Connection<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
<tr><td>
<p>必须始终提供缓存和记录器参数，即使用户希望使用默认值。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>addr<span class="token punctuation">,</span> db<span class="token punctuation">.</span>DefaultCache<span class="token punctuation">,</span> zap<span class="token punctuation">.</span><span class="token function">NewNop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>addr<span class="token punctuation">,</span> db<span class="token punctuation">.</span>DefaultCache<span class="token punctuation">,</span> log<span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>addr<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token comment">/* cache */</span><span class="token punctuation">,</span> zap<span class="token punctuation">.</span><span class="token function">NewNop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>addr<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token comment">/* cache */</span><span class="token punctuation">,</span> log<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<p>只有在需要时才提供选项。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>addr<span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>addr<span class="token punctuation">,</span> db<span class="token punctuation">.</span><span class="token function">WithLogger</span><span class="token punctuation">(</span>log<span class="token punctuation">)</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>addr<span class="token punctuation">,</span> db<span class="token punctuation">.</span><span class="token function">WithCache</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>
  addr<span class="token punctuation">,</span>
  db<span class="token punctuation">.</span><span class="token function">WithCache</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  db<span class="token punctuation">.</span><span class="token function">WithLogger</span><span class="token punctuation">(</span>log<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr>
</tbody></table>
<p>我们建议实现此模式的方法是使用一个 <code v-pre>Option</code> 接口，该接口保存一个未导出的方法，在一个未导出的 <code v-pre>options</code> 结构上记录选项。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> options <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  cache  <span class="token builtin">bool</span>
  logger <span class="token operator">*</span>zap<span class="token punctuation">.</span>Logger
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Option <span class="token keyword">interface</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token operator">*</span>options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> cacheOption <span class="token builtin">bool</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c cacheOption<span class="token punctuation">)</span> <span class="token function">apply</span><span class="token punctuation">(</span>opts <span class="token operator">*</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  opts<span class="token punctuation">.</span>cache <span class="token operator">=</span> <span class="token function">bool</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">WithCache</span><span class="token punctuation">(</span>c <span class="token builtin">bool</span><span class="token punctuation">)</span> Option <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">cacheOption</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> loggerOption <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Log <span class="token operator">*</span>zap<span class="token punctuation">.</span>Logger
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l loggerOption<span class="token punctuation">)</span> <span class="token function">apply</span><span class="token punctuation">(</span>opts <span class="token operator">*</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  opts<span class="token punctuation">.</span>logger <span class="token operator">=</span> l<span class="token punctuation">.</span>Log
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">WithLogger</span><span class="token punctuation">(</span>log <span class="token operator">*</span>zap<span class="token punctuation">.</span>Logger<span class="token punctuation">)</span> Option <span class="token punctuation">{</span>
  <span class="token keyword">return</span> loggerOption<span class="token punctuation">{</span>Log<span class="token punctuation">:</span> log<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Open creates a connection.</span>
<span class="token keyword">func</span> <span class="token function">Open</span><span class="token punctuation">(</span>
  addr <span class="token builtin">string</span><span class="token punctuation">,</span>
  opts <span class="token operator">...</span>Option<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Connection<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  options <span class="token operator">:=</span> options<span class="token punctuation">{</span>
    cache<span class="token punctuation">:</span>  defaultCache<span class="token punctuation">,</span>
    logger<span class="token punctuation">:</span> zap<span class="token punctuation">.</span><span class="token function">NewNop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> o <span class="token operator">:=</span> <span class="token keyword">range</span> opts <span class="token punctuation">{</span>
    o<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：还有一种使用闭包实现这个模式的方法，但是我们相信上面的模式为作者提供了更多的灵活性，并且更容易对用户进行调试和测试。特别是，在不可能进行比较的情况下它允许在测试和模拟中对选项进行比较。此外，它还允许选项实现其他接口，包括 <code v-pre>fmt.Stringer</code>，允许用户读取选项的字符串表示形式。</p>
<p>还可以参考下面资料：</p>
<ul>
<li>
<p><a href="https://commandcenter.blogspot.com/2014/01/self-referential-functions-and-design.html" target="_blank" rel="noopener noreferrer">Self-referential functions and the design of options<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://dave.cheney.net/2014/10/17/functional-options-for-friendly-apis" target="_blank" rel="noopener noreferrer">Functional options for friendly APIs<ExternalLinkIcon/></a></p>
</li>
</ul>
<!-- TODO: replace this with parameter structs and functional options, when to
use one vs other -->
<h2 id="linting" tabindex="-1"><a class="header-anchor" href="#linting" aria-hidden="true">#</a> Linting</h2>
<p>比任何 &quot;blessed&quot; linter 集更重要的是，lint 在一个代码库中始终保持一致。</p>
<p>我们建议至少使用以下 linters，因为我认为它们有助于发现最常见的问题，并在不需要规定的情况下为代码质量建立一个高标准：</p>
<ul>
<li>
<p><a href="https://github.com/kisielk/errcheck" target="_blank" rel="noopener noreferrer">errcheck<ExternalLinkIcon/></a> 以确保错误得到处理</p>
</li>
<li>
<p><a href="https://godoc.org/golang.org/x/tools/cmd/goimports" target="_blank" rel="noopener noreferrer">goimports<ExternalLinkIcon/></a> 格式化代码和管理 imports</p>
</li>
<li>
<p><a href="https://github.com/golang/lint" target="_blank" rel="noopener noreferrer">golint<ExternalLinkIcon/></a> 指出常见的文体错误</p>
</li>
<li>
<p><a href="https://golang.org/cmd/vet/" target="_blank" rel="noopener noreferrer">govet<ExternalLinkIcon/></a> 分析代码中的常见错误</p>
</li>
<li>
<p><a href="https://staticcheck.io/" target="_blank" rel="noopener noreferrer">staticcheck<ExternalLinkIcon/></a> 各种静态分析检查</p>
</li>
</ul>
<h3 id="lint-runners" tabindex="-1"><a class="header-anchor" href="#lint-runners" aria-hidden="true">#</a> Lint Runners</h3>
<p>我们推荐 <a href="https://github.com/golangci/golangci-lint" target="_blank" rel="noopener noreferrer">golangci-lint<ExternalLinkIcon/></a> 作为 go-to lint 的运行程序，这主要是因为它在较大的代码库中的性能以及能够同时配置和使用许多规范。这个 repo 有一个示例配置文件 <a href="https://github.com/uber-go/guide/blob/master/.golangci.yml" target="_blank" rel="noopener noreferrer">.golangci.yml<ExternalLinkIcon/></a> 和推荐的 linter 设置。</p>
<p>golangci-lint 有 <a href="https://golangci-lint.run/usage/linters/" target="_blank" rel="noopener noreferrer">various-linters<ExternalLinkIcon/></a> 可供使用。建议将上述 linters 作为基本 set，我们鼓励团队添加对他们的项目有意义的任何附加 linters。</p>
<h2 id="stargazers-over-time" tabindex="-1"><a class="header-anchor" href="#stargazers-over-time" aria-hidden="true">#</a> Stargazers over time</h2>
<figure><a href="https://starchart.cc/xxjwxc/uber_go_guide_cn" target="_blank" rel="noopener noreferrer"><img src="https://starchart.cc/xxjwxc/uber_go_guide_cn.svg" alt="Stargazers over time" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>Stargazers over time</figcaption></figure>
</div></template>


