import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as s,b as t,o as e}from"./app-Dn-1EyMU.js";const p="/assets/binary-tree-Dyjk0JzO.png",i={},l=t(`<h1 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树"><span>二叉树</span></a></h1><blockquote><p>满足以下两个条件的树就是二叉树：</p><ul><li>本身是有序树</li><li>树中包含的各个节点的度不能超过2，即只能是：0、1、2</li></ul></blockquote><p>定义二叉树的结构</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> Node <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Left  <span class="token operator">*</span>Node
	Data  <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	Right <span class="token operator">*</span>Node
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="先序遍历" tabindex="-1"><a class="header-anchor" href="#先序遍历"><span>先序遍历</span></a></h2><blockquote><p>其思想是：</p><ol><li>访问根节点；</li><li>访问当前节点的左子树；</li><li>若当前节点无左子树，则访问当前节点的右子树；</li></ol></blockquote><p>以图为例：</p><ol><li>访问该二叉树的根节点，找到节点1；</li><li>访问节点1的左子树，找到节点2；</li><li>访问节点2的左子树，找到节点4；</li><li>访问节点4的左子树失败，访问节点4的右子树失败，结束节点4的查询。继续查找节点2的右子树，找到节点5；</li><li>访问节点5的左子树失败，访问节点5的右子树失败，结束节点5的查询。结束节点2的查询，查询节点1的右子树，找到节点3；</li><li>访问节点3的左子树，找到节点6；</li><li>访问节点6的左子树失败，访问节点6的右子树失败，结束节点6的查询。继续查找节点3右子树，知道节点7；</li><li>访问节点7的左子树失败，访问节点7的右子树失败，结束节点7的查询。结束节点3的查询，结束节点1的查询；</li></ol><p>!&gt; 顺序如下：1、2、4、5、3、6、7</p><h3 id="递归实现" tabindex="-1"><a class="header-anchor" href="#递归实现"><span>递归实现</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">PreOrder</span><span class="token punctuation">(</span>n <span class="token operator">*</span>Node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> n <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v &quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
		<span class="token function">PreOrder</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
		<span class="token function">PreOrder</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例测试" tabindex="-1"><a class="header-anchor" href="#示例测试"><span>示例测试</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ExamplePreOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">PreOrder</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>one<span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// 1 2 4 5 3 6 7</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="中序遍历" tabindex="-1"><a class="header-anchor" href="#中序遍历"><span>中序遍历</span></a></h2><blockquote><p>其实想是：</p><ol><li>访问当前节点的左子树；</li><li>访问当前节点；</li><li>访问当前节点的右子树；</li></ol></blockquote><p>以图为例：</p><ol><li>访问根节点，遍历找到左子树直到失败；找到节点4，找到节点4的右子树失败，结束节点4的遍历；</li><li>访问节点4的根节点，找到节点2；</li><li>访问节点2的右子树，遍历找左子树失败，找到节点5，遍历找到右子树失败，结束节点5的遍历，也结束节点2的遍历；</li><li>结束节点1的左子树查询，找到节点1；</li><li>遍历节点1的右子树，遍历找到左子树为6，结束节点6的遍历；</li><li>找到节点3；</li><li>遍历节点3的右子树，遍历找到左子树失败；找到节点7，遍历节点7的右子树失败，结束节点7的遍历；</li></ol><p>!&gt; 顺序如下：4，2，5，1，6，3，7</p><h3 id="递归实现-1" tabindex="-1"><a class="header-anchor" href="#递归实现-1"><span>递归实现</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">InOrder</span><span class="token punctuation">(</span>n <span class="token operator">*</span>Node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> n <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">InOrder</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v &quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
		<span class="token function">InOrder</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例测试-1" tabindex="-1"><a class="header-anchor" href="#示例测试-1"><span>示例测试</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ExampleInOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">InOrder</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>one<span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// 4 2 5 1 6 3 7</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="后续遍历" tabindex="-1"><a class="header-anchor" href="#后续遍历"><span>后续遍历</span></a></h2><blockquote><p>其思想是：</p><ol><li>遍历访问当前节点的左子树；</li><li>遍历访问当前节点的右子树；</li><li>访问当前节点；</li></ol></blockquote><p>以图为例：</p><ol><li>从根节点开始，遍历左子树直到失败，1-&gt;2-&gt;4，找到节点4，结束节点4的查询；</li><li>回退到节点2，遍历右子树，找到节点5的左子树失败、右子树失败，找到节点5，结束节点5的查询；</li><li>节点2的左右子树遍历完成，找到节点2，结束节点2的查询；</li><li>回退到节点1，遍历右子树，1-&gt;3-&gt;6，找到节点6的左子树失败、右子树失败，找到节点6，结束节点6的查询；</li><li>回到到节点3，遍历右子树，3-&gt;7，找到节点7的左子树失败、右子树失败，找到节点7，结束节点7的查询；</li><li>节点3左右子树遍历完成，找到节点3，结束节点3的查询；</li><li>回退到节点1，节点1左右子树遍历完成，找到节点1，结束节点1的查询；</li></ol><p>!&gt; 顺序为：4、5、2、6、7、3、1</p><h3 id="递归实现-2" tabindex="-1"><a class="header-anchor" href="#递归实现-2"><span>递归实现</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">AftOrder</span><span class="token punctuation">(</span>n <span class="token operator">*</span>Node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> n<span class="token operator">!=</span><span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">AftOrder</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
		<span class="token function">AftOrder</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v &quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例测试-2" tabindex="-1"><a class="header-anchor" href="#示例测试-2"><span>示例测试</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ExampleAftOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">AftOrder</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>one<span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// 4 5 2 6 7 3 1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="层次遍历" tabindex="-1"><a class="header-anchor" href="#层次遍历"><span>层次遍历</span></a></h2><blockquote><p>其思想是：</p><ol><li>节点入队；</li><li>节点出队，节点左孩子和右孩子入队；</li><li>知道所有节点出队；</li></ol></blockquote><p>以图为例：</p><ol><li>根节点1入队；</li><li>根节点1出队，找到节点1，根节点1的左孩子节点2和右孩子3节点入队；</li><li>节点2出队，找到节点2，节点2的左孩子节点4和右孩子节点5入队；</li><li>节点3出队，找到节点3，节点3的左孩子节点6和右孩子节点7入队；</li><li>节点4出队，没有左右孩子，找到节点4；</li><li>节点5出队，没有左右孩子，找到节点5；</li><li>节点6出队，没有左右孩子，找到节点6；</li><li>节点7出队，没有左右孩子，找到节点7；</li></ol><h3 id="队列实现" tabindex="-1"><a class="header-anchor" href="#队列实现"><span>队列实现</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">LayerOrder</span><span class="token punctuation">(</span>n <span class="token operator">*</span>Node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	queue <span class="token operator">:=</span> list<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	queue<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	<span class="token keyword">for</span> queue<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		header <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		v <span class="token operator">:=</span> header<span class="token punctuation">.</span>Value<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>Node<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>Data<span class="token punctuation">,</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
		queue<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span>
		<span class="token keyword">if</span> v<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			queue<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> v<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			queue<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例测试-3" tabindex="-1"><a class="header-anchor" href="#示例测试-3"><span>示例测试</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ExampleLayerOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">LayerOrder</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>one<span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// 1 2 3 4 5 6 7</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function o(c,u){return e(),a("div",null,[s(" more "),l])}const k=n(i,[["render",o],["__file","binary-tree.html.vue"]]),v=JSON.parse('{"path":"/data-structure/tree/binary-tree.html","title":"二叉树","lang":"zh-CN","frontmatter":{"title":"二叉树","date":"2023-08-24T00:00:00.000Z","category":["数据结构"],"head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/data-structure/tree/binary-tree.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"二叉树"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-08T06:55:14.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:published_time","content":"2023-08-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T06:55:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二叉树\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-08T06:55:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"先序遍历","slug":"先序遍历","link":"#先序遍历","children":[{"level":3,"title":"递归实现","slug":"递归实现","link":"#递归实现","children":[]},{"level":3,"title":"示例测试","slug":"示例测试","link":"#示例测试","children":[]}]},{"level":2,"title":"中序遍历","slug":"中序遍历","link":"#中序遍历","children":[{"level":3,"title":"递归实现","slug":"递归实现-1","link":"#递归实现-1","children":[]},{"level":3,"title":"示例测试","slug":"示例测试-1","link":"#示例测试-1","children":[]}]},{"level":2,"title":"后续遍历","slug":"后续遍历","link":"#后续遍历","children":[{"level":3,"title":"递归实现","slug":"递归实现-2","link":"#递归实现-2","children":[]},{"level":3,"title":"示例测试","slug":"示例测试-2","link":"#示例测试-2","children":[]}]},{"level":2,"title":"层次遍历","slug":"层次遍历","link":"#层次遍历","children":[{"level":3,"title":"队列实现","slug":"队列实现","link":"#队列实现","children":[]},{"level":3,"title":"示例测试","slug":"示例测试-3","link":"#示例测试-3","children":[]}]}],"git":{"createdTime":1645366383000,"updatedTime":1715151314000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":2},{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":4.4,"words":1320},"filePathRelative":"data-structure/tree/binary-tree.md","localizedDate":"2023年8月24日","excerpt":""}');export{k as comp,v as data};