let twentySec = document.getElementById("twentySecondsBtn");
let thirtySec = document.getElementById("thirtySecondsBtn");
let fortySec = document.getElementById("fortySecondsBtn");
let oneMin = document.getElementById("oneMinuteBtn");
let p = document.getElementById("timerText");

let timerId;

function startTimer(duration) {
    clearInterval(timerId);
    let counter = duration;
    timerId = setInterval(function() {
        if (counter > 1) {
            counter -= 1;
            p.textContent = counter + " seconds left";
        } else {
            clearInterval(timerId);
            p.textContent = "Your moment is completed";
        }
    }, 1000);
}

twentySec.addEventListener("click", function() {
    startTimer(20);
});

thirtySec.addEventListener("click", function() {
    startTimer(30);
});

fortySec.addEventListener("click", function() {
    startTimer(40);
});

oneMin.addEventListener("click", function() {
    startTimer(60);
});