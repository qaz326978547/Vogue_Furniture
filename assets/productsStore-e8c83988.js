import{B as l,C as r}from"./index-58dd759c.js";import{a as d}from"./alertStore-a3d9239e.js";const{VITE_URL:i,VITE_PATH:c}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"qaz326978547",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},g=d(),p=l("products",{state:()=>({products:[],product:{},categorys:[],categoryList:[],currentCategory:"all",isLoading:!1,categoryItem:[],limitProduct:[]}),actions:{getProducts(){this.isLoading=!0,r.get(`${i}/api/${c}/products/all`).then(e=>{this.products=e.data.products,this.categoryList=e.data.products,this.isLoading=!1;let t=[];this.products.map(s=>{t.push(s.category)}),t=[...new Set(t)],this.categorys=t}).catch(e=>{var s;const t=((s=e.data)==null?void 0:s.message)||"資料取得失敗，稍後在試";g.getState(t,!1)})},getProduct(e){this.isLoading=!0,r.get(`${i}/api/${c}/product/${e}`).then(t=>{this.product=t.data.product,this.isLoading=!1,this.getCategoryItem(this.product.category),console.log(this.categoryItem)}).catch(t=>{var a;const s=((a=t.data)==null?void 0:a.message)||"資料取得失敗，稍後在試";g.getState(s,!1)})},getCategory(e){if(this.currentCategory=e,console.log(e),e=="all")this.getProducts();else{let t=[];t=this.products.filter(s=>s.category===e),this.categoryList=t,console.log(t)}},getCategoryItem(e){e=="all"?this.getProducts():r.get(`${i}/api/${c}/products/all`).then(t=>{const s=t.data.products.filter(o=>o.category==e);console.log("arr",s),this.categoryItem=s;let a=[];for(let o=0;o<4;o++)a.push(s[o]);this.limitProduct=a}).catch(t=>{var a;const s=((a=t.data)==null?void 0:a.message)||"資料取得失敗，稍後在試";g.getState(s,!1)})}}});export{p};
