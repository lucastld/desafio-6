$(document).ready(function(){
	$("#menu #ex1").click(function(){
		$("#resposta").load("exemplo1.html");
	});
});
$(document).ready(function(){
    $("#titulo1").hover(function(){
          $("#p1").text("Entrou no título!"); 
    },
    function(){
        $("#p1").text("Saiu do título!");
    });
});
          
$(document).ready(function(){
    $("#menu #ex2").click(function(){
        $("#resposta").load("exemplo2.html");
    });
});
$(document).ready(function(){
    $("#titulo2").mousedown(function(){
        $("#p2").text("Apertou o botão!");
    });
    $("#titulo2").mouseup(function(){
        $("#p2").text("Soltou o botão!")
    });
});
    
    
$(document).ready(function(){
   $("#ex3").click(function(){
		$("#resposta").load("exemplo3.html");
	});
});
$(document).ready(function(){
    $("#titulo3").mouseenter(function(){
        $("#p3").text("Mouse posicionado no texto!");
    });
    $("#titulo3").mouseleave(function(){
        $("#p3").text("Mouse saiu do texto!");
    });
});
    
    
$(document).ready(function(){
	$("#ex4").click(function(){
		$("#resposta").load("exemplo4.html");
	});
});
$(document).ready(function(){
    $("#titulo4").mouseover(function(){
        $("#p4").text("Evento disparado!");
    });
});
    
$(document).ready(function(){
	$("#ex5").click(function(){
		$("#resposta").load("exemplo5.html");
	}); 
});
$(document).ready(function(){
    $("#button5").click(function(){
        alert($("#a5").attr("href"));
    });
});
    

$(document).ready(function(){
	$("#ex6").click(function(){
		$("#resposta").load("exemplo6.html");
	});
});
$(document).ready(function(){
    $("#button6").click(function(){
        $("#href6").attr("href", "http://www.fagoc.br/");
        alert($("#href6").attr("href"));
    });
});
    
    
$(document).ready(function(){
	$("#ex7").click(function(){
		$("#resposta").load("exemplo7.html");
	});
});
$(document).ready(function(){
    $("#button7").click(function(){
        $("#titulo7").addClass("exemplo7");
    });
});


$(document).ready(function(){
	$("#ex8").click(function(){
		$("#resposta").load("exemplo8.html");
	});
});
$(document).ready(function(){
    $("#button8").click(function(){
        $("#titulo8").removeClass("exemplo8")
    });
});


$(document).ready(function(){
	$("#ex9").click(function(){
		$("#resposta").load("exemplo9.html");
	});
});
$(document).ready(function(){
    $("#button9").click(function(){
        $("#titulo9").text(".text recupera ou substitui o texto");
        $("#p9").html(" <code>main.html</code>");
        $("#campo").val("Lucas Toledo");
    });
});
    
    
$(document).ready(function(){
	$("#ex10").click(function(){
		$("#resposta").load("exemplo10.html");
	});
});
$(document).ready(function(){
    $("#button10").click(function(){
        $("p:first").replaceWith("alterado");
    });
});


$(document).ready(function(){
	$("#ex11").click(function(){
		$("#resposta").load("exemplo11.html");
	});
});
$(document).ready(function(){
    $("#button11").click(function(){
        $("p").remove();
    });
});


$(document).ready(function(){
	$("#ex12").click(function(){
		$("#resposta").load("exemplo12.html");
	});
});
$(document).ready(function(){
    $("#input12").keydown(function(){
        $("#input12").css("background-color", "#FF0000");        
    });
    $("#input12").keyup(function(){
        $("#input12").css("background-color", "#00CC00");
    });
});


$(document).ready(function(){
	$("#ex13").click(function(){
		$("#resposta").load("exemplo13.html");
	});
});
$(document).ready(function(){
    $("#button131").click(function(){
        $("#div131").fadeIn();
        $("#div132").fadeOut();
        $("#div133").fadeIn(2000);
        $("#div134").fadeOut("slow");
    });
    $("#button132").click(function(){
        $("#div131, #div132, #div133, #div134").fadeToggle();
    });
});


$(document).ready(function(){
	$("#ex14").click(function(){
		$("#resposta").load("exemplo14.html");
	});
});
$(document).ready(function(){
    $("#button141").click(function(){
        $("#div14").slideDown("fast");
    });
    $("#button142").click(function(){
        $("#div14").slideUp("slow");
    });
    $("#button143").click(function(){
        $("#div14").slideToggle("slow");
    });
});


$(document).ready(function(){
	$("#ex15").click(function(){
		$("#resposta").load("exemplo15.html");
	});
});
i = 0
$(document).ready(function(){
    $("#input15").keypress(function(){
        $("span").text(i += 1);
    });
});