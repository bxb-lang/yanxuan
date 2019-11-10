



$.get("../json/tb.json", (data) => {
    // console.log(data)
    $(data).each((index, item) => {
        //  console.log(item.title)
        if (index < 9 && index > 0) {
            $(
                `
                 <li class="yx-cp-firstItem yx-cp-tabNav-item">
                        <a href="jj.html" class="yx-cp-topLevel">${item.title}</a>
                        <div class="yx-cp-tabNav-dropdown">
                        </div>
                    </li>
                 `
            ).appendTo(".yx-cp-m-tabNav")
        } else {
            $(
                `
                 <li class="yx-cp-firstItem yx-cp-tabNav-item">
                 <a href="" class="yx-cp-topLevel">${item.title}</a>
                 </li>
                 `
            ).appendTo(".yx-cp-m-tabNav")
        }
        var list = data[index].fenlei
        // console.log(list)
        $(list).each((index, item) => {

            $(
                `
                <ul class="yx-cp-cateGroup li1">
                    <li class="li1-bottom">${item.fenlei1}</li>
                </ul>
                `
            ).appendTo($(".yx-cp-tabNav-dropdown").last())
            var lis = list[index].fenlei2
            var imgs = list[index].image
            // console.log(lis)
            // console.log(imgs)
            $(lis).each((index, item) => {
                $(
                    `
                    <li class="li1-bot">
                    <img src="${imgs[index]}" alt="">
                        <span class="spans">${lis[index]}</span>
                    </li>   
                    `
                ).appendTo($(".li1").last())
            })
        })
    })
})










































// oHttp.get("../json/ys.json",(err,data)=>{
//     if (err) {
//         console.log(err)
//     } else{
//         // console.log(data)
//         const jujia=data.jujia
//         const nli=jujia.nr
//         console.log(jujia)
//         console.log(nli)
//         let html=""
//         jujia.forEach((jujia) => {
//             html+= `
//             <ul class="yx-cp-cateGroup li1">
//                                 <li class="li1-bottom">${jujia.title}</li>
//                                 <li class="li1-bot">

//                                 </li>
//                             </ul>

//             `
//         });

//         htsu.innerHTML=html;



//     }
// })