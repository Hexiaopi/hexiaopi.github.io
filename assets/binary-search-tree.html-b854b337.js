import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-75201acf.js";const p="/assets/slanted-tree-1474fb73.png",e={},o=t(`<h1 id="二叉搜索树" tabindex="-1"><a class="header-anchor" href="#二叉搜索树" aria-hidden="true">#</a> 二叉搜索树</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><blockquote><p>二叉搜索树（Binary Search Tree,BST）又叫二叉排序树，基于二分法查找思想设计的树。它的定义如下：</p><ol><li>它是一棵二叉树</li><li>左子树的所有节点的值都小于它的根节点，右子树的所有节点的值都大于它的根节点</li><li>左右子树也是一棵二叉搜索树</li></ol></blockquote><h2 id="增加节点" tabindex="-1"><a class="header-anchor" href="#增加节点" aria-hidden="true">#</a> 增加节点</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>n <span class="token operator">*</span>Node<span class="token punctuation">)</span> <span class="token function">Add</span><span class="token punctuation">(</span>value <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> value <span class="token operator">&gt;</span> n<span class="token punctuation">.</span>Data <span class="token punctuation">{</span>
		<span class="token keyword">if</span> n<span class="token punctuation">.</span>Right <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			n<span class="token punctuation">.</span>Right <span class="token operator">=</span> <span class="token operator">&amp;</span>Node<span class="token punctuation">{</span>
				Left<span class="token punctuation">:</span>  <span class="token boolean">nil</span><span class="token punctuation">,</span>
				Data<span class="token punctuation">:</span>  value<span class="token punctuation">,</span>
				Right<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			n<span class="token punctuation">.</span>Right<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> value <span class="token operator">&lt;</span> n<span class="token punctuation">.</span>Data <span class="token punctuation">{</span>
		<span class="token keyword">if</span> n<span class="token punctuation">.</span>Left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			n<span class="token punctuation">.</span>Left <span class="token operator">=</span> <span class="token operator">&amp;</span>Node<span class="token punctuation">{</span>
				Left<span class="token punctuation">:</span>  <span class="token boolean">nil</span><span class="token punctuation">,</span>
				Data<span class="token punctuation">:</span>  value<span class="token punctuation">,</span>
				Right<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			n<span class="token punctuation">.</span>Left<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">&quot; already exist&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查找节点" tabindex="-1"><a class="header-anchor" href="#查找节点" aria-hidden="true">#</a> 查找节点</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>n <span class="token operator">*</span>Node<span class="token punctuation">)</span> <span class="token function">Find</span><span class="token punctuation">(</span>value <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Node <span class="token punctuation">{</span>
	<span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> n<span class="token punctuation">.</span>Data <span class="token operator">==</span> value <span class="token punctuation">{</span>
		<span class="token keyword">return</span> n
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> n<span class="token punctuation">.</span>Data <span class="token operator">&gt;</span> value <span class="token punctuation">{</span>
		<span class="token keyword">return</span> n<span class="token punctuation">.</span>Left<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> n<span class="token punctuation">.</span>Right<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestNode_Find</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> node <span class="token operator">=</span> <span class="token operator">&amp;</span>Node<span class="token punctuation">{</span>
		Left<span class="token punctuation">:</span>  <span class="token boolean">nil</span><span class="token punctuation">,</span>
		Data<span class="token punctuation">:</span>  <span class="token number">10</span><span class="token punctuation">,</span>
		Right<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	node<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
	node<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
	node<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span>
	node<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span>
	result <span class="token operator">:=</span> node<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> result <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">||</span> result<span class="token punctuation">.</span>Data <span class="token operator">!=</span> <span class="token number">13</span> <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;find fail&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	t<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>Data<span class="token punctuation">,</span> result<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> result<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>

	result <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> result<span class="token operator">!=</span><span class="token boolean">nil</span><span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;should be nil&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除节点" tabindex="-1"><a class="header-anchor" href="#删除节点" aria-hidden="true">#</a> 删除节点</h2><h3 id="递归版本" tabindex="-1"><a class="header-anchor" href="#递归版本" aria-hidden="true">#</a> 递归版本</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 递归版本</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>n <span class="token operator">*</span>Node<span class="token punctuation">)</span> <span class="token function">DeleteNodeRecursion</span><span class="token punctuation">(</span>key <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Node <span class="token punctuation">{</span>
	<span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 删除的节点在子树上</span>
	<span class="token keyword">if</span> key <span class="token operator">&lt;</span> n<span class="token punctuation">.</span>Data <span class="token punctuation">{</span>
		n<span class="token punctuation">.</span>Left <span class="token operator">=</span> n<span class="token punctuation">.</span>Left<span class="token punctuation">.</span><span class="token function">DeleteNodeRecursion</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
		<span class="token keyword">return</span> n
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> key <span class="token operator">&gt;</span> n<span class="token punctuation">.</span>Data <span class="token punctuation">{</span>
		n<span class="token punctuation">.</span>Right <span class="token operator">=</span> n<span class="token punctuation">.</span>Right<span class="token punctuation">.</span><span class="token function">DeleteNodeRecursion</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
		<span class="token keyword">return</span> n
	<span class="token punctuation">}</span>
	<span class="token comment">// 删除的节点为当前节点</span>
	<span class="token keyword">if</span> n<span class="token punctuation">.</span>Right <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span> <span class="token comment">// 只有一个左子树</span>
		<span class="token keyword">return</span> n<span class="token punctuation">.</span>Left
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> n<span class="token punctuation">.</span>Left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span> <span class="token comment">// 只有一个右子树</span>
		<span class="token keyword">return</span> n<span class="token punctuation">.</span>Right
	<span class="token punctuation">}</span>
	<span class="token comment">// 有两个子树</span>
	<span class="token comment">// 从右子树选择最小的node替换</span>
	minNode <span class="token operator">:=</span> n<span class="token punctuation">.</span>Right
	<span class="token keyword">for</span> minNode<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		minNode <span class="token operator">=</span> minNode<span class="token punctuation">.</span>Left
	<span class="token punctuation">}</span>
	<span class="token comment">// 替换当前节点的值并删除右子树最小node</span>
	n<span class="token punctuation">.</span>Data <span class="token operator">=</span> minNode<span class="token punctuation">.</span>Data
	n<span class="token punctuation">.</span>Right <span class="token operator">=</span> n<span class="token punctuation">.</span>Right<span class="token punctuation">.</span><span class="token function">deleteMinNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> n
<span class="token punctuation">}</span>

<span class="token comment">// 递归删除节点</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>n <span class="token operator">*</span>Node<span class="token punctuation">)</span> <span class="token function">deleteMinNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Node <span class="token punctuation">{</span>
	<span class="token keyword">if</span> n<span class="token punctuation">.</span>Left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span> <span class="token comment">//左子树为空，则删除当前节点</span>
		pRight <span class="token operator">:=</span> n<span class="token punctuation">.</span>Right
		n<span class="token punctuation">.</span>Right <span class="token operator">=</span> <span class="token boolean">nil</span>
		<span class="token keyword">return</span> pRight
	<span class="token punctuation">}</span>
	<span class="token comment">// 左子树不为空，则继续删除左子树</span>
	n<span class="token punctuation">.</span>Left <span class="token operator">=</span> n<span class="token punctuation">.</span>Left<span class="token punctuation">.</span><span class="token function">deleteMinNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> n
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ExampleDeleteNodeRecursion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> node <span class="token operator">=</span> <span class="token operator">&amp;</span>Node<span class="token punctuation">{</span>
		Left<span class="token punctuation">:</span>  <span class="token boolean">nil</span><span class="token punctuation">,</span>
		Data<span class="token punctuation">:</span>  <span class="token number">10</span><span class="token punctuation">,</span>
		Right<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	node<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
	node<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
	node<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span>
	node<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span>
	node<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">DeleteNodeRecursion</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
	node<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">DeleteNodeRecursion</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span>
	node<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">DeleteNodeRecursion</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
	node<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">DeleteNodeRecursion</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
	node<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	node <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">DeleteNodeRecursion</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span>
	node<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// 10(7(,8),13(,14))</span>
	<span class="token comment">// 10(8,13(,14))</span>
	<span class="token comment">// 10(8,13)</span>
	<span class="token comment">// 10(,13)</span>
	<span class="token comment">// 13</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1><blockquote><p>二叉搜素树采用二分法思想，查找效率高</p><p>但是二叉搜索树具有不平衡性，容易出现斜树</p></blockquote><figure><img src="`+p+'" alt="斜树" tabindex="0" loading="lazy"><figcaption>斜树</figcaption></figure>',17),c=[o];function i(l,u){return s(),a("div",null,c)}const r=n(e,[["render",i],["__file","binary-search-tree.html.vue"]]);export{r as default};
