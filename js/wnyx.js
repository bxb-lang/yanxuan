$("#nav").load("tb.html")
$("#footer").load("db.html")

var swiper1 = new Swiper('.swipers1', {
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
for (i = 0; i < swiper1.pagination.bullets.length; i++) {
    swiper1.pagination.bullets[i].onmouseover = function () {
      this.click();
    };
}
$(".w-yxSpaceTabList .tabItem").click(function(){
    $(".w-yxSpaceTabList .tabItem").eq($(this).index()).addClass("active").siblings().removeClass("active")
    $(".maincont01").hide().eq($(this).index()).show();
})
