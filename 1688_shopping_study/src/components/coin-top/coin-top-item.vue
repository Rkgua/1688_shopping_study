
<template>
    <div class="icon-contain">
        <div class="icon-picture"></div>
        <div class="icon-context"></div>
    </div>
</template>

<script setup>
   //利用props 定义icon的位置引入 text文本引入  
   const props = defineProps({
      items:{
        type:Array,
        required:true,
        default: ()=> [],
        vaildator(value){
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
    .icon-contain{
        width: 64px;
        height: 41px;
        display: flex;
        justify-content: center;
       
        
    }
    .icon-picture{
        width: 20px;
        height: 20px;
         background-color: #FF6B4C;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .icon-context{
        font-size: 16px;
        color:#fff;
        margin-top: 5px;
    }
</style>
