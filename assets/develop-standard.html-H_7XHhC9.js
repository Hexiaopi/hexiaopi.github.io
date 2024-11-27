import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as e,e as t,b as l,o as a}from"./app-DqrjVsRD.js";const s={},o=t("blockquote",null,[t("p",null,[t("a",{href:"https://developer.aliyun.com/article/1573143",target:"_blank",rel:"noopener noreferrer"},"【转载】阿里巴巴MySQL开发规范")])],-1),c=l(`<h2 id="建表规则" tabindex="-1"><a class="header-anchor" href="#建表规则"><span>建表规则</span></a></h2><ol><li>【强制】表达<mark>是</mark>与<mark>否</mark>概念的字段，必须使用 is_xxx 的方式命名，数据类型是 unsigned tinyint（1 表示是，0 表示否）。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>任何字段如果为非负数，必须是 unsigned。</p></div><div class="hint-container note"><p class="hint-container-title">注</p><p>正例：表达逻辑删除的字段名 is_deleted，1 表示删除，0 表示未删除。</p></div><ol start="2"><li>【强制】表名、字段名必须使用小写字母或数字，禁止出现数字开头，禁止两个下划线中间只出现数字。数据库字段名的修改代价很大，因为无法进行预发布，所以字段名称需要慎重考虑。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>MySQL 在 Windows 下不区分大小写，但在 Linux 下默认是区分大小写。因此，数据库名、表名、字段名，都不允许出现任何大写字母，避免节外生枝。</p></div><div class="hint-container note"><p class="hint-container-title">注</p><ul><li>正例：aliyun_admin，rdc_config，level3_name</li><li>反例：AliyunAdmin，rdcConfig，level_3_name</li></ul></div><ol start="3"><li>【强制】表名不使用复数名词。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>表名应该仅仅表示表里面的实体内容，不应该表示实体数量，对应于 DO 类名也是单数形式，符合表达习惯。</p></div><ol start="4"><li><p>【强制】禁用保留字，如 desc、range、match、delayed 等，请参考 MySQL 官方保留字。</p></li><li><p>【强制】主键索引名为 pk_字段名；唯一索引名为 uk_字段名；普通索引名则为 idx_字段名。</p></li></ol><blockquote><p>pk_ 即 primary key；uk_ 即 unique key；idx_ 即 index 的简称。</p></blockquote><ol start="6"><li>【强制】小数类型为 decimal，禁止使用 float 和 double。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>在存储的时候，float 和 double 都存在精度损失的问题，很可能在比较值的时候，得到不正确的结果。如果存储的数据范围超过decimal 的范围，建议将数据拆成整数和小数并分开存储。</p></div><ol start="7"><li><p>【强制】如果存储的字符串长度几乎相等，使用 char 定长字符串类型。</p></li><li><p>【强制】varchar 是可变长字符串，不预先分配存储空间，长度不要超过 5000，如果存储长度大于此值，定义字段类型为 text，独立出来一张表，用主键来对应，避免影响其它字段索引效率。</p></li><li><p>【强制】表必备三字段：id, gmt_create, gmt_modified。</p></li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>其中: id 必为主键，类型为 bigint unsigned、单表时自增、步长为 1。gmt_create, gmt_modified的类型均为 datetime 类型，前者现在时表示主动式创建，后者过去分词表示被动式更新。</p></div><ol start="10"><li>【推荐】表的命名最好是遵循“业务名称_表的作用”。</li></ol><div class="hint-container note"><p class="hint-container-title">正例</p><p>alipay_task / force_project / trade_config</p></div><ol start="11"><li><p>【推荐】库名与应用名称尽量一致。</p></li><li><p>【推荐】如果修改字段含义或对字段表示的状态追加时，需要及时更新字段注释。</p></li><li><p>【推荐】字段允许适当冗余，以提高查询性能，但必须考虑数据一致。冗余字段应遵循：</p></li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><ul><li>1）不是频繁修改的字段。</li><li>2）不是唯一索引的字段。</li><li>3）不是 varchar 超长字段，更不能是 text 字段。</li></ul></div><div class="hint-container note"><p class="hint-container-title">注</p><p>正例：各业务线经常冗余存储商品名称，避免查询时需要调用 IC 服务获取。</p></div><ol start="14"><li>【推荐】单表行数超过 500 万行或者单表容量超过 2GB，才推荐进行分库分表。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>如果预计三年后的数据量根本达不到这个级别，请不要在创建表时就分库分表。</p></div><ol start="15"><li>【参考】合适的字符存储长度，不但节约数据库表空间、节约索引存储，更重要的是提升检索速度。</li></ol><div class="hint-container note"><p class="hint-container-title">注</p><p>正例：无符号值可以避免误存负数，且扩大了表示范围。</p></div><table><thead><tr><th>类型</th><th>字节</th><th>表示范围</th></tr></thead><tbody><tr><td>tinyint</td><td>1</td><td>无符号值：0 ~ 255，有符号值：-128 ~ 127</td></tr><tr><td>smallint</td><td>2</td><td>无符号值：0 ~ 65535，有符号值：-32768 ~ 32767</td></tr><tr><td>mediumint</td><td>3</td><td>无符号值：0 ~ 16777215，有符号值：-8388608~8388607</td></tr><tr><td>int</td><td>4</td><td>无符号值：0 ~ 4294967295，有符号值： -2147483648~2147483647</td></tr><tr><td>bigint</td><td>8</td><td>无符号值: 0~((2³²×²)-1);有符号值： -(2³²×²)/2 ~ (2³²×²)/2-1</td></tr></tbody></table><h2 id="索引规约" tabindex="-1"><a class="header-anchor" href="#索引规约"><span>索引规约</span></a></h2><ol><li>【强制】业务上具有唯一特性的字段，即使是组合字段，也必须建成唯一索引。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>不要以为唯一索引影响了 insert 速度，这个速度损耗可以忽略，但提高查找速度是明显的；另外，即使在应用层做了非常完善的校验控制，只要没有唯一索引，根据墨菲定律，必然有脏数据产生。</p></div><ol start="2"><li>【强制】超过三个表禁止 join。需要 join 的字段，数据类型保持绝对一致；多表关联查询时，保证被关联的字段需要有索引。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>即使双表 join 也要注意表索引、SQL 性能。</p></div><ol start="3"><li>【强制】在 varchar 字段上建立索引时，必须指定索引长度，没必要对全字段建立索引，根据实际文本区分度决定索引长度。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>索引的长度与区分度是一对矛盾体，一般对字符串类型数据，长度为 20 的索引，区分度会高达 90% 以上，可以使用 <code>count(distinct left(列名, 索引长度))/count(*)</code>的区分度来确定。</p></div><ol start="4"><li>【强制】页面搜索严禁左模糊或者全模糊，如果需要请走搜索引擎来解决。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>索引文件具有 B-Tree 的最左前缀匹配特性，如果左边的值未确定，那么无法使用此索引。</p></div><ol start="5"><li>【推荐】如果有 order by 的场景，请注意利用索引的有序性。order by 最后的字段是组合索引的一部分，并且放在索引组合顺序的最后，避免出现 file_sort 的情况，影响查询性能。</li></ol><div class="hint-container note"><p class="hint-container-title">注</p><ul><li>正例：where a=? and b=? order by c; 索引：a_b_c</li><li>反例：索引如果存在范围查询，那么索引有序性无法利用，如：WHERE a&gt;10 ORDER BY b; 索引 a_b 无法排序。</li></ul></div><ol start="6"><li>【推荐】利用覆盖索引来进行查询操作，避免回表。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>如果一本书需要知道第 11 章是什么标题，会翻开第 11 章对应的那一页吗？目录浏览一下就好，这个目录就是起到覆盖索引的作用。</p></div><div class="hint-container note"><p class="hint-container-title">注</p><p>正例：能够建立索引的种类分为主键索引、唯一索引、普通索引三种，而覆盖索引只是一种查询的一种效果，用 explain 的结果，extra 列会出现：using index。</p></div><ol start="7"><li>【推荐】利用延迟关联或者子查询优化超多分页场景。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>MySQL 并不是跳过 offset 行，而是取 offset+N 行，然后返回放弃前 offset 行，返回 N 行，那当offset 特别大的时候，效率就非常的低下，要么控制返回的总页数，要么对超过特定阈值的页数进行 SQL改写。</p></div><div class="hint-container note"><p class="hint-container-title">注</p><p>正例：先快速定位需要获取的 id 段，然后再关联：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">FROM</span> 表 <span class="token number">1</span> a<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">select</span> id <span class="token keyword">from</span> 表 <span class="token number">1</span> <span class="token keyword">where</span> 条件 <span class="token keyword">LIMIT</span> <span class="token number">100000</span><span class="token punctuation">,</span><span class="token number">20</span> <span class="token punctuation">)</span> b <span class="token keyword">where</span> a<span class="token punctuation">.</span>id<span class="token operator">=</span>b<span class="token punctuation">.</span>id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><ol start="8"><li>【推荐】SQL 性能优化的目标：至少要达到 range 级别，要求是 ref 级别，如果可以是 consts 最好。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><ul><li>1） consts 单表中最多只有一个匹配行（主键或者唯一索引），在优化阶段即可读取到数据。</li><li>2） ref 指的是使用普通的索引（normal index）。</li><li>3） range 对索引进行范围检索。</li></ul></div><div class="hint-container note"><p class="hint-container-title">注</p><p>反例：explain 表的结果，type=index，索引物理文件全扫描，速度非常慢，这个 index 级别比较 range还低，与全表扫描是小巫见大巫。</p></div><ol start="9"><li>【推荐】建组合索引的时候，区分度最高的在最左边。</li></ol><div class="hint-container note"><p class="hint-container-title">注</p><p>正例：如果 where a=? and b=?，a 列的几乎接近于唯一值，那么只需要单建 idx_a 索引即可。</p></div><div class="hint-container info"><p class="hint-container-title">说明</p><p>存在非等号和等号混合判断条件时，在建索引时，请把等号条件的列前置。如：where c&gt;? and d=? 那么即使 c 的区分度更高，也必须把 d 放在索引的最前列，即建立组合索引 idx_d_c。</p></div><ol start="10"><li><p>【推荐】防止因字段类型不同造成的隐式转换，导致索引失效。</p></li><li><p>【参考】创建索引时避免有如下极端误解：</p></li></ol><div class="hint-container info"><p class="hint-container-title">相关信息</p><ul><li>1） 索引宁滥勿缺。认为一个查询就需要建一个索引。</li><li>2） 吝啬索引的创建。认为索引会消耗空间、严重拖慢记录的更新以及行的新增速度。</li><li>3） 抵制惟一索引。认为惟一索引一律需要在应用层通过“先查后插”方式解决。</li></ul></div><h2 id="sql-语句" tabindex="-1"><a class="header-anchor" href="#sql-语句"><span>SQL 语句</span></a></h2><ol><li>【强制】不要使用 count(列名)或 count(常量)来替代 count(*)，count(*)是 SQL92 定义的标准统计行数的语法，跟数据库无关，跟 NULL 和非 NULL 无关。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>count(*)会统计值为 NULL 的行，而 count(列名)不会统计此列为 NULL 值的行。</p></div><ol start="2"><li><p>【强制】count(distinct col) 计算该列除 NULL 之外的不重复行数，注意 count(distinct col1,col2) 如果其中一列全为 NULL，那么即使另一列有不同的值，也返回为 0。</p></li><li><p>【强制】当某一列的值全是 NULL 时，count(col)的返回结果为 0，但 sum(col)的返回结果为NULL，因此使用 sum()时需注意 NPE 问题。</p></li></ol><div class="hint-container note"><p class="hint-container-title">正例</p><p>可以使用如下方式来避免 sum 的 NPE 问题：SELECT IFNULL(SUM(column), 0) FROM table;</p></div><ol start="4"><li>【强制】使用 ISNULL()来判断是否为 NULL 值。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>NULL 与任何值的直接比较都为 NULL。</p><ul><li>1） NULL&lt;&gt;NULL 的返回结果是 NULL，而不是 false。</li><li>2） NULL=NULL 的返回结果是 NULL，而不是 true。</li><li>3） NULL&lt;&gt;1 的返回结果是 NULL，而不是 true。</li></ul></div><div class="hint-container note"><p class="hint-container-title">注</p><p>反例：在 SQL 语句中，如果在 null 前换行，影响可读性。<code>select * from table where column1 is null and column3 is not null;</code> 而<code>ISNULL(column)</code>是一个整体，简洁易懂。从性能数据上分析，<code>ISNULL(column)</code> 执行效率更快一些。</p></div><ol start="5"><li><p>【强制】代码中写分页查询逻辑时，若 count 为 0 应直接返回，避免执行后面的分页语句。</p></li><li><p>【强制】不得使用外键与级联，一切外键概念必须在应用层解决。</p></li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>（概念解释）学生表中的 student_id 是主键，那么成绩表中的 student_id 则为外键。如果更新学生表中的 student_id，同时触发成绩表中的 student_id 更新，即为级联更新。</p><p>外键与级联更新适用于单机低并发，不适合分布式、高并发集群；</p><p>级联更新是强阻塞，存在数据库更新风暴的风险；</p><p>外键影响数据库的插入速度。</p></div><ol start="7"><li><p>【强制】禁止使用存储过程，存储过程难以调试和扩展，更没有移植性。</p></li><li><p>【强制】数据订正（特别是删除或修改记录操作）时，要先 select，避免出现误删除，确认无误才能执行更新语句。</p></li><li><p>【强制】对于数据库中表记录的查询和变更，只要涉及多个表，都需要在列名前加表的别名（或表名）进行限定。</p></li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>对多表进行查询记录、更新记录、删除记录时，如果对操作列没有限定表的别名（或表名），并且操作列在多个表中存在时，就会抛异常。</p></div><div class="hint-container note"><p class="hint-container-title">注</p><ul><li>正例：<code>select t1.name from table_first as t1 , table_second as t2 where t1.id=t2.id;</code></li><li>反例：在某业务中，由于多表关联查询语句没有加表的别名（或表名）的限制，正常运行两年后，最近在某个表中增加一个同名字段，在预发布环境做数据库变更后，线上查询语句出现出 1052 异常：Column &#39;name&#39; in field list is ambiguous。</li></ul></div><ol start="10"><li>【推荐】SQL 语句中表的别名前加 as，并且以 t1、t2、t3、...的顺序依次命名。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><ul><li>1）别名可以是表的简称，或者是根据表出现的顺序，以 t1、t2、t3 的方式命名。</li><li>2）别名前加 as 使别名更容易识别。</li></ul></div><div class="hint-container note"><p class="hint-container-title">正例</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> t1<span class="token punctuation">.</span>name <span class="token keyword">from</span> table_first <span class="token keyword">as</span> t1<span class="token punctuation">,</span> table_second <span class="token keyword">as</span> t2 <span class="token keyword">where</span> t1<span class="token punctuation">.</span>id<span class="token operator">=</span>t2<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><ol start="11"><li><p>【推荐】in 操作能避免则避免，若实在避免不了，需要仔细评估 in 后边的集合元素数量，控制在 1000 个之内。</p></li><li><p>【参考】因国际化需要，所有的字符存储与表示，均采用 utf8 字符集，那么字符计数方法需要注意。</p></li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><ul><li><code>SELECT LENGTH(&quot;轻松工作&quot;)；</code> 返回为 12</li><li><code>SELECT CHARACTER_LENGTH(&quot;轻松工作&quot;)；</code> 返回为 4</li></ul><p>如果需要存储表情，那么选择 utf8mb4 来进行存储，注意它与 utf8 编码的区别。</p></div><ol start="13"><li>【参考】TRUNCATE TABLE 比 DELETE 速度快，且使用的系统和事务日志资源少，但 TRUNCATE 无事务且不触发 trigger，有可能造成事故，故不建议在开发代码中使用此语句。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>TRUNCATE TABLE 在功能上与不带 WHERE 子句的 DELETE 语句相同。</p></div><h2 id="orm-映射" tabindex="-1"><a class="header-anchor" href="#orm-映射"><span>ORM 映射</span></a></h2><ol><li>【强制】在表查询中，一律不要使用 * 作为查询的字段列表，需要哪些字段必须明确写明。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><ul><li>1）增加查询分析器解析成本。</li><li>2）增减字段容易与 resultMap 配置不一致。</li><li>3）无用字段增加网络消耗，尤其是 text 类型的字段。</li></ul></div><ol start="2"><li>【强制】POJO 类的布尔属性不能加 is，而数据库字段必须加 is_，要求在 resultMap 中进行字段与属性之间的映射。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>参见定义 POJO 类以及数据库字段定义规定，在 sql.xml 增加映射，是必须的。</p></div><ol start="3"><li>【强制】不要用 resultClass 当返回参数，即使所有类属性名与数据库字段一一对应，也需要定义 resultMap；反过来，每一个表也必然有一个 resultMap 与之对应。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>配置映射关系，使字段与 DO 类解耦，方便维护。</p></div><ol start="4"><li><p>【强制】sql.xml 配置参数使用：#{}，#param# 不要使用\${} 此种方式容易出现 SQL 注入。</p></li><li><p>【强制】iBATIS 自带的 queryForList(String statementName,int start,int size)不推荐使用。</p></li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>其实现方式是在数据库取到 statementName 对应的 SQL 语句的所有记录，再通过 subList 取start,size 的子集合。</p></div><div class="hint-container note"><p class="hint-container-title">正例</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Map&lt;String, Object&gt; map = new HashMap&lt;&gt;();
map.put(&quot;start&quot;, start);
map.put(&quot;size&quot;, size);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><ol start="6"><li>【强制】不允许直接拿 HashMap 与 Hashtable 作为查询结果集的输出。</li></ol><div class="hint-container note"><p class="hint-container-title">反例</p><p>某同学为避免写一个 resultMap，直接使用 HashTable 来接收数据库返回结果，结果出现日常是把 bigint 转成 Long 值，而线上由于数据库版本不一样，解析成 BigInteger，导致线上问题。</p></div><ol start="7"><li><p>【强制】更新数据表记录时，必须同时更新记录对应的 gmt_modified 字段值为当前时间。</p></li><li><p>【推荐】不要写一个大而全的数据更新接口。传入为 POJO 类，不管是不是自己的目标更新字段，都进行 <code>update table set c1=value1,c2=value2,c3=value3;</code> 这是不对的。执行 SQL 时，不要更新无改动的字段，一是易出错；二是效率低；三是增加 binlog 存储。</p></li><li><p>【参考】@Transactional 事务不要滥用。事务会影响数据库的 QPS，另外使用事务的地方需要考虑各方面的回滚方案，包括缓存回滚、搜索引擎回滚、消息补偿、统计修正等。</p></li><li><p>【参考】isEqual 中的 compareValue 是与属性值对比的常量，一般是数字，表示相等时带上此条件；isNotEmpty 表示不为空且不为 null 时执行；isNotNull 表示不为 null 值时执行。</p></li></ol>`,83);function p(r,d){return a(),n("div",null,[o,e(" more "),c])}const v=i(s,[["render",p],["__file","develop-standard.html.vue"]]),m=JSON.parse('{"path":"/database/mysql/develop-standard.html","title":"阿里巴巴MySQL开发规范","lang":"zh-CN","frontmatter":{"title":"阿里巴巴MySQL开发规范","date":"2024-08-20T00:00:00.000Z","tag":["MySQL"],"category":["数据存储"],"description":"【转载】阿里巴巴MySQL开发规范","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/database/mysql/develop-standard.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"阿里巴巴MySQL开发规范"}],["meta",{"property":"og:description","content":"【转载】阿里巴巴MySQL开发规范"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-20T09:51:27.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-08-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-20T09:51:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"阿里巴巴MySQL开发规范\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-20T09:51:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"建表规则","slug":"建表规则","link":"#建表规则","children":[]},{"level":2,"title":"索引规约","slug":"索引规约","link":"#索引规约","children":[]},{"level":2,"title":"SQL 语句","slug":"sql-语句","link":"#sql-语句","children":[]},{"level":2,"title":"ORM 映射","slug":"orm-映射","link":"#orm-映射","children":[]}],"git":{"createdTime":1724147487000,"updatedTime":1724147487000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":12.99,"words":3896},"filePathRelative":"database/mysql/develop-standard.md","localizedDate":"2024年8月20日","excerpt":"<blockquote>\\n<p><a href=\\"https://developer.aliyun.com/article/1573143\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">【转载】阿里巴巴MySQL开发规范</a></p>\\n</blockquote>\\n","autoDesc":true}');export{v as comp,m as data};