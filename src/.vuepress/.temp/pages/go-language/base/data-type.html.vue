<template><div><nav class="table-of-contents"><ul><li><router-link to="#数据类型">数据类型</router-link><ul><li><router-link to="#值类型">值类型</router-link></li><li><router-link to="#复合类型">复合类型</router-link></li><li><router-link to="#引用类型">引用类型</router-link></li></ul></li></ul></nav>
<h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2>
<blockquote>
<p>Go语言基本数据类型（Data-types）划分方式有很多，这里按照<strong>数据类型</strong>进行划分：值类型、复合类型、引用类型</p>
</blockquote>
<h3 id="值类型" tabindex="-1"><a class="header-anchor" href="#值类型" aria-hidden="true">#</a> 值类型</h3>
<blockquote>
<p>值类型即基本的数据类型，包括布尔类型（bool）、整型（int）、浮点型（float）、字节型（byte）、复数型（complex）、字符串型（string）和错误类型（error）。</p>
<p>值类型的变量在传递过程中，编译器对该变量的值进行一次拷贝。</p>
</blockquote>
<h4 id="布尔型-boolean" tabindex="-1"><a class="header-anchor" href="#布尔型-boolean" aria-hidden="true">#</a> 布尔型(Boolean)</h4>
<p>**关键字定义：**bool</p>
<p>**字节长度：**1</p>
<p><strong>取值范围：</strong>[true、false]</p>
<p>**零值：**false</p>
<p>👣</p>
<ol>
<li>布尔类型不接受其他数据类型赋值；</li>
<li>布尔类型不能进行强制类型转换；</li>
</ol>
<h4 id="整型-integer" tabindex="-1"><a class="header-anchor" href="#整型-integer" aria-hidden="true">#</a> 整型（Integer）</h4>
<p>整型数据类型分为：有符号整型、无符号整型</p>
<table>
<thead>
<tr>
<th style="text-align:center">类型</th>
<th style="text-align:center">字节长度</th>
<th style="text-align:center">取值范围</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center">4/8</td>
<td style="text-align:center">32位系统即int32，64位系统即int64</td>
</tr>
<tr>
<td style="text-align:center">int8</td>
<td style="text-align:center">1</td>
<td style="text-align:center"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>−</mo><msup><mn>2</mn><mn>7</mn></msup></mrow><annotation encoding="application/x-tex">-2^7</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">7</span></span></span></span></span></span></span></span></span></span></span>~<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>7</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^7-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">7</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td>
</tr>
<tr>
<td style="text-align:center">int16</td>
<td style="text-align:center">2</td>
<td style="text-align:center"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>−</mo><msup><mn>2</mn><mn>15</mn></msup></mrow><annotation encoding="application/x-tex">-2^{15}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">15</span></span></span></span></span></span></span></span></span></span></span></span>~<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>15</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^{15}-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">15</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td>
</tr>
<tr>
<td style="text-align:center">int32</td>
<td style="text-align:center">4</td>
<td style="text-align:center"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>−</mo><msup><mn>2</mn><mn>31</mn></msup></mrow><annotation encoding="application/x-tex">-2^{31}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">31</span></span></span></span></span></span></span></span></span></span></span></span>~<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>31</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^{31}-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">31</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td>
</tr>
<tr>
<td style="text-align:center">int64</td>
<td style="text-align:center">8</td>
<td style="text-align:center"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>−</mo><msup><mn>2</mn><mn>63</mn></msup></mrow><annotation encoding="application/x-tex">-2^{63}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">63</span></span></span></span></span></span></span></span></span></span></span></span>~<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>63</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^{63}-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">63</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td>
</tr>
<tr>
<td style="text-align:center">uint</td>
<td style="text-align:center">4/8</td>
<td style="text-align:center">32位系统即uint32，64位系统即uint64</td>
</tr>
<tr>
<td style="text-align:center">uint8</td>
<td style="text-align:center">1</td>
<td style="text-align:center">0~<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>8</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^8-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">8</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td>
</tr>
<tr>
<td style="text-align:center">uint16</td>
<td style="text-align:center">2</td>
<td style="text-align:center">0~<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>16</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^{16}-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">16</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td>
</tr>
<tr>
<td style="text-align:center">uint32</td>
<td style="text-align:center">4</td>
<td style="text-align:center">0~<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>32</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^{32}-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">32</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td>
</tr>
<tr>
<td style="text-align:center">uint64</td>
<td style="text-align:center">8</td>
<td style="text-align:center">0~<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>64</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^{64}-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">64</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td>
</tr>
</tbody>
</table>
<p>**零值：**对应字节长度的0</p>
<p>👣</p>
<ul>
<li>由于字节范围的限制，尤其需注意“溢出”问题，可使用math包中“Max”和“Min”开头的常量帮组检查溢出；</li>
</ul>
<p><strong>整型数据的表示方法：</strong></p>
<ul>
<li>十进制，如<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>−</mo><mn>123</mn></mrow><annotation encoding="application/x-tex">-123</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">123</span></span></span></span>、0、256；</li>
<li>八进制，以“0”开头的数是八进制，如0123表示八进制数123，即十进制的83；</li>
<li>十六进制，以“0x”开头的数是十六进制数，如0x123表示十六进制数123，即十进制的291；</li>
<li>指数形式，由数字和字母<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>e</mi></mrow><annotation encoding="application/x-tex">e</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">e</span></span></span></span>组成，如<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn><mi>e</mi><mn>3</mn></mrow><annotation encoding="application/x-tex">1e3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span><span class="mord mathnormal">e</span><span class="mord">3</span></span></span></span>或<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>10</mn><mi>e</mi><mn>2</mn></mrow><annotation encoding="application/x-tex">10e2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">10</span><span class="mord mathnormal">e</span><span class="mord">2</span></span></span></span>代表十进制的1000；</li>
</ul>
<h4 id="浮点型-floating-point-number" tabindex="-1"><a class="header-anchor" href="#浮点型-floating-point-number" aria-hidden="true">#</a> 浮点型（Floating-point-number）</h4>
<p>浮点型数据，也称为实数（Real-number），可存储带有小数的数值。浮点型数据在内存中的存储形式和整数不同，是按照指数形式存储的，共有三部分组成：符号、尾数和指数。</p>
<table>
<thead>
<tr>
<th style="text-align:center">类型</th>
<th style="text-align:center">字节长度</th>
<th style="text-align:center">精确位数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">float32</td>
<td style="text-align:center">4</td>
<td style="text-align:center">精确小数点后7位</td>
</tr>
<tr>
<td style="text-align:center">float64</td>
<td style="text-align:center">8</td>
<td style="text-align:center">精确小数点后15位</td>
</tr>
</tbody>
</table>
<p>**零值：**0</p>
<p><strong>浮点型数据的表示方法：</strong></p>
<ul>
<li>十进制小数形式：由数字和小数点组成，如1.57、0.12、0.0都是十进制的小数形式；</li>
<li>指数形式：由数字和字母<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>e</mi></mrow><annotation encoding="application/x-tex">e</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">e</span></span></span></span>组成，如<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1.23</mn><mi>e</mi><mn>3</mn></mrow><annotation encoding="application/x-tex">1.23e3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1.23</span><span class="mord mathnormal">e</span><span class="mord">3</span></span></span></span>或<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>12.3</mn><mi>e</mi><mn>2</mn></mrow><annotation encoding="application/x-tex">12.3e2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">12.3</span><span class="mord mathnormal">e</span><span class="mord">2</span></span></span></span>都表示<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1.23</mn><mo>×</mo><mn>1</mn><msup><mn>0</mn><mn>3</mn></msup></mrow><annotation encoding="application/x-tex">1.23\times10^3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">1.23</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span></span></span></span></span></span></span></span>；字母<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>e</mi></mrow><annotation encoding="application/x-tex">e</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">e</span></span></span></span>之前必须有数字且后面的指数必须为整数；</li>
</ul>
<p>👣</p>
<ul>
<li>浮点型数据是由有限的存数单元组成的，能提供有效数字总是有限的，有效位以外的数字将被舍去，可能存在一些误差；</li>
</ul>
<h4 id="复数-complex-number" tabindex="-1"><a class="header-anchor" href="#复数-complex-number" aria-hidden="true">#</a> 复数（Complex-number）</h4>
<blockquote>
<p>复数是由两个浮点数构成，一个表示实部（real），一个表示虚部（imag），形式如<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mi>i</mi></mrow><annotation encoding="application/x-tex">a+bi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">bi</span></span></span></span>的数，这里的<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span>、<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi></mrow><annotation encoding="application/x-tex">b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span>是实数，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi></mrow><annotation encoding="application/x-tex">i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span></span></span></span>是虚数单位</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:center">类型</th>
<th style="text-align:center">字节长度</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">complex64</td>
<td style="text-align:center">8</td>
<td style="text-align:center">由两个float32构成，因此字节长度为4+4</td>
</tr>
<tr>
<td style="text-align:center">complex128</td>
<td style="text-align:center">16</td>
<td style="text-align:center">由两个float64构成，因此字节长度为8+8</td>
</tr>
</tbody>
</table>
<p>对于一个复数<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>z</mi><mo>=</mo><mi>c</mi><mi>o</mi><mi>m</mi><mi>p</mi><mi>l</mi><mi>e</mi><mi>x</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">z=complex(x,y)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">co</span><span class="mord mathnormal">m</span><span class="mord mathnormal" style="margin-right:0.01968em;">pl</span><span class="mord mathnormal">e</span><span class="mord mathnormal">x</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span></span>，可以通过Go语言内置函数<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>e</mi><mi>a</mi><mi>l</mi><mo stretchy="false">(</mo><mi>z</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">real(z)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">re</span><span class="mord mathnormal">a</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="mclose">)</span></span></span></span>获得该复数的实部，也可以通过函数<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi><mi>m</mi><mi>a</mi><mi>g</mi><mo stretchy="false">(</mo><mi>z</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">imag(z)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ima</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="mclose">)</span></span></span></span>获得该复数的虚部；</p>
<p>**零值：**0+0i</p>
<h4 id="字节型-byte" tabindex="-1"><a class="header-anchor" href="#字节型-byte" aria-hidden="true">#</a> 字节型（Byte）</h4>
<blockquote>
<p>字节型数据在计算机中主要是来表示和存储ASCII码，即处理字符，将一个字符存放到一个字符变量中，实际上并不是把该字符本身存放到内存单元中，而是将该字符的ASCII编码存放到内存单元中。</p>
</blockquote>
<p>**关键字定义：**byte</p>
<p>**字节长度：**1</p>
<p><strong>取值范围：</strong>[0~<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>8</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^8-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">8</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>]，byte本质就是uint8。</p>
<p>**零值：**0</p>
<h4 id="字符类型-rune" tabindex="-1"><a class="header-anchor" href="#字符类型-rune" aria-hidden="true">#</a> 字符类型（Rune）</h4>
<p>关键字定义：rune</p>
<blockquote>
<p>Go语言处理Unicode字符有个专用的数据类型rune，等价于int32。</p>
</blockquote>
<p>Unicode编码</p>
<blockquote>
<p>随着计算机技术在世界范围内的广泛使用，国际标准化组织（ISO）统一制定了一种可以容纳世界上所有文字和符号的字符编码方案，即Unicode编码方案。由于涉及到不同计算机架构的大小端问题（Big Endian，Little Endian）于是存在不同的Unicode字符集转换格式（UCS Transformation Format,UTF)，例如：</p>
<ul>
<li>UTF-8：使用1～4B不等长方案，西方字符通常只用一个字节，中文通常需要三个字节；</li>
<li>UTF-16：用2B无符号整数存储Unicode字符；</li>
<li>UTF-32：用4B无符号整数存储Unicode字符；</li>
</ul>
</blockquote>
<h4 id="uintptr类型" tabindex="-1"><a class="header-anchor" href="#uintptr类型" aria-hidden="true">#</a> uintptr类型</h4>
<blockquote>
<p>Go语言中，uintptr是可以保存32位或64位的指针的无符号整数类型，和int类型一样，uintptr根据操作系统决定指针位数，32位操纵系统uintptr是32位的，64位操作系统uintptr是64位的。</p>
</blockquote>
<h3 id="复合类型" tabindex="-1"><a class="header-anchor" href="#复合类型" aria-hidden="true">#</a> 复合类型</h3>
<blockquote>
<p>复合类型即比较复杂的数据类型，包括数组（array）、结构体（struct）。数组里存放的是一组相同类型的数据，结构体里存放的是不同类型的数据。</p>
<p>与值类型一致，复合类型变量在传递过程也是进行值拷贝。</p>
</blockquote>
<h3 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型" aria-hidden="true">#</a> 引用类型</h3>
<blockquote>
<p>引用类型即指针类型，包括指针（pointer）、切片（silence）、字典（map）、通道（channel）、接口（interface）和函数（function）。</p>
</blockquote>
<p>👀</p>
<p>值类型和引用类型的区别在于，在函数参数传递过程中</p>
<ul>
<li>值类型的变量的值复制一份传递</li>
<li>引用类型的变量是把自己的内存地址传递，即拷贝地址</li>
</ul>
</div></template>


