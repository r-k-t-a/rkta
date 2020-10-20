(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{Ooe8:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return f})),n.d(t,"default",(function(){return O}));var o=n("Fcif"),a=n("+I+c"),c=n("/FXl"),l=n("TjRS"),r=n("mXGw"),i=n("ZFoC"),s=n("+fo9"),u=n("zTSN"),b=n("/EZU"),p=n("VAz1"),d=n("r9yH"),m=n("JaGv"),y=n("VjdI"),f=(n("aD51"),{});void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/packages/ui/src/Select/Select.mdx"}});var S={_frontmatter:f},L=l.a;function O(e){var t,n,O,g=e.components,C=Object(a.a)(e,["components"]);return Object(c.b)(L,Object(o.a)({},S,C,{components:g,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"select"},"Select"),Object(c.b)("p",null,"A fully customizable select control."),Object(c.b)("span",null,"See also:"," ",Object(c.b)(i.b,{to:"/src-packages-src-packages-ui-src-native-select-native-select",mdxType:"Link"},"Native Select")," ","component."),Object(c.b)("h2",{id:"basic-example"},"Basic example"),Object(c.b)(i.c,{__position:1,__code:"<Select\n  caption=\"Select\"\n  defaultValue={1}\n  formatValue={value => `Item ${value}`}\n>\n  {([isSelected, makeSelectHandler]) => (\n    <List>\n      <ArrowKeys vertical>\n        <ListButton\n          bgColor={isSelected(1) && 'color1'}\n          onClick={makeSelectHandler(1)}\n        >\n          Item 1\n        </ListButton>\n        <ListButton\n          bgColor={isSelected(2) && 'color2'}\n          onClick={makeSelectHandler(2)}\n        >\n          Item 2\n        </ListButton>\n      </ArrowKeys>\n    </List>\n  )}\n</Select>",__scope:(t={props:C,DefaultLayout:l.a,useState:r.useState,Link:i.b,Playground:i.c,Props:i.d,Select:s.a,Addon:u.a,Divider:b.a,List:p.a,ListButton:d.a,ArrowKeys:m.a,Rocket:y.a},t.DefaultLayout=l.a,t._frontmatter=f,t),mdxType:"Playground"},Object(c.b)(s.a,{caption:"Select",defaultValue:1,formatValue:function(e){return"Item "+e},mdxType:"Select"},(function(e){var t=e[0],n=e[1];return Object(c.b)(p.a,{mdxType:"List"},Object(c.b)(m.a,{vertical:!0,mdxType:"ArrowKeys"},Object(c.b)(d.a,{bgColor:t(1)&&"color1",onClick:n(1),mdxType:"ListButton"},"Item 1"),Object(c.b)(d.a,{bgColor:t(2)&&"color2",onClick:n(2),mdxType:"ListButton"},"Item 2")))}))),Object(c.b)("h2",{id:"controllable"},"Controllable"),Object(c.b)(i.c,{__position:2,__code:"() => {\n  const [state, setState] = useState(1)\n  return (\n    <Select caption=\"Select\" value={state}>\n      <List>\n        <ArrowKeys vertical>\n          <ListButton\n            bgColor={state === 1 && 'color1'}\n            onClick={() => setState(1)}\n          >\n            Item 1\n          </ListButton>\n          <ListButton\n            bgColor={state === 2 && 'color2'}\n            onClick={() => setState(2)}\n          >\n            Item 2\n          </ListButton>\n        </ArrowKeys>\n      </List>\n    </Select>\n  )\n}",__scope:(n={props:C,DefaultLayout:l.a,useState:r.useState,Link:i.b,Playground:i.c,Props:i.d,Select:s.a,Addon:u.a,Divider:b.a,List:p.a,ListButton:d.a,ArrowKeys:m.a,Rocket:y.a},n.DefaultLayout=l.a,n._frontmatter=f,n),mdxType:"Playground"},(function(){var e=Object(r.useState)(1),t=e[0],n=e[1];return Object(c.b)(s.a,{caption:"Select",value:t,mdxType:"Select"},Object(c.b)(p.a,{mdxType:"List"},Object(c.b)(m.a,{vertical:!0,mdxType:"ArrowKeys"},Object(c.b)(d.a,{bgColor:1===t&&"color1",onClick:function(){return n(1)},mdxType:"ListButton"},"Item 1"),Object(c.b)(d.a,{bgColor:2===t&&"color2",onClick:function(){return n(2)},mdxType:"ListButton"},"Item 2"))))})),Object(c.b)("h2",{id:"customized"},"Customized"),Object(c.b)(i.c,{__position:3,__code:"<Select\n  bgColor=\"primary\"\n  caption=\"Select\"\n  floatingAreaProps={{ align: 'top-left', blockLevel: false }}\n  floatingAreaContentProps={{ rize: 10 }}\n  formatValue={value => `Item ${value}`}\n  onChange={value => console.log('onChange: ', value)}\n  onClose={() => console.log('onClose')}\n  onOpen={() => console.log('onOpen')}\n  prepend={\n    <Addon>\n      <Rocket />\n    </Addon>\n  }\n  rize={1}\n>\n  {([isSelected, makeSelectHandler]) => (\n    <List bgColor=\"primary1\">\n      <ArrowKeys validTypes={[ListButton]} vertical>\n        <ListButton\n          bgColor={isSelected(1) && 'color3'}\n          onClick={makeSelectHandler(1)}\n        >\n          Item 1\n        </ListButton>\n        <ListButton\n          bgColor={isSelected(2) && 'color3'}\n          onClick={makeSelectHandler(2)}\n        >\n          Item 2\n        </ListButton>\n      </ArrowKeys>\n    </List>\n  )}\n</Select>",__scope:(O={props:C,DefaultLayout:l.a,useState:r.useState,Link:i.b,Playground:i.c,Props:i.d,Select:s.a,Addon:u.a,Divider:b.a,List:p.a,ListButton:d.a,ArrowKeys:m.a,Rocket:y.a},O.DefaultLayout=l.a,O._frontmatter=f,O),mdxType:"Playground"},Object(c.b)(s.a,{bgColor:"primary",caption:"Select",floatingAreaProps:{align:"top-left",blockLevel:!1},floatingAreaContentProps:{rize:10},formatValue:function(e){return"Item "+e},onChange:function(e){return console.log("onChange: ",e)},onClose:function(){return console.log("onClose")},onOpen:function(){return console.log("onOpen")},prepend:Object(c.b)(u.a,{mdxType:"Addon"},Object(c.b)(y.a,{mdxType:"Rocket"})),rize:1,mdxType:"Select"},(function(e){var t=e[0],n=e[1];return Object(c.b)(p.a,{bgColor:"primary1",mdxType:"List"},Object(c.b)(m.a,{validTypes:[d.a],vertical:!0,mdxType:"ArrowKeys"},Object(c.b)(d.a,{bgColor:t(1)&&"color3",onClick:n(1),mdxType:"ListButton"},"Item 1"),Object(c.b)(d.a,{bgColor:t(2)&&"color3",onClick:n(2),mdxType:"ListButton"},"Item 2")))}))),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)(i.d,{of:s.a,mdxType:"Props"}))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/packages/ui/src/Select/Select.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-packages-ui-src-select-select-mdx-b2caec4a70fe267e02e9.js.map