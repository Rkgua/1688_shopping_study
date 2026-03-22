import { computed, reactive } from 'vue'

const products = [
  {
    id: 1,
    category: 'digital',
    name: '磁吸快充数据线',
    desc: '2 米尼龙编织，支持 PD 快充',
    price: 7.9,
    moq: 200,
    supplier: '深圳优连科技',
    stock: 18600,
    tags: ['快充', '爆款', '跨境']
  },
  {
    id: 2,
    category: 'digital',
    name: '无线蓝牙耳机 TWS',
    desc: '低延迟，适合游戏和通勤',
    price: 32.8,
    moq: 80,
    supplier: '东莞潮电科技',
    stock: 5200,
    tags: ['音频', '低延迟']
  },
  {
    id: 3,
    category: 'digital',
    name: '桌面手机支架',
    desc: '铝合金可折叠，横竖屏通用',
    price: 6.2,
    moq: 300,
    supplier: '义乌小物制造',
    stock: 21000,
    tags: ['桌面好物']
  },
  {
    id: 4,
    category: 'home',
    name: '厨房密封储物罐',
    desc: '食品级材质，防潮防虫',
    price: 5.8,
    moq: 400,
    supplier: '佛山家居制造',
    stock: 32000,
    tags: ['家居', '厨房']
  },
  {
    id: 5,
    category: 'home',
    name: '懒人拖把套装',
    desc: '干湿两用，带刮水桶',
    price: 21.5,
    moq: 120,
    supplier: '宁波清洁用品',
    stock: 4300,
    tags: ['清洁', '高复购']
  },
  {
    id: 6,
    category: 'home',
    name: '加厚垃圾袋 100 只',
    desc: '承重不易破，家用商用均可',
    price: 4.9,
    moq: 600,
    supplier: '中山塑料工厂',
    stock: 50000,
    tags: ['刚需', '引流款']
  },
  {
    id: 7,
    category: 'fashion',
    name: '纯棉基础短袖',
    desc: '多色可选，支持印花定制',
    price: 16.9,
    moq: 100,
    supplier: '广州服饰工厂',
    stock: 9200,
    tags: ['服饰', '定制']
  },
  {
    id: 8,
    category: 'fashion',
    name: '韩版双肩背包',
    desc: '大容量，防泼水面料',
    price: 37.6,
    moq: 60,
    supplier: '泉州箱包供应链',
    stock: 3600,
    tags: ['箱包']
  },
  {
    id: 9,
    category: 'fashion',
    name: '复古棒球帽',
    desc: '可调节帽围，四季通用',
    price: 8.5,
    moq: 240,
    supplier: '温州帽业',
    stock: 14500,
    tags: ['配饰']
  },
  {
    id: 10,
    category: 'digital',
    name: '便携充电宝 20000mAh',
    desc: '双口输出，带数显',
    price: 48,
    moq: 50,
    supplier: '深圳储能电子',
    stock: 2700,
    tags: ['电源', '高客单']
  },
  {
    id: 11,
    category: 'home',
    name: '香氛蜡烛礼盒',
    desc: '天然植物蜡，礼品渠道热销',
    price: 19.8,
    moq: 90,
    supplier: '杭州香氛工厂',
    stock: 7100,
    tags: ['礼品', '家居']
  },
  {
    id: 12,
    category: 'fashion',
    name: '帆布托特包',
    desc: '加厚帆布，支持图案定制',
    price: 11.6,
    moq: 150,
    supplier: '泉州箱包供应链',
    stock: 12000,
    tags: ['通勤', '定制']
  }
]

const state = reactive({
  user: {
    isLoggedIn: false,
    name: '晨霖贸易有限公司',
    contact: '陈经理',
    phone: '138****2026'
  },
  cart: [
    { productId: 1, qty: 300 },
    { productId: 5, qty: 100 },
    { productId: 7, qty: 200 }
  ]
})

const cartDetailedItems = computed(() =>
  state.cart
    .map((line) => {
      const product = products.find((p) => p.id === line.productId)
      if (!product) return null
      return {
        id: product.id,
        productId: product.id,
        name: product.name,
        sku: '默认规格',
        unitPrice: product.price,
        qty: line.qty,
        subtotal: Number((line.qty * product.price).toFixed(2))
      }
    })
    .filter(Boolean)
)

const cartTotalCount = computed(() => state.cart.reduce((sum, item) => sum + item.qty, 0))

const addToCart = (productId, qty = 1) => {
  const line = state.cart.find((item) => item.productId === productId)
  if (line) {
    line.qty += qty
    return
  }
  state.cart.push({ productId, qty })
}

const updateCartQty = (productId, qty) => {
  const line = state.cart.find((item) => item.productId === productId)
  if (!line) return
  line.qty = Math.max(1, Number(qty || 1))
}

const removeFromCart = (productId) => {
  const idx = state.cart.findIndex((item) => item.productId === productId)
  if (idx >= 0) state.cart.splice(idx, 1)
}

const login = () => {
  state.user.isLoggedIn = true
}

const logout = () => {
  state.user.isLoggedIn = false
}

const getProductById = (id) => products.find((item) => item.id === Number(id))

export const shopStore = {
  state,
  products,
  cartDetailedItems,
  cartTotalCount,
  addToCart,
  updateCartQty,
  removeFromCart,
  login,
  logout,
  getProductById
}
