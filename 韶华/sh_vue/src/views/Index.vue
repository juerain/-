<template>
    <div>
        <my-header></my-header>
        <Carousel></Carousel>
        <div class="container">
    <section class="m-auto">
        <div class="row">
            <div class="text-center full-person">
                <span class="text-danger">
               ——全民/
            </span>
            <span class="text-success">
               阅读——
            </span>
            </div>
        </div>
        <div class="row img-h">
            <div class="col-lg-2 col-md-4 col-sm-4 p-0 col-md-mr-0" >
                <div class="pr-2">
                    <a href=""><img :src="p1.pic" alt="" class="w-100"/></a>
                </div>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-8 p-0">
                <div class="pr-2">
                    <a href=""><img :src="p2.pic" alt="" class="w-100"/></a>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 p-0 pull-three">
                <div class="pr-2">
                    <a href=""><img :src="p3.pic" alt="" class="w-100"/></a>
                </div>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-8 p-0 pull-three">
                <div class="pr-2">
                    <a href=""><img :src="p4.pic" alt="" class="w-100"/></a>
                </div>
            </div>
        </div>
        <div class="row read2 mt-5 ">
            <div class="col-lg-3 col-md-6 col-sm-6 p-0" v-for="(a1,i) of arr1 " :key="i">
                <div class="mr-2 text-center prop-box p-2">
                    <router-link :to="`/details/${a1.href.split('=')[1]}`" ><img :src="a1.pic" alt=""/></router-link>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： {{a1.salecount}}</span><span class="prop-price mt-2 mr-3">¥{{parseInt(a1.price).toFixed(2)}}</span>
                        <p class="prop-title mt-5" v-text="a1.title"></p>
                    </div>
                </div>
            </div>
            <!-- <div class="col-lg-3 col-md-6 col-sm-6 p-0" v-for="(a1,i) of arr1" :key="i">
                <div class=" text-center prop-box p-2">
                    <router-link :to="`/details/${a1.href.split('=')[1]}`"><img :src="a1.pic" alt=""/></router-link>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： {{a1.salecount}}</span><span class="prop-price mt-2 mr-3">¥{{parseInt(a1.price).toFixed(2)}}</span>
                        <p class="prop-title mt-5" >{{a1.title}}</p>
                    </div>
                </div>
            </div> -->
            <!-- <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class="mr-2 text-center prop-box pull-two p-2">
                    <a href=""><img src="img/index/full-name06.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5">哈佛非虚构写作课:怎样讲好一个故事</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class="mr-2 text-center prop-box pull-three p-2">
                    <a href=""><img src="img/index/full-name07.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5">品味公文+实用公文写作一本通</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class=" text-center prop-box pull-three p-2">
                    <a href=""><img src="img/index/full-name08.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5">人类简史 从动物到上帝</p>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="row read2 mt-3">
            <div class="col-lg-3 col-md-6 col-sm-6 p-0" v-for="(a2,i) of arr2 " :key="i">
                <div class="mr-2 text-center prop-box p-2">
                    <router-link :to="`/details/${a2.href.split('=')[1]}`" ><img :src="a2.pic" alt=""/></router-link>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： {{a2.salecount}}</span><span class="prop-price mt-2 mr-3">¥{{parseInt(a2.price).toFixed(2)}}</span>
                        <p class="prop-title mt-5" v-text="a2.title"></p>
                    </div>
                </div>
            </div>
            <!-- <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class="mr-2 text-center prop-box pull-two p-2">
                    <a href=""><img src="img/index/full-name10.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5">社会心理学（第8版）</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class="mr-2 text-center prop-box pull-three p-2">
                    <a href=""><img src="img/index/full-name11.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5">自控力：精装收藏版</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class=" text-center prop-box pull-three p-2">
                    <a href=""><img src="img/index/full-name12.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5">最好的告别三部曲(套装共3册)</p>
                    </div>
                </div>
            </div> -->
        </div>

        <div class="row">
            <div class="text-center full-person">
                <span class="text-danger">
               ——热爱/
            </span>
            <span class="text-success">
               阅读——
            </span>
            </div>
        </div>
        <div class="row img-h">
            <div class="col-lg-2 col-md-4 col-sm-4 p-0 col-md-mr-0">
                <div class="pr-2">
                    <a href=""><img :src="p5.pic" alt="" class="w-100"/></a>
                </div>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-8 p-0">
                <div class="pr-2">
                    <a href=""><img :src="p6.pic" alt="" class="w-100"/></a>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 p-0 pull-three">
                <div class="pr-2">
                    <a href=""><img :src="p7.pic" alt="" class="w-100"/></a>
                </div>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-8 p-0 pull-three">
                <div class="pr-2">
                    <a href=""><img :src="p8.pic" alt="" class="w-100"/></a>
                </div>
            </div>
        </div>
        <div class="row read2 mt-3">
            <div class="col-lg-3 col-md-6 col-sm-6 p-0" v-for="(a3,i) of arr3" :key="i">
                <div class="mr-2 text-center prop-box p-2">
                    <router-link :to="`/details/${a3.href.split('=')[1]}`"><img :src="a3.pic" alt=""/></router-link>>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： {{a3.salecount}}</span><span class="prop-price mt-2 mr-3">¥{{parseInt(a3.price).toFixed(2)}}</span>
                        <p class="prop-title mt-5" v-text="a3.title"></p>
                    </div>
                </div>
            </div>
            <!-- <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class="mr-2 text-center prop-box pull-two p-2">
                    <a href=""><img src="img/index/love6.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5">从尊敬一事无成的自己开始</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class="mr-2 text-center prop-box pull-three p-2">
                    <a href=""><img src="img/index/love7.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5">当仓央嘉措遇见纳兰容若（套装共2册）</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class=" text-center prop-box pull-three p-2">
                    <a href=""><img src="img/index/love8.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5">每天早上和你一起醒来（签名版</p>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="row read2 mt-3">
            <div class="col-lg-3 col-md-6 col-sm-6 p-0" v-for="(a4,i) of arr4" :key="i">
                <div class="mr-2 text-center prop-box p-2">
                    <router-link :to="`/details/${a4.href.split('=')[1]}`"><img :src="a4.pic" alt=""/></router-link>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： {{a4.salecount}}</span><span class="prop-price mt-2 mr-3">¥{{parseInt(a4.price).toFixed(2)}}</span>
                        <p class="prop-title mt-5" v-text="a4.title"></p>
                    </div>
                </div>
            </div>
            <!-- <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class="mr-2 text-center prop-box pull-two p-2">
                    <a href=""><img src="img/index/love10.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5">倪萍：姥姥语录（增订本）</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class="mr-2 text-center prop-box pull-three p-2">
                    <a href=""><img src="img/index/love11.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5">奇想之年</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class=" text-center prop-box pull-three p-2">
                    <a href=""><img src="img/index/love12.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5">莎士比亚悲剧喜剧全集·朱生豪译</p>
                    </div>
                </div>
            </div> -->
        </div>
        <!-- 三楼内容-->
        <div class="row img-h">
        <div class="text-center full-person">
                <span class="text-danger">
               ——儿童/
            </span>
            <span class="text-success">
               阅读——
            </span>
        </div>
    </div>
        <div class="row img-h">
            <div class="col-lg-2 col-md-4 col-sm-4 p-0 col-md-mr-0">
                <div class="pr-2">
                    <a href=""><img :src="p9.pic" alt="" class="w-100"/></a>
                </div>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-8 p-0">
                <div class="pr-2">
                    <a href=""><img :src="p10.pic" alt="" class="w-100"/></a>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 p-0 pull-three">
                <div class="pr-2">
                    <a href=""><img :src="p11.pic" alt="" class="w-100"/></a>
                </div>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-8 p-0 pull-three">
                <div class="pr-2">
                    <a href=""><img :src="p12.pic" alt="" class="w-100"/></a>
                </div>
            </div>
        </div>
        <div class="row read2 mt-3">
            <div class="col-lg-3 col-md-6 col-sm-6 p-0" v-for="(a5,i) of arr5" :key="i">
                <div class="mr-2 text-center prop-box p-2">
                    <router-link :to="`/details/${a5.href.split('=')[1]}`"><img :src="a5.pic" alt=""/></router-link>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： {{a5.salecount}}</span><span class="prop-price mt-2 mr-3">¥{{parseInt(a5.price).toFixed(2)}}</span>
                        <p class="prop-title mt-5" v-text="a5.title"></p>
                    </div>
                </div>
            </div>
            <!-- <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class="mr-2 text-center prop-box pull-two p-2">
                    <a href=""><img src="img/index/child07.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5">保护想象力系列绘本</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class="mr-2 text-center prop-box pull-three p-2">
                    <a href=""><img src="img/index/child08.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5 text-truncate">肚子里有个火车站+牙齿大街的新鲜事</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class=" text-center prop-box pull-three p-2">
                    <a href=""><img src="img/index/child09.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5">巨人与春天</p>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="row read2 mt-3">
            <div class="col-lg-3 col-md-6 col-sm-6 p-0" v-for="(a6,i) of arr6" :key="i">
                <div class="mr-2 text-center prop-box">
                    <router-link :to="`/details/${a6.href.split('=')[1]}`"><img :src="a6.pic" alt=""/></router-link>
                    <div>
                        <span class="prop-name mt-3 ml-3 p-2">销量： {{a6.salecount}}</span><span class="prop-price mt-2 mr-3">¥{{parseInt(a6.price).toFixed(2)}}</span>
                        <p class="prop-title mt-5" v-text="a6.title"></p>
                    </div>
                </div>
            </div>
            <!-- <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class="mr-2 text-center prop-box pull-two p-2">
                    <a href=""><img src="img/index/child11.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5">他们都看见了一只猫</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class="mr-2 text-center prop-box pull-three p-2">
                    <a href=""><img src="img/index/child12.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5">童立方·便便恐龙</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class=" text-center prop-box pull-three p-2">
                    <a href=""><img src="img/index/child13.jpg" alt=""/></a>
                    <div>
                        <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                        <p class="prop-title mt-5">童眸/黄蓓佳倾情小说</p>
                    </div>
                </div>
            </div> -->
        </div>
    </section>


        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
