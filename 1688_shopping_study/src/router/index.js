import { createRouter, createWebHistory } from 'vue-router'
import ProductPage from '@/pages/ProductPage.vue'
import ProductDetailPage from '@/pages/ProductDetailPage.vue'
import UserPage from '@/pages/UserPage.vue'
import CartPage from '@/pages/CartPage.vue'

const routes = [
  { path: '/', redirect: '/products' },
  { path: '/products', name: 'products', component: ProductPage },
  { path: '/products/:id', name: 'product-detail', component: ProductDetailPage },
  { path: '/user', name: 'user', component: UserPage },
  { path: '/cart', name: 'cart', component: CartPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
