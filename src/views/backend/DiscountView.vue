<template>
    <loading v-model:active="isLoading"></loading>
    <div class="text-end mt-4">
        <button class="btn btn-primary me-5" @click="openModal('new')">
            建立新優惠碼
        </button>
    </div>
    <div class="table-responsive">
        <table class="table mt-4">
            <thead>
                <tr>
                    <th width="120">優惠名稱</th>
                    <th width="100">折扣%數</th>
                    <th width="100">到期日</th>
                    <th width="100">折扣碼</th>
                    <th width="100">是否啟用</th>
                    <th width="100"></th>
                </tr>
            </thead>
            <tbody class="d-felx align-items-center">
                <tr v-for="coupon in couponData">
                    <!-- 這裡改成couponData.due_date個會出現格式2023-03-08 -->
                    <td>{{ coupon?.title }}</td>
                    <td>{{ coupon?.percent }}</td>
                    <td>{{ coupon?.due_date }}</td>
                    <td>{{ coupon?.code }}</td>
                    <td>{{ coupon?.is_enabled ? '啟用' : '未啟用' }}</td>
                    <td>
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('edit', coupon)">
                                編輯
                            </button>
                            <button type="button" class="btn btn-outline-danger btn-sm"
                                @click="openModal('delete', coupon)">
                                刪除
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <admin-coupon-modal :tempCoupon="tempCoupon" :createCoupon="createCoupon" :updateDate="updateDate" :isNew="isNew"
        :updateCoupon="updateCoupon"></admin-coupon-modal>
    <admin-delete-coupon :delCoupon="delCoupon" :tempCoupon="tempCoupon"></admin-delete-coupon>
</template>



<script>
import modal from "bootstrap/js/dist/modal";
import alertStore from "../../stores/alertStore.js";
import { mapActions } from "pinia";
import AdminCouponModal from '../../components/backend/modal/AdminCouponModal.vue';
import AdminDeleteCoupon from '../../components/backend/AdminDeleteCoupon.vue'
const { VITE_URL, VITE_PATH } = import.meta.env;
let couponModal = null
let delCouponModal = null
export default {
    data() {
        return {
            isLoading: false,
            isNew: false,
            couponData: {
                title: "test",
                is_enabled: 1,
                percent: 30,
                due_date: 1678342980632,
                code: "VogueBest2024"
            },
            tempCoupon: {},
        }
    },
    components: {
        AdminDeleteCoupon,
        AdminCouponModal,

    },
    methods: {
        ...mapActions(alertStore, ['getState']),
        getCoupon() {
            this.isLoading = true
            this.axios.get(`${VITE_URL}/api/${VITE_PATH}/admin/coupons`)
                .then((res) => {
                    console.log('get', res.data.coupons);
                    this.couponData = res.data.coupons
                    //改成時間格式2023-03-09
                    this.couponData.map(item => {
                        const newDate = this.$moment(item.due_date).format('YYYY-MM-DD')
                        item.due_date = newDate
                    })
                    this.isLoading = false
                })
                .catch((err) => {
                    this.getState('資料無法取得,請稍後再試', false)
                })
        },
        createCoupon() {
            this.axios.post(`${VITE_URL}/api/${VITE_PATH}/admin/coupon`, { data: this.tempCoupon })
                .then((res) => {
                    this.getState('新增成功', true)
                    this.getCoupon()
                })
                .catch((err) => {
                    this.getState('資料新增失敗,請稍後再試', false)
                })
        },
        openModal(isNew, coupon) {
            if (isNew == 'new') {
                this.isNew = true
                this.tempCoupon = {}
                couponModal.show()
            } else if (isNew == 'edit') {
                this.isNew = false
                this.tempCoupon = { ...coupon }
                couponModal.show()
            } else if (isNew == 'delete') {
                this.tempCoupon = { ...coupon }
                delCouponModal.show()

            }
        },
        updateDate(e) {
            const toTimestamp = this.$moment(e.target.value).valueOf()
            this.tempCoupon.due_date = toTimestamp
        },
        updateCoupon() {
            this.axios.put(`${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.tempCoupon.id}`, { data: this.tempCoupon })
                .then((res) => {
                    this.getState('編輯成功', true)
                    this.getCoupon()
                    couponModal.hide()
                })
                .catch((err) => {
                    this.getState('資料更新失敗,請稍後再試', false)
                })
        },
        delCoupon() {
            this.axios.delete(`${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.tempCoupon.id}`)
                .then((res) => {
                    this.getState('刪除成功', true)
                    this.getCoupon()
                    delCouponModal.hide()
                })
                .catch((err) => {
                    this.getState('資料刪除失敗,請稍後再試', false)
                })

        }


    },
    mounted() {
        couponModal = new modal(document.getElementById("couponModal"));
        delCouponModal = new modal(document.getElementById("delCouponModal"));
        this.getCoupon()

    }
}


</script>