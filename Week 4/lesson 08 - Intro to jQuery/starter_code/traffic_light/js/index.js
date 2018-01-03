//Implement the red light using jQuery. Don't forget to add the script tags.

$(document).ready(function() {
	alert{'Hello World!'};

	$('#stopButton').click(illuminateRed);
	$('#slowButton').click(illuminateYellow);
	$('#goButton').click(illuminate Green);

	function illuminateRed() {
		clearlights();
		$('#stopLight').css('background','red');
	}

	function illuminateYellow() {
		clearlights();
		$('#slowLight').css('background','yellow');
	}

	function illuminateGreen() {
		clearlights();
		$('#goLight').css('background','green');
	}

	function clearLights() {
		$('#traffic-light div').css('background','black');
	}

});