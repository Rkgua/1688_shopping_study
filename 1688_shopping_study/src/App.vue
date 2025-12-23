
<template>
    <!-- 顶部菜单栏 -->
    <div class="Top-menu-content">
        <div class="sercher-content">
           <dropdown></dropdown>
              <serchoutput></serchoutput>
            <serchImg></serchImg>
        </div>
        <div class="my-content">
            <coinTopMenu></coinTopMenu>
            <div class="my-load">
                <button class="my-load-button"></button>
            </div>
        </div>
    </div>
    <!-- 侧边菜单栏 -->



</template>

<script setup>
    import dropdown from './components/dropdown.vue'
    import serchoutput from './components/serch-output.vue'
    import serchImg from './components/serch-img.vue'
    import coinTopMenu from './components/coin-top/coin-top-menu.vue'
</script>

<style scoped>

/* 顶部菜单栏 */
   .Top-menu-content{
    width: 100%;
    height: 64px;
    background-color: #fffdfd;
    display: flex;
    padding:0 80px;
   }
  /* 搜索内容 */
   .sercher-content{
      padding:0 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      
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
