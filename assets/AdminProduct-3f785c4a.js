import{m as A}from"./modal-bc876d61.js";import{_ as D,o as d,c as i,a as t,j as n,D as c,F as g,h as V,i as C,G as T,b as M,t as u,B as L,C as $,m as E,f as S,r as P,d as f,n as v,E as y}from"./index-58dd759c.js";import{a as N}from"./alertStore-a3d9239e.js";const R={props:["tempProduct","isNew","updateData","createImages"]},B={class:"modal fade",id:"productModal",ref:"productModal"},H={class:"modal-dialog"},O={class:"modal-content"},z={class:"modal-header bg-primary"},j={key:0,class:"modal-title text-white"},q={key:1,class:"modal-title text-white"},F=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),G={class:"modal-body"},X={class:"row"},J={class:"col-md-4 col-sm-5"},K={class:"mb-3"},Q=t("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),W=["src"],Y=t("h3",{class:"mb-3"},"多圖新增",-1),Z={key:0},tt=t("label",{for:"imageUrl",class:"form-label"},"新增圖片",-1),et=["onUpdate:modelValue"],ot={key:0,class:"imagesUrl"},st=["onClick"],lt=["src"],at={class:"col-md-8 col-sm-7"},dt={class:"mb-3"},it=t("label",{for:"title",class:"form-label"},"標題",-1),nt={class:"row"},ct={class:"col-md-6"},rt=t("label",{for:"category",class:"form-label"},"分類",-1),mt={class:"col-md-6"},ut=t("label",{for:"unit",class:"form-label"},"單位",-1),_t={class:"row"},pt={class:"col-md-6"},ht=t("label",{for:"origin_price",class:"form-label"},"原價",-1),bt={class:"col-md-6"},gt=t("label",{for:"price",class:"form-label"},"售價",-1),Pt=t("hr",null,null,-1),ft={class:"mb-3"},vt=t("label",{for:"description",class:"form-label"},"產品描述",-1),yt={class:"mb-3"},Ut=t("label",{for:"content",class:"form-label"},"說明內容",-1),wt={class:"mb-3"},kt={class:"form-check"},Vt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Dt={class:"modal-footer"},xt=t("button",{type:"button",class:"btn btn-dark","data-bs-dismiss":"modal"},"取消",-1);function At(s,e,o,_,p,r){return d(),i("div",B,[t("div",H,[t("div",O,[t("div",z,[o.isNew?(d(),i("h5",j,"新增產品")):(d(),i("h5",q,"編輯產品")),F]),t("div",G,[t("div",X,[t("div",J,[t("div",K,[Q,n(t("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>o.tempProduct.imageUrl=l),type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,512),[[c,o.tempProduct.imageUrl]]),t("img",{class:"img-fluid",src:o.tempProduct.imageUrl},null,8,W)]),Y,t("div",null,[Array.isArray(o.tempProduct.imagesUrl)?(d(),i("div",Z,[(d(!0),i(g,null,V(o.tempProduct.imagesUrl,(l,m)=>(d(),i("div",{class:"mb-3",key:m},[t("div",null,[tt,n(t("input",{"onUpdate:modelValue":b=>o.tempProduct.imagesUrl[m]=b,type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,8,et),[[c,o.tempProduct.imagesUrl[m]]])]),o.tempProduct.imagesUrl[m]?(d(),i("div",ot,[t("button",{onClick:b=>o.tempProduct.imagesUrl.splice(m,1),class:"btn btn-danger btn-sm mb-3 delete-image"},"X",8,st),t("img",{class:"img-fluid",src:o.tempProduct.imagesUrl[m]},null,8,lt)])):C("",!0)]))),128))])):C("",!0),t("button",{onClick:e[1]||(e[1]=(...l)=>o.createImages&&o.createImages(...l)),class:"btn btn-outline-primary btn-sm d-block w-100"}," 新增圖片 ")])]),t("div",at,[t("div",dt,[it,n(t("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>o.tempProduct.title=l),type:"text",class:"form-control mb-2",placeholder:"請輸入標題"},null,512),[[c,o.tempProduct.title]])]),t("div",nt,[t("div",ct,[rt,n(t("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>o.tempProduct.category=l),type:"text",class:"form-control mb-2",placeholder:"請輸入分類"},null,512),[[c,o.tempProduct.category]])]),t("div",mt,[ut,n(t("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>o.tempProduct.unit=l),type:"text",class:"form-control mb-2",placeholder:"請輸入單位"},null,512),[[c,o.tempProduct.unit]])])]),t("div",_t,[t("div",pt,[ht,n(t("input",{"onUpdate:modelValue":e[5]||(e[5]=l=>o.tempProduct.origin_price=l),min:"0",type:"number",class:"form-control mb-2",placeholder:"請輸入原價"},null,512),[[c,o.tempProduct.origin_price]])]),t("div",bt,[gt,n(t("input",{"onUpdate:modelValue":e[6]||(e[6]=l=>o.tempProduct.price=l),min:"0",type:"number",class:"form-control mb-2",placeholder:"請輸入售價"},null,512),[[c,o.tempProduct.price]])])]),Pt,t("div",ft,[vt,n(t("textarea",{"onUpdate:modelValue":e[7]||(e[7]=l=>o.tempProduct.description=l),id:"description",type:"text",rows:"5",class:"form-control",placeholder:"請輸入產品描述"},`
                                                                                                                                                                                                                                                                                                                `,512),[[c,o.tempProduct.description]])]),t("div",yt,[Ut,n(t("textarea",{"onUpdate:modelValue":e[8]||(e[8]=l=>o.tempProduct.content=l),id:"description",type:"text",rows:"5",class:"form-control",placeholder:"請輸入說明內容"},`
                                                                                                                                                                                                                                                                                                                `,512),[[c,o.tempProduct.content]])]),t("div",wt,[t("div",kt,[n(t("input",{"onUpdate:modelValue":e[9]||(e[9]=l=>o.tempProduct.is_enabled=l),"true-value":1,"false-value":0,id:"is_enabled",class:"form-check-input",type:"checkbox"},null,512),[[T,o.tempProduct.is_enabled]]),Vt])])])])]),t("div",Dt,[xt,t("button",{type:"button",class:"btn btn-primary",onClick:e[10]||(e[10]=(...l)=>o.updateData&&o.updateData(...l))},"確定")])])])],512)}const Ct=D(R,[["render",At]]),Mt={props:["tempProduct","delData"],data(){return{}},mounted(){console.log(this.tempProduct)}},Et={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},It={class:"modal-dialog"},Tt={class:"modal-content border-0"},Lt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),$t={class:"modal-body"},St={class:"text-danger"},Nt={class:"modal-footer"},Rt=t("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"}," 取消 ",-1);function Bt(s,e,o,_,p,r){return d(),i("div",Et,[t("div",It,[t("div",Tt,[Lt,t("div",$t,[M(" 是否刪除 "),t("strong",St,u(o.tempProduct.title),1),M(" 商品(刪除後將無法恢復)。 ")]),t("div",Nt,[Rt,t("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(...l)=>o.delData&&o.delData(...l))}," 確認刪除 ")])])])],512)}const Ht=D(Mt,[["render",Bt]]),{VITE_URL:Ot,VITE_PATH:zt}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"qaz326978547",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},I=L("adminProduct",{state:()=>({products:[],pages:{},tempProduct:{imagesUrl:[]},isLoading:!1}),actions:{getAdminProduct(s=1){this.isLoading=!0,$.get(`${Ot}/api/${zt}/admin/products?page=${s}`).then(e=>{const{products:o,pagination:_}=e.data;this.products=o,this.pages=_,console.log("products",o),console.log("page",_),this.isLoading=!1})}}}),{VITE_URL:U,VITE_PATH:w}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"qaz326978547",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};let h=null,k=null;const jt={data(){return{tempProduct:{},isNew:!0}},components:{AdminProductModal:Ct,AdminDeleteModal:Ht},methods:{...E(N,["getState"]),openModal(s,e){s=="edit"?(this.isNew=!1,this.tempProduct={...e},console.log("tempProduct-edit",this.tempProduct),h.show()):s=="new"?(this.isNew=!0,this.tempProduct={},console.log("tempProductNew",this.tempProduct),h.show()):s=="delete"&&(this.tempProduct={...e},k.show())},updateData(){this.isNew?(console.log("新增產品"),this.axios.post(`${U}/api/${w}/admin/product`,{data:this.tempProduct}).then(s=>{console.log(s.data),this.getState("新增成功",!0),this.getAdminProduct(),h.hide()})):(console.log("編輯產品"),this.axios.put(`${U}/api/${w}/admin/product/${this.tempProduct.id}`,{data:this.tempProduct}).then(s=>{console.log(s),this.getState("編輯成功",!0),this.getAdminProduct(),h.hide()}))},delData(){this.axios.delete(`${U}/api/${w}/admin/product/${this.tempProduct.id}`).then(s=>{console.log(s),this.getState("刪除成功",!0),this.getAdminProduct(),k.hide()})},createImages(){this.tempProduct.imagesUrl?this.tempProduct.imagesUrl.push(""):(this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push(""))},...E(I,["getAdminProduct"])},computed:{...S(I,["products","pages","isLoading"])},mounted(){this.getAdminProduct(),h=new A(document.getElementById("productModal")),k=new A(document.getElementById("delProductModal"))}},qt={class:"mb-5"},Ft={class:"text-end mt-4"},Gt={class:"table-responsive"},Xt={class:"table mt-4"},Jt=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",{width:"100"},"產品名稱"),t("th",{width:"100"},"原價"),t("th",{width:"100"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"120"},"編輯")])],-1),Kt={class:"btn-group"},Qt=["onClick"],Wt=["onClick"],Yt={"aria-label":"Page navigation example",class:"d-flex justify-content-center mt-3"},Zt={class:"pagination"},te=t("span",{"aria-hidden":"true"},"«",-1),ee=[te],oe=["onClick"],se=t("span",{"aria-hidden":"true"},"»",-1),le=[se];function ae(s,e,o,_,p,r){const l=P("loading"),m=P("admin-product-modal"),b=P("admin-delete-modal");return d(),i(g,null,[f(l,{active:s.isLoading,"onUpdate:active":e[0]||(e[0]=a=>s.isLoading=a)},null,8,["active"]),t("div",qt,[t("div",Ft,[t("button",{class:"btn btn-primary me-5",onClick:e[1]||(e[1]=a=>r.openModal("new"))}," 建立新的產品 ")]),t("div",Gt,[t("table",Xt,[Jt,t("tbody",null,[(d(!0),i(g,null,V(s.products,a=>(d(),i("tr",{key:a.id},[t("td",null,u(a.category),1),t("td",null,u(a.title),1),t("td",null,u(a.origin_price),1),t("td",null,u(a.price),1),t("td",null,[t("span",null,u(a.is_enabled?"已啟用":"未啟用"),1)]),t("td",null,[t("div",Kt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:x=>r.openModal("edit",a)}," 編輯 ",8,Qt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:x=>r.openModal("delete",a)}," 刪除 ",8,Wt)])])]))),128))])])]),t("nav",Yt,[t("ul",Zt,[t("li",{class:v(["page-item",{disabled:!s.pages.has_pre}])},[t("a",{onClick:e[2]||(e[2]=y(a=>s.getAdminProduct(s.pages.current_page-1),["prevent"])),class:"page-link",href:"#","aria-label":"Previous"},ee)],2),(d(!0),i(g,null,V(s.pages.total_pages,a=>(d(),i("li",{class:v(["page-item",{active:a===s.pages.current_page}]),key:a+"page"},[t("a",{onClick:y(x=>s.getAdminProduct(a),["prevent"]),class:"page-link",href:"#"},u(a),9,oe)],2))),128)),t("li",{class:v(["page-item",{disabled:!s.pages.has_next}])},[t("a",{onClick:e[3]||(e[3]=y(a=>s.getAdminProduct(s.pages.current_page+1),["prevent"])),class:"page-link",href:"#","aria-label":"Next"},le)],2)])]),f(m,{isNew:p.isNew,tempProduct:p.tempProduct,updateData:r.updateData,createImages:r.createImages},null,8,["isNew","tempProduct","updateData","createImages"]),f(b,{tempProduct:p.tempProduct,delData:r.delData},null,8,["tempProduct","delData"])])],64)}const ce=D(jt,[["render",ae]]);export{ce as default};
