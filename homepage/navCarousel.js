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