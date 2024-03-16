var min = 5;
var max = 10;
var x = Math.round(Math.random() * (max - min)) + min;
var x2 = Math.round(Math.random() * (max - min)) + min;
var frage = "";
var antwort = parseFloat(x) * parseFloat(x2);
var richtigGemacht = 0;

function gameStart() {
    min = 5;
    max = 10;
    richtigGemacht = 0;
    alert("Spiel Startet!");
    // ab hier schleife
    for (let i = 0; i <7; i++) {
    x = Math.round(Math.random() * (max - min)) + min;
    x2 = Math.round(Math.random() * (max - min)) + min;
    antwort = parseFloat(x) * parseFloat(x2);
    frage = window.prompt("Was gibt "+ x + " * "+ x2 +"?");
    if (frage == antwort) {
        richtigGemacht += 1;
    };
    };
    alert("Du hast" + richtigGemacht + "/7 richtig gemacht.");

    var frage = window.prompt("Nochmal?")
    if (frage == "Ja") {
        gameStart();
    }
}