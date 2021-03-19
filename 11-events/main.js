const bassString = document.getElementById("bassString") 

function playSound(audio) {
    audio.cloneNode()
    audio.play();
    console.log("Bass string played")
}

const btnA = document.getElementById("letterA")

btnA.addEventListener("click", playSound.bind(null, bassString))

// var button = document.querySelector('.button');

// function setupSynth() {
//   window.synth = new Tone.Synth({
//     oscillator: {
//       type: 'sine',
//       modulationFrequency: 0.5
//     },
//     envelope: {
//       attack: 0,
//       decay: 0.2,
//       sustain: 0,
//       release: 0.5,
//     }
//   }).toMaster();
// }

