<template>
    <nav class="p-3 d-flex justify-content-center mb-5">
        <ul class="d-flex nav-bar admin-order-navbar">
            <li @click="changeState('all')" :class="{ 'active': orderState == 'all' }">所有訂單</li>
            <li @click="changeState('unPaid')" :class="{ 'active': orderState == 'unPaid' }">待付款</li>
            <li @click="changeState('paid')" :class="{ 'active': orderState == 'paid' }">待出貨</li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: ['changeState', 'orderState'],
}


</script>