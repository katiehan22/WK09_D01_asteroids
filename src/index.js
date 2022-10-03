console.log("Webpack is working!");
const canvas = document.getElementById("game-canvas")
const ctx = canvas.getContext("2d")

const MovingObject = require('./moving_object.js')
window.MovingObject = MovingObject