import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as s,c as t,f as c,a,b as e,d as l,w as o,e as i}from"./app-a68aad8a.js";const p={},u=a("p",null,"索引是一种数据结构，帮助SQL高效获取数据的。类似一本书的目录，可以快速对特定值进行定位和查找，从而大大加快数据查询的效率。",-1),_=i('<h2 id="索引优缺点" tabindex="-1"><a class="header-anchor" href="#索引优缺点" aria-hidden="true">#</a> 索引优缺点</h2><h3 id="索引优点" tabindex="-1"><a class="header-anchor" href="#索引优点" aria-hidden="true">#</a> 索引优点</h3><ul><li>索引可以大大减少需要扫描的数据量</li><li>索引可以避免排序和临时表，索引已经有序</li><li>索引可以尽量将随机IO变成顺序IO，例如：聚簇索引包含数据，且索引是有序的，就可以快速获得批量数据，但如果回表，通过主键查询数据，则又变成随机IO</li><li>索引对于InnoDB（支持行级锁）非常重要，InnoDB对需要访问的元组加锁，而索引能够减少InnoDB访问的元组数，如果查询不能使用索引，MySQL会进行全表扫描，导致锁住全表。</li></ul><h3 id="索引缺点" tabindex="-1"><a class="header-anchor" href="#索引缺点" aria-hidden="true">#</a> 索引缺点</h3><ul><li>降低了更新表的数据，因为不仅要更新原始数据，还要更新索引</li><li>索引占用磁盘空间</li><li>数据列如果包含了许多重复的内容，例如性别为：男、女，索引选择可能只筛选一半的数据量，效果不是很好</li><li>对于数据量非常小的表，索引意义不大，有时全表扫描更高效</li></ul>',5),b=i(`<h2 id="索引类型" tabindex="-1"><a class="header-anchor" href="#索引类型" aria-hidden="true">#</a> 索引类型</h2><h3 id="按功能逻辑划分" tabindex="-1"><a class="header-anchor" href="#按功能逻辑划分" aria-hidden="true">#</a> 按功能逻辑划分</h3><h4 id="普通索引" tabindex="-1"><a class="header-anchor" href="#普通索引" aria-hidden="true">#</a> 普通索引</h4><p>普通索引仅仅加快对数据的访问速度，常用于查询条件（where field_name=value）或排序条件（order by field_name）这些场景中。</p><h4 id="唯一索引" tabindex="-1"><a class="header-anchor" href="#唯一索引" aria-hidden="true">#</a> 唯一索引</h4><p>唯一索引相比较普通索引，要求索引列的值必须唯一，但允许有空值。</p><h4 id="主键索引" tabindex="-1"><a class="header-anchor" href="#主键索引" aria-hidden="true">#</a> 主键索引</h4><p>主键索引是一种特殊的索引，不允许有空值，一张表只能有一个主键，一般在建表的时候通过primary key(field_name)指定</p><h4 id="全文索引" tabindex="-1"><a class="header-anchor" href="#全文索引" aria-hidden="true">#</a> 全文索引</h4><p>mysql Like &#39;%xxx&#39;就会导致索引失效，为了模糊搜索需求，例如：like &#39;%hello%&#39;，就需要全文索引支持。InnoDB在5.6版本之后支持全文索引。</p><h3 id="按物理逻辑划分" tabindex="-1"><a class="header-anchor" href="#按物理逻辑划分" aria-hidden="true">#</a> 按物理逻辑划分</h3><h4 id="聚簇索引" tabindex="-1"><a class="header-anchor" href="#聚簇索引" aria-hidden="true">#</a> 聚簇索引</h4><p>聚簇索引的叶子节点直接存储数据，因此查询的时候只需要进行一次查询</p><h4 id="非聚簇索引" tabindex="-1"><a class="header-anchor" href="#非聚簇索引" aria-hidden="true">#</a> 非聚簇索引</h4><p>非聚簇索引的叶子节点存储数据的主键，因此查询的时候需要进行两次查询：先查询聚簇索引获取到主键，再通过主键查询数据。</p><h3 id="按字段个数划分" tabindex="-1"><a class="header-anchor" href="#按字段个数划分" aria-hidden="true">#</a> 按字段个数划分</h3><h4 id="单一索引" tabindex="-1"><a class="header-anchor" href="#单一索引" aria-hidden="true">#</a> 单一索引</h4><p>索引只使用一个字段</p><h4 id="联合索引" tabindex="-1"><a class="header-anchor" href="#联合索引" aria-hidden="true">#</a> 联合索引</h4><p>索引使用多个字段<br> 例如：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>alert <span class="token keyword">table</span> <span class="token keyword">user</span> <span class="token keyword">add</span> <span class="token keyword">index</span> index_name_city_age<span class="token punctuation">(</span>name<span class="token punctuation">,</span>city<span class="token punctuation">,</span>age<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MySQL联合索引遵从：最左匹配原则</p><p>上面索引相当于建立下面三组索引：</p><ul><li>name,city,age</li><li>name,city</li><li>name</li></ul><p>因此：</p><ul><li>如果查询条件是：(city)、(city,age)、(age)都不会命中索引</li><li>如果查询条件是：(name,age)，则会命中name索引</li></ul><p>理论上最左匹配原则中索引对 where 中子句的顺序也是敏感的，但是由于MySQL的查询优化器会自动调整 where 子句的条件顺序以使用适合的索引，所以实际上 where 子句顺序不影响索引的效果。</p><p>如果联合索引有范围查询，就会停止匹配</p><p>如果分别在 x, y, z 上建立单列索引，让该表有3个单列索引，索引效率也会大不一样，在联合索引生效的情况下，单个索引的效率远远低于联合索引。这是由 MySQL 查询优化器的执行顺序决定的，在执行一条查询 sql 时，针对索引的选择大致有如下步骤：</p><p>MySQL 优化器根据搜索条件，找出所有可能使用的索引<br> 计算全表扫描的代价<br> 计算使用不同索引执行查询的代价<br> 对比各种执行方案的代价，找出成本最低的那一个<br> 因此，虽然有多个单列索引，但 MySQL 只能用到其中的那个系统认为似乎是最有效率的，其他的就会失效。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="索引推荐使用情况" tabindex="-1"><a class="header-anchor" href="#索引推荐使用情况" aria-hidden="true">#</a> 索引推荐使用情况</h3>`,32),m=a("li",null,"WHERE, GROUP BY, ORDER BY 子句中的字段",-1),x=a("li",null,"多个单列索引在多条件查询是只会有一个最优的索引生效，因此多条件查询中最好创建联合索引。",-1),f=a("li",null,"多张表 JOIN 的时候，对表连接字段创建索引。",-1),y=a("li",null,"当 SELECT 中有不在索引中的字段时，会先通过索引查询出满足条件的主键值，然后通过主键回表查询出所有的 SELECT 中的字段，影响查询效率。因此如果 SELECT 中的内容很少，为了避免回表，可以把 SELECT 中的字段都加到联合索引中，这也就是宽索引的概念。但是需要注意，如果索引字段过多，存储和维护索引的成本也会增加。",-1),k=i('<h3 id="不推荐使用或索引失效情况" tabindex="-1"><a class="header-anchor" href="#不推荐使用或索引失效情况" aria-hidden="true">#</a> 不推荐使用或索引失效情况</h3><ul><li>数据量很小的表</li><li>有大量重复数据的字段</li><li>频繁更新的字段</li><li>如果对索引字段使用了函数或者表达式计算，索引失效</li><li>字段类型不一致也会失效，因为等价使用函数</li><li>innodb OR 条件没有对所有条件创建索引，索引失效</li><li>大于小于条件 &lt; &gt;，索引是否生效取决于命中的数量比例，如果命中数量很多，索引生效，命中数量很小，索引失效</li><li>不等于条件 !=、&lt;&gt;，索引失效</li><li>LIKE 值以 % 开头，索引失效</li></ul>',2);function E(L,g){const r=n("Badge"),d=n("RouterLink");return s(),t("div",null,[u,c(" more "),_,a("p",null,[e("MySQL单张表最多只支持16个索引"),l(r,{text:"注意",type:"warning"})]),b,a("ul",null,[m,x,a("li",null,[e("联合索引的时候必须满足最左匹配原则，并且最好考虑到 sql 语句的执行顺序，比如 WHERE a = 1 GROUP BY b ORDER BY c, 那么联合索引应该设计为 (a,b,c)，因为mysql 查询语句的执行顺序 WHERE > GROUP BY > ORDER BY。"),l(d,{to:"/database/mysql/sql-order.html"},{default:o(()=>[e("参见")]),_:1})]),f,y]),k])}const S=h(p,[["render",E],["__file","idx.html.vue"]]);export{S as default};
