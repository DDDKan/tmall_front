$(function() {
    var initBigImg = false;
    $("img.smallImage").mouseenter(function() {
        var bigImageURL = $(this).attr("bigImageURL");
        $("img.bigImg").attr("src", bigImageURL);
    })
    // 预加载 大图片加载后调用这个函数
    $("img.bigImg").on(function() {
        if(initBigImg) {
            return;
        }
        $("img.smallImage").each(function() {
            var bigImageURL = $(this).attr("bigImageURL");
            var img = new Image();
            img.src = bigImageURL;
            // 图像加载完成后
            img.onload(function() {
                $("div.img4load").append($(img));
            })
        })
        initBigImg = true;
    })
})