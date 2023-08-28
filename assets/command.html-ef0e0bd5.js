import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,f as p,a as n,e}from"./app-c0e959d1.js";const c="/assets/command-2ece4fda.png",o={},i=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/command/command-zh-2x.png",alt:"command",tabindex:"0",loading:"lazy"}),n("figcaption",null,"command")],-1),u=e('<h2 id="什么是行为型模式" tabindex="-1"><a class="header-anchor" href="#什么是行为型模式" aria-hidden="true">#</a> 什么是行为型模式</h2><p>命令设计模式允许将请求封装成对象，从而将不同的请求发送者与接收者解耦。命令对象包含了请求的所有信息，包括调用的方法、参数和接收者等。这种方式使得请求的发送者与接收者无需知道彼此的存在，从而可以更灵活地进行交互。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3><figure><img src="'+c+`" alt="command" tabindex="0" loading="lazy"><figcaption>command</figcaption></figure><ul><li><p>Invoker: 调用者</p><p>创建和配置命命令对象，并将其传递给接收者</p></li><li><p>Command: 命令接口</p><p>定义命令的核心接口，通常包括一个执行方法</p></li><li><p>ConcreteCommand: 具体命令类</p><p>实现命令接口，并封装具体的操作。通常需要引用接收者，从而调用对应的方法</p></li><li><p>Receiver: 接收者</p><p>实现请求的实际操作，命令对象将请求传递给接收者，从而完成请求</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> command

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Command <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Receiver <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Receiver<span class="token punctuation">)</span> <span class="token function">operation1</span><span class="token punctuation">(</span>a <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;operation1:&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Receiver<span class="token punctuation">)</span> <span class="token function">operation2</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;operation2:&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Invoker <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	cmd Command
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>i <span class="token operator">*</span>Invoker<span class="token punctuation">)</span> <span class="token function">SetCommand</span><span class="token punctuation">(</span>cmd Command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	i<span class="token punctuation">.</span>cmd <span class="token operator">=</span> cmd
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>i <span class="token operator">*</span>Invoker<span class="token punctuation">)</span> <span class="token function">ExecuteCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	i<span class="token punctuation">.</span>cmd<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreateCommand1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name     <span class="token builtin">string</span>
	receiver <span class="token operator">*</span>Receiver
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>ConcreateCommand1<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">operation1</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreateCommand2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name     <span class="token builtin">string</span>
	desc     <span class="token builtin">string</span>
	address  <span class="token builtin">string</span>
	receiver <span class="token operator">*</span>Receiver
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>ConcreateCommand2<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">operation2</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>name<span class="token punctuation">,</span> c<span class="token punctuation">.</span>desc<span class="token punctuation">,</span> c<span class="token punctuation">.</span>address<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> command

<span class="token keyword">func</span> <span class="token function">ExampleCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	receiver <span class="token operator">:=</span> Receiver<span class="token punctuation">{</span><span class="token punctuation">}</span>
	invoker <span class="token operator">:=</span> Invoker<span class="token punctuation">{</span><span class="token punctuation">}</span>

	cmd1 <span class="token operator">:=</span> ConcreateCommand1<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span> receiver<span class="token punctuation">:</span> <span class="token operator">&amp;</span>receiver<span class="token punctuation">}</span>
	invoker<span class="token punctuation">.</span><span class="token function">SetCommand</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>cmd1<span class="token punctuation">)</span>
	invoker<span class="token punctuation">.</span><span class="token function">ExecuteCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	cmd2 <span class="token operator">:=</span> ConcreateCommand2<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span> desc<span class="token punctuation">:</span> <span class="token string">&quot;描述&quot;</span><span class="token punctuation">,</span> address<span class="token punctuation">:</span> <span class="token string">&quot;地址&quot;</span><span class="token punctuation">,</span> receiver<span class="token punctuation">:</span> <span class="token operator">&amp;</span>receiver<span class="token punctuation">}</span>
	invoker<span class="token punctuation">.</span><span class="token function">SetCommand</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>cmd2<span class="token punctuation">)</span>
	invoker<span class="token punctuation">.</span><span class="token function">ExecuteCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// Output:</span>
	<span class="token comment">// operation1: admin</span>
	<span class="token comment">// operation2: admin 描述 地址</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li><p>需要将请求和执行操作解耦的情况。命令模式可以将请求封装为对象并将其发送给接收者，从而使得发送者和接收者之间松耦合。</p></li><li><p>需要支持撤销或重做操作的情况。由于每个命令都封装了一组特定的操作，因此可以轻松进行撤销或重做。</p></li><li><p>需要支持事务操作的情况。将一组相关的命令组合在一起，可以实现事务操作，即一组操作要么全部成功执行，要么全部失败。</p></li><li><p>需要远程执行操作的情况。将命令对象序列化到网络上，可以实现远程执行操作的功能。</p></li><li><p>需要将命令队列中的请求延迟、调度或者执行的情况。可以将命令对象存储在队列中，然后按照特定的规则执行它们。</p></li><li><p>需要实现日志、审计或者事务记录的情况。可以在执行命令的同时，将其记录下来，并可以将其回放以重现历史操作。</p></li></ul><h3 id="请求与执行解耦" tabindex="-1"><a class="header-anchor" href="#请求与执行解耦" aria-hidden="true">#</a> 请求与执行解耦</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> command

