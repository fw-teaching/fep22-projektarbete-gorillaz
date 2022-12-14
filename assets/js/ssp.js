
console.log('ssp.js init'); // För att se att skriptet laddats in
// Ny kod där man spelar mot dator istället för annan spelare
// Man har nu 10 drag, kanske ändra det? edit: ändrade till 5, nu kan man säga att det är ett bäst av 5 spel.
//TO-DO: Implementera att man kan spela med pengar.
let money = localStorage.money;
let bet = Number(document.getElementById("bet").value || 0);
function placeBet(){
    if(bet>money){
        alert("You don't have that much money to bet!")
    }else if(bet<=money){
        alert("Bet placed!")
        localStorage.setItem("money", money-bet);
        console.log(money)
    }

}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;



    function playGame() {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['rock', 'paper', 'scissors']

        playerOptions.forEach(option => {
            option.addEventListener('click', function () {

                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${5 - moves}`;


                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                winner(this.innerText, computerChoice)


                if (moves == 5) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })

    }
//Silly goofy saker sker; ibland då datorn vinner får spelaren också ett poäng.

    function winner(player, computer) {
        const result = document.querySelector('.result');
        const playerScoreCount = document.querySelector('.p-count');
        const computerScoreCount = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            result.textContent = 'Tie'
        }
        else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreCount.textContent = computerScore;

            } else if(computer=='scissors'){
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreCount.textContent = playerScore;
            }
        }
        else if (player == 'scissors') {
            if (computer == 'rock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreCount.textContent = computerScore;
            } else if(computer=='paper'){
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreCount.textContent = playerScore;
            }
        }
        else if (player == 'paper') {
            if (computer == 'scissors') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreCount.textContent = computerScore;
            } else if(computer=='rock'){
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreCount.textContent = playerScore;
            }
        }
    }


    function gameOver(playerOptions, movesLeft) {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })


        chooseMove.innerText = 'Game Over!';
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.innerText = 'You Won :)';
            result.style.color = 'green';
            localStorage.setItem("money", money+bet+bet);
            console.log(money);
        }
        else if (playerScore < computerScore) {
            result.innerText = 'You Lost :(';
            result.style.color = 'red';
        }
        else if (playerScore==computerScore) {
            result.innerText = 'Tie';
        }
        reloadBtn.innerText = 'RELOAD';
        reloadBtn.style.display = 'flex';
        reloadBtn.style.justifyContent = 'center';
        reloadBtn.style.padding = '20px';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }


    playGame();

}


game();
document.getElementById("betBtn").addEventListener("click", placeBet);