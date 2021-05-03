
function scroll_to(clicked_link, nav_height) {
	/*var element_class = clicked_link.attr('href').replace('#', '.');*/
	var element_class = clicked_link.attr('href');
	var scroll_to = 0;
	/*
	console.log("Vertical: " + window.scrollY);
  	console.log("Horizontal: " + window.scrollX);
	*/
	if(element_class != '#top-content') {
	/*if(element_class != '.top-content') {*/
		//element_class += '-container';
		//element_class += "#"+ element_class;
		console.log(element_class);
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
	/*
	console.log("Vertical: " + window.scrollY);
  	console.log("Horizontal: " + window.scrollX);
  	*/
} 


jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content h1').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
	
    /*
        Background slideshow
    */
	$('.top-content').backstretch("assets/img/backgrounds/1.jpg");
    $('.section-4-container').backstretch("assets/img/backgrounds/2.jpg");
    
    /*
	    Wow
	*/
	new WOW().init();
	
});

window.onscroll = function() {
  
  //console.log("Vertical: " + window.scrollY);
  /*console.log("Horizontal: " + window.scrollX);
*/
 if (window.scrollY < 35){
  	
  	document.getElementById('navbar-principal').style.background = 'rgba(0, 0, 0, 0.01)';
  }

  if (window.scrollY > 35){
  	
  	document.getElementById('navbar-principal').style.background = 'rgba(0, 0, 0, 0.2)';
  }

   if (window.scrollY > 50){
  	
  	document.getElementById('navbar-principal').style.background = 'rgba(0, 0, 0, 0.5)';
  }
  

};
