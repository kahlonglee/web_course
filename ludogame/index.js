const render01 = document.getElementById("render-01");
const render02 = document.getElementById("render-02");
const result01 = document.getElementById("result-01");
const result02 = document.getElementById("result-02");
const startBTN = document.getElementById("btn-start-main");
const replayBTN = document.getElementById("btn-replay");
const play01Btn = document.getElementById("btn-start-01");
const play02Btn = document.getElementById("btn-start-02");
let card01 = [];
let card02 = [];
let sum1 = 0;
let sum2 = 0;

function getNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

class player {
  constructor(playername, point) {
    this.name = playername;
    this.point = [point];
  }
}

function play1() {
  let card1 = getNumber();
  sum1 += card1;
  card01.push(card1);
  console.log(card01);
  render01.textContent = sum1;
}

function play2() {
  let card2 = getNumber();
  sum2 += card2;
  card02.push(card2);
  console.log(card02);
  render02.textContent = sum2;
}

function play() {
  play02Btn.click();
  play01Btn.click();
  validate();
  check();
}

function validate() {
  if (sum1 > sum2 && sum1 >= 50) {
    result01.textContent = "WIN!";
    result02.textContent = "LOSE!";
  } else if (sum2 > sum1 && sum2 >= 50) {
    result02.textContent = "WIN!";
    result01.textContent = "LOSE!";
  } else if (sum1 === sum2 && sum1 === 50 && sum2 === 50) {
    result02.textContent = "DRAW!";
    result01.textContent = "DRAW!";
  } else {
    console.log("in progress");
  }
}

function check() {
  if (sum2 >= 50 || sum1 >= 50) {
    startBTN.disabled = true;
    startBTN.style.display = "none";
    replayBTN.style.display = "block";
  }
}

replayBTN.addEventListener("click", () => {
  document.location.reload();
});
