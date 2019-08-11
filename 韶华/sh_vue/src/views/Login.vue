<template>
    <div>
        <div class="container">
            <div class="row nav">
                <div class="col-6">
                    <router-link :to="`/`"><img class="pb-4" src="../../public/img/index/book_logo.png" alt=""/></router-link>
                    <span class="pt-3 pl-5 ">会员登录</span>
                </div>
                <div class="col-6">
                    <p class="pt-5 float-right">没有会员账号？<router-link  :to="`/register/`" class="reg">注册</router-link></p>
                </div>
            </div>
            <div class="row content">
                <div class="col-6">
                    <img src="../../public/img/index/login.png" alt="">
                </div>
                <div class="col-6 input_item">
                    <div class="input_box">
                        <input v-model="uname" type="text" class="w-100 p-1">
                        <input v-model="upwd" type="password" class="w-100 mt-3 p-1">
                        <input type="text" class="w-75 mt-3 p-1" >
                        <input @click="login" type="button" value="登录" class="w-100 mt-3 login_button">
                        <div class="forget_pwd">
                            <a href="">忘记密码？</a>
                            <a href="" class="reg">免费注册</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row footer">
                <p class="mt-3">Copyright © 2018 好学图书音像商城. All Rights Reserved 本站内容、图片、视频为网站模板演示数据，如有涉及侵犯版权，请联系我们提供书面反馈，我们核实后会立即删除。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            uname:"",
            upwd:""
        }
    },
    methods: {
        
        login(){
            var uname=this.uname;
            var upwd=this.upwd;
            var obj={uname:uname,upwd:upwd};
            this.axios("http://localhost:5050/login",{params:obj})
            .then(res=>{
                // console.log(res);
                if(res.data.code==-1){
                    this.$toast("用户名或密码有误");
                }else{
                    this.$router.push("/");
                }

            })
        }
    },

}
</script>

<style scoped>
    div.container>div.nav{
        height: 80px;
        width: 1100px;
    }
    div.container>div.nav>div span{
        font-size: 22px;
        color: #313131;
        margin-top: 10px;
        display: inline-block;
    }
    div.container>div.nav>div p{
        font-size: 12px;
        color: #545454;
    }
    div.content{
        background: rgba(2,178,181,1);
    }
    div.input_box{
        width: 384px;
        height: 34-100;
    }
    div.input_box .login_button{
        background: #ff9f19;
        height: 40px;
        border: 0;
        color: #fff;
    }
    div.input_item input:first-child{
        margin-top: 100px;
    }
    div.forget_pwd{
        float: right;
    }
    div.forget_pwd a{
        font-size: 14px;
        color: #333333;
        text-decoration: none;
        
    }
    p>a.reg{
        width: 62px;
        height: 30px;
        display: inline-block;
        color: #444444;
        font-size: 14px;
        background: #f9f9f9;
        text-decoration: none;
        border: 1px solid #eee;
        text-align: center;
        line-height: 30px;
    }
    div.footer>p{
        color: #333333;
        font-size: 14px;
    }
</style>
