<template><div><h1 id="promql" tabindex="-1"><a class="header-anchor" href="#promql" aria-hidden="true">#</a> PromQL</h1>
<h2 id="_1-名词解释" tabindex="-1"><a class="header-anchor" href="#_1-名词解释" aria-hidden="true">#</a> 1. 名词解释</h2>
<blockquote>
<p><strong>指标</strong>是软件或硬件组件属性的度量。</p>
<p>为了使指标有价值，我们会跟踪其状态，通常记录一段时间内的数据点。这些数据点成为<strong>观察点</strong>（observation），观察点通常包括值、时间戳，有时也涵盖描述观察点的一系列属性。</p>
<p>观察点的集合称为<strong>时间序列</strong>（time series）。</p>
<p>我们通常以固定的时间间隔收集指标，该时间间隔称为<strong>颗粒度</strong>（granularity）或<strong>分辨率</strong>（resolution）</p>
</blockquote>
<h3 id="_1-1-时序-time-series" tabindex="-1"><a class="header-anchor" href="#_1-1-时序-time-series" aria-hidden="true">#</a> 1.1 时序（time series）</h3>
<blockquote>
<p>时序（time series)是由指标（metric）以及一组key/value标签定义的。标签可以使时序数据更加丰富。</p>
</blockquote>
<p>格式：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;metric name>{&lt;label name>=&lt;label value>, ...}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>api_http_requests_total{method="POST", handler="/messages"}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>时序按照时间戳和值的顺序存放，称之为向量（vector)。</p>
<h3 id="_1-2-向量-vector" tabindex="-1"><a class="header-anchor" href="#_1-2-向量-vector" aria-hidden="true">#</a> 1.2 向量（vector)</h3>
<p>可以将采集的时序理解为一个以时间为x轴的数字矩阵：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>  ^

  │   . . . . . . . . . . . . . . . . .   . .   node_cpu{cpu="cpu0",mode="idle"}

  │     . . . . . . . . . . . . . . . . . . .   node_cpu{cpu="cpu0",mode="system"}

  │     . . . . . . . . . .   . . . . . . . .   node_load1{}

  │     . . . . . . . . . . . . . . . .   . .  

  v

    &lt;------------------ 时间 ---------------->
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中每一个点成为一个样本（sample）。</p>
<h3 id="_1-3-样本-sample" tabindex="-1"><a class="header-anchor" href="#_1-3-样本-sample" aria-hidden="true">#</a> 1.3 样本（sample)</h3>
<blockquote>
<p>按照某个时序以时间维度采集的数据称之为样本。样本有以下三部分：</p>
<ul>
<li>
<p>指标（metric）</p>
</li>
<li>
<p>时间戳：一个毫秒级的unix时间戳</p>
</li>
<li>
<p>样本值（value）：一个float64值</p>
</li>
</ul>
</blockquote>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;--------------- metric --------------------->&lt;-timestamp ->&lt;-value->
http_request_total{status="200", method="GET"}@1434417560938 => 94355
http_request_total{status="200", method="GET"}@1434417561287 => 94334

http_request_total{status="404", method="GET"}@1434417560938 => 38473
http_request_total{status="404", method="GET"}@1434417561287 => 38544

