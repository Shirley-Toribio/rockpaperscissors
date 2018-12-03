// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



var winner="";


// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    var computerChoice="";
    var userChoice=$("#input").val().toLowerCase().trim();
    if(userChoice==="rock" ||userChoice==="paper" || userChoice==="scissors" || userChoice==="scissor"){
        $("#userChoice").text(userChoice);
    }
    else if(userChoice===""){
        $("#userChoice").text("Put something in??");
    }
    else{
        $("#userChoice").text("not a valid input douchebag")
    }
    var randomNumber=Math.random();
    if(randomNumber>.7){
        computerChoice="rock";
    }
    else if(randomNumber<.7 && randomNumber>.29){
        computerChoice="paper";
    }
    else{
        computerChoice="scissors";
    }
    if((userChoice==="rock" && computerChoice==="scissor")||(userChoice==="rock" && computerChoice==="scissors")||
    (userChoice==="paper" && computerChoice==="rock")||(userChoice==="scissors" && computerChoice==="paper")||
    (userChoice==="scissor" && computerChoice==="paper")){
        var winner="User";
        $("#result").text(winner + " wins!");
        $("#input").val("");
    }
    else if((userChoice==="scissor" && computerChoice==="rock")||(userChoice==="scissors" && computerChoice==="rock")||
    (userChoice==="rock" && computerChoice==="paper")||(userChoice==="paper" && computerChoice==="scissors")||
    (userChoice==="paper" && computerChoice==="scissor")){
        var winner="Computer";
        $("#result").text(winner+"wins");
        $("#input").val("");
    }
    else if(userChoice===""){
        $("#result").text("Cannot determine");
    }
    else{
        var winner="";
        $("#result").text("ISSA DRAW");
        $("#input").val("");
    }
    $("#computerChoice").text(computerChoice);
    
});
