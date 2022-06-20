var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start() {

    timer = true;
    stopwatch();
}

function stopp() {
    timer = false;
}

function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById('count').innerHTML = "00";
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
}

function stopwatch() {
    
    if (timer == true) {
        
    
        count = count + 1;
        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
            count = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            count = 0;
            min = 0;
            sec = 0;
        }
        let minString = min;
        let secString = sec;
        let countString = count;
        let hrString = hr;
        if (hr < 10) {
            hrString = "0" + hr;
        }
        if (sec < 10) {
            secString = "0" + sec;
        }
        if (count < 10) {
            countString = "0" + count;
        }
        document.getElementById('count').innerHTML = countString;
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        setTimeout("stopwatch()", 10);
    }
}