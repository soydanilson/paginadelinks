$("#sol").hide();
$("#vector-2").hide();

$(function(){

    // boton cambiar a nocturno

    $("#luna").click(function(){

        $("#sol").show();
        $("#sol").css("color","#FFC700");


        $("#luna").hide();

        $("body").css("background-color","#272727");

        $(".text").css("color","white");

        $("#div-1").css("background-color","#FFC700");
        $("#p1").css("color","#272727");

        $(".grupo-3").css("background-color","#272727");
        $(".grupo-3").css("border-width","2px");
        $(".grupo-3").css("border-color","#FFFFFF");
        $(".grupo-3").css("border-style","solid");

        $(".i-1").css("color","#FFC700");

        $("#vector-1").hide();
        $("#vector-2").show();

    });

    // boton cambiar a encendido

    $("#sol").click(function(){

        $("#luna").show();

        $("#sol").hide();

        $("body").css("background-color","white");

        $(".text").css("color","black");

        $("#div-1").css("background-color","#D4E6FF");
        $("#p1").css("color","#0053CC");

        $(".grupo-3").css("background-color"," #FFE6DB");
        $(".grupo-3").css("border-width","none");
        $(".grupo-3").css("border-color","#FFFFFF");
        $(".grupo-3").css("border-style","solid");

        $(".i-1").css("color","#E14400");

        $("#vector-1").show();
        $("#vector-2").hide();

    });

});