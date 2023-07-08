
let music = new Audio("./tic tac toe/music.mp3")
let audioTurn = new Audio("./tic tac toe/music.mp3")
let gameover = new Audio("./tic tac toe/music.mp3")

let trun = "X"


//functon to change the trun
const changeTurn = () => {
    return turn === "X"?"0": "X"

}

//function to check for a win
const checkWin = () =>{

}

//Game logic
const boxes = document.querySelectorAll('.box');
const boxText = document.querySelectorAll('.boxtext');
console.log(boxText)
Array.from(boxes).forEach((element) => {
    boxText.addEventListener('click', () => {
     if(e.innerText === '' ){
        e.innerText = turn;
        changeTurn();
        audioTurn.play();
        checkWin();
     }

    })
})