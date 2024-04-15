import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-DE5Wz_61.js";const e={},p=t(`<blockquote><p>defer结合recover通常用于捕获panic</p></blockquote><h2 id="正确使用示例" tabindex="-1"><a class="header-anchor" href="#正确使用示例"><span>正确使用示例</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">PrintRecover</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>
	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;some thing&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ExamplePrintRecover</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">PrintRecover</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// a</span>
	<span class="token comment">// some thing</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误用例-不使用defer" tabindex="-1"><a class="header-anchor" href="#错误用例-不使用defer"><span>错误用例：不使用defer</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">FailRecoverWithoutDefer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>
	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;some thing&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container caution"><p class="hint-container-title">警告</p><p>不使用defer 方式，将无法捕获异常，程序陷入panic</p></div><h2 id="错误用例-recover-在-defer-嵌套函数中" tabindex="-1"><a class="header-anchor" href="#错误用例-recover-在-defer-嵌套函数中"><span>错误用例：recover 在 defer 嵌套函数中</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">FailRecoverWithoutLevelDefer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//recover 在 defer 嵌套函数中</span>
			<span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>
	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;some thing&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container caution"><p class="hint-container-title">警告</p><p>defer recover和panic不在同一层级，导致无法捕获异常，程序陷入panic</p></div>`,11),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","recover.html.vue"]]),k=JSON.parse('{"path":"/go-language/base/recover.html","title":"recover注意事项","lang":"zh-CN","frontmatter":{"title":"recover注意事项","date":"2023-08-27T00:00:00.000Z","tag":["Go","基础"],"category":["Go语言"],"description":"defer结合recover通常用于捕获panic 正确使用示例 使用示例 错误用例：不使用defer 警告 不使用defer 方式，将无法捕获异常，程序陷入panic 错误用例：recover 在 defer 嵌套函数中 警告 defer recover和panic不在同一层级，导致无法捕获异常，程序陷入panic","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/go-language/base/recover.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"recover注意事项"}],["meta",{"property":"og:description","content":"defer结合recover通常用于捕获panic 正确使用示例 使用示例 错误用例：不使用defer 警告 不使用defer 方式，将无法捕获异常，程序陷入panic 错误用例：recover 在 defer 嵌套函数中 警告 defer recover和panic不在同一层级，导致无法捕获异常，程序陷入panic"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-27T14:17:28.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"基础"}],["meta",{"property":"article:published_time","content":"2023-08-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-27T14:17:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"recover注意事项\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-27T14:17:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"正确使用示例","slug":"正确使用示例","link":"#正确使用示例","children":[]},{"level":2,"title":"错误用例：不使用defer","slug":"错误用例-不使用defer","link":"#错误用例-不使用defer","children":[]},{"level":2,"title":"错误用例：recover 在 defer 嵌套函数中","slug":"错误用例-recover-在-defer-嵌套函数中","link":"#错误用例-recover-在-defer-嵌套函数中","children":[]}],"git":{"createdTime":1693145848000,"updatedTime":1693145848000,"contributors":[{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":0.59,"words":177},"filePathRelative":"go-language/base/recover.md","localizedDate":"2023年8月27日","excerpt":"<blockquote>\\n<p>defer结合recover通常用于捕获panic</p>\\n</blockquote>\\n<h2>正确使用示例</h2>\\n<div class=\\"language-go\\" data-ext=\\"go\\" data-title=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">func</span> <span class=\\"token function\\">PrintRecover</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">defer</span> <span class=\\"token keyword\\">func</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token keyword\\">if</span> err <span class=\\"token operator\\">:=</span> <span class=\\"token function\\">recover</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> err <span class=\\"token operator\\">!=</span> <span class=\\"token boolean\\">nil</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span>err<span class=\\"token punctuation\\">)</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token function\\">panic</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"some thing\\"</span><span class=\\"token punctuation\\">)</span>\\n\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"b\\"</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{d as comp,k as data};
