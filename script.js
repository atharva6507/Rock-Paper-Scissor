let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const messageBox = document.querySelector(".msg-container");
let yourScore = 0;
let computerScore = 0;
const user_score_display = document.querySelector("#user-score");
const comp_score_display = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

const drawGame = () => {
    console.log("Game Draw")
    message.innerText = "Game Draw, Try Again!";
    messageBox.style.backgroundColor = "rgb(11, 11, 76)";
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("You Win!");
        message.innerText = "You Win!";
        yourScore++;
        console.log("Your Score : " + yourScore);
        user_score_display.innerText = yourScore;
        messageBox.style.backgroundColor = "green";
    }
    else{
        console.log("You Lose!");
        message.innerText = "You Lose!";
        computerScore++;
        console.log("Computer Score : " + computerScore);
        comp_score_display.innerText = computerScore;
        messageBox.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice " + userChoice);
    // Generate computer Choice -> modular

    const compChoice = genCompChoice();
    console.log("comp choice " + compChoice);

    let userWin = true;

    if(userChoice == compChoice){
        drawGame();
    }
    else{
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else if(userChoice === "scissor"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

