$(document).ready(function(){
    $("#botao1").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeOut();
        $("#div3").fadeIn(1000);
        $("#div4").fadeOut("slow");
    });
    $("#botao2").click(function(){
        $("#div1, #div2, #div3, #div4").fadeToggle();
    });
});