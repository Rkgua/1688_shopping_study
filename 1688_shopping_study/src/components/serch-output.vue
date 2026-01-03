
<template>
   
   <div class="serch-output-contain">
    <div class="serch-output">
        <input type="text" placeholder="手机" class="serch-output-sercher" :class="{'serch-output-active':serchOutput}" @click="isOutputsercher" > 
        <Transition name="slide-down">
        <div v-if="serchOutput" class="serch-output-text">
          <div>热门搜索</div>
          <div class="serch-output-list">
            <div v-for="items in Outproduct" :key="items.id" class="serch-output-listitem" :class="{'serch-output-list-active':isOutputactive===items.id}" @mouseenter="isOutputactive=items.id" @mouseleave="isOutputactive=null">{{ items.name }}</div>
          </div>
        </div>
      </Transition>
        <div class="serch-output-button">搜索</div>
    </div>
   </div>
 
</template>

<script setup>
    import { ref,onMounted,onUnmounted } from 'vue';
    const serchOutput = ref(false);
   const isOutputsercher = () =>{
    serchOutput.value = true;
   }
//   点击外部关闭逻辑
    const handleClickOutside = (event) => {
        // 判断点击的函数是否在搜索输出组件之外
      const output = document.querySelector('.serch-output');
      if (!output.contains(event.target)) {
        serchOutput.value = false;
      }
    }; 
    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });
//展示卡片zhong
   const Outproduct = [
    {id:1,name:'手机'},
    {id:2,name:'电脑'},
    {id:3,name:'小礼品'},
   ]
   const isOutputactive = ref(null); 

</script>

<style scoped>
   .serch-output-contain{
    width: 654px;
    height: 40px;
   }
   .serch-output{
    position: relative;
    width: 100%;
    height: 100%;
    border: 3px solid #FF6B4C;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
   }
   .serch-output-text{
    position: absolute;
    top:62px;
    width: 654px;
    height: 100px;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
   }
   /* 动画：从上往下滑入 */
.slide-down-enter-active {
  transition: all 0.3s ease;
}
.slide-down-leave-active {
  transition: all 0.2s ease;
}

/* 初始状态（进入前） */
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-5px); 
}

/* 结束状态（进入后 / 离开前） */
.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}
   
   .serch-output-sercher{
      outline: none;  /* 去掉 input 自带边框 */
      border: none;   /* 也去掉 input 自带边框 */
      flex: 1; /* 宽度占满父元素 */
      padding: 5px 0 5px 20px;
      border-radius: 5px;
      font-size: 17px;
   }
   /* 小卡片 */
   .serch-output-list{
    display: flex;
    align-items: center;
    padding: 20px 0;
    gap: 10px;
   }
   .serch-output-listitem{
    font-size: 15px;
    color: rgb(36, 35, 35);
    border: 1px solid #ccc;
   }
   .serch-output-list-active{
      border: 1px solid #FF6B4C;
      color: #FF6B4C;
   }
   .serch-output-active{
      color: #ddd0d0;
   }
   .serch-output-button{
      width: 75px;
      height: 36px;
      color: #fff;
      background-color: #FF6B4C;
      display: flex;
      justify-content: center;
      align-items: center;
   }
</style>