http_request_total{status="200", method="POST"}@1434417560938 => 4748
http_request_total{status="200", method="POST"}@1434417561287 => 4785
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：node_exporter暴漏的metrics接口的指标如下所示：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># HELP node_cpu Seconds the cpus spent in each mode.
# TYPE node_cpu counter
node_cpu{cpu="cpu0",mode="idle"} 362812.7890625
# HELP node_load1 1m load average.
# TYPE node_load1 gauge
node_load1 3.0703125
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre># HELP</code> 用于解释说明</p>
<p><code v-pre># TYPE</code>指标类型，Prometheus支持的指标类型有以下四种:</p>
<ul>
<li><code v-pre>counter</code>（常用），特点：只增不减；通常记录某些事件发生的次数，可以了解该事件产生速率的变化。例如接口请求次数。</li>
<li><code v-pre>gauge</code>（常用），特点：可增可减；通常记录事件状态，例如可用内存大小。</li>
<li><code v-pre>histogram</code>，用于统计分析样本的分布情况；例如延迟在0-10ms、10-20ms的请求数。</li>
<li><code v-pre>summary</code>，与<code v-pre>histogram</code>相似；<a href="https://prometheus.io/docs/practices/histograms/" target="_blank" rel="noopener noreferrer">参考官网<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_2-查询表达式" tabindex="-1"><a class="header-anchor" href="#_2-查询表达式" aria-hidden="true">#</a> 2. 查询表达式</h2>
<blockquote>
<p><strong>PromQL</strong>是一种数据查询语言，类似于MySQL，具有强大的功能。允许用户实时选择和汇总时间序列数据，表达式的结果可以显示为图形。</p>
</blockquote>
<h3 id="_2-1-表达式语言数据类型" tabindex="-1"><a class="header-anchor" href="#_2-1-表达式语言数据类型" aria-hidden="true">#</a> 2.1 表达式语言数据类型</h3>
<p><strong>PromQL</strong>的表达式语句可以分为四种类型：</p>
<ul>
<li><code v-pre>Instant vector</code>——即时向量，一组包含每个时间序列的单个样本的时间序列，他们共享相同的时间戳。<strong>(当前时间的指标样本)</strong></li>
<li><code v-pre>Range verctor</code>——范围向量，一组时间序列，包含每个事件序列随时间变化的一系列数据点。<strong>（一段时间的指标样本）</strong></li>
<li><code v-pre>Scalar</code>——标量，一个简单的数字浮点值。</li>
<li><code v-pre>String</code>——字符串，<strong>（目前不可用）</strong></li>
</ul>
<p><strong>即时向量和范围向量对比</strong></p>
<p>即时向量指最新的单个维度的指标数据</p>
<figure><img src="@source/image/instant-vector-1.jpg" alt="instant-vector-1" tabindex="0" loading="lazy"><figcaption>instant-vector-1</figcaption></figure>
<p>范围向量包含一组不同时间戳的指标数据，和时间范围选择有关</p>
<figure><img src="@source/image/range-vector.jpg" alt="range-vector" tabindex="0" loading="lazy"><figcaption>range-vector</figcaption></figure>
<h3 id="_2-2-time-series-selectors-时间序列表达式" tabindex="-1"><a class="header-anchor" href="#_2-2-time-series-selectors-时间序列表达式" aria-hidden="true">#</a> 2.2 Time series Selectors（时间序列表达式）</h3>
<h4 id="_2-2-1-instant-vector-selectors-即时向量选择器" tabindex="-1"><a class="header-anchor" href="#_2-2-1-instant-vector-selectors-即时向量选择器" aria-hidden="true">#</a> 2.2.1 Instant vector selectors（即时向量选择器）</h4>
<blockquote>
<p>即时向量返回给定时间戳（即时）的一组指标样本。</p>
</blockquote>
<p>例如：仅指定指标名称，<code v-pre>prometheus_http_requests_total</code></p>
<figure><img src="@source/tools/image/instant-vector.jpg" alt="instant-vector" tabindex="0" loading="lazy"><figcaption>instant-vector</figcaption></figure>
<p>可以通过一组标签来进一步过滤这些时间序列，使用花括号<code v-pre>{}</code>。例如：<code v-pre>prometheus_http_requests_total{code=&quot;500&quot;,job=&quot;prometheus&quot;}</code></p>
<figure><img src="@source/image/instant-vector-filter.jpg" alt="instant-vector-filter" tabindex="0" loading="lazy"><figcaption>instant-vector-filter</figcaption></figure>
<p>可以对标签值进行匹配，匹配运算符：</p>
<ul>
<li><code v-pre>=</code>：与提供的字符串完全相同的标签；</li>
<li><code v-pre>！=</code>：不等于提供的字符串的标签；</li>
<li><code v-pre>=~</code>：与正则表达式匹配提供的字符串标签；</li>
<li><code v-pre>!~</code>：不与提供的正则表达式匹配的标签；</li>
</ul>
<p>例如：<code v-pre>prometheus_http_requests_total{code=~&quot;400|500&quot;}</code></p>
<figure><img src="@source/image/instant-vector-regex.jpg" alt="instant-vector-regex" tabindex="0" loading="lazy"><figcaption>instant-vector-regex</figcaption></figure>
<h4 id="_2-2-2-range-vector-selectors-范围向量选择器" tabindex="-1"><a class="header-anchor" href="#_2-2-2-range-vector-selectors-范围向量选择器" aria-hidden="true">#</a> 2.2.2 Range Vector Selectors (范围向量选择器)</h4>
<blockquote>
<p>范围向量返回一段时间的一组指标样本。</p>
<p>范围持续时间附加在<code v-pre>[]</code>中，指定每个结果范围向量提取多长时间值。</p>
</blockquote>
<p>持续时间指定为数字，紧接着是以单位之一：</p>
<ul>
<li><code v-pre>s</code>-秒</li>
<li><code v-pre>m</code>-分钟</li>
<li><code v-pre>h</code>-小时</li>
<li><code v-pre>d</code>-天</li>
<li><code v-pre>w</code>-周</li>
<li><code v-pre>y</code>-年</li>
</ul>
<p>例如：<code v-pre>prometheus_http_requests_total{code=&quot;200&quot;}[5m]</code>表示选择过去5分钟该指标的所有时间序列记录。</p>
<h4 id="_2-2-3-offset-modifier-偏移修改器" tabindex="-1"><a class="header-anchor" href="#_2-2-3-offset-modifier-偏移修改器" aria-hidden="true">#</a> 2.2.3 Offset modifier（偏移修改器）</h4>
<blockquote>
<p>由于即时向量和范围向量使用当前时间为基准，如果想查询5分钟前的即时向量，或者昨天一天的范围向量，使用关键字<code v-pre>offset</code>可以进行时间偏移</p>
</blockquote>
<p>例如：<code v-pre>http_requests_total offset 5m</code>表示返回5分钟前的即时向量<code v-pre>http_requests_total</code>的值。</p>
<p><code v-pre>offset</code>需要紧跟向量。例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sum(http_requests_total{method="GET"} offset 5m) // GOOD.
sum(http_requests_total{method="GET"}) offset 5m // INVALID.
rate(http_requests_total[5m] offset 1w) 		 // GOOD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-operators-操作符" tabindex="-1"><a class="header-anchor" href="#_2-5-operators-操作符" aria-hidden="true">#</a> 2.5 Operators（操作符）</h3>
<h4 id="_2-5-1-二元运算符" tabindex="-1"><a class="header-anchor" href="#_2-5-1-二元运算符" aria-hidden="true">#</a> 2.5.1 二元运算符</h4>
<h5 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h5>
<p>PromQL支持以下算法运算符：</p>
<ul>
<li><code v-pre>+</code> 加法</li>
<li><code v-pre>-</code> 减法</li>
<li><code v-pre>*</code> 乘法</li>
<li><code v-pre>/</code> 除法</li>
<li><code v-pre>%</code> 求余</li>
<li><code v-pre>^</code> 幂运算</li>
</ul>
<p>算术运算符定义在标量与标量、即时向量与标量、即时向量与即时向量之间。</p>
<p><strong>在两个标量之间</strong>：结果是标量；</p>
<p><strong>在即时向量和标量之间</strong>：运算符应用于向量中的每个数据样本的值；如果时间序列即时向量乘以2，则结果是另一个即时向量，且对应的值是原始向量的每个样本值乘以2。</p>
<p><strong>在两个即时向量之间</strong>：运算符依次查找左侧向量中的每条数据到右侧向量中的匹配样本数据进行运算，。</p>
<hr>
<h5 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h5>
<p>PromQL支持以下比较运算符：</p>
<ul>
<li><code v-pre>==</code></li>
<li><code v-pre>!=</code></li>
<li><code v-pre>&gt;</code></li>
<li><code v-pre>&lt;</code></li>
<li><code v-pre>&lt;=</code></li>
<li><code v-pre>&gt;=</code></li>
</ul>
<p>比较运算符定义在标量与标量、即时向量与标量、即时向量与即时向量之间。</p>
<p><strong>标量与标量之间</strong>：结果是标量，<code v-pre>bool</code>必须提供修饰符，即<code v-pre>0</code>（<code v-pre>false</code>）或<code v-pre>1</code>（<code v-pre>true</code>）；<s>待补充</s></p>
<p><strong>在即时向量和标量之间</strong>：运算符应用于向量中的每个数据样本的值，为<code v-pre>true</code>的数据样本保留在结果向量中；</p>
<p><strong>在两个即时向量之间</strong>：运算符相当于过滤器，表达式为<code v-pre>true</code>且在表达式的右侧找到匹配的数据样本都保留在结果向量中。</p>
<hr>
<h5 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h5>
<p>PromQL支持以下逻辑运算符：</p>
<ul>
<li><code v-pre>and</code></li>
<li><code v-pre>or</code></li>
<li><code v-pre>unless</code></li>
</ul>
<p><code v-pre>vector1 and vector2</code>得到一个向量，该向量由与<code v-pre>vector2</code>完全匹配标签集的<code v-pre>vector1</code>数据样本组成。结果向量的指标名称和值为左侧向量。</p>
<p><code v-pre>vector1 or vector2</code>得到一个向量，该向量包含<code v-pre>vector1</code>和<code v-pre>vector2</code>所有的原始数据（标签集+值）。</p>
<p><code v-pre>vector1 unless vector2</code>得到一个向量，该向量包含的指标数据为 <code v-pre>vector1</code>中不与<code v-pre>vector2</code>匹配的标签集。（两个向量中的所有匹配元素都被删除）。</p>
<hr>
<h5 id="运算符优先级" tabindex="-1"><a class="header-anchor" href="#运算符优先级" aria-hidden="true">#</a> 运算符优先级</h5>
<p>先级从高到低依次是：</p>
<ol>
<li><code v-pre>^</code></li>
<li><code v-pre>*</code>、<code v-pre>/</code>、<code v-pre>%</code></li>
<li><code v-pre>+</code>、<code v-pre>-</code></li>
<li><code v-pre>==</code>、<code v-pre>!=</code>、<code v-pre>&lt;=</code>、<code v-pre>&lt;</code>、<code v-pre>&gt;=</code>、<code v-pre>&gt;</code></li>
<li><code v-pre>and</code>、<code v-pre>unless</code></li>
<li><code v-pre>or</code></li>
</ol>
<hr>
<h5 id="向量匹配模式" tabindex="-1"><a class="header-anchor" href="#向量匹配模式" aria-hidden="true">#</a> 向量匹配模式</h5>
<blockquote>
<p>向量与向量之间进行运算操作时会基于默认的匹配规则：<strong>依次找到与左边向量元素匹配（标签完全一致）的右边向量元素进行运算，如果没找到匹配元素，则直接丢弃。</strong></p>
</blockquote>
<p>PromQL支持两种匹配模式：<code v-pre>一对一</code>，<code v-pre>多对一或一对多</code>。</p>
<h6 id="一对一向量匹配" tabindex="-1"><a class="header-anchor" href="#一对一向量匹配" aria-hidden="true">#</a> 一对一向量匹配</h6>
<blockquote>
<p>一对一匹配，分别从两边表达式获取的即时向量，依次找到标签集完全相同的元素。格式为<code v-pre>vector1 &lt;operator&gt; vector2</code>，使用关键字<code v-pre>ignoring</code>忽略某些标签，关键字<code v-pre>on</code>使用提供的标签列表匹配。</p>
</blockquote>
<p>格式：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;vector expr> &lt;bin-op> ignoring(&lt;label list>) &lt;vector expr>
&lt;vector expr> &lt;bin-op> on(&lt;label list>) &lt;vector expr>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p>
<p>指标数据如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>method_code:http_errors:rate5m{method="get", code="500"}  24
method_code:http_errors:rate5m{method="get", code="404"}  30
method_code:http_errors:rate5m{method="put", code="501"}  3
method_code:http_errors:rate5m{method="post", code="500"} 6
method_code:http_errors:rate5m{method="post", code="404"} 21

