const iWinURL = "https://image.pngaaa.com/329/1226329-middle.png";
const iLoseURL = "https://www.vhv.rs/dpng/d/456-4569494_stick-people-png-win-win-vs-win-loose.png";

function numGuess() {
    const wImg = document.getElementById("iWin");
    const lImg = document.getElementById("iLose");

    // Set image sources
    wImg.src = iWinURL;
    lImg.src = iLoseURL;

    // Hide both images initially
    wImg.style.display = "none";
    lImg.style.display = "none";
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
        wImg.style.display = "block";
        wImg.style.top = "350px";
        wImg.style.left = "8px";
        alert("You win!");
    } else {
        console.log("You lose! The number was: " + rNum);
        resultHTML += "You lose!<br>";
        lImg.style.display = "block";
        lImg.style.top = "350px";
        lImg.style.left = "8px";
    }

    resultHTML += "The Number was: " + rNum + "<br>";
    resultHTML += "<button onclick='numGuess()'>SPAM ME TIL U WIN</button>";

    document.getElementById("results").innerHTML = resultHTML;
}
numGuess();
//alert("Game over!");
