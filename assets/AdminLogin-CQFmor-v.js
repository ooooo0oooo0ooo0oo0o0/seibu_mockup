import{_ as n,c as p,w as o,h as u,o as m,a as s,l as g,m as h,g as i,n as l,b as c,d as f,p as w}from"./index-DsJwSORj.js";const V={name:"AdminLogin",data(){return{adminId:"",password:"",idError:null,passwordError:null}},methods:{handleLogin(){this.idError=null,this.passwordError=null,this.validateId(this.adminId)||(this.idError="Please enter a valid ID."),!this.idError&&!this.passwordError&&(console.log("Logging in with:",{adminId:this.adminId,password:this.password}),this.$router.push("/admin"))},validateId(d){return d&&d!==""}}},_={class:"form-group"},E={class:"form-group"};function I(d,e,b,v,r,t){return m(),p(u,{class:"pt-10"},{default:o(()=>[s(w,{class:"admin-login",width:"500"},{default:o(()=>[s(g,{onSubmit:h(t.handleLogin,["prevent"])},{default:o(()=>[i("div",_,[s(l,{label:"管理者ID",modelValue:r.adminId,"onUpdate:modelValue":e[0]||(e[0]=a=>r.adminId=a),type:"text",placeholder:"",outlined:"",error:!!r.idError,"error-messages":r.idError,required:""},null,8,["modelValue","error","error-messages"])]),i("div",E,[s(l,{label:"パスワード",modelValue:r.password,"onUpdate:modelValue":e[1]||(e[1]=a=>r.password=a),type:"password",outlined:"",error:!!r.passwordError,"error-messages":r.passwordError,placeholder:"",required:""},null,8,["modelValue","error","error-messages"])]),s(c,{type:"submit",class:"login-button",size:"large","append-icon":"mdi-login"},{default:o(()=>e[2]||(e[2]=[f("ログイン")])),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})}const L=n(V,[["render",I],["__scopeId","data-v-9087af6d"]]);export{L as default};
//# sourceMappingURL=AdminLogin-CQFmor-v.js.map
