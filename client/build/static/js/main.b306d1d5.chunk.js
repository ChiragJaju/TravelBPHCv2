(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{172:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),s=a(25),o=a(19),l=a(9),j=a.n(l),d=a(15),u=a(7),b=a(209),h=a(71),m=a(210),x=a(53),p=a(207),O=a(206),f=a(121),g=Object(f.a)({palette:{primary:{main:"#ffff"},secondary:{main:"#11cb5f"}}}),v=a(1),y=Object(x.a)((function(e){return{root:{position:"fixed",flexDirection:"column",top:"94vh",minHeight:"104vh",textAlign:"center",width:"100vw"},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:(e.palette.type,e.palette.grey[800])},text:{color:"#ffffff"}}}));function w(){var e=y();return Object(v.jsx)(O.a,{theme:g,children:Object(v.jsxs)("div",{className:e.root,children:[Object(v.jsx)(p.a,{}),Object(v.jsx)(b.a,{component:"main",className:e.main,maxWidth:"sm"}),Object(v.jsx)("footer",{className:e.footer,children:Object(v.jsxs)(h.a,{variant:"body2",className:e.text,children:["Made with \u2764\ufe0f by ",Object(v.jsx)(m.a,{color:"inherit",href:"https://www.linkedin.com/in/chirag-jaju-3a2b01205/",children:"Chirag Jaju"})," ",(new Date).getFullYear(),"."]})})]})})}var S=a(225),C=a(211),N=a(212),P=a(13),k=a.n(P),I=Object(n.createContext)();function q(e){var t=Object(n.useState)(void 0),a=Object(u.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),o=s[0],l=s[1],b=Object(n.useState)([{Pid:"",Pemail:"",Pname:"",Parrival:"",Pdestination:"",PdateAndTime:{date:"",month:"",year:"",hour:"",min:""},Preq:[{name:"",email:"",status:""}]}]),h=Object(u.a)(b,2),m=h[0],x=h[1],p=Object(n.useState)({name:"",email:""}),O=Object(u.a)(p,2),f=O[0],g=O[1];function y(){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(j.a.mark((function e(){var t,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/loggedIn");case 2:(t=e.sent).data.base64&&(a=JSON.parse(atob(t.data.base64)),n=a.user,l(n)),c(t.data.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){y()}),[]),Object(v.jsx)(I.Provider,{value:{loggedIn:r,getLoggedIn:y,userID:o,setUserID:l,userInfo:f,setUserInfo:g,notes:m,setNotes:x},children:e.children})}var D=I,F=a(82),A=a.n(F),E=Object(x.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},div:{height:"100vh"},googleLogin:{margin:e.spacing(3,0,2),color:"#F0f0f0"}}}));function T(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(u.a)(c,2),s=i[0],o=i[1],l=Object(n.useState)(void 0),m=Object(u.a)(l,2),x=m[0],O=m[1],f=E(),g=Object(n.useContext)(D).getLoggedIn,y=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={email:s,password:a},e.next=5,k.a.post("/api/login",n);case 5:c=e.sent,i=c.data.value,O(i),i&&(o(""),r("")),g(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:f.div,children:[Object(v.jsxs)(b.a,{component:"main",maxWidth:"xs",children:[Object(v.jsx)(p.a,{}),Object(v.jsxs)("div",{className:f.paper,children:[Object(v.jsx)(S.a,{className:f.avatar,children:Object(v.jsx)(A.a,{})}),Object(v.jsx)(h.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(v.jsxs)("form",{className:f.form,noValidate:!0,children:[Object(v.jsx)(C.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"off",autoFocus:!0,type:"email",value:s,onChange:function(e){o(e.target.value)}}),Object(v.jsx)(C.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"off",value:a,onChange:function(e){r(e.target.value)}}),Object(v.jsx)(N.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:f.submit,onClick:y,children:"Sign In"}),!1===x&&Object(v.jsx)(h.a,{style:{color:"#ff0000"},children:"Invalid Email or Password!"})]}),Object(v.jsx)(h.a,{component:"h1",variant:"h5",children:"OR"}),Object(v.jsxs)("a",{href:"http://https://travel-bphc-v2.herokuapp.com//auth/google",children:["Login with "," \xa0",Object(v.jsx)("i",{with:!0,i:!0,class:"fab fa-google"})]})]})]}),Object(v.jsx)(w,{})]})}var z=a(213),B=a(214),R=a(215),W=a(177),H=a(183),_=a(181),M=a(228),L=a(178),V=a(84),J=a(20),U=a(216),Y=a(224);function K(e){return Object(v.jsx)(N.a,{variant:"contained",style:{backgroundColor:"#FF1268",color:"#FFFFFF"},onClick:e.handleSubmit,children:e.children})}var G=a(69),Q=a(85),X=a.n(Q),Z=function(e){return Object(v.jsx)("div",{className:X.a.backdrop})},$=function(e){return Object(v.jsx)("div",{className:X.a.modal,children:Object(v.jsx)("div",{className:X.a.content,children:e.children})})},ee=document.getElementById("overlays"),te=function(e){return Object(v.jsxs)(G.Fragment,{children:[i.a.createPortal(Object(v.jsx)(Z,{onHidePopup:e.onHidePopup}),ee),i.a.createPortal(Object(v.jsx)($,{children:e.children}),ee)]})};function ae(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],c=a[1],i=new Date,s=[];return e.allPosts.map((function(t){e.notes.filter((function(e){return e._id===t.postId&&(s.push({posts:e,status:t.requestStatus}),!0)}))})),Object(n.useEffect)((function(){c(!0)}),[]),Object(v.jsxs)(te,{onHidePopup:e.onHidePopup,children:[r&&s.map((function(e){if(void 0!==e.posts&&new Date(e.posts.PdateAndTime.data).getTime()-i.getTime()>=0)return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(h.a,{children:["Your Request to travel with ",e.posts.Pname," ","on ",e.posts.PdateAndTime.date,"/",e.posts.PdateAndTime.month,"/",e.posts.PdateAndTime.year," has been","true"===e.status&&" Accepted."," ","false"===e.status&&" Rejected."]})})})),Object(v.jsx)(N.a,{variant:"contained",style:{backgroundColor:"#FF1268",color:"#FFFFFF",marginTop:"20px"},onClick:e.handleOkay,children:"Okay"})]})}var ne=function(e){var t=Object(n.useContext)(D),a=t.userID,r=t.notes,c=Object(n.useState)(),i=Object(u.a)(c,2),s=i[0],o=i[1],l=Object(n.useState)(!1),b=Object(u.a)(l,2),h=b[0],m=b[1];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/userInfo/"+a);case 2:t=e.sent,n=t.data,o(n),m(!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),Object(v.jsxs)(v.Fragment,{children:[h&&0!==s.postToShow.length&&Object(v.jsx)(ae,{allPosts:s.postToShow,notes:r,handleOkay:function(){e.onHidePopup()}}),")"]})},re=Object(x.a)((function(e){return{card:{margin:"2vw 2.5vw",backgroundColor:"#DEE3E3",width:"95vw",padding:"20px"},root:{alignItems:"center"},formControl:{margin:"0 0 20px",width:"165px"},text:{color:"#33AB3E"}}}));var ce=function(){var e=re(),t=Object(n.useState)("Airport"),a=Object(u.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)("Campus"),o=Object(u.a)(i,2),l=o[0],b=o[1],m=Object(n.useState)(new Date),x=Object(u.a)(m,2),p=x[0],O=x[1],f=Object(n.useState)(!1),g=Object(u.a)(f,2),y=g[0],S=g[1],C=Object(n.useState)(),N=Object(u.a)(C,2),P=N[0],I=N[1],q=Object(n.useState)(void 0),F=Object(u.a)(q,2),A=F[0],E=F[1],T=Object(n.useState)(1),G=Object(u.a)(T,2),Q=G[0],X=G[1],Z=Object(n.useContext)(D),$=Z.userID,ee=Z.setUserInfo,te=Z.userInfo,ae=Z.setNotes,ce=Object(n.useState)(!0),ie=Object(u.a)(ce,2),se=ie[0],oe=ie[1],le=function(e){O(e)};Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/posts");case 2:t=e.sent,ae(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[ae]),Object(n.useEffect)((function(){var e,t=new Date,a=new Date(p);I((e=t,a.getTime()-e.getTime()<=-3e5))}),[p]),Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/userInfo/"+$);case 2:t=e.sent,a=t.data,ee({name:a.name,email:a.email});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[$,ee]);var je=function(){var e=Object(d.a)(j.a.mark((function e(t){var a,n,c,i,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r!==l){e.next=7;break}return S(!0),E(void 0),e.abrupt("return");case 7:S(!1);case 8:if(!P){e.next=11;break}return E(void 0),e.abrupt("return");case 11:return a=new Date(p),n={date:a.getDate(),month:a.getMonth()+1,year:a.getFullYear(),hour:a.getHours(),min:a.getMinutes(),data:p},c={id:$,name:te.name,email:te.email,dateAndTime:n,arrival:r,destination:l,carStrength:Q},e.next=16,k.a.post("/api/post/submit",c);case 16:i=e.sent,s=i.data.value,E(s);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[se&&Object(v.jsx)(ne,{onHidePopup:function(){oe(!1)},onShowPopup:function(){oe(!0)}}),Object(v.jsxs)("div",{className:e.root,children:[Object(v.jsxs)(h.a,{variant:"h4",style:{margin:"1vw 2.5vw  "},children:["Hello ",te.name,","]}),Object(v.jsxs)(z.a,{variant:"outlined",className:e.card,children:[Object(v.jsx)(h.a,{variant:"h4",children:"Create Request:"}),Object(v.jsx)("form",{className:e.form,noValidate:!0,children:Object(v.jsxs)(B.a,{children:[Object(v.jsxs)(R.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:[Object(v.jsx)(R.a,{item:!0,xs:6,children:Object(v.jsxs)(W.a,{required:!0,className:e.formControl,children:[Object(v.jsx)(H.a,{id:"demo-simple-select-required-label",children:"Arrival"}),Object(v.jsxs)(_.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:r,onChange:function(e){c(e.target.value)},className:e.selectEmpty,children:[Object(v.jsx)(M.a,{value:"Campus",children:"Campus"}),Object(v.jsx)(M.a,{value:"Airport",children:"Airport"}),Object(v.jsx)(M.a,{value:"Bustop",children:"Bustop"})]}),Object(v.jsx)(L.a,{children:"Required"})]})}),Object(v.jsx)(R.a,{item:!0,xs:6,children:Object(v.jsxs)(W.a,{required:!0,className:e.formControl,children:[Object(v.jsx)(H.a,{id:"demo-simple-select-required-label",children:"Destination"}),Object(v.jsxs)(_.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:l,onChange:function(e){b(e.target.value)},className:e.selectEmpty,children:[Object(v.jsx)(M.a,{value:"Campus",children:"Campus"}),Object(v.jsx)(M.a,{value:"Airport",children:"Airport"}),Object(v.jsx)(M.a,{value:"Bustop",children:"Bustop"})]}),Object(v.jsx)(L.a,{children:"Required"})]})}),Object(v.jsxs)(J.a,{utils:V.a,children:[Object(v.jsx)(R.a,{item:!0,xs:6,children:Object(v.jsx)(U.a,{margin:"normal",id:"date-picker-dialog",label:"Arrival Date",format:"dd/MM/yyyy",className:e.formControl,value:p,onChange:le,KeyboardButtonProps:{"aria-label":"change date"}})}),Object(v.jsx)(R.a,{item:!0,xs:6,children:Object(v.jsx)(Y.a,{margin:"normal",id:"time-picker",className:e.formControl,label:"Arrival Time",value:p,onChange:le,KeyboardButtonProps:{"aria-label":"change time"}})}),Object(v.jsx)(R.a,{item:!0,xs:6,children:Object(v.jsxs)(W.a,{required:!0,className:e.formControl,children:[Object(v.jsx)(H.a,{id:"demo-simple-select-required-label",children:"Car Strength"}),Object(v.jsxs)(_.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:Q,onChange:function(e){X(e.target.value)},className:e.selectEmpty,children:[Object(v.jsx)(M.a,{value:1,children:"1"}),Object(v.jsx)(M.a,{value:2,children:"2"}),Object(v.jsx)(M.a,{value:3,children:"3"}),Object(v.jsx)(M.a,{value:4,children:"4"})]}),Object(v.jsx)(L.a,{children:"Required"})]})})]}),Object(v.jsx)(K,{handleSubmit:je,children:"Submit"})]}),!0===y&&Object(v.jsx)(h.a,{variant:"h6",color:"error",children:"Please Choose Different Places!"}),!0===P&&Object(v.jsx)(h.a,{variant:"h6",color:"error",children:"Please Enter a Valid Date!"}),!0===A&&Object(v.jsx)(h.a,{variant:"h6",className:e.text,children:"Form successfully Submitted!"}),!1===A&&Object(v.jsx)(h.a,{variant:"h6",color:"error",children:"Form was not submitted. Please check for duplication."})]})})]}),Object(v.jsxs)(h.a,{variant:"h4",style:{margin:"1vw 2.5vw 0"},children:["To see your Posts click"," ",Object(v.jsx)(s.b,{to:"./yourposts",style:{color:"#FF1268"},children:"here"})]}),Object(v.jsx)(w,{})]})]})},ie=Object(x.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function se(){var e=ie(),t=Object(n.useContext)(D).getLoggedIn,a=Object(n.useState)(""),r=Object(u.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(""),o=Object(u.a)(s,2),l=o[0],m=o[1],x=Object(n.useState)(""),O=Object(u.a)(x,2),f=O[0],g=O[1],y=Object(n.useState)(void 0),P=Object(u.a)(y,2),I=P[0],q=P[1],F=Object(n.useState)(void 0),E=Object(u.a)(F,2),T=E[0],z=E[1],B=void 0,W=function(){var e=Object(d.a)(j.a.mark((function e(a){var n,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),0!==c.trim().length&&0!==l.trim().length&&0!==f.trim().length&&l.trim().includes("@")?(B=!0,q(!0)):(B=!1,q(!1)),n={name:c,email:l,password:f},!B){e.next=11;break}return e.next=6,k.a.post("/api/signup",n);case 6:r=e.sent,(s=r.data).value&&(m(""),i(""),g("")),z(s.value),t();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[Object(v.jsxs)(b.a,{component:"main",maxWidth:"xs",children:[Object(v.jsx)(p.a,{}),Object(v.jsxs)("div",{className:e.paper,children:[Object(v.jsx)(S.a,{className:e.avatar,children:Object(v.jsx)(A.a,{})}),Object(v.jsx)(h.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(v.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(v.jsxs)(R.a,{container:!0,spacing:2,children:[Object(v.jsx)(R.a,{item:!0,xs:12,children:Object(v.jsx)(C.a,{autoComplete:"off",name:"Name",variant:"outlined",required:!0,fullWidth:!0,id:"Name",label:"Name",autoFocus:!0,onChange:function(e){i(e.target.value)},value:c})}),Object(v.jsx)(R.a,{item:!0,xs:12,children:Object(v.jsx)(C.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"off",onChange:function(e){m(e.target.value)},value:l,type:"email"})}),Object(v.jsx)(R.a,{item:!0,xs:12,children:Object(v.jsx)(C.a,{variant:"outlined",fullWidth:!0,name:"password",label:"Password",required:!0,type:"password",id:"password",autoComplete:"current-password",onChange:function(e){g(e.target.value)},value:f})})]}),Object(v.jsx)(N.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:W,children:"Sign Up"}),!1===I&&Object(v.jsx)(h.a,{style:{color:"#ff0000"},children:"Please Enter Valid Information!"}),!1===T&&Object(v.jsx)(h.a,{style:{color:"#ff0000"},children:"This Email is already Registered, Please Login."})]})]})]}),Object(v.jsx)(w,{})]})}var oe=a(222),le=Object(x.a)((function(e){return{card:{margin:"1vw 1.5vw",backgroundColor:"#E0E0E0",padding:"2vw"},arrow:{fontSize:"h6.fontSize",color:e.palette.grey[800],display:"inline"},gridItem:{marginBottom:"25px"},text:{color:"#33AB3E"},textFalse:{color:"#FF0000"},selectEmpty:{padding:"0px 50px 0px"}}}));function je(e){var t=le(),a=Object(n.useState)(void 0),r=Object(u.a)(a,2),c=(r[0],r[1]),i=Object(n.useState)("-"),s=Object(u.a)(i,2),o=s[0],l=s[1],b=Object(n.useContext)(D).userInfo,m=Object(n.useState)(void 0),x=Object(u.a)(m,2),p=x[0],O=x[1],f=e.post.PdateAndTime,g=function(){var t=Object(d.a)(j.a.mark((function t(a){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n={Rname:b.name,Remail:b.email,RcarStrength:o},!p){t.next=6;break}return t.next=4,k.a.post("/api/posts/request/"+e.post._id,n);case 4:r=t.sent,c(r.data);case 6:y=[];case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=e.post.Preq.filter((function(e){return e.email===b.email}));return Object(v.jsx)(R.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(oe.a,{display:"inline-block",children:Object(v.jsx)(z.a,{variant:"outlined",className:t.card,children:Object(v.jsxs)(R.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:[Object(v.jsxs)(R.a,{item:!0,xs:5,className:t.gridItem,children:[Object(v.jsx)(oe.a,{fontSize:"h4.fontSize",color:"fontWeightBold",display:"inline",children:e.post.Parrival}),Object(v.jsx)("hr",{})]}),Object(v.jsxs)(R.a,{item:!0,xs:2,className:t.gridItem,children:[Object(v.jsx)(oe.a,{className:t.arrow,display:"inline",fontSize:"h4.fontSize",children:Object(v.jsx)("i",{class:"fas fa-arrow-right"})}),Object(v.jsx)("hr",{})]}),Object(v.jsxs)(R.a,{item:!0,xs:5,style:{textAlign:"right"},className:t.gridItem,children:[Object(v.jsx)(oe.a,{fontSize:"h4.fontSize",color:"fontWeightBold",display:"inline",textAlign:"right",children:e.post.Pdestination}),Object(v.jsx)("hr",{})]}),Object(v.jsx)(R.a,{item:!0,xs:6,className:t.gridItem,children:Object(v.jsxs)(oe.a,{fontSize:"h5.fontSize",color:"fontWeightBold",display:"inline",children:["Date: ",f.date,"/",f.month,"/",f.year]})}),Object(v.jsx)(R.a,{item:!0,xs:6,style:{textAlign:"right"},className:t.gridItem,children:Object(v.jsxs)(oe.a,{fontSize:"h5.fontSize",color:"fontWeightBold",display:"inline",textAlign:"right",children:[" Time: ",f.hour<12?f.hour:f.hour-12,":",f.min>=10?f.min:"0"+f.min,f.hour<12?" am":" pm"]})}),Object(v.jsx)(R.a,{item:!0,xs:6,className:t.gridItem,children:Object(v.jsx)(oe.a,{fontSize:"h5.fontSize",color:"fontWeightBold",display:"inline",children:e.post.Pname})}),Object(v.jsx)(R.a,{item:!0,xs:6,style:{textAlign:"right"},className:t.gridItem,children:Object(v.jsx)(oe.a,{fontSize:"h5.fontSize",color:"fontWeightBold",display:"inline",textAlign:"right",children:e.post.Pemail})}),Object(v.jsx)(R.a,{item:!0,xs:6,children:Object(v.jsxs)(oe.a,{fontSize:"h5.fontSize",color:"fontWeightBold",display:"inline",children:["People in Car: ",e.post.PcarStrength]})}),0===y.length&&e.post.PcarStrength<=3&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(R.a,{item:!0,xs:6,style:{textAlign:"right"},className:t.gridItem,children:Object(v.jsxs)(W.a,{required:!0,className:t.formControl,children:[Object(v.jsx)(H.a,{id:"demo-simple-select-required-label",children:"Car Strength"}),Object(v.jsxs)(_.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:o,onChange:function(t){l(t.target.value),t.target.value+e.post.PcarStrength<=4?O(!0):O(!1)},className:t.selectEmpty,children:[Object(v.jsx)(M.a,{value:1,children:"1"}),Object(v.jsx)(M.a,{value:2,children:"2"}),Object(v.jsx)(M.a,{value:3,children:"3"}),Object(v.jsx)(M.a,{value:4,children:"4"})]}),Object(v.jsx)(L.a,{children:"Required"})]})}),Object(v.jsx)(R.a,{item:!0,xs:6,children:Object(v.jsx)(K,{handleSubmit:g,children:"Request"})})]}),0!==y.length&&Object(v.jsxs)(R.a,{item:!0,xs:6,style:{textAlign:"right"},className:t.gridItem,children:[Object(v.jsx)(h.a,{variant:"h6",className:t.text,children:"Request was sent."})," "]}),!1===p&&Object(v.jsx)(h.a,{variant:"h6",className:t.textFalse,children:"Maximum only 4 people allowed in the Car"})]})})})})}var de=function(){var e=Object(n.useContext)(D),t=e.notes,a=e.setNotes,r=new Date,c=t.filter((function(e){return new Date(e.PdateAndTime.data).getTime()-r.getTime()>=0}));return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/posts");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,t]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{style:{padding:"0 2.5vw 50px"},children:Object(v.jsx)(R.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:c.map((function(e){return Object(v.jsx)(je,{post:e})}))})}),Object(v.jsx)(w,{})]})},ue=Object(x.a)((function(e){return{text:{color:"#33AB3E"},textFalse:{color:"#FF0000"}}}));function be(e){var t=ue(),a=Object(n.useState)(void 0),r=Object(u.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(void 0),o=Object(u.a)(s,2),l=o[0],b=o[1],m=e.postDetails.Preq.filter((function(t){return t.email===e.req.email})),x=function(){var t=Object(d.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.req.carStrength+e.postDetails.PcarStrength<=4)){t.next=5;break}return t.next=3,k.a.post("/api/postRequest/true/"+e.req.email+"/"+e.req.carStrength,e.postDetails);case 3:a=t.sent,i(a.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(d.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.post("/api/postRequest/false/"+e.req.email+"/"+e.req.carStrength,e.postDetails);case 2:a=t.sent,b(a.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(oe.a,{fontSize:"h6.fontSize",color:"fontWeightBold",style:{margin:"0px 0px 20px 0px"},children:["From: ",e.req.name," \xa0||\xa0 Email: ",e.req.email,"|| Number of People they have: ",e.req.carStrength,e.current&&"true"===m[0].status&&Object(v.jsx)(h.a,{variant:"h6",className:t.text,children:"Request Accepted"}),e.current&&"false"===m[0].status&&Object(v.jsx)(h.a,{variant:"h6",className:t.textFalse,children:"Request Rejected"}),e.current&&void 0===m[0].status&&void 0===c&&void 0===l&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(N.a,{style:{backgroundColor:"#1AD61A",color:"#e0e0e0",margin:"0px 0px 0px 20px"},onClick:x,children:Object(v.jsx)("i",{class:"fas fa-check"})}),Object(v.jsx)(N.a,{style:{backgroundColor:"#FF0000",color:"#e0e0e0",margin:"0px 0px 0px 20px"},onClick:p,children:Object(v.jsx)("i",{class:"fas fa-times"})})]})]})})}var he=Object(x.a)((function(e){return{card:{margin:"2.5vw 2.5vw",backgroundColor:"#E0E0E0",width:"95vw",padding:"20px"},arrow:{fontSize:"h6.fontSize",color:e.palette.grey[800],display:"inline"},gridItem:{marginBottom:"25px"}}}));function me(e){var t=he(),a=e.post.PdateAndTime,n=function(){var t=Object(d.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("/api/deletepost/"+e.post._id);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(v.jsx)(z.a,{variant:"outlined",className:t.card,children:Object(v.jsxs)(R.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:[Object(v.jsx)(R.a,{item:!0,xs:5,className:t.gridItem,children:Object(v.jsx)(oe.a,{fontSize:"h4.fontSize",color:"fontWeightBold",display:"inline",children:e.post.Parrival})}),Object(v.jsx)(R.a,{item:!0,xs:2,className:t.gridItem,children:Object(v.jsx)(oe.a,{className:t.arrow,display:"inline",fontSize:"h4.fontSize",children:Object(v.jsx)("i",{class:"fas fa-arrow-right"})})}),Object(v.jsx)(R.a,{item:!0,xs:5,style:{textAlign:"right"},className:t.gridItem,children:Object(v.jsx)(oe.a,{fontSize:"h4.fontSize",color:"fontWeightBold",display:"inline",textAlign:"right",children:e.post.Pdestination})}),Object(v.jsx)(R.a,{item:!0,xs:6,className:t.gridItem,children:Object(v.jsxs)(oe.a,{fontSize:"h5.fontSize",color:"fontWeightBold",display:"inline",children:["Date: ",a.date,"/",a.month,"/",a.year]})}),Object(v.jsx)(R.a,{item:!0,xs:6,style:{textAlign:"right"},className:t.gridItem,children:Object(v.jsxs)(oe.a,{fontSize:"h5.fontSize",color:"fontWeightBold",display:"inline",textAlign:"right",children:[" Time: ",a.hour<12?a.hour:a.hour-12,":",a.min>=10?a.min:"0"+a.min,a.hour<12?" am":" pm"]})}),Object(v.jsx)(R.a,{xs:12,className:t.gridItem,children:Object(v.jsxs)(oe.a,{fontSize:"h5.fontSize",color:"fontWeightBold",display:"inline",children:["Number of People you have in Car: ",e.post.PcarStrength]})}),e.post.Preq.map((function(t){return Object(v.jsx)(R.a,{item:!0,xs:12,children:Object(v.jsx)(be,{current:e.current,req:t,postId:e.post._id,postDetails:e.post})})})),Object(v.jsx)(N.a,{style:{backgroundColor:"#424242",color:"#e0e0e0",marginTop:"20px"},onClick:n,children:Object(v.jsx)("i",{class:"fas fa-trash-alt"})})]})})}function xe(){var e=Object(n.useContext)(D),t=e.userID,a=e.notes,r=e.setNotes,c=new Date,i=[];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/posts");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,a]);var s=a.filter((function(e){return e.Pid===t&&(new Date(e.PdateAndTime.data).getTime()-c.getTime()>=0||(i.push(e),!1))}));return Object(v.jsxs)(v.Fragment,{children:[0===s.length&&0===i.length&&Object(v.jsx)(h.a,{variant:"h4",style:{margin:"1vw 1vw"},children:"No posts to Display."}),s.map((function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(me,{post:e,current:!0})})})),0!==i.length&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("hr",{color:"red"}),Object(v.jsx)(h.a,{variant:"h4",style:{margin:"1vw 2.5vw 0"},children:"Request History:"})]}),i.map((function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(me,{post:e,current:!1})})}))]})}var pe=a(92),Oe=a(218),fe=a(219),ge=a(220),ve=a(217),ye=a(221),we=a(120),Se=a.n(we);var Ce=function(){var e=Object(n.useContext)(D).getLoggedIn,t=Object(o.f)(),a=function(){var a=Object(d.a)(j.a.mark((function a(n){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.next=3,k.a.get("/api/logout");case 3:return a.next=5,e();case 5:t.push("/login");case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(v.jsx)(N.a,{color:"#ffffff",variant:"contained",onClick:a,children:"Log Out"})},Ne=function(e){return Object(v.jsx)(N.a,{color:"#ffffff",variant:"contained",style:{marginRight:"1vw"},children:e.children})},Pe=Object(x.a)((function(e){return{logOut:{textAlign:"right"}}})),ke=function(){var e=Pe();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(R.a,{xs:11,md:6,className:e.logOut,children:[Object(v.jsx)(Ne,{children:Object(v.jsx)(s.b,{to:"/filter",style:{textDecoration:"none",color:"#424242"},children:"Filter"})}),Object(v.jsx)(Ne,{children:Object(v.jsx)(s.b,{to:"/posts",style:{textDecoration:"none",color:"#424242"},children:"All Posts"})}),Object(v.jsx)(Ce,{})]})})},Ie=Object(x.a)((function(e){return{logOut:{textAlign:"right"}}})),qe=function(e){var t=Ie();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(R.a,{item:!0,xs:11,md:6,className:t.logOut,children:[Object(v.jsx)(Ne,{children:Object(v.jsx)(s.b,{to:"./login",style:{textDecoration:"none",color:"#424242"},children:"Login"})}),Object(v.jsx)(Ne,{children:Object(v.jsx)(s.b,{to:"/signup",style:{textDecoration:"none",color:"#424242"},children:"Signup"})})]})})},De=Object(x.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(8),right:e.spacing(2)}}}));function Fe(e){var t=e.children,a=e.window,n=De(),r=Object(Oe.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return Object(v.jsx)(fe.a,{in:r,children:Object(v.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:n.root,children:t})})}function Ae(e){var t=Object(n.useContext)(D).loggedIn;return Object(v.jsxs)(r.a.Fragment,{children:[Object(v.jsx)(p.a,{}),Object(v.jsx)(ge.a,{style:{background:"#424242"},children:Object(v.jsx)(ve.a,{children:Object(v.jsxs)(R.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:[Object(v.jsx)(R.a,{item:!0,xs:1,md:6,children:Object(v.jsx)(N.a,{color:"#ffffff",variant:"contained",children:Object(v.jsx)(s.b,{to:"/",style:{textDecoration:"none",color:"#424242"},children:"Home"})})}),t?Object(v.jsx)(ke,{}):Object(v.jsx)(qe,{})]})})}),Object(v.jsx)(ve.a,{id:"back-to-top-anchor"}),Object(v.jsx)(Fe,Object(pe.a)(Object(pe.a)({},e),{},{children:Object(v.jsx)(ye.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(v.jsx)(Se.a,{})})}))]})}var Ee=Object(x.a)((function(e){return{card:{margin:"2.5vw 2.5vw",backgroundColor:"#DEE3E3",width:"95vw",padding:"20px"},root:{alignItems:"center"},formControl:{margin:e.spacing(0),width:"200px",marginBottom:"50px"},text:{color:"#33AB3E"}}}));function Te(){var e=Ee(),t=Object(n.useContext)(D),a=t.notes,r=t.setNotes,c=Object(n.useState)("Airport"),i=Object(u.a)(c,2),s=i[0],o=i[1],l=Object(n.useState)("Campus"),b=Object(u.a)(l,2),m=b[0],x=b[1],p=Object(n.useState)(new Date),O=Object(u.a)(p,2),f=O[0],g=O[1],y=Object(n.useState)([]),w=Object(u.a)(y,2),S=w[0],C=w[1],N=Object(n.useState)(),P=Object(u.a)(N,2),I=P[0],q=P[1],F=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.filter((function(e){var t=new Date(e.PdateAndTime.data);return Math.abs(t.setHours(0,0,0,0)-f.setHours(0,0,0,0))<=0}));case 2:t=e.sent,C(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/posts");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,a]),Object(n.useEffect)((function(){var e,t=new Date,a=new Date(f);q((e=t,a.setHours(0,0,0,0)-e.setHours(0,0,0,0)<0))}),[f]),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{children:[Object(v.jsxs)(z.a,{variant:"outlined",className:e.card,children:[Object(v.jsx)(h.a,{variant:"h4",children:"Filter"}),Object(v.jsx)("form",{className:e.form,noValidate:!0,children:Object(v.jsxs)(B.a,{children:[Object(v.jsxs)(R.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:[Object(v.jsx)(R.a,{item:!0,xs:4,children:Object(v.jsxs)(W.a,{required:!0,className:e.formControl,children:[Object(v.jsx)(H.a,{id:"demo-simple-select-required-label",children:"Arrival"}),Object(v.jsxs)(_.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:s,onChange:function(e){o(e.target.value)},className:e.selectEmpty,children:[Object(v.jsx)(M.a,{value:"Campus",children:"Campus"}),Object(v.jsx)(M.a,{value:"Airport",children:"Airport"}),Object(v.jsx)(M.a,{value:"Bustop",children:"Bustop"})]}),Object(v.jsx)(L.a,{children:"Required"})]})}),Object(v.jsx)(R.a,{item:!0,xs:4,children:Object(v.jsxs)(W.a,{required:!0,className:e.formControl,children:[Object(v.jsx)(H.a,{id:"demo-simple-select-required-label",children:"Destination"}),Object(v.jsxs)(_.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:m,onChange:function(e){x(e.target.value)},className:e.selectEmpty,children:[Object(v.jsx)(M.a,{value:"Campus",children:"Campus"}),Object(v.jsx)(M.a,{value:"Airport",children:"Airport"}),Object(v.jsx)(M.a,{value:"Bustop",children:"Bustop"})]}),Object(v.jsx)(L.a,{children:"Required"})]})}),Object(v.jsx)(J.a,{utils:V.a,children:Object(v.jsx)(R.a,{item:!0,xs:4,children:Object(v.jsx)(U.a,{margin:"normal",id:"date-picker-dialog",label:"Arrival Date",format:"dd/MM/yyyy",value:f,onChange:function(e){g(e)},KeyboardButtonProps:{"aria-label":"change date"}})})}),Object(v.jsx)(R.a,{item:!0,xs:4,children:Object(v.jsx)(K,{handleSubmit:function(){var e=a.filter((function(e){if(e.Parrival===s&&e.Pdestination===m){var t=new Date;return new Date(e.PdateAndTime.data).getTime()-t.getTime()>=0}return!1}));C(e)},children:"By Place"})}),Object(v.jsx)(R.a,{item:!0,xs:4,children:Object(v.jsx)(K,{handleSubmit:F,children:"By Date"})})]}),!0===I&&Object(v.jsx)(h.a,{variant:"h6",color:"textPrimary",style:{marginTop:"1vw"},children:"You are viewing Past Requests!"})]})})]}),Object(v.jsx)("hr",{}),0!==S.length&&Object(v.jsx)(h.a,{variant:"h4",style:{margin:"1vw 4vw 0"},children:"Results:"}),0===S.length&&Object(v.jsx)(h.a,{variant:"h4",style:{margin:"1vw 1vw"},children:"No posts to Display."}),Object(v.jsx)("div",{style:{padding:"0 2.5vw 50px"},children:Object(v.jsx)(R.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:S.map((function(e){return Object(v.jsx)(je,{post:e})}))})})]})})}k.a.defaults.withCredentials=!0;var ze=function(){var e=Object(n.useContext)(D).loggedIn;return Object(v.jsxs)(s.a,{children:[Object(v.jsx)(Ae,{}),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.b,{path:"/login",children:!0!==e?Object(v.jsx)(T,{}):Object(v.jsx)(o.a,{to:"/"})}),Object(v.jsx)(o.b,{path:"/",exact:!0,children:!0===e?Object(v.jsx)(ce,{}):Object(v.jsx)(o.a,{to:"/login"})}),Object(v.jsx)(o.b,{path:"/signup",children:!0!==e?Object(v.jsx)(se,{}):Object(v.jsx)(o.a,{to:"/"})}),Object(v.jsx)(o.b,{path:"/posts",children:!0===e?Object(v.jsx)(de,{}):Object(v.jsx)(o.a,{to:"/login"})}),Object(v.jsx)(o.b,{path:"/yourposts",children:!0===e?Object(v.jsx)(xe,{}):Object(v.jsx)(o.a,{to:"/login"})}),Object(v.jsx)(o.b,{path:"/filter",children:!0===e?Object(v.jsx)(Te,{}):Object(v.jsx)(o.a,{to:"/login"})})]})]})};i.a.render(Object(v.jsx)(q,{children:Object(v.jsx)(ze,{})}),document.getElementById("root"))},85:function(e,t,a){e.exports={backdrop:"Modal_backdrop__1nQ5O",modal:"Modal_modal__GOR8x","slide-down":"Modal_slide-down__2I1oR"}}},[[172,1,2]]]);
//# sourceMappingURL=main.b306d1d5.chunk.js.map