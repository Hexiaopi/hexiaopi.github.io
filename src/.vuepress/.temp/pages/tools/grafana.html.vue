<template><div><h1 id="grafana" tabindex="-1"><a class="header-anchor" href="#grafana" aria-hidden="true">#</a> Grafana</h1>
<h2 id="_1-grafana简介" tabindex="-1"><a class="header-anchor" href="#_1-grafana简介" aria-hidden="true">#</a> 1. Grafana简介</h2>
<h3 id="_1-1-grafana简介" tabindex="-1"><a class="header-anchor" href="#_1-1-grafana简介" aria-hidden="true">#</a> 1.1 grafana简介</h3>
<blockquote>
<p>Grafana是适用于所有指标的分析平台，允许用户查询、可视化、提醒和理解指标。</p>
</blockquote>
<p>另外一种定义</p>
<blockquote>
<p>Grafana是一款开源的、功能丰富的支持Graphite、Elasticsearch、OpenTSDB、Prometheus和InfluxDB等数据源的指标仪表板和图形编辑器。</p>
</blockquote>
<p><strong>官网：</strong><code v-pre>https://grafana.com/</code></p>
<p><strong>Github：</strong><code v-pre>https://github.com/grafana/grafana</code></p>
<h2 id="_2-grafana使用-基础" tabindex="-1"><a class="header-anchor" href="#_2-grafana使用-基础" aria-hidden="true">#</a> 2 Grafana使用（基础）</h2>
<p>Grafana的使用主要围绕Dashboard（仪表板），如图所示：</p>
<figure><img src="@source/image/dashboard.jpg" alt="dashboard" tabindex="0" loading="lazy"><figcaption>dashboard</figcaption></figure>
<blockquote>
<p><strong>仪表板</strong>由一组面板（panel）组织排列的视图</p>
<ul>
<li>支持动态选择可视化数据，如图中左上角的IP下拉选，该功能是由<strong>变量</strong>实现<!--2.2.3会介绍到--></li>
<li>支持新增面板、收藏、分享、保存修改、设置、时间选择，如图中右上角展示</li>
</ul>
</blockquote>
<h3 id="_2-1-panel-面板" tabindex="-1"><a class="header-anchor" href="#_2-1-panel-面板" aria-hidden="true">#</a> 2.1 panel（面板）</h3>
<h4 id="_2-1-1-queries-查询" tabindex="-1"><a class="header-anchor" href="#_2-1-1-queries-查询" aria-hidden="true">#</a> 2.1.1 Queries （查询）</h4>
<figure><img src="@source/image/panel-query.jpg" alt="panel-query" tabindex="0" loading="lazy"><figcaption>panel-query</figcaption></figure>
<p>查询界面支持选择数据源、查询编辑器以及查询条件，并且支持多条查询；</p>
<ul>
<li>
<p><strong>Lengend</strong>  在图表下方表格展示指标中标签的值。例如：填写**{{hostname}}<strong>将替换为指标标签中</strong>hostname**对应的标签值；</p>
</li>
<li>
<p><strong>Min step</strong> 面板的数据间隔步长，注意，时间范围选择（右上角）会变成该间距的倍数。例如：面板数据时间间隔设置为1m；（可用鼠标放在图线上看数据时间间隔）</p>
</li>
<li>
<p><strong>Resolution</strong> 控制采样点，降低采样点可以加快速度；</p>
</li>
<li>
<p><strong>Format</strong> 在表格、时间序列或热图之间切换；</p>
</li>
<li>
<p><strong>Instant</strong> 即时，对于<strong>某些面板</strong>可以展示历史数据，也可以只展示当前数据，勾选则表示即时；</p>
</li>
<li>
<p><strong>Link to Graph in Prometheus</strong> 重定向到Prometheus Web页面；</p>
</li>
</ul>
<p>由于可以有多个表达式查询，下面三个是用于全局控制多条查询语句的时间</p>
<ul>
<li>
<p><strong>Min time interval</strong> 最小时间间隔，建议设置为采集频率；可以在表达式中使用<code v-pre> $__interval</code>和<code v-pre>$__interval_ms</code>两个变量；</p>
</li>
<li>
<p><strong>Relative time</strong> 相对时间，面板展示最近多长时间；</p>
</li>
<li>
<p><strong>Time shift</strong> 时间偏移，面板展示到现在之前一段时间，例如：1h之前；</p>
</li>
</ul>
<h4 id="_2-1-2-visualization-可视化" tabindex="-1"><a class="header-anchor" href="#_2-1-2-visualization-可视化" aria-hidden="true">#</a> 2.1.2 Visualization（可视化）</h4>
<p>可视化支持许多类型的面板：<code v-pre>Graph</code>、<code v-pre>Singlestat</code>、<code v-pre>Table</code>、<code v-pre>Heatmap</code>、<code v-pre>Alert list</code>、<code v-pre>Dashboard list</code>、<code v-pre>Text</code>等，且支持从社区下载其他类型面板插件，例如饼图、世界地图等；</p>
<h5 id="graph" tabindex="-1"><a class="header-anchor" href="#graph" aria-hidden="true">#</a> <strong>Graph</strong></h5>
<p>Graph常用来展示多条数据的折线图、条形图，<a href="https://grafana.com/docs/features/panels/graph/" target="_blank" rel="noopener noreferrer">相关配置参考官网<ExternalLinkIcon/></a></p>
<figure><img src="@source/image/graph-general.jpg" alt="graph-general" tabindex="0" loading="lazy"><figcaption>graph-general</figcaption></figure>
<ul>
<li>
<p><strong>Draw Modes</strong>：支持三种方式画图：Bars（条形图）、lines（折线图）、Points(点图)；</p>
</li>
<li>
<p><strong>Model Options</strong>：对图形的一些配置选项：Fill (图形填充颜色深度)、Line Width(线的宽度)、Staircase(将折线图转换为梯状)；</p>
</li>
<li>
<p><strong>Hover tooltip</strong>：鼠标停放提示，Mode支持：<strong>All series</strong>（鼠标停放在线上时展示所有线的数据）、<strong>Single</strong>（鼠标停放在线上时展示该条线的数据）、<strong>Sort order</strong>支持None、Increasing、Decreasing，来排序展示；</p>
</li>
<li>
<p><strong>Stacking &amp; Null value</strong>：<strong>Stack</strong>，一条线放在另一条线上面展示；<strong>Null value</strong>: 当数据丢失时可以选择进行弥补，例如connected连接前后线，null as zero将丢失数据设置为空；</p>
</li>
</ul>
<figure><img src="@source/image/graph-axes.jpg" alt="graph-axes" tabindex="0" loading="lazy"><figcaption>graph-axes</figcaption></figure>
<p><strong>Left Y / Right Y</strong>：</p>
<p>在<strong>左侧Y轴</strong>和<strong>右侧Y轴</strong>可以使用自定义的：</p>
<ul>
<li><strong>单位</strong> - Y值的显示单位；</li>
<li><strong>比例</strong> - 用于Y值的比例，线性或对数；（默认线性）</li>
<li><strong>Y-Min</strong> - 最小Y值；（默认自动）</li>
<li><strong>Y-Max</strong> - 最大Y值；（默认自动）</li>
<li><strong>小数</strong> - 控制Y值显示的小数位数；（默认为自动）</li>
<li><strong>标签</strong> - Y轴标签；（默认为“”）</li>
</ul>
<p><strong>X-Axis</strong> ：x轴，Mode支持：<strong>Time</strong>，x轴以时间维度展示；<strong>Series</strong>根据自定义分组条形图展示；<strong>Histogram</strong>根据值分布统计以条形图展示；</p>
<p><strong>Y-Axes</strong>：Y轴 <s>(暂无需求)</s></p>
<figure><img src="@source/image/graph-legend.jpg" alt="graph-legend" tabindex="0" loading="lazy"><figcaption>graph-legend</figcaption></figure>
<ul>
<li>
<p><strong>Options</strong>：<strong>As Table</strong>以表格展示下面Values勾选的值；<strong>To the right</strong>在图的右边展示表；</p>
</li>
<li>
<p><strong>Values</strong>: 历史所有值的最小值、最大值、平均值、当前值、总计值；小数位数；</p>
</li>
<li>
<p><strong>Hide series</strong>：对于一些特定值使用空值或零值隐藏；（<s>暂无需求</s>）</p>
</li>
</ul>
<figure><img src="@source/image/graph-time.jpg" alt="graph-time" tabindex="0" loading="lazy"><figcaption>graph-time</figcaption></figure>
<ul>
<li><strong>Thresholds &amp; Time Regions</strong> 可以增加阈值，例如值gt(大于)0.2的时候显示告警；可以突出显示某段时间，例如周一到周五；</li>
</ul>
<h5 id="singlestat" tabindex="-1"><a class="header-anchor" href="#singlestat" aria-hidden="true">#</a> <strong>Singlestat</strong></h5>
<p>Singlestat常用来展示单一数据统计数据，可设置最大值、最小值、平均值、总和值，另外提供数字到文本的转换，例如机器节点状况指标up，值1代表机器正常运行，值0代表机器挂掉；<a href="https://grafana.com/docs/features/panels/singlestat/" target="_blank" rel="noopener noreferrer">相关配置参考官网<ExternalLinkIcon/></a></p>
<h5 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> <strong>Table</strong></h5>
<p>Table支持时间序列的多种模式，以时间序列为顺序展示指标数据；<a href="https://grafana.com/docs/features/panels/table_panel/" target="_blank" rel="noopener noreferrer">相关配置参考官网<ExternalLinkIcon/></a></p>
<h5 id="heatmap" tabindex="-1"><a class="header-anchor" href="#heatmap" aria-hidden="true">#</a> <strong>Heatmap</strong></h5>
<p>Heatmap常用来展示数据的分布，例如耗时分布情况，<a href="https://grafana.com/docs/features/panels/heatmap/" target="_blank" rel="noopener noreferrer">相关配置参考官网<ExternalLinkIcon/></a></p>
<h5 id="alert-list" tabindex="-1"><a class="header-anchor" href="#alert-list" aria-hidden="true">#</a> <strong>Alert list</strong></h5>
<p>Alert list 用于展示仪表板警报信息，<s>暂无需求</s>，<a href="https://grafana.com/docs/features/panels/alertlist/" target="_blank" rel="noopener noreferrer">相关配置参考官网<ExternalLinkIcon/></a></p>
<h5 id="dashboard-list" tabindex="-1"><a class="header-anchor" href="#dashboard-list" aria-hidden="true">#</a> <strong>Dashboard list</strong></h5>
<p>Dashboard list支持指向其他仪表板的动态链接。该列表可以配置为使用加星标的仪表板。<a href="https://grafana.com/docs/features/panels/dashlist/" target="_blank" rel="noopener noreferrer">相关配置参考官网<ExternalLinkIcon/></a></p>
<h5 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> <strong>Text</strong></h5>
<p>Text支持为仪表板制作信息和说明面板，支持三种模式：markdown、HTML、text。<a href="https://grafana.com/docs/features/panels/text/" target="_blank" rel="noopener noreferrer">相关配置参考官网<ExternalLinkIcon/></a></p>
<h4 id="_2-1-3-general" tabindex="-1"><a class="header-anchor" href="#_2-1-3-general" aria-hidden="true">#</a> 2.1.3 General</h4>
<ol>
<li><code v-pre>Title</code>：标题，仪表板的名称</li>
<li><code v-pre>Transparent</code>：透明，面板是否透明展示；</li>
<li><code v-pre>Description</code>：描述</li>
</ol>
<p><strong>Repeating</strong></p>
<p>根据模板变量的值动态创建新面板，可以使用该功能；例如：想为每个产品创建同一个面板分别展示，可以选择产品这个变量；</p>
<p><strong>Drilldown Links</strong></p>
<p>支持添加动态链接到其他仪表板或外部URL；</p>
<h4 id="_2-1-3-alert" tabindex="-1"><a class="header-anchor" href="#_2-1-3-alert" aria-hidden="true">#</a> 2.1.3 Alert</h4>
<p><s>暂无需求</s></p>
<h3 id="_2-2-settings-设置" tabindex="-1"><a class="header-anchor" href="#_2-2-settings-设置" aria-hidden="true">#</a> 2.2 Settings（设置）</h3>
<figure><img src="@source/image/dashboard-settings.jpg" alt="dashboard-settings" tabindex="0" loading="lazy"><figcaption>dashboard-settings</figcaption></figure>
<h4 id="_2-2-1-general" tabindex="-1"><a class="header-anchor" href="#_2-2-1-general" aria-hidden="true">#</a> 2.2.1 General</h4>
<blockquote>
<p>一般性设置</p>
</blockquote>
<ul>
<li><code v-pre>Name</code>：仪表板名称</li>
<li><code v-pre>Description</code>：描述</li>
<li><code v-pre>Tags</code>：标签，用于主页面搜素</li>
<li><code v-pre>Folde</code>r：文件夹，用于管理仪表板</li>
<li><code v-pre>Editable</code>：是否可编辑</li>
</ul>
<p><strong>Time Options</strong></p>
<ul>
<li><code v-pre>Timezone</code>：时间区域，本地浏览器时间还是UTC</li>
<li><code v-pre>Auto-refresh</code>：自动刷新时间</li>
<li><code v-pre>Now delay now-</code>：例如填写1m，表示忽略最近一分钟的指标数据，因为可能最近一分钟的指标不完整</li>
<li><code v-pre>Hide time picker</code>：是否隐藏时间选择器</li>
</ul>
<p><strong>Panel Options</strong></p>
<ul>
<li><code v-pre>Graph Tooltip</code>：图形工具提示<s>暂无需求</s></li>
</ul>
<h4 id="_2-2-2-annotations-注释" tabindex="-1"><a class="header-anchor" href="#_2-2-2-annotations-注释" aria-hidden="true">#</a> 2.2.2 Annotations（注释）</h4>
<blockquote>
<p>可以在图标上标记，描述事件</p>
</blockquote>
<p>使用方法：选择面板—&gt;按住CTRL或CMD+单击/选择—&gt;填写</p>
<figure><img src="@source/image/annotation.gif" alt="annotation" tabindex="0" loading="lazy"><figcaption>annotation</figcaption></figure>
<p>可以用于记录异常情况，稍后进行排查分析</p>
<p>在设置页面可以设置Annotations的颜色，这样在面板上可以很清楚的发现。</p>
<h4 id="_2-2-3-variables-变量" tabindex="-1"><a class="header-anchor" href="#_2-2-3-variables-变量" aria-hidden="true">#</a> 2.2.3 Variables（变量）</h4>
<blockquote>
<p>变量是值得占位符</p>
<p>目的：变量使得仪表板具有更多交互式和动态，变量显示为仪表板顶部的下拉选择框，通过这些下拉菜单，可以轻松更改仪表板中显示的数据。</p>
<p>使用范围：可以在指标查询和面板标题中使用变量；</p>
</blockquote>
<p><strong>Example</strong>：如下图红线框所示，可以根据变量IP动态选择展示各个机器的指标数据</p>
<figure><img src="@source/image/example-variable.jpg" alt="example-variable" tabindex="0" loading="lazy"><figcaption>example-variable</figcaption></figure>
<p><strong>变量引用（基础）</strong>：</p>
<ul>
<li><code v-pre>$varname</code> 示例：<code v-pre>apps.frontend.$server.requests.count</code>、<code v-pre>node_load1{instance=~&quot;$node&quot;}</code></li>
<li><code v-pre>[[varname]]</code> 示例：<code v-pre>apps.frontend.[[server]].requests.count</code></li>
</ul>
<p>第一种方式比较容易读写，但不允许在单词中间使用变量，但第二种写法可以例如<code v-pre>my.server[[serverNumber]].count</code></p>
<p><strong>变量引用（高级）</strong>：</p>
<blockquote>
<p>对于多值引用，尤其是选择<code v-pre>All</code>选项时，不同的数据源对于多值的拼接是不同的。例如，MySql数据源的默认值是将多个值连接为逗号分隔的引号：<code v-pre>'server01','server02'</code>。在某些情况下，可能希望使用逗号分隔的字符串而不带引号：<code v-pre>server01,server02</code>。现在可以使用高级格式化选项。</p>
</blockquote>
<p>形式：<code v-pre>${var_name:option}</code><a href="https://grafana.com/docs/reference/templating/#advanced-formatting-options" target="_blank" rel="noopener noreferrer">详情参考官网<ExternalLinkIcon/></a></p>
<p><strong>添加变量</strong>：点击仪表板设置按钮—&gt;Variable—&gt;new</p>
<figure><img src="@source/image/edit-variable.jpg" alt="edit-variable" tabindex="0" loading="lazy"><figcaption>edit-variable</figcaption></figure>
<p><strong>General</strong></p>
<ol>
<li><code v-pre>Name</code>：名称，变量的名称，是度量标准查询中引用变量使用的名称。必须唯一，不包含空格；</li>
<li><code v-pre>Lable</code>：标签，此变量的下拉列表左边的名称；</li>
<li><code v-pre>Type</code>：类型，定义变量的类型；<strong>一般选择Query</strong>; <a href="https://grafana.com/docs/reference/templating/#variable-types" target="_blank" rel="noopener noreferrer">详情查看官网<ExternalLinkIcon/></a></li>
<li><code v-pre>Hide</code>：隐藏，隐藏下拉选择框的选项；例如选择Lable，则下拉选择框的左边标签不再显示；选择Variable，整个下拉选择框不再显示；</li>
</ol>
<p><strong>Query Options</strong></p>
<ol>
<li><code v-pre>Data Source</code>：数据源</li>
<li><code v-pre>Query</code>：特定的查询表达式，不同的数据源用不同的表达式，<a href="https://grafana.com/docs/reference/templating/#query-expressions" target="_blank" rel="noopener noreferrer">详情参考官网<ExternalLinkIcon/></a>。对于Prometheus<strong>一般使用labe_values(metric,label)表示返回指定metric中的label值</strong></li>
<li><code v-pre>Regex</code>：正则表达式，例如该列的值是以<code v-pre>[&quot;en-US&quot;]</code>，可以使用正则表达式<code v-pre>/\[\&quot;(.*)\&quot;\]/</code>提取到<code v-pre>en-US</code>;</li>
<li><code v-pre>Sort</code>：排序，在下拉列表中定义选项的排序顺序；</li>
<li><code v-pre>Refresh</code>：刷新，控制何时更新变量选项列表；</li>
</ol>
<p><strong>Selection Options</strong></p>
<ol>
<li><code v-pre>Multi-value</code>：多值，如果启用，该变量将支持同时选择多个选项；</li>
<li><code v-pre>Include All option</code>：包含 All 选项，如果启用，支持勾选所有选项；对于一些正则表达式需要转换的需注意，所有的下拉选择以<code v-pre>|</code>进行合并;</li>
<li><code v-pre>Custom all value</code>：（<code v-pre>Include All option</code>选项启用的情况下出现该选项），由于All选项会使得数据特别长，影响性能。例如当前变量是语种，比较多，比较关注的是中文和英文，可以在此填写<code v-pre>中文|英文</code>;</li>
</ol>
<p><strong>Value groups/tags (Experimental feature)</strong></p>
<p><s>暂无需求</s></p>
<p><strong>Preview of Values</strong></p>
<p>预览下拉选择的值</p>
<h4 id="_2-2-4-links-链接" tabindex="-1"><a class="header-anchor" href="#_2-2-4-links-链接" aria-hidden="true">#</a> 2.2.4 Links（链接）</h4>
<p><s>暂无需求</s></p>
<h4 id="_2-2-5-versions-版本" tabindex="-1"><a class="header-anchor" href="#_2-2-5-versions-版本" aria-hidden="true">#</a> 2.2.5 Versions（版本）</h4>
<blockquote>
<p>版本可以看到对仪表板历史操作的版本，可以很方便的回退到某个版本，或者比较两个版本的差别</p>
</blockquote>
<h4 id="_2-2-6-permissions-权限" tabindex="-1"><a class="header-anchor" href="#_2-2-6-permissions-权限" aria-hidden="true">#</a> 2.2.6 Permissions （权限）</h4>
<blockquote>
<p>可以对某个用户或某个团队设置该仪表板的权限</p>
</blockquote>
<h4 id="_2-2-7-json-model" tabindex="-1"><a class="header-anchor" href="#_2-2-7-json-model" aria-hidden="true">#</a> 2.2.7 JSON Model</h4>
<blockquote>
<p>JSON模型是定义仪表板的数据结构。包括设置，面板设置和布局，查询等</p>
</blockquote>
<h3 id="_2-3-dashboards-各个仪表板" tabindex="-1"><a class="header-anchor" href="#_2-3-dashboards-各个仪表板" aria-hidden="true">#</a> 2.3 Dashboards（各个仪表板）</h3>
<p>提供统一的视图管理仪表板、组织仪表板、播放仪表板、共享仪表板</p>
<h4 id="_2-3-1-manage-管理" tabindex="-1"><a class="header-anchor" href="#_2-3-1-manage-管理" aria-hidden="true">#</a> 2.3.1 Manage（管理）</h4>
<figure><img src="@source/image/dashboards-manage.jpg" alt="dashboards-manage" tabindex="0" loading="lazy"><figcaption>dashboards-manage</figcaption></figure>
<p>功能：</p>
<ul>
<li>创建仪表板</li>
<li>创建文件夹</li>
<li>将仪表板移动到文件夹中</li>
<li>删除多个仪表板</li>
<li>导航到文件夹页面（设置文件夹和仪表板的权限）</li>
</ul>
<p><strong>文件夹</strong></p>
<blockquote>
<p>文件夹是一种组织和分组仪表板的方法</p>
</blockquote>
<h4 id="_2-3-2-playlists-播放列表" tabindex="-1"><a class="header-anchor" href="#_2-3-2-playlists-播放列表" aria-hidden="true">#</a> 2.3.2 Playlists（播放列表）</h4>
<blockquote>
<p>播放列表是一种特殊类型的仪表板，可通过仪表板列表进行旋转。播放列表可以是构建态势感知的好方法，非常适合大屏幕展示。</p>
</blockquote>
<figure><img src="@source/image/playlists.jpg" alt="playlists" tabindex="0" loading="lazy"><figcaption>playlists</figcaption></figure>
<figure><img src="@source/image/edit-playlist.jpg" alt="edit-playlist" tabindex="0" loading="lazy"><figcaption>edit-playlist</figcaption></figure>
<p>支持将仪表板加入到播放列表，且支持播放顺序和播放间隔；</p>
<h4 id="_2-3-3-snapshots-快照" tabindex="-1"><a class="header-anchor" href="#_2-3-3-snapshots-快照" aria-hidden="true">#</a> 2.3.3 Snapshots（快照）</h4>
<blockquote>
<p>快照可以提供一种即时方式共享交互式仪表板，我们只需复制URL即可访问仪表板；具体快照设置是在每个仪表板中设置，例如设置过期时间等；</p>
</blockquote>
<figure><img src="@source/image/snapshots.jpg" alt="snapshots" tabindex="0" loading="lazy"><figcaption>snapshots</figcaption></figure>
<h2 id="_3-grafana管理-高级" tabindex="-1"><a class="header-anchor" href="#_3-grafana管理-高级" aria-hidden="true">#</a> 3 Grafana管理（高级）</h2>
<figure><img src="@source/image/configuration.jpg" alt="configuration" tabindex="0" loading="lazy"><figcaption>configuration</figcaption></figure>
<h3 id="_3-1-configuration-配置" tabindex="-1"><a class="header-anchor" href="#_3-1-configuration-配置" aria-hidden="true">#</a> 3.1 Configuration（配置）</h3>
<h4 id="_3-1-1-data-source-数据源" tabindex="-1"><a class="header-anchor" href="#_3-1-1-data-source-数据源" aria-hidden="true">#</a> 3.1.1 Data Source（数据源）</h4>
<blockquote>
<p>grafana为每个数据源提供一个特定的查询编辑器，每个数据源的查询语言和功能不同。</p>
</blockquote>
<p><strong>支持的数据源：</strong><code v-pre>Graphite</code>、<code v-pre>Elasticsearch</code>、 <code v-pre>OpenTSDB</code>、<code v-pre>Prometheus</code>、<code v-pre>InfluxDB</code>等</p>
<figure><img src="@source/image/data-source.jpg" alt="data-source" tabindex="0" loading="lazy"><figcaption>data-source</figcaption></figure>
<p>这里以Prometheus设置为例：</p>
<figure><img src="@source/image/datasource-prometheus.jpg" alt="datasource-prometheus" tabindex="0" loading="lazy"><figcaption>datasource-prometheus</figcaption></figure>
<p>配置项目说明：</p>
<ol>
<li><code v-pre>Name</code>：数据源名称，右边<code v-pre>default</code>用于是否设置为默认，如果开启，则在面板查询中首先会选择该数据源；</li>
</ol>
<p>HTTP相关：</p>
<ol>
<li><code v-pre>URL</code>：Prometheus的URL地址，Prometheus在9090端口提供web方式查询</li>
<li><code v-pre>Access</code>：如何访问数据源，分为两种：<code v-pre>Server</code>和<code v-pre>Browser</code>，<code v-pre>Server</code>会经过grafana服务端访问数据源，<code v-pre>Browser</code>会直接访问数据源；</li>
<li><code v-pre>Whitelisted Cookies</code>：Grafana按名称指定应转发到数据源的cookie。</li>
</ol>
<p>Auth相关：</p>
<ol>
<li><code v-pre>Basic Auth</code>：勾选后会让填写用户名和密码；</li>
<li><code v-pre>TLS Client Auth</code>：勾选后让填写证书和密钥；</li>
<li><code v-pre>Skip TLS Verify</code>：跳过TLS验证；</li>
<li><code v-pre>Forward OAuth Identity</code>：将用户的上游OAuth标识转发给数据源（它们的访问令牌被传递）；</li>
<li><code v-pre>With Credentials</code>:是否应使用跨站点请求发送cookie或auth标头等凭据；</li>
<li><code v-pre>With CA Cert</code>：需要验证自签名TLS证书；</li>
</ol>
<p>其他配置：</p>
<ol>
<li><code v-pre>Scrape interval</code>：采集间隔，默认是Prometheus配置的全局采集间隔；</li>
<li><code v-pre>Query timeout</code>：查询超时时间；</li>
<li><code v-pre>HTTP Method</code>：Prometheus &gt;=v2.1.0才支持POST；</li>
</ol>
<h4 id="_3-1-2-user-用户" tabindex="-1"><a class="header-anchor" href="#_3-1-2-user-用户" aria-hidden="true">#</a> 3.1.2 User （用户）</h4>
<blockquote>
<p>用户权限管理</p>
</blockquote>
<p>用户角色分为三种：<code v-pre>Admin Role</code>、<code v-pre>Editor Role</code>、<code v-pre>Viewer Role</code>，其中：</p>
<p><code v-pre>Admin Role</code>：管理员角色可以做一切范围的组织，例如：</p>
<ul>
<li>添加和编辑数据源；</li>
<li>添加和编辑组织用户和团队；</li>
<li>配置App插件并色湖之组织设置；</li>
</ul>
<p><code v-pre>Editor Role</code>：编辑者角色</p>
<ul>
<li>可以创建和修改仪表板和警报规则；</li>
<li><strong>无法</strong>创建或编辑数据源，也无法邀请新用户；</li>
</ul>
<p><code v-pre>Viewer Role</code>：查看者角色</p>
<ul>
<li>查看仪表板</li>
<li><strong>无法</strong>创建或编辑仪表板或数据源</li>
</ul>
<h4 id="_3-1-3-teams-团队" tabindex="-1"><a class="header-anchor" href="#_3-1-3-teams-团队" aria-hidden="true">#</a> 3.1.3 Teams（团队）</h4>
<blockquote>
<p>可以建立多个团队，例如开发团队、测试团队、运维团队，每个团队可以使用不同的UI主题等配置</p>
</blockquote>
<h4 id="_3-1-4-plugins-插件" tabindex="-1"><a class="header-anchor" href="#_3-1-4-plugins-插件" aria-hidden="true">#</a> 3.1.4 Plugins（插件）</h4>
<blockquote>
<p>提供许多可视化插件，帮助用户展示指标数据，理解指标数据</p>
</blockquote>
<h4 id="_3-1-5-preferences-首选项" tabindex="-1"><a class="header-anchor" href="#_3-1-5-preferences-首选项" aria-hidden="true">#</a> 3.1.5 Preferences（首选项）</h4>
<blockquote>
<p>设置组织名、UI主题、首页仪表板、时区等</p>
</blockquote>
<h4 id="_3-1-6-api-keys" tabindex="-1"><a class="header-anchor" href="#_3-1-6-api-keys" aria-hidden="true">#</a> 3.1.6 API keys</h4>
<blockquote>
<p>可提供给其他应用程序的仅查看API访问。</p>
</blockquote>
<h3 id="_3-2-server-admin-服务管理" tabindex="-1"><a class="header-anchor" href="#_3-2-server-admin-服务管理" aria-hidden="true">#</a> 3.2 Server Admin（服务管理）</h3>
<figure><img src="@source/image/server-admin.jpg" alt="server-admin" tabindex="0" loading="lazy"><figcaption>server-admin</figcaption></figure>
<h4 id="_3-2-1-users-用户" tabindex="-1"><a class="header-anchor" href="#_3-2-1-users-用户" aria-hidden="true">#</a> 3.2.1 Users（用户）</h4>
<blockquote>
<p>是用于用户管理，支持新增用户，修改用户，删除用户；</p>
</blockquote>
<figure><img src="@source/image/edit-user.jpg" alt="edit-user" tabindex="0" loading="lazy"><figcaption>edit-user</figcaption></figure>
<p>修改用户可以更改账户密码等等，最主要是修改用户角色权限，如：<code v-pre>Admin</code>、<code v-pre>Editor</code>、<code v-pre>Viewer</code>（参考2.1.2节）；同时所属组织，一个用户可以加入多个组织；</p>
<h4 id="_3-2-2-orgs-组织" tabindex="-1"><a class="header-anchor" href="#_3-2-2-orgs-组织" aria-hidden="true">#</a> 3.2.2 Orgs（组织）</h4>
<blockquote>
<p>用于组织的管理，支持新增组织、修改组织、删除组织</p>
</blockquote>
<figure><img src="@source/image/orgs.jpg" alt="orgs" tabindex="0" loading="lazy"><figcaption>orgs</figcaption></figure>
<figure><img src="@source/image/edit-orgs.jpg" alt="edit-orgs" tabindex="0" loading="lazy"><figcaption>edit-orgs</figcaption></figure>
<p>编辑组织可以修改组织名称、管理当前组织内用户角色权限等信息；</p>
<p><strong>用户和组织是多对多的关系</strong></p>
<h4 id="_3-2-3-settings-设置" tabindex="-1"><a class="header-anchor" href="#_3-2-3-settings-设置" aria-hidden="true">#</a> 3.2.3 Settings（设置）</h4>
<blockquote>
<p>这里是一些系统设置，保存在grafana.ini或custom.ini中定义，或在环境变量中定义；</p>
</blockquote>
<figure><img src="@source/image/settings.jpg" alt="settings" tabindex="0" loading="lazy"><figcaption>settings</figcaption></figure>
<p>维护人员需详细了解</p>
<p><s>暂无需求</s></p>
<h4 id="_3-2-4-stats-状态" tabindex="-1"><a class="header-anchor" href="#_3-2-4-stats-状态" aria-hidden="true">#</a> 3.2.4 Stats（状态）</h4>
<blockquote>
<p>查看一些统计信息，例如总的用户数，活跃的用户数等</p>
</blockquote>
<figure><img src="@source/image/stats.jpg" alt="stats" tabindex="0" loading="lazy"><figcaption>stats</figcaption></figure>
<p>维护人员需了解</p>
</div></template>


