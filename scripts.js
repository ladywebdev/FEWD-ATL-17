// JavaScript Assignment Week 6



// --Call ```$.val()``` on inputs to get the string value of your user's input                                                                               |                        |                          |
// --| Store user input in ```var city```                                                                                                                          |                        |                          |
// --| Use $.on(submit) or ```$.click``` to figure out when the user clicks the "submit" button                                      |                                |                        |                          |
// | Create ```if / else if / else``` conditionals to control the flow of your application                                         |                                |                        |                          |
// | Write at least six different lines of pseudocode and display them inline as JavaScript comments                               |                                |                        |                          |
// --| Prevent a form submission using the ```event.preventDefault()``` function                                                     |                                |                        |                          |
// | --Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded                       |                                |                        |                          |
// | Get the first element from an attribute name using ```$.attr()```                                                             |                                |                        |                          |
// | Use the ```||``` operator in your conditionals to allow for multiple string values to execute ```if/else if``` statement code |                                |                        |                          |
// | If a user submits "New York" or "New York City" or "NYC" make the background of the page nyc.jpg                              |                                |                        |                          |
// | If a user submits "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg                                |                                |                        |                          |
// | If a user submits "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg                                       |                                |                        |                          |
// | If a user submits "Austin" or "ATX" make the background of the page austin.jpg                                                |                                |                        |                          |
// | If a user submits "Sydney" or "SYD" make the background of the page sydney.jpg                                                |                                |                        |                          |


$(document).ready(function() {
	console.log( 'ready!');

	// $("form").on(submit)

	$('form').on('submit',function(e){

		e.preventDefault();

		var city = $('#city-type').val();
		
		console.log(city);
	})


	function 

	if city === "New York" or city === "New York City" or city = "NYC"
		$("background-image").css("../nyc.jpg");

	if city === "San Fransisco" or city === "SF" or city = "Bay Area"
		$("background-image").css("../sf.jpg");

	if city === "Los Angeles" or city === "LA" or city = "LAX"
		$("background-image").css("../la.jpg");

	if city === "Austin" or city === "ATX" 
		$("background-image").css("../austin.jpg");

	if city === "Sydney" or city === "SYD" 
		$("background-image").css("../sydney.jpg");



	//Pseudocode??
	// User clicks submit ->
	//    what did the user type into the box?
		/* Get value of city 
		Store in the var called city on form Submit

	//        something from cityNewYork -> set the BG to nyc.jpg
	//        something from cityLosAng -> set the BG to la.jpg
	//        ... etc
	*/

	// $("p").css("background-color");

	// | Use $.on(submit) or ```$.click``` to figure out when the user clicks the "submit" button   
	// $("#submit-btn").click(function() { 
	// 	$("cityNewYork").css('background' , 'url(../images/nyc.jpg)');
	// });

	// $( "#submit-btn" ).click(function() { 
	// 	$("citySanFran").css('background': 'url(../images/sf.jpg)');
	// });

	// $( "Update" ).click(function() { 
	// 	$("cityLosAng").css('background': 'url(../images/la.jpg)');
	// });

	// $( "Update" ).click(function() { 
	// 	$("cityAustin").css('background': 'url(/images/austin.jpg)');
	// });

	// $( "Update" ).click(function() { 
	// 	$("citySydney").css('background': 'url(/images/sydney.jpg)');
	// });


});


// | Store user input in ```var city```  
	// var cityNewYork = ["New York", "New York City", "NYC"];
	// var citySanFran = ["San Francisco", "SF", "Bay Area"]
	// var cityLosAng = ["Los Angeles", "LA", "LAX"]
	// var cityAustin = ["Austin", "ATX"]
	// var citySydney = ["Sydney", "SYD"]

// $("p").click(function(){
//   // action goes here!!
// });

// document.getElementById("demo").innerHTML = cars;
// </script>

// var cityChoice 

// $.val() 


// function name()
// {
// var cityChoice = document.getElementById("city");
// alert(input);
// }

