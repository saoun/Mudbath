"use strict";
(function(){
  console.log('loaded')


var hero = $('<div class="hero">');
$('body').append(hero);

setInterval(moveHero, 20)

// function moveHero() {
//     var arrowKeyDown = false;
//     $('body').keydown(function(e) {

//         if (e.which == 39 && !arrowKeyDown) {
//             arrowKeyDown = true;
//             hero.addClass('run');
//             hero.animate({left: "+=1"}, 0);
//             console.log('down');
//         }
//     });

//     $('body').keyup(function(e) {
//         if (e.which == 39) {
//             arrowKeyDown = false;

//             hero.removeClass('run')
//             console.log('up');
//         }
//     });
// };
$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});

var keys = {}


function moveHero() {
    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        //move left
        if (direction == 37 && hero.position().left > -150) {
            hero.addClass('left');
            hero.addClass('runLeft');
            hero.animate({left: "-=10"}, 0);

            setTimeout (function(){
                hero.removeClass('runLeft');
            }, 2000)
              }

        //move right
        if (direction == 39 && hero.position().left < $(window).width()) {
            hero.removeClass('left');
            hero.removeClass('runLeft')
            hero.addClass('run')
            hero.animate({left: "+=10"}, 0);

            setTimeout (function(){
                hero.removeClass('run');
            }, 2000)
        }

        //jumping ?? to revisit
        if (direction == 38 && hero.position().top > $(window).height()) {
            hero.animate({top: "+10", bottom: "+10"}, 0);
        }
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
