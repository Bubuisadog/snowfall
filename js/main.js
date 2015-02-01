$(document).ready(function() {
    snowFall.snow($("#snow"), {
        minSize: 1,
        maxSize: 8,
        flakeIndex: 999999,
        round: true,
        minSpeed: 1,
        maxSpeed: 20,
        flakeCount: 200
    });
});