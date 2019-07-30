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
/* 所有元素内外边距清零  */
* {
  /* margin: 0px; */
  padding: 0px;
}
#box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/*一楼样式*/
.full-person {
  width: 1371px;
  margin: 0 auto;
}
.full-person > span {
  font-size: 24px;
  display: inline-block;
  margin: 20px 0;
}

.read2 img {
  width: 233px;
  height: 233px;
}
/* 标题样式 */
div.read2 span {
  font-size: 14px;
}
div.read2 div.product_title {
  text-align: center;
  /* width: 250px; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* margin-right: 3px; */
}
.prop-box {
  border: 1px solid #aaa;
}
.prop-name {
  display: inline-block;
  float: left;
  color: #999999;
  font-size: 14px;
}
.prop-price {
  display: block;
  float: right;
  color: #cc0b0e;
  font-size: 20px;
}
.prop-title {
  clear: both;
}


.img-box {
  overflow: hidden;
}
.img-box > a > img:hover {
  transform: scale(1.1);
  transition: 0.8s ease-in-out;
}

@media screen and (min-width: 992px) {
  .prop-box > img {
    /* width: 220px; */
  }
  .prop-box {
  overflow: hidden;
  margin:  0.5rem !important;
}
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .pull-two {
    margin-right: 5px !important;
  }
  .pull-three {
    margin-top: 15px;
  }
  .img-box {
    margin-right: 0 !important;
  }
  .read2>div:first-child,.read2>div:nth-child(2){
      margin-bottom: 0.5rem
  }
}
@media screen and (max-width: 767px) {
  .pull-two {
    margin-right: 0 !important;
  }
  .pull-three {
    margin-top: 15px;
  }
  .read2>div:first-child,.read2>div:nth-child(2){
      margin-bottom: 0.5rem;
  }
}
.page-selection li a {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: rgb(236, 236, 236);
  text-align: center;
  line-height: 30px;
  color: #444444;
  border-radius: 3px;
  text-decoration: none;
}
.page-selection li:first-child a,
.page-selection li:last-child a {
  width: 54px;
}
.page-selection li:nth-child(2) a,
.page-selection li:nth-child(7) a {
  width: 72px;
}
.page-selection li:nth-child(3) a {
  background: rgba(2, 178, 181, 1);
}
.page-selection li a:hover {
  background: rgba(2, 178, 181, 1);
}
</style>
