/**
 *  乐购商城首页 js
 * 2021-10-26 
 */
// 当页面加载完毕
$(function(){
    /* 首页大图轮播 */
    $('#bannerInner').tyslide({
        boxh:425,//轮播的高度
        w:1000,//图片宽度
        h:390,//图片高度
        isShow:true,//是否显示控制按钮
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制器按钮上下偏移距离 
        controlsW:48,//控制按钮宽度
        controlsH:6,//控制按钮高度
        radius:0,//圆角度数
        controlsColor:"#ff6600",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
        isShowNum:false //是否显示数字

    })
})