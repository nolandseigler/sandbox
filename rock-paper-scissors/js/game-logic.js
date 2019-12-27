// All code should be written in this file.

//player one move types and values
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;
let isPlayerOneReady = false;
//player two move types and values
let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;
let isPlayerTwoReady = false;

//rock-paper-scissors
const rockPaperScissors = (input1, input2) => {
    let playerOneOutcome;
    let playerTwoOutcome;
    if ((input1 === "rock" || input1 === "paper" || input1 === "scissors") && (input2 === "rock" || input2 === "paper" || input2 === "scissors")) {
        if (input1 === input2) {
            playerOneOutcome = "tie";
        } else if (input1 === "rock") {
            playerOneOutcome = input2 === "scissors" ? "win" : "loss";
        } else if (input1 === "paper") {
            playerOneOutcome = input2 === "rock" ? "win" : "loss";
        } else if (input1 === "scissors") {
            playerOneOutcome = input2 === "paper" ? "win" : "loss";
        } else {
            return console.log("An input type error has occurred in rock-paper-scissors.")
        };
    } else {
        return console.log("An input error has occurred in rock-paper-scissors.")
    };
    if (playerOneOutcome === "tie") {
        playerTwoOutcome = "tie";
    } else if (playerOneOutcome === "win") {
        playerTwoOutcome = "loss";
    } else if (playerOneOutcome === "loss") {
        playerTwoOutcome = "win";
    } else {
        return console.log("An input error has occurred in rock-paper-scissors.");
    };
    let results = {
        playerOne: playerOneOutcome,
        playerTwo: playerTwoOutcome
    };
    return results;
};
// console.log(rockPaperScissors("rock", "scissors"));
//function that sets the values of the player move vars
const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (typeof player === "string" && player.length > 0) {
        if (player.toLowerCase() === "player one" && !isPlayerOneReady) {
            playerOneMoveOneType = moveOneType;
            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeType = moveThreeType;
            playerOneMoveThreeValue = moveThreeValue;
            isPlayerOneReady = true;
        } else if (player.toLowerCase() === "player two" && !isPlayerTwoReady) {
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeType = moveThreeType;
            playerTwoMoveThreeValue = moveThreeValue;
            isPlayerTwoReady = true;
        } else {
            return console.log("An error has occurred. Select the correct player.")
        };
    };
else {
        return console.log("An error has occurred. Select the correct player.")
    };
};
const getRoundWinner = (roundNumber, playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) => {
    if (typeof roundNumber === "number" && typeof playerOneMoveType === "string" && typeof playerOneMoveValue === "string" && typeof playerTwoMoveType === "string" && typeof playerTwoMoveValue === "string") {
        let roundOneWinner;
        let roundTwoWinner;
        let roundThreeWinner;
        let overallWinner;
        if (roundNumber === 1) {
            const resultObj = rockPaperScissors(playerOneMoveType, playerTwoMoveType);
            if (resultObj.playerOne === "tie") {
                if (playerOneMoveValue === playerTwoMoveValue) {
                    roundOneWinner = "It's a Tie!";
                }
                else if (playerOneMoveValue > playerTwoMoveValue) {
                    roundOneWinner = "Player One Wins. Player Two Loses.";
                } else if (playerOneMoveValue < playerTwoMoveVlaue) {
                    roundOneWinner = "Player One Loses. Player Two Wins."
                } else {
                    return console.log("Error in the value conditionals.");
                }
            } else if (resultObj.playerOne) {}
        }

    }
}