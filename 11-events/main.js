const bassString = document.getElementById("bassString")
const cigaretteLighter = document.getElementById("cigaretteLighter")
const openSigaretteLighter = document.getElementById("openSigaretteLighter")
const croudLaugh = document.getElementById("croudLaugh")
const mouseClick = document.getElementById("mouseClick")
const horn = document.getElementById("horn")
const rotarySwitch = document.getElementById("rotarySwitch")

const soundsArray = [bassString, cigaretteLighter, openSigaretteLighter, croudLaugh, mouseClick, horn, rotarySwitch]

function playSound(audio) {
    audio.cloneNode().play();
}

const btnA = document.getElementById("letterA")
const btnS = document.getElementById("letterS")
const btnD = document.getElementById("letterD")
const btnF = document.getElementById("letterF")
const btnG = document.getElementById("letterG")
const btnH = document.getElementById("letterH")

const buttonsArray = [btnA, btnS, btnD, btnF, btnG, btnH];

const listenersArray = [];

for (let i = 0; i < buttonsArray.length; i++) {
    buttonsArray[i].addEventListener('click', playSound.bind(null, soundsArray[i]));
    const soundName = document.createElement('span')
    let soundNameCase = (soundsArray[i].id).replace(/([A-Z][a-z])/g, " $1")
    soundName.innerHTML = `${(soundNameCase[0].toUpperCase() + soundNameCase.slice(1))}`
    buttonsArray[i].appendChild(soundName)
}

function splitCamelCaseToString(s) {
    return s.split(/(?=[A-Z])/).map(function(p) {
        return p.charAt(0).toUpperCase() + p.slice(1);
    }).join(' ');
}

