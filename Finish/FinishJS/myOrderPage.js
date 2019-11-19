$(function () {
    $("a[orderstatus]").on("click", function () {
        var orderstatus = $(this).attr("orderstatus");
        if (orderstatus == "all") {
            $("table[orderstatus]").show();
        } else {
            $("table[orderstatus]").hide();
            $("table[orderstatus="+orderstatus+"]").show();
        }
        $("div.boughtDiv div.orderType div").removeClass("selectedOrderType");
        $(this).parent("div").addClass("selectedOrderType");
    })
    // ? ? ?
    $("a.deleteOrderLink").click(function(){
        deleteOrderid = $(this).attr("oid");
        deleteOrder = false;
        $("#deleteConfirmModal").modal("show");
    });
    $("button.deleteConfirmButton").click(function(){
        deleteOrder = true;
        $("#deleteConfirmModal").modal('hide');
    });
    $('#deleteConfirmModal').on('hidden.bs.modal', function (e) {
        if (deleteOrder) {
            var page="foredeleteOrder";
            $.post(
                page,
                {
                    "oid": deleteOrderid
                },
                function (result) {
                    if ("success" == result) {
                        $("table.orderListItemTable[oid="+deleteOrderid+"]").hide();
                    } else {
                        location.href = "login.jsp";
                    }
                }
            );
        }
    })
})