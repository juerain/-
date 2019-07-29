<template>
    
    <div>
        <my-header></my-header>
        <div class="container">
            <section>
            <div class="row">
                <div class="text-center full-person">
                <span class="text-danger">
               ——所有/
            </span>
            <span class="text-success">
               产品——
            </span>
                </div>
            </div>

            <div class="row read2">
                <div class="col-lg-3 col-md-6 col-sm-6 p-0" v-for="(a1,i) of arr1" :key="i">
                    <div class="text-center prop-box p-2">
                        <div class="img-box">
                            <a href=""><img :src="a1.pic" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-2 ml-3">销量： {{a1.scalecount}}</span><span class="prop-price mt-2 mr-3">¥{{parseInt(a1.price).toFixed(2)}}</span>
                            <div class="product_title"><span class="prop-title" v-text="a1.title"></span></div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class="text-center prop-box pull-two p-2">
                        <div class="img-box">
                            <a href=""><img src="img/pro_center/All-products02.jpg" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                            <p class="prop-title mt-5">大手笔是怎样炼成的</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class="text-center prop-box pull-three p-2">
                        <div class="img-box">
                            <a href=""><img src="img/pro_center/All-products03.jpg" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                            <p class="prop-title mt-5">大手笔是怎样炼成的</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class="text-center prop-box pull-three p-2">
                        <div class="img-box">
                            <a href=""><img src="img/pro_center/All-products04.jpg" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                            <p class="prop-title mt-5">大手笔是怎样炼成的</p>
                        </div>
                    </div>
                </div> -->
            </div>

            <div class="row read2 mt-3">
                <div class="col-lg-3 col-md-6 col-sm-6 p-0" v-for="(a2,i) of arr2" :key="i">
                    <div class="mr-2 text-center prop-box p-2">
                        <div class="img-box">
                            <a href=""><img :src="a2.pic" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： {{a2.scalecount}}</span><span class="prop-price mt-2 mr-3">¥{{parseInt(a2.price).toFixed(2)}}</span>
                            <div class="product_title"><span class="prop-title" v-text="a2.title"></span></div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class="mr-2 text-center prop-box pull-two p-2">
                        <div class="img-box">
                            <a href=""><img src="img/pro_center/All-products06.jpg" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                            <p class="prop-title mt-5">大手笔是怎样炼成的</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class="mr-2 text-center prop-box pull-three p-2">
                        <div class="img-box">
                            <a href=""><img src="img/pro_center/All-products07.jpg" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                            <p class="prop-title mt-5">大手笔是怎样炼成的</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class=" text-center prop-box pull-three p-2">
                        <div class="img-box">
                            <a href=""><img src="img/pro_center/All-products08.jpg" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                            <p class="prop-title mt-5">大手笔是怎样炼成的</p>
                        </div>
                    </div>
                </div> -->
            </div>

            <div class="row read2 mt-3">
                <div class="col-lg-3 col-md-6 col-sm-6 p-0" v-for="(a3,i) of arr3" :key="i">
                    <div class="mr-2 text-center prop-box p-2">
                        <div class="img-box">
                            <a href=""><img :src="a3.pic" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： {{a3.scalecount}}</span><span class="prop-price mt-2 mr-3">¥{{parseInt(a3.price).toFixed(2)}}</span>
                            <div class="product_title"><span class="prop-title" v-text="a3.title"></span></div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class="mr-2 text-center prop-box pull-two p-2">
                        <div class="img-box">
                            <a href=""><img src="img/pro_center/All-products10.jpg" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                            <p class="prop-title mt-5">大手笔是怎样炼成的</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class="mr-2 text-center prop-box pull-three p-2">
                        <div class="img-box">
                            <a href=""><img src="img/pro_center/All-products11.jpg" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                            <p class="prop-title mt-5">大手笔是怎样炼成的</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class=" text-center prop-box pull-three p-2">
                        <div class="img-box">
                            <a href=""><img src="img/pro_center/All-products12.jpg" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                            <p class="prop-title mt-5">大手笔是怎样炼成的</p>
                        </div>
                    </div>
                </div> -->
            </div>

            <div class="row read2 mt-3">
                <div class="col-lg-3 col-md-6 col-sm-6 p-0" v-for="(a4,i) of arr4" :key="i">
                    <div class="mr-2 text-center prop-box p-2">
                        <div class="img-box">
                            <a href=""><img :src="a4.pic" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： {{a4.scalecount}}</span><span class="prop-price mt-2 mr-3">¥{{parseInt(a4.price).toFixed(2)}}</span>
                            <div class="product_title"><span class="prop-title" v-text="a4.title"></span></div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class="mr-2 text-center prop-box pull-two p-2">
                        <div class="img-box">
                            <a href=""><img src="img/pro_center/All-products14.jpg" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                            <p class="prop-title mt-5">大手笔是怎样炼成的</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class="mr-2 text-center prop-box pull-three p-2">
                        <div class="img-box">
                            <a href=""><img src="img/pro_center/All-products15.jpg" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                            <p class="prop-title mt-5">大手笔是怎样炼成的</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class=" text-center prop-box pull-three p-2">
                        <div class="img-box">
                            <a href=""><img src="img/pro_center/All-products16.jpg" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                            <p class="prop-title mt-5">大手笔是怎样炼成的</p>
                        </div>
                    </div>
                </div> -->
            </div>

            <div class="row read2 mt-3">
                <div class="col-lg-3 col-md-6 col-sm-6 p-0" v-for="(a5,i) of arr5" :key="i">
                    <div class="mr-2 text-center prop-box p-2">
                        <div class="img-box">
                            <a href=""><img :src="a5.pic" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： {{a5.scalecount}}</span><span class="prop-price mt-2 mr-3">¥{{parseInt(a5.price).toFixed(2)}}</span>
                            <div class="product_title"><span class="prop-title" v-text="a5.title"></span></div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class="mr-2 text-center prop-box pull-two p-2">
                        <div class="img-box">
                            <a href=""><img src="img/pro_center/All-products18.jpg" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                            <p class="prop-title mt-5">大手笔是怎样炼成的</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class="mr-2 text-center prop-box pull-three p-2">
                        <div class="img-box">
                            <a href=""><img src="img/pro_center/All-products19.jpg" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                            <p class="prop-title mt-5">大手笔是怎样炼成的</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class=" text-center prop-box pull-three p-2">
                        <div class="img-box">
                            <a href=""><img src="img/pro_center/All-products20.jpg" alt=""/></a>
                        </div>
                        <div>
                            <span class="prop-name mt-3 ml-3">销量： 39</span><span class="prop-price mt-2 mr-3">¥99.30</span>
                            <p class="prop-title mt-5">大手笔是怎样炼成的</p>
                        </div>
                    </div>
                </div> -->
            </div>
            <div class="d-flex justify-content-center">
                <div class="mt-4">
                    <ul class="list-unstyled page-selection">
                        <li class="list-inline-item"><a href="">首页</a></li>
                        <li class="list-inline-item"><a href="">上一页</a></li>
                        <li class="list-inline-item"><a href="">1</a></li>
                        <li class="list-inline-item"><a href="">2</a></li>
                        <li class="list-inline-item"><a href="">3</a></li>
                        <li class="list-inline-item"><a href="">4</a></li>
                        <li class="list-inline-item"><a href="">下一页</a></li>
                        <li class="list-inline-item"><a href="">尾页</a></li>
                    </ul>
                </div>
            </div>
            </section>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
