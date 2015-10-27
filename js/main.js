$('.topnav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset:0 });
    return false;
});

$('.btn-up').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset:0 });
    return false;
});

$(function() {
    $(".btn-up").hide();
    $(window).scroll(function() {
        if($(this).scrollTop() > 200) {
            $('.btn-up').fadeIn();
        } else {
            $('.btn-up').fadeOut();
        }
    });
});


// ----- Маска ----------
jQuery(function($){
    $("input[name='phone']").mask("+7(999) 999-9999");
});



$('.reply ul').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.reply__nav.prev').click(function(){
    $('.reply ul').slick('slickPrev');
});

$('.reply__nav.next').click(function(){
    $('.reply ul').slick('slickNext');
});


$('.gallery ul').slick({
    arrows: false,
    autoplay: false,
    dots: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.gallery__nav.prev').click(function(){
    $('.gallery ul').slick('slickPrev');
});

$('.gallery__nav.next').click(function(){
    $('.gallery ul').slick('slickNext');
});



//  Modal

$(".btn-modal").fancybox({
    'padding'    : 0,
    'tpl'        : {
        closeBtn : '<a title="Close" class="btn_close" href="javascript:;"></a>'
    }
});


// Map

ymaps.ready(init);

var myMap1,
    myMap2,
    myMap3,
    myPlacemark1,
    myPlacemark2,
    myPlacemark3;

function init(){
    myMap1 = new ymaps.Map("map1", {
        center: [55.8694,49.1043],
        zoom: 14,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark1 = new ymaps.Placemark([55.8655,49.1041], {
        hintContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [40, 46],
        iconImageOffset: [-20, -58]
    });

    myMap1.behaviors.disable('scrollZoom');
    myMap1.behaviors.disable('multiTouch');
    myMap1.geoObjects.add(myPlacemark1);




    myMap2 = new ymaps.Map("map2", {
        center: [55.7871,49.2398],
        zoom: 14,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark2 = new ymaps.Placemark([55.7812,49.2396], {
        hintContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [40, 46],
        iconImageOffset: [-20, -58]
    });

    myMap2.behaviors.disable('scrollZoom');
    myMap2.behaviors.disable('multiTouch');
    myMap2.geoObjects.add(myPlacemark2);




    myMap3 = new ymaps.Map("map3", {
        center: [55.8060,49.1932],
        zoom: 14,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark3 = new ymaps.Placemark([55.8047,49.1929], {
        hintContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [40, 46],
        iconImageOffset: [-20, -58]
    });

    myMap3.behaviors.disable('scrollZoom');
    myMap3.behaviors.disable('multiTouch');
    myMap3.geoObjects.add(myPlacemark3);
}


$('.tabs').tabs();



$(document).ready(function() {

    $('.btn-send').click(function() {

        $('body').find('form:not(this)').children('div').removeClass('red'); //удаление всех сообщение об ошибке(валидатора)
        var answer = checkForm($(this).closest('form').get(0)); //ответ от валидатора
        if(answer != false)
        {
            var $form = $(this).closest('form'),
                name    =     $('input[name="name"]', $form).val(),
                type    =     $('input[name="type"]', $form).val(),
                phone   =     $('input[name="phone"]', $form).val(),
                email   =     $('input[name="email"]', $form).val(),
                form    =     $('input[name="form"]', $form).val(),
                message =     $('textarea[name="message"]', $form).val();
            console.log(name, phone, email, form, type, message);
            $.ajax({
                type: "POST",
                url: "form-handler.php",
                data: {name: name, phone: phone, email:email, form:form, type:type, message:message}
            }).done(function(msg) {
                $('form').find('input[type=text], textarea').val('');
                console.log('удачно');
                document.location.href = "./done.html";
            });
        }
    });


    $(".scroll").each(function () { // анимация по скролу(используйте этот) достаточно добавить анимируемому блоку класс 'scroll' а css анимацию писать так: '.animated.класс_блока'
        var block = $(this);
        $(window).scroll(function() {
            var top = block.offset().top;
            var bottom = block.height()+top;
            top = top - $(window).height();
            var scroll_top = $(this).scrollTop();
            if ((scroll_top > top) && (scroll_top < bottom)) {
                if (!block.hasClass("animated")) {
                    block.addClass("animated");
                }
            } else {
              //  block.removeClass("animated");
            }
        });
    });

});