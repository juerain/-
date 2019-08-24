// 引入express模块
const express=require("express");
// 创建路由器
const router=express.Router();
// 引入连接池
const pool=require("../pool");

// 创建请求
router.get("/",(req,res)=>{
    var lid=req.query.lid;
    console.log(lid);
    var title=req.query.title;
    var price=req.query.price;
    var count=req.query.count;
    var sql="SELECT cid FROM sh_cart WHERE lid=?";
    
    pool.query(sql,[lid],(err,result)=>{
        var sql="";
        if(result.length==0){
            sql=`INSERT INTO sh_cart VALUES(null,${lid},'${title}',${price},${count})`;
        }else{
            sql=`UPDATE sh_cart SET count=count+1 WHERE lid=${lid}`;
        }
        pool.query(sql,(err,result)=>{
            if(err) throw err;
            if(result.affectedRows>0){
              res.send({"code":1,"msg":"添加成功"});
            }else{
              res.send({"code":1,"msg":"添加失败"});
            }
          });
    });
   
    
  });

  module.exports=router;