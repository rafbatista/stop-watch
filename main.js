
var $startButton = document.getElementById('start')
var $stopButton = document.getElementById('stop')
var $seconds = document.querySelector('.stopwatch')
var seconds = 0

function startSeconds() {
  seconds = seconds + 1
}

function drawSeconds() {
  $seconds.textContent = seconds
}

var startInterval = null
var drawInterval = null

$startButton.addEventListener('click', function() {
  startInterval = setInterval(drawSeconds, 500)
  drawInterval = setInterval(startSeconds, 1000)
})

$stopButton.addEventListener('click', function() {
  clearInterval(startInterval)
  clearInterval(drawInterval)
})
