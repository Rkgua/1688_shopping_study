
<template>
<coinTopItem :items="menuItems" @click="onitemClick"/>

</template>

<script setup>
   import coinTopItem from './coin-top-item.vue'
   const menuItems=[
    {
        id:1,
        text:'下载插件',
        iconUrl:new URL('@/assets/Top-tab/download.svg', import.meta.url).href
    },{
        id:2,
        text:'我的订单',
         iconUrl:new URL('@/assets/Top-tab/my.svg', import.meta.url).href
    },{
        id:3,
        text:'采购车',
        iconUrl:new URL('@/assets/Top-tab/shipcar.svg', import.meta.url).href
    },{
        id:4,
        text:'消息',
         iconUrl:new URL('@/assets/Top-tab/message.svg', import.meta.url).href
    }
    ,{
        id:5,
        text:'官方服务',
         iconUrl:new URL('@/assets/Top-tab/gaverment.svg', import.meta.url).href
    }
   ]
    
    const onitemClick=(item)=>{
        console.log("点击了顶部菜单项:",item);
    }
</script>

<style scoped>

</style>
