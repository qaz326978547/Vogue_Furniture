<template>
    <div class="project-bg">
        <div class="d-flex justify-content-center align-items-center flex-column h-100">
            <h3>情境空間</h3>
            <h3>PROJECT</h3>
        </div>
    </div>
    <div class="bg-secondary text-center py-3">
        <h4>{{ project.project }}</h4>
    </div>
    <div class="container">
        <div v-for="item in project.imagesUrl">
            <img class="my-3" :src="item" alt="">
        </div>
        <div>
            <div v-if="project.project == '客廳'">
                <h3 class="text-center">客廳｜美感+實用的最高CP值</h3>
                <p class="text-center  lh-lg fs-6">
                    客廳是家裡最核心的空間，而沙發則是客廳的主角<br>
                    模組沙發可以符合每個家的需求變換排列<br>
                    營造出最適合你們的風格
                </p>
            </div>
            <div v-if="project.project == '臥室'">
                <h3 class="text-center">臥室｜一組好床架為家帶來更多幸福</h3>
                <p class="text-center  lh-lg fs-6">
                    家裡不可或缺的、最重要的，就是床<br>
                    而一組好床架能為你家帶來更多幸福<br>
                    設計清新，用於主臥房、兒童房、客房都好搭配
                </p>
            </div>
            <div v-if="project.project == '書房'">
                <h3 class="text-center">書房｜在家工作也是一種享受</h3>
                <p class="text-center  lh-lg fs-6">
                    桌椅系列讓你就算要加班，也能享受工作時刻<br>
                    不管是閱讀看書或做自己有興趣的事都有它相伴<br>
                    無論你喜歡的風格是什麼<br>
                    都能用桌椅系列搭配
                </p>
            </div>
            <div v-if="project.project == '兒童房'">
                <h3 class="text-center">兒童房｜打造專屬空間</h3>
                <p class="text-center  lh-lg fs-6">
                    設計風格簡約，採用耐看中性的色系<br>
                    保留自然原樺木色製作， 利用牆色變換、改變軟件配置<br>
                    即可打造不同個性的兒童房
                </p>
            </div>
        </div>
        <h3 class="mt-6">推薦商品</h3>
        <hr>

        <div class="row">
            <swiper :breakpoints="breakpoints" :slides-per-view="1" :modules="modules" :pagination="{ clickable: true }">
                <swiper-slide class="sale-slide" v-for="item in products" :key="item.id">
                    <div class="card overflow-hidden ">
                        <router-link :to="`/product/${item.id}`">
                            <img class="project-img mx-auto" :src="item.imageUrl" alt="">
                        </router-link>
                    </div>
                    <hr>
                    <div>
                        <h5 class="my-3 text-center">{{ item.title }}</h5>
                        <h6 class="text-center">NT${{ item.price }}</h6>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>


<script>

import projectsData from '../../project.json'
import productsStore from '../../stores/productsStore.js';
import { mapState, mapActions } from 'pinia';
const { VITE_URL, VITE_PATH } = import.meta.env;
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Pagination } from 'swiper'

export default {
    data() {
        return {
            project: {},
            products: [],
            modules: [EffectFade, Pagination],
            breakpoints: {
                992: {
                    slidesPerView: 3,
                },
                769: {
                    slidesPerView: 2,
                },
            },
        }
    },
    components: {
        Swiper,
        SwiperSlide
    },
    methods: {
        getProject() {
            this.project = projectsData.projects
            const { id } = this.$route.params
            const currentProject = this.project.filter(item => item.id == id)
            this.project = currentProject[0]
        },
        getProduct() {
            this.axios.get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
                .then((res) => {
                    console.log(res.data.products);
                    const category = res.data.products.filter(item => item.category == this.project.category)
                    this.products = category
                    console.log(this.products);
                })
        },
        ...mapActions(productsStore, ['getCategoryItem'])
    },
    computed: {
        ...mapState(productsStore, ['categoryItem'])
    },
    mounted() {
        this.getProject()
        this.getProduct()
    }
}


</script>

<style>
.project-bg {
    background-image: url('https://i.imgur.com/bZcjNIG.jpg');
    background-position: center;
    background-size: cover;
    height: 40vh;
}

.swiper-pagination {
    position: relative;
    margin-top: 30px;
}

.swiper-pagination-bullet-active {
    background-color: #574B45;
}
</style>