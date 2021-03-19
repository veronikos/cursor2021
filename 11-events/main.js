const bassString = document.getElementById("bassString") 

function playSound() {
    bassString.play();
    console.log("Bass string played")
}

const btnA = document.getElementById("letterA")

btnA.addEventListener("click", playSound)