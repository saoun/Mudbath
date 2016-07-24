"use strict";
(function(){
  console.log('working');

//global variables
var hero = $('<div class="hero">');
  $('body').append(hero);

// var mud = $('<div class="mud">')
//   $('body').append(mud);


//instructions at beginning of game
var instructions = $('<div class="instructions">');
$('body').append(instructions);
instructions.html("Use Arrow Keys to Move<br/>Space Bar to Attack")
//remove instructions
setTimeout(function(){
  instructions.remove();
}, 3500)


//intervals for game check of functions
setInterval(moveHero, 20);
setInterval(attack, 100);
setInterval(collision, 20);
// setInterval(death, 100);
var keys = {}


//moving hero
//setting limits for up / down / left / right to be contained in background
// maybe just delete up and down keys? to remove functionality
// or figure out a jump option (to revisit)
// http://stackoverflow.com/questions/7298507/move-element-with-keypress-multiple
$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});

function moveHero() {
    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        if (direction == 37 && hero.position().left > -150) {
            hero.addClass('left');

            hero.animate({left: "-=10"}, 0);
        }
        if (direction == 38 && hero.position().top > $(window).height()) {
            hero.animate({top: "-=10"}, 0);
        }
        if (direction == 39 && hero.position().left < $(window).width()) {
            hero.removeClass('left');
            hero.animate({left: "+=10"}, 0);
        }
        if (direction == 40 && hero.position().top > $(window).height()) {
            hero.animate({top: "+=10"}, 0);
        }
    }
}

//toggling class for attack, attack on space bar
function attack(){
  for (var direction in keys){
    if (!keys.hasOwnProperty(direction)) continue;

    if (direction == 32) {
      if (hero.hasClass('left')){
        hero.toggleClass('attackleft')
      } else {
        hero.toggleClass('attack');
      }

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

//collision detection / enemy dies if hero attacks
function collision() {
    // determining positions of hero and mud
  var currentMud = $('.mud')
  if (currentMud.length){

    var heroPos = hero.offset().left; //checks for width + width of hero class
    var mudPos = currentMud.offset().left;

    if (mudPos - (heroPos + 469) < 0 && $('div').hasClass('attack') ){ //adds width of that particular image
      console.log('hit');
      currentMud.addClass('mudDeath');

      setTimeout(function(){ //removes mud after death
        currentMud.remove();
      }, 100);

      currentMud = $('.mud'); // this keeps checking for all mudes
    }
    else if (mudPos - (heroPos + 219) < 0 && mudPos ) { //adds width of that particular image
      console.log("GAME OVER");
      hero.addClass('defeat');

      setTimeout(function(){
        hero.remove();
      }, 3000)
    }
  }
}










// creating enemy
function makeMud(){
  var mud = $('<div class="mud">')
  $('body').append(mud);
};

//needed to change the interval of setinterval thats running, got this code from:
// http://stackoverflow.com/questions/1280263/changing-the-interval-of-setinterval-while-its-running
var counter = 5000;

var moveMud = function(){
  makeMud()
  $('.mud').animate({left: "-150"}, 4000); //1000 is how fast is move across the screen


  if (counter>100){
    counter=counter-10; // how fast enemies appear
  }

  clearInterval(interval);
  interval = setInterval(moveMud, counter);
}
var interval = setInterval(moveMud, counter);







/////////////////////

// setInterval(moveBox, 20);

// //moving the enemy across the screen DRAFT1
// function moveBox(){

//   setTimeout(function(){ //setting timeout to delay appearance of enemy
//     box.animate({left: "-=5"}, 10);
//   }, 1000);

//   //remove box after it leaves screen
//   if (box.position().left < 0){
//     this.remove();
//   }
// }

/////////////////////

//DRAFT2: boxes appear and move across screen. decent option, no frequency increase though
// function makeBox(){
//   var box = $('<div class="box">')
//   $('body').append(box);
// };
// function moveBox(){
//   var box = $('.box');
//   setInterval(function(){
//   // var box = $('.box')
//    box.animate({left: "-=5"}, 10);
//   }, 1000)

//   // remove box after it leaves screen
//   if (box.position().left < 0){
//     $(this).remove();
//   }
// }
/////////////////////

// create multiple enemies ???
// for(var i=0; i<5; i++) {
//     var box = $('<div class="box">')
//     $('body').append(box);
//     box.animate({left: "-=5"}, 20);

//   }




})();
