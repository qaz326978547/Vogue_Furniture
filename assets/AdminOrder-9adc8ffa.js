import{_ as O,o as c,c as _,a as e,n as u,B as Y,C as L,I as p,F as v,h as y,t as r,b as k,m as P,f as V,r as f,d as b,i as D,G as S}from"./index-84e76831.js";import{a as C}from"./alertStore-2e9d4d89.js";import{m as w}from"./modal-ba1c4fc5.js";const T={props:["changeState","orderState"]},I={class:"p-3 d-flex justify-content-center my-5"},A={class:"d-flex nav-bar admin-order-navbar"};function R(t,a,o,n,s,l){return c(),_("nav",I,[e("ul",A,[e("li",{onClick:a[0]||(a[0]=i=>o.changeState("all")),class:u({active:o.orderState=="all"})},"所有訂單",2),e("li",{onClick:a[1]||(a[1]=i=>o.changeState("unPaid")),class:u({active:o.orderState=="unPaid"})},"待付款",2),e("li",{onClick:a[2]||(a[2]=i=>o.changeState("paid")),class:u({active:o.orderState=="paid"})},"待出貨",2)])])}const U=O(T,[["render",R]]),{VITE_URL:B,VITE_PATH:N}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"qaz326978547",BASE_URL:"/Vogue_Furniture/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},x=Y("order",{state:()=>({orders:[],isLoading:!1,pages:{}}),actions:{getOrders(t,a=1){this.isLoading=!0,L.get(`${B}/api/${N}/admin/orders?page=${a}`).then(o=>{if(this.orders=o.data.orders,console.log("this.orders",this.orders),console.log(" res.data.orders",o.data),t=="all")this.pages=o.data.pagination,this.orders.filter(n=>{const s=p.unix(n.create_at).format("YYYY-MM-DD");if(n.is_paid){const l=p.unix(n.paid_date).format("YYYY-MM-DD");n.paid_date=l}n.create_at=s}),this.isLoading=!1;else if(t=="unPaid"){const n=[];this.orders.filter(s=>{const l=p.unix(s.create_at).format("YYYY-MM-DD");s.is_paid||(s.create_at=l,n.push(s)),this.orders=n}),this.isLoading=!1}else if(t=="paid"){const n=[];this.orders.filter(s=>{const l=p.unix(s.create_at).format("YYYY-MM-DD");if(s.is_paid){const i=p.unix(s.paid_date).format("YYYY-MM-DD");s.paid_date=i,s.create_at=l,n.push(s)}this.orders=n}),this.isLoading=!1}})}}}),H={props:["tempOrder","orderProduct"],data(){return{}},mounted(){}},j={class:"modal fade",id:"orderModal",ref:"orderModal"},F={class:"modal-dialog"},q={class:"container"},z={class:"row p-3 bg-white gx-5 justify-content-center justify-content-md-start mb-3"},G={class:"col-md-6 col-12"},J=e("h4",{class:"text-center text-md-start my-3"},"訂單內容",-1),K={class:"mb-3"},Q={class:"row g-0 align-items-center"},W={class:"col-4"},X=["src"],Z={class:"col-6"},ee={class:"p-3"},te={class:"badge bg-primary"},se={class:"card-title my-3"},oe={class:"card-text"},ae={class:"col-2"},de={class:"col-md-6 bg-light",style:{height:"400px"}},re=e("h4",{class:"text-center text-md-start my-3"},"訂單資訊",-1),ne={class:"mb-3 order-container"},le=e("p",{class:"order-title"},"訂單狀態:",-1),ie=e("p",{class:"order-title"},"訂單金額:",-1),ce=e("p",{class:"order-title"},"訂單編號:",-1),_e=e("p",{class:"order-title"},"訂單成立時間:",-1),ue=e("hr",null,null,-1),he=e("p",{class:"order-title"},"收件人:",-1),pe=e("p",{class:"order-title"},"Email:",-1),me=e("p",{class:"order-title"},"收件人電話:",-1),ge=e("p",{class:"order-title"},"收件地址:",-1);function fe(t,a,o,n,s,l){var i,h,m,g;return c(),_("div",j,[e("div",F,[e("div",q,[e("div",z,[e("div",G,[J,(c(!0),_(v,null,y(o.tempOrder.products,d=>(c(),_("div",K,[e("div",Q,[e("div",W,[e("img",{src:d.product.imageUrl,class:"img-fluid rounded",alt:"...",style:{width:"100%",height:"100%"}},null,8,X)]),e("div",Z,[e("div",ee,[e("small",null,[e("span",te,r(d.product.category),1)]),e("h6",se,r(d.product.title),1),e("p",oe,"數量:"+r(d.qty),1)])]),e("div",ae,[e("p",null,"NT$"+r(d.product.price),1)])])]))),256))]),e("div",de,[re,e("div",ne,[e("ul",null,[e("li",null,[le,e("p",null,r(o.tempOrder.is_paid?"已付款":"未付款"),1)]),e("li",null,[ie,e("p",null,r(o.tempOrder.total),1)]),e("li",null,[ce,e("p",null,r(o.tempOrder.id),1)]),e("li",null,[_e,e("p",null,r(o.tempOrder.create_at),1)])]),ue,e("ul",null,[e("li",null,[he,e("p",null,r((i=o.tempOrder.user)==null?void 0:i.name),1)]),e("li",null,[pe,e("p",null,r((h=o.tempOrder.user)==null?void 0:h.email),1)]),e("li",null,[me,e("p",null,r((m=o.tempOrder.user)==null?void 0:m.tel),1)]),e("li",null,[ge,e("p",null,r((g=o.tempOrder.user)==null?void 0:g.address),1)])])])])])])])],512)}const be=O(H,[["render",fe]]),ve={props:["tempOrder","delOrder"]},Oe={id:"delOrderModal",ref:"delOrderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delOrderModalLabel","aria-hidden":"true"},Se={class:"modal-dialog"},$e={class:"modal-content border-0"},ye=e("div",{class:"modal-header bg-danger text-white"},[e("h5",{id:"delOrderModalLabel",class:"modal-title"},[e("span",null,"刪除訂單")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Me={class:"modal-body"},ke={class:"text-danger"},Pe={class:"modal-footer"},De=e("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"}," 取消 ",-1);function we(t,a,o,n,s,l){var i;return c(),_("div",Oe,[e("div",Se,[e("div",$e,[ye,e("div",Me,[k(" 是否刪除 "),e("strong",ke,r((i=o.tempOrder.user)==null?void 0:i.name),1),k(" 訂單(刪除後將無法恢復)。 ")]),e("div",Pe,[De,e("button",{type:"button",class:"btn btn-danger",onClick:a[0]||(a[0]=h=>o.delOrder(o.tempOrder.id))}," 確認刪除 ")])])])],512)}const xe=O(ve,[["render",we]]),{VITE_URL:Ee,VITE_PATH:Ye}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"qaz326978547",BASE_URL:"/Vogue_Furniture/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};let E=null,$=null;const Le={data(){return{orderState:"all",tempOrder:{},oderProduct:{}}},components:{AdminOrderModal:be,AdminOrderDeleteModal:xe,OrderStateNavbar:U},methods:{...P(x,["getOrders"]),...P(C,["getState"]),changeState(t){this.orderState=t,this.getOrders(t)},openModal(t,a){console.log("order-product",t),this.tempOrder=t,a?(console.log(this.tempOrder),$.show()):E.show()},delOrder(t){this.axios.delete(`${Ee}/api/${Ye}/admin/order/${t}`).then(a=>{console.log(a),this.getState("已刪除訂單",!0),this.getOrders(this.orderState),$.hide()})}},computed:{...V(x,["orders","isLoading","pages"])},mounted(){this.getOrders("all"),E=new w(document.getElementById("orderModal")),$=new w(document.getElementById("delOrderModal"))}},Ve={class:"table-responsive"},Ce={class:"table"},Te=e("th",{width:"100"},"收件人",-1),Ie=e("th",{width:"130"},"訂單時間",-1),Ae={key:0,width:"130"},Re=e("th",{width:"100"},"商品總額",-1),Ue=e("th",{width:"100"},null,-1),Be={key:0},Ne={class:"btn-group"},He=["onClick"],je=["onClick"],Fe={"aria-label":"Page navigation example",class:"d-flex justify-content-center mt-3"},qe={class:"pagination"},ze=e("span",{"aria-hidden":"true"},"«",-1),Ge=[ze],Je=["onClick"],Ke=e("span",{"aria-hidden":"true"},"»",-1),Qe=[Ke];function We(t,a,o,n,s,l){const i=f("loading"),h=f("order-state-navbar"),m=f("admin-order-modal"),g=f("admin-order-delete-modal");return c(),_(v,null,[b(i,{active:t.isLoading,"onUpdate:active":a[0]||(a[0]=d=>t.isLoading=d)},null,8,["active"]),b(h,{changeState:l.changeState,orderState:s.orderState},null,8,["changeState","orderState"]),e("div",Ve,[e("table",Ce,[e("thead",null,[e("tr",null,[Te,Ie,s.orderState!=="unPaid"?(c(),_("th",Ae,"付款時間")):D("",!0),Re,Ue])]),e("tbody",null,[(c(!0),_(v,null,y(t.orders,d=>(c(),_("tr",{key:d.id},[e("td",null,r(d.user.name),1),e("td",null,r(d.create_at),1),s.orderState!=="unPaid"?(c(),_("td",Be,r(d.paid_date),1)):D("",!0),e("td",null,r(d.total),1),e("td",null,[e("div",Ne,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:M=>l.openModal(d,!1)}," 查看更多 ",8,He),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:M=>l.openModal(d,!0)}," 刪除 ",8,je)])])]))),128))])])]),e("nav",Fe,[e("ul",qe,[e("li",{class:u(["page-item",{disabled:!t.pages.has_pre}])},[e("a",{onClick:a[1]||(a[1]=S(d=>t.getOrders(s.orderState,t.pages.current_page-1),["prevent"])),class:"page-link",href:"#","aria-label":"Previous"},Ge)],2),(c(!0),_(v,null,y(t.pages.total_pages,d=>(c(),_("li",{class:u(["page-item",{active:d===t.pages.current_page}]),key:d+"page"},[e("a",{onClick:S(M=>t.getOrders(s.orderState,d),["prevent"]),class:"page-link",href:"#"},r(d),9,Je)],2))),128)),e("li",{class:u(["page-item",{disabled:!t.pages.has_next}])},[e("a",{onClick:a[2]||(a[2]=S(d=>t.getOrders(s.orderState,t.pages.current_page+1),["prevent"])),class:"page-link",href:"#","aria-label":"Next"},Qe)],2)])]),b(m,{tempOrder:s.tempOrder,oderProduct:s.oderProduct},null,8,["tempOrder","oderProduct"]),b(g,{tempOrder:s.tempOrder,delOrder:l.delOrder},null,8,["tempOrder","delOrder"])],64)}const tt=O(Le,[["render",We]]);export{tt as default};
