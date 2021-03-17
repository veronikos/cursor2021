const squares = document.querySelectorAll(".square");

function getRandomRGB() {
  let rgb = [];
  for (let i = 0; i < 3; i++) rgb.push(Math.floor(Math.random() * 255));
  return "rgb(" + rgb + ")";
}

// c этим вариантом почти получилось. Только! когда делаются ряды по 5, между ними остаются промежутки

// function generateBlocks() {
//   const space = document.querySelector(".squareSpace");
//   space.innerHTML = "";

//   const row = document.createElement("div");
//   row.className = "row";
//   row.style.display = "flex";
//   row.style.cssText = "flex-wrap: wrap; height: auto; width: 250px; gap: 0"

//   space.appendChild(row);

//   for (let i = 0; i < 25; i++) {
//     const square = document.createElement("div")
//     square.className = "square"
//     square.style.cssText = "width: 50px; height: 50px; display: inline-block"
//     square.style.backgroundColor = getRandomRGB()
//     row.appendChild(square)
//   }
// }


function generateBlocks() {
  const space = document.querySelector(".squareSpace");
  space.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const row = document.createElement("div");
    row.className = "row";
    row.style.display = "flex";
    space.appendChild(row);

    for (let i = 0; i < 5; i++) {
      const square = document.createElement("div")
      square.className = "square"
      square.style.cssText = "width: 50px; height: 50px; display: inline-block"
      square.style.backgroundColor = getRandomRGB()
      row.appendChild(square)
    }
  }
}

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

let startInterval = null;

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

stopBtn.onclick = function() {
	clearInterval(startShuffle);
  clickedShuffleButton = null;
}
