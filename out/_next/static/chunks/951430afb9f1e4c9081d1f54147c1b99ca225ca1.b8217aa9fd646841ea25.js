(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/0+H":function(n,e,t){"use strict";e.__esModule=!0,e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=t("q1tI"))&&r.__esModule?r:{default:r},i=t("lwAK");function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.ampFirst,t=void 0!==e&&e,r=n.hybrid,o=void 0!==r&&r,i=n.hasQuery;return t||o&&(void 0!==i&&i)}},"8Kt/":function(n,e,t){"use strict";e.__esModule=!0,e.defaultHead=C,e.default=void 0;var r=c(t("q1tI")),o=c(t("Xuae")),i=t("lwAK"),a=t("FYa8"),u=t("/0+H");function c(n){return n&&n.__esModule?n:{default:n}}function C(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return n||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(n,e){return"string"===typeof e||"number"===typeof e?n:e.type===r.default.Fragment?n.concat(r.default.Children.toArray(e.props.children).reduce((function(n,e){return"string"===typeof e||"number"===typeof e?n:n.concat(e)}),[])):n.concat(e)}var s=["name","httpEquiv","charSet","itemProp"];function f(n,e){return n.reduce((function(n,e){var t=r.default.Children.toArray(e.props.children);return n.concat(t)}),[]).reduce(l,[]).reverse().concat(C(e.inAmpMode)).filter(function(){var n=new Set,e=new Set,t=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);n.has(a)?i=!1:n.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var u=0,c=s.length;u<c;u++){var C=s[u];if(o.props.hasOwnProperty(C))if("charSet"===C)t.has(C)?i=!1:t.add(C);else{var l=o.props[C],f=r[C]||new Set;f.has(l)?i=!1:(f.add(l),r[C]=f)}}}return i}}()).reverse().map((function(n,e){var t=n.key||e;return r.default.cloneElement(n,{key:t})}))}var d=(0,o.default)();function p(n){var e=n.children;return(r.default.createElement(i.AmpStateContext.Consumer,null,(function(n){return r.default.createElement(a.HeadManagerContext.Consumer,null,(function(t){return r.default.createElement(d,{reduceComponentsToState:f,handleStateChange:t,inAmpMode:(0,u.isInAmpMode)(n)},e)}))})))}p.rewind=d.rewind;var h=p;e.default=h},Bnag:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(n,e){n.exports=function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}},FYa8:function(n,e,t){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=t("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);e.HeadManagerContext=o},Ijbi:function(n,e,t){var r=t("WkPL");n.exports=function(n){if(Array.isArray(n))return r(n)}},RIqP:function(n,e,t){var r=t("Ijbi"),o=t("EbDI"),i=t("ZhPi"),a=t("Bnag");n.exports=function(n){return r(n)||o(n)||i(n)||a()}},Xuae:function(n,e,t){"use strict";var r=t("lwsE"),o=t("PJYZ"),i=t("W8MJ"),a=t("7W2i"),u=t("a1gu"),c=t("Nsbk"),C=t("RIqP");function l(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=c(n);if(e){var o=c(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return u(this,t)}}e.__esModule=!0,e.default=void 0;var s=t("q1tI"),f=!1;e.default=function(){var n,e=new Set;function t(t){n=t.props.reduceComponentsToState(C(e),t.props),t.props.handleStateChange&&t.props.handleStateChange(n)}return(function(u){a(C,u);var c=l(C);function C(n){var i;return r(this,C),i=c.call(this,n),f&&(e.add(o(i)),t(o(i))),i}return i(C,null,[{key:"rewind",value:function(){var t=n;return n=void 0,e.clear(),t}}]),i(C,[{key:"componentDidMount",value:function(){e.add(this),t(this)}},{key:"componentDidUpdate",value:function(){t(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),t(this)}},{key:"render",value:function(){return null}}]),C}(s.Component))}},"hnI/":function(n,e,t){"use strict";var r=t("h4VS"),o=t("q1tI"),i=t.n(o),a=t("8Kt/"),u=t.n(a),c=t("vOnD"),C=t("YFqc"),l=t.n(C),s=t("g3QL"),f=t("ek7M"),d=i.a.createElement;function p(){var n=Object(r.a)(["width: 200px;"]);return p=function(){return n},n}function h(){var n=Object(r.a)(["\n  ",";\n"]);return h=function(){return n},n}function m(){var n=Object(r.a)(["\n  background-color: ",";\n  position: absolute;\n  width: ","px;\n  height: 2px;\n  border-radius: ",";\n  top: 50%;\n  left: 0;\n  right: 0;\n  transition-duration: 0.22s;\n  transition-property: transform;\n  transition-delay: ",";\n  transform: rotate(",");\n  transition-timing-function: cubic-bezier(\n    ",'\n  );\n  &:before,\n  &:after {\n    content: "";\n    display: block;\n    background-color: ',";\n    position: absolute;\n    left: auto;\n    right: 0;\n    width: ","px;\n    height: 2px;\n    transition-timing-function: ease;\n    transition-duration: 0.15s;\n    transition-property: transform;\n    border-radius: 4px;\n  }\n  &:before {\n    width: ",";\n    top: ",";\n    opacity: ",";\n    transition: ",";\n  }\n  &:after {\n    width: ",";\n    bottom: ",";\n    transform: rotate(",");\n    transition: ",";\n  }\n"]);return m=function(){return n},n}function b(){var n=Object(r.a)(["\n  position: relative;\n  display: inline-block;\n  width: ","px;\n  height: 24px;\n"]);return b=function(){return n},n}function v(){var n=Object(r.a)(["display: flex;"]);return v=function(){return n},n}function g(){var n=Object(r.a)(["\n  ","\n  overflow: visible;\n  margin: 0 -12px 0 0;\n  padding: 15px;\n  cursor: pointer;\n  transition-timing-function: linear;\n  transition-duration: 0.15s;\n  transition-property: opacity, filter;\n  text-transform: none;\n  color: inherit;\n  border: 0;\n  background-color: transparent;\n  display: none;\n  ",";\n"]);return g=function(){return n},n}function x(){var n=Object(r.a)(["\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  align-items: center;\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n"]);return x=function(){return n},n}function w(){var n=Object(r.a)(["\n  margin: 0 10px;\n  position: relative;\n  font-size: ",";\n  a {\n    text-decoration: none;\n    font-size: ",";\n    color: ",";\n    padding: 5px;\n    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n    &:hover {\n      border-bottom: 4px solid ",";\n      transition: all 0.2s ease 0s;\n      color: ",";\n    }\n  }\n"]);return w=function(){return n},n}function y(){var n=Object(r.a)(["display: none;"]);return y=function(){return n},n}function M(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  ",";\n"]);return M=function(){return n},n}function k(){var n=Object(r.a)(["\n  ",";\n  font-size: ",";\n  margin-left: 10px;\n"]);return k=function(){return n},n}function O(){var n=Object(r.a)(["\n  ",";\n  a {\n    display: block;\n    color: ",";\n  }\n"]);return O=function(){return n},n}function Z(){var n=Object(r.a)(["\n  ",";\n  position: relative;\n  width: 100%;\n  color: ",";\n  font-family: ",";\n  counter-reset: item 0;\n  z-index: 12;\n"]);return Z=function(){return n},n}function j(){var n=Object(r.a)(["padding: 0 25px;"]);return j=function(){return n},n}function L(){var n=Object(r.a)(["padding: 0 40px;"]);return L=function(){return n},n}function S(){var n=Object(r.a)(["\n  ",";\n  position: fixed;\n  top: 0;\n  padding: 0px 50px;\n  background-color: ",";\n  height: 100px;\n  transition: ",";\n  z-index: 11;\n  filter: none !important;\n  pointer-events: auto !important;\n  user-select: auto !important;\n  width: 100%;\n  ",";\n  ",";\n"]);return S=function(){return n},n}var H=f.c.colors,_=f.c.fontSizes,A=f.c.fonts,V=c.b.header(S(),f.a.flexBetween,H.navy,f.c.transition,f.b.desktop(L()),f.b.tablet(j())),I=c.b.nav(Z(),f.a.flexBetween,H.lightestSlate,A.SFMono),E=c.b.div(O(),f.a.flexCenter,H.green),q=c.b.a(k(),f.a.smallButton,_.md),z=c.b.div(M(),f.b.tablet(y())),P=c.b.li(w(),_.md,_.md,H.lightSlate,H.green,H.green),R=c.b.ol(x()),B=c.b.div(g(),f.a.flexCenter,f.b.tablet(v())),D=c.b.div(b(),f.c.hamburgerWidth),F=c.b.div(m(),H.green,f.c.hamburgerWidth,f.c.borderRadius,(function(n){return n.menuOpen?"0.12s":"0s"}),(function(n){return n.menuOpen?"225deg":"0deg"}),(function(n){return n.menuOpen?"0.215, 0.61, 0.355, 1":"0.55, 0.055, 0.675, 0.19"}),H.green,f.c.hamburgerWidth,(function(n){return n.menuOpen?"100%":"120%"}),(function(n){return n.menuOpen?"0":"-10px"}),(function(n){return n.menuOpen?0:1}),(function(n){return n.menuOpen?f.c.hamBeforeActive:f.c.hamBefore}),(function(n){return n.menuOpen?"100%":"80%"}),(function(n){return n.menuOpen?"0":"-10px"}),(function(n){return n.menuOpen?"-90deg":"0"}),(function(n){return n.menuOpen?f.c.hamAfterActive:f.c.hamAfter})),W=c.b.img(h(),f.b.phone(p())),N=function(){var n=Object(o.useState)({menuOpen:!1}),e=n[0],t=n[1],r=function(){t({menuOpen:!e.menuOpen})},i=e.menuOpen;return d(V,null,d(I,null,d(E,null,d("a",{href:"#intro","aria-label":"home"},d(W,{src:"/assets/Images/naseeb-ali.png",alt:""}))),d(B,{onClick:r},d(D,null,d(F,{menuOpen:i}))),d(z,null,d(R,null,d(P,null,d(l.a,{href:"#about"},d("a",null,"About"))),d(P,null,d(l.a,{href:"#work"},d("a",null,"Work"))),d(P,null,d(l.a,{href:"#contact"},d("a",null,"Contact")))),d(q,{external:!0,href:"/assets/Images/naseebali-v2.pdf",target:"_blank",rel:"nofollow noopener noreferrer"},"Resume"))),d(s.b,{menuOpen:i,toggleMenu:r}))},K={facebook:"M9.34469 10.5025L9.86325 7.12348H6.62096V4.93071C6.62096 4.00627 7.07388 3.10517 8.526 3.10517H10V0.228284C10 0.228284 8.66239 0 7.38349 0C4.71337 0 2.96806 1.61841 2.96806 4.54817V7.12348H0V10.5025H2.96806V18.6711H6.62096V10.5025H9.34469Z",twitter:"M21.7623 2.15825C21.0686 2.4742 20.3062 2.65964 19.5576 2.79014C19.9148 2.72832 20.4367 2.08957 20.6497 1.82857C20.9725 1.43021 21.2335 0.976899 21.3846 0.489248C21.4052 0.448038 21.4189 0.399959 21.3777 0.372486C21.3296 0.351881 21.3022 0.365618 21.2609 0.379354C20.423 0.825796 19.5576 1.15548 18.6372 1.38213C18.5617 1.40274 18.5067 1.38213 18.4587 1.33405C18.3831 1.24476 18.3076 1.16921 18.232 1.10053C17.8474 0.77085 17.4284 0.509853 16.9614 0.324408C16.3501 0.0771478 15.677 -0.0327455 15.0108 0.00846448C14.3651 0.0496745 13.7333 0.23512 13.1632 0.530458C12.5931 0.832665 12.078 1.24476 11.6728 1.74615C11.2538 2.26815 10.9447 2.87943 10.7799 3.53192C10.6288 4.15694 10.6425 4.78196 10.7318 5.41384C10.7455 5.51687 10.7387 5.5306 10.6425 5.51687C7.0435 4.98114 4.05577 3.68989 1.63125 0.928821C1.52822 0.81206 1.46641 0.81206 1.38399 0.93569C0.326267 2.52227 0.841391 5.07729 2.16011 6.3342C2.33869 6.49904 2.51726 6.67075 2.71645 6.82185C2.64776 6.83559 1.76175 6.73943 0.978758 6.3342C0.875733 6.26552 0.820786 6.30673 0.813918 6.42349C0.807049 6.5952 0.820786 6.75317 0.841392 6.93861C1.04744 8.55267 2.16011 10.0431 3.69175 10.62C3.87033 10.6956 4.07638 10.7643 4.26869 10.7986C3.9184 10.8879 3.55438 10.9429 2.55847 10.8604C2.43484 10.8398 2.38677 10.9016 2.43484 11.0184C3.18349 13.0652 4.80442 13.6696 6.02011 14.0199C6.18495 14.0473 6.34293 14.0473 6.50777 14.0885C6.5009 14.1023 6.48716 14.1023 6.48029 14.116C6.07506 14.7273 4.68079 15.1875 4.03517 15.4141C2.85381 15.8262 1.56943 16.0117 0.319398 15.8881C0.120216 15.8606 0.0790062 15.8606 0.0240595 15.8881C-0.0308872 15.9224 0.0171911 15.9705 0.0790061 16.0185C0.333134 16.1834 0.587263 16.3345 0.855128 16.4787C1.64499 16.8977 2.47605 17.2342 3.34146 17.4746C7.80588 18.7041 12.8335 17.8043 16.1852 14.4732C18.8158 11.8563 19.7362 8.25046 19.7362 4.64459C19.7362 4.50035 19.901 4.4248 20.004 4.34925C20.6909 3.83413 21.2335 3.21598 21.7417 2.52914C21.8585 2.37804 21.8516 2.24067 21.8516 2.17886C21.8516 2.17199 21.8516 2.15825 21.8516 2.15825C21.8448 2.10331 21.8516 2.11704 21.7623 2.15825Z",youtube:"M25.7063 5.59805C25.7063 2.50754 23.1988 0 20.1082 0H5.59805C2.50754 0 0 2.50754 0 5.59805V12.402C0 15.4925 2.50754 18 5.59805 18H20.1162C23.2067 18 25.7143 15.4925 25.7143 12.402V5.59805H25.7063ZM16.5546 9.34339L10.7649 12.5217C10.5093 12.6575 10.2857 12.4738 10.2857 12.1863V5.66992C10.2857 5.38243 10.5173 5.19876 10.7728 5.3425L16.6025 8.68855C16.858 8.8323 16.8101 9.20763 16.5546 9.34339Z",linkdin:"M4.32157 2.16078C4.32157 3.35415 3.35415 4.32157 2.16078 4.32157C0.967416 4.32157 0 3.35415 0 2.16078C0 0.967416 0.967416 0 2.16078 0C3.35415 0 4.32157 0.967416 4.32157 2.16078ZM18.8447 17.6988V11.0396C18.8447 7.31391 16.8542 5.57874 14.1957 5.57874C12.0546 5.57874 11.0986 6.75735 10.5617 7.58237V6.16149C10.5617 5.99125 10.4242 5.86029 10.2605 5.86029H6.82944C6.66574 5.86029 6.53478 5.9978 6.53478 6.16149C6.56681 8.0064 6.53617 15.7047 6.5287 17.5827L6.52823 17.6988C6.52823 17.869 6.66574 18 6.82944 18H10.2605C10.4307 18 10.5617 17.8625 10.5617 17.6988V11.2164C10.5617 10.8563 10.5879 10.4962 10.6927 10.2342C10.9873 9.50743 11.6486 8.76098 12.7618 8.76098C14.2219 8.76098 14.8047 9.87411 14.8047 11.5045V17.6988C14.8047 17.869 14.9422 18 15.1059 18H18.5435C18.7137 18 18.8447 17.8625 18.8447 17.6988ZM10.5617 7.58237V7.62166H10.5355C10.5388 7.61511 10.5437 7.60856 10.5486 7.60201C10.5535 7.59547 10.5584 7.58892 10.5617 7.58237ZM4.00077 18H0.563162C0.399466 18 0.261962 17.869 0.261962 17.6988V6.16149C0.261962 5.99125 0.399466 5.86029 0.563162 5.86029H4.00077C4.17102 5.86029 4.30197 5.9978 4.30197 6.16149V17.6988C4.30197 17.869 4.16447 18 4.00077 18Z",github:"M12.5 0C5.59375 0 0 5.73904 0 12.8172C0 18.4812 3.58125 23.2844 8.54687 24.9779C9.17187 25.0985 9.40104 24.7018 9.40104 24.3616C9.40104 24.0572 9.39062 23.2507 9.38542 22.1823C5.90833 22.9551 5.175 20.4627 5.175 20.4627C4.60625 18.9834 3.78437 18.5878 3.78437 18.5878C2.65208 17.7932 3.87187 17.8095 3.87187 17.8095C5.12708 17.8986 5.78646 19.1301 5.78646 19.1301C6.90104 21.0899 8.7125 20.5236 9.42708 20.1964C9.53958 19.3671 9.86146 18.803 10.2188 18.4823C7.44271 18.1617 4.525 17.0595 4.525 12.1487C4.525 10.7498 5.00937 9.60638 5.81146 8.70965C5.67083 8.38574 5.24896 7.0825 5.92083 5.31731C5.92083 5.31731 6.96771 4.97384 9.35833 6.63142C10.3583 6.34664 11.4208 6.20534 12.4833 6.19882C13.5458 6.20534 14.6083 6.34664 15.6083 6.63142C17.9833 4.97384 19.0302 5.31731 19.0302 5.31731C19.7021 7.0825 19.2802 8.38574 19.1552 8.70965C19.9521 9.60638 20.4365 10.7498 20.4365 12.1487C20.4365 17.0726 17.5146 18.1563 14.7333 18.4715C15.1708 18.8562 15.5771 19.6421 15.5771 20.8432C15.5771 22.5584 15.5615 23.9366 15.5615 24.3529C15.5615 24.6888 15.7802 25.0898 16.4208 24.9616C21.4219 23.279 25 18.4726 25 12.8172C25 5.73904 19.4031 0 12.5 0V0Z",gmail:"M11.829 4.45894L14.7446 2.07197C13.1859 0.777867 11.1837 0 8.99995 0C5.5216 0 2.50414 1.97307 1.00627 4.86098L1.00631 4.86098C0.362953 6.1002 0 7.50758 0 8.99999C0 10.5434 0.388195 11.9957 1.07258 13.2651L1.07257 13.2651C2.59269 16.0843 5.57257 18 8.99998 18C11.1328 18 13.092 17.2582 14.6344 16.0185L14.6339 16.018L14.6339 16.018L14.634 16.018L14.6345 16.0185C16.2203 14.7437 17.3651 12.9422 17.8032 10.8791C17.9323 10.2729 18 9.64434 18 9C18 8.42537 17.9461 7.86312 17.8428 7.31869H14.0806H9.19789V10.8791H14.0104C13.5772 12.0353 12.7549 13.0011 11.7026 13.6182L11.7024 13.6182C10.9098 14.0835 9.98601 14.3501 8.99998 14.3501C6.70597 14.3501 4.74921 12.9061 3.98916 10.8777L3.98918 10.8776C3.76963 10.2936 3.64996 9.66065 3.64989 8.99999C3.64989 8.39126 3.75177 7.80626 3.93869 7.26131C4.66065 5.16013 6.65401 3.64992 8.99995 3.64992C10.0389 3.64992 11.0086 3.94615 11.829 4.45894Z",instagram:"M16.2421 0.0691032C14.1261 -0.0253118 8.88493 -0.0207285 6.76701 0.0691032C4.90593 0.152518 3.2643 0.582427 1.94084 1.84832C-0.0384124 3.74149 -0.0201549 6.22333 0.00556914 9.72014C0.00859192 10.131 0.0117178 10.556 0.0117178 10.9956C0.0117178 11.407 0.00941386 11.8047 0.00718589 12.1892C-0.0137558 15.8036 -0.0279862 18.2596 1.94084 20.1428C3.92372 22.0387 6.54703 22.02 10.1615 21.9943C10.5946 21.9912 11.0419 21.9881 11.5041 21.9881H11.5665C15.9498 21.9881 17.4723 21.9881 19.0318 21.4106C21.1621 20.6195 22.7702 18.7981 22.9274 15.5266C23.0271 13.5017 23.0213 8.48946 22.9274 6.46366C22.7376 2.60181 20.5708 0.259767 16.2421 0.0691032ZM19.5914 18.7431C18.2561 20.0204 16.4444 20.0164 12.5314 20.0078C12.1955 20.007 11.8441 20.0063 11.4763 20.0063C11.2506 20.0063 11.0313 20.0064 10.8181 20.0066C6.50475 20.0095 4.6971 20.0108 3.36109 18.7294C1.97118 17.4062 1.99417 15.3931 2.02753 12.4714C2.03292 11.9986 2.03859 11.5021 2.03859 10.9809C2.03859 10.5389 2.03445 10.1077 2.03043 9.68858C1.98836 5.30557 1.959 2.24634 6.80918 2.00874L6.86417 2.00688C8.04163 1.96707 8.4361 1.95374 11.4628 1.95374L11.506 1.98124C11.9436 1.98124 12.3731 1.97748 12.7929 1.97381C17.2719 1.93465 20.6403 1.9052 20.8603 6.55166C20.9149 7.71122 20.9273 8.05955 20.9273 10.9947C20.9273 11.2578 20.9275 11.5119 20.9278 11.7574V11.7596C20.9317 15.7386 20.9334 17.4534 19.5914 18.7431ZM11.5043 5.35107C8.24309 5.35107 5.60288 7.8792 5.60288 10.9958C5.60288 14.1152 8.24597 16.6405 11.5043 16.6405C14.7655 16.6405 17.4057 14.1124 17.4057 10.9958C17.4057 7.87645 14.7626 5.35107 11.5043 5.35107ZM11.5043 14.6597C9.38734 14.6597 7.67384 13.0198 7.67384 10.9958C7.67384 8.97184 9.3883 7.33196 11.5043 7.33196C13.6203 7.33196 15.3348 8.97184 15.3348 10.9958C15.3357 13.0198 13.6213 14.6597 11.5043 14.6597ZM19.0181 5.12814C19.0181 5.85664 18.4007 6.4472 17.6391 6.4472C16.8775 6.4472 16.26 5.85664 16.26 5.12814C16.26 4.39965 16.8775 3.80908 17.6391 3.80908C18.4007 3.80908 19.0181 4.39965 19.0181 5.12814Z",react:"M8.03062 22.9841C7.54041 22.9841 7.10787 22.8829 6.74262 22.6804C5.3633 21.9167 4.8827 19.7176 5.46423 16.7962C5.52388 16.4957 5.59434 16.1886 5.67519 15.8759C5.42208 15.8062 5.17707 15.7326 4.94055 15.655C3.50356 15.1857 2.28284 14.56 1.41296 13.8469C0.49021 13.0924 0 12.2689 0 11.473C0 9.94561 1.74938 8.45041 4.68583 7.47508C5.00699 7.36809 5.34119 7.26744 5.68704 7.17332C5.61179 6.8834 5.54545 6.59814 5.48835 6.31835C5.2048 4.92896 5.15193 3.6546 5.33456 2.62866C5.53641 1.51071 6.0122 0.714807 6.71868 0.323756C8.15086 -0.472149 10.5875 0.346759 13.0674 2.45844C13.2165 2.58523 13.3663 2.71761 13.5165 2.85533C13.7416 2.64779 13.9669 2.45008 14.1919 2.26293C15.3069 1.3336 16.4363 0.652714 17.4551 0.293866C18.5653 -0.0971854 19.5265 -0.0971853 20.2282 0.289266C21.6652 1.08057 22.141 3.50969 21.4681 6.6197C21.4279 6.80645 21.383 6.99646 21.3334 7.18943C21.6309 7.272 21.9196 7.35959 22.1988 7.45208C23.5974 7.91214 24.7748 8.51022 25.6111 9.1727C26.5194 9.8996 27 10.6955 27 11.473C27 13.0602 25.044 14.6658 21.8912 15.6642C21.7276 15.7161 21.56 15.7664 21.3885 15.8149C21.4495 16.0507 21.5034 16.2821 21.5499 16.5087C21.8431 17.9349 21.8912 19.2599 21.6845 20.3364C21.4634 21.4819 20.9636 22.2963 20.2427 22.6965C19.8823 22.8989 19.4545 23.0001 18.9787 23.0001C17.6715 23.0001 16.0134 22.2456 14.2833 20.8195C14.0395 20.6186 13.7952 20.4054 13.5511 20.1806C13.3636 20.3539 13.1767 20.5186 12.9904 20.6746C11.8466 21.6315 10.6691 22.3308 9.59256 22.6942C9.03026 22.8875 8.50161 22.9841 8.03062 22.9841ZM12.7442 19.3953C12.5725 19.5536 12.4014 19.7041 12.231 19.8465C10.4913 21.3002 8.98701 21.8799 8.03062 21.8799C7.73746 21.8799 7.49716 21.8247 7.31453 21.7235C6.57441 21.314 6.06017 19.6946 6.59363 17.0033C6.64841 16.7251 6.71404 16.439 6.78994 16.1462C7.88866 16.3795 9.10796 16.5483 10.4233 16.6499C11.1701 17.6576 11.952 18.5827 12.7442 19.3953ZM14.3563 19.3873C14.5848 19.598 14.8123 19.7967 15.0378 19.9822C17.2053 21.7672 18.9259 22.1536 19.6708 21.7396C20.4446 21.3117 21.0117 19.5589 20.4253 16.7249C20.3825 16.5188 20.3331 16.3083 20.2774 16.0936C19.164 16.3399 17.9303 16.522 16.623 16.6337C15.8754 17.6701 15.1148 18.5943 14.3563 19.3873ZM21.0753 14.7527C21.2306 14.7084 21.3825 14.6626 21.5308 14.6152C24.4961 13.6721 25.8514 12.3241 25.8514 11.473C25.8514 11.036 25.5053 10.5207 24.8758 10.0192C24.1501 9.43954 23.0927 8.91047 21.8288 8.49181C21.5695 8.4068 21.3013 8.32609 21.025 8.24981C20.6931 9.27666 20.2492 10.3663 19.7095 11.4806C20.2777 12.6248 20.7364 13.7229 21.0753 14.7527ZM19.0546 12.7581C19.417 13.5477 19.7205 14.3085 19.9615 15.0316C19.1797 15.2029 18.3345 15.3407 17.4435 15.4431C17.7227 15.0195 17.9992 14.5808 18.2722 14.1279C18.5469 13.6713 18.808 13.2139 19.0546 12.7581ZM19.0428 10.208C19.3853 9.43967 19.676 8.6906 19.909 7.97522C19.1299 7.80528 18.3022 7.66717 17.4404 7.56315C17.7206 7.98326 17.9952 8.4155 18.2626 8.85788C18.5375 9.31255 18.7977 9.76299 19.0428 10.208ZM15.963 7.42083C16.4108 8.05301 16.8479 8.72033 17.2678 9.41456C17.6939 10.1188 18.0831 10.8114 18.4333 11.4874C18.0827 12.1796 17.6945 12.8805 17.2725 13.5804C16.8486 14.283 16.4169 14.9499 15.9808 15.5765C15.1786 15.6314 14.3496 15.6596 13.5048 15.6596C12.6593 15.6596 11.8423 15.6351 11.0592 15.5869C10.5997 14.9454 10.1573 14.275 9.74164 13.5873C9.32333 12.8955 8.93747 12.1974 8.58793 11.5024C8.93782 10.8039 9.32197 10.1055 9.73467 9.42031L9.73674 9.42147C10.1543 8.72877 10.5939 8.05952 11.0489 7.42185C11.8553 7.36298 12.6788 7.33246 13.5048 7.33246C14.3378 7.33246 15.1608 7.36246 15.963 7.42083ZM16.6021 6.36491C17.8757 6.47902 19.0948 6.66323 20.2188 6.91231C20.2627 6.73996 20.3027 6.57027 20.3387 6.40347C20.9683 3.47289 20.4252 1.67865 19.6515 1.25079C19.2574 1.03456 18.6182 1.06217 17.8492 1.3336C16.9601 1.64645 15.9557 2.25833 14.9464 3.10024C14.7398 3.27229 14.5328 3.45392 14.3257 3.6445C15.0925 4.43664 15.8604 5.35459 16.6021 6.36491ZM13.5173 4.43375C14.047 4.98325 14.5783 5.59749 15.1014 6.26423C14.573 6.2404 14.0383 6.22832 13.5 6.22832C12.9687 6.22832 12.4412 6.24004 11.92 6.2631C12.4418 5.60472 12.9773 4.99127 13.5173 4.43375ZM12.7082 3.64379C11.9244 4.4501 11.1518 5.36664 10.4149 6.36258C9.14415 6.47495 7.92832 6.65622 6.80679 6.90022C6.73708 6.63098 6.67557 6.36624 6.62256 6.10672C6.36304 4.85075 6.31498 3.7098 6.47358 2.81729C6.61295 2.04438 6.90611 1.49691 7.30021 1.28068C8.07397 0.852826 9.96752 1.29908 12.3032 3.28655C12.4377 3.40076 12.5727 3.51991 12.7082 3.64379ZM7.11786 7.96609C7.88993 7.80137 8.71358 7.66637 9.56915 7.56394C9.28558 7.98734 9.0093 8.42163 8.74191 8.8648C8.47362 9.30991 8.21809 9.7576 7.97623 10.2056C7.6408 9.44376 7.35293 8.69296 7.11786 7.96609ZM5.99606 8.23643C5.67445 8.32359 5.36527 8.41647 5.07031 8.51482C2.36935 9.41654 1.15824 10.6495 1.15824 11.473C1.15824 12.3287 2.46066 13.6767 5.31542 14.6106C5.53044 14.681 5.75327 14.7479 5.98354 14.8114C6.32418 13.7454 6.77236 12.6314 7.3132 11.5055C6.77853 10.394 6.33459 9.2924 5.99606 8.23643ZM7.9761 12.8026C7.63462 13.5786 7.34048 14.3442 7.10168 15.0808C7.86918 15.2413 8.70065 15.3695 9.58646 15.464C9.29717 15.0334 9.01514 14.5912 8.742 14.1394C8.47364 13.6959 8.21803 13.2496 7.9761 12.8026ZM11.9244 16.735C12.4396 16.7541 12.9668 16.7637 13.5048 16.7637C14.0565 16.7637 14.6023 16.7519 15.1392 16.7287C14.611 17.4165 14.0795 18.0424 13.5506 18.599C13.0032 18.0329 12.4567 17.4063 11.9244 16.735ZM15.9173 11.4734C15.9173 12.749 14.8371 13.783 13.5047 13.783C12.1723 13.783 11.0921 12.749 11.0921 11.4734C11.0921 10.1979 12.1723 9.16394 13.5047 9.16394C14.8371 9.16394 15.9173 10.1979 15.9173 11.4734Z",suqareSpace:"M13.3654 3.79533C12.9698 3.34515 12.3282 3.34515 11.9328 3.79533L5.48545 11.1301C4.69377 12.03 3.41113 12.03 2.62003 11.1301C1.8281 10.2299 1.8281 8.77054 2.62003 7.8698L8.9433 0.676552C8.15203 -0.2239 6.8689 -0.2239 6.07763 0.676552L1.18678 6.24033C-0.395594 8.04086 -0.395594 10.9596 1.18678 12.7603C2.76957 14.5609 5.33509 14.5609 6.91787 12.7603L13.3654 5.42536C13.7608 4.97528 13.7608 4.24541 13.3654 3.79533V3.79533ZM15.5146 1.35061C13.9318 -0.450202 11.3662 -0.450202 9.78346 1.35061L3.33624 8.68505C2.94085 9.13486 2.94085 9.86519 3.33624 10.3151C3.73187 10.7652 4.37311 10.7652 4.76883 10.3151L11.2166 2.98064C12.0079 2.08019 13.2905 2.08019 14.0816 2.98064C14.4777 3.43045 15.119 3.43045 15.5146 2.98064C15.9103 2.53009 15.9103 1.80069 15.5146 1.35061H15.5146ZM17.6638 8.68505C17.2682 8.23543 16.6265 8.23543 16.2308 8.68505L9.78346 16.0198C8.99219 16.92 7.70914 16.92 6.91787 16.0198C6.52248 15.57 5.88108 15.57 5.48545 16.0198C5.08924 16.4701 5.08924 17.1999 5.48545 17.6495C7.06758 19.4502 9.63375 19.4502 11.2165 17.6495L17.6638 10.3151C18.0592 9.86528 18.0592 9.13495 17.6638 8.68505ZM19.8132 6.24042C18.2304 4.44008 15.6645 4.44008 14.0821 6.24042L7.63433 13.5753C7.2387 14.025 7.2387 14.7553 7.63433 15.2051C8.03021 15.6555 8.67178 15.6555 9.06717 15.2051L15.5146 7.87036C16.3056 6.97001 17.5889 6.97001 18.38 7.87036C19.1712 8.77063 19.1712 10.23 18.38 11.1302L12.0567 18.324C12.848 19.2239 14.1304 19.2239 14.9224 18.324L19.8132 12.7602C21.3956 10.9594 21.3956 8.04077 19.8132 6.24042V6.24042Z"},J=i.a.createElement,T=function(n){var e=n.icon,t=n.className,r=n.color,o=n.width,i=n.height,a=n.rotate,u=n.fill,c={svg:{display:"inline-block",verticalAlign:"middle",transform:"rotate(".concat(a,"deg)"),color:"".concat(r||"inherit")}};return J("svg",{"aria-hidden":!0,width:o,height:i,style:c.svg,fill:"none",className:t,id:"svg1",xmlns:"http://www.w3.org/2000/svg"},J("path",{fillRule:"evenodd",clipRule:"evenodd",d:K[e],fill:u||"currentColor"}))};T.defaultProps={color:"white"};var Y=T,Q=i.a.createElement;function U(){var n=Object(r.a)(["\n  background: rgba(100, 255, 218, 0.07);\n  border: 1px solid ",";\n  box-shadow: 0px 0px 4px ",";\n  border-radius: 12px;\n  height: 40px;\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  a {\n    display: flex;\n  }\n\n  &:hover {\n    svg {\n      transform: rotate(360deg);\n      transition: transform 1s;\n    }\n  }\n"]);return U=function(){return n},n}function X(){var n=Object(r.a)(["\n  margin: 10px;\n\n  .footer-row {\n    display: flex;\n    justify-content: space-between;\n    max-width: 250px;\n    margin: auto;\n  }\n  .footer--last-sec {\n    font-size: 14px;\n    font-family: ",";\n    /* word-spacing: 0.2rem; */\n    /* letter-spacing: 0.1rem; */\n    color: white;\n    text-align: center;\n    margin-top: 20px;\n  }\n"]);return X=function(){return n},n}var $=f.c.colors,G=(f.c.fontSizes,f.c.fonts),nn=c.b.footer(X(),G.SFMono),en=c.b.div(U(),$.green,$.green),tn=function(){return Q(nn,null,Q("div",{className:"footer-row"},Q(s.a,{external:!0,target:"_blank",href:"https://www.facebook.com/naseeb.ali.1447",title:"Facebook"},Q(en,null,Q(Y,{color:$.green,width:10,height:18.67,icon:"facebook"}))),Q(s.a,{external:!0,target:"_blank",title:"Twitter",href:"https://twitter.com/naseebali_na2"},Q(en,null,Q(Y,{color:$.green,width:21.85,height:18,icon:"twitter"}))),Q(s.a,{external:!0,target:"_blank",title:"LinkeIn",href:"https://www.linkedin.com/in/naseeb-ali-235997125/"},Q(en,null,Q(Y,{color:$.green,width:18.84,height:18,icon:"linkdin"}))),Q(s.a,{external:!0,title:"Github",target:"_blank",href:"https://github.com/naseebali"},Q(en,null,Q(Y,{color:$.green,width:25,height:25,icon:"github"}))),Q(s.a,{external:!0,target:"_blank",href:"https://www.instagram.com/naseebali_na2/",title:"Instagram"},Q(en,null,Q(Y,{color:$.green,width:23,height:22,icon:"instagram"})))),Q("div",{className:"footer--last-sec"},Q("p",null,"Developed By Naseeb Ali 2023 \xa9 Punjab, PK")))},rn=i.a.createElement;function on(){var n=Object(r.a)(["margin: 0px;"]);return on=function(){return n},n}function an(){var n=Object(r.a)(["margin: 0px 50px;"]);return an=function(){return n},n}function un(){var n=Object(r.a)(["\n  /* margin: auto; */\n  max-width: 1440px;\n  min-height: 100vh;\n  margin: 0px auto;\n  ","\n  ","\n"]);return un=function(){return n},n}function cn(){var n=Object(r.a)(["\n  min-height: 100vh;\n"]);return cn=function(){return n},n}f.c.colors,f.c.fontSizes,f.c.fonts;var Cn=c.b.div(cn()),ln=c.b.main(un(),f.b.mediumLcd(an()),f.b.thone(on()));e.a=function(n){var e=n.children;return rn(Cn,null,rn(u.a,null,rn("title",null,"Naseeb Ali | Software Engineer"),rn("link",{rel:"icon",href:"/favicon.ico"}),rn("link",{rel:"shortcut icon",href:"/static/favicon.ico"})),rn(N,null),rn(ln,null,e),rn(tn,null))}},lwAK:function(n,e,t){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=t("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o}}]);