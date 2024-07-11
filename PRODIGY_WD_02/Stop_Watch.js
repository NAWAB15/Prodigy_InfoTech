let startTime;
let updatedTime;
let difference;
let timerInterval;
let isRunning = false;
let lapCounter = 1;

const timeDisplay = document.getElementById('time-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const lapBtn = document.getElementById('lap-btn');
const lapsList = document.getElementById('laps-list');

function startStopwatch() {
    if (!isRunning) {
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(updateDisplay, 10);
        isRunning = true;
    }
}

function pauseStopwatch() {
    clearInterval(timerInterval);
    isRunning = false;
    difference = new Date().getTime() - startTime;
}

function resetStopwatch() {
    clearInterval(timerInterval);
    isRunning = false;
    difference = 0;
    timeDisplay.textContent = '00:00:00';
    lapsList.innerHTML = '';
    lapCounter = 1;
}

function updateDisplay() {
    updatedTime = new Date().getTime() - startTime;
    let formattedTime = formatTime(updatedTime);
    timeDisplay.textContent = formattedTime;
}

function formatTime(time) {
    let date = new Date(time);
    let minutes = String(date.getUTCMinutes()).padStart(2, '0');
    let seconds = String(date.getUTCSeconds()).padStart(2, '0');
    let milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0').substring(0, 2);
    return `${minutes}:${seconds}:${milliseconds}`;
}

function recordLap() {
    if (isRunning) {
        let lapTime = formatTime(new Date().getTime() - startTime);
        let lapItem = document.createElement('li');
        lapItem.textContent = `${lapCounter}: ${lapTime}`;
        lapsList.appendChild(lapItem);
        lapCounter++;
    }
}

startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', recordLap);
