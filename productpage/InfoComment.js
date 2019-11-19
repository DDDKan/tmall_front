$(function() {
    $("div.productReviewDiv").hide();
    $("a.productDetailTopReviewLink").click(function() {
        $("div.productDetailDiv").hide();
        $("div.productReviewDiv").show();
    })
    $("a.productReviewTopPartSelectedLink").click(function() {
        $("div.productDetailDiv").show();
        $("div.productReviewDiv").hide();
    })
})