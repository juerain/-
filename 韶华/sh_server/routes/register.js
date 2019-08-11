// 引入express模块
const express=require("express");
// 创建路由器
const router=express.Router();
// 引入连接池
const pool=require("../pool");


// 创建get请求
router.get("/",(req,res)=>{
    // 获取前端传来的数据
    var uname=req.query.uname;
    var pwd=req.query.pwd;
    var email=req.query.email;
    // 创建sql语句
    var sql="INSERT INTO sh_user VALUES(null,?,?,?)";
    pool.query(sql,[uname,pwd,email],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({"code":1,"msg":"注册成功"});
        }else{
            res.send({"code":-1,"msg":"注册失败"});
        }
    });
});

module.exports=router;