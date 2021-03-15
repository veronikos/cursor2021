const squares = document.querySelectorAll(".square");
console.log(squares)

const colors = ['#ffd700', '#0028ff', '#ffd700', '#00ff0b', '#7100ff', '#ff00a7', '#ffd700', '#ff7100', '#0028ff']

squares[2].style.backgroundColor = "pink"

setTimeout(squares.forEach(function (square) {
    square.style.backgroundColor = colors[getRandomNumber(0, colors.length)];
}))

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
