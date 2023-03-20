<template>
    <div class="modal fade " id="couponModal" ref="couponModal">
        <div class="modal-dialog ">
            <div class="modal-content ">
                <div class="modal-header bg-primary ">
                    <h5 v-if="isNew" class="modal-title text-white">新增產品</h5>
                    <h5 v-else class="modal-title text-white">編輯產品</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label for="title" class="form-label">優惠卷名稱</label>
                                <input v-model="tempCoupon.title" id="title" type="text" class="form-control mb-2"
                                    placeholder="請輸入優惠卷名稱">
                            </div>
                            <div class="mb-3">
                                <label for="percent" class="form-label">折扣%數</label>
                                <input v-model="tempCoupon.percent" id="percent" type="text" class="form-control mb-2"
                                    placeholder="請輸入折扣%數">
                            </div>
                            <div class="mb-3">
                                <label for="due_Date" class="form-label">到期日</label>
                                <br>
                                <input type="date" id="start" name="trip-start" @change="updateDate"
                                    :v-model.lazy="tempCoupon.due_date">
                            </div>
                            <div class="mb-3">
                                <label for="code" class="form-label">折扣碼</label>
                                <input v-model="tempCoupon.code" id="code" type="text" class="form-control mb-2"
                                    placeholder="請輸入折扣碼">
                            </div>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input v-model="tempCoupon.is_enabled" :true-value="1" :false-value="0" id="is_enabled"
                                        class="form-check-input" type="checkbox">
                                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">取消</button>
                    <button v-if="isNew" type="button" class="btn btn-primary" @click="createCoupon">確定</button>
                    <button v-else type="button" class="btn btn-primary" @click="updateCoupon">確定</button>

                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    props: ['tempCoupon', 'createCoupon', 'updateDate', 'isNew', 'updateCoupon'],
    data() {
        return {

        }
    },

}


</script>