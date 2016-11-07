$(document).ready(function(){


	$("body").fadeIn();

var mouse =$("p");

mouse.on("mouseenter", function(){
$(this).css("background-color", "yellow");

});

mouse.on("mouseleave", function(){
$(this).removeAttr("style");

});

$("h2").on("click", function(){
$(this).animate({

	"opacity":"0.25",
	"margin-left":"20px"
}, 600, "swing", function(){
$(".speech").animate({
	"opacity":"0.5"
});

});

});

$("#switcher-large").on("click", function(){
$("body").css("font-size", "20px");

});

$("#switcher-small").on("click", function(){
$("body").css("font-size", "10px");


});
$("#switcher-default").on("click", function(){
$("body").css("font-size", "12px")

});






});