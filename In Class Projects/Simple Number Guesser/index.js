function numGuess() {
    let rNum = Math.floor(Math.random() * 10) + 1;
    let uNum = Number(document.getElementById("userGuess").value);

    if (!uNum || uNum < 1 || uNum > 10) {
        document.getElementById("results").innerHTML = "<br>Please enter a valid number between 1 and 10!<br>";
        return;
    }

    console.log("You picked: " + uNum);

    let resultHTML = "<br>You picked: " + uNum + "<br>";

    if (uNum == rNum) {
        console.log("You win!");
        resultHTML += "You win!<br>";
        alert("You win!");
    } else {
        console.log("You lose! The number was: " + rNum);
        resultHTML += "You lose!<br>";
    }

    resultHTML += "The Number was: " + rNum + "<br>";
    resultHTML += "<button onclick='numGuess()'>SPAM ME TIL U WIN</button>";

    document.getElementById("results").innerHTML = resultHTML;
}
numGuess();
