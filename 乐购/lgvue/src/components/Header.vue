<template>
    <header>
        <!-- 顶部导航栏 -->
        <div class="navBar">
            <div class="navBox">
                <!-- 左侧列表 -->
                <div class="navBar_left">
                    <a href="">重庆</a> 
                    <ul class="navBar_left_ul">
                        <li>
                            <a href="">北京</a>
                        </li>
                        <li>
                            <a href="">北京</a>
                        </li>
                        <li>
                            <a href="">北京</a>
                        </li>
                        <li>
                            <a href="">北京</a>
                        </li>
                        <li>
                            <a href="">北京</a>
                        </li>
                        <li>
                            <a href="">北京</a>
                        </li>
                        <li>
                            <a href="">北京</a>
                        </li>
                        <li>
                            <a href="">北京</a>
                        </li>
                        <li>
                            <a href="">北京</a>
                        </li>

                    </ul>
                 </div>
                <!-- 右侧列表 -->
                <div class="navBar_right">
                    <ul>
                        <li><a href="#">您好，请登录</a></li>
                        <li><a href="#">免费注册</a></li>
                        <span>|</span>
                        <li><a href="#">我的订单</a></li>
                        <span>|</span>
                        <li>
                            <div class="navBar_right_div">
                                <a href="#">我的京东</a>
                                <ul class="navBar_right_ul">
                                    <li><a href="">待处理订单</a></li>
                                </ul>
                            </div>
                        </li>
                        <span>|</span>
                        <li><a href="#">京东会员</a></li>
                        <span>|</span>
                        <li>
                            <div class="navBar_right_div">
                                <a href="#">企业采购</a>
                                <ul class="navBar_right_ul">
                                    <li><a href="">待处理订单</a></li>
                                </ul>
                            </div>
                        </li>
                        <span>|</span>
                        <li>
                            <div class="navBar_right_div">
                                <a href="#">客户服务</a>
                                <ul class="navBar_right_ul">
                                    <li><a href="">待处理订单</a></li>
                                </ul>
                            </div>
                        </li>
                        <span>|</span>
                        <li>
                            <div class="navBar_right_div">
                                <a href="#">网站导航</a>
                                <ul class="navBar_right_ul">
                                    <li><a href="">待处理订单</a></li>
                                </ul>
                            </div>
                        </li>
                        <span>|</span>
                        <li><a href="#">手机京东</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 搜索导航栏 -->
        <div class="nav">
            <div class="search_box">
                <div class="search_input">
                    <input type="text" placeholder="西门子冰箱">
                    <button>搜索</button>
                    <div class="cart">我的购物车</div>
                </div>
                <!--  -->
                <div class="nav_under">
                    <!-- 左侧logo -->
                    <div class="log_left">
                        <a href="#">京东</a>
                    </div>
                    <div>
                        <!-- 搜索框下的热词 -->
                        <div class="hot_words">
                            <ul>
                                <li><a href="">七夕送好礼</a></li>
                                <li><a href="">国宝手机</a></li>   
                                <li><a href="">品质钟表</a></li>   
                                <li><a href="">空调钜惠</a></li>   
                                <li><a href="">开关五折</a></li>   
                                <li><a href="">酸奶五折</a></li>   
                                <li><a href="">日系好货</a></li>   
                                <li><a href="">手机</a></li>   
                                <li><a href="">优惠五百</a></li>   
                            </ul>
                        </div>
                        <!-- 热词下导航 -->
                        <div class="nav_item">
                            <ul>
                                <li><a href="">秒杀</a></li>
                                <li><a href="">优惠券</a></li>
                                <li><a href="">PLUS会员</a></li>
                                <li><a href="">品牌闪购</a></li>
                                <li><a href="">拍卖</a></li>
                                <li><a href="">京东时尚</a></li>
                                <li><a href="">京东超市</a></li>
                                <li><a href="">京东生鲜</a></li>
                                <li><a href="">海囤全球</a></li>
                                <li><a href="">京东金融</a></li>
                            </ul>
                        </div>
                    </div>
                    <!-- 右侧logo -->
                    <div class="log_right">
                        <!-- <img src="img/header/log_right.png" alt=""> -->
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    /* 清空所有元素的内外边距 */
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* 顶部导航栏样式 */
    header div.navBar{
        width: 100%;
        height: 30px;
        border-bottom: 1px solid #ddd;
        background-color: #e3e4e5;
        
    }
    /* 顶部导航栏 */
    header div.navBar>div.navBox{
        width: 1190px;
        height: 30px;
        margin: 0 auto;
        line-height: 30px;
    }
    /* 清除列表样式 */
    ul{
        list-style: none;
    }
    /* 顶部导航栏设置弹性布局 */
    header div.navBar>div.navBox{
        display: flex;
        justify-content: space-between;/*环绕对齐*/
    }
    /* 顶部导航栏列表的显示与隐藏 */
    .navBar_left_ul,.navBar_right_ul{
        display: none;
        position: absolute;
    }
    div.navBox>div.navBar_left:hover .navBar_left_ul{
        display: block;
    }
    .navBar_right_div:hover .navBar_right_ul{
        display: block;
    }
    /* 顶部导航栏隐藏列表 */
    ul.navBar_left_ul,ul.navBar_right_ul{
        width: 200px;
        border: 1px solid #ddd;
    }
    ul.navBar_left_ul li,ul.navBar_right_ul li{
        float: left;
        padding: 5px 10px;
    }
    /* a标签样式 */
    header div.navBar>div.navBox a{
        text-decoration: none;
        color: #999999;
        font-size: 12px;
    }
    /* 右侧列表容器样式 */
    div.navBar>div.navBox div.navBar_right{
        width: 720px;
        height: 30px;
        display: flex;
        justify-content: space-between;
    }
    /* 右侧列表设置弹性布局 */
    div.navBar>div.navBox div.navBar_right>ul{
        display: flex;
        justify-content: space-between;/*两端对齐*/

    }
    /* 右侧列表项设置左右外边距 */
    div.navBar>div.navBox div.navBar_right>ul>li{
        margin: 0 10px;
    }

    /* 搜索导航栏样式 */
    /* 外层容器 */
    div.nav{
        width: 100%;
        height: 140px;
        background-color: #fff;
        padding-top: 20px;
        border-bottom: 1px solid #ddd;
    }
    /* 搜索框外层容器 */
    div.nav>div.seach_box{
        width: 1190px;
        height: 140px;
        
    }
    .search_input{
        height: 32px;
        line-height: 32px;
    }
    /* input样式 */
    div.nav>div.search_box input{
        width: 488px;
        height: 32px;
        border: 2px solid #E1251B;
        padding: 2px 44px 2px 17px;
    }
    /* 按钮样式 */
    div.nav>div.search_box button{
        width: 58px;
        height: 32px;
        background: #E1251B;
        border: 1px solid #E1251B;
    }
    /* 购物车div变成行内元素 */
    div.nav>div.search_box .cart{
        display: inline;
    }
    /* 热词列表样式 */
    div.nav_under{
        display: flex;
        justify-content: space-around;
    }
    /* 热词列表样式 */
    div.nav div.hot_words{
        width: 550px;
        height: 20px;
        margin: 0 auto;
        margin-left: 42px;
    }
    div.nav div.hot_words ul{
        display: flex;
        justify-content: space-around;
        padding-top: 5px;
    }
    /* 热词下导航 */
    div.nav div.nav_item{
        width: 760px;
        height: 60px;
        margin: 0 auto;

    }
    div.nav div.nav_item ul{
        display: flex;
        justify-content: space-around;
        padding-top: 30px;
        margin-left: 45px;
    }
    /* 热词 a 标签样式 */
    div.nav div.hot_words ul a{
        text-decoration: none;
        color: #999999;
        font-size: 12px;
    }
    /* 热词下导航  a  标签样式 */
    div.nav div.nav_item ul a{
        text-decoration: none;
        color: #333333;
        font-size: 15px;
    }
    div.log_rigth{
        /* background-image: url(../../public/img/header/log_right.png); */
    }
    
</style>
