(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"cWO/":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return d}));var o=n("Fcif"),r=n("mK0O"),c=n("+I+c"),a=n("/FXl"),i=n("TjRS"),s=n("mXGw"),u=n("ZFoC"),b=n("3iSw");n("aD51");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/packages/hooks/src/usePositionAttachment/usePositionAttachment.mdx"}});var l={_frontmatter:m},O=i.a;function d(e){var t,n=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)(O,Object(o.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"usepositionattachment-hook"},"usePositionAttachment hook"),Object(a.b)("h2",{id:"attach-to-window"},"Attach to window"),Object(a.b)(u.c,{__position:0,__code:"() => {\n  const producer = useRef(null)\n  const consumer = useRef(null)\n  const style = usePositionAttachment({\n    align: 'top',\n    consumer,\n    offset: 0,\n    producer,\n  })\n  return (\n    <Fragment>\n      <button ref={producer}>bbb</button>\n      <div\n        ref={consumer}\n        style={{ ...style, zIndex: 2, outline: '1px dotted' }}\n      >\n        piu\n      </div>\n    </Fragment>\n  )\n}",__scope:(t={props:r,DefaultLayout:i.a,useRef:s.useRef,Fragment:s.Fragment,Playground:u.c,usePositionAttachment:b.a},t.DefaultLayout=i.a,t._frontmatter=m,t),mdxType:"Playground"},(function(){var e=Object(s.useRef)(null),t=Object(s.useRef)(null),n=Object(b.a)({align:"top",consumer:t,offset:0,producer:e});return Object(a.b)(s.Fragment,{mdxType:"Fragment"},Object(a.b)("button",{ref:e},"bbb"),Object(a.b)("div",{ref:t,style:p(p({},n),{},{zIndex:2,outline:"1px dotted"})},"piu"))})))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/packages/hooks/src/usePositionAttachment/usePositionAttachment.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-packages-hooks-src-use-position-attachment-use-position-attachment-mdx-a0326b05bef4ec883298.js.map