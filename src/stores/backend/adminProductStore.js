import axios from 'axios'
import swal from 'sweetalert';
import { defineStore } from 'pinia'
// import swal from 'sweetalert';
const { VITE_URL, VITE_PATH } = import.meta.env;


export default defineStore('adminProduct', {
    state: () => ({
        products: [],
        pages: {},
        tempProduct: {
            imagesUrl: []
        },
        isLoading: false
    }),
    actions: {
        getAdminProduct(page = 1) {
            this.isLoading = true
            axios.get(`${VITE_URL}/api/${VITE_PATH}/admin/products?page=${page}`)
                .then((res) => {
                    const { products, pagination } = res.data;
                    this.products = products
                    this.pages = pagination
                    console.log('products', products);
                    console.log('page', pagination);
                    this.isLoading = false
                })
        },
    }
})