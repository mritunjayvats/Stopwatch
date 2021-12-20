var ms = 0,
  s = 0,
  m = 0;
var timer;

var stopwatchEl = document.querySelector(".stopwatch");

//  Mathod to start the watch 

function start() {
  if (!timer) {
    timer = setInterval(run, 10);
  }
}

function run() {
  stopwatchEl.textContent = getTimer();
  ms++;
  if (ms == 100) {
    ms = 0;
    s++;
  }
  if (s == 60) {
    s = 0;
    m++;
  }
}

// method to pause the watch

function pause() {
  stopTimer();
}

// method to stop the watch

function stop() {
  stopTimer();
  ms = 0;
  s = 0;
  m = 0;
  stopwatchEl.textContent = getTimer();
}

// common method to stop the watch and clear the timer interval

function stopTimer() {
  clearInterval(timer);
  timer = false;
}

// method to get the time

function getTimer() {
  return (
    (m < 10 ? "0" + m : m) +
    ":" +
    (s < 10 ? "0" + s : s) +
    ":" +
    (ms < 10 ? "0" + ms : ms)
  );
}

// method to restart the watch

function restart() {
  stop();
  start();
}

