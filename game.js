// var gamePattern = [];
// var buttonColours = ["red", "blue", "green", "yellow"];
// var userClickPattern = [];
// var gameStarted = false;
// var level = 0;
//
// var randomNumber = Math.floor(Math.random()*4);
//
// $(document).keypress(function() {
//     if(!gameStarted){
//       $("#level-title").text("level " + level);
//       nextSequence();
//       gameStarted = true;
//     }
//
// });
//
// $(".btn").on("click",function(){
//   var userChosenColour = $(this).attr("id");
//   userClickPattern.push(userChosenColour);
//   playSound(userChosenColour);
//   // console.log(userClickPattern);
//   // return userClickPattern;
//   animatePress(userChosenColour);
// });
//
//
//
//
//
// function nextSequence(){
//   level++;
//   $("#level-title"). text("level " + level);
//   var randomNumber = Math.floor(Math.random()*4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }
// nextSequence();
//
// function playSound(name){
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }
//
// function animatePress(currentColour) {
//   $("#" + currentColour).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColour).removeClass("pressed");




// var buttonColours = ["red", "blue", "green", "yellow"];
//
// var gamePattern = [];
// var userClickedPattern = [];
//
// var started = false;
//
// var level = 0;
//
// $(document).keypress(function() {
//   if (!started) {
//
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });
//
// $(".btn").click(function() {
//
//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);
//
//   playSound(userChosenColour);
//   animatePress(userChosenColour);
//   checkAnswer(userChosenColour.length-1);
// });
//
// function checkAnswer(currentLevel) {
//
//     //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//
//       console.log("success");
//
//       //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
//       if (userClickedPattern.length === gamePattern.length){
//
//         //5. Call nextSequence() after a 1000 millisecond delay.
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//
//       }
//
//     } else {
//
//       console.log("wrong");
//       playSound("wrong");
//
//       //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
//       $("body").addClass("game-over");
//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);
//
//       //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
//       $("#level-title").text("Game Over, Press Any Key to Restart");
//       startOver();
//     }
//
//
//
// }
//
// function nextSequence() {
//
//   //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
//   level++;
//
//   //5. Inside nextSequence(), update the h1 with this change in the value of level.
//   $("#level-title").text("Level " + level);
//
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//
//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }
//
// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }
//
// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }
//
// function startOver(){
//   level = 0;
//   gamePattern = [];
//   gameStarted = false;
// }


var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    } else {

      console.log("wrong");

      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");

      //2. Call startOver() if the user gets the sequence wrong.
      startOver();
    }

}

function nextSequence() {

  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//1. Create a new function called startOver().
function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}


//   }, 100);
// }
