// 引入express模块
const express=require("express");
//创建路由器
var router=express.Router();
// 引入连接池
const pool=require("../pool"); 

// 创建get请求
router.get("/",(req,res)=>{
    // 创建sql语句，从数据库中请求数据
    var sql=`SELECT * FROM sh_pro_center where seq_recommended!=0 order by seq_recommended`;
    // 请求数据
    pool.query(sql,[],(err,result)=>{
        console.log(1);
        if(err){
            console.log(err);

        }else{
            res.send(result);
        }
    });
});

module.exports=router



