<template>
    <div class="container">
        <div class="overflow-hidden" v-if="cart.carts?.length > 0">
            <table class="table align-middle">
                <thead>
                    <tr>
                        <th style="width: 150px;"></th>
                        <th style="width: 200px;">商品名稱</th>
                        <th class="is-visible" style="width: 80px;">數量</th>
                        <th style="width: 200px;">小計</th>
                        <th style="width: 200px;"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in cart.carts" :key="item.id">
                        <td>
                            <img :src="item.product.imageUrl" alt="" style="max-width: 150px;">
                        </td>
                        <td>
                            <div class="text-start  px-3">
                                <small><span class="badge bg-primary mb-3">{{ item.product.category }}</span></small>
                                <h6 class="fs-7">{{ item.product.title }}</h6>
                                <select name="" id="" class="form-select  not-phone mt-3" v-model="item.qty"
                                    style="width: 80px;" @change="updatedCart(item.id, item.qty)">
                                    <option :value="i" v-for="i in 10">{{ i }}</option>
                                </select>
                            </div>
                        </td>
                        <td class="px-0  mx-0">
                            <select name="" id="" class="form-select phone" v-model="item.qty" style="width: 80px;"
                                @change="updatedCart(item.id, item.qty)">
                                <option :value="i" v-for="i in 10">{{ i }}</option>
                            </select>
                        </td>
                        <td class="h6 ">{{ item.final_total }}</td>
                        <td>
                            <button type="button" class="btn" @click="deleteCart(item.id)">
                                <i class="bi fs-4 bi-trash text-danger"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="row g-3 d-flex justify-content-between ">
                <div class="cart-code col-md-5">
                    <ul>
                        <li class="fs-6">共{{ cart.carts?.length }}筆商品
                        </li>
                    </ul>
                    <div>
                        <label class="my-2" for="code"></label>
                        <div class="input-group ">
                            <input v-model="data.code" name="code" id="code" class="form-control" type="text"
                                placeholder="折扣碼">
                            <button @click="useCoupon" class="btn btn-primary">套用優惠卷</button>
                        </div>
                        <p class="text-success">{{ message }}</p>
                    </div>
                </div>
                <div class="d-flex flex-column  cart-total col-md-5">
                    <ul>
                        <li>商品總額NT$</li>
                        <li>{{ cart.total }}</li>
                    </ul>
                    <ul>
                        <li>運費NT$</li>
                        <li v-if="cart.final_total < 10000">200</li>
                        <li v-else><s>200</s></li>
                    </ul>
                    <hr class="bg-primary">
                    <ul>
                        <li>總計NT$</li>
                        <li>{{ cart.final_total > 10000 ? cart.final_total : cart.final_total + 200 }}</li>
                    </ul>
                    <router-link class="btn btn-primary mt-5" to="/checkout">前往付款</router-link>
                </div>
            </div>
        </div>

        <div v-else class="text-center" style="height: 52vh;">
            <h3 class="my-5">購物車還沒有商品哦</h3>
            <router-link to="/products" class="btn btn-primary">前往購物</router-link>
        </div>
    </div>
</template>


<script>
const { VITE_URL, VITE_PATH } = import.meta.env;

import cartStore from '../../stores/cartStore.js';
import { mapState, mapActions } from 'pinia';
export default {
    data() {
        return {
            data: {
                code: ''
            },
            message: ''
        }
    },

    methods: {
        ...mapActions(cartStore, ['getCart', 'deleteCart', 'updatedCart']),
        useCoupon() {

            this.axios.post(`${VITE_URL}/api/${VITE_PATH}/coupon`, { data: this.data })
                .then((res) => {
                    this.message = res.data.message
                    this.cart.final_total = res.data.data.final_total
                })
        }

    },
    computed: {
        ...mapState(cartStore, ['cart'])
    },
    mounted() {
        this.getCart()
    }

}

</script>