import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios';
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'
import swal from 'sweetalert';
//日期套件
import moment from 'moment'
import 'moment/locale/zh-tw' // 如果需要中文語系，可以引入對應的語言檔
// VueLoding
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
// import vee-validate驗證
import {
    Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
// 設定 vee-validate 全域規則
configure({
    generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
    validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');

//swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const app = createApp(App)
//日期套件
app.config.globalProperties.$moment = moment // 掛載到 Vue 3 的原型上
app.component('loading', Loading)
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)

app.mount('#app')
