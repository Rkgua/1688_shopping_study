<template>
  <div v-if="product" class="detail-page">
    <a-breadcrumb class="breadcrumb">
      <a-breadcrumb-item>
        <a @click.prevent="router.push('/products')">产品页</a>
      </a-breadcrumb-item>
      <a-breadcrumb-item>{{ product.name }}</a-breadcrumb-item>
    </a-breadcrumb>

    <a-card>
      <a-row :gutter="[24, 24]">
        <a-col :xs="24" :md="10">
          <div class="preview">{{ product.name.slice(0, 6) }}</div>
        </a-col>
        <a-col :xs="24" :md="14">
          <h2 class="title">{{ product.name }}</h2>
          <p class="desc">{{ product.desc }}</p>
          <a-space wrap>
            <a-tag color="blue" v-for="tag in product.tags" :key="tag">{{ tag }}</a-tag>
          </a-space>
          <a-descriptions :column="1" class="info-box">
            <a-descriptions-item label="价格">¥{{ product.price }}</a-descriptions-item>
            <a-descriptions-item label="最小起订量">{{ product.moq }} 件</a-descriptions-item>
            <a-descriptions-item label="库存">{{ product.stock }} 件</a-descriptions-item>
            <a-descriptions-item label="供应商">{{ product.supplier }}</a-descriptions-item>
          </a-descriptions>
          <a-space>
            <a-input-number v-model:value="buyQty" :min="1" />
            <a-button type="primary" @click="handleAddToCart">加入购物车</a-button>
            <a-button @click="router.push('/cart')">去购物车结算</a-button>
          </a-space>
        </a-col>
      </a-row>
    </a-card>
  </div>
  <a-empty v-else description="商品不存在或已下架" />
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { shopStore } from '@/store/shop'

const route = useRoute()
const router = useRouter()
const buyQty = ref(1)
const product = computed(() => shopStore.getProductById(route.params.id))

const handleAddToCart = () => {
  if (!product.value) return
  shopStore.addToCart(product.value.id, Number(buyQty.value || 1))
  message.success('已加入购物车')
}
</script>

<style scoped>
.breadcrumb {
  margin-bottom: 12px;
}

.preview {
  height: 300px;
  border-radius: 12px;
  background: linear-gradient(135deg, #fff7e6, #fff1f0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fa541c;
  font-size: 36px;
  font-weight: 700;
}

.title {
  margin-bottom: 8px;
}

.desc {
  color: #8c8c8c;
}

.info-box {
  margin: 14px 0;
}
</style>
