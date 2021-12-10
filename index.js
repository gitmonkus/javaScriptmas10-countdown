const meter = document.getElementById("meter")
const daysLeft = document.getElementById('days-left')

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.

const audio = new Audio('audio/intro.mp3')

const date = new Date()
const today = date.getDate()
const christmas = 25
const days = christmas - today


function festivityLoader() {
    audio.volume = .3
    audio.play()
    daysLeft.textContent = `${days} days left!`
    meter.value = today
    
    
}

festivityLoader()