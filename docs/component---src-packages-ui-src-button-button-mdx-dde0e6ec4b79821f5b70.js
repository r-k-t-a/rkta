(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{YXQe:function(t,o,n){"use strict";n.r(o),n.d(o,"_frontmatter",(function(){return p})),n.d(o,"default",(function(){return f}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var e=n("/FXl"),a=n("TjRS"),r=n("ZFoC"),l=n("zTSN"),u=n("lrJy"),c=n("zkaj"),d=n("PVya"),b=n("ggJq");n("aD51");function i(){return(i=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/packages/ui/src/Button/Button.mdx"}});var s={_frontmatter:p},y=a.a,g={name:"1m32o40",styles:"align-items:center;display:flex;justify-content:space-between;padding:8px;"},m={name:"1680hwe",styles:"align-items:center;display:flex;justify-content:space-between;padding:16px;"};function f(t){var o,n,f,B,j,O,_,x=t.components,T=function(t,o){if(null==t)return{};var n,e,a={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],o.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["components"]);return Object(e.b)(y,i({},s,T,{components:x,mdxType:"MDXLayout"}),Object(e.b)("h1",{id:"button"},"Button"),Object(e.b)("p",null,"Button component"),Object(e.b)("h2",{id:"button-variants"},"Button variants"),Object(e.b)("h3",{id:"sizing"},"Sizing"),Object(e.b)(r.c,{__position:0,__code:'<div\n  style={{\n    alignItems: \'center\',\n    display: \'flex\',\n    justifyContent: \'space-between\',\n  }}\n>\n  <Button bgColor="color1" tiny>\n    Tiny\n  </Button>\n  <Button bgColor="color7" small>\n    Small\n  </Button>\n  <Button bgColor="color2">Normal</Button>\n  <Button bgColor="color12" big>\n    Big\n  </Button>\n  <Button bgColor="color12" big busy>\n    Big\n  </Button>\n  <Button bgColor="color15" huge paddingX={32}>\n    Huge\n  </Button>\n</div>',__scope:(o={props:T,DefaultLayout:a.a,Playground:r.c,Props:r.d,Addon:l.a,Button:u.a,Paper:c.a,Trash:d.a,Wallet:b.a},o.DefaultLayout=a.a,o._frontmatter=p,o),mdxType:"Playground"},Object(e.b)("div",{style:{alignItems:"center",display:"flex",justifyContent:"space-between"}},Object(e.b)(u.a,{bgColor:"color1",tiny:!0,mdxType:"Button"},"Tiny"),Object(e.b)(u.a,{bgColor:"color7",small:!0,mdxType:"Button"},"Small"),Object(e.b)(u.a,{bgColor:"color2",mdxType:"Button"},"Normal"),Object(e.b)(u.a,{bgColor:"color12",big:!0,mdxType:"Button"},"Big"),Object(e.b)(u.a,{bgColor:"color12",big:!0,busy:!0,mdxType:"Button"},"Big"),Object(e.b)(u.a,{bgColor:"color15",huge:!0,paddingX:32,mdxType:"Button"},"Huge"))),Object(e.b)("h3",{id:"block-level"},"Block Level"),Object(e.b)(r.c,{__position:1,__code:'<Button bgColor="primary" blockLevel>\n  Block Level\n</Button>',__scope:(n={props:T,DefaultLayout:a.a,Playground:r.c,Props:r.d,Addon:l.a,Button:u.a,Paper:c.a,Trash:d.a,Wallet:b.a},n.DefaultLayout=a.a,n._frontmatter=p,n),mdxType:"Playground"},Object(e.b)(u.a,{bgColor:"primary",blockLevel:!0,mdxType:"Button"},"Block Level")),Object(e.b)("h3",{id:"fitting"},"Fitting"),Object(e.b)(r.c,{__position:2,__code:"<div\n  style={{\n    alignItems: 'center',\n    display: 'flex',\n    justifyContent: 'space-between',\n  }}\n>\n  <Button bgColor=\"color1\" fitRight>\n    fitRight\n  </Button>\n  <Button bgColor=\"color7\" fitAll>\n    fitAll\n  </Button>\n  <Button bgColor=\"color2\" fitLeft>\n    fitLeft\n  </Button>\n</div>",__scope:(f={props:T,DefaultLayout:a.a,Playground:r.c,Props:r.d,Addon:l.a,Button:u.a,Paper:c.a,Trash:d.a,Wallet:b.a},f.DefaultLayout=a.a,f._frontmatter=p,f),mdxType:"Playground"},Object(e.b)("div",{style:{alignItems:"center",display:"flex",justifyContent:"space-between"}},Object(e.b)(u.a,{bgColor:"color1",fitRight:!0,mdxType:"Button"},"fitRight"),Object(e.b)(u.a,{bgColor:"color7",fitAll:!0,mdxType:"Button"},"fitAll"),Object(e.b)(u.a,{bgColor:"color2",fitLeft:!0,mdxType:"Button"},"fitLeft"))),Object(e.b)("h3",{id:"round-buttons"},"Round buttons"),Object(e.b)(r.c,{__position:3,__code:'<Paper\n  color="text"\n  css={{\n    alignItems: \'center\',\n    display: \'flex\',\n    justifyContent: \'space-between\',\n    padding: 8,\n  }}\n>\n  <Button bgColor="color1" round>\n    round\n  </Button>\n  <Button bgColor="primary" rize={1} round busy size={56}>\n    round\n  </Button>\n  <Button color="secondary" round size={72} outline={2}>\n    <Wallet />\n    <span>0</span>\n  </Button>\n</Paper>',__scope:(B={props:T,DefaultLayout:a.a,Playground:r.c,Props:r.d,Addon:l.a,Button:u.a,Paper:c.a,Trash:d.a,Wallet:b.a},B.DefaultLayout=a.a,B._frontmatter=p,B),mdxType:"Playground"},Object(e.b)(c.a,{color:"text",css:g,mdxType:"Paper"},Object(e.b)(u.a,{bgColor:"color1",round:!0,mdxType:"Button"},"round"),Object(e.b)(u.a,{bgColor:"primary",rize:1,round:!0,busy:!0,size:56,mdxType:"Button"},"round"),Object(e.b)(u.a,{color:"secondary",round:!0,size:72,outline:2,mdxType:"Button"},Object(e.b)(b.a,{mdxType:"Wallet"}),Object(e.b)("span",null,"0")))),Object(e.b)("h3",{id:"square-buttons"},"Square buttons"),Object(e.b)(r.c,{__position:4,__code:"<Paper\n  bgColor=\"text\"\n  color=\"color2\"\n  css={{\n    alignItems: 'center',\n    display: 'flex',\n    justifyContent: 'space-between',\n    padding: 16,\n  }}\n>\n  <Button size={72} transparent outline={2}>\n    <Wallet />\n    <span>0</span>\n  </Button>\n  <Button color=\"warning\" size={72} outline={2}>\n    <Wallet />\n    <span>1m</span>\n  </Button>\n</Paper>",__scope:(j={props:T,DefaultLayout:a.a,Playground:r.c,Props:r.d,Addon:l.a,Button:u.a,Paper:c.a,Trash:d.a,Wallet:b.a},j.DefaultLayout=a.a,j._frontmatter=p,j),mdxType:"Playground"},Object(e.b)(c.a,{bgColor:"text",color:"color2",css:m,mdxType:"Paper"},Object(e.b)(u.a,{size:72,transparent:!0,outline:2,mdxType:"Button"},Object(e.b)(b.a,{mdxType:"Wallet"}),Object(e.b)("span",null,"0")),Object(e.b)(u.a,{color:"warning",size:72,outline:2,mdxType:"Button"},Object(e.b)(b.a,{mdxType:"Wallet"}),Object(e.b)("span",null,"1m")))),Object(e.b)("h3",{id:"joints"},"Joints"),Object(e.b)(r.c,{__position:5,__code:'<Button bgColor="primary" rounded hardRight>\n  First\n</Button>\n<Button bgColor="primary" hard>\n  Second\n</Button>\n<Button bgColor="primary" rounded hardLeft>\n  Third\n</Button>',__scope:(O={props:T,DefaultLayout:a.a,Playground:r.c,Props:r.d,Addon:l.a,Button:u.a,Paper:c.a,Trash:d.a,Wallet:b.a},O.DefaultLayout=a.a,O._frontmatter=p,O),mdxType:"Playground"},Object(e.b)(u.a,{bgColor:"primary",rounded:!0,hardRight:!0,mdxType:"Button"},"First"),Object(e.b)(u.a,{bgColor:"primary",hard:!0,mdxType:"Button"},"Second"),Object(e.b)(u.a,{bgColor:"primary",rounded:!0,hardLeft:!0,mdxType:"Button"},"Third")),Object(e.b)("h3",{id:"addons"},"Addons"),Object(e.b)(r.c,{__position:6,__code:'<Button\n  bgColor="secondary1"\n  color="color1"\n  fitAll\n  uppercase\n  href="//nike.com"\n  target="_blank"\n>\n  <Addon>\n    <Wallet />\n  </Addon>\n  <Addon>Do it!</Addon>\n  <Addon>\n    <Trash />\n  </Addon>\n</Button>',__scope:(_={props:T,DefaultLayout:a.a,Playground:r.c,Props:r.d,Addon:l.a,Button:u.a,Paper:c.a,Trash:d.a,Wallet:b.a},_.DefaultLayout=a.a,_._frontmatter=p,_),mdxType:"Playground"},Object(e.b)(u.a,{bgColor:"secondary1",color:"color1",fitAll:!0,uppercase:!0,href:"//nike.com",target:"_blank",mdxType:"Button"},Object(e.b)(l.a,{mdxType:"Addon"},Object(e.b)(b.a,{mdxType:"Wallet"})),Object(e.b)(l.a,{mdxType:"Addon"},"Do it!"),Object(e.b)(l.a,{mdxType:"Addon"},Object(e.b)(d.a,{mdxType:"Trash"})))),Object(e.b)("h2",{id:"props"},"Props"),Object(e.b)(r.d,{of:u.a,mdxType:"Props"}))}void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/packages/ui/src/Button/Button.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-packages-ui-src-button-button-mdx-dde0e6ec4b79821f5b70.js.map