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
        controltop: 0, //控制器按钮上下偏移距离 
        controlsW: 15, //控制按钮宽度
        controlsH: 10, //控制按钮高度
        radius: 0, //圆角度数
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

    /* 换一批 */
    // 定一个索引
    // 上下划
    var index = 0;
    $('.change').click(function() {
        // 自增
        index++;
        // 边界判断
        index = index > 3 ? 0 : index;
        // 让里面的 inner-box 运动
        $('.inner-box').stop(true).animate({
            top: -index * 500
        }, function() {
            if (index === 3) {
                index = 0;
                $('.inner-box').css('top', 0);
            }
        })
    })

    // 左右滑动
    // var index = 0;
    // $('.change').click(function() {
    //     // 自增
    //     index++;
    //     // 边界判断
    //     // 让里面的 inner-box 运动
    //     $('.inner-box').stop(true).animate({
    //         left: -index * 1200
    //     }, function() {
    //         if (index === 3) {
    //             index = 0;
    //             $('.inner-box').css('left', 0);
    //         }
    //     })
    // })
})