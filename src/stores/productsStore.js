import axios from 'axios';
import { defineStore } from 'pinia';
const { VITE_URL, VITE_PATH } = import.meta.env;
import alertStore from './alertStore.js';
const state = alertStore()
export default defineStore('products', {
    state: () => ({
        products: [],
        product: {},
        categorys: [],
        categoryList: [],
        currentCategory: 'all',
        isLoading: false,
        categoryItem: [],
        limitProduct: []
    }),
    actions: {
        getProducts() {
            this.isLoading = true
            axios.get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
                .then((res) => {
                    this.products = res.data.products
                    this.categoryList = res.data.products
                    this.isLoading = false
                    let arr = []
                    this.products.map(item => {
                        arr.push(item.category)
                    })
                    arr = [...new Set(arr)];
                    this.categorys = arr
                })
                .catch((err) => {
                    const errMessage = err.data?.message || '資料取得失敗，稍後在試';
                    state.getState(errMessage, false)
                })
        },
        getProduct(id) {
            this.isLoading = true
            axios.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
                .then((res) => {
                    this.product = res.data.product
                    this.isLoading = false
                    this.getCategoryItem(this.product.category)
                })
                .catch((err) => {
                    const errMessage = err.data?.message || '資料取得失敗，稍後在試';
                    state.getState(errMessage, false)
                })
        },
        getCategory(category) {
            this.currentCategory = category
            if (category == 'all') {
                this.getProducts()
            } else {
                let arr = []
                arr = this.products.filter(item => item.category === category)
                this.categoryList = arr
            }
        },
        getCategoryItem(category) {
            if (category == 'all') {
                this.getProducts()
            } else {
                axios.get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
                    .then((res) => {
                        const arr = res.data.products.filter(item => item.category == category)
                        this.categoryItem = arr
                        let limit = []
                        for (let i = 0; i < 4; i++) {
                            limit.push(arr[i])
                        }
                        this.limitProduct = limit
                    })
                    .catch((err) => {
                        const errMessage = err.data?.message || '資料取得失敗，稍後在試';
                        state.getState(errMessage, false)
                    })
            }
        },
    }
})