<span class="token keyword">type</span> Commander <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> AddCommand <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	receiver <span class="token operator">*</span>Origin
	value    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>AddCommand<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> SubtractCommand <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	receiver <span class="token operator">*</span>Origin
	value    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>SubtractCommand<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">Subtract</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> MultiplyCommand <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	receiver <span class="token operator">*</span>Origin
	value    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>MultiplyCommand<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">Multiply</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> DivideCommand <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	receiver <span class="token operator">*</span>Origin
	value    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>DivideCommand<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">Divide</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Origin <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	value <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Origin<span class="token punctuation">)</span> <span class="token function">Add</span><span class="token punctuation">(</span>value <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r<span class="token punctuation">.</span>value <span class="token operator">+=</span> value
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Origin<span class="token punctuation">)</span> <span class="token function">Subtract</span><span class="token punctuation">(</span>value <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r<span class="token punctuation">.</span>value <span class="token operator">-=</span> value
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Origin<span class="token punctuation">)</span> <span class="token function">Multiply</span><span class="token punctuation">(</span>value <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r<span class="token punctuation">.</span>value <span class="token operator">*=</span> value
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Origin<span class="token punctuation">)</span> <span class="token function">Divide</span><span class="token punctuation">(</span>value <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r<span class="token punctuation">.</span>value <span class="token operator">/=</span> value
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Computer <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	commands <span class="token punctuation">[</span><span class="token punctuation">]</span>Commander
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>i <span class="token operator">*</span>Computer<span class="token punctuation">)</span> <span class="token function">AddCommand</span><span class="token punctuation">(</span>command Commander<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	i<span class="token punctuation">.</span>commands <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>commands<span class="token punctuation">,</span> command<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>i <span class="token operator">*</span>Computer<span class="token punctuation">)</span> <span class="token function">ExecuteCommands</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> command <span class="token operator">:=</span> <span class="token keyword">range</span> i<span class="token punctuation">.</span>commands <span class="token punctuation">{</span>
		command<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package command

import &quot;fmt&quot;

func ExampleComputer() {
	computer := Computer{}
	origin := Origin{10}
	addCmd := AddCommand{&amp;origin, 20}
	subCmd := SubtractCommand{&amp;origin, 15}
	mulCmd := MultiplyCommand{&amp;origin, 2}
	divCmd := DivideCommand{&amp;origin, 3}
	computer.AddCommand(&amp;addCmd)
	computer.AddCommand(&amp;subCmd)
	computer.AddCommand(&amp;mulCmd)
	computer.AddCommand(&amp;divCmd)
	computer.ExecuteCommands()
	fmt.Println(origin.value)
	// Output:
	// 10
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将请求者Computer和接收者Origin，进行了解耦。请求者可以任意追加命令，执行：加、减、乘、除等运算。</p><h3 id="撤销操作" tabindex="-1"><a class="header-anchor" href="#撤销操作" aria-hidden="true">#</a> 撤销操作</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> command

<span class="token keyword">type</span> Commander <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">Undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> AddCommand <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	receiver <span class="token operator">*</span>Origin
	value    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>AddCommand<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>AddCommand<span class="token punctuation">)</span> <span class="token function">Undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">Subtract</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> SubtractCommand <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	receiver <span class="token operator">*</span>Origin
	value    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>SubtractCommand<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">Subtract</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>SubtractCommand<span class="token punctuation">)</span> <span class="token function">Undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> MultiplyCommand <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	receiver <span class="token operator">*</span>Origin
	value    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>MultiplyCommand<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">Multiply</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>MultiplyCommand<span class="token punctuation">)</span> <span class="token function">Undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">Divide</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> DivideCommand <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	receiver <span class="token operator">*</span>Origin
	value    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>DivideCommand<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">Divide</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>DivideCommand<span class="token punctuation">)</span> <span class="token function">Undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">Multiply</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Origin <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	value <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Origin<span class="token punctuation">)</span> <span class="token function">Add</span><span class="token punctuation">(</span>value <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r<span class="token punctuation">.</span>value <span class="token operator">+=</span> value
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Origin<span class="token punctuation">)</span> <span class="token function">Subtract</span><span class="token punctuation">(</span>value <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r<span class="token punctuation">.</span>value <span class="token operator">-=</span> value
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Origin<span class="token punctuation">)</span> <span class="token function">Multiply</span><span class="token punctuation">(</span>value <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r<span class="token punctuation">.</span>value <span class="token operator">*=</span> value
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Origin<span class="token punctuation">)</span> <span class="token function">Divide</span><span class="token punctuation">(</span>value <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r<span class="token punctuation">.</span>value <span class="token operator">/=</span> value
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Computer <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	commands <span class="token punctuation">[</span><span class="token punctuation">]</span>Commander
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>i <span class="token operator">*</span>Computer<span class="token punctuation">)</span> <span class="token function">AddCommand</span><span class="token punctuation">(</span>command Commander<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	i<span class="token punctuation">.</span>commands <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>commands<span class="token punctuation">,</span> command<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>i <span class="token operator">*</span>Computer<span class="token punctuation">)</span> <span class="token function">ExecuteCommands</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> command <span class="token operator">:=</span> <span class="token keyword">range</span> i<span class="token punctuation">.</span>commands <span class="token punctuation">{</span>
		command<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>i <span class="token operator">*</span>Computer<span class="token punctuation">)</span> <span class="token function">UndoLastCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>commands<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		cmd <span class="token operator">:=</span> i<span class="token punctuation">.</span>commands<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>commands<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
		cmd<span class="token punctuation">.</span><span class="token function">Undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		i<span class="token punctuation">.</span>commands <span class="token operator">=</span> i<span class="token punctuation">.</span>commands<span class="token punctuation">[</span><span class="token number">0</span> <span class="token punctuation">:</span> <span class="token function">len</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>commands<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ExampleComputerUndo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	computer <span class="token operator">:=</span> Computer<span class="token punctuation">{</span><span class="token punctuation">}</span>
	origin <span class="token operator">:=</span> Origin<span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span>
	addCmd <span class="token operator">:=</span> AddCommand<span class="token punctuation">{</span><span class="token operator">&amp;</span>origin<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span>
	subCmd <span class="token operator">:=</span> SubtractCommand<span class="token punctuation">{</span><span class="token operator">&amp;</span>origin<span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">}</span>
	mulCmd <span class="token operator">:=</span> MultiplyCommand<span class="token punctuation">{</span><span class="token operator">&amp;</span>origin<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>
	divCmd <span class="token operator">:=</span> DivideCommand<span class="token punctuation">{</span><span class="token operator">&amp;</span>origin<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
	computer<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>addCmd<span class="token punctuation">)</span>
	computer<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>subCmd<span class="token punctuation">)</span>
	computer<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>mulCmd<span class="token punctuation">)</span>
	computer<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>divCmd<span class="token punctuation">)</span>
	computer<span class="token punctuation">.</span><span class="token function">ExecuteCommands</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>origin<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
	computer<span class="token punctuation">.</span><span class="token function">UndoLastCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>origin<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
	computer<span class="token punctuation">.</span><span class="token function">UndoLastCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>origin<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
	computer<span class="token punctuation">.</span><span class="token function">UndoLastCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>origin<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// 10</span>
	<span class="token comment">// 30</span>
  <span class="token comment">// 15</span>
	<span class="token comment">// 30</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们对Commonder接口增加Undo方法，即可以实现计算器的撤销操作。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>命令模式可以降低代码的耦合度，并且将请求调用者与请求接收者进行解耦；</li><li>命令模式扩展性较高 <ul><li>如果是扩展新的命令，那么直接定义新的命令类即可；</li><li>如果是执行一组命令，那么</li></ul></li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>可能会导致性能问题。使用命令模式可能会增加对象数量，并且每个命令都需要进行封装，可能会导致性能下降。</li><li>可能会使代码更加复杂。使用命令模式需要定义许多接口和类，可能会使代码过于复杂，难以维护。</li></ul>`,26);function l(d,r){return a(),t("div",null,[i,p(" more "),u])}const m=s(o,[["render",l],["__file","command.html.vue"]]);export{m as default};