// 引入轮播图的子组件
import Carousel from "../components/Carousel.vue"
export default {
    data(){
        return {
            p1:{pic:""},
            p2:{pic:""},
            p3:{pic:""},
            p4:{pic:""},
            arr1:[],
            arr2:[],
            p5:{pic:""},
            p6:{pic:""},
            p7:{pic:""},
            p8:{pic:""},
            arr3:[],
            arr4:[],
            p9:{pic:""},
            p10:{pic:""},
            p11:{pic:""},
            p12:{pic:""},
            arr5:[],
            arr6:[],

            }
    },
    // 注册子组件
    components:{Carousel},
    created() {
        this.axios.get("http://localhost:5050/index")
        .then(result=>{
            var [p1,p2,p3,p4]=result.data;
            this.p1=p1;
            this.p2=p2;
            this.p3=p3;
            this.p4=p4;
            this.arr1=result.data.slice(4,8);
            console.log(result.data);
            this.arr2=result.data.slice(8,12);
            var [p5,p6,p7,p8]=result.data.slice(12,16);
            this.p5=p5;
            this.p6=p6;
            this.p7=p7;
            this.p8=p8;
            this.arr3=result.data.slice(16,20);
            this.arr4=result.data.slice(20,24);
            var [p9,p10,p11,p12]=result.data.slice(24,28);
            this.p9=p9;
            this.p10=p10;
            this.p11=p11;
            this.p12=p12;
            this.arr5=result.data.slice(28,32);
            this.arr6=result.data.slice(32,36);
        })
    },

}
</script>

