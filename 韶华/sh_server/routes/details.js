// 引入express模块
const express=require("express")
// 创建路由器
const router=express.Router();
// 引入连接池
const pool=require("../pool")

// 创建路由
router.get("/",(req,res)=>{
    var lid=req.query.lid;
    var output={
        details:{},
        pics:[],
        dpics:[]
    }
    if(lid!==undefined){
        var sql1=`select * from sh_details where lid=?`;
        pool.query(sql1,[lid],(err,result)=>{
          if(err) console.log(err);
          output.details=result[0];
          var mid=output.details["lid"];
          var sql2=`select * from sh_details_small where mid=?`;
          pool.query(sql2,[mid],(err,result)=>{
            if(err) console.log(err);
            output.pics=result;
            var tid=output.details["lid"];
            var sql3=`select * from sh_details_tu where tid=?`
            pool.query(sql3,[tid],(err,result)=>{
              if(err) console.log(err);
              output.dpics=result;
              res.send(output);
            })
          })
        })
      }else{
        res.send(output);
      }

})



module.exports=router;

