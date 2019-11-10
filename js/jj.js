$("#nav").load("tb.html")
$("#footer").load("db.html")
var swiper = new Swiper('.banner', {
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
for (i = 0; i < swiper.pagination.bullets.length; i++) {
    swiper.pagination.bullets[i].onmouseover = function () {
        this.click();
    };
}

$.get("../json/jj.json", (data) => {
    // console.log(data)
    for (var x = 0; x < data.length; x++) {
        console.log($(".a-content").eq(x))
        $(".a-content").eq(x).append(
            `
            <div class="m-Level2Category">
                            <div class="hd">
                                <p class="title">
                                    <span class="name">${data[x].title}</span>
                                </p>
                                <p class="desc">${data[x].title1}</p>
                            </div>
                            <div class="m-itemList">
                                
                            </div>
                        </div>
            
            `
        )
        for (var y = 0; y < data[x].neir.length; y++) {
            // console.log(data[x].neir)
            var items = data[x].neir[y]
            $(".m-itemList").eq(x).append(
                `
                <li class="items">
                                    <div class="showScene">
                                        <div class="hds">
                                            <a href="">
                                                <img class="img1" src="${items.img}"
                                                    alt="">
                                                <div>
                                                    <img class="img2" src="${items.img1}"
                                                        alt="">
                                                </div>
                                                <img class="imglogo" src="${items.img2}"
                                                    alt="">
                                                <div class="promBanner">
                                                    <div class="promTitle">
                                                        <span class="titlt">${items.span}<br></span>
                                                        <span class="subTitle">${items.span1}</span>
                                                    </div>
                                                    <div class="promcontent" style="color: #fff;height: 30px;line-height: 30px;">${items.content}</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="bd">
                                            <div class="prdtTags">
                                                <span class="m-itemTag ">${items.span2}</span>
                                            </div>
                                            <h4 class="name">
                                                <a href="">
                                                    <span>${items.span3}</span>
                                                </a>
                                            </h4>
                                            <p class="prices">
                                                <span>
                                                    <span>${items.span4}</span>
                                                </span>
                                                <span class="counterPrice">
                                                    <span>${items.span5}</span>
                                                </span>
                                            </p>
                                            <div class="bd-bo">
                                                <hr>
                                                <p class="desc">${items.p}</p>
                                            </div>
                                        </div>
                                    </div>
                </li>
                `
            )
        }
        // $(".m-itemList").eq(x).append(".items")
    }
})
