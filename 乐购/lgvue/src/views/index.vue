<template>
    <div>
        <Header></Header>
        <!-- 一楼内容 -->
        <div class="box">
            <div class="left">
                <ul>
                    <li>
                        <a href="">家用电器</a>
                    </li>
                    <li>
                        <a href="">手机</a>/
                        <a href="">运营商</a>/
                        <a href="">数码</a>
                    </li>
                    <li>
                        <a href="">电脑</a>/
                        <a href="">办公</a>
                    </li>   
                </ul>
            </div>
            <div class="carousel_box">
                <Carousel></Carousel>
            </div>
            <!-- 轮播图右侧图像列表 -->
            <div class="right_item">
                <div>
                    <img src="../../public/img/carousel/carousel_right1.jpg" alt="">
                </div>
                <div>
                    <img src="../../public/img/carousel/carousel_right2.jpg" alt="">
                </div>
                <div>
                    <img src="../../public/img/carousel/carousel_right3.jpg" alt="">
                </div>
            </div>
            <!-- 轮播图最右侧列表 -->
            <div class="right_item">
                <div class="logo_right">
                    <div class="logo_top">
                        <img src="../../public/img/carousel/logo_small.png" alt="">
                        <div class="welcome_box">
                            <a href="" class="welcome">Hi 欢迎逛京东！</a>
                            <p>
                                <a href="" class="register">注册</a>
                                <span>|</span>
                                <a href="" class="log">登录</a>
                            </p>
                        </div>
                    </div>
                    <div class="new_welfare">
                        <a href="">新人福利</a>
                        <a href="">PLUS会员</a>
                    </div>
                </div>
                <div class="jd_news">
                    <h5>京东快报</h5>
                    <a href="">更多 &nbsp;&gt;</a>
                </div>
                <div class="jd_news_item">
                    <ul>
                        <li><a href=""><span>最新</span>汪汪队立大功积木玩具，拼装积木救援大卡车！</a></li>
                        <li><a href=""><span>最新</span>汪汪队立大功积木玩具，拼装积木救援大卡车！</a></li>
                        <li><a href=""><span>最新</span>汪汪队立大功积木玩具，拼装积木救援大卡车！</a></li>
                        <li><a href=""><span>最新</span>汪汪队立大功积木玩具，拼装积木救援大卡车！</a></li>
                    </ul>
                </div>
                <div class="service_list">
                    <ul>
                        <li>
                            <a href="">
                                <img src="../../public/img/carousel/carousel_right_item1.png" alt="">
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../../public/img/carousel/carousel_right_item1.png" alt="">
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../../public/img/carousel/carousel_right_item1.png" alt="">
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../../public/img/carousel/carousel_right_item1.png" alt="">
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../../public/img/carousel/carousel_right_item1.png" alt="">
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../../public/img/carousel/carousel_right_item1.png" alt="">
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../../public/img/carousel/carousel_right_item1.png" alt="">
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../../public/img/carousel/carousel_right_item1.png" alt="">
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../../public/img/carousel/carousel_right_item1.png" alt="">
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../../public/img/carousel/carousel_right_item1.png" alt="">
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../../public/img/carousel/carousel_right_item1.png" alt="">
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../../public/img/carousel/carousel_right_item1.png" alt="">
                                <span>话费</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <carousel2></Carousel2>
        </div>
    </div>
</template>
</script>
<script>
import Carousel from "../components/Carousel.vue"
import Header from "../components/Header.vue"
import Carousel2 from "../components/Carousel2.vue"
export default {
    data(){

    },
    components:{"Carousel":Carousel,"Header":Header,"Carousel2":Carousel2}
}
</script>

<style scoped>
    /* 清除所有元素的内外边距 */
    *{
        margin: 0px;
        padding: 0px;
    }
    /* 清除所有a标签的下划线 */
    a{
        text-decoration: none;
    }
    /* 设置最外层容器宽度 */
    div.box{
        width: 1190px;
        display: flex;
        justify-content: space-around;
        padding: 5px;
        margin: 0 auto;
    }
    /* 左侧列表 */
    div.box>div.left{
        width: 190px;
        height: 470px;/*临时设置宽度*/
        border: 1px solid #ddd;
        background: #fff;
    }
    /* 清除ul样式 */
    ul{
        list-style: none;
    }
    div.box>div.left>ul>li{
        padding: 4px;
    }
    /* 左侧列表a标签样式 */
    div.box>div.left>ul>li>a{
        text-decoration: none;
        color: #333333;
        font-size: 14px;
    }
    /* 轮播图容器 */
    div.carouse_box{
        width: 590px;
        height: 470px;
        margin: 10px;
    }
    /* 轮播图最右侧列表 */
    div.right_item{
        width: 190px;
        margin: 0 8px;
    }
    div.logo_top{
        display: flex;
        justify-content: space-around;
    }
    /* 轮播图右侧图像列表 */
    div.right_item img{
        width: 190px;
        height: 150px;
    }
    
    /* logo样式 */
    div.right_item>div.logo_right img{
        width: 40px;
        height: 40px;
    }
    /* logo右侧文字样式 */
    div.right_item>div.logo_right>div.logo_top>div.welcome_box>a.welcome{
        color: #666666;
        font-size: 12px;
        margin: 0 20px;
    }
    div.right_item>div.logo_right>div.logo_top>div.welcome_box>p>a{
        color: #333333;
        font-size: 12px;
    }
    /* 新人福利样式 */
    div.new_welfare a{
        width: 70px;
        height: 25px;
        display: inline-block;
        font-size: 12px;
        border-radius: 13px;
        text-align: center;
        line-height: 25px;
        margin-top: 10px;
    }
    div.new_welfare a:first-child{
        color: #fff;
        background: #e1251b;
    }
    div.new_welfare a:last-child{
        background: #363634;
        color: #e5d790;
    }
    /* 轮播图右侧列表二楼样式 */
    div.jd_news{
        display: flex;
        justify-content: space-around;
        margin: 10px 0;
    }
    div.jd_news h5{
        font-size: 14px;
        color: #333333;
    }
    div.jd_news a{
        font-size: 12px;
        color: #999999;
    }
    /* 轮播图右侧列表二楼下方列表样式 */
    div.jd_news_item li{
        width: 190px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow : ellipsis;
        margin: 3px 0;
    }
    div.jd_news_item>ul>li>a>span{
        display: inline-block;
        width: 35px;
        height: 16px;
        color: #e1251b;
        background: rgba(225,37,27,.08);
        font-size: 12px;
        margin: 0 6px 0 0;
    }
    div.jd_news_item>ul>li>a{
        color: #666666;
        font-size: 12px;
    }
    /* 最下面服务列表样式 */
    div.service_list{
        padding-left: 20px;
    }
    div.service_list>ul>li{
        float: left;
        margin: 8px 10px;
    }
    div.service_list>ul>li>a>img{
        width: 28px;
        height: 28px;

    }
    div.service_list>ul>li>a>span{
        display: block;
        font-size: 12px;
        color: #333333;
    }

</style>
