import{_ as n,c as u,w as i,j as m,o as p,b as o,a,g as l,V as g,d as h,h as f,i as w}from"./index-CAEEf1GX.js";const c={name:"AdminLogin",data(){return{adminId:"",password:"",idError:null,passwordError:null}},methods:{handleLogin(){this.idError=null,this.passwordError=null,this.validateId(this.adminId)||(this.idError="Please enter a valid ID."),!this.idError&&!this.passwordError&&(console.log("Logging in with:",{adminId:this.adminId,password:this.password}),this.$router.push("/admin"))},validateId(s){return s&&s!==""}}},V={class:"form-group"},_={class:"form-group"};function E(s,e,I,b,r,t){return p(),u(m,{class:"admin-login",width:"500"},{default:i(()=>[o(w,{onSubmit:f(t.handleLogin,["prevent"])},{default:i(()=>[a("div",V,[o(l,{label:"管理者ID",modelValue:r.adminId,"onUpdate:modelValue":e[0]||(e[0]=d=>r.adminId=d),type:"text",placeholder:"",outlined:"",error:!!r.idError,"error-messages":r.idError,required:""},null,8,["modelValue","error","error-messages"])]),a("div",_,[o(l,{label:"パスワード",modelValue:r.password,"onUpdate:modelValue":e[1]||(e[1]=d=>r.password=d),type:"password",outlined:"",error:!!r.passwordError,"error-messages":r.passwordError,placeholder:"",required:""},null,8,["modelValue","error","error-messages"])]),o(g,{type:"submit",class:"login-button",size:"large","append-icon":"mdi-login"},{default:i(()=>e[2]||(e[2]=[h("ログイン")])),_:1})]),_:1},8,["onSubmit"])]),_:1})}const x=n(c,[["render",E],["__scopeId","data-v-195425ff"]]);export{x as default};
//# sourceMappingURL=AdminLogin-D7EpDfwo.js.map