(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{233:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(10),i=t.n(s),c=t(79),o=t.n(c),l=t(106),d=t(113),m=t(27),u=t(287),p=t(282),j=t(280),b=t(283),h=t(278),g=t(279),x=t(112),v=t.n(x),O=t(281),f=t(274),y=t(33),w=t(286),k=t(284),S=t(67),N=t(8),q=Object(f.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},error:{color:"red"}}}));var C=function(){var e=q(),a=n.a.useState(!1),t=Object(m.a)(a,2),r=t[0],s=t[1],i=n.a.useState({msg:"",type:"error"}),c=Object(m.a)(i,2),x=c[0],f=c[1],C=function(e,a){"clickaway"!==a&&s(!1)};function E(e){return Object(N.jsx)(k.a,Object(d.a)({elevation:6,variant:"filled"},e))}var I=S.a().shape({email:S.b().email("Enter valid email").required("Email is required"),password:S.b().required("Password is required")}),T=function(){var e=Object(l.a)(o.a.mark((function e(a,t){var r,n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=a.email,n=a.password,i={"Content-type":"application/json"},fetch("https://cors.bridged.cc/https://api.chime.me/token?account=".concat(r,"&password=").concat(n,"&vendorKey=9ce64853f64f456ca348397666974b0b"),{method:"GET",headers:i}).then((function(e){return e.json()})).then((function(e){if(e.message)s(!0),f({msg:e.message,type:"error"});else{var a=e.token;localStorage.setItem("token",a),s(!0),f({msg:"Login Success",type:"success"})}})).catch((function(e){console.log("error:",e),s(!0),f({msg:"Server Error",type:"error"})}));case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return Object(N.jsxs)(g.a,{container:!0,component:"main",className:e.root,children:[Object(N.jsx)(w.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:r,autoHideDuration:6e3,onClose:C,children:Object(N.jsx)(E,{onClose:C,severity:x.type,children:x.msg})}),Object(N.jsx)(j.a,{}),Object(N.jsx)(g.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),Object(N.jsx)(g.a,{item:!0,xs:12,sm:8,md:5,component:h.a,elevation:6,square:!0,children:Object(N.jsxs)("div",{className:e.paper,children:[Object(N.jsx)(u.a,{className:e.avatar,children:Object(N.jsx)(v.a,{})}),Object(N.jsx)(O.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(N.jsx)(y.d,{initialValues:{email:"",password:""},validationSchema:I,onSubmit:T,children:function(a){return Object(N.jsxs)(y.c,{className:e.form,noValidate:!0,children:[Object(N.jsx)(y.b,{as:b.a,variant:"outlined",margin:"normal",fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,required:!0,helperText:Object(N.jsx)("div",{className:e.error,children:Object(N.jsx)(y.a,{name:"email"})})}),Object(N.jsx)(y.b,{as:b.a,variant:"outlined",margin:"normal",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",required:!0,helperText:Object(N.jsx)("div",{className:e.error,children:Object(N.jsx)(y.a,{name:"password"})})}),Object(N.jsx)(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"})]})}})]})})]})};var E=function(){return Object(N.jsx)("div",{children:Object(N.jsx)(C,{})})};i.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(E,{})}),document.getElementById("root"))}},[[233,1,2]]]);
//# sourceMappingURL=main.b53d2ac9.chunk.js.map