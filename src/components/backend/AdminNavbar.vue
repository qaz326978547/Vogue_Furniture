<template>
    <div class="d-flex justify-content-between px-5 py-3">
        <router-link to="/"> &lt 回前台</router-link>
        <a href="#" @click.prevent="logout">登出</a>
    </div>

    <nav class="p-3 d-flex justify-content-center mb-5">
        <ul class="d-flex nav-bar">
            <li>
                <router-link active-class="active-link" to="/admin/products">產品管理</router-link>
            </li>
            <li>
                <router-link active-class="active-link" to="/admin/discount">優惠卷管理</router-link>
            </li>
            <li>
                <router-link active-class="active-link" to="/admin/order">訂單管理</router-link>
            </li>
        </ul>
    </nav>
</template>


<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import alertStore from '../../stores/alertStore.js';
import { mapActions } from 'pinia';
export default {
    data() {
        return {
            linkActive: '',
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
                        // console.log(res);
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
        }
    },
    mounted() {
        this.checkAdmin()
        console.log(this.$moment().format('YYYY-MM-DD'));
    }

}



</script>