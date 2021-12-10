const meter = document.getElementById("meter");
const daysLeft = document.getElementById("days-left");

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.

const date = new Date();
const today = date.getDate();
const christmas = 25;
const days = christmas - today;

const audio = new Audio("audio/intro.mp3");
document.getElementById("jingle-btn").addEventListener("click", function () {
  audio.volume = 0.3;
  audio.play();
});

function festivityLoader() {
  daysLeft.textContent = `${days} days left!`;
  meter.value = today;
}

festivityLoader();
