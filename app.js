let userScore = 0;
let computerScore = 0;
const userScore_span =  document.getElementById("user-score");  
const computerScore_span =  document.getElementById("computer-score");  
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToCapital(word){
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sup().toUpperCase();
    const smallCompWord = "comp".fontsize(3).sup().toUpperCase();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToCapital(userChoice)}${smallUserWord} beats ${convertToCapital(computerChoice)}${smallCompWord}. You Win!`
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 200);
    scoreBoard_div.classList.add('green-burst');
    setTimeout(function() {scoreBoard_div.classList.remove('green-burst')}, 200)
}

function lose(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sup().toUpperCase();
    const smallCompWord = "comp".fontsize(3).sup().toUpperCase();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToCapital(userChoice)}${smallUserWord} loses to ${convertToCapital(computerChoice)}${smallCompWord}. You Lost!`
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 200);
    scoreBoard_div.classList.add('red-burst');
    setTimeout(function() {scoreBoard_div.classList.remove('red-burst')}, 200)

}

function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sup().toUpperCase();
    const smallCompWord = "comp".fontsize(3).sup().toUpperCase();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToCapital(userChoice)}${smallUserWord} equals ${convertToCapital(computerChoice)}${smallCompWord}. It's a Draw!`
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() {userChoice_div.classList.remove('gray-glow')}, 200);
}

function game(userChoice){
const computerChoice = getComputerChoice();
switch(userChoice + computerChoice){
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
        win(userChoice, computerChoice);
        break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
        lose(userChoice, computerChoice);
        break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
        draw(userChoice, computerChoice);
        break;
}
}

function main () {
    rock_div.addEventListener('click', function() {
    game('rock');
    })

    paper_div.addEventListener('click', function() {
    game('paper');
    })

    scissors_div.addEventListener('click', function() {
    game('scissors');
    })

} 

main();