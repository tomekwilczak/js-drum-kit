const aSound = new Audio("../sounds/clap.wav");
const sSound = new Audio("../sounds/hihat.wav");
const dSound = new Audio("../sounds/kick.wav");
const fSound = new Audio("../sounds/openhat.wav");
const gSound = new Audio("../sounds/boom.wav");
const hSound = new Audio("../sounds/ride.wav");
const jSound = new Audio("../sounds/snare.wav");
const kSound = new Audio("../sounds/tom.wav");
const lound = new Audio("../sounds/tink.wav");

document.addEventListener("keypress", playKey);

function PlaySound() {
  dSound.play();
  console.log("play");
}

function playKey(sound) {
  let keyStr = sound.code;
  keyStr = keyStr.slice(3, 4);
  keyStr = keyStr.toLowerCase();
  keyStr = `${keyStr}Sound`;
  PlaySound(`${keyStr}Sound`);
  console.log(`${keyStr}`);
}

// PlaySound(aSound);
// setTimeout(2000);
// PlaySound(sSound);
// setTimeout(2000);
// PlaySound(dSound);
// PlaySound(fSound);
// PlaySound(gSound);
