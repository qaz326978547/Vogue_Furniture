import axios from 'axios'
import moment from 'moment'

import { defineStore } from 'pinia'
const { VITE_URL, VITE_PATH } = import.meta.env;
export default defineStore('order', {
    state: () => ({
        orders: [],
        isLoading: false,
        pages: {},
    }),
    actions: {
        getOrders(state, page = 1) {
            this.isLoading = true
            axios.get(`${VITE_URL}/api/${VITE_PATH}/admin/orders?page=${page}`)
                .then((res) => {
                    this.orders = res.data.orders
                    console.log('this.orders', this.orders);
                    console.log(' res.data.orders', res.data)
                    //全部
                    if (state == 'all') {
                        this.pages = res.data.pagination
                        this.orders.filter(item => {
                            const newDate = moment.unix(item.create_at).format('YYYY-MM-DD')
                            if (item.is_paid) {
                                const newPaid = moment.unix(item.paid_date).format('YYYY-MM-DD')
                                item.paid_date = newPaid
                            }
                            item.create_at = newDate
                        })

                        this.isLoading = false
                        //待付款
                    } else if (state == 'unPaid') {
                        console.log('unpaid')
                        const unPaidOrders = []
                        this.orders.filter(item => {
                            const newDate = moment.unix(item.create_at).format('YYYY-MM-DD')
                            if (!item.is_paid) {
                                item.create_at = newDate
                                unPaidOrders.push(item)
                            }
                            this.orders = unPaidOrders
                        })
                        this.isLoading = false


                        //待出貨
                    } else if (state == 'paid') {
                        const paidOders = []
                        this.orders.filter(item => {
                            const newDate = moment.unix(item.create_at).format('YYYY-MM-DD')
                            if (item.is_paid) {
                                const newPaid = moment.unix(item.paid_date).format('YYYY-MM-DD')
                                item.paid_date = newPaid
                                item.create_at = newDate
                                paidOders.push(item)
                            }
                            this.orders = paidOders
                        })
                        this.isLoading = false
                    }
                })
        },

    }
})