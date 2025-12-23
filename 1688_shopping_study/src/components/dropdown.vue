
<template>
     <div class="dropdown-container" @mouseenter="openDropdown" @mouseleave="closeDropdown">
         <div class="dropdown-toggle"  >
            <span>挑好货</span>
           <span class="arrow-icon" :class="{'arrow-rotated':isDropdownOpen}"></span>
        </div>
         <div v-show="isDropdownOpen" class="dropdown-menu">
            <div v-for="item in listProducts" :key="item.id" class="dropdown-item" :class="{'dropdown-item-active' :hoveredItemId===item.id}" @mouseenter="hoveredItemId=item.id" @mouseleave="hoveredItemId=null" @click.prevent="selectItem(item)">{{ item.name }}</div>
        </div>
     </div>

 
</template>

<script setup>
   import { ref } from 'vue';

//
const listProducts = ref([
    {id:'1',name:'挑好货',href:'#'},
    {id:'2',name:'找工厂',href:'#'},
    {id:'3',name:'找供应商',href:'#'}
])
// 创建一个ref变量，用于控制选中元素
   const isSelect = ref(false);
   const hoveredItemId = ref(null);
const selectItem = (item) =>{
  console.log("选择了商品:",item);
  isDropdownOpen.value = false

}

//    创建一个ref变量，用于控制下拉菜单的打开和关闭
   const isDropdownOpen = ref(false);
   const openDropdown = () =>{
    isDropdownOpen.value= true ;
   }
   const closeDropdown = () =>{
    isDropdownOpen.value= false;
    hoveredItemId.value=null;
   }
</script>

<style scoped>
  .dropdown-container{
    width: 70px;
    height: 40px;
    border: 1px solid #ccc;
    padding: 0 20px 0 0;
    
  }
  .dropdown-toggle{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
     font-size: 17px;
     white-space: nowrap;

     
  }
  .arrow-icon{
    height: 15px;
    width: 20px;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("../assets/arrow-icon.svg");
    margin: 4px 0 0 4px;
    background-position: center;
    transform-origin: center center;
    transition: transform 0.3s ease;
    /* 调整旋转图标 */
  }
  .arrow-rotated{
    transform: rotate(180deg);
  }
  .dropdown-menu{
    justify-content: center;
    text-align: center;
    align-items: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    white-space: nowrap;
  }
  .dropdown-item{
     font-size: 15px;
     width: 100%;
     height: 50px;
     display: flex;
     justify-content: center;
      align-items: center;
     text-align: center;
  }
  .dropdown-item-active{
    background-color: rgb(215, 210, 210);
    border-radius: 5px;
  }
</style>
