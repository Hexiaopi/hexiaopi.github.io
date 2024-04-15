import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as r,c,f as g,a as e,b as o,d as t,e as s}from"./app-DE5Wz_61.js";const p="/assets/goroutine-BcY0njjz.png",d={},u=e("p",null,"Go语言原生支持并发能力，而goroutine是Go语言原生支持并发的具体实现，本篇将为你揭开goroutine的面纱。",-1),h=e("figure",null,[e("img",{src:"http://cdn.cjhe.top/blog/goroutine.png",alt:"goroutine",tabindex:"0",loading:"lazy"}),e("figcaption",null,"goroutine")],-1),m=s('<h2 id="goroutine" tabindex="-1"><a class="header-anchor" href="#goroutine"><span>goroutine</span></a></h2><p>goroutine是由Go运行时管理的用户层轻量级线程，相比较操作系统线程，goroutine的资源占用和使用代价都要小的多，一个goroutine初始只需要2KB的内存，而线程需要MB级别的空间，这样在有限的内存空间里，可以创建的goroutine的数量相比较线程数量多的多。其次由于线程切换需要拷贝大量的上下文，这就导致线程切换耗时较高。</p><h2 id="gpm模型" tabindex="-1"><a class="header-anchor" href="#gpm模型"><span>GPM模型</span></a></h2><figure><img src="'+p+'" alt="goroutine" tabindex="0" loading="lazy"><figcaption>goroutine</figcaption></figure><p>GPM模型中：</p><ul><li>G代表<code>goroutine</code>，存储了<code>goroutine</code>的执行栈信息、<code>goroutine</code>状态及<code>goroutine</code>的任务函数等</li><li>P代表<code>processor</code>，逻辑处理器，所有的P都在程序启动时创建，P的数量决定了系统内最大可并行的G的数量，最多有<code>GOMAXPROCS</code>(可配置)个</li><li>M代表<code>thread</code>即用户态线程，M在绑定有效的P后，进入到一个调度循环：从各种队列、P的本地队列获取G，切换到G的执行栈上并执行G的函数，调用<code>goexit</code>做清理工作并回到M，如此反复。</li></ul><p>此外还有：</p><ul><li>全局队列(Global Queue)：存放等待运行的G</li><li>P的本地队列(Local Queue)：存放的也是等待运行的G，数量不超过256个。 <ul><li>当G新建goroutine G&#39;时，G&#39;优先加入到P的本地队列(局部性，G和G&#39;相关)</li><li>如果本地队列满了，则会把本地队列中的一半G移动到全局队列</li></ul></li></ul><h2 id="调度策略" tabindex="-1"><a class="header-anchor" href="#调度策略"><span>调度策略</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>其思想：复用线程M，避免频繁的创建、销毁</p></div><h3 id="work-stealing机制" tabindex="-1"><a class="header-anchor" href="#work-stealing机制"><span>work stealing机制</span></a></h3><p>当本地队列无可运行的G时，会尝试从其他P队列中偷取G，而不是销毁M</p><h3 id="hand-off机制" tabindex="-1"><a class="header-anchor" href="#hand-off机制"><span>hand off机制</span></a></h3><p>当M因为G进行系统调用阻塞时，M会释放绑定的P，此时的M和G都进入阻塞状态</p><ul><li>如果此时有空闲的M，P会与其绑定并执行剩余的G，</li><li>如果没有空闲的M，则会创建新的M</li></ul><p>当系统调用返回后，阻塞在该系统调用的G会尝试获取一个可用的P</p><ul><li>如果有可用的P，之前运行该G的M将绑定P继续运行G</li><li>如果没有可用的P，那么G于M之间的关联将解除，同时G会标记为runable，放入全局队列等待调度</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>网络I/O不会阻塞M，仅阻塞G</li><li>文件I/O会阻塞M，这就是为什么大量文件I/O操作会导致大量线程被创建的原因。</li></ul></div><h3 id="抢占调度" tabindex="-1"><a class="header-anchor" href="#抢占调度"><span>抢占调度</span></a></h3>',19),G=e("strong",null,"时间片",-1),f=e("strong",null,"时间片",-1),_=e("strong",null,"M是如何让G停下来并调度下一个可运行的G呢",-1),b=e("ul",null,[e("li",null,"Go1.2版本在每个函数或方法的入口增加一段额外的代码，让运行时有机会检查是否需要执行抢占调度；（对没有函数调用的G无效）"),e("li",null,[o("Go程序运行时会启动一个名为"),e("code",null,"sysmon"),o("的M（称为监控线程），该M无须绑定P即可运行（以g0这个G的形式），该M对于长时间运行（超过10ms）的G发出抢占式调度。")])],-1),M=e("h2",{id:"参考文献",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文献"},[e("span",null,"参考文献")])],-1),x={href:"https://mp.weixin.qq.com/s/rfjysi-LB-uFiGiZjh-XNw",target:"_blank",rel:"noopener noreferrer"},y={href:"https://book.douban.com/subject/35720729/",target:"_blank",rel:"noopener noreferrer"};function P(k,v){const a=i("Badge"),n=i("ExternalLinkIcon");return r(),c("div",null,[u,h,g(" more "),m,e("p",null,[o("与操作系统按"),G,o("调度线程不同，Go中没有"),f,o("的概念。如果某个G没有进行系统调用，没有进行I/O操作、没有阻塞在一个channel操作上，那么"),_,o("？"),t(a,{text:"注意",type:"warning"}),o(" 答案是：G被抢占调度的")]),b,M,e("ul",null,[e("li",null,[e("a",x,[o("文章-Golang调度器GMP原理与调度全分析"),t(n)])]),e("li",null,[e("a",y,[o("书籍-Go语言精进之路"),t(n)])])])])}const T=l(d,[["render",P],["__file","goroutine.html.vue"]]),B=JSON.parse('{"path":"/go-language/advance/goroutine.html","title":"goroutine和调度原理","lang":"zh-CN","frontmatter":{"title":"goroutine和调度原理","date":"2023-02-13T00:00:00.000Z","tag":["Go","进阶"],"category":["Go语言"],"description":"Go语言原生支持并发能力，而goroutine是Go语言原生支持并发的具体实现，本篇将为你揭开goroutine的面纱。 goroutinegoroutine","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/go-language/advance/goroutine.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"goroutine和调度原理"}],["meta",{"property":"og:description","content":"Go语言原生支持并发能力，而goroutine是Go语言原生支持并发的具体实现，本篇将为你揭开goroutine的面纱。 goroutinegoroutine"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://cdn.cjhe.top/blog/goroutine.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-03T14:52:58.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"进阶"}],["meta",{"property":"article:published_time","content":"2023-02-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-03T14:52:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"goroutine和调度原理\\",\\"image\\":[\\"http://cdn.cjhe.top/blog/goroutine.png\\"],\\"datePublished\\":\\"2023-02-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-03T14:52:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"goroutine","slug":"goroutine","link":"#goroutine","children":[]},{"level":2,"title":"GPM模型","slug":"gpm模型","link":"#gpm模型","children":[]},{"level":2,"title":"调度策略","slug":"调度策略","link":"#调度策略","children":[{"level":3,"title":"work stealing机制","slug":"work-stealing机制","link":"#work-stealing机制","children":[]},{"level":3,"title":"hand off机制","slug":"hand-off机制","link":"#hand-off机制","children":[]},{"level":3,"title":"抢占调度","slug":"抢占调度","link":"#抢占调度","children":[]}]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1690708801000,"updatedTime":1691074378000,"contributors":[{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":3.22,"words":966},"filePathRelative":"go-language/advance/goroutine.md","localizedDate":"2023年2月13日","excerpt":"<p>Go语言原生支持并发能力，而goroutine是Go语言原生支持并发的具体实现，本篇将为你揭开goroutine的面纱。</p>\\n<figure><img src=\\"http://cdn.cjhe.top/blog/goroutine.png\\" alt=\\"goroutine\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>goroutine</figcaption></figure>\\n","autoDesc":true}');export{T as comp,B as data};
