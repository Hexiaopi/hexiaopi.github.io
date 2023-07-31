import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as e,a as t}from"./app-a6d677d7.js";const p={},i=t(`<h2 id="solid原则" tabindex="-1"><a class="header-anchor" href="#solid原则" aria-hidden="true">#</a> SOLID原则</h2><p>SOLID原则是由罗伯特·C·马丁在21世纪早期引入，指代了面向对象编程和面向对象设计的五个基本原则。遵循SOLID原则可以确保我们设计的代码是易维护、易扩展、易阅读的。SOLID原则同样也适用于Go程序设计。具体SOLID编码原则见下表：</p><table><thead><tr><th>简写</th><th>全称</th><th>中文描述</th></tr></thead><tbody><tr><td>SRP</td><td>The Single Responsibility Principle</td><td>单一功能原则</td></tr><tr><td>OCP</td><td>The Open Closed Principle</td><td>开闭原则</td></tr><tr><td>LSP</td><td>The Liskov Substitution Principle</td><td>里氏替换原则</td></tr><tr><td>DIP</td><td>The Dependency Inversion Principle</td><td>依赖倒置原则</td></tr><tr><td>ISP</td><td>The Interface Segregation Principle</td><td>接口分离原则</td></tr></tbody></table><h3 id="单一功能原则" tabindex="-1"><a class="header-anchor" href="#单一功能原则" aria-hidden="true">#</a> 单一功能原则</h3><blockquote><p>单一功能原则：一个类或者模块只负责完成一个职责(或者功能)。</p></blockquote><p>简单来说就是保证我们在设计函数、方法时做到功能单一，权责明确，当发生改变时，只有一个改变它的原因。如果函数/方法承担的功能过多，就意味着很多功能会相互耦合，这样当其中一个功能发生改变时，可能会影响其它功能。单一功能原则，可以使代码后期的维护成本更低、改动风险更低。</p><p>例如，有以下代码，用来创建一个班级，班级包含老师和学生，代码如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> srp

<span class="token keyword">type</span> Class <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Teacher <span class="token operator">*</span>Teacher
	Student <span class="token operator">*</span>Student
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Teacher <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name  <span class="token builtin">string</span>
	Class <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name  <span class="token builtin">string</span>
	Class <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">createClass</span><span class="token punctuation">(</span>teacherName<span class="token punctuation">,</span> studentName <span class="token builtin">string</span><span class="token punctuation">,</span> class <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Teacher<span class="token punctuation">,</span> <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	teacher <span class="token operator">:=</span> <span class="token operator">&amp;</span>Teacher<span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span>  teacherName<span class="token punctuation">,</span>
		Class<span class="token punctuation">:</span> class<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	student <span class="token operator">:=</span> <span class="token operator">&amp;</span>Student<span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span>  studentName<span class="token punctuation">,</span>
		Class<span class="token punctuation">:</span> class<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> teacher<span class="token punctuation">,</span> student
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">CreateClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Class <span class="token punctuation">{</span>
	teacher<span class="token punctuation">,</span> student <span class="token operator">:=</span> <span class="token function">createClass</span><span class="token punctuation">(</span><span class="token string">&quot;colin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;lily&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Class<span class="token punctuation">{</span>
		Teacher<span class="token punctuation">:</span> teacher<span class="token punctuation">,</span>
		Student<span class="token punctuation">:</span> student<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码段通过<code>createClass</code>函数创建了一个老师和学生，老师和学生属于同一个班级。但是现在因为老师资源不够，要求一个老师管理多个班级。这时候，需要修改<code>createClass</code>函数的class参数，因为创建学生和老师是通过<code>createClass</code>函数的class参数偶合在一起，所以修改创建老师的代码，势必会影响创建学生的代码，其实，创建学生的代码我们是压根不想改动的。这时候<code>createClass</code>函数就不满足单一功能原则。需要修改为满足单一功能原则的代码，修改后代码段如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> srp

<span class="token keyword">type</span> Class <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Teacher <span class="token operator">*</span>Teacher
	Student <span class="token operator">*</span>Student
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Teacher <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name  <span class="token builtin">string</span>
	Class <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name  <span class="token builtin">string</span>
	Class <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">CreateStudent</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> class <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Student <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Student<span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span>  name<span class="token punctuation">,</span>
		Class<span class="token punctuation">:</span> class<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">CreateTeacher</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> classes <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Teacher <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Teacher<span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span>  name<span class="token punctuation">,</span>
		Class<span class="token punctuation">:</span> classes<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">CreateClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Class <span class="token punctuation">{</span>
	teacher <span class="token operator">:=</span> <span class="token function">CreateTeacher</span><span class="token punctuation">(</span><span class="token string">&quot;colin&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	student <span class="token operator">:=</span> <span class="token function">CreateStudent</span><span class="token punctuation">(</span><span class="token string">&quot;lily&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Class<span class="token punctuation">{</span>
		Teacher<span class="token punctuation">:</span> teacher<span class="token punctuation">,</span>
		Student<span class="token punctuation">:</span> student<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码，我们将<code>createClass</code>函数拆分成2个函数<code>CreateStudent</code>和<code>CreateTeacher</code>，分别用来创建学生和老师，各司其职，代码互不影响。</p><h3 id="开闭原则" tabindex="-1"><a class="header-anchor" href="#开闭原则" aria-hidden="true">#</a> 开闭原则</h3><blockquote><p>开闭原则：软件实体应该对扩展开放、对修改关闭。</p></blockquote><p>简单来说就是通过在已有代码基础上扩展代码，而非修改代码的方式来完成新功能的添加。开闭原则，并不是说完全杜绝修改，而是尽可能不修改或者以最小的代码修改代价来完成新功能的添加。</p><p>以下是一个满足开闭原则的代码段：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> IBook <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
	<span class="token function">GetPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">// NovelBook 小说</span>
<span class="token keyword">type</span> NovelBook <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name   <span class="token builtin">string</span>
	Price  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>n <span class="token operator">*</span>NovelBook<span class="token punctuation">)</span> <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> n<span class="token punctuation">.</span>Name
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>n <span class="token operator">*</span>NovelBook<span class="token punctuation">)</span> <span class="token function">GetPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> n<span class="token punctuation">.</span>Price
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码段，定义了一个Book接口和Book接口的一个实现：NovelBook（小说）。现在有新的需求，对所有小说打折统一打5折，根据开闭原则，<strong>打折相关的功能应该利用扩展实现，而不是在原有代码上修改</strong>，所以，新增一个OffNovelBook接口，继承NovelBook，并重写GetPrice方法。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> OffNovelBook <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	NovelBook
<span class="token punctuation">}</span>

<span class="token comment">// 重写GetPrice方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>n <span class="token operator">*</span>OffNovelBook<span class="token punctuation">)</span> <span class="token function">GetPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> n<span class="token punctuation">.</span>NovelBook<span class="token punctuation">.</span><span class="token function">GetPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="里氏替换原则" tabindex="-1"><a class="header-anchor" href="#里氏替换原则" aria-hidden="true">#</a> 里氏替换原则</h3><blockquote><p>里氏替换原则：如果S是T的子类型，则类型T的对象可以替换为类型S的对象，而不会破坏程序。在Go开发中，里氏替换原则可以通过接口来实现。</p></blockquote><p>例如，以下是一个符合里氏替换原则的代码段：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Reader <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Read</span><span class="token punctuation">(</span>p <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Writer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Write</span><span class="token punctuation">(</span>p <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ReadWriter <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	Reader
	Writer
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Write</span><span class="token punctuation">(</span>w Writer<span class="token punctuation">,</span> p <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以将Write函数中的Writer参数替换为其子类型ReadWriter，而不影响已有程序：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Write</span><span class="token punctuation">(</span>rw ReadWriter<span class="token punctuation">,</span> p <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> rw<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="依赖倒置原则" tabindex="-1"><a class="header-anchor" href="#依赖倒置原则" aria-hidden="true">#</a> 依赖倒置原则</h3><blockquote><p>依赖倒置原则：依赖于抽象而不是一个实例，其本质是要面向接口编程，不要面向实现编程。</p></blockquote><p>以下是一个符合依赖倒置原则的代码段：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> solid

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// IDriver 司机抽象接口</span>
<span class="token keyword">type</span> IDriver <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Drive</span><span class="token punctuation">(</span>car ICar<span class="token punctuation">)</span> <span class="token comment">// 开车</span>
<span class="token punctuation">}</span>

<span class="token comment">// Driver 具体的司机</span>
<span class="token keyword">type</span> Driver <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// Drive 实现IDriver接口</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>Driver<span class="token punctuation">)</span> <span class="token function">Drive</span><span class="token punctuation">(</span>car ICar<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	car<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// ICar 汽车抽象接口</span>
<span class="token keyword">type</span> ICar <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 不同汽车的实现</span>
<span class="token comment">// Benz 奔驰汽车</span>
<span class="token keyword">type</span> Benz <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>Benz<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;奔驰汽车开始运行...&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// BMW 宝马汽车</span>
<span class="token keyword">type</span> BMW <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>BMW<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;宝马汽车开始运行...&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，IDriver接口的Drive方法，依赖于ICar接口，而不是某一具体的汽车类型。这样司机就可以开不同的汽车。</p><h3 id="接口隔离原则" tabindex="-1"><a class="header-anchor" href="#接口隔离原则" aria-hidden="true">#</a> 接口隔离原则</h3><blockquote><p>接口隔离原则：客户端程序不应该依赖它不需要的方法。</p></blockquote><p>例如，我们通过Save函数将文档保存到磁盘：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Save writes the contents of doc to the file f.</span>
<span class="token keyword">func</span> <span class="token function">Save</span><span class="token punctuation">(</span>f <span class="token operator">*</span>os<span class="token punctuation">.</span>File<span class="token punctuation">,</span> doc <span class="token operator">*</span>Document<span class="token punctuation">)</span> <span class="token builtin">error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的Save函数虽然能够完成任务，但有下面的问题：</p><ol><li>Save函数使用*os.File做为保存Document的文件，如果后面需要将Document保存到网络存储，Save函数就无法满足。</li><li>因为Save函数直接保存文档到磁盘，不方便后续的测试。</li><li>*os.File包含了许多跟Save函数的方法，例如：读取路径以及检查路径是否是软连接等。</li></ol><p>可以说上述的Save方法不满足接口隔离原则。可以优化为：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Save writes the contents of doc to the supplied ReadWriter.</span>
<span class="token keyword">func</span> <span class="token function">Save</span><span class="token punctuation">(</span>rw io<span class="token punctuation">.</span>ReadWriter<span class="token punctuation">,</span> doc <span class="token operator">*</span>Document<span class="token punctuation">)</span> <span class="token builtin">error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是上述的Save函数仍然有问题，我们其实只需要写操作，不需要读操作，因此，Save函数可以进一步优化为：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Save writes the contents of doc to the supplied Writer.</span>
<span class="token keyword">func</span> <span class="token function">Save</span><span class="token punctuation">(</span>w io<span class="token punctuation">.</span>Writer<span class="token punctuation">,</span> doc <span class="token operator">*</span>Document<span class="token punctuation">)</span> <span class="token builtin">error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>func Save(w io.Writer, doc *Document) error</code>就是最终的符合接口隔离原则的函数。</p><h2 id="dry原则" tabindex="-1"><a class="header-anchor" href="#dry原则" aria-hidden="true">#</a> DRY原则</h2><blockquote><p>DRY: Don&#39;t Repeat Yourself，不要重复自己</p><p>避免在代码中出现重复的逻辑和代码，可以通过封装来实现重复代码的复用。</p></blockquote><h2 id="kiss原则" tabindex="-1"><a class="header-anchor" href="#kiss原则" aria-hidden="true">#</a> KISS原则</h2><blockquote><p>KISS: Keep It Simple,Stupid，尽可能简化代码</p><p>不要使用过于复杂的算法和设计模式。</p></blockquote><h2 id="yangi原则" tabindex="-1"><a class="header-anchor" href="#yangi原则" aria-hidden="true">#</a> YANGI原则</h2><blockquote><p>YANGI: You Ain&#39;t Gonna Need It，你不会需要它</p><p>在编写代码时，不要过度设计，只保持足够的可扩展性，不要编写没有必要的代码。</p></blockquote><h2 id="lod原则" tabindex="-1"><a class="header-anchor" href="#lod原则" aria-hidden="true">#</a> LOD原则</h2><blockquote><p>LOD: Law of Demeter,迪米特法则。或者称为：The Least Knowledge Principle，最小知识原则。</p><p>一个对象应该对其它对象有最少的了解。避免在代码中出现过多的依赖关系，可以通过使用接口和依赖注入等方式来实现。</p></blockquote>`,48);function c(o,l){return s(),a("div",null,[e(" more "),i])}const r=n(p,[["render",c],["__file","principle.html.vue"]]);export{r as default};
