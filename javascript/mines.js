const max = 16, min = 1;
let mines = parseInt(window.prompt("ENTER NUMBER OF MINES"));

while (mines >= 16 || mines <= 0 || isNaN(mines)) {
  mines = parseInt(window.prompt("ENTER NUMBER OF MINES"));
}

const squ = new Array(16).fill(true);
const r = new Array(16).fill(0);
const d = new Array(16).fill(0);
const winAudio = document.getElementById('win');
const lossAudio = document.getElementById('loss');
const resultDiv = document.getElementById('result');

let clicked = new Array(16).fill(false);
let gameOver = false;
let safeTilesLeft = 16 - mines;

function placeMineAt(x) {
  if (x < 1 || x > 16) return;
  if (squ[x - 1]) {
    d[x - 1] = 1;
    squ[x - 1] = false;
  }
}

function check(x) {
  if (x < 1 || x > 16) return;
  r[x - 1]++;
  if (r[x - 1] === 1) {
    placeMineAt(x);
  } else if (!squ[x - 1]) {
    let nextX = x + 1;
    if (nextX > 16) nextX = 1;
    check(nextX);
  }
}

function placeMines(mines) {
  squ.fill(true);
  r.fill(0);
  d.fill(0);
  for (let i = 0; i < mines; i++) {
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    check(x);
  }
}

function clickTile(tileNumber) {
  if (gameOver || clicked[tileNumber - 1]) return;
  clicked[tileNumber - 1] = true;
  const tile = document.getElementById(`tile_${tileNumber}`);
  if (d[tileNumber - 1] === 1) {
    tile.textContent = "💣";
    lossAudio.currentTime = 0;
    lossAudio.play();
    gameOver = true;
    resultDiv.textContent = "You Lose!💀";
    disableAllTiles();
  } else {
    tile.textContent = '💎';
    winAudio.currentTime = 0;
    winAudio.play();
    safeTilesLeft--;
    if (safeTilesLeft === 0) {
      gameOver = true;
      resultDiv.textContent = "You Win!";
      disableAllTiles();
    }
  }
}

function disableAllTiles() {
  for (let i = 1; i <= 16; i++) {
    document.getElementById(`tile_${i}`).style.pointerEvents = 'none';
  }
}

function enableAllTiles() {
  for (let i = 1; i <= 16; i++) {
    const tile = document.getElementById(`tile_${i}`);
    tile.style.pointerEvents = 'auto';
    tile.textContent = '❓';
  }
}

function resetGame() {
  clicked.fill(false);
  gameOver = false;
  safeTilesLeft = 16 - mines;
  resultDiv.textContent = '';
  enableAllTiles();
  placeMines(mines);
}

function addTileListeners() {
  for (let i = 1; i <= 16; i++) {
    document.getElementById(`tile_${i}`).addEventListener('click', () => clickTile(i));
  }
}

document.getElementById('resetBtn').addEventListener('click', resetGame);

addTileListeners();
placeMines(mines);
