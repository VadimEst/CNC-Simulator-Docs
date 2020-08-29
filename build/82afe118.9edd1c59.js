(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),m=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},b=function(e){var t=m(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=m(n),p=a,d=b["".concat(o,".").concat(p)]||b[p]||s[p]||c;return n?i.a.createElement(d,r(r({ref:t},u),{},{components:n})):i.a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var u=2;u<c;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(2),i=n(6),c=(n(0),n(121)),o={id:"scoping",title:"Scoping",sidebar_label:"Scoping Document"},r={unversionedId:"dev/scoping",id:"dev/scoping",isDocsHomePage:!1,title:"Scoping",description:"Graphical interface (in Java FX)",source:"@site/docs/dev/scoping.md",slug:"/dev/scoping",permalink:"/docs/dev/scoping",editUrl:"https://github.com/timonweide/cnc-simulator-docs/edit/master/docs/dev/scoping.md",version:"current",sidebar_label:"Scoping Document",sidebar:"devSidebar",previous:{title:"Getting Started",permalink:"/docs/dev/getting-started"},next:{title:"Architecture",permalink:"/docs/dev/architecture"}},l=[{value:"Graphical interface (in Java FX)",id:"graphical-interface-in-java-fx",children:[]},{value:"Commands",id:"commands",children:[{value:"Execution of single commands",id:"execution-of-single-commands",children:[]},{value:"Execution of multiple commands",id:"execution-of-multiple-commands",children:[]},{value:"Possibility to pause current command or cancel command set",id:"possibility-to-pause-current-command-or-cancel-command-set",children:[]},{value:"G-Commands (Way-functions)",id:"g-commands-way-functions",children:[]},{value:"M-Commands (Control-functions)",id:"m-commands-control-functions",children:[]}]},{value:"Data",id:"data",children:[]},{value:"Programm Taschenkontur",id:"programm-taschenkontur",children:[]},{value:"Settings of the mortising machine with a local file (XML or JSON)",id:"settings-of-the-mortising-machine-with-a-local-file-xml-or-json",children:[]},{value:"Enclosing",id:"enclosing",children:[]},{value:"Documentation",id:"documentation",children:[]},{value:"Handing in",id:"handing-in",children:[]}],u={rightToc:l};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"graphical-interface-in-java-fx"},"Graphical interface (in Java FX)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Workspace GREY"),Object(c.b)("li",{parentName:"ul"},"Drill/mortising machine RED"),Object(c.b)("li",{parentName:"ul"},"Milled area BLACK"),Object(c.b)("li",{parentName:"ul"},"Home GREEN"),Object(c.b)("li",{parentName:"ul"},"Current Position, spindle status (On/Off + sense of rotation), coolant status, speed")),Object(c.b)("h2",{id:"commands"},"Commands"),Object(c.b)("h3",{id:"execution-of-single-commands"},"Execution of single commands"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Automatic counting of commands"),Object(c.b)("li",{parentName:"ul"},"Checking a command before execution (checking the following command while the first is being executed)")),Object(c.b)("h3",{id:"execution-of-multiple-commands"},"Execution of multiple commands"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Manual counting of the commands by the user"),Object(c.b)("li",{parentName:"ul"},"Checking the whole command set before the first execution"),Object(c.b)("li",{parentName:"ul"},"Input? \uf0e0Textarea/Import via JSON/XML")),Object(c.b)("h3",{id:"possibility-to-pause-current-command-or-cancel-command-set"},"Possibility to pause current command or cancel command set"),Object(c.b)("h3",{id:"g-commands-way-functions"},"G-Commands (Way-functions)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"G00: Verfahrbewegung im Eilgang (only without drilling/milling possible)"),Object(c.b)("li",{parentName:"ul"},"G01: straight (linear) Interpolation"),Object(c.b)("li",{parentName:"ul"},"G02: feed with circular arc, clockwise (circle Interpolation)"),Object(c.b)("li",{parentName:"ul"},"G03: feed with circular arc, anticlockwise"),Object(c.b)("li",{parentName:"ul"},"G28: return to HOME position")),Object(c.b)("h3",{id:"m-commands-control-functions"},"M-Commands (Control-functions)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"M00: programme stop (spindle, coolant, Vorschub aus)"),Object(c.b)("li",{parentName:"ul"},"M02: programme end"),Object(c.b)("li",{parentName:"ul"},"M03: spindle on: clockwise (right)"),Object(c.b)("li",{parentName:"ul"},"M04: spindle on: anticlockwise (left)"),Object(c.b)("li",{parentName:"ul"},"M05: spindle stop"),Object(c.b)("li",{parentName:"ul"},"M08: coolant on"),Object(c.b)("li",{parentName:"ul"},"M09: coolant off"),Object(c.b)("li",{parentName:"ul"},"M13: spindle on, clockwise and coolant on"),Object(c.b)("li",{parentName:"ul"},"M14: spindle on, anticlockwise and coolant on")),Object(c.b)("h2",{id:"data"},"Data"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Workspace: 1400mm x 1050mm"),Object(c.b)("li",{parentName:"ul"},"HOME-position at 0/0"),Object(c.b)("li",{parentName:"ul"},"Cutting speed:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Without coolant 2m/min"),Object(c.b)("li",{parentName:"ul"},"With coolant 3m/min"))),Object(c.b)("li",{parentName:"ul"},"Moving speed: 4-8m/min"),Object(c.b)("li",{parentName:"ul"},"Tool diameter: 15mm"),Object(c.b)("li",{parentName:"ul"},"weight: 89kg without tool")),Object(c.b)("h2",{id:"programm-taschenkontur"},"Programm Taschenkontur"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"N10 M03"),Object(c.b)("li",{parentName:"ul"},"N20 M08"),Object(c.b)("li",{parentName:"ul"},"N30 G01 X0 Y0"),Object(c.b)("li",{parentName:"ul"},"N40 G02 X0 Y10 I0 J5"),Object(c.b)("li",{parentName:"ul"},"N50 G01 X10 Y10"),Object(c.b)("li",{parentName:"ul"},"N60 G02 X10 Y0 I0 J-5"),Object(c.b)("li",{parentName:"ul"},"N70 G28"),Object(c.b)("li",{parentName:"ul"},"N80 M00")),Object(c.b)("h2",{id:"settings-of-the-mortising-machine-with-a-local-file-xml-or-json"},"Settings of the mortising machine with a local file (XML or JSON)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Cutting Speed (with/without coolant)"),Object(c.b)("li",{parentName:"ul"},"HOME-position"),Object(c.b)("li",{parentName:"ul"},"Colour")),Object(c.b)("h2",{id:"enclosing"},"Enclosing"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Focus on 2D"),Object(c.b)("li",{parentName:"ul"},"5/34 Way-functions"),Object(c.b)("li",{parentName:"ul"},"5(9)/21 Control-functions")),Object(c.b)("h2",{id:"documentation"},"Documentation"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Source text signature (Who did what)"),Object(c.b)("li",{parentName:"ul"},"Developer documentation (incl. UML-classdiagramm)"),Object(c.b)("li",{parentName:"ul"},"User documentation (incl. screenshots)")),Object(c.b)("h2",{id:"handing-in"},"Handing in"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Source code (according to demands)"),Object(c.b)("li",{parentName:"ul"},"Documentation"),Object(c.b)("li",{parentName:"ul"},"Programme as package / installation assist")))}m.isMDXComponent=!0}}]);