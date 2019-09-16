var express = require('express');//获取npm提供的express对象

var router = express.Router();//通过express提供的router获取一个新的路由对象

router.get('/',function(req,res){
    res.render('register1');
});//get方法第一个为跳转的路径，第二个参数是回调函数
module.exports=router;
