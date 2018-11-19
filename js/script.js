// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



var winner="";


// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    var computerChoice="";
    var userChoice=$("#input").val();
    $("#userChoice").text(userChoice);
    var randomNumber=Math.random();
    if(randomNumber>.7){
        computerChoice="rock"
    }
    else if(randomNumber<.7 && randomNumber>.29){
        computerChoice="paper"
    }
    else{
        computerChoice="scissors"
    }
    $("#computerChoice").text(computerChoice);
})
