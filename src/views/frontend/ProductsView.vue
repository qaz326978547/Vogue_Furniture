<template>
    <loading v-model:active="isLoading"></loading>
    <div style="background-image: url('https://i.imgur.com/m0DSN99.jpg');
                                                                background-position: center;
                                                                background-size: cover;
                                                                height: 300px;
                                                                ">
        <div class="d-flex justify-content-center align-items-center flex-column h-100">
            <h2 class="text-center">產品選單</h2>
            <h2 class="text-center mb-5">PRODUCT LIST</h2>
        </div>
    </div>
    <div class="bg-secondary py-3 text-center">
        <h6>新開幕限時活動 輸入VogueBest2023 即可享九折優惠!!</h6>
    </div>
    <nav class="p-3 d-flex justify-content-center my-5">
        <ul class="d-flex product-category">
            <li class=" p-2 m-1  btn btn-outline-primary" :class="{ 'active': currentCategory == 'all' }"
                @click="getCategory('all')">全部商品</li>
            <li class=" p-2 m-1  btn btn-outline-primary" :class="{ 'active': currentCategory == category }"
                @click="getCategory(category)" v-for="category in categorys">{{ category
                }}</li>
        </ul>
    </nav>
    <div class="container">
        <div class="row ">
            <div class="col-xl-3 col-md-4 col-6 px-1" v-for="product in categoryList" :key="product.id">
                <router-link :to='`/product/${product.id}`'>
                    <div class="card  d-flex  p-0 ">
                        <div class="overflow-hidden">
                            <img class="product-img" :src="product.imageUrl" alt="...">
                        </div>
                        <div class="card-body">
                            <span class="d-block mx-auto badge bg-primary mb-3" style="width: 80px;">{{ product.category
                            }}</span>

                            <h5 class="text-center mb-3">{{ product.title }}</h5>
                            <div class="d-flex justify-content-center">
                                <h6>NT${{ product.price }}</h6>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

import productsStore from '../../stores/productsStore'
import { mapActions, mapState } from 'pinia';
export default {
    data() {
        return {
        }
    },
    methods: {
        ...mapActions(productsStore, ['getProducts', 'getCategory']),

    },
    computed: {
        ...mapState(productsStore, ['products', 'isLoading', 'categorys', 'currentCategory', 'categoryList'])
    },
    mounted() {
        this.getProducts()
        // this.getCategory()
    }
}

</script>

<style>
.card {
    position: relative;
}

.card .product-img {
    display: block;
    transition: transform 0.5s ease;
    min-height: 200px;

}

.card:hover .product-img {
    transform: scale(1.2);
    z-index: 50;
}
</style>