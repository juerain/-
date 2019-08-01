<template>
    <div>
        <main id="main">
        <div id="banner">
            <div id="btn-left"></div>
            <ul id="ul-imgs" style="width:5000px; margin-left:0px;">
                <li>
                    <a href="javascript:;">
                        <img src="img/header/carousel1.jpg">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="img/header/carousel1.jpg">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="img/header/carousel1.jpg">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="img/header/carousel1.jpg">
                    </a>
                </li>
                <!--注意！最后li个数要比实际图片张数多1，最后一个li里的img是重复第一张li的图片-->
                <li>
                    <a href="javascript:;">
                        <img src="img/header/carousel1.jpg">
                    </a>
                </li>
            </ul>
            <ul id="ul-idxs">
                <!--虽然li个数比实际图片张数多1，但小圆点的个数不必多1-->
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div id="btn-right"></div>
        </div>
    </main>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    @import url("../assets/css/carousel.css");
</style>
