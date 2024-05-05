import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,f as e,a as n,e as p}from"./app-DLhRJE1G.js";const i="/assets/visitor-D6FhnRLi.png",o={},c=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/visitor/visitor-2x.png",alt:"visitor",tabindex:"0",loading:"lazy"}),n("figcaption",null,"visitor")],-1),l=p('<h2 id="什么是访问者模式" tabindex="-1"><a class="header-anchor" href="#什么是访问者模式"><span>什么是访问者模式</span></a></h2><p>访问者模式(Visitor Pattern)将算法与对象结构分离开来，并在结构中增加可操作元素的能力。其主要思想是在不改变已有类的前提下，通过增加访问者类，来给已有类增加新的操作方法。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色"><span>包含哪些角色</span></a></h3><figure><img src="'+i+`" alt="visitor" tabindex="0" loading="lazy"><figcaption>visitor</figcaption></figure><ul><li><p>Visitor: 访问者</p><p>声明了一些列以对象结构的具体元素为参数的访问者方法</p></li><li><p>ConCreteVistors: 具体访问者</p><p>不同的具体访问者实现访问元素对象各不相同</p></li><li><p>Element: 元素</p><p>声明了一个方法来接收访问者</p></li><li><p>ConcreteElement: 具体元素</p><p>具体元素实现接收方法，该方法根据当前访问者类调用相应访问者方法。</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> visitor

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Visitor <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">VisitConcreteElementA</span><span class="token punctuation">(</span>element <span class="token operator">*</span>ConcreteElementA<span class="token punctuation">)</span>
	<span class="token function">VisitConcreteElementB</span><span class="token punctuation">(</span>element <span class="token operator">*</span>ConcreteElementB<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteVisitor <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>ConcreteVisitor<span class="token punctuation">)</span> <span class="token function">VisitConcreteElementA</span><span class="token punctuation">(</span>element <span class="token operator">*</span>ConcreteElementA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Visit ConcreteElementA&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>ConcreteVisitor<span class="token punctuation">)</span> <span class="token function">VisitConcreteElementB</span><span class="token punctuation">(</span>element <span class="token operator">*</span>ConcreteElementB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Visit ConcreteElementB&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Element <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Accept</span><span class="token punctuation">(</span>visitor Visitor<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteElementA <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>ConcreteElementA<span class="token punctuation">)</span> <span class="token function">Accept</span><span class="token punctuation">(</span>visitor Visitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	visitor<span class="token punctuation">.</span><span class="token function">VisitConcreteElementA</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteElementB <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>ConcreteElementB<span class="token punctuation">)</span> <span class="token function">Accept</span><span class="token punctuation">(</span>visitor Visitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	visitor<span class="token punctuation">.</span><span class="token function">VisitConcreteElementB</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> visitor

<span class="token keyword">func</span> <span class="token function">ExampleVisitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	visitor <span class="token operator">:=</span> <span class="token operator">&amp;</span>ConcreteVisitor<span class="token punctuation">{</span><span class="token punctuation">}</span>
	elementA <span class="token operator">:=</span> <span class="token operator">&amp;</span>ConcreteElementA<span class="token punctuation">{</span><span class="token punctuation">}</span>
	elementB <span class="token operator">:=</span> <span class="token operator">&amp;</span>ConcreteElementB<span class="token punctuation">{</span><span class="token punctuation">}</span>
	elementA<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span>visitor<span class="token punctuation">)</span>
	elementB<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span>visitor<span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// Visit ConcreteElementA</span>
	<span class="token comment">// Visit ConcreteElementB</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2><ul><li>当对象结构比较稳定，但需要经常定义新的操作时，访问者模式可以使用。</li><li>当一组对象中，需要执行不同的、复杂的操作时，可以使用访问者模式来封装这些操作，以简化代码逻辑。</li></ul><h3 id="在不修改已有代码的情况下-向已有类层次结构增加新的行为" tabindex="-1"><a class="header-anchor" href="#在不修改已有代码的情况下-向已有类层次结构增加新的行为"><span>在不修改已有代码的情况下，向已有类层次结构增加新的行为</span></a></h3><p>假如当前已有三种稳定图形类：正方形、圆形、三角形。当前需求是获取这三种图形的面积和周长，且未来可能有其他的行为操作。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> visitor

<span class="token keyword">import</span> <span class="token string">&quot;math&quot;</span>

<span class="token keyword">type</span> Shape <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Accept</span><span class="token punctuation">(</span>visitor CalculateVisitor<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> CalculateVisitor <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">VisitSquare</span><span class="token punctuation">(</span>s <span class="token operator">*</span>Square<span class="token punctuation">)</span>
	<span class="token function">VisitRectangle</span><span class="token punctuation">(</span>r <span class="token operator">*</span>Rectangle<span class="token punctuation">)</span>
	<span class="token function">VisitCircle</span><span class="token punctuation">(</span>c <span class="token operator">*</span>Circle<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 正方形</span>
<span class="token keyword">type</span> Square <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	SideLength <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Square<span class="token punctuation">)</span> <span class="token function">Accept</span><span class="token punctuation">(</span>visitor CalculateVisitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	visitor<span class="token punctuation">.</span><span class="token function">VisitSquare</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 长方形</span>
<span class="token keyword">type</span> Rectangle <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Width  <span class="token builtin">float64</span>
	Height <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Rectangle<span class="token punctuation">)</span> <span class="token function">Accept</span><span class="token punctuation">(</span>visitor CalculateVisitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	visitor<span class="token punctuation">.</span><span class="token function">VisitRectangle</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 圆形</span>
<span class="token keyword">type</span> Circle <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Radius <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Circle<span class="token punctuation">)</span> <span class="token function">Accept</span><span class="token punctuation">(</span>visitor CalculateVisitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	visitor<span class="token punctuation">.</span><span class="token function">VisitCircle</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 面积访问者</span>
<span class="token keyword">type</span> AreaVisitor <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Area <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>av <span class="token operator">*</span>AreaVisitor<span class="token punctuation">)</span> <span class="token function">VisitSquare</span><span class="token punctuation">(</span>s <span class="token operator">*</span>Square<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	av<span class="token punctuation">.</span>Area <span class="token operator">=</span> s<span class="token punctuation">.</span>SideLength <span class="token operator">*</span> s<span class="token punctuation">.</span>SideLength
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>av <span class="token operator">*</span>AreaVisitor<span class="token punctuation">)</span> <span class="token function">VisitRectangle</span><span class="token punctuation">(</span>r <span class="token operator">*</span>Rectangle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	av<span class="token punctuation">.</span>Area <span class="token operator">=</span> r<span class="token punctuation">.</span>Width <span class="token operator">*</span> r<span class="token punctuation">.</span>Height
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>av <span class="token operator">*</span>AreaVisitor<span class="token punctuation">)</span> <span class="token function">VisitCircle</span><span class="token punctuation">(</span>c <span class="token operator">*</span>Circle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	av<span class="token punctuation">.</span>Area <span class="token operator">=</span> math<span class="token punctuation">.</span>Pi <span class="token operator">*</span> c<span class="token punctuation">.</span>Radius <span class="token operator">*</span> c<span class="token punctuation">.</span>Radius
<span class="token punctuation">}</span>

<span class="token comment">// 周长访问者</span>
<span class="token keyword">type</span> PerimeterVisitor <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Perimeter <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>pv <span class="token operator">*</span>PerimeterVisitor<span class="token punctuation">)</span> <span class="token function">VisitSquare</span><span class="token punctuation">(</span>s <span class="token operator">*</span>Square<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	pv<span class="token punctuation">.</span>Perimeter <span class="token operator">=</span> <span class="token number">4</span> <span class="token operator">*</span> s<span class="token punctuation">.</span>SideLength
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>pv <span class="token operator">*</span>PerimeterVisitor<span class="token punctuation">)</span> <span class="token function">VisitRectangle</span><span class="token punctuation">(</span>r <span class="token operator">*</span>Rectangle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	pv<span class="token punctuation">.</span>Perimeter <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token punctuation">(</span>r<span class="token punctuation">.</span>Width <span class="token operator">+</span> r<span class="token punctuation">.</span>Height<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>pv <span class="token operator">*</span>PerimeterVisitor<span class="token punctuation">)</span> <span class="token function">VisitCircle</span><span class="token punctuation">(</span>c <span class="token operator">*</span>Circle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	pv<span class="token punctuation">.</span>Perimeter <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> math<span class="token punctuation">.</span>Pi <span class="token operator">*</span> c<span class="token punctuation">.</span>Radius
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> visitor

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">ExampleShape</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	square <span class="token operator">:=</span> <span class="token operator">&amp;</span>Square<span class="token punctuation">{</span>SideLength<span class="token punctuation">:</span> <span class="token number">4.0</span><span class="token punctuation">}</span>
	rectangle <span class="token operator">:=</span> <span class="token operator">&amp;</span>Rectangle<span class="token punctuation">{</span>Width<span class="token punctuation">:</span> <span class="token number">3.0</span><span class="token punctuation">,</span> Height<span class="token punctuation">:</span> <span class="token number">5.0</span><span class="token punctuation">}</span>
	circle <span class="token operator">:=</span> <span class="token operator">&amp;</span>Circle<span class="token punctuation">{</span>Radius<span class="token punctuation">:</span> <span class="token number">2.0</span><span class="token punctuation">}</span>

	areaVisitor <span class="token operator">:=</span> <span class="token operator">&amp;</span>AreaVisitor<span class="token punctuation">{</span><span class="token punctuation">}</span>
	square<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span>areaVisitor<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;square area:&quot;</span><span class="token punctuation">,</span> areaVisitor<span class="token punctuation">.</span>Area<span class="token punctuation">)</span>
	rectangle<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span>areaVisitor<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;rectangle area:&quot;</span><span class="token punctuation">,</span> areaVisitor<span class="token punctuation">.</span>Area<span class="token punctuation">)</span>
	circle<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span>areaVisitor<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;circle area:&quot;</span><span class="token punctuation">,</span> areaVisitor<span class="token punctuation">.</span>Area<span class="token punctuation">)</span>

	perimeterVisitor <span class="token operator">:=</span> <span class="token operator">&amp;</span>PerimeterVisitor<span class="token punctuation">{</span><span class="token punctuation">}</span>
	square<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span>perimeterVisitor<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;square perimeter:&quot;</span><span class="token punctuation">,</span> perimeterVisitor<span class="token punctuation">.</span>Perimeter<span class="token punctuation">)</span>
	rectangle<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span>perimeterVisitor<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;rectangle perimeter:&quot;</span><span class="token punctuation">,</span> perimeterVisitor<span class="token punctuation">.</span>Perimeter<span class="token punctuation">)</span>
	circle<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span>perimeterVisitor<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;circle perimeter:&quot;</span><span class="token punctuation">,</span> perimeterVisitor<span class="token punctuation">.</span>Perimeter<span class="token punctuation">)</span>

	<span class="token comment">// Output:</span>
	<span class="token comment">// square area: 16</span>
	<span class="token comment">// rectangle area: 15</span>
	<span class="token comment">// circle area: 12.566370614359172</span>
	<span class="token comment">// square perimeter: 16</span>
	<span class="token comment">// rectangle perimeter: 16</span>
	<span class="token comment">// circle perimeter: 12.566370614359172</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里只需要实现面积访问者类和周长访问者类就可以不用动三个图形类。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3><ul><li>增加新的操作时不需要改变现有的对象结构，只需要增加新的访问者即可。</li><li>结构和操作分离，符合<strong>单一职责原则</strong>和<strong>开闭原则</strong>，降低了系统的耦合度。</li><li>把数据结构和操作分离，可以使得代码更容易理解和维护。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h3><ul><li>增加新的元素时比较困难，需要修改抽象访问者的接口以及所有的具体访问者的实现。</li><li>访问者模式将对象本身和操作分离开来，导致增加新的操作不够方便。</li></ul>`,22);function u(r,d){return a(),t("div",null,[c,e(" more "),l])}const m=s(o,[["render",u],["__file","visitor.html.vue"]]),b=JSON.parse('{"path":"/design-pattern/behavioral/visitor.html","title":"访问者","lang":"zh-CN","frontmatter":{"title":"访问者","date":"2023-05-05T00:00:00.000Z","tag":["Go","行为型模式"],"category":["设计模式"],"description":"visitorvisitor","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/design-pattern/behavioral/visitor.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"访问者"}],["meta",{"property":"og:description","content":"visitorvisitor"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://refactoringguru.cn/images/patterns/content/visitor/visitor-2x.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-31T14:52:38.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"行为型模式"}],["meta",{"property":"article:published_time","content":"2023-05-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-31T14:52:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"访问者\\",\\"image\\":[\\"https://refactoringguru.cn/images/patterns/content/visitor/visitor-2x.png\\"],\\"datePublished\\":\\"2023-05-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-31T14:52:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"什么是访问者模式","slug":"什么是访问者模式","link":"#什么是访问者模式","children":[{"level":3,"title":"包含哪些角色","slug":"包含哪些角色","link":"#包含哪些角色","children":[]},{"level":3,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]}]},{"level":2,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[{"level":3,"title":"在不修改已有代码的情况下，向已有类层次结构增加新的行为","slug":"在不修改已有代码的情况下-向已有类层次结构增加新的行为","link":"#在不修改已有代码的情况下-向已有类层次结构增加新的行为","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}]}],"git":{"createdTime":1690708801000,"updatedTime":1690815158000,"contributors":[{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":2}]},"readingTime":{"minutes":2.99,"words":898},"filePathRelative":"design-pattern/behavioral/visitor.md","localizedDate":"2023年5月5日","excerpt":"<figure><img src=\\"https://refactoringguru.cn/images/patterns/content/visitor/visitor-2x.png\\" alt=\\"visitor\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>visitor</figcaption></figure>\\n","autoDesc":true}');export{m as comp,b as data};
