// Matchmaker JavaScript File

$( document ).ready(function() {

$('hamburger').click(function() {
  $(this).toggleClass('expanded').siblings('div').slideToggle();
});