
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
                <button class="my-load-button">登录</button>
            </div>
        </div>
    </div>
      <!-- 主要内容 -->
    <div class="main-content">
        <!-- 三大内容选择 -->
        <div class="top-content"></div>
        <!-- 轮播图 -->
        <div class="scroll-banner"></div>
        <!-- 部分商品介绍 -->
        <div class="litter-banner"></div>
        <!-- 小型商品轮播图 -->
         <div class="litter-scroll"></div>
         <!-- 主要商品介绍 -->
        <div class="title-content"></div>
        <!-- 主要商品展示 -->
        <div class="most-products"></div>
    

    </div>
      <!-- 组件复用 -->


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
    position: fixed;
    top: 0;
    width: 100%;
    height: 64px;
    background-color: #fffdfd;
    display: flex;
    justify-content: space-between;
    padding:0 80px;
   }
   .sercher-content{
      padding:0 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      
   }
   .my-content{
    display: flex;
    align-items: center;
    
   }
   .my-load{
    width: 57px;
    height: 42px;
   }
   .my-load-button{
       margin: 0 0 0 16px;
       border-radius: 50%;
       width: 41px;
       height: 41px;
       background-color:#F8F8F9;
       color: black;
   }

/* 主要内容 */
.main-content{
    margin: 0 16px;
    padding: 0 80px;
}

.top-content{
    width: 100%;
    height: 33px;
}
.scroll-banner{
    width: 100%;
    height: 260px;
}
.litter-banner{
    width: 100%;
    height: 362px;
}
.litter-scroll{
    width: 100%;
    height: 64px;
}
.title-content{
    width: 100%;
    height: 48px;
}
.most-products{
    width: 100%;
    height: 3360px;
}
</style>
