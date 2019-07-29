<template>
    <div>
        <!-- <my-header></my-header> -->
        <div class="container">
    <div class="row details">
        <div class="col-5">
            <div class="md_img">
                <img :src="pics[0].mdpic" alt=""/>
            </div>
            <div class="sm_img">
                <span>&lt;</span>
                <img v-for="(p,i) of pics" :key="i" :src="p.smpic" alt=""/>
                <!-- <img src="img/details/details_sm02.jpg" alt=""/>
                <img src="img/details/details_sm03.jpg" alt=""/>
                <img src="img/details/details_sm04.jpg" alt=""/>
                <img src="img/details/details_sm05.jpg" alt=""/> -->
                <span>&gt;</span>
            </div>
            <div class="collect">
                <a href="">收藏</a>
                <span>|</span>
                <a href="">我的收藏夹</a>
            </div>
        </div>
        <div class="col-6 mt-3 details_right">
            <div class="mb-3">
                <h5 v-text="details.title"></h5>
            </div>
            <div>
                <span>库存：{{details.stock}}</span>
            </div>
            <div>
                <span>销量：{{details.salecount}}</span>
            </div>
            <div>
                <span>规格：</span><a href="" class="spec" v-text="details.spec"></a>
            </div>
            <div class="product_count">
                <span>数量：</span><a>-</a><input type="text" placeholder="1"/><a>+</a>
            </div>
            <div>
                <span>价格：</span><span class="price">￥{{parseInt(details.price).toFixed(2)}}</span>
            </div>
            <div class="mt-4">
                <a href="" class="shop">立即购买</a>
                <a href="" class="cart">加入购物车</a>
            </div>
        </div>
    </div>
    <div class="row pt-5">
        <div class="col product_details">
            <a href="" class="details">宝贝详情</a>
            <a href="" class="product_comment">产品评论</a>
        </div>
    </div>
    <div class="row pt-4 pro_details">
        <div class="col-4">
            <p>规格：小16开</p>
            <p>类型：胶版纸</p>
        </div>
        <div class="col-4">
            <p>页数：270</p>
            <p>编号：11991436</p>
        </div>
        <div class="col-4">
            <p>包装：平装</p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <img v-for="(p,i) of dpics" :key="i" :src="p.pic" alt=""/>
            <!-- <img src="img/details/details02.jpg" alt=""/>
            <img src="img/details/details03.jpg" alt=""/>
            <img src="img/details/details04.jpg" alt=""/>
            <img src="img/details/details05.jpg" alt=""/> -->
        </div>
    </div>

</div>
<my-footer></my-footer>
    </div>
</template>

<script>
export default {
    data(){
        return{
            details:{},
            dpics:[],
            pics:[]
        }
    },
    props:["lid"],
    created(){
        this.load();
    },
    methods:{
        load(){
        if(this.lid){
            this.axios.get("http://localhost:5050/details",{
                params:{
                    lid:this.lid
                    }
                }).then(result=>{
                    console.log(result.data);
                    var {details,dpics,pics}=result.data;
                    this.details=details;
                    this.dpics=dpics;
                    this.pics=pics;
                })
            }
        }
    }
}
</script>

<style scoped>
  /*中图样式*/
div.details div.md_img img{
    width: 400px;
}
/*小图样式*/
div.details div.sm_img img{
    width: 60px;
}
/*小图左右箭头*/
div.details div.sm_img>span{
    width: 14px;
    height: 25px;
    display: inline-block;
    cursor: pointer;
}
/*收藏样式*/
div.details div.collect{
    padding: 20px 0 0;
}
div.details div.collect>a{
    color: #666666;
    font-size: 14px;
    text-decoration: none;
}
/*一楼右侧样式*/
/*所有div上下内边距*/
div.details_right>div{
    padding: 3px 0;
}
/*标题*/
div.details_right h5{
    color: #333333;
    font-size: 18px;
    font-weight: bolder;
}
/*其他所有字体样式*/
div.details_right>div>span{
    color: #666666;
    font-size: 14px;
}
/*规格样式*/
div.details_right>div>a.spec{
    width: 54px;
    height: 32px;
    display: inline-block;
    color: #cc0c0f;
    font-size: 14px;
    padding: 0 11px;
    margin: 3px 2px;
    border: 2px solid #cc0c0f;
    text-decoration: none;
    line-height: 32px;
}
/*加减号样式*/
div.details_right>div.product_count>a{
    display: inline-block;
    width: 28px;
    height: 26px;
    color: #999999;
    font-size: 22px;
    text-align: center;
    border: 1px solid #bdbdbd;
    line-height: 20px;
}
/*输入框的样式*/
div.details_right>div.product_count>input{
    width: 45px;
    height: 26px;
    text-align: center;
}
/*价格样式*/
div.details_right>div>span.price{
    color: #cc0c0f;
    font-size: 26px;
    font-weight: bolder;
}
/*立即购买样式*/
div.details_right>div>a.shop{
    width: 146px;
    height: 40px;
    display: inline-block;
    color: #ffffff;
    background: #ac0608;
    margin: 0 3px;
    padding: 0 40px;
    line-height: 40px;
    text-decoration: none;
    border: 1px solid;
    transition: all 0.25s ease-in-out;
}
/*鼠标移入时的样式*/
div.details_right>div>a.shop:hover{
    background: #fff;
    color: rgb(172, 6, 8);
}
/*加入购物车样式*/
div.details_right>div>a.cart{
    width: 162px;
    height: 40px;
    display: inline-block;
    color: #ac0608;
    background: #effbff;
    margin: 0 3px;
    padding: 0 40px;
    line-height: 40px;
    text-decoration: none;
    border: 1px solid;
    border-color: rgb(172, 6, 8);
    transition: all 0.25s ease-in-out;
}
/*鼠标移入时的样式*/
div.details_right>div>a.cart:hover{
    background: #fff;
}
/*宝贝详情样式*/
div.product_details{
    background: #f5f5f5;
    height: 48px;
    line-height: 48px;
}
/*宝贝详情样式*/
div.product_details>a.details{
    width: 136px;
    height: 48px;
    color: #ffffff;
    font-size: 14px;
    padding: 0 40px;
    background: #cc0c0f;
    text-decoration: none;
    display: inline-block;
}
/*产品评论样式*/
div.product_details>a.product_comment{
    width: 136px;
    height: 48px;
    color: #444444;
    font-size: 14px;
    padding: 0 40px;
    text-decoration: none;
    display: inline-block;
}
/*产品规格样式*/
div.pro_details>div>p{
    color: #666666;
    font-size: 14px;
}

</style>

