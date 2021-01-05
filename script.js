let currentTurn = 1;
let res = [];

function getRandomNumber(min, max) {
  const rand = Math.floor(Math.random() * max + min);
  return rand;
}

function getRandomData() {
  const randomNum = getRandomNumber(1, 6);
  return randomNum;
}

function printResult() {
  const randomNumber = getRandomData();
  if (currentTurn === 1) {
    document.getElementById(
      "points-text-player1"
    ).innerHTML = `Points: ${randomNumber}`;
    document.getElementById("whoPlays").innerHTML = "Now plays PLAYER2!!!";
    res.push(randomNumber);
    currentTurn++;
  } else if (currentTurn === 2) {
    document.getElementById(
      "points-text-player2"
    ).innerHTML = `Points: ${randomNumber}`;
    res.push(randomNumber);
    currentTurn++;
  }
}

function showWinner() {
  printResult();
  const values = res;
  console.log(values);
  let finalResult;
  if (values[0] > values[1]) {
    finalResult = "Player 1 wins!!!";
  } else if (values[0] < values[1]) {
    finalResult = "Player 2 wins!!!";
  } else {
    finalResult = "Nobody wins!!!";
  }

  if (currentTurn === 3) {
    document.getElementById("winner").innerHTML = finalResult;
  }
}

function reset() {
  document.getElementById("winner").innerHTML = "Play to see the winner here";
  currentTurn = 1;
  document.getElementById("points-text-player1").innerHTML = `Points:`;
  document.getElementById("points-text-player2").innerHTML = `Points:`;
  document.getElementById("whoPlays").innerHTML = "Now plays PLAYER1!!!";
  res = [];
}

document.getElementById("play").addEventListener("click", showWinner);
document.getElementById("reset").addEventListener("click", reset);
