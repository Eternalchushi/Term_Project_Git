/**
 * 产品详情列表交互js
 */

$(function() {
    // 独家提供的轮播
    $('.ez-banner').tyslide({
        boxh: 500, //轮播的高度
        w: 1200, //图片宽度
        h: 440, //图片高度
        isShow: true, //是否显示控制按钮
        isShowBtn: true, //是否显示左右按钮
        controltop: 20, //控制器按钮上下偏移距离 
        controlsW: 15, //控制按钮宽度
        controlsH: 15, //控制按钮高度
        radius: 10, //圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
        isShowNum: false //是否显示数字
    });

    /* 轮播切换 */
    // 默认后面连个轮播隐藏
    $('.ez-banner:gt(0)').hide();
    // 给导航绑定点击事件
    $('.ez-title ul li').on('mouseenter', function() {
        // 导航切换效果
        $(this).addClass('active').siblings().removeClass('active')

        // 获取索引
        var index = $(this).index();

        // 显示对应内容
        $('.ez-banner').eq(index).show().siblings().hide();
    })
})