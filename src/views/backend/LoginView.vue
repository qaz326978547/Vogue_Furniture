<template>
    <div class="mt-5 overflow-hidden">
        <div class="row justify-content-center ">
            <h1 class="h3 p-0  mb-3 font-weight-normal text-center">請先登入</h1>
            <div class="col-6">
                <form id="form" class="form-signin">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="username" placeholder="name@example.com" required
                            autofocus v-model="user.username" />
                        <label for="username">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="password" placeholder="Password" required
                            v-model="user.password" />
                        <label for="password">Password</label>
                    </div>
                    <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="login">
                        登入
                    </button>
                </form>
            </div>
        </div>
        <p class="mt-5 mb-3 text-muted text-center">&copy; 2023~∞ - 羅根傢俱 Vogue Furniture</p>
    </div>
</template>


<script>

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
    data() {
        return {
            user: {
                "username": "",
                "password": ""
            }
        }
    },
    methods: {
        login() {
            this.axios.post(`${VITE_URL}/admin/signin`, this.user)
                .then((res) => {
                    console.log(res);
                    const { expired, message, token } = res.data
                    document.cookie = `hexToken=${token}; expires=${expired}`;
                    if (res.data.success) {
                        swal({
                            title: message,
                            icon: 'success',
                            timer: 2000
                        });
                        this.$router.push('/admin/products')

                    }
                })
                .catch((err) => {
                    const errMessage = err.data?.message || '登入失敗';
                    swal({
                        title: errMessage,
                        icon: 'error',
                        timer: 2000
                    });
                })
        }
    },
    mounted() {
        console.log(this.user);
    }
}



</script>