method:http_requests:rate5m{method="get"}  600
method:http_requests:rate5m{method="del"}  34
method:http_requests:rate5m{method="post"} 120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用以下表达式进行匹配：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>method_code:http_errors:rate5m{code="500"} / ignoring(code) method:http_requests:rate5m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{method="get"}  0.04            //  24/600=0.04
{method="post"} 0.05            //   6/120=0.05
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="多对一和一对多向量匹配" tabindex="-1"><a class="header-anchor" href="#多对一和一对多向量匹配" aria-hidden="true">#</a> 多对一和一对多向量匹配</h6>
<blockquote>
<p>这里的<code v-pre>一</code>和<code v-pre>多</code>指的是：<code v-pre>一</code>这边的向量每个元素和<code v-pre>多</code>这边向量的多个元素匹配。使用关键字<code v-pre>group_left</code>和<code v-pre>group_right</code>，来表明哪边的向量具有更高的基数（即充当<code v-pre>多</code>的角色）。</p>
</blockquote>
<p>格式：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;vector expr> &lt;bin-op> ignoring(&lt;label list>) group_left(&lt;label list>) &lt;vector expr>
&lt;vector expr> &lt;bin-op> ignoring(&lt;label list>) group_right(&lt;label list>) &lt;vector expr>
&lt;vector expr> &lt;bin-op> on(&lt;label list>) group_left(&lt;label list>) &lt;vector expr>
&lt;vector expr> &lt;bin-op> on(&lt;label list>) group_right(&lt;label list>) &lt;vector expr>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：左侧向量有两个标签（method、code），右侧向量有一个标签（method），因此左侧向量具有更高的基数，使用<code v-pre>group_left</code>，并忽略标签（code）。如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>method_code:http_errors:rate5m / ignoring(code) group_left method:http_requests:rate5m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{method="get", code="500"}  0.04            //  24/600=0.04
{method="get", code="404"}  0.05            //  30/600=0.05
{method="post", code="500"} 0.05            //   6/120=0.05
{method="post", code="404"} 0.175           //  21/120=0.175
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Group修饰符（group_left、group_right)只能在比较和数学运算符中使用，逻辑运算符默认与右侧向量所有元素匹配。</strong></p>
<h4 id="_2-5-2-布尔运算符" tabindex="-1"><a class="header-anchor" href="#_2-5-2-布尔运算符" aria-hidden="true">#</a> 2.5.2 布尔运算符</h4>
<blockquote>
<p>布尔运算符的默认行为是对时序数据进行过滤。</p>
</blockquote>
<p>例如，只需要知道当前模块的HTTP请求量是否&gt;=1000，如果大于等于1000则返回1（true）否则返回0（false）。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>http_requests_total > bool 1000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回的指标样本的值要么是0要么是1，如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>http_requests_total{code="200",handler="query",instance="localhost:9090",job="prometheus",method="get"}  1
http_requests_total{code="200",handler="query_range",instance="localhost:9090",job="prometheus",method="get"}  0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-3-聚合运算符" tabindex="-1"><a class="header-anchor" href="#_2-5-3-聚合运算符" aria-hidden="true">#</a> 2.5.3 聚合运算符</h4>
<blockquote>
<p>聚合运算符可以聚合单个即时向量的数据，从而生成较少标签的新向量</p>
</blockquote>
<p>Prometheus支持以下聚合运算符：</p>
<ul>
<li><code v-pre>sum</code>-总和</li>
<li><code v-pre>min</code>-最小</li>
<li><code v-pre>max</code>-最大</li>
<li><code v-pre>avg</code>平均</li>
<li><code v-pre>stddev</code>-标准差</li>
<li><code v-pre>stdvar</code>-标准差异</li>
<li><code v-pre>count</code>-向量中的样本条数</li>
<li><code v-pre>count_values</code>-具有相同值的样本条数</li>
<li><code v-pre>bottomk</code>-样本值最小的k个元素</li>
<li><code v-pre>topk</code>样本值最大的k个元素</li>
<li><code v-pre>quantile</code>-分布统计</li>
</ul>
<p>以上聚合运算符可以用于聚合所有标签维度，也可以通过关键字<code v-pre>without</code>或者<code v-pre>by</code>来保留不同的维度。</p>
<p>格式：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;aggr-op>([parameter,] &lt;vector expression>) [without|by (&lt;label list>)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中</p>
<ul>
<li><code v-pre>parameter</code>只在<code v-pre>count_values</code>、<code v-pre>quantile</code>、<code v-pre>topk</code>和<code v-pre>bottomk</code>；</li>
<li><code v-pre>without</code>从结果向量中删除列出的标签；</li>
<li><code v-pre>by</code>只保留列出的标签；</li>
</ul>
<h3 id="_2-6-functions-功能函数" tabindex="-1"><a class="header-anchor" href="#_2-6-functions-功能函数" aria-hidden="true">#</a> 2.6 Functions（功能函数）</h3>
<h4 id="abs" tabindex="-1"><a class="header-anchor" href="#abs" aria-hidden="true">#</a> abs()</h4>
<p><code v-pre>abs(v instant-vector)</code>返回输入向量且所有的样本值都转换为绝对值；</p>
<h4 id="absent" tabindex="-1"><a class="header-anchor" href="#absent" aria-hidden="true">#</a> absent()</h4>
<p><code v-pre>absent(v instant-vector)</code>如果传递给它的向量有任何样本，则返回空向量；如果传递给它的向量没有样本，则返回值为1的向量；</p>
<h4 id="ceil" tabindex="-1"><a class="header-anchor" href="#ceil" aria-hidden="true">#</a> ceil()</h4>
<p><code v-pre>ceil(v instant-vector)</code>将所有样本的样本值舍入最接近的整数；</p>
<h4 id="changes" tabindex="-1"><a class="header-anchor" href="#changes" aria-hidden="true">#</a> changes()</h4>
<p><code v-pre>changes(v range-vector)</code>计算范围向量时间范围内样本值得更改次数作，结果是即时向量；</p>
<h4 id="clamp-max" tabindex="-1"><a class="header-anchor" href="#clamp-max" aria-hidden="true">#</a> clamp_max()</h4>
<p><code v-pre>clamp_max(v instant-vector, max scalar)</code>限制样本最大值为max；</p>
<h4 id="clamp-min" tabindex="-1"><a class="header-anchor" href="#clamp-min" aria-hidden="true">#</a> clamp_min()</h4>
<p><code v-pre>clamp_min(v instant-vector, min scalar)</code>限制样本最小值为min；</p>
<h4 id="day-of-month" tabindex="-1"><a class="header-anchor" href="#day-of-month" aria-hidden="true">#</a> day_of_month()</h4>
<p><code v-pre>day_of_month(v=vector(time()) instant-vector)</code>返回UTC中每个给定时间（月）中的某天，返回值为1到31；</p>
<h4 id="day-of-week" tabindex="-1"><a class="header-anchor" href="#day-of-week" aria-hidden="true">#</a> day_of_week()</h4>
<p><code v-pre>day_of_week(v=vector(time()) instant-vector)</code>返回UTC中每个给定时间的星期几，返回值为0到6；</p>
<h4 id="day-in-month" tabindex="-1"><a class="header-anchor" href="#day-in-month" aria-hidden="true">#</a> day_in_month()</h4>
<p><code v-pre>days_in_month(v=vector(time()) instant-vector)</code>返回UTC中每个给定时间的月中天数。返回值为28到31。</p>
<h4 id="delta" tabindex="-1"><a class="header-anchor" href="#delta" aria-hidden="true">#</a> delta()</h4>
<p><code v-pre>delta(v range-vector)</code>计算范围向量中每个时间系列元素的第一个和最后一个值之间的差异;</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>delta(cpu_temp_celsius{host="zeus"}[2h]) //现在和两个小时之前CPU温度的差异
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>delta应该用于gauges类型指标</strong></p>
<h4 id="deriv" tabindex="-1"><a class="header-anchor" href="#deriv" aria-hidden="true">#</a> deriv()</h4>
<p><code v-pre>deriv(v range-vector)</code> 使用<a href="https://en.wikipedia.org/wiki/Simple_linear_regression" target="_blank" rel="noopener noreferrer">简单线性回归<ExternalLinkIcon/></a>计算范围向量中时间序列的每秒导数;</p>
<p><strong>deriv应该用于gauges类型指标</strong></p>
<h4 id="exp" tabindex="-1"><a class="header-anchor" href="#exp" aria-hidden="true">#</a> exp()</h4>
<p><code v-pre>exp(v instant-vector)</code>计算所有样本的指数函数（样本值为指数）；</p>
<h4 id="floor" tabindex="-1"><a class="header-anchor" href="#floor" aria-hidden="true">#</a> floor()</h4>
<p><code v-pre>floor(v instant-vector)</code>将所有样本值舍入为最接近的整数；</p>
<h4 id="histogram-quantile" tabindex="-1"><a class="header-anchor" href="#histogram-quantile" aria-hidden="true">#</a> histogram_quantile()</h4>
<p><code v-pre>histogram_quantile(φ float, b instant-vector)</code>从直方图的桶<code v-pre>b</code>中计算φ-分位数（0≤φ≤1）；</p>
<h4 id="holt-winters" tabindex="-1"><a class="header-anchor" href="#holt-winters" aria-hidden="true">#</a> holt_winters()</h4>
<p><code v-pre>holt_winters(v range-vector, sf scalar, tf scalar)</code>根据范围输入生成时间序列的平滑值<code v-pre>v</code>。平滑因子越低<code v-pre>sf</code>，对旧数据的重视程度越高。趋势因子越高，数据的趋势<code v-pre>tf</code>就越多。二者<code v-pre>sf</code>并<code v-pre>tf</code>必须在0和1之间。</p>
<p><strong>holt_winters应该用于gauges类型指标</strong></p>
<h4 id="hour" tabindex="-1"><a class="header-anchor" href="#hour" aria-hidden="true">#</a> hour()</h4>
<p><code v-pre>hour(v=vector(time()) instant-vector)</code>返回UTC中每个给定时间的一天中的小时。返回值为0到23；</p>
<h4 id="idelta" tabindex="-1"><a class="header-anchor" href="#idelta" aria-hidden="true">#</a> idelta()</h4>
<p><code v-pre>idelta(v range-vector)</code>计算范围向量中最后两个样本之间的差异;</p>
<p><strong>idelta应该用于gauges类型指标</strong></p>
<h4 id="increase" tabindex="-1"><a class="header-anchor" href="#increase" aria-hidden="true">#</a> increase()</h4>
<p><code v-pre>increase(v range-vector)</code>计算范围向量中时间序列的增加；</p>
<p><strong>incrase应用用于counter类型指标</strong></p>
<h4 id="irate" tabindex="-1"><a class="header-anchor" href="#irate" aria-hidden="true">#</a> irate()</h4>
<p><code v-pre>irate(v range-vector)</code>计算范围向量中时间序列的每秒即时增长率。（基于最后两个数据点）</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>irate(http_requests_total{job="api-server"}[5m]) //计算5分钟内的HTTP每秒请求率
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="label-join" tabindex="-1"><a class="header-anchor" href="#label-join" aria-hidden="true">#</a> label_join()</h4>
<p><code v-pre>label_join</code>生产一个新的标签，且新的标签值是列出的标签值通过分隔符连接起来。</p>
<p>格式：</p>
<p><code v-pre>label_join(v instant-vector, dst_label string, separator string, src_label_1 string, src_label_2 string, ...)</code></p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>label_join(up{job="api-server",src1="a",src2="b",src3="c"}, "foo", ",", "src1", "src2", "src3") //在原有的向量基础上多了新标签foo，值为src1,src2,src3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="label-replace" tabindex="-1"><a class="header-anchor" href="#label-replace" aria-hidden="true">#</a> label_replace()</h4>
<p><code v-pre>label_replace</code>按照正则表达式匹配源标签，替换目标标签的值。</p>
<p>格式：</p>
<p><code v-pre>label_replace(v instant-vector, dst_label string, replacement string, src_label string, regex string)</code></p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>label_replace(up{job="api-server",service="a:c"}, "foo", "$1", "service", "(.*):.*")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="ln" tabindex="-1"><a class="header-anchor" href="#ln" aria-hidden="true">#</a> ln()</h4>
<p><code v-pre>ln(v instant-vector)</code>计算所有指标对数。</p>
<h4 id="log2" tabindex="-1"><a class="header-anchor" href="#log2" aria-hidden="true">#</a> log2()</h4>
<p><code v-pre>log2(v instant-vector)</code>计算所有指标以2为底的对数。</p>
<h4 id="log10" tabindex="-1"><a class="header-anchor" href="#log10" aria-hidden="true">#</a> log10()</h4>
<p><code v-pre>log10(v instant-vector)</code>计算所有指标以10为底的对数。</p>
<h4 id="minute" tabindex="-1"><a class="header-anchor" href="#minute" aria-hidden="true">#</a> minute()</h4>
<p><code v-pre>minute(v=vector(time()) instant-vector)</code>以UTC为单位返回每个给定时间的分钟。返回值为0到59。</p>
<h4 id="month" tabindex="-1"><a class="header-anchor" href="#month" aria-hidden="true">#</a> month()</h4>
<p><code v-pre>month(v=vector(time()) instant-vector)</code>返回UTC中每个给定时间的一年中的月份。返回值为1到12，其中1表示1月。</p>
<h4 id="predict-linear" tabindex="-1"><a class="header-anchor" href="#predict-linear" aria-hidden="true">#</a> predict_linear()</h4>
<p><code v-pre>predict_linear(v range-vector, t scalar)</code>使用简单的线性回归t，基于范围向量预测从现在开始的时间序列的值。</p>
<p><strong>product_linear()应运用于gauges类型指标</strong></p>
<h4 id="rate" tabindex="-1"><a class="header-anchor" href="#rate" aria-hidden="true">#</a> rate()</h4>
<p><code v-pre>rate(v range-vector)</code>计算范围向量中时间序列的每秒平均增长率。</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>rate(http_requests_total{job="api-server"}[5m]) //计算过去5分钟内每秒HTTP请求率。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>rate应运用于counter类型指标</strong></p>
<h4 id="resets" tabindex="-1"><a class="header-anchor" href="#resets" aria-hidden="true">#</a> resets()</h4>
<p><code v-pre>resets(v range-vector)</code>返回时间范围内的计数器重置次数。</p>
<p><strong>resets应运用于counter类型指标</strong></p>
<h4 id="round" tabindex="-1"><a class="header-anchor" href="#round" aria-hidden="true">#</a> round()</h4>
<p><code v-pre>round(v instant-vector, to_nearest=1 scalar)</code>将所有指标的样本值舍入最接近的整数。可选参数<code v-pre>to_nearest</code>允许指定舍入样本值得最近倍数。这个倍数也可能是一个分数。</p>
<h4 id="scalar" tabindex="-1"><a class="header-anchor" href="#scalar" aria-hidden="true">#</a> scalar()</h4>
<p><code v-pre>scalar(v instant-vector)</code>将该单个指标得样本值作为标量返回。</p>
<h4 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort()</h4>
<p><code v-pre>sort(v instant-vector)</code>返回按样本值升序排列得向量。</p>
<h4 id="sort-desc" tabindex="-1"><a class="header-anchor" href="#sort-desc" aria-hidden="true">#</a> sort_desc()</h4>
<p>与<code v-pre>sort()</code>相似，但按降序排序。</p>
<h4 id="sqrt" tabindex="-1"><a class="header-anchor" href="#sqrt" aria-hidden="true">#</a> sqrt()</h4>
<p><code v-pre>sqrt(v instant-vector)</code>计算所有样本的平方根。</p>
<h4 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time()</h4>
<p><code v-pre>time()</code>返回自1970年1月1日UTC以来的秒数。请注意，这实际上并不返回当前时间，而是返回计算表达式的时间。<s>待补充</s></p>
<h4 id="timestamp" tabindex="-1"><a class="header-anchor" href="#timestamp" aria-hidden="true">#</a> timestamp()</h4>
<p><code v-pre>timestamp(v instant-vector)</code>返回向量得每个样本得时间戳，自1970年1月1日UTC以来得秒数。</p>
<h4 id="vector" tabindex="-1"><a class="header-anchor" href="#vector" aria-hidden="true">#</a> vector()</h4>
<p><code v-pre>vector(s scalar)</code>将标量返回为没有标签的向量。</p>
<h4 id="year" tabindex="-1"><a class="header-anchor" href="#year" aria-hidden="true">#</a> year()</h4>
<p><code v-pre>year(v=vector(time()) instant-vector)</code> 以UTC格式返回每个给定时间的年份。</p>
<h4 id="aggregation-over-time" tabindex="-1"><a class="header-anchor" href="#aggregation-over-time" aria-hidden="true">#</a> &lt;-aggregation-&gt;_over_time()</h4>
<p>以下函数聚合给定范围向量得每个指标随时间的变化并返回聚合结果的即时向量：</p>
<ul>
<li><code v-pre>avg_over_time(range-vector)</code>：指定时间间隔内所有点的平均值。</li>
<li><code v-pre>min_over_time(range-vector)</code>：指定时间间隔内所有点的最小值。</li>
<li><code v-pre>max_over_time(range-vector)</code>：指定时间间隔内所有点的最大值。</li>
<li><code v-pre>sum_over_time(range-vector)</code>：指定时间间隔内所有值的总和。</li>
<li><code v-pre>count_over_time(range-vector)</code>：指定时间间隔内所有值的计数。</li>
<li><code v-pre>quantile_over_time(scalar, range-vector)</code>：指定间隔中的值的φ-分位数（0≤φ≤1）。</li>
<li><code v-pre>stddev_over_time(range-vector)</code>：指定时间间隔内值的总体标准偏差。</li>
<li><code v-pre>stdvar_over_time(range-vector)</code>：指定时间间隔内值的总体标准差异。</li>
</ul>
</div></template>


