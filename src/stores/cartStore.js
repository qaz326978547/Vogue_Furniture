import axios from 'axios'
import swal from 'sweetalert';
import { defineStore } from 'pinia'
import alertStore from './alertStore.js';
const { VITE_URL, VITE_PATH } = import.meta.env;
const state = alertStore()
export default defineStore('cart', {
  state: () => ({
    cart: [],
    data: {
      code: ''
    }
  }),
  actions: {
    getCart() {
      axios.get(`${VITE_URL}/api/${VITE_PATH}/cart`)
        .then((res) => {
          const { data } = res.data
          console.log(data);
          this.cart = data
        })
        .catch((err) => {
          state.getState('資料無法取得,請稍後再試', false)
        })
    },
    addCart(id, qty = 1) {
      const cart = {
        product_id: id,
        qty,
      };
      axios.post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data: cart })
        .then((res) => {
          console.log(res);
          this.getCart()
          state.getState('已新增購物車', true)
        })
        .catch((err) => {
          state.getState('資料無法取得,請稍後再試', false)
        })
    },
    deleteCart(id) {
      axios.delete(`${VITE_URL}/api/${VITE_PATH}/cart/${id}`)
        .then((res) => {
          console.log(res);
          this.getCart()
          state.getState('已刪除商品', true)
        })
        .catch((err) => {
          state.getState('資料無法取得,請稍後再試', false)
        })
    },
    updatedCart(id, qty = 1) {
      const cart = {
        product_id: id,
        qty: qty,
      };
      axios.put(`${VITE_URL}/api/${VITE_PATH}/cart/${id}`, { data: cart })
        .then((res) => {
          console.log(res);
          this.getCart()
          state.getState('已更新購物車', true)
        })
        .catch((err) => {
          state.getState('資料無法取得,請稍後再試', false)
        })
    }
  }
})
