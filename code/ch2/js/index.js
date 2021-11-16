/**
 *  乐购商城首页 js
 * 2021-10-26 
 */
// 当页面加载完毕
$(function() {
    /* 首页大图轮播 */
    $('#banner').tyslide({
        boxh: 425, //轮播的高度
        w: 1000, //图片宽度
        h: 390, //图片高度
        isShow: true, //是否显示控制按钮
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制器按钮上下偏移距离 
        controlsW: 48, //控制按钮宽度
        controlsH: 6, //控制按钮高度
        radius: 0, //圆角度数
        controlsColor: "#ff6600", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
        isShowNum: false //是否显示数字
    });

    /* 图书电子书小轮播 */
    $('#ebooks-banner').tyslide({
        boxh: 223, //轮播的高度
        w: 332, //图片宽度
        h: 223, //图片高度
        isShow: true, //是否显示控制按钮
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制器按钮上下偏移距离 
        controlsW: 30, //控制按钮宽度
        controlsH: 4, //控制按钮高度
        radius: 0, //圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });

    /* 电子书 table切换 */
    var $lis = $('.ebooks .ebooks-nav > li');
    $lis.mouseover(function() {
        // 给自己添加激活类active 把兄弟的都干掉
        $(this).addClass('active').siblings().removeClass('active');
        // 获取index
        var index = $(this).index();

        // 选中内容
        var $ebooksList = $('.ebooks-list');
        // 显示索引等于当前index
        $ebooksList.eq(index).show().siblings('.ebooks-list').hide();
    });

    /* 新书列表手风琴效果 */
    $('.ebooks .right-box ul > li').mouseenter(function() {
        // 所有兄弟：隐藏详情 显示标题
        $(this).siblings().find('.desc').hide(); // 隐藏详情
        $(this).siblings().find('.ebooks-title').show(); // 显示标题

        // 当前: 隐藏标题 显示详情
        $(this).find('.ebooks-title').hide(); // 隐藏标题
        $(this).find('.desc').show(); // 显示详情
    });

    /* 服装 table切换 */
    var $lis = $('.clothes .clothes-nav > li');
    $lis.mouseover(function() {
        // 给自己添加激活类active 把兄弟的都干掉
        $(this).addClass('active-1').siblings().removeClass('active-1');
        // 获取index
        var index = $(this).index();
    });
})