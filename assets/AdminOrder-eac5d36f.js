import{_ as v,o as c,c as _,a as e,n as u,B as x,C as I,H as m,t as n,i as k,b as C,m as L,f as A,r as f,d as O,F as S,h as V,E as $}from"./index-e6ea0b44.js";import{a as R}from"./alertStore-ac2ff4cb.js";import{m as w}from"./modal-34ef9d88.js";const B={props:["changeState","orderState"]},U={class:"p-3 d-flex justify-content-center mb-5"},H={class:"d-flex nav-bar admin-order-navbar"};function N(t,d,s,r,a,l){return c(),_("nav",U,[e("ul",H,[e("li",{onClick:d[0]||(d[0]=i=>s.changeState("all")),class:u({active:s.orderState=="all"})},"所有訂單",2),e("li",{onClick:d[1]||(d[1]=i=>s.changeState("unPaid")),class:u({active:s.orderState=="unPaid"})},"待付款",2),e("li",{onClick:d[2]||(d[2]=i=>s.changeState("paid")),class:u({active:s.orderState=="paid"})},"待出貨",2)])])}const F=v(B,[["render",N]]),{VITE_URL:z,VITE_PATH:j}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"qaz326978547",BASE_URL:"/Vogue_Furniture/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},P=x("order",{state:()=>({orders:[],isLoading:!1,pages:{}}),actions:{getOrders(t,d=1){this.isLoading=!0,I.get(`${z}/api/${j}/admin/orders?page=${d}`).then(s=>{if(this.orders=s.data.orders,console.log("this.orders",this.orders),console.log(" res.data.orders",s.data),t=="all")this.pages=s.data.pagination,this.orders.filter(r=>{const a=m.unix(r.create_at).format("YYYY-MM-DD");if(r.is_paid){const l=m.unix(r.paid_date).format("YYYY-MM-DD");r.paid_date=l}r.create_at=a}),this.isLoading=!1;else if(t=="unPaid"){console.log("unpaid");const r=[];this.orders.filter(a=>{const l=m.unix(a.create_at).format("YYYY-MM-DD");a.is_paid||(a.create_at=l,r.push(a)),this.orders=r}),this.isLoading=!1}else if(t=="paid"){const r=[];this.orders.filter(a=>{const l=m.unix(a.create_at).format("YYYY-MM-DD");if(a.is_paid){const i=m.unix(a.paid_date).format("YYYY-MM-DD");a.paid_date=i,a.create_at=l,r.push(a)}this.orders=r}),this.isLoading=!1}})}}}),q={props:["tempOrder"],data(){return{}}},G={class:"modal fade",id:"orderModal",ref:"orderModal"},J={class:"modal-dialog"},K={class:"modal-content"},Q=e("div",{class:"modal-header bg-primary"},[e("h4",{class:"modal-title text-white"},"訂單資訊"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),W={class:"modal-body"},X={class:"mb-3 order-container"},Z=e("p",{class:"order-title"},"訂單狀態:",-1),ee=e("p",{class:"order-title"},"訂單金額:",-1),te=e("p",{class:"order-title"},"訂單編號:",-1),se=e("p",{class:"order-title"},"訂單成立時間:",-1),ae={key:0},de=e("p",{class:"order-title"},"付款時間:",-1),oe=e("hr",null,null,-1),re=e("p",{class:"order-title"},"收件人:",-1),ne=e("p",{class:"order-title"},"Email:",-1),le=e("p",{class:"order-title"},"收件人電話:",-1),ie=e("p",{class:"order-title"},"收件地址:",-1),ce=e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-dark","data-bs-dismiss":"modal"},"關閉")],-1);function _e(t,d,s,r,a,l){var i,h,g,b,o,p,y,D,E,Y;return c(),_("div",G,[e("div",J,[e("div",K,[Q,e("div",W,[e("div",X,[e("ul",null,[e("li",null,[Z,e("p",null,n((i=s.tempOrder)!=null&&i.is_paid?"已付款":"未付款"),1)]),e("li",null,[ee,e("p",null,n((h=s.tempOrder)==null?void 0:h.total),1)]),e("li",null,[te,e("p",null,n((g=s.tempOrder)==null?void 0:g.id),1)]),e("li",null,[se,e("p",null,n((b=s.tempOrder)==null?void 0:b.create_at),1)]),(o=s.tempOrder)!=null&&o.is_paid?(c(),_("li",ae,[de,e("p",null,n((p=s.tempOrder)==null?void 0:p.paid_date),1)])):k("",!0)]),oe,e("ul",null,[e("li",null,[re,e("p",null,n((y=s.tempOrder.user)==null?void 0:y.name),1)]),e("li",null,[ne,e("p",null,n((D=s.tempOrder.user)==null?void 0:D.email),1)]),e("li",null,[le,e("p",null,n((E=s.tempOrder.user)==null?void 0:E.tel),1)]),e("li",null,[ie,e("p",null,n((Y=s.tempOrder.user)==null?void 0:Y.address),1)])])])]),ce])])],512)}const ue=v(q,[["render",_e]]),he={props:["tempOrder","delOrder"],data(){return{}},mounted(){console.log(this.tempOrder)}},pe={id:"delOrderModal",ref:"delOrderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delOrderModalLabel","aria-hidden":"true"},me={class:"modal-dialog"},ge={class:"modal-content border-0"},be=e("div",{class:"modal-header bg-danger text-white"},[e("h5",{id:"delOrderModalLabel",class:"modal-title"},[e("span",null,"刪除訂單")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),fe={class:"modal-body"},Oe={class:"text-danger"},ve={class:"modal-footer"},Se=e("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"}," 取消 ",-1);function $e(t,d,s,r,a,l){var i;return c(),_("div",pe,[e("div",me,[e("div",ge,[be,e("div",fe,[C(" 是否刪除 "),e("strong",Oe,n((i=s.tempOrder.user)==null?void 0:i.name),1),C(" 訂單(刪除後將無法恢復)。 ")]),e("div",ve,[Se,e("button",{type:"button",class:"btn btn-danger",onClick:d[0]||(d[0]=h=>s.delOrder(s.tempOrder.id))}," 確認刪除 ")])])])],512)}const Me=v(he,[["render",$e]]),{VITE_URL:ke,VITE_PATH:ye}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"qaz326978547",BASE_URL:"/Vogue_Furniture/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};let T=null,M=null;const De={data(){return{orderState:"all",tempOrder:{}}},components:{AdminOrderModal:ue,AdminOrderDeleteModal:Me,OrderStateNavbar:F},methods:{...L(P,["getOrders"]),...L(R,["getState"]),changeState(t){this.orderState=t,this.getOrders(t)},openModal(t,d){this.tempOrder=t,d?(console.log(this.tempOrder),M.show()):T.show()},delOrder(t){this.axios.delete(`${ke}/api/${ye}/admin/order/${t}`).then(d=>{console.log(d),this.getState("已刪除訂單",!0),this.getOrders(this.orderState),M.hide()})}},computed:{...A(P,["orders","isLoading","pages"])},mounted(){this.getOrders("all"),T=new w(document.getElementById("orderModal")),M=new w(document.getElementById("delOrderModal"))}},Ee={class:"table-responsive"},Ye={class:"table"},Ce=e("th",{width:"100"},"收件人",-1),Le=e("th",{width:"130"},"訂單時間",-1),Ve={key:0,width:"130"},we=e("th",{width:"100"},"商品總額",-1),Pe=e("th",{width:"100"},null,-1),Te={key:0},xe={class:"btn-group"},Ie=["onClick"],Ae=["onClick"],Re={"aria-label":"Page navigation example",class:"d-flex justify-content-center mt-3"},Be={class:"pagination"},Ue=e("span",{"aria-hidden":"true"},"«",-1),He=[Ue],Ne=["onClick"],Fe=e("span",{"aria-hidden":"true"},"»",-1),ze=[Fe];function je(t,d,s,r,a,l){const i=f("loading"),h=f("order-state-navbar"),g=f("admin-order-modal"),b=f("admin-order-delete-modal");return c(),_(S,null,[O(i,{active:t.isLoading,"onUpdate:active":d[0]||(d[0]=o=>t.isLoading=o)},null,8,["active"]),O(h,{changeState:l.changeState,orderState:a.orderState},null,8,["changeState","orderState"]),e("div",Ee,[e("table",Ye,[e("thead",null,[e("tr",null,[Ce,Le,a.orderState!=="unPaid"?(c(),_("th",Ve,"付款時間")):k("",!0),we,Pe])]),e("tbody",null,[(c(!0),_(S,null,V(t.orders,o=>(c(),_("tr",{key:o.id},[e("td",null,n(o.user.name),1),e("td",null,n(o.create_at),1),a.orderState!=="unPaid"?(c(),_("td",Te,n(o.paid_date),1)):k("",!0),e("td",null,n(o.total),1),e("td",null,[e("div",xe,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:p=>l.openModal(o,!1)}," 查看更多 ",8,Ie),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:p=>l.openModal(o,!0)}," 刪除 ",8,Ae)])])]))),128))])])]),e("nav",Re,[e("ul",Be,[e("li",{class:u(["page-item",{disabled:!t.pages.has_pre}])},[e("a",{onClick:d[1]||(d[1]=$(o=>t.getOrders(a.orderState,t.pages.current_page-1),["prevent"])),class:"page-link",href:"#","aria-label":"Previous"},He)],2),(c(!0),_(S,null,V(t.pages.total_pages,o=>(c(),_("li",{class:u(["page-item",{active:o===t.pages.current_page}]),key:o+"page"},[e("a",{onClick:$(p=>t.getOrders(a.orderState,o),["prevent"]),class:"page-link",href:"#"},n(o),9,Ne)],2))),128)),e("li",{class:u(["page-item",{disabled:!t.pages.has_next}])},[e("a",{onClick:d[2]||(d[2]=$(o=>t.getOrders(a.orderState,t.pages.current_page+1),["prevent"])),class:"page-link",href:"#","aria-label":"Next"},ze)],2)])]),O(g,{tempOrder:a.tempOrder},null,8,["tempOrder"]),O(b,{tempOrder:a.tempOrder,delOrder:l.delOrder},null,8,["tempOrder","delOrder"])],64)}const Ke=v(De,[["render",je]]);export{Ke as default};