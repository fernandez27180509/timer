let hours = 0, minutes = 0, seconds = 0;
let running = false;

function start() {
    $("#start-button").attr("disabled", true);
    $("#pause-button").attr("disabled", false);
    $("#reset-button").attr("disabled", false);
    $("#stop-button").attr("disabled", false);
    running = true;
    runClock();
}

function pause() {
    $("#start-button").attr("disabled", false);
    $("#pause-button").attr("disabled", true);
    $("#reset-button").attr("disabled", true);
    $("#stop-button").attr("disabled", false);
    running = false;
}

function reset() {
    $("#start-button").attr("disabled", true);
    $("#pause-button").attr("disabled", false);
    $("#reset-button").attr("disabled", false);
    $("#stop-button").attr("disabled", false);
    hours = 0;
    minutes = 0;
    seconds = 0;
}

function stop() {
    $("#start-button").attr("disabled", false);
    $("#pause-button").attr("disabled", true);
    $("#reset-button").attr("disabled", true);
    $("#stop-button").attr("disabled", true);
    hours = 0;
    minutes = 0;
    seconds = 0;
    running = false;
    $(".hours").text("00");
    $(".minutes").text("00");
    $(".seconds").text("00");
}

async function runClock() {
    let clock = $("#clock");
    while (running) {
        $(".hours").text(format(hours));
        $(".minutes").text(format(minutes));
        $(".seconds").text(format(seconds));
        $("title").text(format(hours) + ":" + format(minutes) + ":" + format(seconds));
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
        await sleep(1000);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function format(n) {
    return n < 10 ? "0" + n : n;
}