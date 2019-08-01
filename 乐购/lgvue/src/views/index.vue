<template>
    <div>
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
                
            </div>
            <div class="right_item">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    /* 清除所有元素的内外边距 */
    *{
        margin: 0px;
        padding: 0px;
    }
    /* 设置最外层容器宽度 */
    div.box{
        width: 1190px;
        display: flex;
        justify-content: space-around;
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

</style>
