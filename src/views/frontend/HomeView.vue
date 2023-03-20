

<template>
  <div class="overflow-hidden" style="margin-top: -100px;">
    <swiper :spaceBetween="30" :centeredSlides="true" :effect="'fade'" :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }" :modules="modules" class="mySwiper ">
      <swiper-slide class="mySwiper-slide" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="">
      </swiper-slide>
      <div class="p-5 text-center flex-column  bg-title d-flex justify-content-center"
        style="background: rgb(0, 0, 0,50%);">
        <img class="mx-auto" src="https://img.onl/Yp0Aw" alt="" style="width: 150px;">
        <div class=" my-3">
          <p class="text-white">「我想為你打造，你心中的那個家。」</p>
          <p class="text-white">I want to build for you, the home in your heart.</p>
        </div>
        <div>
          <button class="btn btn-outline-light me-3 btn-shop">
            <router-link to="/products" class="text-white btn-shop">
              進入商店
            </router-link>
          </button>
          <button class="btn btn-light">
            <router-link to="/about">
              關於我們
            </router-link>
          </button>
        </div>
      </div>
    </swiper>
    <section class="bg-secondary py-5" data-aos="fade-up">
      <div class="container">
        <div class="row ">
          <div class="home-main-selection col-4 text-center ">
            <i class="bi bi-lightbulb"></i>
            <p class="mt-4 fw-bold ">Original Design</p>
            <h4 class="mt-3">原創設計</h4>
            <p class="px-md-3 px-xl-5 lh-lg pt-3">每件產品都是融合了設計師深厚的美學底蘊及豐富的生活體驗，並透過嚴謹的開發流程所創造出的原創設計。</p>
          </div>
          <div class="home-main-selection col-4 text-center ">
            <i class="bi bi-currency-dollar"></i>
            <p class="mt-4 fw-bold">Transparency</p>
            <h4 class="mt-3">價格透明</h4>
            <p class="px-md-3 px-xl-5 lh-lg pt-3">我們所有產品價格及資訊皆公開透明，沒有傳統家具業不公開的抽傭模式，您所支付的費用會用在設計、生產及營運開銷上。</p>
          </div>
          <div class="home-main-selection col-4 text-center ">
            <i class="bi bi-hand-thumbs-up"></i>
            <p class="mt-4 fw-bold">Reasonable Price</p>
            <h4 class="mt-3">合理定價</h4>
            <p class="px-md-3 px-xl-5 lh-lg pt-3">我們每個品項的定價皆是依據產品的取得成本而決定，沒有中間的成本堆疊，同樣的價格你可以買到設計及品質兼顧的產品</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <section class="mt-5 container ">
    <div class="row justify-content-between  g-3  align-items-md-center" data-aos="fade-left">
      <img class="col-md-7 col" src="https://i.imgur.com/nfmgWU6.jpg" alt="">
      <div class="col-md-5 col ">
        <div class="content-text py-3">
          <h4 class="mb-3">木質傢俱 x 自然之美</h4>
          <p class="lh-lg ">精選天然木材打造，完美呈現大自然紋理，讓你的家更貼近自然。我們期待為您帶來最高品質的木質傢俱，一起創造溫馨舒適的生活空間。</p>
        </div>
      </div>
    </div>
    <div class="mt-5 row flex-row-reverse   g-3  align-items-md-center" data-aos="fade-right">
      <img class="col-md-7 col" src="https://i.imgur.com/2VCejmI.jpg" alt="">
      <div class="col-md-5 col ">
        <div class="content-text py-3">
          <h4 class="mb-3">品味質感 x 品牌力量</h4>
          <p class="lh-lg ">擁有獨特的風格和工藝技術，讓您在品質和外觀上都能感受到無可比擬的高端質感。我們的品牌致力於提供最優秀的服務和產品，讓您的家成為您最自豪的展示空間。</p>
        </div>
      </div>
    </div>
    <div class="mt-5 row   g-3  align-items-md-center" data-aos="fade-left">
      <img class="col-md-7 col" src="https://i.imgur.com/tzsSHLF.jpg" alt="">
      <div class="col-md-5 col ">
        <div class="content-text py-3">
          <h4 class="mb-3">現代設計 x 客製服務</h4>
          <p class="lh-lg ">融合現代設計和經典元素，將機能性和美感完美結合。我們的傢俱不僅耐用實用，更是具有觀賞性和收藏價值。讓我們一同創造一個富有生氣和靈感的生活空間，一個屬於您的精彩時代！</p>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-6 container">
    <h3>特惠品項 / On Sale</h3>
    <hr>
    <div data-aos="fade-up">
      <swiper :breakpoints="breakpoints" :slides-per-view="1" :modules="modules" :pagination="{ clickable: true }">
        <swiper-slide class="sale-slide" v-for="item in categoryItem" :key="item.id">
          <div class="card overflow-hidden">
            <router-link :to="`/product/${item.id}`">
              <img class="product-img" :src="item.imageUrl" alt="">
            </router-link>
          </div>
          <hr>
          <div class=" d-flex justify-content-between align-items-center">
            <div class="onsale-text">
              <h6 class="my-3">{{ item.title }}</h6>
              <div class="d-flex">
                <p>NT${{ item.price }}</p>
                <s class="ms-3 text-primary">NT${{ item.origin_price }}</s>
              </div>
            </div>
            <i class="bi bi-cart2" style="font-size: 24px;" @click="addCart(item.id, 1)"></i>
          </div>
        </swiper-slide>
      </swiper>
    </div>

  </section>

  <section class="mt-6 container">
    <h3 class="ms-3 ">情境空間 / PROJECTS</h3>
    <hr>
    <div data-aos="fade-up">
      <swiper :breakpoints="breakpoints" :slides-per-view="1" :modules="modules" :pagination="{ clickable: true }">
        <swiper-slide class="sale-slide" v-for="item in projects" :key="item.id">
          <div class="card overflow-hidden">
            <router-link :to="`/project/${item.id}`">
              <img class="product-img project-img" :src="item.image" alt="">
            </router-link>
          </div>
          <hr>
          <div class="onsale-text">
            <h6 class="my-3 text-center">{{ item.project }}</h6>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'