<style scoped>
    .container{
    margin-bottom: 20px;
}
/*一楼样式*/
.full-person{
    width: 1371px;
    margin: 0 auto;
}
.full-person>span{
    font-size: 24px;
    display: inline-block;
    margin:20px 0;
}
.read2 img{
    width: 233px;
    height: 233px;
}
.read2 div .prop-box{
    border: 1px solid #aaa;
}
.img-h img{
    height: 266px;
}
.prop-name{
    display: inline-block;
    float: left;
    color: #999999;
    font-size: 14px !important;

}
.prop-price{
    display: block;
    float: right;
    color: #cc0b0e;
    font-size: 20px;
}
.prop-title{
    clear: both;
    font-size: 14px;
}
.prop-box{
    overflow: hidden;
}
.prop-box>a>img:hover{
    transform: scale(1.1);
    transition: 0.8s ease-in-out;
}
.prop-box>div>p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
@media screen and (min-width: 992px){
    .prop-box>img{
        width: 220px;
    }
    .head{
        height: 150px;
    }
}
@media screen and (min-width: 768px) and (max-width: 991px){
    .pull-two{
        margin-right: 0 !important;
    }
    .pull-three{
        margin-top: 15px;
    }
    .head{
        height: 150px;
    }
    .img-h>div:nth-child(2)>div,.img-h>div:nth-child(4)>div{
        padding-right: 0px !important;
    }
    .read2>div:first-child,.read2>div:nth-child(2){
      margin-bottom: 0.5rem
  }
}
@media screen and (max-width: 767px){
    .pull-two{
        margin-right: 0 !important;
    }
    .pull-three{
        margin-top: 15px;
    }
    .head{
        height: 150px;
    }
    .img-h>div:nth-child(2)>div,.img-h>div:nth-child(4)>div{
        padding-right: 0px !important;
    }
    .read2>div:first-child,.read2>div:nth-child(2){
      margin-bottom: 0.5rem;
  }

}

</style>
