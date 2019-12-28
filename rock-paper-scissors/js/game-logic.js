// All code should be written in this file.

//player one move types and values
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;

//player two move types and values
let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

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
        }
        ;
    } else {
        return console.log("An input error has occurred in rock-paper-scissors.")
    }
    ;
    if (playerOneOutcome === "tie") {
        playerTwoOutcome = "tie";
    } else if (playerOneOutcome === "win") {
        playerTwoOutcome = "loss";
    } else if (playerOneOutcome === "loss") {
        playerTwoOutcome = "win";
    } else {
        return console.log("An input error has occurred in rock-paper-scissors.");
    }
    ;
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
        if (player.toLowerCase() === "player one") {
            playerOneMoveOneType = moveOneType;
            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeType = moveThreeType;
            playerOneMoveThreeValue = moveThreeValue;
        } else if (player.toLowerCase() === "player two") {
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeType = moveThreeType;
            playerTwoMoveThreeValue = moveThreeValue;
        } else {
            return console.log("An error has occurred. Select the correct player.")
        };
    } else{
        return console.log("An error has occurred. Select the correct player.")
    };
};
const getRoundWinner = (roundNumber) => {
    let roundWinner;
    if (typeof roundNumber === "number") {
        const decide = (playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) => {
            const resultObj = rockPaperScissors(playerOneMoveType, playerTwoMoveType);
            if (resultObj.playerOne === "tie") {
                if (playerOneMoveValue === playerTwoMoveValue) {
                    roundWinner = "Tie";
                } else if (playerOneMoveValue > playerTwoMoveValue) {
                    roundWinner = "Player One";
                } else if (playerOneMoveValue < playerTwoMoveValue) {
                    roundWinner = "Player Two"
                } else {
                    return console.log("Error in the value conditionals.");
                }
            } else if (resultObj.playerOne === "win") {
                roundWinner = "Player One";
            } else if (resultObj.playerOne === "loss") {
                roundWinner = "Player Two";
            } else {
                return console.log("Error in the main conditional.");
            };
            return roundWinner
        };
        const playRound = (roundNumber) => {
            if (roundNumber === 1) {
                return decide(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
            } else if (roundNumber === 2) {
                return decide(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
            } else if (roundNumber === 3) {
                 return decide(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
            } else {
                return console.log("Error in the playRound conditional.");
            };
        };
        return playRound(roundNumber);
    } else {
        return console.log("Error in the main conditional.");
    };
};
const getGameWinner = () => {
    console.log("Start of get game winner");
    let roundOne = getRoundWinner(1);
    let roundTwo = getRoundWinner(2);
    let roundThree = getRoundWinner(3);
    let results = [roundOne, roundTwo, roundThree];
    let playerOne = 0;
    let playerTwo = 0;
    let tie = 0;
    results.forEach(result => {
        result === "Player One" ? playerOne++ : result === "Player Two" ? playerTwo++ : result === "Tie" ? tie++ : console.log("Error in getGameWinner");
    });
    let winner = playerOne > playerTwo ? "Player One Wins Match" : playerOne < playerTwo ? "Player Two Wins Match" : "Match is a Tie";
    console.log(winner);
    return winner;
};
