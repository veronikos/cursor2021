const squares = document.querySelectorAll(".square");

function getRandomRGB() {
  const rgb = [];
  for (let i = 0; i < 3; i++) {rgb.push(Math.floor(Math.random() * 255))};
  return "rgb(" + rgb + ")";
}

// Create 25 squares and wrap them into 5 rows.

function generateBlocks() {
  const space = document.querySelector(".squareSpace");
  space.innerHTML = "";

  const row = document.createElement("div");
  row.className = "row";
  row.style.cssText =
    "display: flex; flex-wrap: wrap; width: 250px";
  space.appendChild(row);

  for (let i = 0; i < 25; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.cssText = "width: 50px; height: 50px; display: inline-block";
    square.style.backgroundColor = getRandomRGB();
    row.appendChild(square);
  }
}

// ALternative generateBlocks(): Create 5 rows, 5 squares each.

// function generateBlocks() {
//   const space = document.querySelector(".squareSpace");
//   space.innerHTML = "";

//   for (let i = 0; i < 5; i++) {
//     const row = document.createElement("div");
//     row.className = "row";
//     space.appendChild(row);

//     for (let i = 0; i < 5; i++) {
//       const square = document.createElement("div")
//       square.className = "square"
//       square.style.cssText = "width: 50px; height: 50px; display: inline-block"
//       square.style.backgroundColor = getRandomRGB()
//       row.appendChild(square)
//     }
//   }
// }

const generateBtn = document.querySelector(".generate");
const shuffleBtn = document.querySelector(".shuffle");
const stopBtn = document.querySelector(".stop");

generateBtn.onclick = function () {
  generateBlocks();
  shuffleBtn.removeAttribute("disabled");
  stopBtn.removeAttribute("disabled");
};

function shuffleColors() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(function (square) {
    square.style.backgroundColor = getRandomRGB();
  });
}

function generateBlocksInterval() {
  startShuffle = setInterval(() => shuffleColors(), 1000);
}

let clickedShuffleButton = null;

shuffleBtn.onclick = function () {
  clickedShuffleButton++;
  if (clickedShuffleButton === 1) {
    generateBlocksInterval();
  }
};

stopBtn.onclick = function () {
  clearInterval(startShuffle);
  clickedShuffleButton = null;
};
