(this.webpackJsonpmadmountain=this.webpackJsonpmadmountain||[]).push([[4],{38:function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return c})),e.d(n,"d",(function(){return i}));var r="active-link",a="https://api.weatherbit.io/v2.0/current",c="b5940b7483aa46439ac66def68e08595",i="M"},70:function(t,n,e){"use strict";e.r(n);var r=e(47),a=e(3),c=e(0),i=e(1),u=e(19),o=e(11),s=e(12);function b(){var t=Object(u.a)(["\ndisplay: flex;\nflex-direction: column;\nheight: 100vh;\nmax-height: 100%;\ntext-align: center;\nfont-size: 1rem;\ncolor: #FFF;\ntext-shadow: 2px 2px 2px #000000;\noverflow: hidden;\n\n& > h1 {\n@media(min-width: ",") {\n    font-size: 1rem;\n    margin-bottom: 1px;\n};\n\n@media(min-width: ",") {\n    font-size: 2rem;\n};\n@media(min-height: 730px) and (orientation: portrait) {\n    font-size: 4rem;\n};\n};\n"]);return b=function(){return t},t}var f=o.default.main(b(),s.a.small,s.a.middle),l=e(38),d=e(48),h=e.n(d),j=e(50),p=e(51),m=e.n(p),O=Object(c.lazy)((function(){return e.e(5).then(e.bind(null,71))})),x=Object(c.lazy)((function(){return e.e(9).then(e.bind(null,68))})),v=Object(c.lazy)((function(){return e.e(7).then(e.bind(null,72))})),w=Object(c.lazy)((function(){return e.e(6).then(e.bind(null,69))}));n.default=function(){var t=Object(c.useState)(""),n=Object(r.a)(t,2),e=n[0],u=n[1],o=function(){var t=Object(c.useState)([]),n=Object(r.a)(t,2),e=n[0],a=n[1],i=Object(c.useState)("".concat(l.b,"?city=Warsaw&units=").concat(l.d,"&key=").concat(l.a)),u=Object(r.a)(i,2),o=u[0],s=u[1],b=Object(c.useState)(!1),f=Object(r.a)(b,2),d=f[0],p=f[1];Object(c.useEffect)((function(){!function(){var t=Object(j.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,p(!1),t.next=4,m.a.get(o);case 4:if(204!==(n=t.sent).status){t.next=7;break}return t.abrupt("return",O());case 7:return t.abrupt("return",a(n.data.data));case 10:t.prev=10,t.t0=t.catch(0),p(!0),console.log(t.t0);case 14:case 15:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}()()}),[o]);var O=function(){alert("Wrong city, I am sorry")};return[{weather:e,isError:d},s]}(),s=Object(r.a)(o,2),b=s[0],d=b.weather,p=b.isError,y=s[1];return Object(a.jsxs)(f,{children:[Object(a.jsx)("h1",{children:"Weather"}),Object(a.jsx)(O,{city:e,getInputValue:function(t){u(t)},getCityFromInput:function(){if(""===e)return alert("Enter city, please");y("".concat(l.b,"?city=").concat(e,"&units=").concat(l.d,"&key=").concat(l.a)),u("")}}),p&&Object(a.jsx)("div",{children:"Something went wrong..."}),Object(a.jsxs)(i.c,{children:[Object(a.jsx)(i.a,{exact:!0,path:"/weather",component:function(){return Object(a.jsx)(x,{})}}),Object(a.jsx)(i.a,{path:"/forecast",component:function(){return Object(a.jsx)(v,{weather:d})}}),Object(a.jsx)(i.a,{component:w})]})]})}}}]);
//# sourceMappingURL=4.169a07d7.chunk.js.map