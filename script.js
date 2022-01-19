var ms = 0,  // contain the miliseconds of the timer
  s = 0,     // contain the seconds of the timer
  m = 0, 
  hr =0;    // contain the minutes of the timer
var timer;   // show the time


// accessing the display timer div

var stopwatchEl = document.querySelector(".stopwatch");

//  Mathod to start the watch timer 

function start() {
  if (!timer) {
    timer = setInterval(run, 10);
  }
}

//method to run the timer and update the value of the timer

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
  if (m == 60) {
    m = 0;
    hr++;
  }
}

// method to pause the watch

function pause() {
  stopTimer();
}

// method to stop the watch

function stop() {

  // 
  stopTimer();
  ms = 0;
  s = 0;
  m = 0;
  hr = 0;
  stopwatchEl.textContent = getTimer();
}

// common method to stop the watch and clear the timer interval

function stopTimer() {

  // clearing the previous interval from timer and making the value of timer false
  clearInterval(timer);
  timer = false;
}

// method to get the time

function getTimer() {
  return (
    // conditions to get the time in a particular format 
    (hr < 10 ? "0" + hr : hr) +
    ":" +
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

