$(function () {
    $("img.leaveMessageImg").on("click", function () {
        $("span.leaveMessageTextareaSpan").show();
        $(this).hide();
        $("div.orderItemSumDiv").css("height", "100px");
    })
})