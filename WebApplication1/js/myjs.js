$(document).ready(function () {
  
    $(".karte").mouseover(function () {
        $(this).css("cursor", "pointer");
    });

    $(".karte").mouseenter(function () {
            $(this).addClass("enter");
        });

    $(".karte").mouseleave(function () {
            $(this).removeClass("enter");
        });  
});

$(document).ready(function () {
    $("#footer").css("font-weight", "bold");
    $("#mainheader").css("padding", "20px");
    $(".maintext").css("color", "#0769AA ");
});

$(document).ready(function () {
    $("#mainheader").click(function () {
        $(this).css("border-style", "solid");
        $(this).css("border-color", "#0769AA");
        $(".maintext").css("font-size", "25px");
        $("#footer").text("Doppelklick verkleinert wieder...")
    });
});

$(document).ready(function () {
    $("#mainheader").dblclick(function () {
        location.reload();
    });
});

