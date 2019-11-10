$("#nav").load("tb.html")
$("#footer").load("db.html")




var swiper1 = new Swiper('.swipers', {
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
  }
});
for (i = 0; i < swiper1.pagination.bullets.length; i++) {
  swiper1.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
}

var swiper2 = new Swiper('.swiperss', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper3 = new Swiper('.banner1', {
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
  }
});
for (i = 0; i < swiper3.pagination.bullets.length; i++) {
  swiper3.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
}
$(".g-bd-populor-tab .item").click(function(){
  $(".g-bd-populor-tab .item").eq($(this).index()).addClass("active").siblings().removeClass("active")
  $(".popularItem").hide().eq($(this).index()).show();
})
var swiper4 = new Swiper('.swiperms', {
  autoplay: true,
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
for (i = 0; i < swiper4.pagination.bullets.length; i++) {
  swiper4.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
}
var swiper5 = new Swiper('.swipergh', {
  autoplay: true,
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
for (i = 0; i < swiper5.pagination.bullets.length; i++) {
  swiper5.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
}
var swiperfl = new Swiper('.swipersf', {
  autoplay: true,
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
for (i = 0; i < swiperfl.pagination.bullets.length; i++) {
  swiperfl.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
}
var swiper6 = new Swiper('.swipermy', {
  autoplay: true,
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
for (i = 0; i < swiper6.pagination.bullets.length; i++) {
  swiper6.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
}
var swiper7 = new Swiper('.swiperyy', {
  autoplay: true,
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
for (i = 0; i < swiper7.pagination.bullets.length; i++) {
  swiper7.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
}
var swiper8 = new Swiper('.swipersm', {
  autoplay: true,
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
for (i = 0; i < swiper8.pagination.bullets.length; i++) {
  swiper8.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
}
var swiper9 = new Swiper('.swiperqq', {
  autoplay: true,
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
for (i = 0; i < swiper9.pagination.bullets.length; i++) {
  swiper9.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
}

$.get("../json/ys.json", (data) => {
  for (var x = 0; x < data.length; x++) {
    // console.log($(".g-bd-cate-jj-bd").eq(x))

    for (var y = 0; y < data[x].jujia.length; y++) {
      var items = data[x].jujia[y]
      $(".itemListbd").eq(x).append(`
      <li>
          <div class="itemListbd-hd">
              <a href="" class="imgWrap">
                  <div style="width: 100%;height: 100%;">
                      <img src="${items.img1}" alt="">
                  </div>
                  <div style="width: 100%;height: 100%;">
                      <img src="${items.img2}" alt="" class="imgScene">
                  </div>
                  <img src="${items.img3}" alt="" class="promoLogo">
                  <div class="promBanner">
                      <div class="promTitle">
                          <span class="titlt">${items.span1}<br></span>
                          <span class="subTitle">${items.span2}</span>
                      </div>
                      <div class="promContent">${items.div1}</div>
                  </div>
              </a>
          </div>
          <div class="itemListbd-bd">
              <div class="prdtTags"></div>
              <h4 class="names">
                  <a href="">${items.div2}</a>
              </h4>
              <p class="price">
                  <span>${items.span3}</span>
                  <span>${items.span4}</span>
              </p>
          </div>
      </li>
`
      )
    }
    $(".g-bd-cate-jj-bd").eq(x).append(".itemListbd")
  }
})
