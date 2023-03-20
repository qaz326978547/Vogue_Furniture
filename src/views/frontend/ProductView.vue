<template>
    <loading v-model:active="isLoading"></loading>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-4 col-md-6 col-10 d-flex justify-content-center flex-column">
                <img :src="mainImge ? mainImge : product.imageUrl" alt="" style="height: 400px; object-fit: ;">
                <div class="row mt-3">
                    <div class="col ">
                        <swiper :slides-per-view="3" :space-between="10" :modules="modules" navigation
                            :pagination="{ clickable: true }">
                            <swiper-slide v-for="item in product.imagesUrl" :key="item.id">
                                <img :src="item" alt="" @click="mainImge = item" style="max-height: 150px;">
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>

            </div>
            <div class="col-xl-4 col-md-6 col-12 py-md-3  py-5 lh-lg d-flex  flex-column">
                <h3 class="mb-3">{{ product.title }}</h3>
                <h4 class="mb-0 me-3">NT${{ product.price }}</h4>
                <s v-if="product.price !== product.origin_price" class="fs-5 text-primary">NT${{ product.origin_price }}</s>
                <div>
                    <h6 class="mt-5">商品資訊</h6>
                    <p>{{ product.content }}</p>
                </div>
                <div>
                    <h6>配送規則</h6>
                    <p>
                        超過 10,000 元的訂單都有資格免費送貨。 200 元的固定運費適用於 10,000 元以下的訂單。 對於較大的家具，羅根團隊
                        與專門從事家具運輸的運送方合作，以確保產品安全無虞地到達。</p>
                </div>
                <div>
                    <h6>退貨規則</h6>
                    <p>我們知道購買家具的過程可能會帶來壓力。這就是為什麼 羅根團隊在這里為您處理所有退貨並讓您的體驗盡可能輕鬆。 您可以在交貨後 30
                        天內退回大多數物品以獲得退款。但需要您支付退貨運費，此位該家具必須保持完整產品及包裝。</p>
                </div>
                <div class="input-group">
                    <select name="" id="" class="form-select" v-model="qty">
                        <option :value="i" v-for="i in 5" :key="i">{{ i }}</option>
                    </select>
                    <button type="button" class="btn btn-primary" @click="addCart(product.id, qty)">加入購物車</button>
                </div>
            </div>
            <div>
                <h3 class="my-3">推薦商品</h3>
                <hr>

                <div class="row">
                    <div class="col text-center" v-for="item in limitProduct" :key="item.id">
                        <router-link :to="`${item.id}`">
                            <img :src="item.imageUrl" alt="">
                            <p class="mb-0 mt-3">{{ item.title }}</p>
                            <p>NT${{ item.price }}</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cartStore from '../../stores/cartStore.js';
import productsStore from '../../stores/productsStore.js';
import { mapActions, mapState } from 'pinia';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'

export default {
    data() {
        return {
            id: '',
            mainImge: '',
            qty: 1,
            modules: [Navigation, Pagination]
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    methods: {
        ...mapActions(cartStore, ['addCart']),
        ...mapActions(productsStore, ['getProduct', 'getCategoryItem'])
    },
    watch: {
        $route(to, from) {
            this.$router.push(to.path)

        }
    },
    computed: {
        ...mapState(productsStore, ['product', 'isLoading', 'categoryItem', 'limitProduct']),
    },
    mounted() {
        const { id } = this.$route.params
        this.id = id
        this.getProduct(id)
    }
}

</script>

<style>
.swiper {
    max-width: 100%;
    height: 100%;
    margin: 0;
}

.swiper-button-next,
.swiper-button-prev {
    color: white;
}

.swiper-pagination-bullet {
    background-color: white;

}

.swiper-slide img {
    display: block;
    min-height: 150px;

    object-fit: cover;
}


/* .swiper-slide {
    max-height: 200px;
} */
</style>