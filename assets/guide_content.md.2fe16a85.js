import{_ as s,c as n,o as a,d as l}from"./app.4ac00756.js";const C=JSON.parse('{"title":"Content of email","description":"","frontmatter":{},"headers":[{"level":2,"title":"Create a CustomAlarmMessageContext class","slug":"create-a-customalarmmessagecontext-class","link":"#create-a-customalarmmessagecontext-class","children":[]}],"relativePath":"guide/content.md","lastUpdated":1671423673000}'),o={name:"guide/content.md"},p=l(`<h1 id="content-of-email" tabindex="-1">Content of email <a class="header-anchor" href="#content-of-email" aria-hidden="true">#</a></h1><p>Sometimes the default format of the email may not meet our needs, we want to customize the content of the configuration email.</p><p>Just follow the steps below to create your own email format</p><h2 id="create-a-customalarmmessagecontext-class" tabindex="-1">Create a <code>CustomAlarmMessageContext</code> class <a class="header-anchor" href="#create-a-customalarmmessagecontext-class" aria-hidden="true">#</a></h2><ul><li>Implement <code>AlarmMessageContext</code> to <code>CustomAlarmMessageContext</code></li></ul><div class="language-java"><button class="copy"></button><span class="lang">java</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> logon</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">tracer</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">context</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">AlarmInfoContext</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> logon</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">tracer</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">context</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">AlarmMessageContext</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> logon</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">tracer</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">dto</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">AlarmLogSimpleConfig</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> logon</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">tracer</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">dto</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">AlarmMailContent</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> org</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">springframework</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">stereotype</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">Component</span><span style="color:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">@</span><span style="color:#CB7676;">Component</span></span>
<span class="line"><span style="color:#CB7676;">public</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">class</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">CustomAlarmMessageContext</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">implements</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">AlarmMessageContext</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#758575DD;">  /**</span></span>
<span class="line"><span style="color:#758575DD;">   * Customize the content sent to mail.</span></span>
<span class="line"><span style="color:#758575DD;">   *</span></span>
<span class="line"><span style="color:#758575DD;">   * </span><span style="color:#4D9375;">@param</span><span style="color:#758575DD;"> </span><span style="color:#BD976A;">context</span><span style="color:#758575DD;">   {@link AlarmInfoContext} The alarm log info.</span></span>
<span class="line"><span style="color:#758575DD;">   * </span><span style="color:#4D9375;">@param</span><span style="color:#758575DD;"> </span><span style="color:#BD976A;">throwable</span><span style="color:#758575DD;"> {@link Throwable} The throwable that was caught.</span></span>
<span class="line"><span style="color:#758575DD;">   * </span><span style="color:#4D9375;">@param</span><span style="color:#758575DD;"> </span><span style="color:#BD976A;">config</span><span style="color:#758575DD;">    {@link AlarmLogSimpleConfig}The config context.</span></span>
<span class="line"><span style="color:#758575DD;">   * </span><span style="color:#4D9375;">@return</span><span style="color:#758575DD;"> {@link AlarmMailContent} Content sent to mail.</span></span>
<span class="line"><span style="color:#758575DD;">   */</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">@</span><span style="color:#CB7676;">Override</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">public</span><span style="color:#DBD7CAEE;"> AlarmMailContent </span><span style="color:#80A665;">mailContent</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">AlarmInfoContext </span><span style="color:#BD976A;">context</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> Throwable </span><span style="color:#BD976A;">throwable</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> AlarmLogSimpleConfig </span><span style="color:#BD976A;">config</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">AlarmMailContent</span><span style="color:#666666;">(</span><span style="color:#BD976A;">context</span><span style="color:#666666;">.</span><span style="color:#80A665;">getMessage</span><span style="color:#666666;">(),</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">context</span><span style="color:#666666;">.</span><span style="color:#80A665;">getClassName</span><span style="color:#666666;">());</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> logon</span><span style="color:#999999;">.</span><span style="color:#393A34;">tracer</span><span style="color:#999999;">.</span><span style="color:#393A34;">context</span><span style="color:#999999;">.</span><span style="color:#393A34;">AlarmInfoContext</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> logon</span><span style="color:#999999;">.</span><span style="color:#393A34;">tracer</span><span style="color:#999999;">.</span><span style="color:#393A34;">context</span><span style="color:#999999;">.</span><span style="color:#393A34;">AlarmMessageContext</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> logon</span><span style="color:#999999;">.</span><span style="color:#393A34;">tracer</span><span style="color:#999999;">.</span><span style="color:#393A34;">dto</span><span style="color:#999999;">.</span><span style="color:#393A34;">AlarmLogSimpleConfig</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> logon</span><span style="color:#999999;">.</span><span style="color:#393A34;">tracer</span><span style="color:#999999;">.</span><span style="color:#393A34;">dto</span><span style="color:#999999;">.</span><span style="color:#393A34;">AlarmMailContent</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> org</span><span style="color:#999999;">.</span><span style="color:#393A34;">springframework</span><span style="color:#999999;">.</span><span style="color:#393A34;">stereotype</span><span style="color:#999999;">.</span><span style="color:#393A34;">Component</span><span style="color:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">@</span><span style="color:#AB5959;">Component</span></span>
<span class="line"><span style="color:#AB5959;">public</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">class</span><span style="color:#393A34;"> </span><span style="color:#2E808F;">CustomAlarmMessageContext</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">implements</span><span style="color:#393A34;"> </span><span style="color:#59873A;">AlarmMessageContext</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#A0ADA0;">  /**</span></span>
<span class="line"><span style="color:#A0ADA0;">   * Customize the content sent to mail.</span></span>
<span class="line"><span style="color:#A0ADA0;">   *</span></span>
<span class="line"><span style="color:#A0ADA0;">   * </span><span style="color:#1E754F;">@param</span><span style="color:#A0ADA0;"> </span><span style="color:#B07D48;">context</span><span style="color:#A0ADA0;">   {@link AlarmInfoContext} The alarm log info.</span></span>
<span class="line"><span style="color:#A0ADA0;">   * </span><span style="color:#1E754F;">@param</span><span style="color:#A0ADA0;"> </span><span style="color:#B07D48;">throwable</span><span style="color:#A0ADA0;"> {@link Throwable} The throwable that was caught.</span></span>
<span class="line"><span style="color:#A0ADA0;">   * </span><span style="color:#1E754F;">@param</span><span style="color:#A0ADA0;"> </span><span style="color:#B07D48;">config</span><span style="color:#A0ADA0;">    {@link AlarmLogSimpleConfig}The config context.</span></span>
<span class="line"><span style="color:#A0ADA0;">   * </span><span style="color:#1E754F;">@return</span><span style="color:#A0ADA0;"> {@link AlarmMailContent} Content sent to mail.</span></span>
<span class="line"><span style="color:#A0ADA0;">   */</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">@</span><span style="color:#AB5959;">Override</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">public</span><span style="color:#393A34;"> AlarmMailContent </span><span style="color:#59873A;">mailContent</span><span style="color:#999999;">(</span><span style="color:#393A34;">AlarmInfoContext </span><span style="color:#B07D48;">context</span><span style="color:#999999;">,</span><span style="color:#393A34;"> Throwable </span><span style="color:#B07D48;">throwable</span><span style="color:#999999;">,</span><span style="color:#393A34;"> AlarmLogSimpleConfig </span><span style="color:#B07D48;">config</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">AlarmMailContent</span><span style="color:#999999;">(</span><span style="color:#B07D48;">context</span><span style="color:#999999;">.</span><span style="color:#59873A;">getMessage</span><span style="color:#999999;">(),</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">context</span><span style="color:#999999;">.</span><span style="color:#59873A;">getClassName</span><span style="color:#999999;">());</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div><p>This allows us to send custom emails.</p>`,7),e=[p];function t(c,r,y,A,i,D){return a(),n("div",null,e)}const E=s(o,[["render",t]]);export{C as __pageData,E as default};