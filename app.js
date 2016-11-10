$(document).ready(function(){

$("body").fadeOut();
$("body").fadeIn();

var mouse=$("p");

mouse.on("mouseenter",function(){

$(this).css("background-color","yellow");

});

mouse.on("mouseleave",function(){

$(this).css("background-color","white");

});

$("#switcher-large").on("click",function(){

$(".speech").css("font-size","20px");


});

$("#switcher-small").on("click",function(){

$(".speech").css("font-size","8px");

});

$("#switcher-default").on("click",function(){


$(".speech").css("font-size","12px");

});

$("h2").on("click",function(){

$("h2").animate({"opacity":".50","margin-left":"20px"},600,"swing",function(){

	$(".speech").animate({"opacity":".50"})
});

});

});