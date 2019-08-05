<template>
    <div>
        
        <!-- 1.引入子组件 -->
        <!-- 2.注册子组件 -->
        <!-- 3.调用子组件 -->
        <message 
        :photo="require('../../../assets/a_7.png')"
        ></message>
    </div>
</template>

<script>
import message from "./Message.vue"
// import mlist from "../json/messagelist.json"
export default {
    data(){
        return {
            
        }
    },
    components:{"message":message}
}
</script>

<style>

</style>
