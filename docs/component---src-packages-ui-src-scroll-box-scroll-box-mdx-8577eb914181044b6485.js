(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{s9Ag:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return d})),t.d(n,"default",(function(){return _}));var o=t("Fcif"),r=t("+I+c"),a=t("/FXl"),i=t("TjRS"),l=t("mXGw"),c=t("ZFoC"),s=t("q8Y+"),p=t.n(s),b=t("WHO+"),u=t("2/Je"),d=(t("aD51"),{});void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/packages/ui/src/ScrollBox/ScrollBox.mdx"}});var m={_frontmatter:d},x=i.a,g={name:"hw5ub6",styles:"margin:4px;flex-shrink:0;line-height:50px;"},y={name:"i4a3lq",styles:"display:flex;flex-direction:column;width:100px;height:200px;margin:auto;"},f={name:"hw5ub6",styles:"margin:4px;flex-shrink:0;line-height:50px;"},h={name:"il5l7m",styles:"flex-shrink:0;line-height:80px;width:100%;"},S={name:"q74178",styles:"outline:1px dotted;"};function _(e){var n,t,s,_,P=e.components,O=Object(r.a)(e,["components"]);return Object(a.b)(x,Object(o.a)({},m,O,{components:P,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"scrollbox"},"ScrollBox"),Object(a.b)("p",null,"Utility component preconfigured for easy use"),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("h3",{id:"horizontal"},"Horizontal"),Object(a.b)(c.c,{__position:0,__code:'<ScrollBox x bgColor="warning">\n  {Range(0, 50).map(item => (\n    <Paper\n      bgColor="primary"\n      center\n      size={50}\n      css={{ margin: 4, flexShrink: 0, lineHeight: \'50px\' }}\n      key={item}\n    >\n      {item}\n    </Paper>\n  ))}\n</ScrollBox>',__scope:(n={props:O,DefaultLayout:i.a,useState:l.useState,Playground:c.c,Props:c.d,Range:p.a,ScrollBox:b.a,Button:u.Button,Divider:u.Divider,Paper:u.Paper},n.DefaultLayout=i.a,n._frontmatter=d,n),mdxType:"Playground"},Object(a.b)(b.a,{x:!0,bgColor:"warning",mdxType:"ScrollBox"},p()(0,50).map((function(e){return Object(a.b)(u.Paper,{bgColor:"primary",center:!0,size:50,css:g,key:e,mdxType:"Paper"},e)})))),Object(a.b)("h3",{id:"vertical"},"Vertical"),Object(a.b)(c.c,{__position:1,__code:"<ScrollBox\n  hideScrollbars\n  y\n  css={{\n    display: 'flex',\n    flexDirection: 'column',\n    width: 100,\n    height: 200,\n    margin: 'auto',\n  }}\n>\n  {Range(0, 50).map(item => (\n    <Paper\n      bgColor=\"success\"\n      center\n      size={50}\n      css={{ margin: 4, flexShrink: 0, lineHeight: '50px' }}\n      key={item}\n    >\n      {item}\n    </Paper>\n  ))}\n</ScrollBox>",__scope:(t={props:O,DefaultLayout:i.a,useState:l.useState,Playground:c.c,Props:c.d,Range:p.a,ScrollBox:b.a,Button:u.Button,Divider:u.Divider,Paper:u.Paper},t.DefaultLayout=i.a,t._frontmatter=d,t),mdxType:"Playground"},Object(a.b)(b.a,{hideScrollbars:!0,y:!0,css:y,mdxType:"ScrollBox"},p()(0,50).map((function(e){return Object(a.b)(u.Paper,{bgColor:"success",center:!0,size:50,css:f,key:e,mdxType:"Paper"},e)})))),Object(a.b)("h3",{id:"scroll-snapping"},"Scroll Snapping"),Object(a.b)(c.c,{__position:2,__code:"<ScrollBox x hideScrollbars snap>\n  {Range(1, 13).map(item => (\n    <Paper\n      bgColor={`color${item}`}\n      center\n      css={{\n        flexShrink: 0,\n        lineHeight: '80px',\n        width: '100%',\n      }}\n      key={item}\n    >\n      {item}\n    </Paper>\n  ))}\n</ScrollBox>",__scope:(s={props:O,DefaultLayout:i.a,useState:l.useState,Playground:c.c,Props:c.d,Range:p.a,ScrollBox:b.a,Button:u.Button,Divider:u.Divider,Paper:u.Paper},s.DefaultLayout=i.a,s._frontmatter=d,s),mdxType:"Playground"},Object(a.b)(b.a,{x:!0,hideScrollbars:!0,snap:!0,mdxType:"ScrollBox"},p()(1,13).map((function(e){return Object(a.b)(u.Paper,{bgColor:"color"+e,center:!0,css:h,key:e,mdxType:"Paper"},e)})))),Object(a.b)("h3",{id:"scroll-animated-height"},"Scroll animated height"),Object(a.b)(c.c,{__position:3,__code:"() => {\n  const [visible, setVisible] = useState(false)\n  return (\n    <>\n      <Button onClick={() => setVisible(!visible)} bgColor=\"primary\">\n        Toggle content\n      </Button>\n      <Divider invisible />\n      <ScrollBox\n        animateHeight\n        visible={visible}\n        css={{ outline: '1px dotted' }}\n      >\n        Animated content\n      </ScrollBox>\n    </>\n  )\n}",__scope:(_={props:O,DefaultLayout:i.a,useState:l.useState,Playground:c.c,Props:c.d,Range:p.a,ScrollBox:b.a,Button:u.Button,Divider:u.Divider,Paper:u.Paper},_.DefaultLayout=i.a,_._frontmatter=d,_),mdxType:"Playground"},(function(){var e=Object(l.useState)(!1),n=e[0],t=e[1];return Object(a.b)(React.Fragment,null,Object(a.b)(u.Button,{onClick:function(){return t(!n)},bgColor:"primary",mdxType:"Button"},"Toggle content"),Object(a.b)(u.Divider,{invisible:!0,mdxType:"Divider"}),Object(a.b)(b.a,{animateHeight:!0,visible:n,css:S,mdxType:"ScrollBox"},"Animated content"))})),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)(c.d,{of:b.a,mdxType:"Props"}))}void 0!==_&&_&&_===Object(_)&&Object.isExtensible(_)&&!_.hasOwnProperty("__filemeta")&&Object.defineProperty(_,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/packages/ui/src/ScrollBox/ScrollBox.mdx"}}),_.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-packages-ui-src-scroll-box-scroll-box-mdx-8577eb914181044b6485.js.map