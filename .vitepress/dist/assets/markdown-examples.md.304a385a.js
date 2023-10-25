import{_ as s,o as a,c as n,M as e}from"./chunks/framework.71afdf21.js";const y=JSON.parse('{"title":"Markdown Extension Examples","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-examples.md","filePath":"markdown-examples.md","lastUpdated":1698136381000}'),l={name:"markdown-examples.md"},o=e(`<h1 id="markdown-extension-examples" tabindex="-1">Markdown Extension Examples <a class="header-anchor" href="#markdown-extension-examples" aria-label="Permalink to &quot;Markdown Extension Examples&quot;">​</a></h1><p>This page demonstrates some of the built-in markdown extensions provided by VitePress.</p><h2 id="syntax-highlighting" tabindex="-1">Syntax Highlighting <a class="header-anchor" href="#syntax-highlighting" aria-label="Permalink to &quot;Syntax Highlighting&quot;">​</a></h2><p>VitePress provides Syntax Highlighting powered by <a href="https://github.com/shikijs/shiki" target="_blank" rel="noreferrer">Shiki</a>, with additional features like line-highlighting:</p><p><strong>Input</strong></p><pre><code>\`\`\`js{4}
export default {
  data () {
    return {
      msg: &#39;Highlighted!&#39;
    }
  }
}
\`\`\`
</code></pre><p><strong>Output</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Highlighted!</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="custom-containers" tabindex="-1">Custom Containers <a class="header-anchor" href="#custom-containers" aria-label="Permalink to &quot;Custom Containers&quot;">​</a></h2><p><strong>Input</strong></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">::: info</span></span>
<span class="line"><span style="color:#BABED8;">This is an info box.</span></span>
<span class="line"><span style="color:#BABED8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">::: tip</span></span>
<span class="line"><span style="color:#BABED8;">This is a tip.</span></span>
<span class="line"><span style="color:#BABED8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">::: warning</span></span>
<span class="line"><span style="color:#BABED8;">This is a warning.</span></span>
<span class="line"><span style="color:#BABED8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">::: danger</span></span>
<span class="line"><span style="color:#BABED8;">This is a dangerous warning.</span></span>
<span class="line"><span style="color:#BABED8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">::: details</span></span>
<span class="line"><span style="color:#BABED8;">This is a details block.</span></span>
<span class="line"><span style="color:#BABED8;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h2 id="more" tabindex="-1">More <a class="header-anchor" href="#more" aria-label="Permalink to &quot;More&quot;">​</a></h2><p>Check out the documentation for the <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">full list of markdown extensions</a>.</p>`,19),t=[o];function p(i,r,c,d,h,m){return a(),n("div",null,t)}const u=s(l,[["render",p]]);export{y as __pageData,u as default};
