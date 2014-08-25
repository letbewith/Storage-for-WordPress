/**
 *  搭建多人博客
 *  express  生成 miao5cm.org 工程
 *  app.js 入口
 * @type {exports}
 * routes 是一个文件夹形式的本地模块 ./routes/index.js，它的功能是为指定路径组织返回内容，相当于MVC 架构中的控制器
 * http://localhost:3000  预览
 * 
 * 目录 分布说明
 *   basePath: 基础地址 通常用于 res.redirect()跳转
 *   views:    视图文件的目录 , 存放模板文件
 *   view  engine  视图模板引擎 ->指定
 *   view  options 全局视图参数
 *   view  cache   使用视图缓存
 *
 *   在 node.js 中模块分为核心模块和文件模块两种
 *
 *   ejs 的标签系统非常简单 和 _.js 一样
 *   <% code %>：JavaScript 代码。
     <%= code %>：显示替换过 HTML 特殊字符的内容。
     <%- code %>：显示原始 HTML 内容
 *
 */
var express = require('express');
var path = require('path');
/*
*  默认的favicon.ico 就是 页面上的图标
*  自定义favicon.ico图标
*  app.use( express.favicon(path.join(__dirname,'/public/images/favicon.ico')) );
*
* */
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes       = require('./routes/index'),
    users        = require('./routes/users');

var app = express();

// view engine setup
// 指定 views 路径 以及 使用 ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon()); //使用默认 图标
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 路由设置
app.use('/', routes);
app.use('/users', users);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler  开发环境
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
