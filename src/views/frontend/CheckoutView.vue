<template>
    <div class="container">
        <div class="my-5 mx-0  row justify-content-center">
            <div class="col-12 ">
                <h3 class="mb-5">◎ 收件人資訊</h3>
                <Form v-slot="{ errors }" class="row gx-3 ">
                    <div class="mb-3">
                        <label class="my-2" for="name"><span class="text-danger">*</span>姓名</label>
                        <Field id="name" name="姓名" rules="required" :class="{ 'is-invalid': errors['姓名'] }" type="text"
                            v-model="user.name" class="form-control" placeholder="請輸入姓名">
                        </Field>
                        <error-message name="姓名" class="invalid-feedback"></error-message>
                    </div>

                    <div class="mb-3">
                        <label class="my-2" for="email"><span class="text-danger">*</span>電子郵件</label>
                        <Field id="email" name="email" type="email" class="form-control" v-model="user.email"
                            :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required">
                        </Field>
                        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <div class="mb-3">
                        <label for="tel" class="form-label"><span class="text-danger">*</span>電話</label>
                        <Field id="tel" name="電話" v-model="user.tel" :rules="isPhone"
                            :class="{ 'is-invalid': errors['電話'] }" type="text" class="form-control" placeholder="請輸入電話">
                        </Field>
                        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <div class="mb-3">
                        <label class="my-2" for="address"><span class="text-danger">*</span>收件地址</label>
                        <Field id="address" name="收件地址" type="text" class="form-control" v-model="user.address"
                            :class="{ 'is-invalid': errors['收件地址'] }" placeholder="請輸入收件地址" rules="required">
                        </Field>
                        <ErrorMessage name="收件地址" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <div class="mb-3">
                        <label class="my-2" for="message">備註</label>
                        <textarea v-model="message" class="form-control" name="message" id="message" rows="5"></textarea>
                    </div>
                    <button class="text-white my-5 btn btn-primary" type="button" @click="onSubmit">送出訂單</button>

                </Form>
            </div>
        </div>
    </div>
</template>


<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import { mapState } from 'pinia';
import cartStore from '../../stores/cartStore.js';

export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                tel: '',
                address: '',
            },
            message: ''
        }
    },
    methods: {
        onSubmit() {
            const data = {
                data: {
                    user: this.user
                },
                message: this.message
            }
            this.axios.post(`${VITE_URL}/api/${VITE_PATH}/order`, data)
                .then((res) => {
                    console.log('data訂單', res.data);
                    const orderId = res.data.orderId
                    swal({
                        title: "已送出訂單",
                        icon: 'success',
                        timer: 2000
                    });
                    this.cart = []
                    this.$router.push(`/order/${orderId}`)
                })
        },
        check() {
            this.axios.delete(`${VITE_URL}/api/${VITE_PATH}/admin/orders/all`)
                .then((res) => {
                    console.log(res);
                })
        },
        isPhone(value) {
            const phoneNumber = /^(09)[0-9]{8}$/
            return phoneNumber.test(value) ? true : '需要正確的電話號碼'
        },
    },
    computed: {
        ...mapState(cartStore, ['cart'])
    }
}

</script>