(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{199:function(e,a,t){"use strict";t(31),t(93),t(136),t(137);var n=t(0),l=t.n(n),r=(t(233),t(202));a.a=function(e){return function(a){var t,n;function c(){return a.apply(this,arguments)||this}return n=a,(t=c).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,c.prototype.render=function(){return this.props.location.search.includes(r.r)?l.a.createElement("div",{className:"showcase","data-name":this.props.meta.name},l.a.createElement(e,this.props)):l.a.createElement(e,this.props)},c}(l.a.Component)}},200:function(e,a,t){"use strict";t(22),t(93);var n=t(0),l=t.n(n),r=t(21),c=t(234),i=t.n(c);a.a=function(e){return function(a){return l.a.createElement(r.Location,null,function(t){var n=t.location,r=t.navigate;return l.a.createElement(e,Object.assign({},a,{location:n,navigate:r,search:n.search?i.a.parse(n.search):{}}))})}}},201:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var n=t(0),l=t.n(n),r=t(66),c=t.n(r);t.d(a,"a",function(){return c.a});t(207),t(9).default.enqueue;var i=l.a.createContext({});function s(e){var a=e.staticQueryData,t=e.data,n=e.query,r=e.render,c=t?t.data:a[n]&&a[n].data;return l.a.createElement(l.a.Fragment,null,c&&r(c),!c&&l.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var a=e.data,t=e.query,n=e.render,r=e.children;return l.a.createElement(i.Consumer,null,function(e){return l.a.createElement(s,{data:a,query:t,render:n||r,staticQueryData:e})})}},202:function(e,a,t){"use strict";t.d(a,"m",function(){return n}),t.d(a,"r",function(){return l}),t.d(a,"g",function(){return r}),t.d(a,"p",function(){return c}),t.d(a,"c",function(){return i}),t.d(a,"h",function(){return s}),t.d(a,"j",function(){return o}),t.d(a,"n",function(){return m}),t.d(a,"l",function(){return u}),t.d(a,"f",function(){return d}),t.d(a,"e",function(){return E}),t.d(a,"k",function(){return g}),t.d(a,"i",function(){return v}),t.d(a,"q",function(){return h}),t.d(a,"o",function(){return p}),t.d(a,"d",function(){return _}),t.d(a,"s",function(){return f}),t.d(a,"a",function(){return b}),t.d(a,"b",function(){return N});var n="right",l="showcase",r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,c="nameIsEmpty",i="companyIsEmpty",s="emailIsEmpty",o="emailIsNotFormatted",m="messageIsEmpty",u="https://formsubmit.io/send/hello@thesquaredev.com",d="We got your message. Thank you.",E="Something went wrong. Please try again.",g="Please provide a valid email",v="Please enter an email address",h="Please enter your name",p="Please enter a message to send",_="Please enter your organisation's name",f="OK",b="contain",N="cover"},207:function(e,a,t){var n;e.exports=(n=t(225))&&n.default||n},209:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=(t(232),t(199)),c=t(200),i=t(210),s=t.n(i);a.a=Object(c.a)(Object(r.a)(function(e){var a=e.meta,t=a.heading,n=a.headline,r=a.html,c=a.btnTxt,i=a.btnUrl,o=e.elemId;return l.a.createElement("section",{className:"banner",id:o},l.a.createElement("div",{className:"banner__bg"},l.a.createElement("div",{className:"banner__bg__img"})),l.a.createElement("div",{className:"container fullscreen"},l.a.createElement("div",{className:"row fullscreen banner__wrapper"},l.a.createElement("div",{className:"banner__text col-lg-6 col-md-8"},l.a.createElement("h5",{className:"banner__text__headline"},l.a.createElement("span",{className:"blink"},"_ "),n),l.a.createElement("h1",{className:"banner__text__heading"},t),l.a.createElement("div",{className:"banner__text__body",dangerouslySetInnerHTML:{__html:r}}),l.a.createElement(s.a,{className:"primary-btn",href:"#"+i},c)))))}))},211:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=(t(237),t(200)),c=t(199),i=function(e){var a=e.heading,t=e.icon,n=e.description;return l.a.createElement("div",{className:"single-offer d-flex flex-row"},l.a.createElement("div",{className:"icon"},l.a.createElement("img",{src:"/icons/"+t,alt:""})),l.a.createElement("div",{className:"desc"},a&&l.a.createElement("h3",{dangerouslySetInnerHTML:{__html:a}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))};a.a=Object(r.a)(Object(c.a)(function(e){var a=e.meta,t=a.heading,n=a.description,r=a.tiles,c=e.elemId;return l.a.createElement("section",{className:"grid section-gap",id:c},l.a.createElement("div",{className:"grid__content container"},l.a.createElement("div",{className:"row d-flex justify-content-center"},l.a.createElement("div",{className:"menu-content pb-60 col-lg-10"},l.a.createElement("div",{className:"title text-center"},l.a.createElement("h1",{className:"mb-10"},t),n&&l.a.createElement("p",null,n)))),l.a.createElement("div",{className:"row flex-wrap"},r.map(function(e,a){var t=e.heading,n=e.description,r=e.icon;return l.a.createElement(i,{heading:t,description:n,icon:r,key:a})}))))}))},212:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(201),c=(t(238),t(200)),i=t(199);a.a=Object(c.a)(Object(i.a)(function(e){var a=e.meta,t=a.heading,n=a.html,c=a.btnTxt,i=a.btnUrl,s=a.image,o=e.elemId;return l.a.createElement("section",{id:o,className:"callto-action-area relative section-gap",style:{backgroundImage:"url(/images/"+s+")"}},l.a.createElement("div",{className:"overlay overlay-bg"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row d-flex justify-content-center"},l.a.createElement("div",{className:"menu-content col-lg-9"},l.a.createElement("div",{className:"title text-center"},t&&l.a.createElement("h1",{className:"mb-10 text-white"},t),n&&l.a.createElement("p",{className:"text-white",dangerouslySetInnerHTML:{__html:n}}),c&&l.a.createElement(r.a,{to:i,className:"primary-btn",fragment:"contact"},c))))))}))},213:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(201),c=t(202),i=(t(240),t(200)),s=t(199),o=t(205),m=t.n(o),u=function(e){return m()({"image-text__image":!0,"col-lg-6":!0,"col-md-12":!0,"offset-lg-1":e===c.m,"order-lg-last":e===c.m})},d=function(e){return m()({"image-text__text":!0,"col-lg-5":!0,"col-md-12":!0,"offset-lg-1":e!==c.m})},E=function(e,a){return{backgroundImage:"url(/images/"+e+")",backgroundSize:a===c.a?c.a:c.b}};a.a=Object(i.a)(Object(s.a)(function(e){var a=e.meta,t=a.headline,n=a.heading,c=a.html,i=a.btnTxt,s=a.btnUrl,o=a.image,m=a.imagePosition,g=a.backgroundSize,v=e.elemId;return l.a.createElement("section",{className:"image-text section-gap",id:v},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:u(m),style:E(o,g)}),l.a.createElement("div",{className:d(m)},l.a.createElement("h6",null,t),l.a.createElement("h2",null,n),l.a.createElement("div",{className:"pt-20 pb-20",dangerouslySetInnerHTML:{__html:c}}),i&&l.a.createElement(r.a,{className:"primary-btn",to:s},i)))))}))},214:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(201),c=(t(241),t(200)),i=t(199),s=function(e){var a=e.headline,t=e.heading,n=e.icon,c=e.url;return l.a.createElement(r.a,{to:c,className:"card"},l.a.createElement("img",{src:"/icons/"+n,alt:""}),l.a.createElement("span",{className:"card__title",dangerouslySetInnerHTML:{__html:a}}),l.a.createElement("h3",{className:"card__heading",dangerouslySetInnerHTML:{__html:t}}))};a.a=Object(c.a)(Object(i.a)(function(e){var a=e.meta,t=a.heading,n=a.icon,r=a.cards,c=e.elemId;return l.a.createElement("section",{className:"cards section-gap",id:c},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"cards__wrapper"},t&&l.a.createElement("div",{className:"cards__heading"},l.a.createElement("h2",{dangerouslySetInnerHTML:{__html:t}}),l.a.createElement("img",{src:"/icons/"+n,alt:""})),r.map(function(e,a){var t=e.headline,n=e.heading,r=e.icon,c=e.url;return l.a.createElement(s,{headline:t,heading:n,icon:r,url:c,key:a})}))))}))},215:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=(t(242),t(200)),c=t(199),i=t(210),s=t.n(i);a.a=Object(r.a)(Object(c.a)(function(e){var a=e.meta,t=a.heading,n=a.description,r=(a.html,a.image),c=a.btnTxt,i=a.btnUrl,o=e.elemId;return l.a.createElement("section",{className:"hero",id:o},l.a.createElement("div",{className:"hero__bg"},l.a.createElement("div",{className:"hero__bg__img",style:{backgroundImage:"url(/images/"+r+")"}})),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-center justify-content-center"},l.a.createElement("div",{className:"col-lg-10"},l.a.createElement("div",{className:"generic-banner-content"},l.a.createElement("h1",{className:"text-white"},t),l.a.createElement("p",null,n),c&&l.a.createElement(s.a,{className:"primary-btn",href:"#"+i},c))))))}))},216:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=(t(243),t(200)),c=t(199),i=function(e){var a=e.heading,t=e.icon,n=e.description;return l.a.createElement("div",{className:"pill"},l.a.createElement("img",{src:"/icons/"+t,alt:""}),l.a.createElement("h3",{className:"pill__heading"},a),l.a.createElement("p",{className:"pill__description"},n))};a.a=Object(r.a)(Object(c.a)(function(e){var a=e.meta.pills,t=e.elemId;return l.a.createElement("section",{className:"pills",id:t},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"pills__wrapper"},a.map(function(e,a){var t=e.heading,n=e.icon,r=e.description;return l.a.createElement(i,{heading:t,icon:n,description:r,key:a})}))))}))},217:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=(t(244),t(200)),c=t(199),i=function(e){var a=e.heading,t=e.icon,n=e.description;return l.a.createElement("div",{className:"quarter"},l.a.createElement("div",{className:"quarter__image"},l.a.createElement("img",{src:"/icons/"+t,alt:""})),l.a.createElement("h3",{className:"quarter__heading",dangerouslySetInnerHTML:{__html:a}}),l.a.createElement("div",{className:"quarter__description",dangerouslySetInnerHTML:{__html:n}}))};a.a=Object(r.a)(Object(c.a)(function(e){var a=e.meta,t=a.heading,n=a.description,r=a.image,c=a.quarters,s=e.elemId;return l.a.createElement("section",{className:"quartet section-gap",id:s},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"quartet__heading"},t),l.a.createElement("p",{className:"quartet__description"},n),l.a.createElement("div",{className:"quartet__quarters"},l.a.createElement("div",{className:"quartet__separator"},l.a.createElement("img",{src:"/icons/"+r,alt:""})),c.map(function(e,a){var t=e.heading,n=e.icon,r=e.description;return l.a.createElement(i,{heading:t,icon:n,description:r,key:a})}))))}))},218:function(e,a,t){"use strict";var n=t(219),l=t(0),r=t.n(l),c=t(220),i=t.n(c),s=t(201),o=t(204),m=t(228),u=(t(229),function(){return r.a.createElement("footer",{id:"footer",className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"footer__logo col-md-3"},r.a.createElement("img",{src:"/images/logo.png",alt:"Squaredev"})),r.a.createElement("nav",{className:"footer__menu col-md-9"},r.a.createElement("div",{className:"footer__menu__col"},r.a.createElement("h5",null,"Solutions"),r.a.createElement("div",{className:"footer__menu__col__split"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.a,{to:"/solutions/credit-scoring"},r.a.createElement("div",{className:"footer__menu__item"},r.a.createElement("span",null,"Credit Scoring")))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/solutions/lending"},r.a.createElement("div",{className:"footer__menu__item"},r.a.createElement("span",null,"Lending"))))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.a,{to:"/solutions/machine-learning"},r.a.createElement("div",{className:"footer__menu__item"},r.a.createElement("span",null,"Machine learning")))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/solutions/knowledge-graphs"},r.a.createElement("div",{className:"footer__menu__item"},r.a.createElement("span",null,"Knowledge graphs")))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/solutions/open-banking-api"},r.a.createElement("div",{className:"footer__menu__item"},r.a.createElement("span",null,"Open Banking API"))))))),r.a.createElement("div",{className:"footer__menu__col"},r.a.createElement("h5",null,"Company"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.a,{to:"/company"},r.a.createElement("div",{className:"footer__menu__item"},r.a.createElement("span",null,"About us")))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/company/#contact2"},r.a.createElement("div",{className:"footer__menu__item"},r.a.createElement("span",null,"Contact us")))))),r.a.createElement("div",{className:"footer__menu__col"},r.a.createElement("h5",null,"Follow us"),r.a.createElement("div",{className:"footer__social"},r.a.createElement("a",{href:"https://twitter.com/thesquaredev",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{icon:m.c})),r.a.createElement("a",{href:"https://www.linkedin.com/company/thesquaredev/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{icon:m.b})),r.a.createElement("a",{href:"https://github.com/thesquaredev",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{icon:m.a})))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"footer__text col-12"},"Copyright © ",(new Date).getFullYear()," Squaredev, All rights reserved | Cookies | Policy"))))}),d=(t(230),t(205)),E=t.n(d),g=function(){return r.a.createElement("svg",{viewBox:"0 0 477.72 104.06667",height:"104.06667",width:"477.72",xmlSpace:"preserve",id:"svg2",version:"1.1"},r.a.createElement("defs",{id:"defs6"},r.a.createElement("clipPath",{id:"clipPath20",clipPathUnits:"userSpaceOnUse"},r.a.createElement("path",{id:"path18",d:"M 0,780.512 V 0 h 3582.91 v 780.512 z"}))),r.a.createElement("g",{transform:"matrix(1.3333333,0,0,-1.3333333,0,104.06667)",id:"g10"},r.a.createElement("g",{transform:"scale(0.1)",id:"g12"},r.a.createElement("g",{id:"g14"},r.a.createElement("g",{clipPath:"url(#clipPath20)",id:"g16"},r.a.createElement("path",{id:"path22",style:{fill:"#1c2034",fillOpacity:1,fillRule:"nonzero",stroke:"none"},d:"m 1438.13,152.449 c -37.41,31.692 -73.96,64.067 -110.41,97.024 l -35.47,-39.813 41.26,-35.129 c -9.77,-4.695 -21,-6.875 -33.3,-6.875 -44.89,0 -76.74,36.203 -76.74,79.649 v 0.715 c 0,43.433 31.12,78.914 76.01,78.914 44.89,0 76.75,-36.192 76.75,-79.629 v -0.731 c 0,-2.98 -0.14,-5.929 -0.41,-8.808 l 47.92,-41.953 c 6.91,15.859 10.77,33.25 10.77,51.492 v 0.715 c 0,72.039 -56.11,130.32 -134.3,130.32 -78.19,0 -135.02,-59.004 -135.02,-131.035 v -0.731 c 0,-72.043 56.11,-130.324 134.29,-130.324 28.24,0 53.94,7.969 75.31,21.73 l 27.87,-24.984 z m 1327.45,-32.078 h 95.41 c 74.52,0 135.7,49.492 135.7,126.758 v 0.801 c 0,77.363 -61.34,125.957 -135.7,125.957 h -95.41 z m 31.22,25.117 V 348.77 h 64.19 c 59.57,0 101.64,-42.059 101.64,-101.641 v -0.82 c 0,-59.707 -42.2,-100.821 -101.64,-100.821 z m 287.28,-25.117 h 185.51 v 24.297 h -154.7 v 91.328 h 134.34 v 24.297 h -134.34 v 89.277 h 152.66 v 24.317 h -183.47 z m 362.17,-2.031 h 34.08 l 102.58,255.547 h -33.36 l -85.45,-230.203 -85.44,230.203 h -34.99 z m -1810.72,-1.719 c 68.06,0 111.14,37.649 111.14,114.387 v 142.984 h -55.75 V 228.84 c 0,-40.188 -20.63,-60.82 -54.66,-60.82 -34.03,0 -54.66,21.367 -54.66,62.625 v 143.347 h -55.76 V 229.199 c 0,-74.57 41.64,-112.578 109.69,-112.578 z m 592.09,134.297 v 72.766 h 55.39 c 27.15,0 43.8,-12.305 43.8,-36.204 v -0.722 c 0,-21.356 -15.56,-35.84 -42.71,-35.84 z m -55.74,-130.313 h 55.74 v 81.086 h 43.81 l 54.3,-81.086 h 65.15 l -61.89,90.489 c 32.22,11.953 54.3,37.656 54.3,78.554 v 0.723 c 0,23.887 -7.6,43.801 -21.72,57.922 -16.65,16.648 -41.63,25.699 -73.85,25.699 h -115.84 z m 307.45,0 h 192.94 v 49.583 h -137.56 v 53.222 h 119.46 v 49.586 h -119.46 v 51.399 h 135.74 v 49.597 h -191.12 z m -551.19,253.387 h 49.23 l 102.44,-255.203 h -60.09 l -66.25,178.469 -66.24,-178.469 h -61.54 z M 989.141,116.984 c 54.659,0 93.029,28.231 93.029,78.543 v 0.735 c 0,44.16 -28.96,62.617 -80.36,76.015 -43.802,11.219 -54.665,16.649 -54.665,33.309 v 0.715 c 0,12.312 11.222,22.09 32.582,22.09 21.353,0 43.433,-9.426 65.883,-24.981 l 28.96,41.992 c -25.7,20.625 -57.21,32.207 -94.117,32.207 -51.769,0 -88.691,-30.402 -88.691,-76.367 v -0.722 c 0,-50.325 32.945,-64.446 83.984,-77.473 42.354,-10.859 51.044,-18.106 51.044,-32.219 v -0.73 c 0,-14.832 -13.76,-23.887 -36.571,-23.887 -28.949,0 -52.848,11.945 -75.653,30.773 l -32.941,-39.453 c 30.406,-27.148 69.141,-40.547 107.516,-40.547"}),r.a.createElement("path",{id:"path24",style:{fill:"#1c2034",fillOpacity:1,fillRule:"evenodd",stroke:"none"},d:"M 329.762,22.3047 C 222.551,35.2656 152.336,122.492 142.141,226.574 c -10.504,107.227 49.304,200.942 -4.442,349.153 -4.004,11.035 0.196,35.718 22.481,35.718 h 95.039 c 14.668,0 29.035,9.602 29.105,32.907 l 0.356,111.949 c 0.148,48.183 217.043,-33.125 99.539,-231.844 C 344.047,456.52 227.98,372.129 238.852,227.512 244.527,151.945 265.211,74.082 329.762,22.3047 Z M 112.898,762.848 V 665.16 c 0,-9.719 7.946,-17.66 17.665,-17.66 h 97.691 c 9.719,0 17.66,7.941 17.66,17.66 v 97.688 c 0,9.722 -7.941,17.664 -17.66,17.664 h -97.691 c -9.719,0 -17.665,-7.942 -17.665,-17.664 z M 0,738.168 V 687.25 c 0,-8.176 6.69531,-14.863 14.8672,-14.863 h 50.9141 c 8.1835,0 14.8671,6.687 14.8671,14.863 v 50.918 c 0,8.176 -6.6836,14.863 -14.8671,14.863 H 14.8672 C 6.69531,753.031 0,746.344 0,738.168 Z M 34.6328,633.234 v -38.347 c 0,-3.813 3.1211,-6.926 6.9336,-6.926 h 38.3438 c 3.8164,0 6.9296,3.113 6.9296,6.926 v 38.347 c 0,3.813 -3.1132,6.934 -6.9296,6.934 H 41.5664 c -3.8125,0 -6.9336,-3.121 -6.9336,-6.934"}),r.a.createElement("path",{id:"path26",style:{fill:"#1c2034",fillOpacity:1,fillRule:"evenodd",stroke:"none"},d:"m 685.777,563.422 c -8.593,-8.149 -22.031,-9.098 -31.808,-1.664 -9.766,7.437 -12.547,20.738 -7.149,31.316 8.606,8.149 22.043,9.098 31.809,1.668 9.766,-7.437 12.559,-20.738 7.148,-31.32 z M 557.379,45.1953 h 105.535 c 50.422,0 -7.285,30.4102 -49.48,41.7188 18.015,14.1409 52.468,51.9529 68.789,106.5039 25.84,86.387 -61.27,78.898 -58.606,42.961 C 628.395,172.238 591.195,99.4258 554.828,76.5938 537.203,65.5273 541.402,45.1953 557.379,45.1953 Z m 246.57,485.7457 c 1.262,33.997 -45.164,108.977 -84.297,126.446 -5.359,22.535 -17.82,44.156 -37.097,64.89 -6.739,-14.875 -13.477,-29.742 -20.215,-44.617 -12.383,2.442 -41.758,-3.234 -52.481,-5.305 -15.214,21.766 -33.3,35.477 -53.976,41.915 -3.106,-24.786 -6.211,-49.571 -9.305,-74.36 C 515.113,613.414 513.063,574.672 513.297,530.629 513.512,487.461 299.109,413.137 239.945,276.055 189.273,158.645 242.273,0 393.379,0 H 528.16 c 60.547,0 -11.582,42.8438 -67.207,57.1797 237.129,136.2383 72.664,356.9763 -119.191,238.7113 -6.367,-3.926 25.547,65.195 115.871,72.859 28.75,2.441 81.543,1.535 126.64,-63.164 10.938,-15.684 33.692,-33.016 25.762,13.906 -3.926,23.235 -17.461,55.774 -30.527,72.813 -36.68,47.832 9.57,81.925 69.004,81.925 86.816,0 153.75,10.969 155.437,56.711"}))))))},v=t(208),h=function(e,a){return E()({header:!0,"header-scrolled":e,"mobile-menu-visible":a})},p=function(e){return E()({nav__toggle:!0,"mobile-menu-visible":e})},_=function(e){return e?v.e:v.a},f=function(e){return E()({nav__menu:!0,"nav__menu--mobile":e})},b=function(e){var a=e.isScrolled,t=e.isMobileMenuVisible,n=e.toggleMobileMenu;return r.a.createElement("header",{className:h(a,t)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"nav"},r.a.createElement("div",{className:"nav__logo"},r.a.createElement(s.a,{to:"/"},r.a.createElement(g,{className:"logo"}))),r.a.createElement("div",{className:p(t),onClick:n},r.a.createElement(o.a,{icon:_(t)})),r.a.createElement("nav",{className:f(t)},r.a.createElement("ul",{className:"nav-menu sf-arrows"},r.a.createElement("li",null,r.a.createElement(s.a,{to:"/research"},"Research")),r.a.createElement("li",{className:"menu-has-children"},r.a.createElement("h5",{className:"menu-has-children__title"},"Solutions"),r.a.createElement("ul",{className:"nav-submenu nav-submenu--compact"},r.a.createElement("span",{className:"nav-submenu__col"},r.a.createElement("h6",null,"By Use Case"),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/solutions/credit-scoring"},r.a.createElement("img",{src:"/icons/user-credit-card-bold-green.png",alt:""}),r.a.createElement("div",{className:"nav-submenu__item"},r.a.createElement("span",null,"Credit Scoring"),r.a.createElement("span",null,"Improve your risk model")))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/solutions/lending"},r.a.createElement("img",{src:"/icons/credit-card-check-bold-green.png",alt:""}),r.a.createElement("div",{className:"nav-submenu__item"},r.a.createElement("span",null,"Lending"),r.a.createElement("span",null,"Verify income, liabilities & ID"))))),r.a.createElement("span",{className:"nav-submenu__col"},r.a.createElement("h6",null,"By Technology"),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/solutions/machine-learning"},r.a.createElement("img",{src:"/icons/robot-head-bold-green.png",alt:""}),r.a.createElement("div",{className:"nav-submenu__item"},r.a.createElement("span",null,"Machine Learning"),r.a.createElement("span",null,"Solve problems intelligently")))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/solutions/knowledge-graphs"},r.a.createElement("img",{src:"/icons/brain-icon-bold-green.png",alt:""}),r.a.createElement("div",{className:"nav-submenu__item"},r.a.createElement("span",null,"Knowledge graphs"),r.a.createElement("span",null,"Transform data to knowledge")))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/solutions/open-banking-api"},r.a.createElement("img",{src:"/icons/bank-bold-green.png",alt:""}),r.a.createElement("div",{className:"nav-submenu__item"},r.a.createElement("span",null,"Open Banking API"),r.a.createElement("span",null,"Integrate Open Banking data"))))))),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/company"},"Company")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/company/#contact2"},"Contact Us")))))))};t(231);var N=function(e){var a,t;function l(a){var t;return(t=e.call(this,a)||this)._isMounted=!1,t.state={isScrolled:!1,isMobileMenuVisible:!1},t.toggleMobileMenu=t.toggleMobileMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}t=e,(a=l).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var c=l.prototype;return c.toggleMobileMenu=function(){this.setState({isMobileMenuVisible:!this.state.isMobileMenuVisible})},c.componentDidMount=function(){var e=this;this._isMounted=!0,document.addEventListener("scroll",function(){var a=window.scrollY>10;a!==e.state.isScrolled&&e._isMounted&&e.setState({isScrolled:a})}),window.addEventListener("resize",function(){window.innerWidth>992&&e._isMounted&&e.setState({isMobileMenuVisible:!1})})},c.componentWillUnmount=function(){this._isMounted=!1},c.render=function(){var e=this;return r.a.createElement(s.b,{query:"1044757290",render:function(a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:"We make it possible to turn your organisation's big data into actionable insights and build a sustainable competitive advantage."},{name:"keywords",content:"Squaredev, software development, big data analytics, data visualisations, graph analytics, knowledge rraph, IOT, IIOT, augmented analytics, digital twins, machine learning, natural language processing, data silos"}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("script",{async:!0,src:"https://cdn.polyfill.io/v2/polyfill.js?features=IntersectionObserver"})),r.a.createElement(b,{isScrolled:e.state.isScrolled,isMobileMenuVisible:e.state.isMobileMenuVisible,toggleMobileMenu:e.toggleMobileMenu}),e.props.children,r.a.createElement(u,null))},data:n})},l}(r.a.Component);a.a=N},219:function(e){e.exports={data:{site:{siteMetadata:{title:"Data management & Open Banking"}}}}},225:function(e,a,t){"use strict";t.r(a);t(22);var n=t(0),l=t.n(n),r=t(125);a.default=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}}}]);
//# sourceMappingURL=2-bf254e935fd624d52f1e.js.map