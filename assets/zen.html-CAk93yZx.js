import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as i,c as s,a as l,b as e,d as a,e as o,f as h}from"./app-yfOeyOzf.js";const c={},p=e("blockquote",null,[e("p",null,"Python的核心开发成员之一Tim Peter写下的《The Zen of Python》，成为Python编程和设计的指导原则。Go语言步道师Dave Cheney 2020年发表了名为《The Zen of Go》")],-1),d=h('<h2 id="译文" tabindex="-1"><a class="header-anchor" href="#译文"><span>译文</span></a></h2><h3 id="each-package-fulfils-a-single-purpose-每一个package实现单一目标" tabindex="-1"><a class="header-anchor" href="#each-package-fulfils-a-single-purpose-每一个package实现单一目标"><span>Each package fulfils a single purpose 每一个package实现单一目标</span></a></h3><p>A well designed Go package provides a single idea, a set of related behaviours. A good Go package starts by choosing a good name. Think of your package’s name as an elevator pitch to describe what it provides, using just one word. 精心设计的Go软件包只提供单一功能和一系列相关的行为。一个好的Go软件包从选择一个好的名字开始。把你的包的名字想象成一个电梯广告，仅用一个词来描述它所提供的功能。</p><h3 id="handle-errors-explicitly-显式处理错误" tabindex="-1"><a class="header-anchor" href="#handle-errors-explicitly-显式处理错误"><span>Handle errors explicitly 显式处理错误</span></a></h3><p>Robust programs are composed from pieces that handle the failure cases before they pat themselves on the back. The verbosity of if err != nil { return err } is outweighed by the value of deliberately handling each failure condition at the point at which they occur. Panic and recover are not exceptions, they aren’t intended to be used that way. 健壮的程序是由处理失败case的各个片段组成的。 冗长的<code>if err != nil { return err }</code> 比出了故障再一个个去处理更有价值。Panic和recover也一样。</p><h3 id="return-early-rather-than-nesting-deeply-尽早return-不要深陷" tabindex="-1"><a class="header-anchor" href="#return-early-rather-than-nesting-deeply-尽早return-不要深陷"><span>Return early rather than nesting deeply 尽早return，不要深陷</span></a></h3><p>Every time you indent you add another precondition to the programmer’s stack consuming one of the 7 ±2 slots in their short term memory. Avoid control flow that requires deep indentation. Rather than nesting deeply, keep the success path to the left using guard clauses. 每缩进一次，就会在程序员的堆栈中增加一个前提条件，占用其短时记忆中 7 ±2 个插槽中的一个。避免需要深度缩进的控制流。与其深度嵌套，不如使用保护子句将成功路径保持在左侧。</p><h3 id="leave-concurrency-to-the-caller-并发权留给调用者" tabindex="-1"><a class="header-anchor" href="#leave-concurrency-to-the-caller-并发权留给调用者"><span>Leave concurrency to the caller 并发权留给调用者</span></a></h3><p>Let the caller choose if they want to run your library or function asynchronously, don’t force it on them. If your library uses concurrency it should do so transparently. 让调用者自己选择是否要异步运行你的库或函数，不要强迫他们。如果您的程序库使用并发功能，则应透明地使用。</p><h3 id="before-you-launch-a-goroutine-know-when-it-will-stop-在启动goroutine之前-要知道它什么时候会停止" tabindex="-1"><a class="header-anchor" href="#before-you-launch-a-goroutine-know-when-it-will-stop-在启动goroutine之前-要知道它什么时候会停止"><span>Before you launch a goroutine, know when it will stop 在启动goroutine之前，要知道它什么时候会停止</span></a></h3><p>Goroutines own resources; locks, variables, memory, etc. The sure fire way to free those resources is to stop the owning goroutine. goroutine 拥有锁、变量、内存等资源。释放这些资源的可靠方法是停止拥有资源的 goroutine。</p><h3 id="avoid-package-level-state-避免包级状态" tabindex="-1"><a class="header-anchor" href="#avoid-package-level-state-避免包级状态"><span>Avoid package level state 避免包级状态</span></a></h3><p>Seek to be explicit, reduce coupling, and spooky action at a distance by providing the dependencies a type needs as fields on that type rather than using package variables. 通过将类型所需的依赖关系作为该类型的字段而不是使用包变量来提供，力求显式化，减少耦合，并实现超距作用。</p><h3 id="simplicity-matters-简单很重要" tabindex="-1"><a class="header-anchor" href="#simplicity-matters-简单很重要"><span>Simplicity matters 简单很重要</span></a></h3><p>Simplicity is not a synonym for unsophisticated. Simple doesn’t mean crude, it means readable and maintainable. When it is possible to choose, defer to the simpler solution. 简单不是容易（不复杂）的同义词。简单并不意味着粗糙，它意味着可读性和可维护性。如果可以选择，请遵循较简单的解决方案。</p><h3 id="write-tests-to-lock-in-the-behaviour-of-your-package-s-api-编写测试以确定包api的行为" tabindex="-1"><a class="header-anchor" href="#write-tests-to-lock-in-the-behaviour-of-your-package-s-api-编写测试以确定包api的行为"><span>Write tests to lock in the behaviour of your package’s API 编写测试以确定包API的行为</span></a></h3><p>Test first or test later, if you shoot for 100% test coverage or are happy with less, regardless your package’s API is your contract with its users. Tests are the guarantees that those contracts are written in. Make sure you test for the behaviour that users can observe and rely on. 先测试还是后测试，是追求 100% 的测试覆盖率还是满足于较低的测试覆盖率，无论如何，软件包的应用程序接口都是您与用户之间的契约。测试是这些合约的保证。请确保您测试的是用户可以观察和依赖的行为。</p><h3 id="if-you-think-it-s-slow-first-prove-it-with-a-benchmark-如果你觉得慢-先用基准来证明" tabindex="-1"><a class="header-anchor" href="#if-you-think-it-s-slow-first-prove-it-with-a-benchmark-如果你觉得慢-先用基准来证明"><span>If you think it’s slow, first prove it with a benchmark 如果你觉得慢，先用基准来证明</span></a></h3><p>So many crimes against maintainability are committed in the name of performance. Optimisation tears down abstractions, exposes internals, and couples tightly. If you’re choosing to shoulder that cost, ensure it is done for good reason. 以性能为名，对可维护性犯下了许多罪行。优化会破坏抽象概念，暴露内部结构，并造成紧密耦合。如果你选择承担这种代价，请确保这样做是有充分理由的。</p><h3 id="moderation-is-a-virtue-节制是一种美德" tabindex="-1"><a class="header-anchor" href="#moderation-is-a-virtue-节制是一种美德"><span>Moderation is a virtue 节制是一种美德</span></a></h3><p>Use goroutines, channels, locks, interfaces, embedding, in moderation. 适度使用goroutines、channels、locks、interfaces、embedded。</p><h3 id="maintainability-counts-可维护性很重要" tabindex="-1"><a class="header-anchor" href="#maintainability-counts-可维护性很重要"><span>Maintainability counts 可维护性很重要</span></a></h3><p>Clarity, readability, simplicity, are all aspects of maintainability. Can the thing you worked hard to build be maintained after you’re gone? What can you do today to make it easier for those that come after you? 清晰度、可读性、简洁性都是可维护性的体现。你辛辛苦苦创建的东西在你离开后还能被维护吗？你今天能做些什么来让你的后人更容易地维护它？</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>',24),u={href:"https://the-zen-of-go.netlify.app",target:"_blank",rel:"noopener noreferrer"},y={href:"https://dave.cheney.net/2020/02/23/the-zen-of-go",target:"_blank",rel:"noopener noreferrer"};function g(m,f){const t=r("ExternalLinkIcon");return i(),s("div",null,[p,l(" more "),d,e("p",null,[e("a",u,[a("简洁版"),o(t)]),e("a",y,[a("完整版"),o(t)])])])}const b=n(c,[["render",g],["__file","zen.html.vue"]]),w=JSON.parse('{"path":"/language/go/reprint/zen.html","title":"Go之禅","lang":"zh-CN","frontmatter":{"title":"Go之禅","author":"Dave Cheney","date":"2023-08-15T00:00:00.000Z","tag":["Go"],"category":["编程语言"],"description":"Python的核心开发成员之一Tim Peter写下的《The Zen of Python》，成为Python编程和设计的指导原则。Go语言步道师Dave Cheney 2020年发表了名为《The Zen of Go》","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/language/go/reprint/zen.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"Go之禅"}],["meta",{"property":"og:description","content":"Python的核心开发成员之一Tim Peter写下的《The Zen of Python》，成为Python编程和设计的指导原则。Go语言步道师Dave Cheney 2020年发表了名为《The Zen of Go》"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-05T15:52:14.000Z"}],["meta",{"property":"article:author","content":"Dave Cheney"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:published_time","content":"2023-08-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-05T15:52:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Go之禅\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-05T15:52:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dave Cheney\\"}]}"]]},"headers":[{"level":2,"title":"译文","slug":"译文","link":"#译文","children":[{"level":3,"title":"Each package fulfils a single purpose 每一个package实现单一目标","slug":"each-package-fulfils-a-single-purpose-每一个package实现单一目标","link":"#each-package-fulfils-a-single-purpose-每一个package实现单一目标","children":[]},{"level":3,"title":"Handle errors explicitly 显式处理错误","slug":"handle-errors-explicitly-显式处理错误","link":"#handle-errors-explicitly-显式处理错误","children":[]},{"level":3,"title":"Return early rather than nesting deeply 尽早return，不要深陷","slug":"return-early-rather-than-nesting-deeply-尽早return-不要深陷","link":"#return-early-rather-than-nesting-deeply-尽早return-不要深陷","children":[]},{"level":3,"title":"Leave concurrency to the caller 并发权留给调用者","slug":"leave-concurrency-to-the-caller-并发权留给调用者","link":"#leave-concurrency-to-the-caller-并发权留给调用者","children":[]},{"level":3,"title":"Before you launch a goroutine, know when it will stop 在启动goroutine之前，要知道它什么时候会停止","slug":"before-you-launch-a-goroutine-know-when-it-will-stop-在启动goroutine之前-要知道它什么时候会停止","link":"#before-you-launch-a-goroutine-know-when-it-will-stop-在启动goroutine之前-要知道它什么时候会停止","children":[]},{"level":3,"title":"Avoid package level state 避免包级状态","slug":"avoid-package-level-state-避免包级状态","link":"#avoid-package-level-state-避免包级状态","children":[]},{"level":3,"title":"Simplicity matters 简单很重要","slug":"simplicity-matters-简单很重要","link":"#simplicity-matters-简单很重要","children":[]},{"level":3,"title":"Write tests to lock in the behaviour of your package’s API 编写测试以确定包API的行为","slug":"write-tests-to-lock-in-the-behaviour-of-your-package-s-api-编写测试以确定包api的行为","link":"#write-tests-to-lock-in-the-behaviour-of-your-package-s-api-编写测试以确定包api的行为","children":[]},{"level":3,"title":"If you think it’s slow, first prove it with a benchmark 如果你觉得慢，先用基准来证明","slug":"if-you-think-it-s-slow-first-prove-it-with-a-benchmark-如果你觉得慢-先用基准来证明","link":"#if-you-think-it-s-slow-first-prove-it-with-a-benchmark-如果你觉得慢-先用基准来证明","children":[]},{"level":3,"title":"Moderation is a virtue 节制是一种美德","slug":"moderation-is-a-virtue-节制是一种美德","link":"#moderation-is-a-virtue-节制是一种美德","children":[]},{"level":3,"title":"Maintainability counts 可维护性很重要","slug":"maintainability-counts-可维护性很重要","link":"#maintainability-counts-可维护性很重要","children":[]}]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1692087026000,"updatedTime":1714924334000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":2}]},"readingTime":{"minutes":4.13,"words":1240},"filePathRelative":"language/go/reprint/zen.md","localizedDate":"2023年8月15日","excerpt":"<blockquote>\\n<p>Python的核心开发成员之一Tim Peter写下的《The Zen of Python》，成为Python编程和设计的指导原则。Go语言步道师Dave Cheney 2020年发表了名为《The Zen of Go》</p>\\n</blockquote>\\n","autoDesc":true}');export{b as comp,w as data};
