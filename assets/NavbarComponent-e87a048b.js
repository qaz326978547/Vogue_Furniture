import{c as d}from"./cartStore-ac7d5174.js";import{m as _,f as p,_ as h,r as b,o as f,c as m,a as l,d as e,w as o,t as u,n as c,F as v}from"./index-e6ea0b44.js";const g={data(){return{path:"/",navColor:!1,scrollHide:!0,scrollY:0,isOpenNavbar:!1}},watch:{$route(){this.path=this.$route.path,console.log(this.path)}},methods:{..._(d,["getCart"]),scrollTop(){scrollTo(0,0)},handleScroll(){console.log(this.scrollY),this.path=="/"?(this.navColor=!1,this.scrollY>50?this.navColor=!0:this.navColor=!1):this.navColor=!0,this.scrollY=document.documentElement.scrollTop,this.scrollHide=!(document.documentElement.scrollTop>200)},clickNavbar(){this.isOpenNavbar?this.isOpenNavbar=!1:this.isOpenNavbar=!0}},watch:{$route(){this.isOpenNavbar=!1}},computed:{...p(d,["cart"])},mounted(){this.getCart(),window.addEventListener("scroll",this.handleScroll)}},x=l("img",{src:"https://img.onl/2sOAAF",alt:"",style:{width:"150px"}},null,-1),C={class:"d-none d-md-flex nav-bar align-items-center"},N={class:"text-center"},k=l("li",null,"產品",-1),O=l("li",null,"PRODUCT",-1),T={class:"text-center"},w=l("li",null,"情境空間",-1),y=l("li",null,"PROJECT",-1),S={class:"text-center"},z=l("li",null,"關於我們",-1),E=l("li",null,"ABOUT",-1),A={class:"bi bi-cart2 position-relative",style:{"font-size":"24px"}},B={style:{"font-size":"8px"},class:"position-absolute top-0 start-100 badge badge-pill rounded-pill bg-danger"},H={class:"text-center"},P=l("li",null,"產品",-1),R=l("li",null,"PRODUCT",-1),U={class:"text-center"},Y=l("li",null,"情境空間",-1),j=l("li",null,"PROJECT",-1),D={class:"text-center"},F=l("li",null,"關於我們",-1),J=l("li",null,"ABOUT",-1),V={class:"cart-icon"},L={class:"bi bi-cart2 position-relative",style:{"font-size":"24px"}},q={style:{"font-size":"8px"},class:"position-absolute top-10 start-100 badge badge-pill rounded-pill bg-danger"};function G(r,n,I,K,a,i){const s=b("router-link");return f(),m(v,null,[l("nav",{class:c(["d-flex py-3 px-5 justify-content-between mb-5 main-nav",{"bg-white":a.navColor}]),onScroll:n[2]||(n[2]=(...t)=>i.handleScroll&&i.handleScroll(...t))},[e(s,{to:"/"},{default:o(()=>[x]),_:1}),l("ul",C,[l("li",null,[l("ul",N,[e(s,{to:"/products"},{default:o(()=>[k,O]),_:1})])]),l("li",null,[l("ul",T,[e(s,{to:"/projects"},{default:o(()=>[w,y]),_:1})])]),l("li",null,[l("ul",S,[e(s,{to:"/about"},{default:o(()=>[z,E]),_:1})])]),l("li",null,[e(s,{to:"/cart"},{default:o(()=>{var t;return[l("i",A,[l("span",B,u((t=r.cart.carts)==null?void 0:t.length),1)])]}),_:1})])]),l("ul",{class:c([{active:a.isOpenNavbar},"d-flex d-md-none nav-bar nav-bar-rwd align-items-center flex-column"])},[l("li",null,[l("ul",H,[e(s,{to:"/products"},{default:o(()=>[P,R]),_:1})])]),l("li",null,[l("ul",U,[e(s,{to:"/projects"},{default:o(()=>[Y,j]),_:1})])]),l("li",null,[l("ul",D,[e(s,{to:"/about"},{default:o(()=>[F,J]),_:1})])])],2),l("i",{class:c(["bi bi-list d-md-none d-block",{"d-none":a.isOpenNavbar}]),style:{"font-size":"36px",cursor:"pointer"},onClick:n[0]||(n[0]=(...t)=>i.clickNavbar&&i.clickNavbar(...t))},null,2),l("i",{class:c(["bi bi-x-lg d-md-none d-block",{"d-none":!a.isOpenNavbar}]),style:{"font-size":"36px",cursor:"pointer"},onClick:n[1]||(n[1]=(...t)=>i.clickNavbar&&i.clickNavbar(...t))},null,2)],34),e(s,{to:"/cart",class:c(["cart-icon d-md-none d-block",{"d-none":a.scrollHide&&this.path=="/"}])},{default:o(()=>{var t;return[l("span",V,[l("i",L,[l("span",q,u((t=r.cart.carts)==null?void 0:t.length),1)])])]}),_:1},8,["class"]),l("i",{class:c([{"d-none":a.scrollHide},"bi bi-chevron-up goTop-icon"]),onClick:n[3]||(n[3]=(...t)=>i.scrollTop&&i.scrollTop(...t))},null,2)],64)}const W=h(g,[["render",G]]);export{W as N};