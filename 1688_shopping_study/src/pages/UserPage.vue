<template>
  <div class="user-page">
    <a-card v-if="!user.isLoggedIn" class="section-card">
      <a-empty description="当前未登录，登录后可查看采购档案与订单数据。">
        <a-button type="primary" @click="login">立即登录</a-button>
      </a-empty>
    </a-card>

    <template v-else>
    <a-row :gutter="[16, 16]">
      <a-col :xs="24" :lg="8">
        <a-card>
          <div class="profile-head">
            <a-avatar :size="72">CL</a-avatar>
            <div>
              <h3 class="name">晨霖贸易有限公司</h3>
              <p class="sub">采购等级：L4 | 认证买家</p>
            </div>
          </div>
          <a-divider />
          <a-descriptions :column="1" size="small">
            <a-descriptions-item label="联系人">陈经理</a-descriptions-item>
            <a-descriptions-item label="手机号">138****2026</a-descriptions-item>
            <a-descriptions-item label="主营类目">家居百货 / 数码配件</a-descriptions-item>
            <a-descriptions-item label="收货地址">广东省 深圳市 龙岗区</a-descriptions-item>
          </a-descriptions>
        </a-card>
      </a-col>
      <a-col :xs="24" :lg="16">
        <a-card title="采购数据看板">
          <a-row :gutter="[16, 16]">
            <a-col :xs="12" :md="6" v-for="metric in metrics" :key="metric.label">
              <a-statistic :title="metric.label" :value="metric.value" />
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>

    <a-card title="最近订单" class="section-card">
      <a-table :columns="orderColumns" :data-source="orders" :pagination="{ pageSize: 5 }" row-key="orderNo">
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'status'">
            <a-tag :color="statusColor[record.status]">{{ record.status }}</a-tag>
          </template>
        </template>
      </a-table>
    </a-card>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { shopStore } from '@/store/shop'

const user = computed(() => shopStore.state.user)

const metrics = [
  { label: '本月采购额(元)', value: 126580 },
  { label: '待付款订单', value: 4 },
  { label: '待收货订单', value: 11 },
  { label: '供应商数量', value: 36 }
]

const orderColumns = [
  { title: '订单号', dataIndex: 'orderNo' },
  { title: '下单时间', dataIndex: 'date' },
  { title: '订单金额', dataIndex: 'amount' },
  { title: '供应商', dataIndex: 'supplier' },
  { title: '状态', dataIndex: 'status' }
]

const orders = [
  { orderNo: 'PO20260321001', date: '2026-03-21', amount: '¥12,660', supplier: '义乌宏远百货厂', status: '待付款' },
  { orderNo: 'PO20260318007', date: '2026-03-18', amount: '¥5,230', supplier: '东莞潮电科技', status: '待发货' },
  { orderNo: 'PO20260316003', date: '2026-03-16', amount: '¥8,900', supplier: '泉州箱包供应链', status: '运输中' },
  { orderNo: 'PO20260311011', date: '2026-03-11', amount: '¥3,420', supplier: '佛山家居制造', status: '已完成' },
  { orderNo: 'PO20260309005', date: '2026-03-09', amount: '¥7,880', supplier: '中山厨具工厂', status: '已完成' },
  { orderNo: 'PO20260304002', date: '2026-03-04', amount: '¥10,220', supplier: '宁波清洁用品', status: '售后中' }
]

const statusColor = {
  待付款: 'orange',
  待发货: 'gold',
  运输中: 'blue',
  已完成: 'green',
  售后中: 'red'
}

const login = () => {
  shopStore.login()
}
</script>

<style scoped>
.profile-head {
  display: flex;
  align-items: center;
  gap: 14px;
}

.name {
  margin: 0;
  font-size: 20px;
}

.sub {
  margin: 4px 0 0;
  color: #8c8c8c;
}

.section-card {
  margin-top: 16px;
}
</style>
