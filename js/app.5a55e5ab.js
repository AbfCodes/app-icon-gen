(function(t){function n(n){for(var i,u,a=n[0],c=n[1],f=n[2],h=0,l=[];h<a.length;h++)u=a[h],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&l.push(r[u][0]),r[u]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);s&&s(n);while(l.length)l.shift()();return o.push.apply(o,f||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],i=!0,a=1;a<e.length;a++){var c=e[a];0!==r[c]&&(i=!1)}i&&(o.splice(n--,1),t=u(u.s=e[0]))}return t}var i={},r={app:0},o=[];function u(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=i,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)u.d(e,i,function(n){return t[n]}.bind(null,i));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var f=0;f<a.length;f++)n(a[f]);var s=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var i=e("85ec"),r=e.n(i);r.a},"33b3":function(t,n,e){"use strict";var i=e("61a8"),r=e.n(i);r.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("Identicon")],1)},o=[],u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-7 col-lg-8 col-md-8 col-sm-12 mx-auto text-center"},[e("div",{staticClass:"form-group mt-5"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"helpId",placeholder:"Something ...."},domProps:{value:t.text},on:{input:function(n){n.target.composing||(t.text=n.target.value)}}}),e("small",{staticClass:"form-text text-muted",attrs:{id:"helpId"}},[t._v(' " Any Text " To Identicon')])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-7 col-lg-8 col-md-8 col-sm-12 mx-auto text-center"},[e("h3",{staticClass:"h1 font-weight-bold text-light text-left"},[t._v("Identicon :")]),e("div",{domProps:{innerHTML:t._s(t.identicone())}})])])])},a=[],c=e("60ae"),f=e.n(c),s={data:function(){return{text:""}},methods:{identicone:function(){return f.a.toSvg(this.text,500)}}},h=s,l=(e("33b3"),e("2877")),v=Object(l["a"])(h,u,a,!1,null,"66177556",null),d=v.exports,p={name:"App",components:{Identicon:d}},g=p,b=(e("034f"),Object(l["a"])(g,r,o,!1,null,null,null)),m=b.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(m)}}).$mount("#app")},"60ae":function(t,n,e){(function(t){var i,r;e("cb29"),e("c975"),e("a15b"),e("a434"),e("a9e3"),e("b680"),e("d3b7"),e("ac1f"),e("25f0");var o=e("7037");(function(e,o){var u=o(e,e&&e.jQuery);"exports"in t?t.exports=u:(i=[],r=function(){return u}.apply(n,i),void 0===r||(t.exports=r))})("undefined"!==typeof self?self:this,(function(t,n){function e(t,n,e){for(var i=document.createElementNS("http://www.w3.org/2000/svg",n),r=2;r+1<arguments.length;r+=2)i.setAttribute(arguments[r],arguments[r+1]);t.appendChild(i)}function i(t){for(this.b=Math.min(Number(t.getAttribute("width"))||100,Number(t.getAttribute("height"))||100),this.a=t;t.firstChild;)t.removeChild(t.firstChild);t.setAttribute("viewBox","0 0 "+this.b+" "+this.b),t.setAttribute("preserveAspectRatio","xMidYMid meet")}function r(t){this.b=t,this.a='<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="0 0 '+t+" "+t+'" preserveAspectRatio="xMidYMid meet">'}function u(t){"undefined"!=typeof MutationObserver&&new MutationObserver((function(n){for(var e=0;e<n.length;e++){for(var i=n[e],r=i.addedNodes,o=0;r&&o<r.length;o++){var u=r[o];if(1==u.nodeType)if(C.B(u))t(u);else{u=u.querySelectorAll(C.C);for(var a=0;a<u.length;a++)t(u[a])}}"attributes"==i.type&&C.B(i.target)&&t(i.target)}})).observe(document.body,{childList:!0,attributes:!0,attributeFilter:[C.o,C.v,"width","height"],subtree:!0})}function a(t,n,e){return parseInt(t.substr(n,e),16)}function c(t){return(10*t+.5|0)/10}function f(){this.j=""}function s(t){this.b={},this.h=t,this.a=t.b}function h(t,n){var e=t.canvas.width,i=t.canvas.height;t.save(),this.b=t,n?this.a=n:(this.a=Math.min(e,i),t.translate((e-this.a)/2|0,(i-this.a)/2|0)),t.clearRect(0,0,this.a,this.a)}function l(t){this.h=t,this.c=y.a}function v(t,n){return t=n.R(t),[O.i(t,n.J,n.I(0)),O.i(t,n.A,n.w(.5)),O.i(t,n.J,n.I(1)),O.i(t,n.A,n.w(1)),O.i(t,n.A,n.w(0))]}function d(t){return function(t){for(var n=[],e=0;e<t.length;e++)for(var i=t[e],r=28;0<=r;r-=4)n.push((i>>>r&15).toString(16));return n.join("")}(function(t){for(var n=1732584193,e=4023233417,i=2562383102,r=271733878,o=3285377520,u=[n,e,i,r,o],a=0;a<t.length;a++){for(var c=t[a],f=16;80>f;f++){var s=c[f-3]^c[f-8]^c[f-14]^c[f-16];c[f]=s<<1|s>>>31}for(f=0;80>f;f++)s=(n<<5|n>>>27)+(20>f?1518500249+(e&i^~e&r):40>f?1859775393+(e^i^r):60>f?2400959708+(e&i^e&r^i&r):3395469782+(e^i^r))+o+c[f],o=r,r=i,i=e<<30|e>>>2,e=n,n=0|s;u[0]=n=u[0]+n|0,u[1]=e=u[1]+e|0,u[2]=i=u[2]+i|0,u[3]=r=u[3]+r|0,u[4]=o=u[4]+o|0}return u}(function(t){function n(t,n){for(var e=[],r=-1,o=0;o<n;o++)r=o/4|0,e[r]=(e[r]||0)+(i[t+o]<<8*(3-(3&o)));for(;16>++r;)e[r]=0;return e}var e=encodeURI(t),i=[];t=0;var r,o=[];for(r=0;r<e.length;r++){if("%"==e[r]){var u=a(e,r+1,2);r+=2}else u=e.charCodeAt(r);i[t++]=u}for(i[t++]=128,r=0;r+64<=t;r+=64)o.push(n(r,64));return e=t-r,r=n(r,e),64<e+8&&(o.push(r),r=n(0,0)),r[15]=8*t-8,o.push(r),o}(t)))}function p(t){return t|=0,0>t?"00":16>t?"0"+t.toString(16):256>t?t.toString(16):"ff"}function g(t,n,e){return e=0>e?e+6:6<e?e-6:e,p(255*(1>e?t+(n-t)*e:3>e?n:4>e?t+(n-t)*(4-e):t))}function b(t,n,e,i){function r(t,n){var e=a[t];return e&&1<e.length||(e=n),function(t){return t=e[0]+t*(e[1]-e[0]),0>t?0:1<t?1:t}}var u="object"==o(e)&&e||t.config||n.jdenticon_config||{},a=u.lightness||{};n=u.saturation||{},t="color"in n?n.color:n,n=n.grayscale;var c=u.backColor,f=u.padding;return{R:function(t){var n,e=u.hues;return e&&0<e.length&&(n=e[0|.999*t*e.length]),"number"==typeof n?(n/360%1+1)%1:t},A:"number"==typeof t?t:.5,J:"number"==typeof n?n:0,w:r("color",[.4,.8]),I:r("grayscale",[.3,.9]),F:O.parse(c),padding:"number"==typeof e?e:"number"==typeof f?f:i}}function m(t,n){this.x=t,this.y=n}function y(t,n,e,i){this.b=t,this.c=n,this.h=e,this.a=i}function w(t,n,e,i,r,o){function u(r,o,u,c,f){for(c=c?a(n,c,1):0,o=o[a(n,u,1)%o.length],t.G(d[p[r]]),r=0;r<f.length;r++)s.c=new y(e+f[r][0]*h,i+f[r][1]*h,h,c++%4),o(s,h,r);t.H()}function c(t){if(0<=t.indexOf(g))for(var n=0;n<t.length;n++)if(0<=p.indexOf(t[n]))return!0}o.F&&t.m(o.F);var f=.5+r*o.padding|0;r-=2*f;var s=new l(t),h=0|r/4;e+=0|f+r/2-2*h,i+=0|f+r/2-2*h,r=a(n,-7)/268435455;var d=v(r,o),p=[];for(o=0;3>o;o++){var g=a(n,8+o,1)%d.length;(c([0,4])||c([2,3]))&&(g=1),p.push(g)}u(0,M.K,2,3,[[1,0],[2,0],[2,3],[1,3],[0,1],[3,1],[3,2],[0,2]]),u(1,M.K,4,5,[[0,0],[3,0],[3,3],[0,3]]),u(2,M.O,1,null,[[1,1],[2,1],[2,2],[1,2]]),t.finish()}function x(n,e,r){if("string"===typeof n){if(C.L){n=document.querySelectorAll(n);for(var o=0;o<n.length;o++)x(n[o],e,r)}}else(o=C.B(n))&&(e=S.u(e)||null!=e&&S.s(e)||S.u(n.getAttribute(C.v))||n.hasAttribute(C.o)&&S.s(n.getAttribute(C.o)))&&(n=o==C.D?new s(new i(n)):new h(n.getContext("2d")),w(n,e,0,0,n.a,b(j,t,r,.08)))}function j(){C.L&&x(C.C)}function A(){var n=(j.config||t.jdenticon_config||{}).replaceMode;"never"!=n&&(j(),"observe"==n&&u(x))}i.prototype={m:function(t,n){n&&e(this.a,"rect","width","100%","height","100%","fill",t,"opacity",n)},c:function(t,n){e(this.a,"path","fill",t,"d",n)}},r.prototype={m:function(t,n){n&&(this.a+='<rect width="100%" height="100%" fill="'+t+'" opacity="'+n.toFixed(2)+'"/>')},c:function(t,n){this.a+='<path fill="'+t+'" d="'+n+'"/>'},toString:function(){return this.a+"</svg>"}};var C={D:1,N:2,v:"data-jdenticon-hash",o:"data-jdenticon-value",L:"undefined"!==typeof document&&"querySelectorAll"in document,B:function(t){if(t){var n=t.tagName;if(/svg/i.test(n))return C.D;if(/canvas/i.test(n)&&"getContext"in t)return C.N}}};C.C="["+C.v+"],["+C.o+"]";var M={O:[function(t,n){var e=.42*n;t.f([0,0,n,0,n,n-2*e,n-e,n,0,n])},function(t,n){var e=0|.5*n;t.b(n-e,0,e,0|.8*n,2)},function(t,n){var e=0|n/3;t.a(e,e,n-e,n-e)},function(t,n){var e=.1*n,i=6>n?1:8>n?2:0|.25*n;e=1<e?0|e:.5<e?1:e,t.a(i,i,n-e-i,n-e-i)},function(t,n){var e=0|.15*n,i=0|.5*n;t.g(n-i-e,n-i-e,i)},function(t,n){var e=.1*n,i=4*e;3<i&&(i|=0),t.a(0,0,n,n),t.f([i,i,n-e,i,i+(n-i-e)/2,n-e],!0)},function(t,n){t.f([0,0,n,0,n,.7*n,.4*n,.4*n,.7*n,n,0,n])},function(t,n){t.b(n/2,n/2,n/2,n/2,3)},function(t,n){t.a(0,0,n,n/2),t.a(0,n/2,n/2,n/2),t.b(n/2,n/2,n/2,n/2,1)},function(t,n){var e=.14*n,i=4>n?1:6>n?2:0|.35*n;e=8>n?e:0|e,t.a(0,0,n,n),t.a(i,i,n-i-e,n-i-e,!0)},function(t,n){var e=.12*n,i=3*e;t.a(0,0,n,n),t.g(i,i,n-e-i,!0)},function(t,n){t.b(n/2,n/2,n/2,n/2,3)},function(t,n){var e=.25*n;t.a(0,0,n,n),t.l(e,e,n-e,n-e,!0)},function(t,n,e){var i=.4*n;e||t.g(i,i,1.2*n)}],K:[function(t,n){t.b(0,0,n,n,0)},function(t,n){t.b(0,n/2,n,n/2,0)},function(t,n){t.l(0,0,n,n)},function(t,n){var e=n/6;t.g(e,e,n-2*e)}]};f.prototype={f:function(t){for(var n="M"+c(t[0].x)+" "+c(t[0].y),e=1;e<t.length;e++)n+="L"+c(t[e].x)+" "+c(t[e].y);this.j+=n+"Z"},g:function(t,n,e){e=e?0:1;var i=c(n/2),r=c(n);this.j+="M"+c(t.x)+" "+c(t.y+n/2)+"a"+i+","+i+" 0 1,"+e+" "+r+",0a"+i+","+i+" 0 1,"+e+" "+-r+",0"}},s.prototype={m:function(t){t=/^(#......)(..)?/.exec(t);var n=t[2]?a(t[2],0)/255:1;this.h.m(t[1],n)},G:function(t){this.c=this.b[t]||(this.b[t]=new f)},H:function(){},f:function(t){this.c.f(t)},g:function(t,n,e){this.c.g(t,n,e)},finish:function(){for(var t in this.b)this.h.c(t,this.b[t].j)}},h.prototype={m:function(t){var n=this.b,e=this.a;n.fillStyle=O.M(t),n.fillRect(0,0,e,e)},G:function(t){this.b.fillStyle=O.M(t),this.b.beginPath()},H:function(){this.b.fill()},f:function(t){var n,e=this.b;for(e.moveTo(t[0].x,t[0].y),n=1;n<t.length;n++)e.lineTo(t[n].x,t[n].y);e.closePath()},g:function(t,n,e){var i=this.b;n/=2,i.moveTo(t.x+n,t.y+n),i.arc(t.x+n,t.y+n,n,0,2*Math.PI,e),i.closePath()},finish:function(){this.b.restore()}},l.prototype={f:function(t,n){var e=n?-2:2,i=this.c,r=[];for(n=n?t.length-2:0;n<t.length&&0<=n;n+=e)r.push(i.l(t[n],t[n+1]));this.h.f(r)},g:function(t,n,e,i){t=this.c.l(t,n,e,e),this.h.g(t,e,i)},a:function(t,n,e,i,r){this.f([t,n,t+e,n,t+e,n+i,t,n+i],r)},b:function(t,n,e,i,r,o){t=[t+e,n,t+e,n+i,t,n+i,t,n],t.splice((r||0)%4*2,2),this.f(t,o)},l:function(t,n,e,i,r){this.f([t+e/2,n,t+e,n+i/2,t+e/2,n+i,t,n+i/2],r)}};var S={u:function(t){return/^[0-9a-f]{11,}$/i.test(t)&&t},s:function(t){return d(null==t?"":""+t)}},O={S:function(t,n,e){return"#"+p(t)+p(n)+p(e)},parse:function(t){if(/^#[0-9a-f]{3,8}$/i.test(t)){if(6>t.length){var n=t[1],e=t[2],i=t[3];return t=t[4]||"","#"+n+n+e+e+i+i+t+t}if(7==t.length||8<t.length)return t}},M:function(t){var n=a(t,7,2);if(isNaN(n))return t;var e=a(t,1,2),i=a(t,3,2);return t=a(t,5,2),"rgba("+e+","+i+","+t+","+(n/255).toFixed(2)+")"},P:function(t,n,e){return 0==n?(t=p(255*e),"#"+t+t+t):(n=.5>=e?e*(n+1):e+n-e*n,e=2*e-n,"#"+g(e,n,6*t+2)+g(e,n,6*t)+g(e,n,6*t-2))},i:function(t,n,e){var i=[.55,.5,.5,.46,.6,.55,.55][6*t+.5|0];return O.P(t,n,.5>e?e*i*2:i+(e-.5)*(1-i)*2)}};return y.prototype={l:function(t,n,e,i){var r=this.b+this.h,o=this.c+this.h;return 1===this.a?new m(r-n-(i||0),this.c+t):2===this.a?new m(r-t-(e||0),o-n-(i||0)):3===this.a?new m(this.b+n,o-t-(e||0)):new m(this.b+t,this.c+n)}},y.a=new y(0,0,0,0),j.drawIcon=function(n,e,i,r){if(!n)throw Error("No canvas specified.");n=new h(n,i),w(n,S.u(e)||S.s(e),0,0,i,b(j,t,r,0))},j.toSvg=function(n,e,i){var o=new r(e),u=new s(o);return w(u,S.u(n)||S.s(n),0,0,e,b(j,t,i,.08)),o.toString()},j.update=x,j.version="2.2.0",n&&(n.fn.jdenticon=function(t,n){return this.each((function(e,i){x(i,t,n)})),this}),"function"===typeof setTimeout&&setTimeout(A,0),j}))}).call(this,e("62e4")(t))},"61a8":function(t,n,e){},"85ec":function(t,n,e){}});
//# sourceMappingURL=app.5a55e5ab.js.map