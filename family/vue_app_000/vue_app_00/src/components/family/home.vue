<template>
    <div>
        <!-- 顶部导航条 -->
        <titlebar leftTitle="Family"></titlebar>
        
        <!-- 面板父元素组件 -->
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="photo">
                <!-- <messagelist></messagelist> -->
                <photo></photo>
            </mt-tab-container-item>
            <mt-tab-container-item id="cookbook">
                <!-- <messagelist></messagelist> -->
                <photo></photo>
            </mt-tab-container-item>
            <mt-tab-container-item id="doctor">
                <!-- <messagelist></messagelist> -->
                <photo></photo>
            </mt-tab-container-item>
            <mt-tab-container-item id="me">
                <!-- <messagelist></messagelist> -->
                <photo></photo>
            </mt-tab-container-item>
        </mt-tab-container>


        
        <!-- 底部导航条 -->
        
        <mt-tabbar v-model="active" fixed>
            <mt-tab-item id="photo" @click.native="changeState(0)">
                <!-- <img src="../../assets/photo.png" alt=""> -->
                <tabbaricon
                :normalImg="require('../../assets/photo1.png')"
                :selectedImg="require('../../assets/photo.png')"
                :focused="currentIndex[0].isSelect">
                ></tabbaricon>
                相册
            </mt-tab-item>
            <mt-tab-item id="cookbook" @click.native="changeState(1)">
                <tabbaricon
                    :normalImg="require('../../assets/cookbook1.png')"
                    :selectedImg="require('../../assets/cookbook.png')"
                    :focused="currentIndex[1].isSelect">
                ></tabbaricon>
                菜谱
            </mt-tab-item>
            <mt-tab-item id="doctor" @click.native="changeState(2)">
                <tabbaricon
                    :normalImg="require('../../assets/doctor1.png')"
                    :selectedImg="require('../../assets/doctor.png')"
                    :focused="currentIndex[2].isSelect">
                ></tabbaricon>
                医生
            </mt-tab-item>
            <mt-tab-item id="me" @click.native="changeState(3)">
                <tabbaricon
                    :normalImg="require('../../assets/me1.png')"
                    :selectedImg="require('../../assets/me.png')"
                    :focused="currentIndex[3].isSelect">
                ></tabbaricon>
                我
            </mt-tab-item>
        </mt-tabbar>
        <tabbaricon></tabbaricon>
    </div>
</template>

<script>
// 引入子组件
import titlebar from "./common/TitleBar.vue"
import tabbaricon from "./common/TabBarIcon.vue"
import messagelist from "./common/MessageList.vue"
import photo from "./common/photo.vue"

export default {
    data(){
        return{
            active:"photo",
            currentIndex:[
                {isSelect:true},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false}
            ]
        }
    },
    methods: {
       changeState(n){
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容
      for(var i=0;i<this.currentIndex.length;i++){
       //2:判断如果循环下标与n相等 20
       if(n==i){
        //3:当前下标元素true 10:22
        this.currentIndex[i].isSelect=true;
       }else{
        //4:其它元素修改false
        this.currentIndex[i].isSelect=false;
       }
       
      }

    }
    },
    components:{"titlebar":titlebar,"tabbaricon":tabbaricon
    ,"messagelist":messagelist,"photo":photo}
}
</script>

<style>

</style>
