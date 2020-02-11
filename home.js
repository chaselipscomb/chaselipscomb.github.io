$( document ).ready(function() {
    console.log( "ready!" );



    function Fades() {
        $(".navelements").fadeIn(3000);
        $(".resume").fadeIn(3000);
        $(".socials a").fadeIn(3000);

        $("#aboutbody").fadeIn(2000);
        $(".portfoliocontainer").fadeIn(3000);

        setTimeout(function(){ $("#intro").fadeIn(3000);
        ; }, 0);
        setTimeout(function(){ $("#learnmore").fadeIn(2000);
        ; }, 1000);
        setTimeout(function(){ $(".arrow").fadeIn(2000);
        ; }, 1500);
        // setTimeout(function(){ $("#Welcome").fadeOut(2000);
        // ; }, 3001);
        setTimeout(function(){ $("#Intro").fadeIn(2000);
        ; }, 5002);
        // setTimeout(function(){ $("#Intro").fadeOut(2000);
        // ; }, 7003);
        setTimeout(function(){ $("#IntroTwo").fadeIn(2000);
        ; }, 9004);
        // setTimeout(function(){ $("#IntroTwo").fadeOut(3000);
        // ; }, 11000);
        setTimeout(function(){ $("#ViewWork").fadeIn(5000);
        ; }, 14000);
    
        // $("#Intro").fadeIn(10000);
        // $("#IntroTwo").fadeIn(20000);
      }
    Fades();
   


















});