$(function(){

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        //loop: true,
        mousewheel:true,

        // �����Ҫ��ҳ��
        pagination: {
            el: '.swiper-pagination',
        },

        //������
        on:{
            init: function(){
                swiperAnimateCache(this); //���ض���Ԫ��
                swiperAnimate(this); //��ʼ����ɿ�ʼ����
            },
            slideChangeTransitionEnd: function(){
                swiperAnimate(this); //ÿ��slide�л�����ʱҲ���е�ǰslide����
            }
        },


        // �����Ҫǰ�����˰�ť
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


    })



});