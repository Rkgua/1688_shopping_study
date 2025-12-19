
<template>
    <!-- 顶部菜单栏 -->
    <div class="Top-menu-content">
        <div class="sercher-content">
            <dropdown></dropdown>
            <serch-output></serch-output>
            <div class="search-img"></div>
        </div>
        <div class="my-content">
            <coin-top-menu></coin-top-menu>
            <div class="my-load">
                <button class="my-load-button"></button>
            </div>
        </div>
    </div>
    <!-- 侧边菜单栏 -->



</template>

<script setup>
    import Dropdown from './components/dropdown.vue'
</script>

<style scoped>

/* 顶部菜单栏 */
   .Top-menu-content{
    width: 100%;
    height: 64px;
    background-color: #fff;
    display: flex;
    padding:0 80px;
   }
  /* 搜索内容 */
   .sercher-content{
      padding:0 80px;
      align-content: center;
   }

   /* 我的内容 */
   .my-content{
      align-content: center;
   }
   .my-load{
    margin: 0 0 0 16px;
   }
   .my-load-button{

   }
</style>
