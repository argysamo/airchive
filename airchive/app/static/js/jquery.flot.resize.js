(function(c,a,m){function e(p){!0===k&&(k=p||1);for(var b=d.length-1;0<=b;b--){var f=c(d[b]);if(f[0]==a||f.is(":visible")){var m=f.width(),r=f.height(),g=f.data(n);!g||m===g.w&&r===g.h||(f.trigger(q,[g.w=m,g.h=r]),k=p||!0)}else g=f.data(n),g.w=0,g.h=0}null!==l&&(k&&(null==p||1E3>p-k)?l=a.requestAnimationFrame(e):(l=setTimeout(e,h[s]),k=!1))}"$:nomunge";var d=[],h=c.resize=c.extend(c.resize,{}),l,k=!1,q="resize",n=q+"-special-event",s="pendingDelay";h[s]=200;h.activeDelay=20;h.throttleWindow=!0;c.event.special[q]=
{setup:function(){if(!h.throttleWindow&&this.setTimeout)return!1;var a=c(this);d.push(this);a.data(n,{w:a.width(),h:a.height()});1===d.length&&(l=m,e())},teardown:function(){if(!h.throttleWindow&&this.setTimeout)return!1;for(var a=c(this),b=d.length-1;0<=b;b--)if(d[b]==this){d.splice(b,1);break}a.removeData(n);d.length||(k?cancelAnimationFrame(l):clearTimeout(l),l=null)},add:function(a){function b(a,b,g){var e=c(this),d=e.data(n)||{};d.w=b!==m?b:e.width();d.h=g!==m?g:e.height();f.apply(this,arguments)}
if(!h.throttleWindow&&this.setTimeout)return!1;var f;if(c.isFunction(a))return f=a,b;f=a.handler;a.handler=b}};a.requestAnimationFrame||(a.requestAnimationFrame=function(){return a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(e,b){return a.setTimeout(function(){e((new Date).getTime())},h.activeDelay)}}());a.cancelAnimationFrame||(a.cancelAnimationFrame=a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||
a.msCancelRequestAnimationFrame||clearTimeout)})(jQuery,this);(function(c){c.plot.plugins.push({init:function(a){function c(){var e=a.getPlaceholder();0!=e.width()&&0!=e.height()&&(a.resize(),a.setupGrid(),a.draw())}a.hooks.bindEvents.push(function(a,d){a.getPlaceholder().resize(c)});a.hooks.shutdown.push(function(a,d){a.getPlaceholder().unbind("resize",c)})},options:{},name:"resize",version:"1.0"})})(jQuery);