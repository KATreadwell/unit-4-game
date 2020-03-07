//initializeGame
//random generate a Target score, with the range of 19-120
//set global variables: wins = 0, losses = 0, target score, total score = 0
//each crystal has random hidden value between 1 - 12.
//Math.floor(Math.random() * (120 - 19)) + 19; < this is code if you want to use range instead of below
//gameStart  
//function startGame  

$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var targetScore;
    var score = 0;

    function startNewGame(){
        score = 0;
        targetScore = Math.floor(Math.random()*101)+19; 


        $('.pic').each(function(){
            var crystalNo = Math.floor(Math.random()*11)+1;
            
            $(this).attr("crystalNo", crystalNo); 
        })
        $("#targetNo").text(targetScore);
        $("#winsNo").text(wins);
        $("#lossesNo").text(losses);
        $("#score").text(score);
    }
    startNewGame();
    $('.pic').on('click', function(){
        var crystalNo = parseInt($(this).attr("crystalNo"));
        console.log(typeof crystalNo)
        score += crystalNo;
        if(score === targetScore){
            wins++;
            startNewGame();
        }
        else if(score > targetScore){
            losses++;
            startNewGame();
        }
        else {
            $("#score").text(score);
        }

    })

})

