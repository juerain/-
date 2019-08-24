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
            <div>
                <div class="row">
                <div class="col m-4 pt-4">
                    <span>用&nbsp;&nbsp;户&nbsp;&nbsp;名：</span>
                    <input @focus="focus" @blur="blur" v-model="uname" type="text" class="w-50" name="username"/>
                    <span>*</span>
                    <span class="vali_info">请输入3-15位以字母开头的字母或数字</span>
                </div>
            </div>
            <div class="row pwd_row">
                <div class="col m-4 " >
                    <span>&nbsp;密&nbsp;&nbsp;&nbsp;码&nbsp;&nbsp;&nbsp;：</span>
                    <input  @focus="focus" @blur="blur" v-model="pwd" type="password" class="w-50" name="pwd"/>
                    <span>*</span>
                    <span class="vali_info">请输入4-10的字母或数字</span>
                </div>
            </div>
            <div class="row">
                <div class="col m-4">
                    <span>确认密码：</span>
                    <input @focus="focus" @blur="blur" type="password" class="w-50" name="rpwd"/>
                    <span>*</span>
                    <span class="vali_info">请再一次确认密码</span>
                </div>
            </div>
            <div class="row">
                <div class="col m-4">
                    <span>&nbsp;邮&nbsp;&nbsp;&nbsp;箱&nbsp;&nbsp;&nbsp;：</span>
                    <input @focus="focus" @blur="blur" v-model="email" type="text" class="w-50" name="email"/>
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
                    <button @click="commit" class="w-25 comit">注册</button>
                </div>
            </div>
            <div class="row">
                <div class="col m-5 text-center">
                    <span class="copy">Copyright © 2018 好学图书音像商城. All Rights Reserved 本站内容、图片、视频为网站模板演示数据，如有涉及侵犯版权，请联系我们提供书面反馈，我们核实后会立即删除。 　</span>
                </div>
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
        },
        focus(e){
            var txtName=document.getElementsByName("username")[0];
            var txtPwd=document.getElementsByName("pwd")[0];
            var txtRpwd=document.getElementsByName("rpwd")[0];
            var txtEmail=document.getElementsByName("email")[0];
            var span=e.target.parentNode.children[3];
            span.className="";
        },
        vali(reg){
            // 定义公用的正则验证函数

            // 获得需要修改的元素对象
            var span=e.target.parentNode.children[3];
            // 如果正则表达式验证通过，就把span的样式改为vali_success
            if(reg.test(e.target.value)==true){
                span.className="vali_success";
            }else{
                // 否则，就改为vali_fail
                span.className="vali_fail";
            }
        },
        blur(e){
            var reg=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
            // 调用公用的vali函数，调用call函数，改变this的指向
            vali.call(e.target,reg);
            // 定义正则表达式
            var reg=/^[a-zA-Z0-9]{4,10}$/;
            // 调用公用的vali函数，调用call函数，改变this的指向
            vali.call(e.target,reg);
            // 定义正则表达式
            // var reg=/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
            // // 调用公用的vali函数，调用call函数，改变this的指向
            // vali.call(e.target,reg);
            // var span=e.target.parentNode.children[3];
            // if(e.target.value===""){
            //     span.className="vali_fail";
            //     span.innerHTML="<span style='color:red'>密码不能为空<span>";
            // }else if(e.target.value===txtPwd.value){
            //     span.className="vali_success";
            // }else{
            //     span.innerHTML="<span style='color:red'>密码不一致<span>";
            //     span.className="vali_rfail";
            // }
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
    top: 24px;
    left: 626px;

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
