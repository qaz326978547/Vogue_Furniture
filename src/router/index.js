import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'latout',
      component: () => import('../views/LatoutView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/frontend/HomeView.vue'),
        },
        {
          path: '/products',
          name: 'products',
          component: () => import('../views/frontend/ProductsView.vue'),
        },
        {
          path: '/product/:id',
          name: 'product',
          component: () => import('../views/frontend/ProductView.vue'),
        },
        {
          path: '/projects',
          name: '情境空間',
          component: () => import('../views/frontend/ProjectsView.vue'),
        },
        {
          path: '/project/:id',
          name: '情境空間內頁',
          component: () => import('../views/frontend/ProjectView.vue'),
        },
        {
          path: '/about',
          name: '關於我們',
          component: () => import('../views/frontend/AboutView.vue'),
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('../views/frontend/CartView.vue'),
        },
        {
          path: '/checkout',
          name: '結帳訂單資訊',
          component: () => import('../views/frontend/CheckoutView.vue')
        },
        {
          path: '/order/:id',
          name: '訂單客戶資訊',
          component: () => import('../views/frontend/OrderView.vue')
        },
      ]
    },
    {
      path: '/login',
      name: '登入',
      component: () => import('../views/backend/LoginView.vue'),
    },
    {
      path: '/admin',
      name: '後台nav',
      component: () => import('../views/backend/DashboardView.vue'),
      children: [
        {
          path: 'products',
          name: '產品管理',
          component: () => import('../views/backend/AdminProduct.vue'),
        },
        {
          path: 'discount',
          name: '優惠卷管理',
          component: () => import('../views/backend/DiscountView.vue'),
        },
        {
          path: 'order',
          name: '訂單管理',
          component: () => import('../views/backend/AdminOrder.vue'),
        }
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue'),

    }

  ]
})
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})
export default router
