import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-06c43e20.js";const e={},i=t(`<blockquote><p>flag库实现命令行参数解析</p></blockquote><h2 id="简单用法" tabindex="-1"><a class="header-anchor" href="#简单用法" aria-hidden="true">#</a> 简单用法</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// Example1：flag.String 返回指针类型字符串</span>
<span class="token keyword">var</span> flagStrA <span class="token operator">=</span> flag<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;str-a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;str-a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;flag test *string&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// Example2：如果期望定义字符串类型，可以通过init函数初始化</span>
<span class="token keyword">var</span> flagStrB <span class="token builtin">string</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// flag.StringVar可以绑定已有的变量</span>
	flag<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>flagStrB<span class="token punctuation">,</span> <span class="token string">&quot;str-b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;str-b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;flag test string&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Example3：int类型变量</span>
<span class="token keyword">var</span> flagInt <span class="token operator">=</span> flag<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token string">&quot;int&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;flag test *int&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// Example4: bool类型变量，注意使用</span>
<span class="token keyword">var</span> flagBool <span class="token operator">=</span> flag<span class="token punctuation">.</span><span class="token function">Bool</span><span class="token punctuation">(</span><span class="token string">&quot;bool&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;flag test *bool&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// Example5：duration类型变量</span>
<span class="token keyword">var</span> flagDuration <span class="token operator">=</span> flag<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span><span class="token string">&quot;duration&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Minute<span class="token operator">*</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;flag test duration&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>flagStrA<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>flagStrB<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>flagInt<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>flagBool<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>flagDuration<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">falg参数使用语法</p><p>-flag // 破折号，使用默认值<br> --flag // 双破折号<br> -flag=x // 指定参数值<br> -flag x // non-boolean flags only</p></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3><h4 id="bool类型不可使用-flag-x形式" tabindex="-1"><a class="header-anchor" href="#bool类型不可使用-flag-x形式" aria-hidden="true">#</a> bool类型不可使用：-flag x形式</h4><div class="hint-container warning"><p class="hint-container-title">注意</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run flag-demo1.go <span class="token parameter variable">-bool</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str-a
str-b
1
true
1m0s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h4 id="bool类型-flag形式-认为true" tabindex="-1"><a class="header-anchor" href="#bool类型-flag形式-认为true" aria-hidden="true">#</a> bool类型：-flag形式，认为true</h4><div class="hint-container warning"><p class="hint-container-title">注意</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run flag-demo1.go <span class="token parameter variable">-bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str-a
str-b
1
true
1m0s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h4 id="bool类型可以使用以下字面量" tabindex="-1"><a class="header-anchor" href="#bool类型可以使用以下字面量" aria-hidden="true">#</a> bool类型可以使用以下字面量</h4><div class="hint-container tip"><p class="hint-container-title">提示</p><p>1, 0, t, f, T, F, true, false, TRUE, FALSE, True, False</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run flag-demo1.go <span class="token parameter variable">-bool</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str-a
str-b
1
true
1m0s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,11),l=[i];function o(p,c){return s(),a("div",null,l)}const d=n(e,[["render",o],["__file","flag.html.vue"]]);export{d as default};
