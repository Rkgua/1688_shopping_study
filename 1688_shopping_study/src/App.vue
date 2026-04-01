
<template>
  <a-layout class="app-layout">
    <a-layout-header class="header">
      <div class="header-inner">
        <div class="brand" @click="toPage('/products')">1688 严选</div>
        <a-input-search
          v-model:value="keyword"
          class="search"
          placeholder="搜索商品、工厂、品牌"
          enter-button="搜索"
          @search="onSearch"
        />
        <a-menu
          mode="horizontal"
          :selected-keys="selectedKeys"
          class="header-menu"
          @click="onMenuClick"
        >
          <a-menu-item key="/products">产品页</a-menu-item>
          <a-menu-item key="/user">用户页</a-menu-item>
          <a-menu-item key="/cart">
            <a-badge :count="cartCount" :overflow-count="9999" size="small">
              购物车
            </a-badge>
          </a-menu-item>
        </a-menu>
        <a-button :type="isLoggedIn ? 'default' : 'primary'" @click="toggleLogin">
          {{ isLoggedIn ? '退出登录' : '登录' }}
        </a-button>
      </div>
    </a-layout-header>

    <a-layout-content class="page-content">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { shopStore } from '@/store/shop'

const router = useRouter()
const route = useRoute()
const keyword = ref('')
const selectedKeys = computed(() => [route.path.startsWith('/products/') ? '/products' : route.path])
const cartCount = computed(() => shopStore.cartTotalCount.value)
const isLoggedIn = computed(() => shopStore.state.user.isLoggedIn)

const toPage = (path) => {
  router.push(path)
}

const onMenuClick = ({ key }) => {
  toPage(key)
}

const onSearch = (value) => {
  if (!value) return
  const results = shopStore.products.filter(p => 
    p.name.toLowerCase().includes(value.toLowerCase()) || 
    p.desc.toLowerCase().includes(value.toLowerCase())
  )
  if (results.length > 0) {
    router.push(`/products/${results[0].id}`)
  } else {
    message.warning('未找到相关产品')
  }
}

const toggleLogin = () => {
  if (isLoggedIn.value) {
    shopStore.logout()
    message.success('已退出登录')
    return
  }
  shopStore.login()
  message.success('登录成功')
}
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
}

.header {
  position: sticky;
  top: 0;
  z-index: 10;
  height: auto;
  line-height: normal;
  padding: 10px 24px;
  background: #ffffff;
  border-bottom: 1px solid #f0f0f0;
}

.header-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 140px 1fr 360px auto;
  gap: 16px;
  align-items: center;
}

.brand {
  font-size: 24px;
  font-weight: 700;
  color: #fa541c;
  cursor: pointer;
}

.search {
  max-width: 760px;
}

.header-menu {
  border-bottom: none;
  min-width: 320px;
  justify-content: flex-end;
}

.page-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 24px 28px;
}

@media (max-width: 992px) {
  .header-inner {
    grid-template-columns: 1fr;
  }

  .header-menu {
    justify-content: flex-start;
  }
}
</style>
