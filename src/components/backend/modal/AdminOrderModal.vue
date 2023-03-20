<template>
    <div class="modal fade " id="orderModal" ref="orderModal">
        <div class="modal-dialog ">
            <div class="modal-content ">
                <div class="modal-header bg-primary ">
                    <h4 class="modal-title text-white">訂單資訊</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="mb-3 order-container">
                        <ul>
                            <li>
                                <p class="order-title">訂單狀態:</p>
                                <p>{{ tempOrder?.is_paid ? '已付款' : '未付款' }}</p>
                            </li>
                            <li>
                                <p class="order-title">訂單金額:</p>
                                <p>{{ tempOrder?.total }}</p>
                            </li>
                            <li>
                                <p class="order-title">訂單編號:</p>
                                <p>{{ tempOrder?.id }}</p>
                            </li>
                            <li>
                                <p class="order-title">訂單成立時間:</p>
                                <p>{{ tempOrder?.create_at }}</p>
                            </li>
                            <li v-if="tempOrder?.is_paid">
                                <p class="order-title">付款時間:</p>
                                <p>{{ tempOrder?.paid_date }}</p>
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
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">關閉</button>
                    <!-- <button  type="button" class="btn btn-primary" >確定</button> -->

                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    props: ['tempOrder'],
    data() {
        return {

        }
    },
}



</script>