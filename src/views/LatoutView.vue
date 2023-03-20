<template>
    <div>
        <navbar-component></navbar-component>
        <div class="overflow-hidden" style="padding-top: 100px; ">
            <RouterView :key="$route.fullPath" />
        </div>
        <footer-component></footer-component>
    </div>
</template>
<script>
import NavbarComponent from '../components/frontend/NavbarComponent.vue'
import FooterComponent from '../components/frontend/FooterComponent.vue'
export default {
    data() {
        return {
            path: '/'
        }
    },
    methods: {

    },

    watch: {
        $route() {
            this.path = this.$route.path
        }
    },
    components: {
        FooterComponent,
        NavbarComponent
    },
    mounted() {
    }
}


</script>