import productsStore from "../../stores/productsStore.js";
import { mapState, mapActions } from "pinia";
import cartStore from '../../stores/cartStore.js';
import project from '../../project.json'
export default {
  data() {
    return {
      modules: [Autoplay, EffectFade, Navigation, Pagination],
      images: ['https://img.onl/bvHAMH', 'https://img.onl/g5U81i', 'https://img.onl/iXDtJf'],
      breakpoints: {
        992: {
          slidesPerView: 3,
        },
        769: {
          slidesPerView: 2,
        },
      },
      projects: [],
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    ...mapActions(productsStore, ['getCategoryItem']),
    ...mapActions(cartStore, ['addCart']),
  },
  computed: {
    ...mapState(productsStore, ['categoryItem'])
  },
  mounted() {
    this.getCategoryItem('桌椅系列')
    this.projects = project.projects
    console.log(this.projects);
  },

}
</script>


<style>
.mySwiper {
  position: relative;
  height: 100vh;
}

.swiper {
  width: 100%;
}

.mySwiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sale-slide {
  padding: 0 16px;
}

.sale-slide img {
  width: 100%;
  display: block;
  object-fit: cover;
}

.swiper-button-next,
.swiper-button-prev {
  color: #574B45;
}

.swiper-pagination-bullet-active {
  background-color: #574B45;
}

.swiper-pagination {
  position: relative;
  margin-top: 30px;
}

.bg-title {
  width: 80%;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 100;
}


.btn-shop:hover {
  color: #574B45 !important;
}

.btn-shop:hover>a {
  color: #574B45 !important;

}
</style>