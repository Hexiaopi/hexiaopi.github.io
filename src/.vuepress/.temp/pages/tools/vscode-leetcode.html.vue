<template><div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>vscode这款插件太香了，终于可以沉浸式刷leetcode😄</p>
</div>
<!-- more -->
<h2 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h2>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>在vscode扩展商店搜索<code v-pre>LeetCode</code>,一般是下载量最高的那个就完事了<br>
<img src="@source/tools/images/vscode-leetcode-1.png" alt="" loading="lazy"></p>
<h3 id="登陆" tabindex="-1"><a class="header-anchor" href="#登陆" aria-hidden="true">#</a> 登陆</h3>
<p>在登陆之前，记得要选择中国版，否则会遇见登陆不上问题<br>
<img src="@source/tools/images/vscode-leetcode-2.png" alt="" loading="lazy"><br>
接下来选择账号登录，需要提前在LeetCode官网注册账号<br>
<img src="@source/tools/images/vscode-leetcode-3.png" alt="" loading="lazy"><br>
这里我选择账户方式，按照提示填写邮箱、密码即可登录</p>
<h3 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h3>
<figure><img src="@source/tools/images/vscode-leetcode-4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>在左侧，该插件按照五个分类将题目进行了分类，比如：按照难易程度(简单、中等、难)、按照标签(数据、二叉搜索等)、按照公司(Google、Facebook等)</p>
<p>且题目根据难易程度有不同的颜色进行区分，如果已经完成相关的练习，还会用✔️提示</p>
</blockquote>
<h3 id="个性化配置" tabindex="-1"><a class="header-anchor" href="#个性化配置" aria-hidden="true">#</a> 个性化配置</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"leetcode.endpoint"</span><span class="token operator">:</span> <span class="token string">"leetcode-cn"</span><span class="token punctuation">,</span>
  <span class="token property">"leetcode.workspaceFolder"</span><span class="token operator">:</span> <span class="token string">"/Users/hechangjie/code/hexiaopi/leetcode-go"</span><span class="token punctuation">,</span>
  <span class="token property">"leetcode.defaultLanguage"</span><span class="token operator">:</span> <span class="token string">"golang"</span><span class="token punctuation">,</span>
  <span class="token property">"leetcode.hint.configWebviewMarkdown"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"leetcode.hint.commentDescription"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"leetcode.hint.commandShortcut"</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="沉浸式刷题" tabindex="-1"><a class="header-anchor" href="#沉浸式刷题" aria-hidden="true">#</a> 沉浸式刷题</h2>
<h3 id="预览题目内容" tabindex="-1"><a class="header-anchor" href="#预览题目内容" aria-hidden="true">#</a> 预览题目内容</h3>
<p><img src="@source/tools/images/vscode-leetcode-5.png" alt="" loading="lazy"><br>
点击Code Now，选择一种编程语言就可以开始了</p>
<h3 id="编写代码" tabindex="-1"><a class="header-anchor" href="#编写代码" aria-hidden="true">#</a> 编写代码</h3>
<figure><img src="@source/tools/images/vscode-leetcode-6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h3>
<p>点击代码下方的<code v-pre>Test</code>标签即可进行测试代码（再也不用编写大量的单元测试用例了）<br>
<img src="@source/tools/images/vscode-leetcode-7.png" alt="" loading="lazy"></p>
<h3 id="提交代码" tabindex="-1"><a class="header-anchor" href="#提交代码" aria-hidden="true">#</a> 提交代码</h3>
<p>点击代码下方的<code v-pre>Submit</code>标签即可提交代码，完成之后就会看到提交后的代码性能等信息了<br>
<img src="@source/tools/images/vscode-leetcode-8.png" alt="" loading="lazy"></p>
</div></template>


