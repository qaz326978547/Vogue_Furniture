<template>
    <div class="modal fade" id="orderModal" ref="orderModal">
        <div class="modal-dialog">
            <div class="container">
                <div class="row p-3 bg-white gx-5  justify-content-center justify-content-md-start mb-3">
                    <div class="col-md-6 col-12">
                        <h4 class="text-center text-md-start my-3">訂單內容</h4>
                        <div class="mb-3 " v-for="product in tempOrder.products">
                            <div class="row g-0 align-items-center ">
                                <div class="col-4 ">
                                    <img :src="product.product.imageUrl" class="img-fluid rounded" alt="..."
                                        style="width: 100%; height: 100%;">
                                </div>
                                <div class="col-6">
                                    <div class="p-3 ">
                                        <small><span class="badge bg-primary ">{{ product.product.category }}</span></small>
                                        <h6 class="card-title my-3">{{ product.product.title }}</h6>
                                        <p class="card-text">數量:{{ product.qty }}</p>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <p>NT${{ product.product.price }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 bg-light" style="height: 400px;">
                        <h4 class="text-center text-md-start my-3">訂單資訊</h4>
                        <div class="mb-3 order-container">
                            <ul>
                                <li>
                                    <p class="order-title">訂單狀態:</p>
                                    <p>{{ tempOrder.is_paid ? '已付款' : '未付款' }}</p>
                                </li>
                                <li>
                                    <p class="order-title">訂單金額:</p>
                                    <p>{{ tempOrder.total }}</p>
                                </li>
                                <li>
                                    <p class="order-title">訂單編號:</p>
                                    <p>{{ tempOrder.id }}</p>
                                </li>
                                <li>
                                    <p class="order-title">訂單成立時間:</p>
                                    <p>{{ tempOrder.create_at }}</p>
                                </li>
                            </ul>
                            <hr>
                            <ul>
                                <li>
                                    <p class="order-title">收件人:</p>
                                    <p>{{ tempOrder.user?.name }}</p>
                                </li>
                                <li>
                                    <p class="order-title">Email:</p>
                                    <p>{{ tempOrder.user?.email }}</p>
                                </li>
                                <li>
                                    <p class="order-title">收件人電話:</p>
                                    <p>{{ tempOrder.user?.tel }}</p>
                                </li>
                                <li>
                                    <p class="order-title">收件地址:</p>
                                    <p>{{ tempOrder.user?.address }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>

export default {
    props: ['tempOrder', 'orderProduct'],
    data() {
        return {
        }
    },
    mounted() {
    }
}



</script>