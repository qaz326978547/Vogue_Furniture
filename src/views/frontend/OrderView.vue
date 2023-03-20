<template>
    <div class="container">
        <div class="row gx-5  justify-content-center justify-content-md-start mb-3">
            <div class="col-md-6 col-12 ">
                <h4 class="text-center text-md-start ">訂單內容</h4>
                <div class="mb-3 " v-for="product in products">
                    <div class="row g-0 align-items-center ">
                        <div class="col-4 ">
                            <img :src="product.product.imageUrl" class="img-fluid rounded" alt="..."
                                style="width: 100%; height: 100%;">
                        </div>
                        <div class="col-6">
                            <div class="p-3 ">
                                <small><span class="badge bg-primary ">{{ product.product.category }}</span></small>
                                <h6 class="card-title my-3">{{ product.product.title }}</h6>
                                <p class="card-text">數量:{{ product.qty }}</p>
                            </div>
                        </div>
                        <div class="col-2">
                            <p>NT${{ product.product.price }}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-6 bg-light">
                <h4 class="text-center text-md-start my-3">訂單資訊</h4>
                <div class="mb-3 order-container">
                    <ul>
                        <li>
                            <p class="order-title">訂單狀態:</p>
                            <p>{{ orderData.is_paid ? '已付款' : '未付款' }}</p>
                        </li>
                        <li>
                            <p class="order-title">訂單金額:</p>
                            <p>{{ orderData.total }}</p>
                        </li>
                        <li>
                            <p class="order-title">訂單編號:</p>
                            <p>{{ orderData.id }}</p>
                        </li>
                        <li>
                            <p class="order-title">訂單成立時間:</p>
                            <p>{{ orderTime }}</p>
                        </li>
                    </ul>
                    <hr>
                    <ul>
                        <li>
                            <p class="order-title">收件人:</p>
                            <p>{{ userData.name }}</p>
                        </li>
                        <li>
                            <p class="order-title">Email:</p>
                            <p>{{ userData.email }}</p>
                        </li>
                        <li>
                            <p class="order-title">收件人電話:</p>
                            <p>{{ userData.tel }}</p>
                        </li>
                        <li>
                            <p class="order-title">收件地址:</p>
                            <p>{{ userData.address }}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <button type="button" class="btn btn-primary mt-3" @click="pay">{{ orderData.is_paid ? '付款成功' : '確認付款'
            }}</button>

        </div>
    </div>
</template>


<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import cartStore from '../../stores/cartStore.js';
import { mapActions, mapState } from 'pinia';
export default {
    data() {
        return {
            orderList: {},
            orderData: {},
            orderTime: '',
            products: {},
            userData: {},
            ispay: false,
        }
    },
    methods: {
        ...mapActions(cartStore, ['getCart']),
        getOrder() {
            const order_id = this.$route.params.id

            console.log(order_id);
            this.axios.get(`${VITE_URL}/api/${VITE_PATH}/order/${order_id}`)
                .then((res) => {
                    console.log('res', res);
                    this.orderData = res.data.order
                    this.products = Object.values(this.orderData.products);
                    this.userData = res.data.order.user
                    this.orderList = res.data
                    //轉換時間
                    const newDate = new Date(this.orderData.create_at * 1000);
                    this.orderTime = newDate.toLocaleDateString();
                    console.log('orderData', this.orderData);
                    console.log('product', this.products);
                    console.log('userdata', this.userData);
                    console.log('全部', res.data);
                })
        },
        pay() {
            console.log(this.orderList.order.create_at);
            const today = this.$moment().valueOf()
            this.orderList.order.create_at = today
            const order_id = this.$route.params.id
            this.axios.post(`${VITE_URL}/api/${VITE_PATH}/pay/${order_id}`, this.orderList)
                .then((res) => {
                    console.log(res);
                    swal({
                        title: "付款成功",
                        icon: 'success',
                        timer: 2000
                    });
                    this.getOrder()
                })
        }
    },
    computed: {
        ...mapState(cartStore, ['cart'])
    },
    mounted() {
        this.getOrder()
        this.getCart()
    }
}

</script>