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

    /* 服装轮播 */
    $('#clothes-banner').tyslide({
        boxh: 336, //轮播的高度
        w: 426, //图片宽度
        h: 336, //图片高度
        isShow: true, //是否显示控制按钮
        isShowBtn: false, //是否显示左右按钮
        controltop: 10, //控制器按钮上下偏移距离 
        controlsW: 20, //控制按钮宽度
        controlsH: 5, //控制按钮高度
        radius: 0, //圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    /* 服装 table切换 */
    $('.clothes .clothes-nav li').mouseenter(function() {
        // 导航切换
        $(this).addClass('active-1').siblings('li').removeClass('active-1')
            // 获取索引
        var index = $(this).index();
        $('.clothe .clothes-content > .clothes-list').eq(index).show().siblings('.clothes-list').hide();
    })
    $lis.mouseover(function() {
        // 给自己添加激活类active 把兄弟的都干掉
        $(this).addClass('active-1').siblings().removeClass('active-1');
        // 获取index
        var index = $(this).index();
    });
    /* 户外运动table切换 */
    $('#sports-banner').tyslide({
        boxh: 336, //轮播的高度
        w: 426, //图片宽度
        h: 336, //图片高度
        isShow: true, //是否显示控制按钮
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制器按钮上下偏移距离 
        controlsW: 20, //控制按钮宽度
        controlsH: 5, //控制按钮高度
        radius: 0, //圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    $('.sport .clothes-nav li').mouseenter(function() {
        // 导航切换
        $(this).addClass('active-1').siblings('li').removeClass('active-1')
            // 获取索引
        var index = $(this).index();
        $('.sport .clothes-content > .clothes-list').eq(index).show().siblings('.clothes-list').hide();
    })

    /* 童装table切换 */
    $('#children-clothes-banner').tyslide({
        boxh: 336, //轮播的高度
        w: 426, //图片宽度
        h: 336, //图片高度
        isShow: true, //是否显示控制按钮
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制器按钮上下偏移距离 
        controlsW: 20, //控制按钮宽度
        controlsH: 5, //控制按钮高度
        radius: 0, //圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    $('.children-clothes .clothes-nav li').mouseenter(function() {
        // 导航切换
        $(this).addClass('active-1').siblings('li').removeClass('active-1')
            // 获取索引
        var index = $(this).index();
        $('.children-clothes .clothes-content > .clothes-list').eq(index).show().siblings('.clothes-list').hide();
    })

    /* 家具 */
    $('#daily-banner').tyslide({
        boxh: 336, //轮播的高度
        w: 426, //图片宽度
        h: 336, //图片高度
        isShow: true, //是否显示控制按钮
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制器按钮上下偏移距离 
        controlsW: 20, //控制按钮宽度
        controlsH: 5, //控制按钮高度
        radius: 0, //圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    $('.daily .clothes-nav li').mouseenter(function() {
        // 导航切换
        $(this).addClass('active-1').siblings('li').removeClass('active-1')
            // 获取索引
        var index = $(this).index();
        $('.daily .clothes-content > .clothes-list').eq(index).show().siblings('.clothes-list').hide();
    })

    /* 推广商品切换 */
    $('.promotion .top ul li').mouseenter(function() {
        //导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active')

        // 内容切换
        // 获取对应的索引
        var index = $(this).index(); // 0=> left:0*1170px, 1 => left: -1*1170px, 3 => left: -3*1170px
        // 左右移动
        $('.promotion .content .inner-box').animate({
            'left': -index * 1170
        }, 1000)

        // 上下移动
        // $('.promotion .content .inner-box').animate({
        //     'top': index * 600
        // }, 1000)
    })

    /* 二维码滑出效果 */
    $('.qr-code .ticket').hover(function() {
        // 让二维码滑出来
        $('.qr-code div').stop(true).animate({
            left: -100
        })
    }, function() {
        // 让二维码收回来
        $('.qr-code div').stop(true).animate({
            left: 0
        })
    })

    /* 顶部搜索框交互 */
    $(document).scroll(function() {
        // 获取到顶部的距离
        var topDistance = $('html,body').scrollTop();
        // 判断
        if (topDistance > 500) {
            $('.top-search-box').slideDown(300)
        } else {
            $('.top-search-box').slideUp(300)
        }
    })

    /* 楼梯跳转 */
    $('.floor li').click(function() {
        // 获取索引
        var index = $(this).index();
        // 选中每一个板块到顶部的偏移
        var topOffset = $('.floorBox').eq(index).offset().top;

        // 让滚动条滚到这个位置
        $('html,body').animate({
            scrollTop: topOffset - 50
        })
    })

    /* 楼梯交互 */
    $(document).scroll(function() {
        // 获取到顶部的距离
        var topDistance = $('html,body').scrollTop();
        // 判断
        if (topDistance > 965) {
            $('.floor').slideDown(200)
        } else {
            $('.floor').slideUp(200)
        }
    })
})