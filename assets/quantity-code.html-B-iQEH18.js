import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as l,f as a,a as t,e as n}from"./app-DE5Wz_61.js";const o={},r=t("div",{class:"hint-container tip"},[t("p",{class:"hint-container-title"},"提示"),t("p",null,"什么样的代码才是高质量的代码❓")],-1),p=n('<h2 id="什么是高质量代码" tabindex="-1"><a class="header-anchor" href="#什么是高质量代码"><span>什么是高质量代码</span></a></h2><p>代码质量的评价有很强的主观性，描述代码质量的词汇也有很多，比如可读性、可维护性、灵活、优雅、简洁等，这些词汇是从不同的维度去评价代码质量的。它们之间有互相作用，并不是独立的，比如，代码的可读性好、可扩展性好就意味着代码的可维护性好。代码质量高低是一个综合各种因素得到的结论。我们并不能通过单一的维度去评价一段代码的好坏。</p><h3 id="可维护性-maintainability" tabindex="-1"><a class="header-anchor" href="#可维护性-maintainability"><span>可维护性（maintainability）</span></a></h3><blockquote><p>维护：无外乎就是修改bug、修改老的代码、添加新的代码之类的工作。</p></blockquote><p><strong>维护代码的时间远远大于编写代码的时间</strong> 其中：</p><ul><li>代码易维护：在不破坏原有代码设计、不引入新的bug的情况下，能够快速地修改或者添加代码。</li><li>代码不易维护：修改或者添加代码需要冒着极大的引入新bug的风险，并且需要花费很长的时间才能完成。</li></ul><h3 id="可读性-readability" tabindex="-1"><a class="header-anchor" href="#可读性-readability"><span>可读性（readability）</span></a></h3><blockquote><p>可读：代码易读易理解</p></blockquote><p><strong>代码被阅读的次数远远超过被编写的次数</strong> 我们可以从以下方面来评价：</p><ol><li>代码是否符合编码规范；</li><li>命名是否达意；</li><li>注释是否详尽；</li><li>函数是否长短合适；</li><li>模块划分是否清晰；</li><li>是否符合高内聚低耦合；</li></ol><h3 id="可扩展性-extensibility" tabindex="-1"><a class="header-anchor" href="#可扩展性-extensibility"><span>可扩展性（extensibility）</span></a></h3><blockquote><p>可扩展：代码应对未来需求变化的能力</p></blockquote><p><strong>开闭原则：对修改关闭，对扩展开放</strong> 评判标准：</p><ul><li>我们在不修改或少量修改原有代码的情况，通过扩展的方式添加新的功能代码；</li><li>代码预留了一些功能扩展点，不需要因为添加一个功能而大动干戈，改动大量的原始代码；</li></ul><h3 id="灵活性-flexibility" tabindex="-1"><a class="header-anchor" href="#灵活性-flexibility"><span>灵活性（flexibility）</span></a></h3><blockquote><p>灵活：代码易扩展、易复用或者易用</p></blockquote><p>举例如下：</p><ul><li><p>易扩展：当我们添加一个新的功能代码的时候，原有的代码已经预留好了扩展点，我们不需要修改原有的代码，只要在扩展点上添加新的代码即可。这个时候，我们除了可以说代码易扩展，还可以说代码写得好灵活。</p></li><li><p>易复用：当我们要实现一个功能的时候，发现原有代码中，已经抽象出了很多底层可以复用的模块、类等代码，我们可以拿来直接使用。这个时候，我们除了可以说代码易复用之外，还可以说代码写得好灵活。</p></li><li><p>易用：当我们使用某组接口的时候，如果这组接口可以应对各种使用场景，满足各种不同的需求，我们除了可以说接口易用之外，还可以说这个接口设计得好灵活或者代码写得好灵活。</p></li></ul><h3 id="简洁性-simplicity" tabindex="-1"><a class="header-anchor" href="#简洁性-simplicity"><span>简洁性（simplicity）</span></a></h3><blockquote><p>简洁：代码简单、逻辑清晰</p></blockquote><p><strong>KISS原则：“Keep it Simple,Stupid”</strong> 怎么评判呢？每个人的标准都不一样，我觉得能够快速理解业务逻辑就是简单的。&quot;思从深而行从简，真正的高手能云淡风轻地用最简单的方法解决最复杂的问题。&quot;</p><h3 id="可复用性-reusability" tabindex="-1"><a class="header-anchor" href="#可复用性-reusability"><span>可复用性（reusability）</span></a></h3><blockquote><p>可复用：尽量减少重复代码的编写，复用已有的代码。</p></blockquote><p><strong>DRY原则：“Don&#39;t Repeat Yourself”</strong> 使用技巧：</p><ul><li>面向对象特性：继承和多态就是为了提高可复用性；</li><li>解耦、高内聚、模块化等思想都能提高代码的可复用性；</li><li>单一职责原则与可复用性相关；</li></ul><h3 id="可测试性-testability" tabindex="-1"><a class="header-anchor" href="#可测试性-testability"><span>可测试性（testability）</span></a></h3><blockquote><p>可测试：能否方便地测试代码逻辑</p></blockquote><p>评判标准：</p><ul><li>即便有存储和第三方服务也能测试；</li><li>不依赖各个环境；</li></ul>',29);function s(c,d){return e(),l("div",null,[r,a(" more "),p])}const b=i(o,[["render",s],["__file","quantity-code.html.vue"]]),y=JSON.parse('{"path":"/design-pattern/quantity-code.html","title":"高质量代码","lang":"zh-CN","frontmatter":{"title":"高质量代码","date":"2022-11-01T00:00:00.000Z","tag":["代码质量","设计模式"],"category":["设计模式"],"description":"提示 什么样的代码才是高质量的代码❓","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/design-pattern/quantity-code.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"高质量代码"}],["meta",{"property":"og:description","content":"提示 什么样的代码才是高质量的代码❓"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-30T09:20:01.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"代码质量"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2022-11-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-30T09:20:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"高质量代码\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-30T09:20:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"什么是高质量代码","slug":"什么是高质量代码","link":"#什么是高质量代码","children":[{"level":3,"title":"可维护性（maintainability）","slug":"可维护性-maintainability","link":"#可维护性-maintainability","children":[]},{"level":3,"title":"可读性（readability）","slug":"可读性-readability","link":"#可读性-readability","children":[]},{"level":3,"title":"可扩展性（extensibility）","slug":"可扩展性-extensibility","link":"#可扩展性-extensibility","children":[]},{"level":3,"title":"灵活性（flexibility）","slug":"灵活性-flexibility","link":"#灵活性-flexibility","children":[]},{"level":3,"title":"简洁性（simplicity）","slug":"简洁性-simplicity","link":"#简洁性-simplicity","children":[]},{"level":3,"title":"可复用性（reusability）","slug":"可复用性-reusability","link":"#可复用性-reusability","children":[]},{"level":3,"title":"可测试性（testability）","slug":"可测试性-testability","link":"#可测试性-testability","children":[]}]}],"git":{"createdTime":1690708801000,"updatedTime":1690708801000,"contributors":[{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":3.42,"words":1025},"filePathRelative":"design-pattern/quantity-code.md","localizedDate":"2022年11月1日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>什么样的代码才是高质量的代码❓</p>\\n</div>\\n","autoDesc":true}');export{b as comp,y as data};
