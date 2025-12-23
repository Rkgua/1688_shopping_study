
<template>
   <div class="serch-img-contain"  @mouseenter="Openmessage" @mouseleave="Closemessage">
    <div class="serch-img-icon"></div>
    <div class="serch-img-text">以图搜款</div>
    <div class="serch-message" v-show="isSerchmessage">
        <div class="serch-message-title">{{ serchMessage.title }}</div>
        <div v-for="(items,index) in serchMessage.context" :key="index"  class="serch-message-text">{{ items }} </div>
    </div>
   </div>
</template>

<script setup>
 import { ref } from 'vue';
// 展示卡片上的信息
const serchMessage =ref(
    {
        title:'支持如下图搜同款比价方式',
        context:['1. 点击从本地上传图片','2.ctrl+v粘贴图片或图片链接快速图搜','3.安装1688插件,全网截图比价 ']
    }
    
)



//  鼠标移入移出显示信息
 const isSerchmessage = ref(true);
 const Openmessage = () =>{
    isSerchmessage.value = true;
 }
 const Closemessage = () =>{
    isSerchmessage.value = false;
 }
</script>

<style scoped>
 .serch-img-contain{
    width: 141px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f9e495;
    border-radius: 5px;
    margin-left: 20px;
    position: relative;
 }
 .serch-img-icon{
    width: 30px;
    height: 40px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("../assets/camera.svg");
 }
    .serch-img-text{
        font-size: 17px;
        font-weight: 600;
        color: #FF6B4C;
        margin-left: 5px;
        
    }
/* 展示信息卡片 */
    .serch-message{
        position: absolute;
        top:70px;
        width: 250px;
        height: 120px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: space-around;

    }
    .serch-message-title{
        font-size: 16px;
        font-weight: 600;
        color: #333;
    }
    .serch-message-text{
        font-size: 14px;
        margin-top: 10px;
        color: #adaaaa;
    }
</style>
