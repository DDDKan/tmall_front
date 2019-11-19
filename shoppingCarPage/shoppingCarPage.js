function formatMoney(num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num)) {
        num = "0";
    }
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10) {
        cents = "0" + cents;
    }
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
        num = num.substring(0, num.length - (4 * i + 3)) + ',' +
            num.substring(num.length - (4 * i + 3));
    }
    return (((sign) ? '' : '-') + num + '.' + cents);
}

function syncCreateOrderButton() {
    var selectAny = false;
    $("img.cartProductItemIfSelected").each(function () {
        if ("selectit" == $(this).attr("selectit")) {
            selectAny = true;
        }
    })
    if (selectAny) {
        // disabled 按钮不可点击
        $("button.createOrderButton").css("background-color", "#C40000");
        $("button.createOrderButton").removeAttr("disabled");
    } else {
        $("button.createOrderButton").css("background-color", "#AAA");
        $("button.createOrderButton").attr("disabled", "disabled");
    }
}

function syncSelect() {
    var selectAll = true;
    $("img.cartProductItemIfSelected").each(function () {
        if ($(this).attr("selectit") == "false") {
            selectAll = false;
        }
    })
    if (selectAll) {
        $("img.selectAllItem").attr("selectit", "selectit");
        $("img.selectAllItem").attr("src", "C:/Users/guozhenwei/Desktop/tmall/picture/cartSelected.png");
    } else {
        $("img.selectAllItem").attr("selectit", "false");   
        $("img.selectAllItem").attr("src", "C:/Users/guozhenwei/Desktop/tmall/picture/cartNotSelected.png");
    }
}

function calcCartSumPriceAndNumber() {
    var sum = 0;
    var totalNumber = 0;
    $("img.cartProductItemIfSelected[selectit='selectit']").each(function () {
        var oiid = $(this).attr("oiid");
        var price = $("span.cartProductItemSmallSumPrice[oiid="+oiid+"]").text();
        price = price.replace(/,/g, "");
        price = price.replace(/￥/g, "");
        sum += new Number(price);
        var num = $("input.orderItemNumberSetting[oiid="+oiid+"]").val();
        totalNumber += new Number(num);
    })
    $("span.cartSumPrice").html("￥" + formatMoney(sum));
    $("span.cartTitlePrice").html("￥" + formatMoney(sum));
    $("span.cartSumNumber").html(totalNumber);
}

function syncPrice(pid, num, price) {
    $("input.orderItemNumberSetting[pid="+pid+"]").val(num);
    var cartProductItemSmallSumPrice = formatMoney(num * price);
    $("span.cartProductItemSmallSumPrice[pid="+pid+"]").html("￥" + cartProductItemSmallSumPrice);
    calcCartSumPriceAndNumber();
}

$(function () {
    // 选中一种商品
    $("img.cartProductItemIfSelected").on("click", function () {
        var selectit = $(this).attr("selectit");
        if (selectit == "selectit") {
            $(this).attr("selectit", "false");
            $(this).attr("src", "C:/Users/guozhenwei/Desktop/tmall/picture/cartNotSelected.png");
            $(this).parents("tr.cartProductItemTR").css("background-color", "#FFF");
        } else {
            $(this).attr("selectit", "selectit");
            $(this).attr("src", "C:/Users/guozhenwei/Desktop/tmall/picture/cartSelected.png");
            $(this).parents("tr.cartProductItemTR").css("background-color", "#FFF8E1");
        }
        syncSelect();
        syncCreateOrderButton();
        calcCartSumPriceAndNumber();
    })
    // 全选
    $("img.selectAllItem").on("click", function () {
        var selectit = $(this).attr("selectit");
        if (selectit == "selectit") {
            $("img.selectAllItem").attr("selectit", "false");
            $("img.selectAllItem").attr("src", "C:/Users/guozhenwei/Desktop/tmall/picture/cartNotSelected.png");
            $("img.cartProductItemIfSelected").attr("selectit", "false");
            $("img.cartProductItemIfSelected").attr("src", "C:/Users/guozhenwei/Desktop/tmall/picture/cartNotSelected.png");
            $("tr.cartProductItemTR").css("background-color", "#FFF");
        } else {
            $("img.selectAllItem").attr("selectit", "selectit");
            $("img.selectAllItem").attr("src", "C:/Users/guozhenwei/Desktop/tmall/picture/cartSelected.png");
            $("img.cartProductItemIfSelected").attr("selectit", "selectit");
            $("img.cartProductItemIfSelected").attr("src", "C:/Users/guozhenwei/Desktop/tmall/picture/cartSelected.png");
            $("tr.cartProductItemTR").css("background-color", "#FFF8E1");
        }
        syncCreateOrderButton();
        calcCartSumPriceAndNumber();
    })
    // 增加数量
    $("a.numberPlus").on("click", function () {
        var pid = $(this).attr("pid");
        var stock = $("span.orderItemStock[pid="+pid+"]").text();
        var price = $("span.orderItemPromotePrice[pid="+pid+"]").text();
        var num = $("input.orderItemNumberSetting[pid="+pid+"]").val();
        num++;
        if (num > stock) {
            num = stock;
        }
        syncPrice(pid, num, price);
    })
    // 减少数量
    $("a.numberMinus").on("click", function () {
        var pid = $(this).attr("pid");
        var price = $("span.orderItemPromotePrice[pid="+pid+"]").text();
        var num = $("input.orderItemNumberSetting[pid="+pid+"]").val();
        num--;
        if (num <= 0) {
            num = 1;
        }
        syncPrice(pid, num, price);
    })
    // 直接修改数量
    $("input.orderItemNumberSetting").keyup(function () {
        var pid = $(this).attr("pid");
        var stock = $("span.orderItemStock[pid="+pid+"]").text();
        var num = $("input.orderItemNumberSetting[pid="+pid+"]").val();
        var price = $("span.orderItemPromotePrice[pid="+pid+"]").text();
        num = parseInt(num);
        if (isNaN(num)) {
            num = 1;
        }
        if (num <= 0) {
            num = 1;
        }
        if (num > stock) {
            num = stock;
        }
        syncPrice(pid, num, price);
    })
})