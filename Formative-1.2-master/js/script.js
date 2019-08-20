$(document).ready(function(){

$('#menu').click(function() {
  $('nav').toggleClass('active');
})
$('#close').click(function(){
  $('nav').removeClass('active');
})
});

