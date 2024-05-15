import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,c as i,a as r,e,f as l,d as s,b as t,o as c}from"./app-Dn-1EyMU.js";const n={},d=e("figure",null,[e("img",{src:"https://jvns.ca/images/sql-queries.jpeg",alt:"sql-queries",tabindex:"0",loading:"lazy"}),e("figcaption",null,"sql-queries")],-1),m=t("<p>这张图与 SQL 查询的语义有关，让你知道一个查询会返回什么，并回答了以下这些问题：</p><ul><li><p>可以在 GROUP BY 之后使用 WHERE 吗？（不行，WHERE 是在 GROUP BY 之前！）</p></li><li><p>可以对窗口函数返回的结果进行过滤吗？（不行，窗口函数是 SELECT 语句里，而 SELECT 是在 WHERE 和 GROUP BY 之后）</p></li><li><p>可以基于 GROUP BY 里的东西进行 ORDER BY 吗？（可以，ORDER BY 基本上是在最后执行的，所以可以基于任何东西进行 ORDER BY）</p></li><li><p>LIMIT 是在什么时候执行？（在最后！）</p></li></ul><p>但数据库引擎并不一定严格按照这个顺序执行 SQL 查询，因为为了更快地执行查询，它们会做出一些优化。</p><p>所以：</p><p>如果你想要知道一个查询语句是否合法，或者想要知道一个查询语句会返回什么，可以参考这张图；</p>",5),u=t('<h2 id="详细查询顺序" tabindex="-1"><a class="header-anchor" href="#详细查询顺序"><span>详细查询顺序</span></a></h2><p>1.FROM子句</p><blockquote><p>MySQL首先处理FROM子句，该步骤主要是确定需要查询的数据表，并建立数据表之间的连接关系。</p></blockquote><p>2.WHERE子句</p><blockquote><p>根据WHERE子句指定的查询条件，MySQL会进行筛选并过滤出符合条件的数据。</p></blockquote><p>3.GROUP BY子句</p><blockquote><p>如果查询需要对数据分组，则MySQL会按照GROUP BY子句中指定的分组条件对数据进行分组，然后对每个组进行汇总计算。</p></blockquote><p>4.HAVING子句</p><blockquote><p>HAVING子句用于过滤分组后的数据，和WHERE子句类似。只有满足HAVING子句指定的条件的组才会出现在结果集中。</p></blockquote><p>5.SELECT子句</p><blockquote><p>SELECT子句是MySQL查询语句最主要的部分，它用于指定需要查询的数据集合以及计算这个数据集合中的一些列值。</p></blockquote><p>6.DISTINCT</p><blockquote><p>如果使用了DISTINCT关键字，则MySQL会过滤掉查询结果中的重复记录。</p></blockquote><p>7.ORDER BY</p><blockquote><p>ORDER BY子句用于对查询结果进行排序。MySQL会按照指定的列或表达式的结果对查询结果进行排序，可以指定升序或降序。</p></blockquote><p>8.LIMIT</p><blockquote><p>LIMIT关键字用于限制查询结果的数量。MySQL只返回前N条符合条件的记录，其中N由LIMIT语句后面的数字指定。</p></blockquote><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2><p><a href="https://jvns.ca/blog/2019/10/03/sql-queries-don-t-start-with-select/" target="_blank" rel="noopener noreferrer">SQL查询不是以select开始</a></p>',19);function q(h,g){const o=p("Badge");return c(),i("div",null,[d,r(" more "),m,e("p",null,[l("需要注意的是，在实际实现中，MySQL会根据具体的查询条件和数据量进行一定的优化和调整。在涉及查询性能或者与索引有关的东西时，这张图就不适用了。"),s(o,{text:"注意",type:"warning"})]),u])}const E=a(n,[["render",q],["__file","sql-order.html.vue"]]),L=JSON.parse('{"path":"/database/mysql/sql-order.html","title":"SQL查询顺序","lang":"zh-CN","frontmatter":{"title":"SQL查询顺序","date":"2023-03-09T00:00:00.000Z","order":3,"tag":["MySQL"],"category":["数据库"],"description":"sql-queriessql-queries","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/database/mysql/sql-order.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"SQL查询顺序"}],["meta",{"property":"og:description","content":"sql-queriessql-queries"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://jvns.ca/images/sql-queries.jpeg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T10:01:59.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-03-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T10:01:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SQL查询顺序\\",\\"image\\":[\\"https://jvns.ca/images/sql-queries.jpeg\\"],\\"datePublished\\":\\"2023-03-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-15T10:01:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"详细查询顺序","slug":"详细查询顺序","link":"#详细查询顺序","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1690708801000,"updatedTime":1715767319000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":2},{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":2.3,"words":691},"filePathRelative":"database/mysql/sql-order.md","localizedDate":"2023年3月9日","excerpt":"<figure><img src=\\"https://jvns.ca/images/sql-queries.jpeg\\" alt=\\"sql-queries\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>sql-queries</figcaption></figure>\\n","autoDesc":true}');export{E as comp,L as data};