const prompt = require("prompt-sync")();

let rNum = Math.random();
let uNum = Number(prompt("Pick a number, any number: "));
rNum = Math.floor(rNum * 10) + 1;
console.log("You picked: " + uNum);
if (uNum == rNum) {
    console.log("You win!");
} else {
    console.log("You lose! The number was: " + rNum);
}

//alert("Game over!");
