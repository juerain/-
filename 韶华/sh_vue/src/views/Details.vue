<template>
    <div>
        <my-header></my-header>
        <div class="container">
            <div class="row details">
                <div class="col-5">
                    <div class="md_img">
                        <img :src="pics[0].mdpic" alt=""/>
                    </div>
                    <div class="sm_img">
                        <span></span>
                        <img v-for="(p,i) of pics" :key="i" :src="p.smpic" alt=""/>
                        <!-- <img src="img/details/details_sm02.jpg" alt=""/>
                        <img src="img/details/details_sm03.jpg" alt=""/>
                        <img src="img/details/details_sm04.jpg" alt=""/>
                        <img src="img/details/details_sm05.jpg" alt=""/> -->
                        <span></span>
                    </div>
                    <div class="collect">
                        <a href="">收藏</a>
                        <span class="m-2">|</span>
                        <a href="">我的收藏夹</a>
                    </div>
                </div>
                <div class="col-7 mt-3 details_right">
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
                    <div class="product_count mt-3" @click="handle">
                        <span>数量：</span><a href="javascript:;">-</a> <input type="text" v-model="value"/>
                        <a href="javascript:;">+</a>
                    </div>
                    <div>
                        <span>价格：</span><span  class="price">￥{{parseInt(details.price).toFixed(2)}}</span>
                    </div>
                    <div class="mt-4">
                        <a href="" class="shop">立即购买</a>
                        <a href="javascript:;" @click="addCart" class="cart" :data-lid="details.lid" :data-title="details.title" :data-price="details.price">加入购物车</a>
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
            <div class="row mt-4 details">
                <div class="col">
                    <img v-for="(p,i) of dpics" :key="i" :src="p.pic" alt=""/>
                    <img src="img/details/details02.jpg" alt=""/>
                    <img src="img/details/details03.jpg" alt=""/>
                    <img src="img/details/details04.jpg" alt=""/>
                    <img src="img/details/details05.jpg" alt=""/> 
                </div>
            </div> 

        </div>
        <!-- <my-footer></my-footer> -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            details:{},
            dpics:[],
            pics:[],
            lid:"",
            title:"",
            price:"",
            count:"",
            value:"1"
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
                    // console.log(result.data);
                    var {details,dpics,pics}=result.data;
                    this.details=details;
                    this.dpics=dpics;
                    this.pics=pics;
                })
            }
        },
        addCart(e){
            e.preventDefault();
            var lid=e.target.dataset.lid;
            // console.log(lid);
            var title=e.target.dataset.title;
            var price=e.target.dataset.price;
            var count=this.value;
            var obj={lid:lid,title:title,price:price,count:count}
            this.axios("http://localhost:5050/cart",{params:obj})
            .then(res=>{
                console.log(res);
                if(res.data.code==1){
                    confirm("添加成功");
                }
            })
        },
        handle(e){
            var a=e.target;
            // console.log(a);
            var count=this.value;
            if(a.innerHTML=="+"){
                count++;
                this.value=count;
            }else{
                if(count<=0){
                    count=0;
                    
                }else{
                    count--;
                }
                this.value=count;
            }
        }
    }
}
</script>

<style scoped>
    /* 清除所有元素的内外边距 */
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* 最外层容器的样式 */
    div.container{
        width: 1100px;
        height: 542px;
        margin: 0 auto;
    }
    /* 左侧中图样式 */
    div.details>div>div.md_img img{
        width: 400px;
        height: 400px;
    }
    /* 左侧小图样式 */
    div.sm_img{
        width: 400px;
        height: 76px;
    }
    div.sm_img span:last-child{
        background: url(../assets/gray_right.png);
        background-position: 10px;
    }
    div.details>div>div.sm_img img{
        width: 60px;
    }
    /* 左侧底部收藏样式 */
    div.collect a{
        font-size: 14px;
        color: #666666;
        text-decoration: none;
    }
    /* 右侧条目 */
    /* 标题 */
    div.details_right>div>h5{
        color: #333333;
        font-size: 18px;
        font-weight: bolder;
    }
    /* 标题下其他文本样式 */
    div.details_right div{
        margin: 10px 0;
    }
    div.details_right div>span{
        font-size: 14px;
        color: #666666;
    }
    /* 规格样式 */
    a.spec{
        text-decoration: none;
        color: #cc0c0f;
        border: 2px solid #cc0c0f;
        padding: 0 11px;
        display: inline-block;
        height: 28px;
        line-height: 24px;
        font-size: 14px;
    }
    /* 数量样式 */
    div.product_count>a{
        width: 28px;
        height: 26px;
        display: inline-block;
        font-size: 18px;
        text-align: center;
        color: #999999;
        background: #eeeeee;
        line-height: 22px;
        border: 1px solid #bdbdbd;
    }
    div.product_count input{
        width: 45px;
        height: 26px;
        background: #fff;
        padding: 0 5px;
        text-align: center;
    }
    /* 价格样式 */
    .price{
        color: #cc0c0f !important;
        font-size: 26px !important;
        font-weight: bolder;
    }
    /* 立即购买样式 */
    a.shop,a.cart{
        height: 42px;
        display: inline-block;
        border: 1px solid #cc0c0f;
        line-height: 42px;
        text-align: center;
        text-decoration: none;
        margin: 0 10px;
    }
    a.shop{
        width: 146px;
        color: #fff;
        background: #cc0c0f
    }
    /* 加入购物车样式 */
    a.cart{
        width: 162px;
        color: #cc0c0f;
        background: #effbff;
    }
    a.shop:hover{
        background: #fff;
        color: #cc0c0f;
        transition: all 0.5s linear;
    }
    a.cart:hover{
        background: #fff;
        transition: all 0.5s linear;
    }
    /* 下部宝贝详情样式 */
    div.product_details{
        width: 100%;
        background: #f5f5f5;
    }
    div.product_details a{
        width: 136px;
        height: 48px;
        display: inline-block;
        text-decoration: none;
        line-height: 48px;
        text-align: center;
    }
    div.product_details a.details{
        background: #cc0c0f;
        color: #fff;
    }
    div.product_details a.product_comment{
        color: #444444;
        font-size: 14px;
    }
    /* 底部文本样式 */
    div.pro_details div p{
        font-size: 14px;
        color: #666666;
        margin-top: 10px;
    }
    div.details{
        /* height: 2000px; */
    }
</style>
