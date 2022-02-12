
var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;
// alert("This is the game.js page!!!");
    $(document).keypress(function() {
    if (!started) {
  
      //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

  function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel])
    {
        console.log("Success!");
        if(userClickedPattern.length === gamePattern.length)
        {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    }
    else{
        console.log("Wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $(body).removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
    }
}


function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+ level);
    var randomNumber = Math.floor(Math.random()*4);
    // console.log(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    // console.log(randomChosenColour);
    
    gamePattern.push(randomChosenColour)
    $("#"+ randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    // var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    // audio.play();
    
    playSound(randomChosenColour);
    
}
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
    playSound(userChosenColour);    
    animatePress(userChosenColour);
});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColour){
    $('#' + currentColour).addClass("pressed");
    setTimeout(()=> {
        $('#' + currentColour).removeClass("pressed");
    },100);

        
}

