/* Exempel på JS-fil för specifik sida (ssp-sidan i det här fallet) */

console.log('ssp.js init'); // För att se att skriptet laddats in
/*
let spelare1, spelare2;
function startaSpelet() {
    console.log("Loading game...")
    spelare1 = prompt("Spelare 1 - Välj sten, sax eller papper")
    spelare2 = prompt("Spelare 2 - Välj sten, sax eller papper")
    spelare1 = spelare1.toLowerCase();
    spelare2 = spelare2.toLowerCase();
    console.log("Spelare 1 valde " + spelare1)
    console.log("Spelare 2 valde " + spelare2)
    vemVann(spelare1, spelare2);
}

function vemVann(p1, p2)//case sensitive, hence lowercase ^
{
    if (p1 == p2) {
        alert("Jämnt spel.");
    }
    else if (p1 == "sten") {
        console.log("Spelare 1 har valt sten - hur kan hen vinna?");
        if (p2 == "sax") {
            alert("Spelare 1 vann.")
        } else if (p2 == "papper") {
            alert("Spelare 2 vann.")
        }
    }
    else if (p1 == "sax") {
        console.log("Spelare 1 har valt sax - hur kan hen vinna?")
        if (p2 == "papper") {
            alert("Spelare 1 vann.")
        } else if (p2 == "sten") {
            alert("Spelare 2 vann.")
        }
    } else if (p1 == "papper") {
        console.log("Spelare 1 har valt papper - hur kan hen vinna?")
        if (p2 == "sten") {
            alert("Spelare 1 vann.")
        } else if (p2 == "sax") {
            alert("Spelare 2 vann.")
        }
    }
}

document.getElementById("playbutton").addEventListener("click", startaSpelet); */
// Ny kod där man spelar mot dator istället för annan spelare

function game () {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
 
 
 
function playGame  ()  {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissors']
      
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
 
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;
                 
 
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
 
                // Function to check who wins
                winner(this.innerText,computerChoice)
                 
                // Calling gameOver function after 10 moves
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
         
    }
 
    // Function to decide winner
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Tie'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
 
            }else{
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
 
    // Function to run when game is over
    const gameOver = (playerOptions,movesLeft) => {
 
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
 
      
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
 
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
 
 
    // Calling playGame function inside game
    playGame();
     
}
 
// Calling the game function
game();