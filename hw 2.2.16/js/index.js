$(document).ready(function(){

//1. Change text entry to drop down menu
//2.User selects city from drop down menu
//3. User clicks update button
//4. Background image changes to city they entered 



$("#city-type").mouseover(dropDown);
$("#submit-btn").click(changeBG);

function dropDown(event) {
	event.preventDefault();
	//$("#city-type").append('<div class="dropDown"></div>');

    var cities = ["NYC","SF","LA","ATX","SYD"];
    var text = "";
    var i;
    for (i = 0; i < cities.length; i++) {
        text += cities[i] + "<br>";
    }
 $("#city-type").HTML = text;



function changeBG(event) {
	event.preventDefault();
	
	var city = $("#city-type").val();

	if (city == "SF") {
	$("body").css("background-image", "url(images/sf.jpg)");
}
	else if (city == "NYC") {
	$("body").css("background", "url(images/nyc.jpg)");
}
	else if (city == "LA") {
	$("body").css("background", "url(images/la.jpg)");
}
	else if (city =="ATX") {
	$("body").css("background", "url(images/austin.jpg)");
}
	else if (city =="SYD") {
	$("body").css("background", "url(images/sydney.jpg)");
}
	else {
		$("body").css("background", "url(images/citipix_skyline.jpg)");
	}
}

});	


