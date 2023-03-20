import{p as v}from"./project-6eb5fe19.js";import{p as h}from"./productsStore-6733aad1.js";import{_ as y,m as b,f as P,r as _,o,c,a as t,t as d,F as p,h as m,i as a,d as g,w as u,e as k,b as e}from"./index-e6ea0b44.js";import{P as w,S as V,a as E}from"./swiper-slide-1312df7e.js";import{E as S}from"./effect-fade-da7c7a65.js";import"./alertStore-ac2ff4cb.js";const{VITE_URL:T,VITE_PATH:C}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"qaz326978547",BASE_URL:"/Vogue_Furniture/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},I={data(){return{project:{},products:[],modules:[S,w],breakpoints:{992:{slidesPerView:3},769:{slidesPerView:2}}}},components:{Swiper:V,SwiperSlide:E},methods:{getProject(){this.project=v.projects;const{id:n}=this.$route.params,i=this.project.filter(l=>l.id==n);this.project=i[0]},getProduct(){this.axios.get(`${T}/api/${C}/products/all`).then(n=>{console.log(n.data.products);const i=n.data.products.filter(l=>l.category==this.project.category);this.products=i,console.log(this.products)})},...b(h,["getCategoryItem"])},computed:{...P(h,["categoryItem"])},mounted(){this.getProject(),this.getProduct()}},R=t("div",{class:"project-bg"},[t("div",{class:"d-flex justify-content-center align-items-center flex-column h-100"},[t("h3",null,"情境空間"),t("h3",null,"PROJECT")])],-1),B={class:"bg-secondary text-center py-3"},D={class:"container"},N=["src"],U={key:0},A=t("h3",{class:"text-center"},"客廳｜美感+實用的最高CP值",-1),F=t("p",{class:"text-center lh-lg fs-6"},[e(" 客廳是家裡最核心的空間，而沙發則是客廳的主角"),t("br"),e(" 模組沙發可以符合每個家的需求變換排列"),t("br"),e(" 營造出最適合你們的風格 ")],-1),L=[A,F],O={key:1},H=t("h3",{class:"text-center"},"臥室｜一組好床架為家帶來更多幸福",-1),q=t("p",{class:"text-center lh-lg fs-6"},[e(" 家裡不可或缺的、最重要的，就是床"),t("br"),e(" 而一組好床架能為你家帶來更多幸福"),t("br"),e(" 設計清新，用於主臥房、兒童房、客房都好搭配 ")],-1),z=[H,q],J={key:2},M=t("h3",{class:"text-center"},"書房｜在家工作也是一種享受",-1),G=t("p",{class:"text-center lh-lg fs-6"},[e(" 桌椅系列讓你就算要加班，也能享受工作時刻"),t("br"),e(" 不管是閱讀看書或做自己有興趣的事都有它相伴"),t("br"),e(" 無論你喜歡的風格是什麼"),t("br"),e(" 都能用桌椅系列搭配 ")],-1),K=[M,G],Q={key:3},W=t("h3",{class:"text-center"},"兒童房｜打造專屬空間",-1),X=t("p",{class:"text-center lh-lg fs-6"},[e(" 設計風格簡約，採用耐看中性的色系"),t("br"),e(" 保留自然原樺木色製作， 利用牆色變換、改變軟件配置"),t("br"),e(" 即可打造不同個性的兒童房 ")],-1),Y=[W,X],Z=t("h3",{class:"mt-6"},"推薦商品",-1),$=t("hr",null,null,-1),tt={class:"row"},et={class:"card overflow-hidden"},st=["src"],ot=t("hr",null,null,-1),ct={class:"my-3 text-center"},rt={class:"text-center"};function nt(n,i,l,it,s,lt){const f=_("router-link"),j=_("swiper-slide"),x=_("swiper");return o(),c(p,null,[R,t("div",B,[t("h4",null,d(s.project.project),1)]),t("div",D,[(o(!0),c(p,null,m(s.project.imagesUrl,r=>(o(),c("div",null,[t("img",{class:"my-3",src:r,alt:""},null,8,N)]))),256)),t("div",null,[s.project.project=="客廳"?(o(),c("div",U,L)):a("",!0),s.project.project=="臥室"?(o(),c("div",O,z)):a("",!0),s.project.project=="書房"?(o(),c("div",J,K)):a("",!0),s.project.project=="兒童房"?(o(),c("div",Q,Y)):a("",!0)]),Z,$,t("div",tt,[g(x,{breakpoints:s.breakpoints,"slides-per-view":1,modules:s.modules,pagination:{clickable:!0}},{default:u(()=>[(o(!0),c(p,null,m(s.products,r=>(o(),k(j,{class:"sale-slide",key:r.id},{default:u(()=>[t("div",et,[g(f,{to:`/product/${r.id}`},{default:u(()=>[t("img",{class:"project-img mx-auto",src:r.imageUrl,alt:""},null,8,st)]),_:2},1032,["to"])]),ot,t("div",null,[t("h5",ct,d(r.title),1),t("h6",rt,"NT$"+d(r.price),1)])]),_:2},1024))),128))]),_:1},8,["breakpoints","modules"])])])],64)}const mt=y(I,[["render",nt]]);export{mt as default};
