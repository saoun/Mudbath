"use strict";
(function(){
  console.log('working');

//global variable
var hero = $('<div class="hero">');
$('body').append(hero);

//intervals for game check of functions
setInterval(moveHero, 20);
setInterval(attack, 100);
var collision = setInterval(collision, 20);
var collisionLeft = setInterval(collisionLeft, 20);
var keys = {}


//instructions at beginning of game
var instructions = $('<div class="instructions">');
$('body').append(instructions);
instructions.html("Use Arrow Keys to Move<br/>Space Bar to Attack")

//instructions get bigger on hover
instructions.hover(function(){
  instructions.css('font-size', '65px');
}, function(){
  instructions.css('font-size', '45px');
})

//remove instructions
setTimeout(function(){
  instructions.remove();
}, 3500)


//moving hero
//setting limits for up / left / right to be contained in background
//got key functions from: http://stackoverflow.com/questions/7298507/move-element-with-keypress-multiple
$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});

function moveHero() {
    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        //move left
        if (direction == 37 && hero.position().left > -150) {
            hero.addClass('left');
            hero.addClass('runLeft');
            hero.animate({left: "-=10"}, 0);
        }

        //move right
        if (direction == 39 && hero.position().left < $(window).width()) {
            hero.removeClass('left');
            hero.removeClass('runLeft')
            hero.addClass('run')
            hero.animate({left: "+=10"}, 0);
        }

        //jumping ?? to revisit
        if (direction == 38 && hero.position().top > $(window).height()) {
            hero.animate({top: "+10", bottom: "+10"}, 0);
        }
    }
}


//toggling class for attack, attack on space bar
function attack(){
  for (var direction in keys){
    if (!keys.hasOwnProperty(direction)) continue;

    if (direction == 32) {
      //disable run
      hero.removeClass('run')
      hero.removeClass('runLeft')

      //attack on left and right
      if (hero.hasClass('left')){
        hero.toggleClass('attackleft')
      } else {
        hero.toggleClass('attack');
      }

      //remove attack position
      setTimeout (function(){
        if (hero.hasClass('left')){
          hero.toggleClass('attackleft');
        } else {
          hero.toggleClass('attack');
        }
      }, 100)
    }
  }
}


// creating enemy right + left
function makeMud(){
  var mud = $('<div class="mud">')
  $('body').append(mud);
};

function makeMudLeft(){
  var mudLeft = $('<div class="mudLeft">')
  $('body').append(mudLeft);
}


//needed to change the interval of setinterval thats running, got this code from:
// http://stackoverflow.com/questions/1280263/changing-the-interval-of-setinterval-while-its-running

//movign mud from right
var counter = 5000;
var moveMud = function(){
  makeMud()
  $('.mud').animate({left: "-150"}, 4000); //1000 is how fast is move across the screen

  if (counter>100){
    counter=counter-10; // how fast enemies appear
  };

  if ($('.mud').position().left < 0){
    $('.mud').remove();
  };
  // clearInterval(interval);
  // interval = setInterval(moveMud, counter);
}
var movingMud = setInterval(moveMud, counter);

// RIGHT collision detection / enemy dies if hero attacks
function collision() {
    // determining positions of hero and mud
  var currentMud = $('.mud');
  if (currentMud.length){
    var heroPos = hero.offset().left; //checks for width + width of hero class
    var mudPos = currentMud.offset().left;

    //hero win
    if (mudPos - (heroPos + 469) < 0 && $('div').hasClass('attack') ){ //adds width of that particular image

      console.log('hit');
      currentMud.addClass('mudDeath');

      setTimeout(function(){ //removes mud after death
        currentMud.remove();
      }, 100);

      currentMud = $('.mud'); // this keeps checking for all mudes
    }

    //hero defeat
    else if (mudPos - (heroPos + 219) < 0 && mudPos ) { //adds width of that particular image

      console.log("GAME OVER");
      hero.addClass('defeat');
      currentMud.stop(); //to stop animation
      clearInterval(collision);
      clearInterval(collisionLeft)
      clearInterval(movingMud);
      clearInterval(movingMudLeft);
      gameOver();
    }
    }
}

//
//moving mud from left
var counterLeft = 7000;
var moveMudLeft = function(){
  makeMudLeft()
  $('.mudLeft').animate({right: "-150"}, 6000); // how fast is move across the screen

  if (counterLeft>100){
    counterLeft=counterLeft-10; // how fast enemies appear
  };

  if ($('.mudLeft').position().left > 1000){
    $('.mudLeft').remove();
  };
}
var movingMudLeft = setInterval(moveMudLeft, counterLeft);

//
//LEFT collision detection / enemy dies if hero attacks
function collisionLeft() {
    // determining positions of hero and mud
  var currentMud = $('.mudLeft')
  if (currentMud.length){

    var heroPos = hero.offset().left; //checks for width + width of hero class
    var mudPos = currentMud.offset().left;

    //hero win
    if (mudPos - heroPos < 0 && $('div').hasClass('attackleft') ){ //adds width of that particular image

      console.log('hit');
      currentMud.addClass('mudDeathLeft');

      setTimeout(function(){ //removes mud after death
        currentMud.remove();
      }, 100);

      currentMud = $('.mudLeft'); // this keeps checking for all mudes
    }
    //hero defeat
    else if (mudPos - heroPos > 0 && mudPos ) { //adds width of that particular image

      console.log("GAME OVER");
      hero.addClass('defeat');
      currentMud.stop(); //to stop animation
      clearInterval(collisionLeft);
      clearInterval(collision);
      clearInterval(movingMud);
      clearInterval(movingMudLeft);
      gameOver();
    }
  }
}

//end game message
function gameOver(){
  //display game over
  var gameOver = $('<div class="gameOver">');
  $('body').append(gameOver);
  gameOver.text("Game Over")

}

//set Timer and cancel Timer
setTimeout (function(){
  var clock = $('<div class="timer">')
  clock.appendTo($('body'));
  var count=0;
  var counter=setInterval(timer, 1000); //will run it every 1 second

  function timer(){
    count+=1;
    clock.text(count + " secs")

    //clear timer if game over
    if (hero.hasClass('defeat')){
      clearInterval(counter); //stop timer
      clock.remove(); //remove timer

      var topTime = $('<div class="topTime">');
      $('body').append(topTime);
      topTime.text("You survived " + count + " secs"); //add timer score
    }
  }
}, 3500);


})();
