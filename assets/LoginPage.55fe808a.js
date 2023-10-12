import{l as E,r as g,ak as P,ab as X,ac as J,o as W,h as F,m as Q,g as N,aM as j,Y as S,q as B,W as O,aN as Z,an as A,ap as M,aJ as q,ay as r,j as d,ar as x,aO as k,az as Y,aP as H,aQ as T,as as L,aR as D,aS as G}from"./index.bc93d889.js";import{u as U}from"./use-quasar.df13b86b.js";var K=E({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(a,{slots:h,emit:p}){const m=N(),n=g(null);let c=0;const s=[];function v(e){const o=typeof e=="boolean"?e:a.noErrorFocus!==!0,w=++c,V=(t,l)=>{p("validation"+(t===!0?"Success":"Error"),l)},z=t=>{const l=t.validate();return typeof l.then=="function"?l.then(i=>({valid:i,comp:t}),i=>({valid:!1,comp:t,err:i})):Promise.resolve({valid:l,comp:t})};return(a.greedy===!0?Promise.all(s.map(z)).then(t=>t.filter(l=>l.valid!==!0)):s.reduce((t,l)=>t.then(()=>z(l).then(i=>{if(i.valid===!1)return Promise.reject(i)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return w===c&&V(!0),!0;if(w===c){const{comp:l,err:i}=t[0];if(i!==void 0&&console.error(i),V(!1,l),o===!0){const C=t.find(({comp:R})=>typeof R.focus=="function"&&j(R.$)===!1);C!==void 0&&C.comp.focus()}}return!1})}function b(){c++,s.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function _(e){e!==void 0&&S(e);const o=c+1;v().then(w=>{o===c&&w===!0&&(a.onSubmit!==void 0?p("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function I(e){e!==void 0&&S(e),p("reset"),B(()=>{b(),a.autofocus===!0&&a.noResetFocus!==!0&&f()})}function f(){O(()=>{if(n.value===null)return;const e=n.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||n.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||n.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(n.value.querySelectorAll("[tabindex]"),o=>o.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}P(Z,{bindComponent(e){s.push(e)},unbindComponent(e){const o=s.indexOf(e);o>-1&&s.splice(o,1)}});let u=!1;return X(()=>{u=!0}),J(()=>{u===!0&&a.autofocus===!0&&f()}),W(()=>{a.autofocus===!0&&f()}),Object.assign(m.proxy,{validate:v,resetValidation:b,submit:_,reset:I,focus:f,getValidationComponents:()=>s}),()=>F("form",{class:"q-form",ref:n,onSubmit:_,onReset:I},Q(h.default))}}),$="/assets/logo.43a71fa6.png";const ee="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InpfX21pZW13NGhoTmdvQWQxR3N6ciJ9.eyJodHRwczovL2F1dGguZHRuLmNvbS9jdXN0b21lcklkIjpbIkRJT0dFTkVTMDAxIiwiRGlvZ2VuZXNDdXN0b21lcjAwMSIsIkRpb2dlbmVzQ3VzdG9tZXIwMDIiLCJEVE4wMDAwMDAwMElOVCJdLCJodHRwczovL2F1dGguZHRuLmNvbS9wcm9kdWN0Q29kZSI6InVua25vd24iLCJodHRwczovL2F1dGguZHRuLmNvbS9lbnQiOiJbXSIsImh0dHBzOi8vYXV0aC5kdG4uY29tL3JlcXVlc3RlcklwIjoiMTguMjEzLjE3NC4yNyIsImlzcyI6Imh0dHBzOi8vaWQuYXV0aC5kdG4uY29tLyIsInN1YiI6ImF1dGgwfDYzNWFjNDQ1YTE3YzVjMjQ3NjU2OWIxOSIsImF1ZCI6WyJodHRwczovL2FwaS5hdXRoLmR0bi5jb20iLCJodHRwczovL2R0bi1hdXRoLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2OTcwNzgzODksImV4cCI6MTY5NzE2NDc4OSwiYXpwIjoiNElRNzFyRExDMHltbGhPWmVKbkljR1U3amFFRWhPdUoiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIGFkZHJlc3MgcGhvbmUiLCJndHkiOiJwYXNzd29yZCIsInBlcm1pc3Npb25zIjpbXX0.TU_PARBXSBb1nJuX1QcIiAwLgK4fPq3JwBLaYI8lDLNfC7wx-zXhCKR_E9tMckPIZzIxgE36z0Te_BCk0t3Na_9Eltp1VIxyAR4Tuzy2UbUEPuxFV10XHt759OEwb6rgKAchcft7yZz3oS0gowAxlz_Ihcf4xQpObbBvy6S8VPTXBYV8_qWRj9eOyuwaweWxXF1bfyWw64UBX4Dz5CEmzVaVuys0IX51re8MwEkPMppUTOcHzM1Ic7WLangwJw5SrjucVX_mKtx3WdWb_LP2cw1QOC9qwc9QW-lWk3RSgJJy13ful-gu4cyKS9ikpmubQ4fTWAHnvrpPMi_cQhaq7g",oe=86400,te="Bearer";var ae={access_token:ee,expires_in:oe,token_type:te};const se="Wrong email or password.",ne=401;var le={message:se,status:ne};const y=a=>(D("data-v-090b18aa"),a=a(),G(),a),ie={class:"row page-container"},re={class:"col-5 q-pa-sm"},ce=y(()=>r("img",{src:$,style:{widt:"225px",height:"59px"},class:"q-ma-sm"},null,-1)),ue={style:{"margin-left":"100px"},class:"row"},de={class:"col-10"},me=y(()=>r("p",{readonly:""},"Login",-1)),pe=y(()=>r("span",{class:"text-weight-medium"},"Email",-1)),fe=y(()=>r("span",{class:"text-weight-medium",style:{"margin-top":"5px"}},"Password",-1)),ge=y(()=>r("div",{class:"col-7 with-background-image"},null,-1)),ve={__name:"LoginPage",setup(a){const h=N().appContext.config.globalProperties,p=U(),m=g(null),n=g(null),c=g(!1),s=g(!1),v=g(["line"]),b=u=>/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(u),_=()=>{s.value=!s.value},I=async()=>{if(m.value==="edquiban.erick@gmail.com"&&n.value==="mmddyyyy"){const e={login_success_data:await ae,user:{email:m.value,firstName:"Erick",lastName:"Edquiban",companyLogo:"~assets/logo.png"},banner:{imgUrl:"~assets/employee+benefits 1.png",title:"We prioritize our employees' health by offering competitive medical insurance plans, ensuring that you and your family receive top-notch care.",discreption:"Test Desc"}};console.log("success");try{p.localStorage.set("user",e),console.log("User data saved to local storage"),h.$router.push({path:"/dashboard"})}catch(o){console.error("Error saving user data to local storage:",o)}}else{const u=await le;p.notify({color:"red-5",textColor:"white",icon:"warning",position:"top",message:u.message})}},f=()=>{m.value=null,n.value=null,c.value=!1};return(u,e)=>(M(),q("div",null,[r("div",ie,[r("div",re,[ce,r("div",ue,[r("div",de,[me,d(K,{onSubmit:I,onReset:f,class:"q-gutter-md"},{default:x(()=>[pe,d(k,{modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=o=>m.value=o),placeholder:"name@example.com",outlined:"",type:"email","lazy-rules":"",standout:"",rules:[o=>o!==null&&o!==""||b(o)||"Please input a valid email address"]},null,8,["modelValue","rules"]),fe,d(k,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=o=>n.value=o),outlined:"",type:s.value?"text":"password",placeholder:"min. 8 characters","lazy-rules":"",rules:[o=>o!==null&&o!==""||"Please type your password"]},{append:x(()=>[d(Y,{onClick:_,name:s.value?"visibility_off":"visibility"},null,8,["name"])]),_:1},8,["modelValue","type","rules"]),d(H,{size:"xs",modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=o=>v.value=o),val:"xs",label:"Keep me logged in",class:"check-box"},null,8,["modelValue"]),d(T,{style:{"margin-top":"100px"},vertical:"",align:"center",class:"q-mt-lg"},{default:x(()=>[d(L,{class:"login-btn","no-caps":"",label:"Login",type:"submit"}),d(L,{"no-caps":"",label:"Forgot password",type:"submit",flat:"",color:"primary - color",class:"btn-forgot-password"})]),_:1})]),_:1})])])]),ge])]))}};var Ie=A(ve,[["__scopeId","data-v-090b18aa"]]);export{Ie as default};
