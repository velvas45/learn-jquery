// hide the element
$(document).ready(function(){
    $(".btn_hide").click(function(){
        $('p').hide();
    })
});

// focus and blur
$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", '#64ee09');
    });
    $("input").blur(function(){
        $(this).css("background-color", '#ff9e77');
    })
});


// Jquery Set
$(document).ready(function(){
    $("#btn1").click(function(){
        $('.name').text("Helmi Agustiawan");
    });
    $("#btn2").click(function(){
        $('.birthday').html("<strong>03 Agustus 1998</strong>");
    });
    $("#btn3").click(function(){
        $("#email").val('helmiagustiawan905@gmail.com');
    });
});