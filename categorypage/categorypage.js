$(function () {
    $("input.sortBarPrice").keyup(function () {
        var num = $(this).val();
        if (num.length == 0) {
            $("div.productUnit").show();
            return;
        }
        num = parseInt(num); // 解析一个字符串，并返回一个整数 只取前面的数字
        if (isNaN(num)) {
            num = 1;
        }
        if (num <= 0) {
            num = 1;
        }
        $(this).val(num); // this.val() = num
        var beginPrice = $("input.beginPrice").val();
        var endPrice = $("input.endPrice").val();
        if (!isNaN(beginPrice) && !isNaN(endPrice)) { // isNaN 判断是否是数字
            $("div.productUnit").hide();
            $("div.productUnit").each(function () {
                var price = $(this).attr("price");
                // price = new Number(price);
                price = parseFloat(price);
                // 纯数字与数字型字符串之间比较把字符串转换为数字
                if (price >= beginPrice && price <= endPrice) {
                    $(this).show();
                }
            });
        }
    });
});