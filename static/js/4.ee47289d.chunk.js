(this.webpackJsonpmadmountain=this.webpackJsonpmadmountain||[]).push([[4],{38:function(t,n,e){"use strict";e.d(n,"c",(function(){return c})),e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return r})),e.d(n,"d",(function(){return i}));var c="active-link",a="https://api.weatherbit.io/v2.0/current",r="b5940b7483aa46439ac66def68e08595",i="M"},67:function(t,n,e){"use strict";e.r(n);var c=e(64),a=e(3),r=e(0),i=e(1),u=e(19),o=e(11),s=e(12);function l(){var t=Object(u.a)(["\ndisplay: flex;\nflex-direction: column;\nheight: 100vh;\nmax-height: 100%;\ntext-align: center;\nfont-size: 1rem;\ncolor: #FFF;\ntext-shadow: 2px 2px 2px #000000;\noverflow: hidden;\n\n& > h1 {\n@media(min-width: ",") {\n    font-size: 3rem;\n    margin-bottom: 1px;\n};\n\n@media(min-width: ",") {\n    font-size: 4rem;\n};\n};\n"]);return l=function(){return t},t}var b=o.default.main(l(),s.a.small,s.a.middle),f=e(47),d=e.n(f),h=e(38),j=Object(r.lazy)((function(){return e.e(5).then(e.bind(null,68))})),m=Object(r.lazy)((function(){return e.e(9).then(e.bind(null,65))})),O=Object(r.lazy)((function(){return e.e(7).then(e.bind(null,69))})),p=Object(r.lazy)((function(){return e.e(6).then(e.bind(null,66))}));n.default=function(){var t=Object(r.useState)([]),n=Object(c.a)(t,2),e=n[0],u=n[1],o=Object(r.useState)(""),s=Object(c.a)(o,2),l=s[0],f=s[1],x=Object(r.useState)(""),y=Object(c.a)(x,2),v=y[0],w=y[1];Object(r.useEffect)((function(){var t="".concat(h.b,"?city=").concat(v||"Warszawa","&units=").concat(h.d,"&key=").concat(h.a);d.a.get(t).then((function(t){return 204===t.status?g():u(t.data.data)})).catch((function(t){return console.log(t)}))}),[v]);var g=function(){alert("Wrong city, I am sorry")};return Object(a.jsxs)(b,{children:[Object(a.jsx)("h1",{children:"Weather"}),Object(a.jsx)(j,{city:l,getInputValue:function(t){f(t)},getCityFromInput:function(){if(""===l)return alert("Enter city, please");w(l),f("")}}),Object(a.jsxs)(i.c,{children:[Object(a.jsx)(i.a,{exact:!0,path:"/",component:function(){return Object(a.jsx)(m,{})}}),Object(a.jsx)(i.a,{path:"/weather",component:function(){return Object(a.jsx)(O,{weather:e})}}),Object(a.jsx)(i.a,{component:p})]})]})}}}]);
//# sourceMappingURL=4.ee47289d.chunk.js.map