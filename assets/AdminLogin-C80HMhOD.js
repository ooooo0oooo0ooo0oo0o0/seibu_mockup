import{_ as t,c as p,w as i,h as u,o as m,a as s,n as g,p as f,g as d,q as l,b as h,d as w,K as c}from"./index-BRFsiI9f.js";const V={name:"AdminLogin",data(){return{adminId:"",password:"",idError:null,passwordError:null,visiblePass:!1}},methods:{handleLogin(){this.idError=null,this.passwordError=null,this.validateId(this.adminId)||(this.idError="Please enter a valid ID."),!this.idError&&!this.passwordError&&(console.log("Logging in with:",{adminId:this.adminId,password:this.password}),this.$router.push("/admin"))},validateId(n){return n&&n!==""}}},v={class:"form-group"},b={class:"form-group"};function I(n,r,E,_,e,a){return m(),p(u,{class:"pt-10"},{default:i(()=>[s(c,{class:"admin-login",width:"500"},{default:i(()=>[s(g,{onSubmit:f(a.handleLogin,["prevent"])},{default:i(()=>[d("div",v,[s(l,{label:"管理者ID",modelValue:e.adminId,"onUpdate:modelValue":r[0]||(r[0]=o=>e.adminId=o),type:"text",placeholder:"",outlined:"",error:!!e.idError,"error-messages":e.idError,required:""},null,8,["modelValue","error","error-messages"])]),d("div",b,[s(l,{label:"パスワード",modelValue:e.password,"onUpdate:modelValue":r[1]||(r[1]=o=>e.password=o),type:e.visiblePass?"text":"password",outlined:"",error:!!e.passwordError,"error-messages":e.passwordError,placeholder:"","append-inner-icon":e.visiblePass?"mdi-eye-off-outline":"mdi-eye-outline","onClick:appendInner":r[2]||(r[2]=o=>e.visiblePass=!e.visiblePass),required:""},null,8,["modelValue","type","error","error-messages","append-inner-icon"])]),s(h,{type:"submit",class:"login-button",size:"large","append-icon":"mdi-login"},{default:i(()=>r[3]||(r[3]=[w("ログイン")])),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})}const y=t(V,[["render",I],["__scopeId","data-v-52a49424"]]);export{y as default};
//# sourceMappingURL=AdminLogin-C80HMhOD.js.map
