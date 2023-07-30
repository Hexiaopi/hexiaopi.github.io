import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as p,b as e,a as o,e as n,f as s}from"./app-ac29efd4.js";const c={},l=o(`<h2 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁" aria-hidden="true">#</a> 分布式锁</h2><blockquote><p>分布式锁即在分布式环境下不同实例之间抢一把锁，相比较单一实例的锁，分布式环境下带来的问题更多，例如网络问题。<br> 分布式锁可以通过多种途径实现，例如:Zookeeper等。由于Redis是经常使用的中间件，本篇内容基于Redis实现分布式锁。</p></blockquote><p>特性：</p><ul><li>互斥性：任意时刻，只有一个客户端能持有锁；</li><li>锁超时释放：持有锁超时，可以释放，防止不必要的资源浪费，也可以防止死锁；</li><li>可重入性：一个线程如果获取了锁之后，可以再次对其请求加锁；</li><li>高性能和高可用：加锁和解锁需要开销尽可能低，同时也要保证高可用，避免分布式锁失效；</li><li>安全性：锁只能被持有的客户端释放，不能被其他客户端释放</li></ul><h3 id="简单版本" tabindex="-1"><a class="header-anchor" href="#简单版本" aria-hidden="true">#</a> 简单版本</h3><blockquote><p>锁的特性就是排他性，这里可以通过Redis的命令：<code>SETNX</code>，该命令：</p><ul><li>只在键key不存在的情况下，将键的值设置为value，返回1；</li><li>若键key已存在，则SETNX命令不做任何操作，返回0；</li></ul></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> redislock

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;errors&quot;</span>
	<span class="token string">&quot;time&quot;</span>

	<span class="token string">&quot;github.com/go-redis/redis/v9&quot;</span>
	<span class="token string">&quot;github.com/google/uuid&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	ErrObtainLockFail  <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;fail to obtain lock&quot;</span><span class="token punctuation">)</span>
	ErrReleaseLockFail <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;fail to release lock&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Client <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	client redis<span class="token punctuation">.</span>Cmdable
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewClient</span><span class="token punctuation">(</span>client redis<span class="token punctuation">.</span>Cmdable<span class="token punctuation">)</span> <span class="token operator">*</span>Client <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Client<span class="token punctuation">{</span>
		client<span class="token punctuation">:</span> client<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Lock <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	client redis<span class="token punctuation">.</span>Cmdable
	key    <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Client<span class="token punctuation">)</span> <span class="token function">ObtainLock</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> key <span class="token builtin">string</span><span class="token punctuation">,</span> expiration time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Lock<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	value <span class="token operator">:=</span> uuid<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	res<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">SetNX</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> expiration<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Result</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>res <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> ErrObtainLockFail
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token function">newLock</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>client<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">newLock</span><span class="token punctuation">(</span>client redis<span class="token punctuation">.</span>Cmdable<span class="token punctuation">,</span> key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Lock <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Lock<span class="token punctuation">{</span>
		client<span class="token punctuation">:</span> client<span class="token punctuation">,</span>
		key<span class="token punctuation">:</span>    key<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Lock<span class="token punctuation">)</span> <span class="token function">Release</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	res<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">Del</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> c<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Result</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> res <span class="token operator">!=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> ErrReleaseLockFail
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是这里的释放其实是存在问题的：</p><ul><li>当redis存储的是别人的锁，直接删除key这就会导致删除别人的锁问题</li></ul><h3 id="解决锁释放问题" tabindex="-1"><a class="header-anchor" href="#解决锁释放问题" aria-hidden="true">#</a> 解决锁释放问题</h3><blockquote><p>方法就是生产唯一的value，只有当前redis存储的value是自己的才可以删除</p><p>为了保证原子性，即查询redis的value和删除动作是一起进行操作，这里采用lua脚本去保证</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> redislock

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token boolean">_</span> <span class="token string">&quot;embed&quot;</span>
	<span class="token string">&quot;errors&quot;</span>
	<span class="token string">&quot;time&quot;</span>

	<span class="token string">&quot;github.com/go-redis/redis/v9&quot;</span>
	<span class="token string">&quot;github.com/google/uuid&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	ErrObtainLockFail  <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;fail to obtain lock&quot;</span><span class="token punctuation">)</span>
	ErrReleaseLockFail <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;fail to release lock&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	<span class="token comment">//go:embed release.lua</span>
	releaseLua <span class="token builtin">string</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Client <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	client redis<span class="token punctuation">.</span>Cmdable
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewClient</span><span class="token punctuation">(</span>client redis<span class="token punctuation">.</span>Cmdable<span class="token punctuation">)</span> <span class="token operator">*</span>Client <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Client<span class="token punctuation">{</span>
		client<span class="token punctuation">:</span> client<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> lock <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	client redis<span class="token punctuation">.</span>Cmdable
	key    <span class="token builtin">string</span>
	value  <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Client<span class="token punctuation">)</span> <span class="token function">ObtainLock</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> key <span class="token builtin">string</span><span class="token punctuation">,</span> expiration time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>lock<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	value <span class="token operator">:=</span> uuid<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	res<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">SetNX</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> expiration<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Result</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>res <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> ErrObtainLockFail
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token function">newLock</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>client<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">newLock</span><span class="token punctuation">(</span>client redis<span class="token punctuation">.</span>Cmdable<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>lock <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>lock<span class="token punctuation">{</span>
		client<span class="token punctuation">:</span> client<span class="token punctuation">,</span>
		key<span class="token punctuation">:</span>    key<span class="token punctuation">,</span>
		value<span class="token punctuation">:</span>  value<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>lock<span class="token punctuation">)</span> <span class="token function">Release</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	res<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">Eval</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> releaseLua<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>c<span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Int64</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">==</span> redis<span class="token punctuation">.</span>Nil <span class="token punctuation">{</span>
		<span class="token keyword">return</span> ErrReleaseLockFail
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> res <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> ErrReleaseLockFail
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>release.lua脚本</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 获得的value和期望的value是一致的说明是自己的锁</span>
<span class="token keyword">if</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">then</span>
  <span class="token keyword">return</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;del&quot;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">else</span>
  <span class="token keyword">return</span> <span class="token number">0</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决超时问题" tabindex="-1"><a class="header-anchor" href="#解决超时问题" aria-hidden="true">#</a> 解决超时问题</h3><blockquote><p>极端场景下业务很可能执行超时，例如：分布式锁一分钟，但业务执行一小时，导致这一个小时之内，有60个业务拿到分布式锁，和我们期望1个业务执行不一致。</p><p>解决超时问题，那么我们可以通过续约的方式，不断延长分布式锁的有效期来解决业务超时问题，保证业务执行过程锁不会自动释放。</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>lock<span class="token punctuation">)</span> <span class="token function">AutoRefresh</span><span class="token punctuation">(</span>interval<span class="token punctuation">,</span> timeout time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> interval <span class="token operator">&gt;=</span> c<span class="token punctuation">.</span>expiration <span class="token punctuation">{</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;interval should be less than expiration&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	ticker <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTicker</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		ticker<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ticker<span class="token punctuation">.</span>C<span class="token punctuation">:</span>
			ctx<span class="token punctuation">,</span> cancel <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> timeout<span class="token punctuation">)</span>
			err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Refresh</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
			<span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> err <span class="token operator">==</span> context<span class="token punctuation">.</span>DeadlineExceeded <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> ch <span class="token operator">&lt;-</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">:</span>
				<span class="token keyword">default</span><span class="token punctuation">:</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">continue</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> err
			<span class="token punctuation">}</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ch<span class="token punctuation">:</span>
			ctx<span class="token punctuation">,</span> cancel <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> timeout<span class="token punctuation">)</span>
			err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Refresh</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
			<span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> err <span class="token operator">==</span> context<span class="token punctuation">.</span>DeadlineExceeded <span class="token punctuation">{</span>
				<span class="token keyword">select</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> ch <span class="token operator">&lt;-</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">:</span>
				<span class="token keyword">default</span><span class="token punctuation">:</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">continue</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> err
			<span class="token punctuation">}</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>c<span class="token punctuation">.</span>release<span class="token punctuation">:</span> <span class="token comment">//主动释放锁场景</span>
			<span class="token keyword">return</span> <span class="token boolean">nil</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>lock<span class="token punctuation">)</span> <span class="token function">Refresh</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	res<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">Eval</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> refreshLua<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>c<span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>value<span class="token punctuation">,</span> c<span class="token punctuation">.</span>expiration<span class="token punctuation">.</span><span class="token function">Milliseconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Int64</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">==</span> redis<span class="token punctuation">.</span>Nil <span class="token punctuation">{</span>
		<span class="token keyword">return</span> ErrRefreshLockFail
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> res <span class="token operator">!=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> ErrRefreshLockFail
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refresh.lua脚本</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">--续约分布式锁</span>
<span class="token keyword">if</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">then</span>
  <span class="token keyword">return</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;pexpire&quot;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ARGV<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">--返回1成功，返回0失败</span>
<span class="token keyword">else</span>
  <span class="token keyword">return</span> <span class="token number">0</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决无限续约问题" tabindex="-1"><a class="header-anchor" href="#解决无限续约问题" aria-hidden="true">#</a> 解决无限续约问题</h3><blockquote><p>当续约遇见网络超时问题，总不能一直续约，须有合理的方式告知业务方错误</p><p>因此需增加策略去重试续约</p></blockquote><p>我们定义策略</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> redislock

<span class="token keyword">import</span> <span class="token string">&quot;time&quot;</span>

<span class="token keyword">type</span> RetryStrategy <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">//返回下一次是否需要重试以及重试间隔</span>
	<span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> limitedRetry <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	interval time<span class="token punctuation">.</span>Duration
	max      <span class="token builtin">int64</span>
	cnt      <span class="token builtin">int64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>retry <span class="token operator">*</span>limitedRetry<span class="token punctuation">)</span> <span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	retry<span class="token punctuation">.</span>cnt<span class="token operator">++</span>
	<span class="token keyword">return</span> retry<span class="token punctuation">.</span>cnt <span class="token operator">&lt;</span> retry<span class="token punctuation">.</span>max<span class="token punctuation">,</span> retry<span class="token punctuation">.</span>interval
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">LimitedRetry</span><span class="token punctuation">(</span>interval time<span class="token punctuation">.</span>Duration<span class="token punctuation">,</span> max <span class="token builtin">int64</span><span class="token punctuation">)</span> RetryStrategy <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>limitedRetry<span class="token punctuation">{</span>interval<span class="token punctuation">:</span> interval<span class="token punctuation">,</span> max<span class="token punctuation">:</span> max<span class="token punctuation">,</span> cnt<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> noRetry <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>retry <span class="token operator">*</span>noRetry<span class="token punctuation">)</span> <span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NoRetry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> RetryStrategy <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>noRetry<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用带策略的续约方式</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Client<span class="token punctuation">)</span> <span class="token function">TryLock</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> key <span class="token builtin">string</span><span class="token punctuation">,</span> expiration time<span class="token punctuation">.</span>Duration<span class="token punctuation">,</span> try RetryStrategy<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>lock<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	value <span class="token operator">:=</span> uuid<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> ticker <span class="token operator">*</span>time<span class="token punctuation">.</span>Ticker
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> ticker <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			ticker<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">Eval</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> lockLua<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>key<span class="token punctuation">}</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> expiration<span class="token punctuation">.</span><span class="token function">Milliseconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Result</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> context<span class="token punctuation">.</span>DeadlineExceeded<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> res <span class="token operator">==</span> <span class="token string">&quot;OK&quot;</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token function">newLock</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>client<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> expiration<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
		<span class="token punctuation">}</span>
		retry<span class="token punctuation">,</span> interval <span class="token operator">:=</span> try<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> <span class="token operator">!</span>retry <span class="token punctuation">{</span>
			<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> ErrObtainLockFail
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> ticker <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			ticker <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">NewTicker</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ctx<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> ctx<span class="token punctuation">.</span><span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ticker<span class="token punctuation">.</span>C<span class="token punctuation">:</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>lock.lua脚本</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> val <span class="token operator">=</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">-- 在加锁的重试的时候，要判断自己上一次是不是加锁成功了</span>
<span class="token keyword">if</span> val <span class="token operator">==</span> <span class="token keyword">false</span> <span class="token keyword">then</span> <span class="token comment">-- key 不存在</span>
    <span class="token keyword">return</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;set&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;PX&#39;</span><span class="token punctuation">,</span> ARGV<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">-- px 毫秒</span>
<span class="token keyword">elseif</span> val <span class="token operator">==</span> ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">then</span>  <span class="token comment">-- 存在，刷新过期时间</span>
    redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;expire&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ARGV<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&quot;OK&quot;</span>
<span class="token keyword">else</span> <span class="token comment">-- 此时别人持有锁</span>
    <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进一步优化获取锁" tabindex="-1"><a class="header-anchor" href="#进一步优化获取锁" aria-hidden="true">#</a> 进一步优化获取锁</h3><blockquote><p>当并发量很大场景时，为了减缓DB的压力，我们可以在单个实例上面，只允许一个协程获取分布式锁，即：单一实例先筛选一个协程，不同的实例再去竞争分布式锁</p></blockquote>`,29),i=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{go:"",class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"type"),s(" Client "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	client redis`),n("span",{class:"token punctuation"},"."),s(`Cmdable
	s      singleflight`),n("span",{class:"token punctuation"},"."),s(`Group
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("c "),n("span",{class:"token operator"},"*"),s("Client"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"SingleFlightLock"),n("span",{class:"token punctuation"},"("),s("ctx context"),n("span",{class:"token punctuation"},"."),s("Context"),n("span",{class:"token punctuation"},","),s(" key "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(" expiration time"),n("span",{class:"token punctuation"},"."),s("Duration"),n("span",{class:"token punctuation"},","),s(" try RetryStrategy"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("lock"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"{"),s(`
		flag `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token boolean"},"false"),s(`
		result `),n("span",{class:"token operator"},":="),s(" c"),n("span",{class:"token punctuation"},"."),s("s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"DoChan"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			flag `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
			`),n("span",{class:"token keyword"},"return"),s(" c"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"TryLock"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" expiration"),n("span",{class:"token punctuation"},","),s(" try"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"select"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"case"),s(" res "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"<-"),s("result"),n("span",{class:"token punctuation"},":"),s(`
			`),n("span",{class:"token keyword"},"if"),s(" flag "),n("span",{class:"token punctuation"},"{"),s(`
				c`),n("span",{class:"token punctuation"},"."),s("s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Forget"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),s(`
				`),n("span",{class:"token keyword"},"if"),s(" res"),n("span",{class:"token punctuation"},"."),s("Err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},"."),s(`Err
				`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},"."),s("Val"),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("lock"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"nil"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token operator"},"<-"),s("ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},","),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Err"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function u(k,r){return t(),p("div",null,[e(" more "),l,i])}const b=a(c,[["render",u],["__file","distribute-lock.html.vue"]]);export{b as default};
