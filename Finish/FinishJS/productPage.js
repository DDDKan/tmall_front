$(function() {
    // productpicture
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

    // InfoComment
    $("div.productReviewDiv").hide();
    $("a.productDetailTopReviewLink").click(function() {
        $("div.productDetailDiv").hide();
        $("div.productReviewDiv").show();
    })
    $("a.productReviewTopPartSelectedLink").click(function() {
        $("div.productDetailDiv").show();
        $("div.productReviewDiv").hide();
    })

    // basicInfo
    var stock = 66;
    $("input.productNumberSetting").keyup(function() {
        var num = $(this).val();
        num = parseInt(num);
        if(isNaN(num)) {
            $(this).val("");
            return;
        }
        if(num < 1) {
            num = 1;
        }
        if(num > stock) {
            num = stock;
        }
        $(this).val(num);
    })
    $("a.increaseNumber").on("click", function() {
        var num = $("input.productNumberSetting").val();
        num = parseInt(num);
        if(isNaN(num)) {
            num = 1;
        } else {
            num++;
        }
        if(num > stock) {
            num = stock;
        }
        $("input.productNumberSetting").val(num);
    })
    $("a.decreaseNumber").on("click", function() {
        var num = $("input.productNumberSetting").val();
        num = parseInt(num);
        if(isNaN(num)) {
            num = 1;
        } else {
            num--;
        }
        if(num < 1) {
            num = 1;
        }
        $("input.productNumberSetting").val(num);
    })
})