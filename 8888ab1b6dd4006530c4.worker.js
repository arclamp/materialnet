!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="./",e(e.s=3)}([function(t,n,e){"use strict";(function(t){var e="object"==typeof t&&t&&t.Object===Object&&t;n.a=e}).call(this,e(2))},,function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";e.r(n);var r=function(t){return function(){return t}},i=function(){return 1e-6*(Math.random()-.5)};function o(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,a,u,f,s,c,l,h,v=t._root,y={data:r},p=t._x0,d=t._y0,x=t._x1,g=t._y1;if(!v)return t._root=y,t;for(;v.length;)if((s=n>=(o=(p+x)/2))?p=o:x=o,(c=e>=(a=(d+g)/2))?d=a:g=a,i=v,!(v=v[l=c<<1|s]))return i[l]=y,t;if(u=+t._x.call(null,v.data),f=+t._y.call(null,v.data),n===u&&e===f)return y.next=v,i?i[l]=y:t._root=y,t;do{i=i?i[l]=new Array(4):t._root=new Array(4),(s=n>=(o=(p+x)/2))?p=o:x=o,(c=e>=(a=(d+g)/2))?d=a:g=a}while((l=c<<1|s)===(h=(f>=a)<<1|u>=o));return i[h]=v,i[l]=y,t}var a=function(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i};function u(t){return t[0]}function f(t){return t[1]}function s(t,n,e){var r=new c(null==n?u:n,null==e?f:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function c(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function l(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}var h=s.prototype=c.prototype;function v(t){return t.x+t.vx}function y(t){return t.y+t.vy}h.copy=function(){var t,n,e=new c(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=l(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=l(n));return e},h.add=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return o(this.cover(n,e),n,e,t)},h.addAll=function(t){var n,e,r,i,a=t.length,u=new Array(a),f=new Array(a),s=1/0,c=1/0,l=-1/0,h=-1/0;for(e=0;e<a;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(u[e]=r,f[e]=i,r<s&&(s=r),r>l&&(l=r),i<c&&(c=i),i>h&&(h=i));if(s>l||c>h)return this;for(this.cover(s,c).cover(l,h),e=0;e<a;++e)o(this,u[e],f[e],t[e]);return this},h.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{for(var a,u,f=i-e,s=this._root;e>t||t>=i||r>n||n>=o;)switch(u=(n<r)<<1|t<e,(a=new Array(4))[u]=s,s=a,f*=2,u){case 0:i=e+f,o=r+f;break;case 1:e=i-f,o=r+f;break;case 2:i=e+f,r=o-f;break;case 3:e=i-f,r=o-f}this._root&&this._root.length&&(this._root=s)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},h.data=function(){var t=[];return this.visit((function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)})),t},h.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},h.find=function(t,n,e){var r,i,o,u,f,s,c,l=this._x0,h=this._y0,v=this._x1,y=this._y1,p=[],d=this._root;for(d&&p.push(new a(d,l,h,v,y)),null==e?e=1/0:(l=t-e,h=n-e,v=t+e,y=n+e,e*=e);s=p.pop();)if(!(!(d=s.node)||(i=s.x0)>v||(o=s.y0)>y||(u=s.x1)<l||(f=s.y1)<h))if(d.length){var x=(i+u)/2,g=(o+f)/2;p.push(new a(d[3],x,g,u,f),new a(d[2],i,g,x,f),new a(d[1],x,o,u,g),new a(d[0],i,o,x,g)),(c=(n>=g)<<1|t>=x)&&(s=p[p.length-1],p[p.length-1]=p[p.length-1-c],p[p.length-1-c]=s)}else{var _=t-+this._x.call(null,d.data),w=n-+this._y.call(null,d.data),m=_*_+w*w;if(m<e){var b=Math.sqrt(e=m);l=t-b,h=n-b,v=t+b,y=n+b,r=d.data}}return r},h.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this;var n,e,r,i,o,a,u,f,s,c,l,h,v=this._root,y=this._x0,p=this._y0,d=this._x1,x=this._y1;if(!v)return this;if(v.length)for(;;){if((s=o>=(u=(y+d)/2))?y=u:d=u,(c=a>=(f=(p+x)/2))?p=f:x=f,n=v,!(v=v[l=c<<1|s]))return this;if(!v.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l)}for(;v.data!==t;)if(r=v,!(v=v.next))return this;return(i=v.next)&&delete v.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(v=n[0]||n[1]||n[2]||n[3])&&v===(n[3]||n[2]||n[1]||n[0])&&!v.length&&(e?e[h]=v:this._root=v),this):(this._root=i,this)},h.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this},h.root=function(){return this._root},h.size=function(){var t=0;return this.visit((function(n){if(!n.length)do{++t}while(n=n.next)})),t},h.visit=function(t){var n,e,r,i,o,u,f=[],s=this._root;for(s&&f.push(new a(s,this._x0,this._y0,this._x1,this._y1));n=f.pop();)if(!t(s=n.node,r=n.x0,i=n.y0,o=n.x1,u=n.y1)&&s.length){var c=(r+o)/2,l=(i+u)/2;(e=s[3])&&f.push(new a(e,c,l,o,u)),(e=s[2])&&f.push(new a(e,r,l,c,u)),(e=s[1])&&f.push(new a(e,c,i,o,l)),(e=s[0])&&f.push(new a(e,r,i,c,l))}return this},h.visitAfter=function(t){var n,e=[],r=[];for(this._root&&e.push(new a(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,u=n.x0,f=n.y0,s=n.x1,c=n.y1,l=(u+s)/2,h=(f+c)/2;(o=i[0])&&e.push(new a(o,u,f,l,h)),(o=i[1])&&e.push(new a(o,l,f,s,h)),(o=i[2])&&e.push(new a(o,u,h,l,c)),(o=i[3])&&e.push(new a(o,l,h,s,c))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},h.x=function(t){return arguments.length?(this._x=t,this):this._x},h.y=function(t){return arguments.length?(this._y=t,this):this._y};function p(){}function d(t,n){var e=new p;if(t instanceof p)t.each((function(t,n){e.set(n,t)}));else if(Array.isArray(t)){var r,i=-1,o=t.length;if(null==n)for(;++i<o;)e.set(i,t[i]);else for(;++i<o;)e.set(n(r=t[i],i,t),r)}else if(t)for(var a in t)e.set(a,t[a]);return e}p.prototype=d.prototype={constructor:p,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,n){return this["$"+t]=n,this},remove:function(t){var n="$"+t;return n in this&&delete this[n]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)"$"===n[0]&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)"$"===n[0]&&++t;return t},empty:function(){for(var t in this)if("$"===t[0])return!1;return!0},each:function(t){for(var n in this)"$"===n[0]&&t(this[n],n.slice(1),this)}};var x=d;function g(){}var _=x.prototype;function w(t,n){var e=new g;if(t instanceof g)t.each((function(t){e.add(t)}));else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}g.prototype=w.prototype={constructor:g,has:_.has,add:function(t){return this["$"+(t+="")]=t,this},remove:_.remove,clear:_.clear,values:_.keys,size:_.size,empty:_.empty,each:_.each};function m(t){return t.index}function b(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}var N={value:function(){}};function M(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new j(r)}function j(t){this._=t}function k(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))}function A(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function O(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=N,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}j.prototype=M.prototype={constructor:j,on:function(t,n){var e,r=this._,i=k(t+"",r),o=-1,a=i.length;if(!(arguments.length<2)){if(null!=n&&"function"!==typeof n)throw new Error("invalid callback: "+n);for(;++o<a;)if(e=(t=i[o]).type)r[e]=O(r[e],t.name,n);else if(null==n)for(e in r)r[e]=O(r[e],t.name,null);return this}for(;++o<a;)if((e=(t=i[o]).type)&&(e=A(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new j(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var T,$,E=M,q=0,S=0,P=0,z=0,D=0,F=0,I="object"===typeof performance&&performance.now?performance:Date,W="object"===typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function L(){return D||(W(U),D=I.now()+F)}function U(){D=0}function B(){this._call=this._time=this._next=null}function C(t,n,e){var r=new B;return r.restart(t,n,e),r}function G(){D=(z=I.now())+F,q=S=0;try{!function(){L(),++q;for(var t,n=T;n;)(t=D-n._time)>=0&&n._call.call(null,t),n=n._next;--q}()}finally{q=0,function(){var t,n,e=T,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:T=n);$=t,J(r)}(),D=0}}function H(){var t=I.now(),n=t-z;n>1e3&&(F-=n,z=t)}function J(t){q||(S&&(S=clearTimeout(S)),t-D>24?(t<1/0&&(S=setTimeout(G,t-I.now()-F)),P&&(P=clearInterval(P))):(P||(z=I.now(),P=setInterval(H,1e3)),q=1,W(G)))}function K(t){return t.x}function Q(t){return t.y}B.prototype=C.prototype={constructor:B,restart:function(t,n,e){if("function"!==typeof t)throw new TypeError("callback is not a function");e=(null==e?L():+e)+(null==n?0:+n),this._next||$===this||($?$._next=this:T=this,$=this),this._call=t,this._time=e,J()},stop:function(){this._call&&(this._call=null,this._time=1/0,J())}};var R=Math.PI*(3-Math.sqrt(5));var V=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)},X=e(0),Y="object"==typeof self&&self&&self.Object===Object&&self,Z=X.a||Y||Function("return this")(),tt=function(){return Z.Date.now()},nt=Z.Symbol,et=Object.prototype,rt=et.hasOwnProperty,it=et.toString,ot=nt?nt.toStringTag:void 0;var at=function(t){var n=rt.call(t,ot),e=t[ot];try{t[ot]=void 0;var r=!0}catch(o){}var i=it.call(t);return r&&(n?t[ot]=e:delete t[ot]),i},ut=Object.prototype.toString;var ft=function(t){return ut.call(t)},st=nt?nt.toStringTag:void 0;var ct=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":st&&st in Object(t)?at(t):ft(t)};var lt=function(t){return null!=t&&"object"==typeof t};var ht=function(t){return"symbol"==typeof t||lt(t)&&"[object Symbol]"==ct(t)},vt=/^\s+|\s+$/g,yt=/^[-+]0x[0-9a-f]+$/i,pt=/^0b[01]+$/i,dt=/^0o[0-7]+$/i,xt=parseInt;var gt=function(t){if("number"==typeof t)return t;if(ht(t))return NaN;if(V(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=V(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(vt,"");var e=pt.test(t);return e||dt.test(t)?xt(t.slice(2),e?2:8):yt.test(t)?NaN:+t},_t=Math.max,wt=Math.min;var mt=function(t,n,e){var r,i,o,a,u,f,s=0,c=!1,l=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(n){var e=r,o=i;return r=i=void 0,s=n,a=t.apply(o,e)}function y(t){return s=t,u=setTimeout(d,n),c?v(t):a}function p(t){var e=t-f;return void 0===f||e>=n||e<0||l&&t-s>=o}function d(){var t=tt();if(p(t))return x(t);u=setTimeout(d,function(t){var e=n-(t-f);return l?wt(e,o-(t-s)):e}(t))}function x(t){return u=void 0,h&&r?v(t):(r=i=void 0,a)}function g(){var t=tt(),e=p(t);if(r=arguments,i=this,f=t,e){if(void 0===u)return y(f);if(l)return clearTimeout(u),u=setTimeout(d,n),v(f)}return void 0===u&&(u=setTimeout(d,n)),a}return n=gt(n)||0,V(e)&&(c=!!e.leading,o=(l="maxWait"in e)?_t(gt(e.maxWait)||0,n):o,h="trailing"in e?!!e.trailing:h),g.cancel=function(){void 0!==u&&clearTimeout(u),s=0,r=f=i=u=void 0},g.flush=function(){return void 0===u?a:x(tt())},g};var bt=function(t,n,e){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return V(e)&&(r="leading"in e?!!e.leading:r,i="trailing"in e?!!e.trailing:i),mt(t,n,{leading:r,maxWait:n,trailing:i})};const Nt=self;function Mt(t){const n=n=>{t(n.data,n)};return Nt.addEventListener("message",n),()=>{Nt.removeEventListener("message",n)}}function jt(t,n,e){t=Object.assign({nodes:[],edges:[],alpha:1},t);const o=new Map,a=t.nodes;for(const r of a)o.set(r.name,r);const u=t.edges.map(([t,n])=>({source:o.get(t),target:o.get(n)})),f=function(t){var n,e=1,r=.001,i=1-Math.pow(r,1/300),o=0,a=.6,u=x(),f=C(c),s=E("tick","end");function c(){l(),s.call("tick",n),e<r&&(f.stop(),s.call("end",n))}function l(r){var f,s,c=t.length;void 0===r&&(r=1);for(var l=0;l<r;++l)for(e+=(o-e)*i,u.each((function(t){t(e)})),f=0;f<c;++f)null==(s=t[f]).fx?s.x+=s.vx*=a:(s.x=s.fx,s.vx=0),null==s.fy?s.y+=s.vy*=a:(s.y=s.fy,s.vy=0);return n}function h(){for(var n,e=0,r=t.length;e<r;++e){if((n=t[e]).index=e,null!=n.fx&&(n.x=n.fx),null!=n.fy&&(n.y=n.fy),isNaN(n.x)||isNaN(n.y)){var i=10*Math.sqrt(e),o=e*R;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function v(n){return n.initialize&&n.initialize(t),n}return null==t&&(t=[]),h(),n={tick:l,restart:function(){return f.restart(c),n},stop:function(){return f.stop(),n},nodes:function(e){return arguments.length?(t=e,h(),u.each(v),n):t},alpha:function(t){return arguments.length?(e=+t,n):e},alphaMin:function(t){return arguments.length?(r=+t,n):r},alphaDecay:function(t){return arguments.length?(i=+t,n):+i},alphaTarget:function(t){return arguments.length?(o=+t,n):o},velocityDecay:function(t){return arguments.length?(a=1-t,n):1-a},force:function(t,e){return arguments.length>1?(null==e?u.remove(t):u.set(t,v(e)),n):u.get(t)},find:function(n,e,r){var i,o,a,u,f,s=0,c=t.length;for(null==r?r=1/0:r*=r,s=0;s<c;++s)(a=(i=n-(u=t[s]).x)*i+(o=e-u.y)*o)<r&&(f=u,r=a);return f},on:function(t,e){return arguments.length>1?(s.on(t,e),n):s.on(t)}}}().nodes(a).alpha(t.alpha).force("charge",function(){var t,n,e,o,a=r(-30),u=1,f=1/0,c=.81;function l(r){var i,o=t.length,a=s(t,K,Q).visitAfter(v);for(e=r,i=0;i<o;++i)n=t[i],a.visit(y)}function h(){if(t){var n,e,r=t.length;for(o=new Array(r),n=0;n<r;++n)e=t[n],o[e.index]=+a(e,n,t)}}function v(t){var n,e,r,i,a,u=0,f=0;if(t.length){for(r=i=a=0;a<4;++a)(n=t[a])&&(e=Math.abs(n.value))&&(u+=n.value,f+=e,r+=e*n.x,i+=e*n.y);t.x=r/f,t.y=i/f}else{(n=t).x=n.data.x,n.y=n.data.y;do{u+=o[n.data.index]}while(n=n.next)}t.value=u}function y(t,r,a,s){if(!t.value)return!0;var l=t.x-n.x,h=t.y-n.y,v=s-r,y=l*l+h*h;if(v*v/c<y)return y<f&&(0===l&&(y+=(l=i())*l),0===h&&(y+=(h=i())*h),y<u&&(y=Math.sqrt(u*y)),n.vx+=l*t.value*e/y,n.vy+=h*t.value*e/y),!0;if(!(t.length||y>=f)){(t.data!==n||t.next)&&(0===l&&(y+=(l=i())*l),0===h&&(y+=(h=i())*h),y<u&&(y=Math.sqrt(u*y)));do{t.data!==n&&(v=o[t.data.index]*e/y,n.vx+=l*v,n.vy+=h*v)}while(t=t.next)}}return l.initialize=function(n){t=n,h()},l.strength=function(t){return arguments.length?(a="function"===typeof t?t:r(+t),h(),l):a},l.distanceMin=function(t){return arguments.length?(u=t*t,l):Math.sqrt(u)},l.distanceMax=function(t){return arguments.length?(f=t*t,l):Math.sqrt(f)},l.theta=function(t){return arguments.length?(c=t*t,l):Math.sqrt(c)},l}()).force("collide",function(t){var n,e,o=1,a=1;function u(){for(var t,r,u,c,l,h,p,d=n.length,x=0;x<a;++x)for(r=s(n,v,y).visitAfter(f),t=0;t<d;++t)u=n[t],h=e[u.index],p=h*h,c=u.x+u.vx,l=u.y+u.vy,r.visit(g);function g(t,n,e,r,a){var f=t.data,s=t.r,v=h+s;if(!f)return n>c+v||r<c-v||e>l+v||a<l-v;if(f.index>u.index){var y=c-f.x-f.vx,d=l-f.y-f.vy,x=y*y+d*d;x<v*v&&(0===y&&(x+=(y=i())*y),0===d&&(x+=(d=i())*d),x=(v-(x=Math.sqrt(x)))/x*o,u.vx+=(y*=x)*(v=(s*=s)/(p+s)),u.vy+=(d*=x)*v,f.vx-=y*(v=1-v),f.vy-=d*v)}}}function f(t){if(t.data)return t.r=e[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function c(){if(n){var r,i,o=n.length;for(e=new Array(o),r=0;r<o;++r)i=n[r],e[i.index]=+t(i,r,n)}}return"function"!==typeof t&&(t=r(null==t?1:+t)),u.initialize=function(t){n=t,c()},u.iterations=function(t){return arguments.length?(a=+t,u):a},u.strength=function(t){return arguments.length?(o=+t,u):o},u.radius=function(n){return arguments.length?(t="function"===typeof n?n:r(+n),c(),u):t},u}().radius(t=>t.radius)).force("link",function(t){var n,e,o,a,u,f=m,s=function(t){return 1/Math.min(a[t.source.index],a[t.target.index])},c=r(30),l=1;function h(r){for(var o=0,a=t.length;o<l;++o)for(var f,s,c,h,v,y,p,d=0;d<a;++d)s=(f=t[d]).source,h=(c=f.target).x+c.vx-s.x-s.vx||i(),v=c.y+c.vy-s.y-s.vy||i(),h*=y=((y=Math.sqrt(h*h+v*v))-e[d])/y*r*n[d],v*=y,c.vx-=h*(p=u[d]),c.vy-=v*p,s.vx+=h*(p=1-p),s.vy+=v*p}function v(){if(o){var r,i,s=o.length,c=t.length,l=x(o,f);for(r=0,a=new Array(s);r<c;++r)(i=t[r]).index=r,"object"!==typeof i.source&&(i.source=b(l,i.source)),"object"!==typeof i.target&&(i.target=b(l,i.target)),a[i.source.index]=(a[i.source.index]||0)+1,a[i.target.index]=(a[i.target.index]||0)+1;for(r=0,u=new Array(c);r<c;++r)i=t[r],u[r]=a[i.source.index]/(a[i.source.index]+a[i.target.index]);n=new Array(c),y(),e=new Array(c),p()}}function y(){if(o)for(var e=0,r=t.length;e<r;++e)n[e]=+s(t[e],e,t)}function p(){if(o)for(var n=0,r=t.length;n<r;++n)e[n]=+c(t[n],n,t)}return null==t&&(t=[]),h.initialize=function(t){o=t,v()},h.links=function(n){return arguments.length?(t=n,v(),h):t},h.id=function(t){return arguments.length?(f=t,h):f},h.iterations=function(t){return arguments.length?(l=+t,h):l},h.strength=function(t){return arguments.length?(s="function"===typeof t?t:r(+t),y(),h):s},h.distance=function(t){return arguments.length?(c="function"===typeof t?t:r(+t),p(),h):c},h}(u)),c=Mt(t=>{if(t.key===e)switch(t.type){case"abort":f.stop(),c();break;default:console.log("unknown message",t)}}),l=()=>{const t={};for(const n of a)t[n.name]={x:n.x,y:n.y};return t};f.on("tick",bt(()=>{n("tick",{nodes:l()})},200)),f.on("end",()=>{n("end",{nodes:l()}),c()})}Mt(t=>{const n=t.type,e=t.key,r=t.params,i={layout:jt},o=(t,n)=>Nt.postMessage({type:t,params:n,key:e});i[n]&&i[n](r,o,e)})}]);
//# sourceMappingURL=8888ab1b6dd4006530c4.worker.js.map