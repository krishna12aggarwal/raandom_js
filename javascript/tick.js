const cells = document.querySelectorAll('.cell');
const statu = document.getElementById('status');
const humanScoreEl = document.getElementById('humanScore');
const computerScoreEl = document.getElementById('computerScore');
const resetBtn = document.getElementById('resetBtn');

let board = ['', '', '', '', '', '', '', '', ''];
let humanTurn = true;
let gameActive = true;
let humanScore = 0;
let computerScore = 0;

const winningCombos = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // cols
  [0,4,8], [2,4,6]           // diagonals
];

function handleCellClick(e) {
  const index = [...cells].indexOf(e.target);
  if (board[index] !== '' || !gameActive) return;

  board[index] = 'X';
  e.target.querySelector('h1').textContent = 'X';

  if (checkWin('X')) {
    humanScore++;
    updateScore();
    statu.textContent = 'You Win!';
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== '')) {
    statu.textContent = "It's a tie!";
    gameActive = false;
    return;
  }

  statu.textContent = "Computer's turn...";
 setTimeout(computerMove, 1200);
}

function computerMove() {
  if (!gameActive) return;

  let available = board.map((val, i) => val === '' ? i : null).filter(i => i !== null);
  let move = available[Math.floor(Math.random() * available.length)];
  board[move] = 'O';
  cells[move].querySelector('h1').textContent = 'O';

  if (checkWin('O')) {
    computerScore++;
    updateScore();
    statu.textContent = 'Computer Wins!';
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== '')) {
    statu.textContent = "It's a tie!";
    gameActive = false;
    return;
  }

  statu.textContent = 'Your move!';
}

function checkWin(player) {
  return winningCombos.some(combo => 
    combo.every(index => board[index] === player)
  );
}

function updateScore() {
  humanScoreEl.textContent = humanScore;
  computerScoreEl.textContent = computerScore;
}

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.querySelector('h1').textContent = '');
  statu.textContent = 'Your move!';
  gameActive = true;
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetBtn.addEventListener('click', resetBoard);
