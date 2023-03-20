<template>
    <admin-navbar></admin-navbar>
    <div class="left-padding pb-5">
        <router-view></router-view>
    </div>
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