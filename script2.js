"use strict";
(function(){
  console.log('loaded')

var hero = $('<div class="hero">');
$('body').append(hero);

setInterval(moveHero, 20);
// var TimerWalk;
// var currentKey;
// var charStep = 2
// var charSpeed = 400
var keys = {}

$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});


// $(function() {

//     var arrowKeyDown = false;
//     $('body').keydown(function(e) {
//         if (e.which == 39 && !arrowKeyDown)  {
//             arrowKeyDown = true;

//             hero.animate({left: "+=10"}, 0);
//             hero.addClass('run');
//             console.log('right');
//         }
//     });

//     $('body').keyup(function(e) {
//         if (e.which == 39) {
//             arrowKeyDown = false;


//             hero.removeClass('run');
//             console.log('idle');
//         }
//     });
// });


function moveHero() {
    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue ;

          var arrowKeyDown = false;
              $('body').keydown(function(e) {
                //move right
                  if (e.which == 39 && !arrowKeyDown && hero.position().left < $(window).width())  {
                      arrowKeyDown = true;

                      hero.animate({left: "+=1"}, 0);
                      hero.addClass('run');
                      console.log('right');
                  } return false
                //move left
                  if (e.which == 37 && !arrowKeyDown && hero.position().left > -150)  {
                      arrowKeyDown = true;

                      hero.addClass('runLeft');
                      hero.animate({left: "-=1"}, 0);
                      console.log('right');
                  } return false
              });

              $('body').keyup(function(e) {
                //idle on right
                  if (e.which == 39) {
                      arrowKeyDown = false;

                      hero.removeClass('run');
                      console.log('idle');
                  }
                //idle on left
                  if (e.which == 39) {
                      arrowKeyDown = false;

                      hero.removeClass('runLeft');
                      hero.addClass('left')

                      console.log('idle');
                  }
              });



        // if (direction == 37 && !keyPressed) {

        //     hero.addClass('runLeft');
        //     hero.animate({left: "-=10"}, 0);
        // }

        // if (direction == 38 ) {
        //     hero.animate({top: "-=10"}, 0);
        // }

        // if (direction == 39 ) {
        //     hero.removeClass('left');
        //     hero.removeClass('runLeft')
        //     hero.addClass('run');
        //     hero.animate({left: "+=10"}, 0);
        // }

        // if (direction == 40 ) {
        //     hero.animate({top: "+=10"}, 0);
        // }
    }
}






// function gameOver(){
//   $('defeat')
//   if (hero.hasClass('defeat')){
//     setTimeout(function(){
//         var gameOver = $('<div class="gameOver">');
//         $('body').append(gameOver);
//         gameOver.text("GAME OVER")
//       }, 200)
// }
// }



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
