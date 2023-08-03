import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as l,c as r,f as s,a as e,b as i,d as o,e as c}from"./app-a68aad8a.js";const d="/assets/git-model@2x-5c67ec7f.png",h={},p=e("figure",null,[e("img",{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015122301.png",alt:"git-model",tabindex:"0",loading:"lazy"}),e("figcaption",null,"git-model")],-1),u=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,"一个好的代码分支应该是怎样的❓")],-1),f=e("h2",{id:"分支模型",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分支模型","aria-hidden":"true"},"#"),i(" 分支模型")],-1),x=e("br",null,null,-1),g={href:"https://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"},m=c('<figure><img src="'+d+'" alt="git-model" tabindex="0" loading="lazy"><figcaption>git-model</figcaption></figure><h2 id="master分支" tabindex="-1"><a class="header-anchor" href="#master分支" aria-hidden="true">#</a> master分支</h2><p>这个分支保持最近发布到生产环境的代码。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li>不能在这个分支直接修改</li><li>生产环境运行的代码和该分支保持一致</li><li>master分支每合并一个hotfix/release分支，都会打一个版本标签</li></ul></div><h2 id="develop分支" tabindex="-1"><a class="header-anchor" href="#develop分支" aria-hidden="true">#</a> develop分支</h2><p>这个分支是我们的主开发分支</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>feature/release/hotfix都需要合并到该分支</p></div><h2 id="feature分支" tabindex="-1"><a class="header-anchor" href="#feature分支" aria-hidden="true">#</a> feature分支</h2><p>这个分支是用来开发新的功能，一旦开发完成，合并到develop分支并进入下一个release</p><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li>分支命名建议：<code>feature/xxx-xxx</code></li><li>合并到develop分支需要删除该分支，如果有bug，在对应的release分支进行修复</li><li>feature分支合并到develop分支之前先pull一下develop分支，避免冲突</li></ul></div><h2 id="release分支" tabindex="-1"><a class="header-anchor" href="#release分支" aria-hidden="true">#</a> release分支</h2><p>当需要发布一个新的release的时候，基于develop分支创建一个release分支</p><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>分支名建议命名<code>release/xxx-xxx</code></li><li>测试人员基于release分支进行测试，如有bug，也在该分支修复，再测试。</li><li>完成release分支后需要合并到master和develop分支</li></ul></div><h2 id="hotfix分支" tabindex="-1"><a class="header-anchor" href="#hotfix分支" aria-hidden="true">#</a> hotfix分支</h2><p>当在现网发现bug时，需要创建一个hotfix分支进行修复，完成后合并到master和develop，hotfix的改动会进入下一个release</p><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li>建议命名：<code>hotfix/xxx-xxx</code></li><li>只能基于master分支创建hotfix分支</li></ul></div>',16);function _(v,b){const a=n("ExternalLinkIcon");return l(),r("div",null,[p,u,s(" more "),f,e("p",null,[i("我们经常使用Git用于管理版本，但如果没有清晰的流程和规范，会导致难以协调和维护。"),x,i(" Vincent Driessen 为了解决这个问题，提出"),e("a",g,[i("A Successful Git Branching Model"),o(a)])]),m])}const k=t(h,[["render",_],["__file","branch.html.vue"]]);export{k as default};
