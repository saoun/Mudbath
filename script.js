"use strict";
(function(){
  console.log('working');

//global variables
var hero = $('<div class="hero">');
$('body').append(hero);

var box = $('<div class="box">')
$('body').append(box);

//intervals for game check of functions
setInterval(moveHero, 20);
setInterval(attack, 100);
setInterval(collision, 20);
setInterval(death, 100);
var keys = {}

$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});

//moving hero
//setting limits for up / down / left / right to be contained in background
// maybe just delete up and down keys? to remove functionality
// or figure out a jump option (to revisit)
// http://stackoverflow.com/questions/7298507/move-element-with-keypress-multiple
function moveHero() {
    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        if (direction == 37 && hero.position().left > -150) {
            hero.animate({left: "-=10"}, 0);
        }
        if (direction == 38 && hero.position().top > $(window).height()) {
            hero.animate({top: "-=10"}, 0);
        }
        if (direction == 39 && hero.position().left < $(window).width()) {
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
      hero.toggleClass('attack');
      setTimeout (function(){
        hero.toggleClass('attack');
      }, 100)
    }
  }
}

//collision detection
function collision() {
  // determining positions of hero and box
var heroPos = hero.offset().left + 488; //checks for width + 380
var boxPos = box.offset().left;

if (boxPos - heroPos < 0 && $('div').hasClass('attack') ){
  console.log('hit');
  box.remove();
}
}

function death(){
  var heroPos = hero.offset().left + 380; //checks for width + 380
  var boxPos = box.offset().left;

  if (boxPos - heroPos < 0  && boxPos){
  console.log('die');
  hero.remove()
}
}



})();
