
var $startButton = document.getElementById('start')
var $seconds = document.querySelector('.stopwatch')
var seconds = 0

function startSeconds() {
  seconds = seconds + 1
}

function drawSeconds() {
  if (seconds >= 0) {
    $seconds.textContent = seconds
  }
}

$startButton.addEventListener('click', function() {
  setInterval(drawSeconds, 500)
  setInterval(startSeconds, 1000)
})
