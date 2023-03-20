<template>
    <!-- <div class="admin-navbar d-flex justify-content-between py-3">
        <router-link to="/"> &lt 回前台</router-link>
        <a href="#" @click.prevent="logout">登出</a>
    </div> -->
    <!-- RWD -->
    <div class="bg-secondary d-md-none d-block">
        <button class="btn " type="button" @click="toggleOffcanvas">
            <i class="bi bi-list" style="font-size: 36px;"></i>
        </button>
    </div>


    <div :class="{ 'show': pageWidth >= 768 }" class="offcanvas offcanvas-start bg-secondary p-3" tabindex="-1"
        ref="myOffcanvas" id="myOffcanvas">
        <div class="offcanvas-header ">
            <h5 class="offcanvas-title mt-3 " id="offcanvasExampleLabel">
                <img src="https://i.imgur.com/C8CjyXX.png" alt="">
            </h5>
            <button type="button" class="btn close-navbar d-md-none d-block" @click="toggleOffcanvas">
                <i class="bi bi-x-lg" style="font-size: 24px;"></i>
            </button>
        </div>
        <hr>
        <div class="offcanvas-body d-flex flex-column justify-content-between">
            <div>
                <nav class="d-flex justify-content-center ">
                    <ul class="d-flex admin-main-navbar flex-column">
                        <li>
                            <router-link class="px-3" active-class="active-link" to="/admin/products">
                                <i class="bi bi-shop-window me-3"></i>產品管理</router-link>
                        </li>
                        <li>
                            <router-link class="px-3" active-class="active-link" to="/admin/discount">
                                <i class="bi bi-ticket-perforated me-3"></i>
                                優惠卷管理
                            </router-link>
                        </li>
                        <li>
                            <router-link class="px-3" active-class="active-link" to="/admin/order">
                                <i class="bi bi-file-earmark-text me-3"></i>
                                訂單管理
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="offcanvas-footer  d-flex flex-column ">
                <router-link to="/">回前台</router-link>
                <a href="#" @click.prevent="logout">登出</a>
            </div>
        </div>
    </div>
    <!-- RWD -->
</template>


<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import alertStore from '../../stores/alertStore.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { mapActions } from 'pinia';
let bsOffcanvas = null
export default {
    data() {
        return {
            linkActive: '',
            pageWidth: 768
        }
    },
    methods: {
        ...mapActions(alertStore, ['getState']),
        checkAdmin() {
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            if (token) {
                this.axios.defaults.headers.common['Authorization'] = token;
                this.axios.post(`${VITE_URL}/api/user/check`)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((error) => {
                        const errMessage = error.data?.message || '沒有權限，請登入';
                        this.getState(errMessage, false)
                        if (error.response) {
                            console.log('data', error.response.data);
                            console.log('status', error.response.status);
                            console.log('headers', error.response.headers);
                        } else if (error.request) {
                            console.log('request', error.request);
                        } else {
                            console.log('Error', error.message);
                        }
                        console.log('config', error.config);
                        this.$router.push('/login')
                    })
            } else {
                this.getState('請先登入會員', false)
                this.$router.push('/login')
            }
        },
        logout() {
            document.cookie = 'hexToken=; expires=; ';
            this.$router.push('/')
        },
        toggleOffcanvas() {
            bsOffcanvas.toggle()
        },
        handleResize() {
            this.pageWidth = window.innerWidth
        }
    },
    watch: {
        pageWidth(newWidth, oldWidth) {
            this.pageWidth = newWidth
            console.log(this.pageWidth);
        }
    },
    mounted() {
        this.checkAdmin()
        let myOffcanvas = this.$refs.myOffcanvas;
        bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
        window.addEventListener('resize', this.handleResize)

    }
}



</script>