<template>
    <div class="modal fade " id="productModal" ref="productModal">
        <div class="modal-dialog ">
            <div class="modal-content ">
                <div class="modal-header bg-primary ">
                    <h5 v-if="isNew" class="modal-title text-white">新增產品</h5>
                    <h5 v-else class="modal-title text-white">編輯產品</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-4 col-sm-5">
                            <div class="mb-3">
                                <label for="imageUrl" class="form-label">主要圖片</label>
                                <input v-model="tempProduct.imageUrl" type="text" class="form-control mb-2"
                                    placeholder="請輸入圖片連結">
                                <img class="img-fluid" :src="tempProduct.imageUrl">
                            </div>
                            <h3 class="mb-3">多圖新增</h3>
                            <div>
                                <div v-if="Array.isArray(tempProduct.imagesUrl)">
                                    <div class="mb-3" v-for="(image, key) in tempProduct.imagesUrl" :key="key">
                                        <div>
                                            <label for="imageUrl" class="form-label">新增圖片</label>
                                            <input v-model="tempProduct.imagesUrl[key]" type="text"
                                                class="form-control mb-2" placeholder="請輸入圖片連結">
                                        </div>
                                        <div class="imagesUrl" v-if="tempProduct.imagesUrl[key]">
                                            <button @click="tempProduct.imagesUrl.splice(key, 1)"
                                                class="btn btn-danger btn-sm mb-3 delete-image">X</button>
                                            <img class="img-fluid " :src="tempProduct.imagesUrl[key]">
                                        </div>
                                    </div>
                                </div>
                                <button @click="createImages" class="btn btn-outline-primary btn-sm d-block w-100">
                                    新增圖片
                                </button>
                            </div>
                        </div>
                        <div class="col-md-8 col-sm-7">
                            <div class="mb-3">
                                <label for="title" class="form-label">標題</label>
                                <input v-model="tempProduct.title" type="text" class="form-control mb-2"
                                    placeholder="請輸入標題">
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="category" class="form-label">分類</label>
                                    <input v-model="tempProduct.category" type="text" class="form-control mb-2"
                                        placeholder="請輸入分類">
                                </div>
                                <div class="col-md-6">
                                    <label for="unit" class="form-label">單位</label>
                                    <input v-model="tempProduct.unit" type="text" class="form-control mb-2"
                                        placeholder="請輸入單位">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="origin_price" class="form-label">原價</label>
                                    <input v-model="tempProduct.origin_price" min="0" type="number"
                                        class="form-control mb-2" placeholder="請輸入原價">
                                </div>
                                <div class="col-md-6">
                                    <label for="price" class="form-label">售價</label>
                                    <input v-model="tempProduct.price" min="0" type="number" class="form-control mb-2"
                                        placeholder="請輸入售價">
                                </div>
                            </div>
                            <hr>
                            <div class="mb-3">
                                <label for="description" class="form-label">產品描述</label>
                                <textarea v-model="tempProduct.description" id="description" type="text" rows="5"
                                    class="form-control" placeholder="請輸入產品描述">
                                                                                                                                                                                                                                                                                                                </textarea>
                            </div>
                            <div class="mb-3">
                                <label for="content" class="form-label">說明內容</label>
                                <textarea v-model="tempProduct.content" id="description" type="text" rows="5"
                                    class="form-control" placeholder="請輸入說明內容">
                                                                                                                                                                                                                                                                                                                </textarea>
                            </div>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input v-model="tempProduct.is_enabled" :true-value="1" :false-value="0" id="is_enabled"
                                        class="form-check-input" type="checkbox">
                                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" @click="updateData">確定</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['tempProduct', 'isNew', 'updateData', 'createImages']

}


</script>