'use strict';
let again = document.querySelector('.again');
let number = document.querySelector('.number');
let guess = document.querySelector('.guess');
const check = document.querySelector('.check');
let message = document.querySelector('.message');
let label_score = document.querySelector('.label-score');
let highscore = document.querySelector('.highscore');
let score = document.querySelector('.score');
let body = document.querySelector('.body-page');
let name = document.querySelector(".my-guess");
let over = document.querySelector(".over");
let over_text = document.querySelector(".over_text");


let current = Math.trunc(Math.random()*20+1);
// let current = 6;
check.addEventListener('click',function() {
    if(!guess.value){
        message.innerHTML='Charlie type a number';
    }else if(guess.value < current){
        message.innerHTML='number too low';
    }else if(guess.value == current) {
        message.innerHTML='Correct';
        number.innerHTML= guess.value;
        highscore.innerHTML=score.textContent;
        body.style.background ='green';
        // body.classList.remove('normal');
        // body.classList.add('win');
        // my_guess.innerHTML ='Winter is a bad girl'
        check.removeEventListener();

    }else if (guess.value > current){
        message.innerHTML='number is too high';
    }
     let new_score = score.textContent-1;
     score.innerHTML=new_score;
     if (new_score == 0) {
         over.classList.add('game_over');
         over_text.style.display ='inline';
     }
});
// console.log(score.textContent-1);
again.addEventListener('click',()=>window.location.reload());

// name.innerHTML="Winter"

// OBJECT ORIENTED
function Game() {
    this
}

