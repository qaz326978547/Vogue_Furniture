<template>
    <loading v-model:active="isLoading"></loading>

    <div class="mb-5">
        <div class="text-end mt-4">
            <button class="btn btn-primary me-5" @click="openModal('new')">
                建立新的產品
            </button>
        </div>
        <div class="table-responsive ">
            <table class="table mt-4 ">
                <thead>
                    <tr>
                        <th width="120">分類</th>
                        <th width="100">產品名稱</th>
                        <th width="100">原價</th>
                        <th width="100">售價</th>
                        <th width="100">是否啟用</th>
                        <th width="120">編輯</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td>{{ product.category }}</td>
                        <td>{{ product.title }}</td>
                        <td>{{ product.origin_price }}</td>
                        <td>{{ product.price }}</td>
                        <td>
                            <span>
                                {{ product.is_enabled ? '已啟用' : '未啟用' }}
                            </span>
                        </td>
                        <td>
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-primary btn-sm"
                                    @click="openModal('edit', product)">
                                    編輯
                                </button>
                                <button type="button" class="btn btn-outline-danger btn-sm"
                                    @click="openModal('delete', product)">
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
                    <a @click.prevent="getAdminProduct(pages.current_page - 1)" class="page-link" href="#"
                        aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" :class="{ active: page === pages.current_page }" v-for="page in pages.total_pages"
                    :key="page + 'page'">
                    <a @click.prevent="getAdminProduct(page)" class="page-link" href="#">{{ page }}</a>
                </li>
                <li class="page-item" :class="{ disabled: !pages.has_next }">
                    <a @click.prevent="getAdminProduct(pages.current_page + 1)" class="page-link" href="#"
                        aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- 分頁 -->


        <!-- Modal -->
        <admin-product-modal :isNew="isNew" :tempProduct="tempProduct" :updateData="updateData"
            :createImages="createImages"></admin-product-modal>
        <admin-delete-modal :tempProduct="tempProduct" :delData="delData"></admin-delete-modal>
        <!--  Modal  -->

    </div>
</template>


<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import modal from "bootstrap/js/dist/modal";
import AdminProductModal from '../../components/backend/modal/AdminProductModal.vue'
import AdminDeleteModal from '../../components/backend/modal/AdminDeleteModal.vue'
import adminProductStore from '../../stores/backend/adminProductStore'
import alertStore from '../../stores/alertStore.js';
import { mapState, mapActions } from 'pinia';
import "bootstrap"

let productModal = null
let delProductModal = null
export default {
    data() {
        return {
            tempProduct: {},
            isNew: true
        }
    },
    components: {
        AdminProductModal,
        AdminDeleteModal
    },
    methods: {
        ...mapActions(alertStore, ['getState']),
        openModal(isNew, product) {
            if (isNew == 'edit') {
                this.isNew = false
                this.tempProduct = { ...product }
                console.log('tempProduct-edit', this.tempProduct);
                productModal.show();
            } else if (isNew == 'new') {
                this.isNew = true
                this.tempProduct = {}
                console.log('tempProductNew', this.tempProduct);
                productModal.show();
            } else if (isNew == 'delete') {
                this.tempProduct = { ...product }
                delProductModal.show()

            }
        },
        updateData() {
            if (this.isNew) {
                console.log('新增產品');
                this.axios.post(`${VITE_URL}/api/${VITE_PATH}/admin/product`, { data: this.tempProduct })
                    .then((res) => {
                        console.log(res.data);
                        this.getState('新增成功', true)
                        this.getAdminProduct()
                        productModal.hide();
                    })
            } else {
                console.log('編輯產品');
                this.axios.put(`${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`, { data: this.tempProduct })
                    .then((res) => {
                        console.log(res);
                        this.getState('編輯成功', true)
                        this.getAdminProduct()
                        productModal.hide();

                    })
            }
        },
        delData() {
            this.axios.delete(`${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`)
                .then((res) => {
                    console.log(res);
                    this.getState('刪除成功', true)
                    this.getAdminProduct()
                    delProductModal.hide()
                })
        },
        createImages() {
            if (!this.tempProduct.imagesUrl) {
                this.tempProduct.imagesUrl = [];
                this.tempProduct.imagesUrl.push('');
            } else {
                this.tempProduct.imagesUrl.push('');

            }

        },

        ...mapActions(adminProductStore, ['getAdminProduct'])
    },
    computed: {
        ...mapState(adminProductStore, ['products', 'pages', 'isLoading'])
    },

    mounted() {
        this.getAdminProduct()
        productModal = new modal(document.getElementById("productModal"));
        delProductModal = new modal(document.getElementById("delProductModal"));
    }
}


</script>