console.log("MyTicTacToe.com");
let ting = new Audio('ting.mp3');
let Music = new Audio('Music.mp3')
let turn = 'X';
let gameOver = false;
//Function to change the Turn
const changeTurn = () =>{
    return turn === 'X'?"0": "X";
}
//Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.turn').innerText = boxtext[e[0]].innerText + " Won"
            gameOver = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "500px";
            
            Music.play();
        }
   
    })
}


//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
         if(!gameOver){
                document.getElementsByClassName("turn")[0].innerText  = "Turn for " + turn;
         }
        }
    })
})
let reset = document.getElementById('reset')
//Logic For Reset Button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
        Music.pause();
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
        turn = "X"; 
        gameOver = false
        document.getElementsByClassName("turn")[0].innerText  = "Turn for " + turn;
    });
})