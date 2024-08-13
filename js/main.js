let playgame=confirm("Shall we play a game?")
if(playgame){
    //play
    let playerchoice=prompt("Please enter rock, paper, scissors");
    if (playerchoice) {
        let playerOne = playerchoice.trim().toLowerCase();
        if (playerOne==="rock" ||
            playerOne==="paper"||
            playerOne==="scissors"
        ) {
            let computerChoice = Math.floor(Math.random()*3+1);
            let computer =
            computerChoice === 1 ? "rock"
            :computerChoice === 2 ? "paper"
            : "scissors";

            let result =
            playerOne === computer ? 
             `playerOne: ${playerOne} \n computer: ${computer} \n Game Tied!`
            :playerOne ==="rock" && computer === "paper" ? 
            `playerOne: ${playerOne} \n computer: ${computer} \n Computer wins!`
            :playerOne === "paper" && computer === "scissors" ?
             `playerOne: ${playerOne} \n computer: ${computer} \n Computer wins!`
             :playerOne === "scissors" && computer === "rock" ?
             `playerOne: ${playerOne} \n computer: ${computer} \n Computer wins!`
             :`playerOne: ${playerOne} \n computer: ${computer}\n playerOne wins!`;
             alert(result);
             let playAgain = confirm("Play Again?");
             playAgain ? location.reload() : alert("ok thanks for playing.");

        }else {alert("You didnt enter rock, paper or scissors")
           location.reload();
        }

    }else{ alert("I guess You changed your mind");}
    
}else {alert("Ok! Next time");
}
