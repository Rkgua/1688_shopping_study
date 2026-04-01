<template>
  <div class="cart-page">
    <a-alert
      message="购物车为静态演示数据"
      description="你可以在这里预览采购单结构、价格汇总和推荐商品位。"
      type="info"
      show-icon
      class="alert"
    />

    <a-card title="采购清单">
      <a-table :columns="columns" :data-source="cartItems" :pagination="false" row-key="id">
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'unitPrice'">¥{{ record.unitPrice }}</template>
          <template v-if="column.dataIndex === 'qty'">
            <a-input-number :min="1" :value="record.qty" @change="(value) => onQtyChange(record.productId, value)" />
          </template>
          <template v-if="column.dataIndex === 'subtotal'">¥{{ record.subtotal.toFixed(2) }}</template>
          <template v-if="column.dataIndex === 'actions'">
            <a-space>
              <a-button size="small">移入收藏</a-button>
              <a-button size="small" danger @click="onRemove(record.productId)">删除</a-button>
            </a-space>
          </template>
        </template>
      </a-table>
    </a-card>

    <a-row :gutter="[16, 16]" class="summary-row">
      <a-col :xs="24" :lg="16">
        <a-card title="猜你喜欢">
          <a-row :gutter="[12, 12]">
            <a-col v-for="item in recommendProducts" :key="item.name" :span="8">
              <a-card size="small" hoverable class="recommend-card" @click="toDetail(item.productId)">
                <div class="recommend-title">{{ item.name }}</div>
                <div class="recommend-price">¥{{ item.price }}</div>
              </a-card>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :xs="24" :lg="8">
        <a-card title="结算信息">
          <a-descriptions :column="1" size="small">
            <a-descriptions-item label="商品总额">¥{{ totalPrice.toFixed(2) }}</a-descriptions-item>
            <a-descriptions-item label="优惠金额">-¥{{ discount.toFixed(2) }}</a-descriptions-item>
            <a-descriptions-item label="运费">¥{{ shipping.toFixed(2) }}</a-descriptions-item>
            <a-descriptions-item label="应付金额">
              <span class="pay-price">¥{{ finalPrice.toFixed(2) }}</span>
            </a-descriptions-item>
          </a-descriptions>
          <a-button type="primary" block size="large">提交订单</a-button>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { shopStore } from '@/store/shop'

const router = useRouter()

const cartItems = shopStore.cartDetailedItems

const columns = [
  { title: '商品名称', dataIndex: 'name' },
  { title: '规格', dataIndex: 'sku' },
  { title: '单价', dataIndex: 'unitPrice' },
  { title: '数量', dataIndex: 'qty' },
  { title: '小计', dataIndex: 'subtotal' },
  { title: '操作', dataIndex: 'actions' }
]

const recommendProducts = [
  { name: '便携充电宝 20000mAh', price: 48, productId: 10 },
  { name: '厨房密封储物罐', price: 5.8, productId: 4 },
  { name: '帆布托特包', price: 11.6, productId: 12 }
]

const totalPrice = computed(() => cartItems.value.reduce((sum, item) => sum + item.unitPrice * item.qty, 0))
const discount = computed(() => totalPrice.value * 0.06)
const shipping = computed(() => 28)
const finalPrice = computed(() => totalPrice.value - discount.value + shipping.value)

const onQtyChange = (productId, value) => {
  shopStore.updateCartQty(productId, Number(value || 1))
}

const onRemove = (productId) => {
  shopStore.removeFromCart(productId)
  message.success('已从购物车移除')
}

const toDetail = (productId) => {
  router.push(`/products/${productId}`)
}
</script>

<style scoped>
.alert {
  margin-bottom: 16px;
}

.summary-row {
  margin-top: 16px;
}

.recommend-title {
  color: #595959;
}

.recommend-card {
  cursor: pointer;
}

.recommend-price {
  margin-top: 8px;
  color: #f5222d;
  font-size: 18px;
  font-weight: 700;
}

.pay-price {
  color: #f5222d;
  font-size: 20px;
  font-weight: 700;
}
</style>
