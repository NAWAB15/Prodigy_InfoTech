const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("reset");
const msg = document.querySelector("#msg");

let gameActive = true;
let currentPlayer = "O";
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerText === "" && gameActive) {
      cell.innerText = currentPlayer;
      cell.currentPlayer === "O";
      checkWinner();
      currentPlayer = currentPlayer === "O" ? "X" : "O";
    }
  });
});

const showWinner = (winner) => {
  msg.innerText = `Winner is: ${winner}`;
  gameActive = false;
};

const checkWinner = () => {
  for (let pattern of winningConditions) {
    let posi1val = cells[pattern[0]].innerText;
    let posi2val = cells[pattern[1]].innerText;
    let posi3val = cells[pattern[2]].innerText;
    if (posi1val !== "" && posi2val !== "" && posi3val !== "") {
      if (posi1val === posi2val && posi2val === posi3val) {
        showWinner(posi1val);
        return;
      }
    }
  }

  if ([...cells].every((cell) => cell.innerText !== "")) {
    msg.innerText = "Draw!";
    gameActive = false;
  }
};

// Reset function using arrow function
const handleReset = () => {
  gameActive = true;
  currentPlayer = "O";
  msg.innerText = ""; // Clear winner message
  cells.forEach((cell) => {
    cell.innerText = ""; // Clear cell content
    cell.style.color = "#000"; // Reset cell color
  });
};

// Event listener for reset button
resetButton.addEventListener("click", handleReset);
