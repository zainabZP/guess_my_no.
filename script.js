'use strict';


// how to select an element and change its value -
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='correct number 🎉';


let randomNumber=Math.trunc(Math.random()*100)+1;
// document.querySelector('.number').textContent=randomNumber;
let score=20; ///////20
let maxScore=0;

const checkbtn=function(){
    const guess=Number(document.querySelector('.guess').value);
    //console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent='❌ no number'
    }

    else if(guess===randomNumber){
        document.querySelector('.message').textContent='Correct number 🎉';
        document.querySelector('.number').textContent=randomNumber;
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width='30rem';
        if(score>maxScore){
            maxScore=score;
            document.querySelector('.highscore').textContent=maxScore;
        }
    }

    else if(guess<randomNumber){
        if(score>1){
            document.querySelector('.message').textContent='Too low';
            score--;
            document.querySelector('.score').textContent=String(score);
        }
        else{
            document.querySelector('.message').textContent='😞 You loose'; 
        }
    }

    else if(guess>randomNumber){
        if(score>1){
            document.querySelector('.message').textContent='Too High';
            score--;
            document.querySelector('.score').textContent=String(score);
            }
        else{
            document.querySelector('.message').textContent='😞 You loose'; 
        }
    }
}


document.querySelector('.check').addEventListener('click',checkbtn);



const againbtn=function(){
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent='20'; ////20
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.guess').value=null;
    score=20
    randomNumber=Math.trunc(Math.random()*100)+1;
} 

document.querySelector('.again').addEventListener('click',againbtn);