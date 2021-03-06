$(function(){

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        //loop: true,
        mousewheel:true,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        //动画库
        on:{
            init: function(){
                swiperAnimateCache(this); //隐藏动画元素
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function(){
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            }
        },


        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


    })



});