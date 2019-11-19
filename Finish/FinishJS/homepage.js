$("div.rightMenu span").mouseenter(function() {
    // offset返回或设置匹配元素相对于文档的偏移
    var left = $(this).offset().left;
    var top = $(this).offset().top;
    var width = $(this).css("width");
    var destLeft = parseInt(left) + parseInt(width)/2;
    $("img#catear").css("left", destLeft-14.5);
    $("img#catear").css("top", top-20);
    $("img#catear").fadeIn(500);
});

$("div.rightMenu span").mouseleave(function() {
    $("img#catear").hide();
});

function showProductsAsideCategory(cid) {
    $("div.eachCategory[cid = "+cid+"]").css("background-color", "#fff");
    $("div.eachCategory[cid = "+cid+"] a").css("color", "#87cefa");
    $("div.productsAsideCategorys[cid = "+cid+"]").show();
}

function hideProductsAsideCategory(cid) {
    $("div.eachCategory[cid = "+cid+"]").css("background-color", "#e2e2e3");
    $("div.eachCategory[cid = "+cid+"] a").css("color", "#000");
    $("div.productsAsideCategorys[cid = "+cid+"]").hide();
}

$(function() {
    $("div.eachCategory").mouseenter(function() {
        var cid = $(this).attr("cid");
        showProductsAsideCategory(cid);
    });
    $("div.eachCategory").mouseleave(function() {
        var cid = $(this).attr("cid");
        hideProductsAsideCategory(cid);
    });
    $("div.productsAsideCategorys").mouseenter(function() {
        var cid = $(this).attr("cid");
        showProductsAsideCategory(cid);
    });
    $("div.productsAsideCategorys").mouseleave(function() {
        var cid = $(this).attr("cid");
        hideProductsAsideCategory(cid);
    });
});