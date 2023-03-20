<template>
    <admin-navbar></admin-navbar>
    <router-view></router-view>
</template>



<script>
import AdminNavbar from '../../components/backend/AdminNavbar.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        AdminNavbar
    }

}



</script>