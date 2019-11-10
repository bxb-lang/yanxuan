$("#header").load("../header.html")
$("#foot").load("../foot.html")

var swiper1 = new Swiper('.swiper-container1', {
    loop: true,
    autoplay: true,
    effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }

});
for (i = 0; i < swiper1.pagination.bullets.length; i++) {
    swiper1.pagination.bullets[i].onmouseover = function () {
        this.click();
    };
}

$.get("../json/zc.json", (data) => {
    // console.log(data)
    $(data.start).each((index, item) => {
        $(".m-itemList1").append(
            `
            <div class="m-item">
                <div class="u-pic">
                    <img
                        src="${item.img}">
                </div>
                <div class="m-info">
                    <p class="u-name">${item.pUp}</p>
                    <p class="u-desc">${item.pDowm}</p>
                    <div class="m-progress">
                        <div class="progress" style="width:${item.progressBar};">
                            <div class="u-percent">${item.progressBar}</div>
                        </div>
                    </div>
                    <div class="m-detail-small">
                        <div>
                            <p class="text">${item.priceCount}</p>
                            <p class="desc">已筹金额</p>
                        </div>
                        <div>
                            <p class="text">${item.people}</p>
                            <p class="desc">支持人数</p>
                        </div>
                        <div>
                            <p class="text">${item.yutime}</p>
                            <p class="desc">剩余时间</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        )
    })
    $(data.ending).each((index, item) => {
        $(".m-itemList2").append(
            `
            <div class="m-item">
                <div class="u-pic">
                    <img
                        src="${item.img}">
                </div>
                <div class="m-info">
                    <p class="u-name">${item.pUp}</p>
                    <p class="u-desc">${item.pDowm}</p>
                    <div class="m-progress">
                        <div class="progress" style="width:${item.progressBar};">
                            <div class="u-percent">${item.progressBar}</div>
                        </div>
                    </div>
                    <div class="m-detail-small">
                        <div>
                            <p class="text">${item.priceCount}</p>
                            <p class="desc">已筹金额</p>
                        </div>
                        <div>
                            <p class="text">${item.people}</p>
                            <p class="desc">支持人数</p>
                        </div>
                        <div>
                            <p class="text">${item.yutime}</p>
                            <p class="desc">剩余时间</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        )
    })
})