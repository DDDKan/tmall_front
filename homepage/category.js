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