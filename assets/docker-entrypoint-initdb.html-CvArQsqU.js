import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a,e,b as t,o as i}from"./app-QGqZWhfp.js";const l={},p=e("p",null,"公司目前对外部署的应用基本上都是使用Docker和Docker-Compose，当然也包括数据库，例如：MySQL、Postgresql。如何减少频繁的拷贝SQL脚本到数据库容器中这种繁琐的操作，提高部署效率呢？",-1),o=t(`<p>Docker其实提供<code>docker-entrypoint-initdb.d</code>这一个特殊的目录，专门用于MySQL或Postgresql等数据库用于初始化数据。</p><h2 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式"><span>使用方式</span></a></h2><p>我们以MySQL为例，提供<code>docker-entrypoint-initdb.d</code>的使用方式。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">8.0</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 3306<span class="token punctuation">:</span><span class="token number">3306</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./config/mysql/initdb<span class="token punctuation">:</span>/docker<span class="token punctuation">-</span>entrypoint<span class="token punctuation">-</span>initdb.d
      <span class="token punctuation">-</span> ./config/mysql/my.cnf<span class="token punctuation">:</span>/etc/mysql/conf.d/my.cnf
      <span class="token punctuation">-</span> ./data/mysql<span class="token punctuation">:</span>/var/lib/mysql
    <span class="token key atrule">env_file</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mysql.env
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;100m&quot;</span>
        <span class="token key atrule">max-file</span><span class="token punctuation">:</span> <span class="token string">&quot;2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的使用示例中，我们将<code>./config/mysql/initdb</code>目录挂载进容器内：<code>/docker-entrypoint-initdb.d</code>目录，我们只需要在<code>./config/mysql/initdb/</code>目录下准备数据脚本，支持<code>.sh</code>和<code>.sql</code>两种数据脚本，也支持一些压缩的sql文件。</p><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h2><p>那么为什么提供一个目录就可以初始化数据了呢？</p><p>这是由于Docker官方镜像启动时会执行entrypoint.sh脚本。我们可以访问一个MySQL容器，查看</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /usr/local/bin/docker-entrypoint.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-eo</span> pipefail
<span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> nullglob

<span class="token comment"># logging functions</span>
<span class="token function-name function">mysql_log</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">local</span> <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$1</span>&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">shift</span>
        <span class="token comment"># accept argument string or stdin</span>
        <span class="token builtin class-name">local</span> <span class="token assign-left variable">text</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$*</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$#</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token assign-left variable">text</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span><span class="token variable">)</span></span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
        <span class="token builtin class-name">local</span> dt<span class="token punctuation">;</span> <span class="token assign-left variable">dt</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> --rfc-3339<span class="token operator">=</span>seconds<span class="token variable">)</span></span>&quot;</span>
        <span class="token builtin class-name">printf</span> <span class="token string">&#39;%s [%s] [Entrypoint]: %s\\n&#39;</span> <span class="token string">&quot;<span class="token variable">$dt</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$type</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$text</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">mysql_note</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mysql_log Note <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">mysql_warn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mysql_log Warn <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>
<span class="token punctuation">}</span>
<span class="token function-name function">mysql_error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mysql_log ERROR <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token comment"># usage: file_env VAR [DEFAULT]</span>
<span class="token comment">#    ie: file_env &#39;XYZ_DB_PASSWORD&#39; &#39;example&#39;</span>
<span class="token comment"># (will allow for &quot;$XYZ_DB_PASSWORD_FILE&quot; to fill in the value of</span>
<span class="token comment">#  &quot;$XYZ_DB_PASSWORD&quot; from a file, especially for Docker&#39;s secrets feature)</span>
<span class="token function-name function">file_env</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">local</span> <span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
        <span class="token builtin class-name">local</span> <span class="token assign-left variable">fileVar</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${var}</span>_FILE&quot;</span>
        <span class="token builtin class-name">local</span> <span class="token assign-left variable">def</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${2<span class="token operator">:-</span>}</span>&quot;</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${<span class="token operator">!</span>var<span class="token operator">:-</span>}</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${<span class="token operator">!</span>fileVar<span class="token operator">:-</span>}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                mysql_error <span class="token string">&quot;Both <span class="token variable">$var</span> and <span class="token variable">$fileVar</span> are set (but are exclusive)&quot;</span>
        <span class="token keyword">fi</span>
        <span class="token builtin class-name">local</span> <span class="token assign-left variable">val</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$def</span>&quot;</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${<span class="token operator">!</span>var<span class="token operator">:-</span>}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                <span class="token assign-left variable">val</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${<span class="token operator">!</span>var}</span>&quot;</span>
        <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${<span class="token operator">!</span>fileVar<span class="token operator">:-</span>}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                <span class="token assign-left variable">val</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token operator">&lt;</span> <span class="token string">&quot;<span class="token variable">\${<span class="token operator">!</span>fileVar}</span>&quot;</span><span class="token variable">)</span></span>&quot;</span>
        <span class="token keyword">fi</span>
        <span class="token builtin class-name">export</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$val</span>&quot;</span>
        <span class="token builtin class-name">unset</span> <span class="token string">&quot;<span class="token variable">$fileVar</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># check to see if this file is being run or sourced from another script</span>
<span class="token function-name function">_is_sourced</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment"># https://unix.stackexchange.com/a/215279</span>
        <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${<span class="token operator">#</span>FUNCNAME<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>&quot;</span> <span class="token parameter variable">-ge</span> <span class="token number">2</span> <span class="token punctuation">]</span> <span class="token punctuation">\\</span>
                <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${FUNCNAME<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;_is_sourced&#39;</span> <span class="token punctuation">]</span> <span class="token punctuation">\\</span>
                <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${FUNCNAME<span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;source&#39;</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># usage: docker_process_init_files [file [file [...]]]</span>
<span class="token comment">#    ie: docker_process_init_files /always-initdb.d/*</span>
<span class="token comment"># process initializer files, based on file extensions</span>
<span class="token function-name function">docker_process_init_files</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment"># mysql here for backwards compatibility &quot;\${mysql[@]}&quot;</span>
        <span class="token assign-left variable">mysql</span><span class="token operator">=</span><span class="token punctuation">(</span> docker_process_sql <span class="token punctuation">)</span>

        <span class="token builtin class-name">echo</span>
        <span class="token builtin class-name">local</span> f
        <span class="token keyword">for</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span>
                <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span> <span class="token keyword">in</span>
                        *.sh<span class="token punctuation">)</span>
                                <span class="token comment"># https://github.com/docker-library/postgres/issues/450#issuecomment-393167936</span>
                                <span class="token comment"># https://github.com/docker-library/postgres/pull/452</span>
                                <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                                        mysql_note <span class="token string">&quot;<span class="token variable">$0</span>: running <span class="token variable">$f</span>&quot;</span>
                                        <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span>
                                <span class="token keyword">else</span>
                                        mysql_note <span class="token string">&quot;<span class="token variable">$0</span>: sourcing <span class="token variable">$f</span>&quot;</span>
                                        <span class="token builtin class-name">.</span> <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span>
                                <span class="token keyword">fi</span>
                                <span class="token punctuation">;</span><span class="token punctuation">;</span>
                        *.sql<span class="token punctuation">)</span>     mysql_note <span class="token string">&quot;<span class="token variable">$0</span>: running <span class="token variable">$f</span>&quot;</span><span class="token punctuation">;</span> docker_process_sql <span class="token operator">&lt;</span> <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
                        *.sql.bz2<span class="token punctuation">)</span> mysql_note <span class="token string">&quot;<span class="token variable">$0</span>: running <span class="token variable">$f</span>&quot;</span><span class="token punctuation">;</span> bunzip2 <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span> <span class="token operator">|</span> docker_process_sql<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
                        *.sql.gz<span class="token punctuation">)</span>  mysql_note <span class="token string">&quot;<span class="token variable">$0</span>: running <span class="token variable">$f</span>&quot;</span><span class="token punctuation">;</span> gunzip <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span> <span class="token operator">|</span> docker_process_sql<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
                        *.sql.xz<span class="token punctuation">)</span>  mysql_note <span class="token string">&quot;<span class="token variable">$0</span>: running <span class="token variable">$f</span>&quot;</span><span class="token punctuation">;</span> xzcat <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span> <span class="token operator">|</span> docker_process_sql<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
                        *.sql.zst<span class="token punctuation">)</span> mysql_note <span class="token string">&quot;<span class="token variable">$0</span>: running <span class="token variable">$f</span>&quot;</span><span class="token punctuation">;</span> zstd <span class="token parameter variable">-dc</span> <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span> <span class="token operator">|</span> docker_process_sql<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
                        *<span class="token punctuation">)</span>         mysql_warn <span class="token string">&quot;<span class="token variable">$0</span>: ignoring <span class="token variable">$f</span>&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
                <span class="token keyword">esac</span>
                <span class="token builtin class-name">echo</span>
        <span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token comment"># arguments necessary to run &quot;mysqld --verbose --help&quot; successfully (used for testing configuration validity and for extracting default/configured values)</span>
<span class="token assign-left variable">_verboseHelpArgs</span><span class="token operator">=</span><span class="token punctuation">(</span>
        <span class="token parameter variable">--verbose</span> <span class="token parameter variable">--help</span>
        --log-bin-index<span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>mktemp <span class="token parameter variable">-u</span><span class="token variable">)</span></span>&quot;</span> <span class="token comment"># https://github.com/docker-library/mysql/issues/136</span>
<span class="token punctuation">)</span>

<span class="token function-name function">mysql_check_config</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">local</span> <span class="token assign-left variable">toRun</span><span class="token operator">=</span><span class="token punctuation">(</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span> <span class="token string">&quot;<span class="token variable">\${_verboseHelpArgs<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>&quot;</span> <span class="token punctuation">)</span> errors
        <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token assign-left variable">errors</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>&quot;$<span class="token punctuation">{</span>toRun<span class="token punctuation">[</span>@<span class="token punctuation">]</span><span class="token punctuation">}</span>&quot; <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&gt;</span>/dev/null<span class="token variable">)</span></span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                mysql_error <span class="token string">$&#39;mysqld failed while attempting to check config<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>command was: &#39;</span>&quot;<span class="token variable">\${toRun<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span><span class="token string">&quot;$&#39;<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>&#39;&quot;</span><span class="token variable">$errors</span><span class="token string">&quot;
        fi
}

# Fetch value from server config
# We use mysqld --verbose --help instead of my_print_defaults because the
# latter only show values present in config files, and not server defaults
mysql_get_config() {
        local conf=&quot;</span><span class="token variable">$1</span><span class="token string">&quot;; shift
        &quot;</span><span class="token variable">$@</span><span class="token string">&quot; &quot;</span><span class="token variable">\${_verboseHelpArgs<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span><span class="token string">&quot; 2&gt;/dev/null \\
                | awk -v conf=&quot;</span><span class="token variable">$conf</span><span class="token string">&quot; &#39;<span class="token variable">$1</span> == conf &amp;&amp; /^[^ <span class="token entity" title="\\t">\\t</span>]/ { sub(/^[^ <span class="token entity" title="\\t">\\t</span>]+[ <span class="token entity" title="\\t">\\t</span>]+/, &quot;</span>&quot;<span class="token punctuation">)</span><span class="token punctuation">;</span> print<span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token punctuation">}</span><span class="token string">&#39;
        # match &quot;datadir      /some/path with/spaces in/it here&quot; but not &quot;--xyz=abc\\n     datadir (xyz)&quot;
}

# Ensure that the package default socket can also be used
# since rpm packages are compiled with a different socket location
# and &quot;mysqlsh --mysql&quot; doesn&#39;</span>t <span class="token builtin class-name">read</span> the <span class="token punctuation">[</span>client<span class="token punctuation">]</span> config
<span class="token comment"># related to https://github.com/docker-library/mysql/issues/829</span>
<span class="token function-name function">mysql_socket_fix</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">local</span> defaultSocket
        <span class="token assign-left variable">defaultSocket</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>mysql_get_config <span class="token string">&#39;socket&#39;</span> mysqld --no-defaults<span class="token variable">)</span></span>&quot;</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$defaultSocket</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;<span class="token variable">$SOCKET</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                <span class="token function">ln</span> <span class="token parameter variable">-sfTv</span> <span class="token string">&quot;<span class="token variable">$SOCKET</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$defaultSocket</span>&quot;</span> <span class="token operator">||</span> <span class="token builtin class-name">:</span>
        <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># Do a temporary startup of the MySQL server, for init purposes</span>
<span class="token function-name function">docker_temp_server_start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment"># For 5.7+ the server is ready for use as soon as startup command unblocks</span>
        <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span> <span class="token parameter variable">--daemonize</span> --skip-networking --default-time-zone<span class="token operator">=</span>SYSTEM <span class="token parameter variable">--socket</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${SOCKET}</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                mysql_error <span class="token string">&quot;Unable to start server.&quot;</span>
        <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># Stop the server. When using a local socket file mysqladmin will block until</span>
<span class="token comment"># the shutdown is complete.</span>
<span class="token function-name function">docker_temp_server_stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token operator">!</span> mysqladmin --defaults-extra-file<span class="token operator">=</span><span class="token operator">&lt;</span><span class="token punctuation">(</span> _mysql_passfile <span class="token punctuation">)</span> <span class="token function">shutdown</span> <span class="token parameter variable">-uroot</span> <span class="token parameter variable">--socket</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${SOCKET}</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                mysql_error <span class="token string">&quot;Unable to shut down server.&quot;</span>
        <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># Verify that the minimally required password settings are set for new databases.</span>
<span class="token function-name function">docker_verify_minimum_env</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$MYSQL_ROOT_PASSWORD</span>&quot;</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$MYSQL_ALLOW_EMPTY_PASSWORD</span>&quot;</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$MYSQL_RANDOM_ROOT_PASSWORD</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                mysql_error <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;</span>
                        Database is uninitialized and password option is not specified
                            You need to specify one of the following as an environment variable:
                            - MYSQL_ROOT_PASSWORD
                            - MYSQL_ALLOW_EMPTY_PASSWORD
                            - MYSQL_RANDOM_ROOT_PASSWORD
                EOF
        <span class="token keyword">fi</span>

        <span class="token comment"># This will prevent the CREATE USER from failing (and thus exiting with a half-initialized database)</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$MYSQL_USER</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;root&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                mysql_error <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;</span>
                        <span class="token assign-left variable">MYSQL_USER</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span>, MYSQL_USER and MYSQL_PASSWORD are <span class="token keyword">for</span> configuring a regular user and cannot be used <span class="token keyword">for</span> the root user
                            Remove <span class="token assign-left variable">MYSQL_USER</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span> and use one of the following to control the root user password:
                            - MYSQL_ROOT_PASSWORD
                            - MYSQL_ALLOW_EMPTY_PASSWORD
                            - MYSQL_RANDOM_ROOT_PASSWORD
                EOF
        <span class="token keyword">fi</span>

        <span class="token comment"># warn when missing one of MYSQL_USER or MYSQL_PASSWORD</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$MYSQL_USER</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$MYSQL_PASSWORD</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                mysql_warn <span class="token string">&#39;MYSQL_USER specified, but missing MYSQL_PASSWORD; MYSQL_USER will not be created&#39;</span>
        <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$MYSQL_USER</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$MYSQL_PASSWORD</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                mysql_warn <span class="token string">&#39;MYSQL_PASSWORD specified, but missing MYSQL_USER; MYSQL_PASSWORD will be ignored&#39;</span>
        <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># creates folders for the database</span>
<span class="token comment"># also ensures permission for user mysql of run as root</span>
<span class="token function-name function">docker_create_db_directories</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">local</span> user<span class="token punctuation">;</span> <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span>&quot;</span>

        <span class="token builtin class-name">local</span> <span class="token parameter variable">-A</span> <span class="token assign-left variable">dirs</span><span class="token operator">=</span><span class="token punctuation">(</span> <span class="token punctuation">[</span><span class="token string">&quot;<span class="token variable">$DATADIR</span>&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">)</span>
        <span class="token builtin class-name">local</span> <span class="token function">dir</span>
        <span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">$SOCKET</span>&quot;</span><span class="token variable">)</span></span>&quot;</span>
        dirs<span class="token punctuation">[</span><span class="token string">&quot;<span class="token variable">$dir</span>&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span>

        <span class="token comment"># &quot;datadir&quot; and &quot;socket&quot; are already handled above (since they were already queried previously)</span>
        <span class="token builtin class-name">local</span> conf
        <span class="token keyword">for</span> <span class="token for-or-select variable">conf</span> <span class="token keyword">in</span> <span class="token punctuation">\\</span>
                general-log-file <span class="token punctuation">\\</span>
                keyring_file_data <span class="token punctuation">\\</span>
                pid-file <span class="token punctuation">\\</span>
                secure-file-priv <span class="token punctuation">\\</span>
                slow-query-log-file <span class="token punctuation">\\</span>
        <span class="token punctuation">;</span> <span class="token keyword">do</span>
                <span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>mysql_get_config <span class="token string">&quot;<span class="token variable">$conf</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token variable">)</span></span>&quot;</span>

                <span class="token comment"># skip empty values</span>
                <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$dir</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$dir</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;NULL&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                        <span class="token builtin class-name">continue</span>
                <span class="token keyword">fi</span>
                <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$conf</span>&quot;</span> <span class="token keyword">in</span>
                        secure-file-priv<span class="token punctuation">)</span>
                                <span class="token comment"># already points at a directory</span>
                                <span class="token punctuation">;</span><span class="token punctuation">;</span>
                        *<span class="token punctuation">)</span>
                                <span class="token comment"># other config options point at a file, but we need the directory</span>
                                <span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">$dir</span>&quot;</span><span class="token variable">)</span></span>&quot;</span>
                                <span class="token punctuation">;</span><span class="token punctuation">;</span>
                <span class="token keyword">esac</span>

                dirs<span class="token punctuation">[</span><span class="token string">&quot;<span class="token variable">$dir</span>&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span>
        <span class="token keyword">done</span>

        <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;<span class="token variable">\${<span class="token operator">!</span>dirs<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>&quot;</span>

        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$user</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                <span class="token comment"># this will cause less disk access than \`chown -R\`</span>
                <span class="token function">find</span> <span class="token string">&quot;<span class="token variable">\${<span class="token operator">!</span>dirs<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>&quot;</span> <span class="token punctuation">\\</span><span class="token operator">!</span> <span class="token parameter variable">-user</span> mysql <span class="token parameter variable">-exec</span> <span class="token function">chown</span> --no-dereference mysql <span class="token string">&#39;{}&#39;</span> +
        <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># initializes the database directory</span>
<span class="token function-name function">docker_init_database_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mysql_note <span class="token string">&quot;Initializing database files&quot;</span>
        <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span> --initialize-insecure --default-time-zone<span class="token operator">=</span>SYSTEM
        mysql_note <span class="token string">&quot;Database files initialized&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># Loads various settings that are used elsewhere in the script</span>
<span class="token comment"># This should be called after mysql_check_config, but before any other functions</span>
<span class="token function-name function">docker_setup_env</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment"># Get config</span>
        <span class="token builtin class-name">declare</span> <span class="token parameter variable">-g</span> DATADIR SOCKET
        <span class="token assign-left variable">DATADIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>mysql_get_config <span class="token string">&#39;datadir&#39;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token variable">)</span></span>&quot;</span>
        <span class="token assign-left variable">SOCKET</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>mysql_get_config <span class="token string">&#39;socket&#39;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token variable">)</span></span>&quot;</span>

        <span class="token comment"># Initialize values that might be stored in a file</span>
        file_env <span class="token string">&#39;MYSQL_ROOT_HOST&#39;</span> <span class="token string">&#39;%&#39;</span>
        file_env <span class="token string">&#39;MYSQL_DATABASE&#39;</span>
        file_env <span class="token string">&#39;MYSQL_USER&#39;</span>
        file_env <span class="token string">&#39;MYSQL_PASSWORD&#39;</span>
        file_env <span class="token string">&#39;MYSQL_ROOT_PASSWORD&#39;</span>

        <span class="token builtin class-name">declare</span> <span class="token parameter variable">-g</span> DATABASE_ALREADY_EXISTS
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$DATADIR</span>/mysql&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                <span class="token assign-left variable">DATABASE_ALREADY_EXISTS</span><span class="token operator">=</span><span class="token string">&#39;true&#39;</span>
        <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># Execute sql script, passed via stdin</span>
<span class="token comment"># usage: docker_process_sql [--dont-use-mysql-root-password] [mysql-cli-args]</span>
<span class="token comment">#    ie: docker_process_sql --database=mydb &lt;&lt;&lt;&#39;INSERT ...&#39;</span>
<span class="token comment">#    ie: docker_process_sql --dont-use-mysql-root-password --database=mydb &lt;my-file.sql</span>
<span class="token function-name function">docker_process_sql</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token assign-left variable">passfileArgs</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&#39;--dont-use-mysql-root-password&#39;</span> <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                <span class="token assign-left variable">passfileArgs</span><span class="token operator">+=</span><span class="token punctuation">(</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">)</span>
                <span class="token builtin class-name">shift</span>
        <span class="token keyword">fi</span>
        <span class="token comment"># args sent in can override this db, since they will be later in the command</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$MYSQL_DATABASE</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                <span class="token builtin class-name">set</span> -- <span class="token parameter variable">--database</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$MYSQL_DATABASE</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
        <span class="token keyword">fi</span>

        mysql --defaults-extra-file<span class="token operator">=</span><span class="token operator">&lt;</span><span class="token punctuation">(</span> _mysql_passfile <span class="token string">&quot;<span class="token variable">\${passfileArgs<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>&quot;</span><span class="token punctuation">)</span> <span class="token parameter variable">--protocol</span><span class="token operator">=</span>socket <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-hlocalhost</span> <span class="token parameter variable">--socket</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${SOCKET}</span>&quot;</span> <span class="token parameter variable">--comments</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># Initializes database with timezone info and root password, plus optional extra db/user</span>
<span class="token function-name function">docker_setup_db</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment"># Load timezone info into database</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$MYSQL_INITDB_SKIP_TZINFO</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                <span class="token comment"># sed is for https://bugs.mysql.com/bug.php?id=20545</span>
                mysql_tzinfo_to_sql /usr/share/zoneinfo <span class="token punctuation">\\</span>
                        <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/Local time zone must be set--see zic manual page/FCTY/&#39;</span> <span class="token punctuation">\\</span>
                        <span class="token operator">|</span> docker_process_sql --dont-use-mysql-root-password <span class="token parameter variable">--database</span><span class="token operator">=</span>mysql
                        <span class="token comment"># tell docker_process_sql to not use MYSQL_ROOT_PASSWORD since it is not set yet</span>
        <span class="token keyword">fi</span>
        <span class="token comment"># Generate random root password</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$MYSQL_RANDOM_ROOT_PASSWORD</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>openssl rand <span class="token parameter variable">-base64</span> <span class="token number">24</span><span class="token variable">)</span></span>&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">export</span> MYSQL_ROOT_PASSWORD
                mysql_note <span class="token string">&quot;GENERATED ROOT PASSWORD: <span class="token variable">$MYSQL_ROOT_PASSWORD</span>&quot;</span>
        <span class="token keyword">fi</span>
        <span class="token comment"># Sets root password and creates root users for non-localhost hosts</span>
        <span class="token builtin class-name">local</span> <span class="token assign-left variable">rootCreate</span><span class="token operator">=</span>
        <span class="token comment"># default root to listen for connections from anywhere</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$MYSQL_ROOT_HOST</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$MYSQL_ROOT_HOST</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&#39;localhost&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                <span class="token comment"># no, we don&#39;t care if read finds a terminating character in this heredoc</span>
                <span class="token comment"># https://unix.stackexchange.com/questions/265149/why-is-set-o-errexit-breaking-this-read-heredoc-expression/265151#265151</span>
                <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;&#39;</span> rootCreate <span class="token operator">&lt;&lt;-</span>EOSQL <span class="token operator">||</span> <span class="token boolean">true</span>
                        CREATE <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;\${MYSQL_ROOT_HOST}&#39;</span> IDENTIFIED BY <span class="token string">&#39;\${MYSQL_ROOT_PASSWORD}&#39;</span> <span class="token punctuation">;</span>
                        GRANT ALL ON *.* TO <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;\${MYSQL_ROOT_HOST}&#39;</span> WITH GRANT OPTION <span class="token punctuation">;</span>
                EOSQL
        <span class="token keyword">fi</span>

        <span class="token builtin class-name">local</span> <span class="token assign-left variable">passwordSet</span><span class="token operator">=</span>
        <span class="token comment"># no, we don&#39;t care if read finds a terminating character in this heredoc (see above)</span>
        <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;&#39;</span> passwordSet <span class="token operator">&lt;&lt;-</span>EOSQL <span class="token operator">||</span> <span class="token boolean">true</span>
                ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;\${MYSQL_ROOT_PASSWORD}&#39;</span> <span class="token punctuation">;</span>
        EOSQL

        <span class="token comment"># tell docker_process_sql to not use MYSQL_ROOT_PASSWORD since it is just now being set</span>
        docker_process_sql --dont-use-mysql-root-password <span class="token parameter variable">--database</span><span class="token operator">=</span>mysql <span class="token operator">&lt;&lt;-</span>EOSQL
                -- What<span class="token string">&#39;s done in this file shouldn&#39;</span>t be replicated
                --  or products like mysql-fabric won<span class="token string">&#39;t work
                SET @@SESSION.SQL_LOG_BIN=0;

                \${passwordSet}
                GRANT ALL ON *.* TO &#39;</span>root<span class="token string">&#39;@&#39;</span>localhost<span class="token string">&#39; WITH GRANT OPTION ;
                FLUSH PRIVILEGES ;
                \${rootCreate}
                DROP DATABASE IF EXISTS test ;
        EOSQL

        # Creates a custom database and user if specified
        if [ -n &quot;$MYSQL_DATABASE&quot; ]; then
                mysql_note &quot;Creating database \${MYSQL_DATABASE}&quot;
                docker_process_sql --database=mysql &lt;&lt;&lt;&quot;CREATE DATABASE IF NOT EXISTS \\\`$MYSQL_DATABASE\\\` ;&quot;
        fi

        if [ -n &quot;$MYSQL_USER&quot; ] &amp;&amp; [ -n &quot;$MYSQL_PASSWORD&quot; ]; then
                mysql_note &quot;Creating user \${MYSQL_USER}&quot;
                docker_process_sql --database=mysql &lt;&lt;&lt;&quot;CREATE USER &#39;</span><span class="token variable">$MYSQL_USER</span><span class="token string">&#39;@&#39;</span>%<span class="token string">&#39; IDENTIFIED BY &#39;</span><span class="token variable">$MYSQL_PASSWORD</span><span class="token string">&#39; ;&quot;

                if [ -n &quot;$MYSQL_DATABASE&quot; ]; then
                        mysql_note &quot;Giving user \${MYSQL_USER} access to schema \${MYSQL_DATABASE}&quot;
                        docker_process_sql --database=mysql &lt;&lt;&lt;&quot;GRANT ALL ON \\\`\${MYSQL_DATABASE//_/\\\\_}\\\`.* TO &#39;</span><span class="token variable">$MYSQL_USER</span><span class="token string">&#39;@&#39;</span>%<span class="token string">&#39; ;&quot;
                fi
        fi
}

_mysql_passfile() {
        # echo the password to the &quot;file&quot; the client uses
        # the client command will use process substitution to create a file on the fly
        # ie: --defaults-extra-file=&lt;( _mysql_passfile )
        if [ &#39;</span>--dont-use-mysql-root-password<span class="token string">&#39; != &quot;$1&quot; ] &amp;&amp; [ -n &quot;$MYSQL_ROOT_PASSWORD&quot; ]; then
                cat &lt;&lt;-EOF
                        [client]
                        password=&quot;\${MYSQL_ROOT_PASSWORD}&quot;
                EOF
        fi
}

# Mark root user as expired so the password must be changed before anything
# else can be done (only supported for 5.6+)
mysql_expire_root_user() {
        if [ -n &quot;$MYSQL_ONETIME_PASSWORD&quot; ]; then
                docker_process_sql --database=mysql &lt;&lt;-EOSQL
                        ALTER USER &#39;</span>root<span class="token string">&#39;@&#39;</span>%<span class="token string">&#39; PASSWORD EXPIRE;
                EOSQL
        fi
}

# check arguments for an option that would cause mysqld to stop
# return true if there is one
_mysql_want_help() {
        local arg
        for arg; do
                case &quot;$arg&quot; in
                        -&#39;</span>?<span class="token string">&#39;|--help|--print-defaults|-V|--version)
                                return 0
                                ;;
                esac
        done
        return 1
}

_main() {
        # if command starts with an option, prepend mysqld
        if [ &quot;\${1:0:1}&quot; = &#39;</span>-<span class="token string">&#39; ]; then
                set -- mysqld &quot;$@&quot;
        fi

        # skip setup if they aren&#39;</span>t running mysqld or want an option that stops mysqld
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;mysqld&#39;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span> _mysql_want_help <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                mysql_note <span class="token string">&quot;Entrypoint script for MySQL Server <span class="token variable">\${MYSQL_VERSION}</span> started.&quot;</span>

                mysql_check_config <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
                <span class="token comment"># Load various environment variables</span>
                docker_setup_env <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
                docker_create_db_directories <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>

                <span class="token comment"># If container is started as root user, restart as dedicated mysql user</span>
                <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                        mysql_note <span class="token string">&quot;Switching to dedicated user &#39;mysql&#39;&quot;</span>
                        <span class="token builtin class-name">exec</span> gosu mysql <span class="token string">&quot;<span class="token environment constant">$BASH_SOURCE</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
                <span class="token keyword">fi</span>

                <span class="token comment"># there&#39;s no database, so it needs to be initialized</span>
                <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$DATABASE_ALREADY_EXISTS</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                        docker_verify_minimum_env

                        <span class="token comment"># check dir permissions to reduce likelihood of half-initialized database</span>
                        <span class="token function">ls</span> /docker-entrypoint-initdb.d/ <span class="token operator">&gt;</span> /dev/null

                        docker_init_database_dir <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>

                        mysql_note <span class="token string">&quot;Starting temporary server&quot;</span>
                        docker_temp_server_start <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
                        mysql_note <span class="token string">&quot;Temporary server started.&quot;</span>

                        mysql_socket_fix
                        docker_setup_db
                        docker_process_init_files /docker-entrypoint-initdb.d/*

                        mysql_expire_root_user

                        mysql_note <span class="token string">&quot;Stopping temporary server&quot;</span>
                        docker_temp_server_stop
                        mysql_note <span class="token string">&quot;Temporary server stopped&quot;</span>

                        <span class="token builtin class-name">echo</span>
                        mysql_note <span class="token string">&quot;MySQL init process done. Ready for start up.&quot;</span>
                        <span class="token builtin class-name">echo</span>
                <span class="token keyword">else</span>
                        mysql_socket_fix
                <span class="token keyword">fi</span>
        <span class="token keyword">fi</span>
        <span class="token builtin class-name">exec</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># If we are sourced from elsewhere, don&#39;t perform any further actions</span>
<span class="token keyword">if</span> <span class="token operator">!</span> _is_sourced<span class="token punctuation">;</span> <span class="token keyword">then</span>
        _main <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function c(r,u){return i(),n("div",null,[p,a(" more "),o])}const v=s(l,[["render",c],["__file","docker-entrypoint-initdb.html.vue"]]),b=JSON.parse('{"path":"/devops/docker/docker-entrypoint-initdb.html","title":"Docker部署数据库如何初始化数据","lang":"zh-CN","frontmatter":{"title":"Docker部署数据库如何初始化数据","date":"2025-01-02T00:00:00.000Z","tag":["Docker","MySQL","Postgresql"],"category":["devops"],"description":"公司目前对外部署的应用基本上都是使用Docker和Docker-Compose，当然也包括数据库，例如：MySQL、Postgresql。如何减少频繁的拷贝SQL脚本到数据库容器中这种繁琐的操作，提高部署效率呢？","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/devops/docker/docker-entrypoint-initdb.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"Docker部署数据库如何初始化数据"}],["meta",{"property":"og:description","content":"公司目前对外部署的应用基本上都是使用Docker和Docker-Compose，当然也包括数据库，例如：MySQL、Postgresql。如何减少频繁的拷贝SQL脚本到数据库容器中这种繁琐的操作，提高部署效率呢？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-02T12:39:08.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:tag","content":"Postgresql"}],["meta",{"property":"article:published_time","content":"2025-01-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-02T12:39:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker部署数据库如何初始化数据\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-01-02T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-02T12:39:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[]},{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[]}],"git":{"createdTime":1735821548000,"updatedTime":1735821548000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":6.47,"words":1941},"filePathRelative":"devops/docker/docker-entrypoint-initdb.md","localizedDate":"2025年1月2日","excerpt":"<p>公司目前对外部署的应用基本上都是使用Docker和Docker-Compose，当然也包括数据库，例如：MySQL、Postgresql。如何减少频繁的拷贝SQL脚本到数据库容器中这种繁琐的操作，提高部署效率呢？</p>\\n","autoDesc":true}');export{v as comp,b as data};