export default {
    data(){
        return{
            arr1:[],
            arr2:[],
            arr3:[],
            arr4:[],
            arr5:[],
        }
    },
    created() {
        this.load();
    },
    methods: {
        load(){
            this.axios.get("http://localhost:5050/video")
            .then(result=>{
                this.arr1=result.data.slice(0,4);
                this.arr2=result.data.slice(4,8);
                this.arr3=result.data.slice(8,12);
                this.arr4=result.data.slice(12,16);
                this.arr5=result.data.slice(16,20);
                console.log(this.arr1);
            })
        }
    },
}
</script>

<style scoped>
     /* 所有元素内外边距清零  */
*{
    /* margin: 0px; */
    padding: 0px;
}
.container{
    display: flex;
    flex-direction: column; 
     justify-content: center;
   
}



/*一楼样式*/
.full-person{
    width: 1100px;
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
/* 标题样式 */
    div.read2 span{
        font-size: 14px;
    }
    div.read2 div.product_title{
        text-align: center;
        width: 250px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow : ellipsis;
        
    }
.prop-box{
    border: 1px solid #aaa;
}
.prop-name{
    display: inline-block;
    color: #999999;
    font-size: 14px;
    float: left;
}
.prop-price{
    display: block;
    float: right;
    color: #cc0b0e;
    font-size: 20px;
}
.prop-title{
    clear: both;
}
.prop-box{
    overflow: hidden;
    width: 255px;
    height: 280px;
    margin: 0px !important;
}
.prop-box img{
    width: 200px;
    height: 200px;
}
.img-box{
    overflow: hidden;
}
.img-box>a>img:hover{
    transform: scale(1.1);
    transition: 0.8s ease-in-out;
}

@media screen and (min-width: 992px){
    .prop-box>img{
        width: 220px;
    }
}
@media screen and (min-width: 768px) and (max-width: 991px){
    .pull-two{
        margin-right: 5px !important;
    }
    .pull-three{
        margin-top: 15px;
    }
    .img-box{
        margin-right: 0 !important;
    }
}
@media screen and (max-width: 767px){
    .pull-two{
        margin-right: 0 !important;
    }
    .pull-three{
        margin-top: 15px;
    }

}
.page-selection li a{
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
.page-selection li:first-child a,.page-selection li:last-child a{
    width: 54px;
}
.page-selection li:nth-child(2) a,.page-selection li:nth-child(7) a{
    width: 72px;
}
.page-selection li:nth-child(3) a{
    background: rgba(2,178,181,1);
}
.page-selection li a:hover{
    background: rgba(2,178,181,1);
}

</style>
