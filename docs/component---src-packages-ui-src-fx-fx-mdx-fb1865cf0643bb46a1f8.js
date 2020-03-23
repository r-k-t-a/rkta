(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+iG4":function(n,e,o){"use strict";o.r(e),o.d(e,"_frontmatter",(function(){return j})),o.d(e,"default",(function(){return F}));o("5hJT"),o("W1QL"),o("K/PF"),o("t91x"),o("75LO"),o("PJhk");var t=o("ZgrQ"),r=o("/FXl"),a=o("TjRS"),s=o("mXGw"),i=o("ZFoC"),p=o("zTSN"),c=o("lrJy"),l=o("VAz1"),u=o("KNa4"),d=o("QBCz"),b=o("+dYP"),m=o("KxTh"),f=o("GjRJ");o("aD51");function x(){return(x=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n}).apply(this,arguments)}var j={};void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!j.hasOwnProperty("__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/packages/ui/src/Fx/Fx.mdx"}});O="Popover";var O,y={_frontmatter:j},g=a.a;function F(n){var e=n.components,o=function(n,e){if(null==n)return{};var o,t,r={},a=Object.keys(n);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||(r[o]=n[o]);return r}(n,["components"]);return Object(r.b)(g,x({},y,o,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"usefx"},"useFx"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"useFx")," allows you to apply various effects"),Object(r.b)("h2",{id:"use"},"Use"),Object(r.b)("pre",null,Object(r.b)("code",x({parentName:"pre"},{}),"/** @jsx jsx */\nimport { jsx } from '@emotion/core';\nimport { useFx } from '@rkta/ui';\n\nconst FxComponent = () => {\n  const onPopUp = () => console.log('pop up!');\n  const [fx, setFx] = useFx('popUp', { onPopUp });\n  return (\n    <div {...fx}>\n      Hi, I have FX.\n      <button onClick={() => setFx('fadeDown')}>\n        Hide me\n      </button>\n    </div>\n  );\n}\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)(i.c,{__position:0,__code:'() => {\n  const Popover = ({ children, css, onAnimationEnd, onClose }) => (\n    <List\n      bgColor="text"\n      color="paper"\n      rize={1}\n      css={[\n        css,\n        {\n          position: \'fixed\',\n          bottom: 16,\n          right: 16,\n          width: 320,\n          zIndex: 1000,\n        },\n      ]}\n      onAnimationEnd={onAnimationEnd}\n    >\n      <ListTitle color="error" fitAll>\n        <Addon main>Error!</Addon>\n        <Addon>\n          <Button\n            onClick={onClose}\n            round\n            type="button"\n            transparent\n            color="paper"\n          >\n            <Cross color="paper" />\n          </Button>\n        </Addon>\n      </ListTitle>\n      <ListItem>Error message</ListItem>\n    </List>\n  )\n  const [error, setError] = useState(false)\n  const onFadeDown = () => setError(false)\n  const [popoverProps, setFx] = useFx(\'popUp\', { onFadeDown })\n  return (\n    <>\n      <Button\n        bgColor="primary"\n        onClick={() => {\n          if (!error) setError(true)\n          setFx(error ? \'fadeDown\' : \'popUp\')\n        }}\n      >\n        Toggle FX\n      </Button>\n      {error && (\n        <Popover {...popoverProps} onClose={() => setFx(\'fadeDown\')}>\n          {error.message}\n        </Popover>\n      )}\n    </>\n  )\n}',__scope:{props:o,DefaultLayout:a.a,useState:s.useState,Link:i.b,Playground:i.c,Props:i.d,Addon:p.a,Button:c.a,List:l.a,ListItem:u.a,ListTitle:d.a,Text:b.a,useFx:m.a,Cross:f.a},mdxType:"Playground"},(function(){var n=Object(s.useState)(!1),e=n[0],o=n[1],a=Object(m.a)("popUp",{onFadeDown:function(){return o(!1)}}),i=a[0],b=a[1];return Object(r.b)(React.Fragment,null,Object(r.b)(c.a,{bgColor:"primary",onClick:function(){e||o(!0),b(e?"fadeDown":"popUp")},mdxType:"Button"},"Toggle FX"),e&&Object(r.b)((function(n){n.children;var e=n.css,o=n.onAnimationEnd,a=n.onClose;return Object(r.b)(l.a,{bgColor:"text",color:"paper",rize:1,css:Object(t.a)([e,{position:"fixed",bottom:16,right:16,width:320,zIndex:1e3}]),onAnimationEnd:o,mdxType:"List"},Object(r.b)(d.a,{color:"error",fitAll:!0,mdxType:"ListTitle"},Object(r.b)(p.a,{main:!0,mdxType:"Addon"},"Error!"),Object(r.b)(p.a,{mdxType:"Addon"},Object(r.b)(c.a,{onClick:a,round:!0,type:"button",transparent:!0,color:"paper",mdxType:"Button"},Object(r.b)(f.a,{color:"paper",mdxType:"Cross"})))),Object(r.b)(u.a,{mdxType:"ListItem"},"Error message"))}),x({},i,{onClose:function(){return b("fadeDown")},mdxType:"Popover"}),e.message))})))}F&&F===Object(F)&&Object.isExtensible(F)&&!F.hasOwnProperty("__filemeta")&&Object.defineProperty(F,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/packages/ui/src/Fx/Fx.mdx"}}),F.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-packages-ui-src-fx-fx-mdx-fb1865cf0643bb46a1f8.js.map