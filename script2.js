"use strict";
(function(){
  console.log('loaded')

var hero = $('<div class="hero">');
  $('body').append(hero);

hero.addClass('defeat');




// function makeBox(){
//   var box = $('<div class="box">')
//   $('body').append(box);
// };

// var howOften = 100
// function moveBox(){
//   var box = $('.box');
//   setInterval(function(){
//   // var box = $('.box')
//    box.animate({left: "-100"}, 1000); //1000 is how fast is move across the screen
//    howOften = howOften / 2
//   }, howOften)

//   // remove box after it leaves screen
//   if (box.position().left < 0){
//     $(this).remove();
//   }
// }


//needed to change the interval of setinterval thats running, got this code from:
// http://stackoverflow.com/questions/1280263/changing-the-interval-of-setinterval-while-its-running
// var counter = 3000;

// var boxmove = function(){
//   $('.box').animate({left: "-100"}, 4000); //1000 is how fast is move across the screen
//   makeBox()

//   if (counter>100){
//     counter=counter-10; // how fast enemies appear
//   }

//   clearInterval(interval);
//   interval = setInterval(boxmove, counter);
// }
// var interval = setInterval(boxmove, counter);




//collision detection / enemy dies if hero attacks
// function collision() {
//     // determining positions of hero and mud
//   var currentMud = $('.mud')
//   if (currentMud.length){
//   var heroPos = hero.offset().left + 469; //checks for width + width of hero class
//   var mudPos = currentMud.offset().left;

//   if (mudPos - heroPos < 0 && $('div').hasClass('attack') ){
//     console.log('hit');
//     currentMud.addClass('mudDeath');

//     setTimeout(function(){ //removes mud after death
//       currentMud.remove();
//     }, 100);

//     currentMud = $('.mud'); // this keeps checking for all mudes
//   }
// }
// }


// //collision detection / hero dies if enemy touches them
// function death(){
//   var currentMud = $('.mud')
//   if (currentMud.length){
//   var heroPos = hero.offset().left + 219; //checks for width + width of hero class
//   var mudPos = currentMud.offset().left;

//   if (mudPos - heroPos < 0 && mudPos ){
//   hero.remove();
//   console.log("GAME OVER");
// }
// }
// }





})();
