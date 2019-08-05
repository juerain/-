<template>
    <div class="product_app">
        <!-- product.vue -->
        <!-- 1.创建空组件 -->
        <!-- 2.指定访问路径/product -->
        <!-- 3.在创建创建成功发送ajax -->
        <!-- 4.获取分页保存数据 -->
        <!-- 5.设计标签添加样式 -->
        <div class="goods_item" v-for="(a,i) of list" :key="i">
            <a href="https://www.baidu.com">
                <img :src="'http://127.0.0.1:3000/'+a.img_url" alt="" >
            </a>
            <h4>{{a.lname}}</h4>
            <!-- <p>{{list[0].lname}}</p> -->
            <div class="info">
            ￥{{a.price.toFixed(2)}}
            </div>
            <mt-button >
                    加入收藏
            </mt-button>

        </div>
        <!-- 加载更多按钮 -->
            <mt-button @click="loadMore" type="primary" size="large">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[],
            pno:0,//页码
        }
    },
    methods: {
        loadMore(){
            this.pno++;
            //创建参数对象
            var obj={pno:this.pno};
            this.axios.get("product",{params:obj})
            .then(res=>{
                console.log(res.data.data);
                var rows=
                this.list.concat(res.data.data);
                this.list=rows;
                console.log(this.list[0].lname);
            })
        }
        
    },
     created() {
         this.loadMore();
     },
}
</script>

<style scoped>
    /* 1.最外层样式 */
    .product_app{
        display: flex;
        flex-wrap: wrap;/*指定子元素换行*/
        justify-content: space-between;/**/
        padding: 4px;
    }
    /* 2.修饰商品样式 */
    .goods_item{
        width: 49%;
        border:1px solid #ccc;
        border-radius: 5px;
        margin:2px 0;
        padding: 2px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        max-height: 275px;
    }
    /* 3.修饰商品中图片样式 */
    .goods_item img{
        width: 100%;
    }
</style>
