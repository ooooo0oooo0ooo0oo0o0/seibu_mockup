import{_ as n,c as m,w as o,h as u,o as p,a as s,l as c,m as g,g as i,n as t,b as f,d as h,p as V}from"./index-DsJwSORj.js";const _={name:"ClientLogin",data(){return{email:"",password:"",emailError:null,passwordError:null}},methods:{handleLogin(){this.emailError=null,this.passwordError=null,this.validateEmail(this.email)||(this.emailError="正しいメールアドレスを入力してください"),!this.emailError&&!this.passwordError&&this.$router.push("/user_page")},validateEmail(a){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)}}},w={class:"form-group"},E={class:"form-group"};function x(a,r,b,v,e,d){return p(),m(u,{class:"pt-10"},{default:o(()=>[s(V,{class:"client-login",width:"500"},{default:o(()=>[s(c,{onSubmit:g(d.handleLogin,["prevent"])},{default:o(()=>[i("div",w,[s(t,{label:"メールアドレス",modelValue:e.email,"onUpdate:modelValue":r[0]||(r[0]=l=>e.email=l),type:"email",placeholder:"xxx@example.com",outlined:"",error:!!e.emailError,"error-messages":e.emailError,required:""},null,8,["modelValue","error","error-messages"])]),i("div",E,[s(t,{label:"パスワード",modelValue:e.password,"onUpdate:modelValue":r[1]||(r[1]=l=>e.password=l),type:"password",outlined:"",error:!!e.passwordError,"error-messages":e.passwordError,placeholder:"",required:""},null,8,["modelValue","error","error-messages"])]),s(f,{type:"submit",class:"login-button",size:"large","append-icon":"mdi-login"},{default:o(()=>r[2]||(r[2]=[h("ログイン")])),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})}const C=n(_,[["render",x],["__scopeId","data-v-f7ddbd40"]]);export{C as default};
//# sourceMappingURL=ClientLogin-Dy109tfN.js.map