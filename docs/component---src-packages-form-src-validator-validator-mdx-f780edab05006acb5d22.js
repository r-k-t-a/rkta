(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{XG0W:function(e,r,n){"use strict";n.r(r),n.d(r,"_frontmatter",(function(){return u})),n.d(r,"default",(function(){return O}));n("5hJT"),n("75LO"),n("PJhk"),n("W1QL"),n("K/PF"),n("t91x"),n("uqQt"),n("GkPX");var a=n("/FXl"),t=n("TjRS"),o=n("ZFoC"),i=n("mXGw"),d=n("yIPz"),s=n("r1rD"),p=n("Vln6"),l=n("vjt9"),m=n("nbiN"),c=n.n(m);n("aD51");function b(){return(b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u={};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/packages/form/src/validator/Validator.mdx"}});g="FieldError";var g,y={_frontmatter:u},j=t.a,f={name:"12yjhf7",styles:"max-width:450px;margin:24px auto;"};function O(e){var r,n=e.components,m=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,["components"]);return Object(a.b)(j,b({},y,m,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"validation"},"Validation"),Object(a.b)("p",null,"Declaratively validate forms against JSON schema."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-javascript"}),"import { makeValidator } from '@rkta/form';\n\nconst validate = makeValidator(schema);\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)(o.c,{__position:0,__code:'() => {\n  const schema = {\n    type: \'object\',\n    properties: {\n      login: {\n        type: \'string\',\n        format: \'email\',\n        messages: {\n          required: \'Please enter login\',\n          format: \'Wrong format\',\n        },\n      },\n      password: {\n        type: \'string\',\n        messages: {\n          required: \'Please enter password\',\n        },\n      },\n    },\n    required: [\'login\', \'password\'],\n  }\n  const validate = makeValidator(schema)\n  const FieldError = ({ name }) => {\n    const [error] = useErrors(name)\n    return error ? (\n      <Addon color="warning" subtitle2>\n        {error.message}\n      </Addon>\n    ) : null\n  }\n  return (\n    <Card rize={1} css={{ maxWidth: \'450px\', margin: \'24px auto\' }}>\n      <Form validate={validate} onFormSubmit={flow(Object.entries, alert)}>\n        <CardHeader>Please Sign In</CardHeader>\n        <CardBody>\n          <Input caption="Login" name="login" bgColor="paper2" />\n          <FieldError name="login" />\n          <Divider invisible />\n          <Input\n            caption="Password"\n            name="password"\n            bgColor="paper2"\n            type="password"\n          />\n          <FieldError name="password" />\n        </CardBody>\n        <CardFooter right>\n          <Button bgColor="primary" type="submit">\n            Sign In\n          </Button>\n        </CardFooter>\n      </Form>\n    </Card>\n  )\n}',__scope:(r={props:m,DefaultLayout:t.a,Playground:o.c,Props:o.d,useState:i.useState,Form:d.a,useErrors:s.a,makeValidator:p.a,Button:l.Button,Card:l.Card,CardHeader:l.CardHeader,CardBody:l.CardBody,CardFooter:l.CardFooter,Divider:l.Divider,Addon:l.Addon,Input:l.Input,flow:c.a},r.DefaultLayout=t.a,r._frontmatter=u,r),mdxType:"Playground"},(function(){var e=Object(p.a)({type:"object",properties:{login:{type:"string",format:"email",messages:{required:"Please enter login",format:"Wrong format"}},password:{type:"string",messages:{required:"Please enter password"}}},required:["login","password"]}),r=function(e){var r=e.name,n=Object(s.a)(r)[0];return n?Object(a.b)(l.Addon,{color:"warning",subtitle2:!0,mdxType:"Addon"},n.message):null};return Object(a.b)(l.Card,{rize:1,css:f,mdxType:"Card"},Object(a.b)(d.a,{validate:e,onFormSubmit:c()(Object.entries,alert),mdxType:"Form"},Object(a.b)(l.CardHeader,{mdxType:"CardHeader"},"Please Sign In"),Object(a.b)(l.CardBody,{mdxType:"CardBody"},Object(a.b)(l.Input,{caption:"Login",name:"login",bgColor:"paper2",mdxType:"Input"}),Object(a.b)(r,{name:"login",mdxType:"FieldError"}),Object(a.b)(l.Divider,{invisible:!0,mdxType:"Divider"}),Object(a.b)(l.Input,{caption:"Password",name:"password",bgColor:"paper2",type:"password",mdxType:"Input"}),Object(a.b)(r,{name:"password",mdxType:"FieldError"})),Object(a.b)(l.CardFooter,{right:!0,mdxType:"CardFooter"},Object(a.b)(l.Button,{bgColor:"primary",type:"submit",mdxType:"Button"},"Sign In"))))})),Object(a.b)("h2",{id:"arguments"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"schema - JSON schema object"),Object(a.b)("li",{parentName:"ul"},"options - ",Object(a.b)("a",b({parentName:"li"},{href:"https://github.com/epoberezkin/ajv"}),"ajv")," options")))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/packages/form/src/validator/Validator.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-packages-form-src-validator-validator-mdx-f780edab05006acb5d22.js.map