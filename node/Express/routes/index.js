//路由 转跳 fn 
//这样子写 要写死 一定有什么好用的 方法
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '主页' });
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
