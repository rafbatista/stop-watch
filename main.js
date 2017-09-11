
var $startButton = document.getElementById('start')
var $stopButton = document.getElementById('stop')
var $seconds = document.querySelector('.stopwatch')
var seconds = 0

function startSeconds() {
  seconds = seconds + 1
}

function drawSeconds() {
  if (seconds > 0) {
  $seconds.textContent = seconds
  }
}

var startInterval = null
var drawInterval = null
var hasStarted = false

$startButton.addEventListener('click', function() {
  if (!hasStarted) {
    startInterval = setInterval(drawSeconds, 100)
    drawInterval = setInterval(startSeconds, 1000)
    hasStarted = true
  }
})

$stopButton.addEventListener('click', function() {
  hasStarted = false
  clearInterval(startInterval)
  clearInterval(drawInterval)
})
