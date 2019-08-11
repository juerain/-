// 引入express模块
const express=require("express");
// 创建路由器
const router=express.Router();
// 引入连接池
const pool=require("../pool");

// 创建get请求
router.get("/",(req,res)=>{
    // 获取用户名
    var uname=req.query.uname;
    // 获取密码
    var upwd=req.query.upwd;
    // 创建sql语句
    var sql="SELECT uid FROM sh_user WHERE uname=? AND upwd=?";
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({"code":-1,"msg":"用户名或密码有误"});
        }else{
            res.send({"code":1,"msg":"登录成功"});
        }
    });
});

module.exports=router;