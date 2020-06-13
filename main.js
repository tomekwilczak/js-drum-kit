// Defining sound files
const aSound = new Audio("sounds/clap.wav");
const sSound = new Audio("sounds/hihat.wav");
const dSound = new Audio("sounds/kick.wav");
const fSound = new Audio("sounds/openhat.wav");
const gSound = new Audio("sounds/boom.wav");
const hSound = new Audio("sounds/ride.wav");
const jSound = new Audio("sounds/snare.wav");
const kSound = new Audio("sounds/tom.wav");
const lSound = new Audio("sounds/tink.wav");
console.log(typeof aSound);

// Defining square divs
const aSquare = document.querySelector(".s-sound--js");
const sSquare = document.querySelector(".s-sound--js");
const dSquare = document.querySelector(".d-sound--js");
const fSquare = document.querySelector(".f-sound--js");
const gSquare = document.querySelector(".g-sound--js");
const hSquare = document.querySelector(".h-sound--js");
const jSquare = document.querySelector(".j-sound--js");
const kSquare = document.querySelector(".k-sound--js");
const lSquare = document.querySelector(".l-sound--js");

sSquare.addEventListener("click", playClick);

function playClick() {
  sSound.play();
}

// Added keypress listening for watching keyboard presses

document.addEventListener("keypress", playKey);

// Changing pressed key name to xSound string
function playKey(key) {
  let keyStr = key.code;
  keyStr = keyStr.slice(3, 4);
  keyStr = keyStr.toLowerCase();
  keyStr = `${keyStr}Sound`;
  console.log(`${keyStr}`);
  console.log(typeof aSound);
  keyStr.play(); // to nie działa
  //   aSound.play(); // to działa
}
