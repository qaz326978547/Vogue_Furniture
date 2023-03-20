<template>
    <loading v-model:active="isLoading"></loading>
    <order-state-navbar :changeState="changeState" :orderState="orderState"></order-state-navbar>
    <div class="table-responsive ">
        <table class="table">
            <thead>
                <tr>
                    <th width="100">收件人</th>
                    <th width="130">訂單時間</th>
                    <th v-if="orderState !== 'unPaid'" width="130">付款時間</th>
                    <th width="100">商品總額</th>
                    <th width="100"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.id">
                    <td>{{ order.user.name }}</td>
                    <td>{{ order.create_at }}</td>
                    <td v-if="orderState !== 'unPaid'">{{ order.paid_date }}</td>
                    <td>{{ order.total }}</td>
                    <td>
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal(order, false)">
                                查看更多
                            </button>
                            <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal(order, true)">
                                刪除
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- 分頁 -->
    <nav aria-label="Page navigation example" class="d-flex justify-content-center mt-3">
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: !pages.has_pre }">
                <a @click.prevent="getOrders(orderState, pages.current_page - 1)" class="page-link" href="#"
                    aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>

            <li class="page-item" :class="{ active: page === pages.current_page }" v-for="page in pages.total_pages"
                :key="page + 'page'">
                <a @click.prevent="getOrders(orderState, page)" class="page-link" href="#">{{
                    page
                }}</a>
            </li>
            <li class="page-item" :class="{ disabled: !pages.has_next }">
                <a @click.prevent="getOrders(orderState, pages.current_page + 1)" class="page-link" href="#"
                    aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>

    <!-- 分頁 -->
    <admin-order-modal :tempOrder="tempOrder"></admin-order-modal>
    <admin-order-delete-modal :tempOrder="tempOrder" :delOrder="delOrder"></admin-order-delete-modal>
</template>



<script>
import OrderStateNavbar from '../../components/backend/OrderStateNavbar.vue'
import adminOrderStore from '../../stores/backend/adminOrderStore.js';
import AdminOrderModal from '../../components/backend/modal/AdminOrderModal.vue'
import AdminOrderDeleteModal from '../../components/backend/modal/AdminOrderDeleteModal.vue'
import alertStore from '../../stores/alertStore.js';
import { mapActions, mapState } from 'pinia';
import modal from "bootstrap/js/dist/modal";

const { VITE_URL, VITE_PATH } = import.meta.env;

let orderModal = null
let delOrderModal = null
export default {
    data() {
        return {
            orderState: 'all',
            tempOrder: {}
        }
    },
    components: {
        AdminOrderModal,
        AdminOrderDeleteModal,
        OrderStateNavbar
    },
    methods: {
        ...mapActions(adminOrderStore, ['getOrders']),
        ...mapActions(alertStore, ['getState']),
        changeState(state) {
            this.orderState = state
            this.getOrders(state)
        },
        openModal(order, isDelete) {
            this.tempOrder = order
            if (isDelete) {
                console.log(this.tempOrder);
                delOrderModal.show()
            } else {
                orderModal.show()
            }

        },
        delOrder(id) {
            this.axios.delete(`${VITE_URL}/api/${VITE_PATH}/admin/order/${id}`)
                .then((res) => {
                    console.log(res);
                    this.getState('已刪除訂單', true)
                    this.getOrders(this.orderState)
                    delOrderModal.hide()
                })
        }

    },
    computed: {
        ...mapState(adminOrderStore, ['orders', 'isLoading', 'pages']),
    },
    mounted() {
        this.getOrders('all')
        orderModal = new modal(document.getElementById("orderModal"));
        delOrderModal = new modal(document.getElementById("delOrderModal"));

    }
}



</script>