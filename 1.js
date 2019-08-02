$(function() {
	var docao = $(window).height();
	$('.carousel-item img').css({'height': docao});
	$('#space').css({'height': $('#menu').height()})
	$(window).resize(function(event) {
		var docao = $(window).height();
		$('.carousel-item img').css({'height': docao});
	});
	$('#btnInfo').click(function(event) {
		var distance = $('.container-fluid.quote').offset().top;
		console.log(distance);
		$('html, body').animate({scrollTop:distance-70});
		return false;
	});
	$('#btnHome').click(function(event) {
		$('html, body').animate({scrollTop: $('.carousel-inner').offset().top});
		return false;
	});
	$('#btnExp').click(function(event) {
		$('html, body').animate({scrollTop: $('.container.experience').offset().top-80});
		return false;
	});
	$('#btnActivity').click(function(event) {
		$('html, body').animate({scrollTop: $('.container.activity').offset().top-80});
		return false;
	});
	$('#btnSkill').click(function(event) {
		$('html, body').animate({scrollTop: $('.container.skill-and-interest').offset().top-80});
		return false;
	});
})