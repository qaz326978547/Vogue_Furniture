<script>
import { RouterLink, RouterView } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    AOS.init({
      offset: 400,
      delay: 0,
      duration: 1000
    })
  }
}
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import "./assets/all.scss";
</style>
