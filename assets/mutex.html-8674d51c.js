const e=JSON.parse('{"key":"v-19226052","path":"/go-language/advance/mutex.html","title":"深入了解Go锁原理","lang":"zh-CN","frontmatter":{"title":"深入了解Go锁原理","date":"2023-03-11T00:00:00.000Z","tag":["Go","进阶"],"category":["Go语言"],"description":"Go语言sync包提供了两种锁： 互斥锁 Mutex: 加锁时，其他加锁协程均阻塞 读写锁 RWMutex: 加读锁时，加写锁协程阻塞，加读锁协程不阻塞 加写锁时，其他加读写协程均阻塞","head":[["meta",{"property":"og:url","content":"https://Hexiaopi.github.io/go-language/advance/mutex.html"}],["meta",{"property":"og:site_name","content":"Hexiaopi"}],["meta",{"property":"og:title","content":"深入了解Go锁原理"}],["meta",{"property":"og:description","content":"Go语言sync包提供了两种锁： 互斥锁 Mutex: 加锁时，其他加锁协程均阻塞 读写锁 RWMutex: 加读锁时，加写锁协程阻塞，加读锁协程不阻塞 加写锁时，其他加读写协程均阻塞"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://Hexiaopi.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-03T14:52:58.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"深入了解Go锁原理"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"进阶"}],["meta",{"property":"article:published_time","content":"2023-03-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-03T14:52:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入了解Go锁原理\\",\\"image\\":[\\"https://Hexiaopi.github.io/\\"],\\"datePublished\\":\\"2023-03-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-03T14:52:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"互斥锁 Mutex","slug":"互斥锁-mutex","link":"#互斥锁-mutex","children":[{"level":3,"title":"Mutex数据结构","slug":"mutex数据结构","link":"#mutex数据结构","children":[]},{"level":3,"title":"Mutex的方法","slug":"mutex的方法","link":"#mutex的方法","children":[]},{"level":3,"title":"自旋过程","slug":"自旋过程","link":"#自旋过程","children":[]},{"level":3,"title":"Mutex注意事项","slug":"mutex注意事项","link":"#mutex注意事项","children":[]}]},{"level":2,"title":"读写锁 RWMutex","slug":"读写锁-rwmutex","link":"#读写锁-rwmutex","children":[{"level":3,"title":"RWMutex数据结构","slug":"rwmutex数据结构","link":"#rwmutex数据结构","children":[]},{"level":3,"title":"RWMutex的方法","slug":"rwmutex的方法","link":"#rwmutex的方法","children":[]},{"level":3,"title":"RWMutex的细节分析","slug":"rwmutex的细节分析","link":"#rwmutex的细节分析","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1691074378000,"updatedTime":1691074378000,"contributors":[{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":6.04,"words":1812},"filePathRelative":"go-language/advance/mutex.md","localizedDate":"2023年3月11日","excerpt":"<p>Go语言sync包提供了两种锁：</p>\\n<ul>\\n<li>互斥锁 Mutex:\\n<ul>\\n<li>加锁时，其他加锁协程均阻塞</li>\\n</ul>\\n</li>\\n<li>读写锁 RWMutex:\\n<ul>\\n<li>加读锁时，加写锁协程阻塞，加读锁协程不阻塞</li>\\n<li>加写锁时，其他加读写协程均阻塞</li>\\n</ul>\\n</li>\\n</ul>\\n","autoDesc":true}');export{e as data};
