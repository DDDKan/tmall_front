$(function() {
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