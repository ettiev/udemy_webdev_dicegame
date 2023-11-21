function diceNumberGenerator() {
    diceNumber = Math.floor(Math.random() * 6) + 1
    return diceNumber
}

var player1Image = document.querySelector(".img1");
var player2Image = document.querySelector(".img2");

var resultHeading = document.querySelector('h1');

var player1Dice = diceNumberGenerator();
var player2Dice = diceNumberGenerator();

player1Image.setAttribute("src", "./images/dice" + player1Dice.toString() + ".png");
player2Image.setAttribute("src", "./images/dice" + player2Dice.toString() + ".png");

if (player1Dice === player2Dice) {
    resultHeading.textContent = "Draw!";
} else {if (player1Dice > player2Dice) {
    resultHeading.textContent = "🚩 Player One Wins!";
    } else {
        resultHeading.textContent = "🚩 Player Two Wins!";
    }
}