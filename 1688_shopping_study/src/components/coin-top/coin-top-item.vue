
<template>
    <div class="coin-top-item">
        <div v-for="item in props.items" :key="item.id" class="icon-contain" @click="onitClick">
        <div class="icon-picture" :style="getBackgroundImage(item.iconUrl)" ></div>
        <div class="icon-context">{{ item.text }}</div>
        </div>
    </div>
</template>

<script setup>

    const getBackgroundImage=(url)=>{
        return{backgroundImage:`url(${url})`}
    }
   //利用props 定义icon的位置引入 text文本引入  
   const props = defineProps({
      items:{
        type:Array,
        required:true,
        validator(value){
            return value.every(item=>  
                typeof item.text=== 'string'&& (typeof item.iconUrl==='string' || item.iconUrl === undefined)
                );
                }
      }
   });
   const emit = defineEmits(['click']);
   const onitClick=(item)=>{
      emit('click',item);
   }
</script>

<style scoped>
    .coin-top-item{
        display: flex;
    }
    .icon-contain{
        width: 64px;
        height: 41px;
        display: flex;
        flex-direction: column;
        justify-content: center;
       
        
    }
    .icon-picture{
        width: 20px;
        height: 20px;
        background-color: #FF6B4C;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
    }
    .icon-context{
        font-size: 13px;
        text-align: center;
        color:#685d5d;
        padding-top: 5px;
    }
</style>
