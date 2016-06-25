$(document).foundation();
$("#menu").toggleClass("is-open");
/*
$(".toggle-menu").on("click", function(){
            $("#menu").toggleClass("is-open");
       });
       */
$("#intro-list").hide();
$("#intro-more-button").click(function(){
   $("#intro-list").toggle(); 
});
