$(document).ready(function(){
    // My asssumption is the paragraph text is not supposed to appear to user on initial load
    $("#brian").hide();
    $("#readless").hide();
    $("#sidebar").hide();

    $("#readmore").click(function(){
        $("#brian").slideDown();
        $("#readless").show();
        $("#readmore").hide();
    });

    $("#readless").click(function(){
        $("#brian").slideUp();
        $("#readmore").show();
        $("#readless").hide();
    });

    $("#learnmore").click(function(){
        $("#sidebar").slideDown();
        $("#learnmore").hide();
    });
    // Experimenting w/ slideToggle vs slideUp & slideDown but can't change the text back and forth without the functions above
    // $("#asher").click(function(){
    //     $("#hello").slideToggle();
    //     $("#asher").text(function(i,text){
    //     	return text === "Read less" ? "Read more" :  "Read less";
    //     )}
    // });
});

  