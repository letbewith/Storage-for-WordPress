//路由 转跳 fn 
//这样子写 要写死 一定有什么好用的 方法
var express = require('express');
var router = express.Router();

/* GET home page.
*  use mongodb expressCollection
* */
router.get('/', function(req, res) {
    res.render('index', { title: '主页' });
});

// 测试连接  数据库
router.get('/lake', function(req, res) {
    var db = req.db;
    var collection = db.get('lake');

    console.log("模板已加载")

    // 这里么的东西居然是个数组
    collection.find({},{},function(e,docs){

        var wo={};
        for(var i=0;i<docs.length;i++){
            wo[docs[i]["_id"]]=docs[i];
        }
        res.render('testCollection', {
            "title" : wo
        });
        console.log(wo)
    });
   // res.render('testCollection', { title: '主页' });
});


//登陆
router.get('/login', function(req, res) {
  res.render('login', { title: '登陆' });
});

//注册
router.get('/register', function(req, res) {
  res.render('register', { title: '注册' });
});



module.exports = router;
