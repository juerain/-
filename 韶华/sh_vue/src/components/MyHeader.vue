<template>

    <header>
        <div class="welcom">
    <div class="d-flex hello justify-content-around">
        <div class="float-left">
            <p class="text-white ml-4">您好！欢迎来到&nbsp;&nbsp;韶华图书音像馆</p>
        </div>
        <div class="float-right login">
            <ul class="list-unstyled mr-3">
                <li class="list-inline-item mr-3 ">
                    <router-link  :to="`/login/`" class="text-white d-inline-block pl-5">登录</router-link>
                </li>
                <li class="list-inline-item mr-3  text-white">|</li>
                <li class="list-inline-item mr-3 ">
                    <router-link  :to="`/register/`" class="text-white pl-4">注册</router-link>
                </li>
            </ul>
        </div>
    </div>
</div>
    <!-- 搜索栏 -->
<div class="book-box m-2">
    <div class="d-flex book justify-content-around">
        <div>
            <a href=""><img src="img/index/book_logo.png" alt=""/></a>
        </div>
        <div class="mt-4 search">
            <input type="text" placeholder="请输入要搜索的内容" class="pl-2"/>
            <div class="my_cart">
                <span>我的购物车</span>
            </div>
        </div>
        
    </div>
</div>
<div class="nav-box">
    <div class="d-flex flex-row home-page justify-content-around">
        <div class="ml-5">
            <ul class="list-unstyled " @click="focus">
                <li class="float-left text-center active"><a href="index.html" class="text-white ">首页</a></li>
                <li class="float-left text-center"><router-link :to="`/products/`" href="pro-center.html" class="text-white ">产品中心</router-link> </li>
                <li class="float-left text-center"><router-link :to="`/book/`" href="book.html" class="text-white "> 图书</router-link></li>
                <li class="float-left text-center"> <router-link :to="`/video/`" href="audio-video.html" class="text-white ">音像</router-link></li>
            </ul>
        </div>
        <div>
            <ul class="list-unstyled">
                <li></li>
            </ul>
        </div>
    </div>
</div>

    </header>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        focus(e){
            
        }
    },
}
</script>

<style>
 @import url("../assets/css/header.css");
</style>

