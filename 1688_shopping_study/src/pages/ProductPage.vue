<template>
  <div class="product-page">
    <a-row :gutter="[16, 16]" class="hero-row">
      <a-col :xs="24" :lg="16">
        <a-carousel autoplay class="hero-carousel">
          <div v-for="item in banners" :key="item.id" class="carousel-item">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <a-button type="primary" @click="toDetail(item.productId)">{{ item.cta }}</a-button>
          </div>
        </a-carousel>
      </a-col>
      <a-col :xs="24" :lg="8">
        <a-card title="今日爆款" :bordered="false">
          <a-list :data-source="hotProducts" size="small">
            <template #renderItem="{ item }">
              <a-list-item class="hot-item" @click="toDetail(item.productId)">
                <a-list-item-meta :title="item.name" :description="`近30天销量 ${item.sales}`" />
                <template #actions>
                  <span class="hot-price">¥{{ item.price }}</span>
                </template>
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </a-col>
    </a-row>

    <a-tabs v-model:activeKey="activeCategory" class="category-tabs">
      <a-tab-pane v-for="group in categoryGroups" :key="group.key" :tab="group.label" />
    </a-tabs>

    <a-row :gutter="[16, 16]">
      <a-col v-for="product in currentProducts" :key="product.id" :xs="24" :sm="12" :md="8" :xl="6">
        <a-card hoverable class="product-card">
          <template #cover>
            <div class="fake-img">{{ product.name.slice(0, 6) }}</div>
          </template>
          <a-card-meta :title="product.name" :description="product.desc" />
          <div class="product-footer">
            <div>
              <div class="price">¥{{ product.price }}</div>
              <div class="sold">起订量 {{ product.moq }} 件</div>
            </div>
            <a-space>
              <a-button size="small" @click="toDetail(product.id)">详情</a-button>
              <a-button type="primary" size="small" @click="addProduct(product.id)">加入购物车</a-button>
            </a-space>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { shopStore } from '@/store/shop'

const banners = [
  { id: 1, title: '源头工厂直采', desc: '精选 1,000+ 产业带工厂，支持一件代发。', cta: '立即选货', productId: 1 },
  { id: 2, title: '跨境专供专区', desc: '聚焦高复购品类，稳定库存，支持 OEM。', cta: '查看专区', productId: 10 },
  { id: 3, title: '春季上新季', desc: '服饰/家清/数码配件上新，爆款提前锁价。', cta: '抢先预订', productId: 7 }
]

const hotProducts = [
  { name: '磁吸快充数据线', sales: '12.4万', price: 7.9, productId: 1 },
  { name: '无线蓝牙耳机 TWS', sales: '8.1万', price: 32.8, productId: 2 },
  { name: '懒人拖把套装', sales: '6.7万', price: 21.5, productId: 5 },
  { name: '纯棉基础短袖', sales: '5.3万', price: 16.9, productId: 7 }
]

const categoryGroups = [
  { key: 'all', label: '全部商品' },
  { key: 'digital', label: '数码配件' },
  { key: 'home', label: '家居百货' },
  { key: 'fashion', label: '服饰箱包' }
]

const router = useRouter()
const allProducts = shopStore.products

const activeCategory = ref('all')
const currentProducts = computed(() => {
  if (activeCategory.value === 'all') {
    return allProducts
  }
  return allProducts.filter((item) => item.category === activeCategory.value)
})

const addProduct = (productId) => {
  shopStore.addToCart(productId, 1)
  message.success('已加入购物车')
}

const toDetail = (productId) => {
  router.push(`/products/${productId}`)
}
</script>

<style scoped>
.hero-row {
  margin-bottom: 12px;
}

.hero-carousel {
  border-radius: 12px;
  overflow: hidden;
}

.carousel-item {
  height: 240px;
  color: #fff;
  padding: 40px 36px;
  background: linear-gradient(135deg, #ff7a45, #ff4d4f);
}

.carousel-item h3 {
  font-size: 28px;
  margin-bottom: 10px;
}

.carousel-item p {
  margin-bottom: 20px;
}

.category-tabs {
  margin: 14px 0 8px;
}

.product-card {
  border-radius: 12px;
}

.fake-img {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fa541c;
  background: linear-gradient(135deg, #fff7e6, #fff1f0);
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
}

.price {
  font-size: 20px;
  font-weight: 700;
  color: #f5222d;
}

.sold {
  color: #8c8c8c;
  font-size: 12px;
}

.hot-price {
  color: #f5222d;
  font-weight: 700;
}

.hot-item {
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.hot-item:hover {
  background-color: #fff7e6;
}
</style>
