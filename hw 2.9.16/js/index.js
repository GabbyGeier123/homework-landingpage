$(document).ready(function(){

//1. Change text entry to drop down menu
//2.User selects city from drop down menu
//3. User clicks update button
//4. Background image changes to city they entered 


var cities = ["NYC", 
			"SF", 
			"LA", 
			"ATX", 
			"SYD",
			];

//adding out list of cities to the drop down menu. Each time we go through the cities array, you add a new city
for (var i=0; i<cities.length; i++) {
	//add a city to the end of my dropdown; go through the loop and add a city, go through again and add another city, etc.
	//add an option to html by using append
	//as you keep going through the loop, i adds 1 so the index is the next option in the loop
	$("#city-type").append("<option>" + cities[i] + "</option>");
};

//whenever the dropdown changes, perform the function, dropDown
$("#city-type").change(dropDown);

function dropDown() {
	//figure out what city the user selected
	var city = $("#city-type").val();
	$("body").removeClass();
	//correlate images to my city name (use an IF statement to do this)
	if (city == "NYC") {
	//there are classes in css that connects with the background image
	//on my body tag, add a class called "nyc"
	$("body").addClass("nyc");
	}
	else if (city == "SF") {
		$("body").addClass("sf");
	}
	else if (city == "LA") {
		$("body").addClass("la");
	}
	else if (city == "ATX") {
		$("body").addClass("austin");
	}
	else if (city == "SYD") {
		$("body").addClass("sydney");
	}
	//change the background of the page to a pic of that city 
}
});	


