$(document).ready(function(){

var city = $("#city-type").val();
	
$("#submit-btn").click(changeBG);

function changeBG(event) {
	event.preventDefault();

	if (city == "San Francisco" || "SF" || "Bay Area") {
	$("body").css("background", "url(images/sf.jpg)");
}
	//FIGURE OUT how to make the background image NOT repeat/cover
	else if (city == "New York" || "NYC" || "New York City") {
	$("body").css("background", "url(images/nyc.jpg)");
}
	else if (city == "Los Angeles" || "LA" || "LAX") {
	$("body").css("background", "url(images/la.jpg)");
}
	else if (city == "Austin" || "ATX") {
	$("body").css("background", "url(images/austin.jpg)");
}
	else if (city == "Sydney" || "SYD") {
	$("body").css("background", "url(images/sydney.jpg)");
}
	else {
		$("body").css("background", "url(images/citipix_skyline.jpg)");
	}
}
//1. User enters name of city in form
//2. User clicks update button
//3. Background image changes to city they entered 
//4. Submission form goes back to "placeholder" text

});	

