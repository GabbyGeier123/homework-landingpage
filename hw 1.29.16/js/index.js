$(document).ready(function(){

	
$("#submit-btn").click(changeBG);

function changeBG(event) {
	event.preventDefault();
	
	var city = $("#city-type").val();

	if (city == "San Francisco" || city == "SF" || city == "Bay Area") {
	$("body").css("background-image", "url(images/sf.jpg)");
}
	//FIGURE OUT how to make the background image NOT repeat/cover
	else if (city == "New York" || city == "NYC" || city == "New York City") {
	$("body").css("background", "url(images/nyc.jpg)");
}
	else if (city == "Los Angeles" || city == "LA" || city =="LAX") {
	$("body").css("background", "url(images/la.jpg)");
}
	else if (city == "Austin" || city =="ATX") {
	$("body").css("background", "url(images/austin.jpg)");
}
	else if (city == "Sydney" || city =="SYD") {
	$("body").css("background", "url(images/sydney.jpg)");
}
	else {
		$("body").css("background", "url(images/citipix_skyline.jpg)");
	}
}
//1. User enters name of city in form
//2. User clicks update button
//3. Background image changes to city they entered 

});	

