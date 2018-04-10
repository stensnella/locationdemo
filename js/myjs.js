
$(function() {
 $('#scroll1').click(function(){
	   $('html, body').animate({
	    scrollTop: $("#about").offset().top
	}, 1000);
 });
});



$(function() {
 $('#scroll2').click(function(){
	   $('html, body').animate({
	    scrollTop: $("#references").offset().top
	}, 1000);
 });
});
