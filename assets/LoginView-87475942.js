import{_ as d,o as u,c as m,a as s,j as l,D as c}from"./index-58dd759c.js";const{VITE_URL:p,VITE_PATH:D}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"qaz326978547",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},_={data(){return{user:{username:"",password:""}}},methods:{login(){this.axios.post(`${p}/admin/signin`,this.user).then(o=>{console.log(o);const{expired:e,message:t,token:i}=o.data;document.cookie=`hexToken=${i}; expires=${e}`,o.data.success&&(swal({title:t,icon:"success",timer:2e3}),this.$router.push("/admin/products"))}).catch(o=>{var t;const e=((t=o.data)==null?void 0:t.message)||"登入失敗";swal({title:e,icon:"error",timer:2e3})})}},mounted(){console.log(this.user)}},f={class:"mt-5 overflow-hidden"},h={class:"row justify-content-center"},g=s("h1",{class:"h3 p-0 mb-3 font-weight-normal text-center"},"請先登入",-1),w={class:"col-6"},x={id:"form",class:"form-signin"},b={class:"form-floating mb-3"},v=s("label",{for:"username"},"Email address",-1),V={class:"form-floating"},E=s("label",{for:"password"},"Password",-1),T=s("p",{class:"mt-5 mb-3 text-muted text-center"},"© 2023~∞ - 羅根傢俱 Vogue Furniture",-1);function k(o,e,t,i,n,a){return u(),m("div",f,[s("div",h,[g,s("div",w,[s("form",x,[s("div",b,[l(s("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=r=>n.user.username=r)},null,512),[[c,n.user.username]]),v]),s("div",V,[l(s("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=r=>n.user.password=r)},null,512),[[c,n.user.password]]),E]),s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"button",onClick:e[2]||(e[2]=(...r)=>a.login&&a.login(...r))}," 登入 ")])])]),T])}const P=d(_,[["render",k]]);export{P as default};
