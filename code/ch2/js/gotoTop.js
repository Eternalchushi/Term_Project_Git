$(function() {
    /* 返回顶部 */
    //绑定滚动事件
    $(document).scroll(function() {
        //获取距离顶部的位置
        var topDistance = $('html,body').scrollTop();
        // 判断
        if (topDistance > 500) {
            $('.backToTop').fadeIn();
        } else {
            $('.backToTop').fadeOut();
        }
    })

    // 返回顶部功能
    $('.backToTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 300)
    })
})