const audioContext = new AudioContext()

const NOTE_DETAILS = [
  { note: "C", key: "Z", frequency: 261.626 },
  { note: "Db", key: "S", frequency: 277.183 },
  { note: "D", key: "X", frequency: 293.665 },
  { note: "Eb", key: "D", frequency: 311.127 },
  { note: "E", key: "C", frequency: 329.628 },
  { note: "F", key: "V", frequency: 349.228 },
  { note: "Gb", key: "G", frequency: 369.994 },
  { note: "G", key: "B", frequency: 391.995 },
  { note: "Ab", key: "H", frequency: 415.305 },
  { note: "A", key: "N", frequency: 440 },
  { note: "Bb", key: "J", frequency: 466.164 },
  { note: "B", key: "M", frequency: 493.883 },
];
const play = () => {
  NOTE_DETAILS.forEach((n) => {
    const keyElement = document.querySelector(`[data-note="${n.note}"]`);
    keyElement.classList.toggle("active", n.active || false);
    if(n.oscillator != null){
      n.oscillator.disconnect()
    }
  });

  //this allow multiple keys in active return a set
  const currentActive = NOTE_DETAILS.filter(n => n.active)
  console.log(currentActive)
  const gain = 1/currentActive.length
  currentActive.forEach(n =>{
    startNote(n,gain)
  })
};

const getNote = (keyBoardOperation) => {
  return NOTE_DETAILS.find((n) => `Key${n.key}` === keyBoardOperation);
};

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const note = getNote(e.code);
  if (note == null) {
    console.log("invalid");
    return;
  }

  note.active = true;
  console.log("play", note);
  play();
});

document.addEventListener("keyup", (e) => {
  const note = getNote(e.code);
  if (note == null) {
    console.log("invalid");
    return;
  }
  note.active = false;
  play()
});

function startNote(n,gain){
  const gainNode = audioContext.createGain()
  gainNode.gain.value = gain
  const oscillator = audioContext.createOscillator()
  oscillator.frequency.value = n.frequency
  oscillator.type = "sine"
  //connect oscillator to audio context
  oscillator.connect(gainNode).connect(audioContext.destination)
  oscillator.start()
  n.oscillator = oscillator
}