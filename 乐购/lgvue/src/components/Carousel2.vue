<template>
    <div>
        <div class="er_bloor_box">
            <div class="carousel_item">
                <!-- 左侧京东秒杀 -->
                <div class="jd_miaoSha">
                    <h3>京东秒杀</h3>
                    <div class="timer">
                        <strong>18:00</strong>
                        点场 倒计时
                        <span class="dian">00</span>
                        <span>:</span>
                        <span class="dian">00</span>
                        <span >:</span>
                        <span class="dian">00</span>
                    </div>
                </div>
                <!-- 中间轮播图 -->
                <div class="carousel_left">
                    <a href="">
                        <img src="../../public/img/carousel/carousel_two_floor1.png" alt="">
                    </a>
                    <a href="">
                        <img src="../../public/img/carousel/carousel_two_floor2.png" alt="">
                    </a>
                    <a href="">
                        <img src="../../public/img/carousel/carousel_two_floor3.png" alt="">
                    </a>
                    <a href="">
                        <img src="../../public/img/carousel/carousel_two_floor4.png" alt="">
                    </a>
                </div>
                <!-- 右侧轮播图 -->
                <div class="carousel_right">
                    <a href="">
                        <img src="../../public/img/carousel/carousel_two_floor4.png" alt="">
                    </a>
                </div>
            </div>
        </div>
        <!-- 二楼底部列表 -->
        <div class="rinking_list">
            <div class="rinking_list_left">
                <div></div>
                <div></div>
            </div>
            <div class="rinking_list_right"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    /* 二楼轮播列表样式 */
    *{
        margin: 0;
        padding: 0;
    }
    div.er_bloor_box{
        width: 1190px;
        margin: 0 auto;
    }
    div.carousel_item{
        display: flex;
        justify-content: space-around;
    }
    /* 左侧倒计时 */
    div.jd_miaoSha{
        width: 190px;
        height: 100%;
        background-image: url(../../public/img/carousel/jd_miaosha.png);
    }
    div.jd_miaoSha{
        color: #ffffff;
        display: flex;
        flex-direction: column;
    }
    div.jd_miaoSha h3{
        margin-top: 20px;
        font-size: 30px;
    }
    div.jd_miaoSha div strong{
        font-size: 18px;
        margin-bottom: 10px;
        display: inline-block;
    }
    div.jd_miaoSha div span{
        font-size: 20px;
        width: 30px;
        height: 30px;
        font-weight: bolder;
        margin-left: 5px;
    }
    div.jd_miaoSha div span.dian{
        background-color: #2f3430;
    }
    div.jd_miaoSha div.timer{
        margin-top: 120px;
        padding-bottom: 10px;
    }
    /* 中间轮播图样式 */
    div.carousel_left{
        width: 800px;
    }
    div.carousel_left img{
        width: 140px;
        height: 140px;
    }
    /* 右侧轮播图样式 */
    div.carousel_right{
        width: 200px;
        height: 260px;
    }
    div.carousel_right a img{
        width: 120px;
        height: 120px;
    }

    /* 二楼底部列表样式 */
    div.rinking_list_left,div.rinking_list_right{
        width: 590px;
    }
</style>
