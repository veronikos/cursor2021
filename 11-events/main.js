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

const btnsAll = document.querySelectorAll("button")

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
}

for (let i = 0; i < buttonsArray.length; i++) {
    const soundName = document.createElement('span')
    let soundNameCase = (soundsArray[i].id).replace(/([A-Z][a-z])/g, " $1")
    soundName.innerHTML = `${(soundNameCase[0].toUpperCase() + soundNameCase.slice(1))}`
    buttonsArray[i].appendChild(soundName)
}


// document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyA') {
//         playSound(soundsArray[0]);
//         const focusedButton = `
//             outline: none;
//             box-shadow: 
//             20px 15px 30px yellow, 
//             -20px 15px 30px lime, 
//             -20px -15px 30px blue, 
//             20px -15px 30px red;
//         }`  
//         btnA.style = focusedButton;
//     }
//     else {
//         btnsAll.style = `
//         background-color:rgb(44, 42, 42, 0.6);
//         box-shadow: 0 1px 9px 0 rgba(0, 0, 0, 0.4);
//         color: violet;
//         margin: 2em;
//         min-height: 90px;
//         flex: 0 1 120px;
//         border: solid black 4px;
//         border-radius: 7px;`
//     }
//   });

//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyS') {
//         playSound(soundsArray[0]);
//         const focusedButton = `
//             outline: none;
//             box-shadow: 
//             20px 15px 30px yellow, 
//             -20px 15px 30px lime, 
//             -20px -15px 30px blue, 
//             20px -15px 30px red;
//         }`
//         btnS.style = focusedButton;
//     }
//   });

