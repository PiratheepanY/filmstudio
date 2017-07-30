$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
});
$(document).on('click',function(){
	$('.collapse').collapse('hide');
})
