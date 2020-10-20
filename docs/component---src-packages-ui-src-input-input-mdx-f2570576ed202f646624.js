(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{sn8f:function(t,n,e){"use strict";e.r(n),e.d(n,"_frontmatter",(function(){return y})),e.d(n,"default",(function(){return j}));var o=e("Fcif"),a=e("+I+c"),i=e("/FXl"),p=e("TjRS"),r=e("ZFoC"),u=e("zTSN"),c=e("JaGv"),l=e("Jqqg"),s=e("VAz1"),b=e("QBCz"),d=e("2/Je"),m=e("nvLW"),y=(e("aD51"),{});void 0!==y&&y&&y===Object(y)&&Object.isExtensible(y)&&!y.hasOwnProperty("__filemeta")&&Object.defineProperty(y,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/packages/ui/src/Input/Input.mdx"}});var O={_frontmatter:y},g=p.a;function j(t){var n,e,j,L,f=t.components,_=Object(a.a)(t,["components"]);return Object(i.b)(g,Object(o.a)({},O,_,{components:f,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"input"},"Input"),Object(i.b)("p",null,"Allows creating both single and multiline inputs with optional suggest popover."),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import { Input } from '@rkta/ui';\n")),Object(i.b)("h2",{id:"basic-example"},"Basic Example"),Object(i.b)(r.c,{__position:0,__code:'<Input caption="Text Input" />',__scope:(n={props:_,DefaultLayout:p.a,Link:r.b,Playground:r.c,Props:r.d,Addon:u.a,ArrowKeys:c.a,Input:l.a,List:s.a,ListTitle:b.a,ListButton:d.ListButton,New:m.a},n.DefaultLayout=p.a,n._frontmatter=y,n),mdxType:"Playground"},Object(i.b)(l.a,{caption:"Text Input",mdxType:"Input"})),Object(i.b)("h2",{id:"suggest-example"},"Suggest Example"),Object(i.b)(r.c,{__position:1,__code:"<Input caption=\"Suggest Input\">\n  {({ value, setValue }) => {\n    const search = option =>\n      !value || option.toLowerCase().includes(value.toLowerCase())\n    const options = ['London', 'Paris', 'New York'].filter(search)\n    const title = options.length ? 'Suggestions' : 'No Suggestions'\n    return (\n      <List rize={1}>\n        <ListTitle>{title}</ListTitle>\n        <ArrowKeys vertical>\n          {options.map(option => (\n            <ListButton key={option} onClick={() => setValue(option)}>\n              {option} 1\n            </ListButton>\n          ))}\n        </ArrowKeys>\n      </List>\n    )\n  }}\n</Input>",__scope:(e={props:_,DefaultLayout:p.a,Link:r.b,Playground:r.c,Props:r.d,Addon:u.a,ArrowKeys:c.a,Input:l.a,List:s.a,ListTitle:b.a,ListButton:d.ListButton,New:m.a},e.DefaultLayout=p.a,e._frontmatter=y,e),mdxType:"Playground"},Object(i.b)(l.a,{caption:"Suggest Input",mdxType:"Input"},(function(t){var n=t.value,e=t.setValue,o=["London","Paris","New York"].filter((function(t){return!n||t.toLowerCase().includes(n.toLowerCase())})),a=o.length?"Suggestions":"No Suggestions";return Object(i.b)(s.a,{rize:1,mdxType:"List"},Object(i.b)(b.a,{mdxType:"ListTitle"},a),Object(i.b)(c.a,{vertical:!0,mdxType:"ArrowKeys"},o.map((function(t){return Object(i.b)(d.ListButton,{key:t,onClick:function(){return e(t)},mdxType:"ListButton"},t," 1")}))))}))),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)(r.c,{__position:2,__code:'<Input caption="Tiny" tiny outline={1} />\n<br />\n<Input caption="Small" small />\n<br />\n<Input caption="Normal" />\n<br />\n<Input caption="Disabled" disabled />\n<br />\n<Input caption="Read Only" readOnly />\n<br />\n<Input caption="Big" big fancy fitAll color="error" />\n<br />\n<Input\n  append={\n    <Addon>\n      <New />\n    </Addon>\n  }\n  caption="Huge"\n  huge\n  rize={3}\n  color="secondary"\n  outline={2}\n/>',__scope:(j={props:_,DefaultLayout:p.a,Link:r.b,Playground:r.c,Props:r.d,Addon:u.a,ArrowKeys:c.a,Input:l.a,List:s.a,ListTitle:b.a,ListButton:d.ListButton,New:m.a},j.DefaultLayout=p.a,j._frontmatter=y,j),mdxType:"Playground"},Object(i.b)(l.a,{caption:"Tiny",tiny:!0,outline:1,mdxType:"Input"}),Object(i.b)("br",null),Object(i.b)(l.a,{caption:"Small",small:!0,mdxType:"Input"}),Object(i.b)("br",null),Object(i.b)(l.a,{caption:"Normal",mdxType:"Input"}),Object(i.b)("br",null),Object(i.b)(l.a,{caption:"Disabled",disabled:!0,mdxType:"Input"}),Object(i.b)("br",null),Object(i.b)(l.a,{caption:"Read Only",readOnly:!0,mdxType:"Input"}),Object(i.b)("br",null),Object(i.b)(l.a,{caption:"Big",big:!0,fancy:!0,fitAll:!0,color:"error",mdxType:"Input"}),Object(i.b)("br",null),Object(i.b)(l.a,{append:Object(i.b)(u.a,{mdxType:"Addon"},Object(i.b)(m.a,{mdxType:"New"})),caption:"Huge",huge:!0,rize:3,color:"secondary",outline:2,mdxType:"Input"})),Object(i.b)("h2",{id:"multiline-input"},"Multiline Input"),Object(i.b)(r.c,{__position:3,__code:'<Input\n  autoHeight\n  multiline\n  caption="Multiline"\n  bgColor="color3"\n  rize={1}\n  maxRows={4}\n/>',__scope:(L={props:_,DefaultLayout:p.a,Link:r.b,Playground:r.c,Props:r.d,Addon:u.a,ArrowKeys:c.a,Input:l.a,List:s.a,ListTitle:b.a,ListButton:d.ListButton,New:m.a},L.DefaultLayout=p.a,L._frontmatter=y,L),mdxType:"Playground"},Object(i.b)(l.a,{autoHeight:!0,multiline:!0,caption:"Multiline",bgColor:"color3",rize:1,maxRows:4,mdxType:"Input"})),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)(r.d,{of:l.a,mdxType:"Props"}))}void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!j.hasOwnProperty("__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/packages/ui/src/Input/Input.mdx"}}),j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-packages-ui-src-input-input-mdx-f2570576ed202f646624.js.map