const squares = document.querySelectorAll(".square");

function getRandomRGB() {
    let rgb = [];
    for(let i = 0; i < 3; i++)
    rgb.push(Math.floor(Math.random() * 255));
    return rgb
}

function setColors() {
    squares.forEach (function (square) {
    square.style.backgroundColor = "rgb(" + getRandomRGB() + ")";
})
}

function generateBlocksInterval() {
    setInterval(() => setColors(), 1000)
}

const flex_containers = document.querySelectorAll(".flex_container");

const generateBtn = document.querySelector(".generate");

let clickedGenerateButton = null;
generateBtn.onclick = function generateBlocks() {
    setColors();
    flex_containers.forEach (container => container.style.visibility = "visible");
    clickedGenerateButton++;
    if (clickedGenerateButton === 1) {
        generateBlocksInterval();
    }
}

document.querySelector(".hide").onclick = function hideBlocks() {
    flex_containers.forEach (container => container.style.visibility = "hidden");
}