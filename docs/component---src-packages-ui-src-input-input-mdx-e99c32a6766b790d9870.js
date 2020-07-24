(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{sn8f:function(t,n,e){"use strict";e.r(n),e.d(n,"_frontmatter",(function(){return m})),e.d(n,"default",(function(){return g}));e("5hJT"),e("W1QL"),e("K/PF"),e("t91x"),e("75LO"),e("PJhk"),e("oMRA"),e("6d4m");var o=e("/FXl"),a=e("TjRS"),i=e("ZFoC"),r=e("zTSN"),p=e("JaGv"),u=e("Jqqg"),l=e("VAz1"),c=e("QBCz"),s=e("r9yH"),b=e("nvLW");e("aD51");function d(){return(d=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}var m={};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/packages/ui/src/Input/Input.mdx"}});var y={_frontmatter:m},O=a.a;function g(t){var n,e,g,f,j=t.components,L=function(t,n){if(null==t)return{};var e,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,["components"]);return Object(o.b)(O,d({},y,L,{components:j,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"input"},"Input"),Object(o.b)("p",null,"Allows creating both single and multiline inputs with optional suggest popover."),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",d({parentName:"pre"},{className:"language-javascript"}),"import { Input } from '@rkta/ui';\n")),Object(o.b)("h2",{id:"basic-example"},"Basic Example"),Object(o.b)(i.c,{__position:0,__code:'<Input caption="Text Input" />',__scope:(n={props:L,DefaultLayout:a.a,Link:i.b,Playground:i.c,Props:i.d,Addon:r.a,ArrowKeys:p.a,Input:u.a,List:l.a,ListTitle:c.a,ListButton:s.a,New:b.a},n.DefaultLayout=a.a,n._frontmatter=m,n),mdxType:"Playground"},Object(o.b)(u.a,{caption:"Text Input",mdxType:"Input"})),Object(o.b)("h2",{id:"suggest-example"},"Suggest Example"),Object(o.b)(i.c,{__position:1,__code:"<Input caption=\"Suggest Input\">\n  {({ value, setValue }) => {\n    const search = option =>\n      !value || option.toLowerCase().includes(value.toLowerCase())\n    const options = ['London', 'Paris', 'New York'].filter(search)\n    const title = options.length ? 'Suggestions' : 'No Suggestions'\n    return (\n      <List rize={1}>\n        <ListTitle>{title}</ListTitle>\n        <ArrowKeys vertical>\n          {options.map(option => (\n            <ListButton key={option} onClick={() => setValue(option)}>\n              {option}\n            </ListButton>\n          ))}\n        </ArrowKeys>\n      </List>\n    )\n  }}\n</Input>",__scope:(e={props:L,DefaultLayout:a.a,Link:i.b,Playground:i.c,Props:i.d,Addon:r.a,ArrowKeys:p.a,Input:u.a,List:l.a,ListTitle:c.a,ListButton:s.a,New:b.a},e.DefaultLayout=a.a,e._frontmatter=m,e),mdxType:"Playground"},Object(o.b)(u.a,{caption:"Suggest Input",mdxType:"Input"},(function(t){var n=t.value,e=t.setValue,a=["London","Paris","New York"].filter((function(t){return!n||t.toLowerCase().includes(n.toLowerCase())})),i=a.length?"Suggestions":"No Suggestions";return Object(o.b)(l.a,{rize:1,mdxType:"List"},Object(o.b)(c.a,{mdxType:"ListTitle"},i),Object(o.b)(p.a,{vertical:!0,mdxType:"ArrowKeys"},a.map((function(t){return Object(o.b)(s.a,{key:t,onClick:function(){return e(t)},mdxType:"ListButton"},t)}))))}))),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)(i.c,{__position:2,__code:'<Input caption="Tiny" tiny outline={1} />\n<br />\n<Input caption="Small" small />\n<br />\n<Input caption="Normal" />\n<br />\n<Input caption="Disabled" disabled />\n<br />\n<Input caption="Read Only" readOnly />\n<br />\n<Input caption="Big" big fancy fitAll color="error" />\n<br />\n<Input\n  append={\n    <Addon>\n      <New />\n    </Addon>\n  }\n  caption="Huge"\n  huge\n  rize={3}\n  color="secondary"\n  outline={2}\n/>',__scope:(g={props:L,DefaultLayout:a.a,Link:i.b,Playground:i.c,Props:i.d,Addon:r.a,ArrowKeys:p.a,Input:u.a,List:l.a,ListTitle:c.a,ListButton:s.a,New:b.a},g.DefaultLayout=a.a,g._frontmatter=m,g),mdxType:"Playground"},Object(o.b)(u.a,{caption:"Tiny",tiny:!0,outline:1,mdxType:"Input"}),Object(o.b)("br",null),Object(o.b)(u.a,{caption:"Small",small:!0,mdxType:"Input"}),Object(o.b)("br",null),Object(o.b)(u.a,{caption:"Normal",mdxType:"Input"}),Object(o.b)("br",null),Object(o.b)(u.a,{caption:"Disabled",disabled:!0,mdxType:"Input"}),Object(o.b)("br",null),Object(o.b)(u.a,{caption:"Read Only",readOnly:!0,mdxType:"Input"}),Object(o.b)("br",null),Object(o.b)(u.a,{caption:"Big",big:!0,fancy:!0,fitAll:!0,color:"error",mdxType:"Input"}),Object(o.b)("br",null),Object(o.b)(u.a,{append:Object(o.b)(r.a,{mdxType:"Addon"},Object(o.b)(b.a,{mdxType:"New"})),caption:"Huge",huge:!0,rize:3,color:"secondary",outline:2,mdxType:"Input"})),Object(o.b)("h2",{id:"multiline-input"},"Multiline Input"),Object(o.b)(i.c,{__position:3,__code:'<Input\n  autoHeight\n  multiline\n  caption="Multiline"\n  bgColor="color3"\n  rize={1}\n  maxRows={4}\n/>',__scope:(f={props:L,DefaultLayout:a.a,Link:i.b,Playground:i.c,Props:i.d,Addon:r.a,ArrowKeys:p.a,Input:u.a,List:l.a,ListTitle:c.a,ListButton:s.a,New:b.a},f.DefaultLayout=a.a,f._frontmatter=m,f),mdxType:"Playground"},Object(o.b)(u.a,{autoHeight:!0,multiline:!0,caption:"Multiline",bgColor:"color3",rize:1,maxRows:4,mdxType:"Input"})),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)(i.d,{of:u.a,mdxType:"Props"}))}void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/packages/ui/src/Input/Input.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-packages-ui-src-input-input-mdx-e99c32a6766b790d9870.js.map