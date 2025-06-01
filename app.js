let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"]; //btn colors 

let started = false; 
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if(started == false) {
        console.log("Game started");
        started = true;
        levelUP();
    }
})

function gameFlash(randBtn) {
    randBtn.classList.add("flash");
    //to remove flash class after flashing to get original class back
    setTimeout(function () {
        randBtn.classList.remove("flash");
    }, 250);
}

function userFlash(randBtn) {
    randBtn.classList.add("userflash");
    //to remove flash class after flashing to get original class back
    setTimeout(function () {
        randBtn.classList.remove("userflash");
    }, 250);
}

function levelUP () {
    userSeq = []; //to make user to click number of level times
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`); //gives button with className 
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns (idx) {
    if(gameSeq[idx] === userSeq[idx]) {
        if(gameSeq.length == userSeq.length) {
            setTimeout(levelUP, 1000); // to give time for next click
        }
    } else {
        h2.innerHTML = `Game over! Your score was : ${level} <br>Press any key to Start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress () {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset () {
    console.log("You guessed wrong!")
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    console.log("-----------------------");
}