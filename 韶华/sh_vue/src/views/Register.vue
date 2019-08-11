<template>
    <div>
        <div class="container">
            <header class="head">
                <div class="row">
                    <div class="col-6">
                        <router-link :to="`/`"><img src="../../public/img/index/book_logo.png" alt=""/></router-link>
                        <span class="pl-5 pt-4 d-inline-block register">会员注册</span>
                    </div>
                    <div class="col-6 d-flex justify-content-sm-end">
                        <span class="hyzh">已有会员账号</span>
                        <router-link  :to="`/login/`" class="btn btn-light border reg_btn">登录</router-link>
                    </div>
                </div>
                <hr/>
            </header>
            <div class="row">
                <div class="col m-4 pt-4">
                    <span>用&nbsp;&nbsp;户&nbsp;&nbsp;名：</span>
                    <input v-model="uname" type="text" class="w-50" name="username"/>
                    <span>*</span>
                    <span class="vali_info">请输入3-15位以字母开头的字母或数字</span>
                </div>
            </div>
            <div class="row">
                <div class="col m-4" >
                    <span>&nbsp;密&nbsp;&nbsp;&nbsp;码&nbsp;&nbsp;&nbsp;：</span>
                    <input v-model="pwd" type="password" class="w-50" name="pwd"/>
                    <span>*</span>
                    <span class="vali_info">请输入4-10的字母或数字</span>
                </div>
            </div>
            <div class="row">
                <div class="col m-4">
                    <span>确认密码：</span>
                    <input type="password" class="w-50" name="rpwd"/>
                    <span>*</span>
                    <span class="vali_info">请再一次确认密码</span>
                </div>
            </div>
            <div class="row">
                <div class="col m-4">
                    <span>&nbsp;邮&nbsp;&nbsp;&nbsp;箱&nbsp;&nbsp;&nbsp;：</span>
                    <input v-model="email" type="text" class="w-50" name="email"/>
                    <span>*</span>
                    <span class="vali_info">请输入正确的邮箱</span>
                </div>
            </div>
            <div class="row">
                <div class="col m-4">
                    <span>验&nbsp;&nbsp;证&nbsp;&nbsp;码：</span>
                    <input type="text" class="w-50"/>
                </div>
            </div>
            <div class="row">
                <div class="col m-3 text-center">
                    <input type="checkbox" class="chb" checked/>
                    <span> 我同意“服务条款”及“法律声明”</span>
                </div>
            </div>
            <div class="row">
                <div class="col m-4 text-center">
                    <button @click="commit" class="w-25 comit">提交</button>
                </div>
            </div>
            <div class="row">
                <div class="col m-5 text-center">
                    <span class="copy">Copyright © 2018 好学图书音像商城. All Rights Reserved 本站内容、图片、视频为网站模板演示数据，如有涉及侵犯版权，请联系我们提供书面反馈，我们核实后会立即删除。 　</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            uname:"",
            pwd:"",
            email:""
        }
    },
    methods: {
        commit(){
            // 获取用户名
            var uname=this.uname;
            // 获取密码
            var pwd=this.pwd;
            // 获取邮箱
            var email=this.email;
            var obj={uname:uname,pwd:pwd,email:email}
            this.axios("http://localhost:5050/register",{params:obj})
            .then(res=>{
                console.log(res);
                if(res.data.code==-1){
                    this.$toast("用户名或密码有误")
                }else{
                    this.$router.push("/login")
                }
            })
        }
    },
}
</script>




<style scoped>
    /*会员注册样式*/
.register{
    font-size: 22px;
    color: #313131;
    margin-bottom: 10px;
}
.hyzh{
    margin-top: 45px;
    font-size: 12px;
    color: #545454;
}
.reg_btn{
    width: 60px;
    height: 32px;
    line-height: 16px;
    margin-top: 38px;
}


div>input+span{
    color: red;
}

.vali_info{
    display: none;
}
.vali_success,.vali_fail,.vali_rfail{
    background-repeat:no-repeat;
    background-position:left center;

}
/* 验证消息：验证通过时的样式 */
.vali_success{
    background-image:url("../../public/img/index/ok.png");
    padding-left:20px;
    width:0px;height:20px;
    overflow:hidden;
    position: absolute;
    top: 5px;
    left: 640px;

}
/* 验证消息：验证失败时的样式 */
.vali_fail{
    background-image:url("../../public/img/index/err.png");
    color:Red;
    padding-left:30px;
}
.vali_rfail{
    background-image:url("../../public/img/index/err.png");
    color:Red;
    padding-left:30px;
}

.chb+span{
    color: #666666;
    font-size: 14px;
}
.comit{
    width: 200px;
    height: 40px;
    background: #ff9f19;
    color: #ffffff;
    border: none;
}
.copy{
    color: #333333;
    font-size: 14px;
}
</style>
