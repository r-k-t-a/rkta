(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{hZex:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return f}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var r=n("/FXl"),a=n("TjRS"),o=n("mXGw"),c=n("ZFoC"),i=n("lrJy"),u=n("kYb+"),l=n("/EZU");n("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/packages/ui/src/Cache/Cache.mdx"}});var b={_frontmatter:p},d=a.a,m={name:"1isemmb",styles:"margin-left:8px;"};function f(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(d,s({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"cache"},"Cache"),Object(r.b)("p",null,"Cache component allows to freeze react render subtree at runtime. We use it to freeze animated components."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)(c.c,{__position:0,__code:"() => {\n  const [cnt, setCnt] = useState(0)\n  const [cacheState, setCacheState] = useState(false)\n  return (\n    <>\n      <Button\n        rounded\n        hardRight\n        outline={1}\n        outlineColor=\"primary\"\n        bgColor={cacheState ? 'primary' : 'paper'}\n        onClick={() => setCacheState(true)}\n      >\n        On\n      </Button>\n      <Button\n        rounded\n        hardLeft\n        outline={1}\n        outlineColor=\"primary\"\n        bgColor={cacheState ? 'paper' : 'primary'}\n        onClick={() => setCacheState(false)}\n      >\n        Off\n      </Button>\n      <Button\n        bgColor=\"primary\"\n        css={{ marginLeft: 8 }}\n        rounded\n        onClick={() => setCnt(cnt + 1)}\n      >\n        Counter: {cnt}\n      </Button>\n      <Divider />\n      <Cache disabled={!cacheState}>Cached: {cnt}</Cache>\n    </>\n  )\n}",__scope:{props:n,DefaultLayout:a.a,useState:o.useState,Playground:c.c,Props:c.d,Button:i.a,Cache:u.a,Divider:l.a},mdxType:"Playground"},(function(){var e=Object(o.useState)(0),t=e[0],n=e[1],a=Object(o.useState)(!1),c=a[0],s=a[1];return Object(r.b)(React.Fragment,null,Object(r.b)(i.a,{rounded:!0,hardRight:!0,outline:1,outlineColor:"primary",bgColor:c?"primary":"paper",onClick:function(){return s(!0)},mdxType:"Button"},"On"),Object(r.b)(i.a,{rounded:!0,hardLeft:!0,outline:1,outlineColor:"primary",bgColor:c?"paper":"primary",onClick:function(){return s(!1)},mdxType:"Button"},"Off"),Object(r.b)(i.a,{bgColor:"primary",css:m,rounded:!0,onClick:function(){return n(t+1)},mdxType:"Button"},"Counter: ",t),Object(r.b)(l.a,{mdxType:"Divider"}),Object(r.b)(u.a,{disabled:!c,mdxType:"Cache"},"Cached: ",t))})),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)(c.d,{of:u.a,mdxType:"Props"}))}f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/packages/ui/src/Cache/Cache.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-packages-ui-src-cache-cache-mdx-bec5d14774e4232a095c.js.map