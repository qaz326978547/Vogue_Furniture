import{p as i}from"./project-6eb5fe19.js";import{_ as l,r as d,o as e,c as o,a as t,F as c,h as _,d as p,w as m,t as r}from"./index-58dd759c.js";const h={data(){return{projects:[]}},methods:{getProjects(){this.projects=i.projects,console.log(this.projects)}},mounted(){this.getProjects()}},u=t("div",{class:"project-bg"},[t("div",{class:"d-flex justify-content-center align-items-center flex-column h-100"},[t("h3",null,"情境空間"),t("h3",null,"PROJECT")])],-1),g={class:"container"},f={class:"row my-6"},v={class:"card d-flex p-0"},x={class:"overflow-hidden"},j=["src"],y={class:"card-body"},b={class:"d-block mx-auto badge bg-primary mb-3",style:{width:"80px"}},w={class:"text-center mb-3"};function k(P,V,$,B,n,C){const a=d("router-link");return e(),o(c,null,[u,t("div",g,[t("div",f,[(e(!0),o(c,null,_(n.projects,s=>(e(),o("div",{class:"col-xl-3 col-md-4 col-6",key:s.id},[p(a,{to:`/project/${s.id}`},{default:m(()=>[t("div",v,[t("div",x,[t("img",{class:"projects-img product-img",src:s.image,alt:"..."},null,8,j)]),t("div",y,[t("span",b,r(s.category),1),t("h5",w,r(s.project),1)])])]),_:2},1032,["to"])]))),128))])])],64)}const F=l(h,[["render",k]]);export{F as default};
