<template>
  <nav class="d-flex py-3 px-5 justify-content-between mb-5 main-nav" :class="{ 'bg-white': navColor }"
    @scroll="handleScroll">
    <router-link to="/">
      <img src="https://img.onl/2sOAAF" alt="" style="width: 150px;">
    </router-link>
    <!-- PC -->
    <ul class="d-none  d-md-flex nav-bar align-items-center ">
      <li>
        <ul class="text-center ">
          <router-link to="/products">
            <li>產品</li>
            <li>PRODUCT</li>
          </router-link>
        </ul>
      </li>
      <li>
        <ul class="text-center ">
          <router-link to="/projects">
            <li>情境空間</li>
            <li>PROJECT</li>
          </router-link>
        </ul>
      </li>
      <li>
        <ul class="text-center ">
          <router-link to="/about">
            <li>關於我們</li>
            <li>ABOUT</li>
          </router-link>
        </ul>
      </li>
      <li>
        <router-link to="/cart">
          <i class="bi bi-cart2 position-relative" style="font-size: 24px;">
            <span style="font-size: 8px;"
              class="position-absolute top-0 start-100  badge badge-pill rounded-pill bg-danger">
              {{ cart.carts?.length }}</span>
          </i>
        </router-link>
      </li>
    </ul>
    <!-- RWD -->
    <ul :class="{ 'active': isOpenNavbar }" class="d-flex d-md-none nav-bar nav-bar-rwd align-items-center flex-column">
      <li>
        <ul class="text-center ">
          <router-link to="/products">
            <li>產品</li>
            <li>PRODUCT</li>
          </router-link>
        </ul>
      </li>
      <li>
        <ul class="text-center ">
          <router-link to="/projects">
            <li>情境空間</li>
            <li>PROJECT</li>
          </router-link>
        </ul>
      </li>
      <li>
        <ul class="text-center ">
          <router-link to="/about">
            <li>關於我們</li>
            <li>ABOUT</li>
          </router-link>
        </ul>
      </li>
    </ul>
    <!-- RWD -->

    <i class="bi bi-list d-md-none d-block" :class="{ 'd-none': isOpenNavbar }" style="font-size: 36px; cursor: pointer;"
      @click="clickNavbar"></i>
    <i class="bi bi-x-lg d-md-none d-block" :class="{ 'd-none': !isOpenNavbar }" style="font-size: 36px; cursor: pointer;"
      @click="clickNavbar"></i>
  </nav>
  <router-link to="/cart" class="cart-icon d-md-none d-block" :class="{ 'd-none': scrollHide && this.path == '/' }">
    <span class="cart-icon">
      <i class="bi bi-cart2  position-relative" style="font-size: 24px;">
        <span style="font-size: 8px;" class="position-absolute top-10 start-100  badge badge-pill rounded-pill bg-danger">
          {{ cart.carts?.length }}</span>
      </i>
    </span>
  </router-link>


  <i :class="{ 'd-none': scrollHide }" class="bi bi-chevron-up goTop-icon" @click="scrollTop"></i>
</template>

<script>

import cartStore from "../../stores/cartStore.js";
import { mapActions, mapState } from 'pinia'

export default {
  data() {
    return {
      path: '/',
      navColor: false,
      scrollHide: true,
      scrollY: 0,
      isOpenNavbar: false,
    }
  },
  watch: {
    $route() {
      this.path = this.$route.path
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    scrollTop() {
      window, scrollTo(0, 0)
    },
    handleScroll() {
      if (this.path == "/") {
        this.navColor = false
        if (this.scrollY > 50) {
          this.navColor = true
        } else {
          this.navColor = false
        }
      } else {
        this.navColor = true

      }
      this.scrollY = document.documentElement.scrollTop
      this.scrollHide = document.documentElement.scrollTop > 200 ? false : true
    },
    clickNavbar() {
      if (this.isOpenNavbar) {
        this.isOpenNavbar = false
      } else {
        this.isOpenNavbar = true
      }
    }
  },
  watch: {
    $route() {
      this.isOpenNavbar = false
    }
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  mounted() {
    this.getCart();
    window.addEventListener('scroll', this.handleScroll);
  },

}


</script>
