import{m as y}from"./modal-bc40e27f.js";import{a as V}from"./alertStore-833da373.js";import{_ as g,o as d,c as i,a as t,j as m,D as h,H as $,b as w,t as c,m as S,r as b,d as C,F as x,h as L}from"./index-1b007bab.js";const E={props:["tempCoupon","createCoupon","updateDate","isNew","updateCoupon"],data(){return{}}},N={class:"modal fade",id:"couponModal",ref:"couponModal"},T={class:"modal-dialog"},U={class:"modal-content"},B={class:"modal-header bg-primary"},A={key:0,class:"modal-title text-white"},I={key:1,class:"modal-title text-white"},P=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),R={class:"modal-body"},Y={class:"row"},F={class:"col"},H={class:"mb-3"},O=t("label",{for:"title",class:"form-label"},"優惠卷名稱",-1),j={class:"mb-3"},q=t("label",{for:"percent",class:"form-label"},"折扣%數",-1),z={class:"mb-3"},G=t("label",{for:"due_Date",class:"form-label"},"到期日",-1),J=t("br",null,null,-1),K=["v-model"],Q={class:"mb-3"},W=t("label",{for:"code",class:"form-label"},"折扣碼",-1),X={class:"mb-3"},Z={class:"form-check"},tt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),et={class:"modal-footer"},ot=t("button",{type:"button",class:"btn btn-dark","data-bs-dismiss":"modal"},"取消",-1);function st(n,e,o,v,u,l){return d(),i("div",N,[t("div",T,[t("div",U,[t("div",B,[o.isNew?(d(),i("h5",A,"新增產品")):(d(),i("h5",I,"編輯產品")),P]),t("div",R,[t("div",Y,[t("div",F,[t("div",H,[O,m(t("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>o.tempCoupon.title=a),id:"title",type:"text",class:"form-control mb-2",placeholder:"請輸入優惠卷名稱"},null,512),[[h,o.tempCoupon.title]])]),t("div",j,[q,m(t("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>o.tempCoupon.percent=a),id:"percent",type:"text",class:"form-control mb-2",placeholder:"請輸入折扣%數"},null,512),[[h,o.tempCoupon.percent]])]),t("div",z,[G,J,t("input",{type:"date",id:"start",name:"trip-start",onChange:e[2]||(e[2]=(...a)=>o.updateDate&&o.updateDate(...a)),"v-model":o.tempCoupon.due_date},null,40,K)]),t("div",Q,[W,m(t("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>o.tempCoupon.code=a),id:"code",type:"text",class:"form-control mb-2",placeholder:"請輸入折扣碼"},null,512),[[h,o.tempCoupon.code]])]),t("div",X,[t("div",Z,[m(t("input",{"onUpdate:modelValue":e[4]||(e[4]=a=>o.tempCoupon.is_enabled=a),"true-value":1,"false-value":0,id:"is_enabled",class:"form-check-input",type:"checkbox"},null,512),[[$,o.tempCoupon.is_enabled]]),tt])])])])]),t("div",et,[ot,o.isNew?(d(),i("button",{key:0,type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=(...a)=>o.createCoupon&&o.createCoupon(...a))},"確定")):(d(),i("button",{key:1,type:"button",class:"btn btn-primary",onClick:e[6]||(e[6]=(...a)=>o.updateCoupon&&o.updateCoupon(...a))},"確定"))])])])],512)}const nt=g(E,[["render",st]]),at={props:["tempCoupon","delCoupon"]},lt={id:"delCouponModal",ref:"delCouponModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},dt={class:"modal-dialog"},it={class:"modal-content border-0"},ut=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ct={class:"modal-body"},mt={class:"text-danger"},pt={class:"modal-footer"},rt=t("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"}," 取消 ",-1);function _t(n,e,o,v,u,l){return d(),i("div",lt,[t("div",dt,[t("div",it,[ut,t("div",ct,[w(" 是否刪除 "),t("strong",mt,c(o.tempCoupon.title),1),w(" 商品(刪除後將無法恢復)。 ")]),t("div",pt,[rt,t("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(...a)=>o.delCoupon&&o.delCoupon(...a))}," 確認刪除 ")])])])],512)}const ht=g(at,[["render",_t]]),{VITE_URL:p,VITE_PATH:r}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"qaz326978547",BASE_URL:"/Vogue_Furniture/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};let _=null,f=null;const bt={data(){return{isLoading:!1,isNew:!1,couponData:{title:"test",is_enabled:1,percent:30,due_date:1678342980632,code:"VogueBest2024"},tempCoupon:{}}},components:{AdminDeleteCoupon:ht,AdminCouponModal:nt},methods:{...S(V,["getState"]),getCoupon(){this.isLoading=!0,this.axios.get(`${p}/api/${r}/admin/coupons`).then(n=>{console.log("get",n.data.coupons),this.couponData=n.data.coupons,this.couponData.map(e=>{const o=this.$moment(e.due_date).format("YYYY-MM-DD");e.due_date=o}),this.isLoading=!1}).catch(n=>{this.getState("資料無法取得,請稍後再試",!1)})},createCoupon(){this.axios.post(`${p}/api/${r}/admin/coupon`,{data:this.tempCoupon}).then(n=>{this.getState("新增成功",!0),this.getCoupon()}).catch(n=>{this.getState("資料新增失敗,請稍後再試",!1)})},openModal(n,e){n=="new"?(this.isNew=!0,this.tempCoupon={},_.show()):n=="edit"?(this.isNew=!1,this.tempCoupon={...e},_.show()):n=="delete"&&(this.tempCoupon={...e},f.show())},updateDate(n){const e=this.$moment(n.target.value).valueOf();this.tempCoupon.due_date=e},updateCoupon(){this.axios.put(`${p}/api/${r}/admin/coupon/${this.tempCoupon.id}`,{data:this.tempCoupon}).then(n=>{this.getState("編輯成功",!0),this.getCoupon(),_.hide()}).catch(n=>{this.getState("資料更新失敗,請稍後再試",!1)})},delCoupon(){this.axios.delete(`${p}/api/${r}/admin/coupon/${this.tempCoupon.id}`).then(n=>{this.getState("刪除成功",!0),this.getCoupon(),f.hide()}).catch(n=>{this.getState("資料刪除失敗,請稍後再試",!1)})}},mounted(){_=new y(document.getElementById("couponModal")),f=new y(document.getElementById("delCouponModal")),this.getCoupon()}},Ct={class:"text-end mt-4"},ft={class:"table-responsive"},gt={class:"table mt-4"},vt=t("thead",null,[t("tr",null,[t("th",{width:"120"},"優惠名稱"),t("th",{width:"100"},"折扣%數"),t("th",{width:"100"},"到期日"),t("th",{width:"100"},"折扣碼"),t("th",{width:"100"},"是否啟用"),t("th",{width:"100"})])],-1),yt={class:"d-felx align-items-center"},wt={class:"btn-group"},xt=["onClick"],Dt=["onClick"];function kt(n,e,o,v,u,l){const a=b("loading"),D=b("admin-coupon-modal"),k=b("admin-delete-coupon");return d(),i(x,null,[C(a,{active:u.isLoading,"onUpdate:active":e[0]||(e[0]=s=>u.isLoading=s)},null,8,["active"]),t("div",Ct,[t("button",{class:"btn btn-primary me-5",onClick:e[1]||(e[1]=s=>l.openModal("new"))}," 建立新優惠碼 ")]),t("div",ft,[t("table",gt,[vt,t("tbody",yt,[(d(!0),i(x,null,L(u.couponData,s=>(d(),i("tr",null,[t("td",null,c(s==null?void 0:s.title),1),t("td",null,c(s==null?void 0:s.percent),1),t("td",null,c(s==null?void 0:s.due_date),1),t("td",null,c(s==null?void 0:s.code),1),t("td",null,c(s!=null&&s.is_enabled?"啟用":"未啟用"),1),t("td",null,[t("div",wt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:M=>l.openModal("edit",s)}," 編輯 ",8,xt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:M=>l.openModal("delete",s)}," 刪除 ",8,Dt)])])]))),256))])])]),C(D,{tempCoupon:u.tempCoupon,createCoupon:l.createCoupon,updateDate:l.updateDate,isNew:u.isNew,updateCoupon:l.updateCoupon},null,8,["tempCoupon","createCoupon","updateDate","isNew","updateCoupon"]),C(k,{delCoupon:l.delCoupon,tempCoupon:u.tempCoupon},null,8,["delCoupon","tempCoupon"])],64)}const St=g(bt,[["render",kt]]);export{St as default};