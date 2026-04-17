let CONTENT_DISPLAY = {
    content01: document.getElementById('content01'),
    content02: document.getElementById('content02'),
    content03: document.getElementById('content03'),
    content04: document.getElementById('content04'),
    content05: document.getElementById('content05'),
    content06: document.getElementById('content06'),
    content07: document.getElementById('content07'),
    content08: document.getElementById('content08'),
    content09: document.getElementById('content09'),
    content10: document.getElementById('content10'),
    content11: document.getElementById('content11'),
    content12: document.getElementById('content12'),
    content13: document.getElementById('content13'),
    content14: document.getElementById('content14'),
    content15: document.getElementById('content15')

}
let rest = 3;

CONTENT_DISPLAY.content01.style.display = "flex";
CONTENT_DISPLAY.content02.style.display = "none";
CONTENT_DISPLAY.content03.style.display = "none";
CONTENT_DISPLAY.content04.style.display = "none";
CONTENT_DISPLAY.content05.style.display = "none";
CONTENT_DISPLAY.content06.style.display = "none";
CONTENT_DISPLAY.content07.style.display = "none";
CONTENT_DISPLAY.content08.style.display = "none";
CONTENT_DISPLAY.content09.style.display = "none";
CONTENT_DISPLAY.content10.style.display = "none";
CONTENT_DISPLAY.content11.style.display = "none";
CONTENT_DISPLAY.content12.style.display = "none";
CONTENT_DISPLAY.content13.style.display = "none";
CONTENT_DISPLAY.content14.style.display = "none";
CONTENT_DISPLAY.content15.style.display = "none";



function animatePlayButton() {
    document.getElementById('playButton').style.animation = "animateButton 1.3s ease";

    setTimeout(() => {
        playButton();
    }, 1000);
}

function animatTutorialButton() {
    document.getElementById('tutorialButton').style.animation = "animateButton 1.3s ease";

    setTimeout(() => {
        tutorialButton();
    }, 1000);
}

function playButton() {
    CONTENT_DISPLAY.content01.style.display = "none";
    CONTENT_DISPLAY.content02.style.display = "flex";
}

function tutorialButton() {
    CONTENT_DISPLAY.content01.style.display = "none";
    CONTENT_DISPLAY.content02.style.display = "none";
    CONTENT_DISPLAY.content03.style.display = "flex";
}


let slides = document.getElementsByClassName("slide")
let i = 1;

function zeigen() {

    for (let j = 0; j < slides.length; j++) {
        slides[j].style.display = "none"
    }

    slides[i].style.display = "block"

    i++
    if (i >= slides.length) {
        i = 0
        CONTENT_DISPLAY.content01.style.display = "flex";
        CONTENT_DISPLAY.content02.style.display = "none";
        CONTENT_DISPLAY.content03.style.display = "none";
    }
}


function level01() {

    CONTENT_DISPLAY.content01.style.display = "none";
    CONTENT_DISPLAY.content02.style.display = "none";
    CONTENT_DISPLAY.content03.style.display = "none";
    CONTENT_DISPLAY.content04.style.display = "flex";
}

let index = 0;
function nextSlide() {
    var track = document.querySelector(".storyTrack");
    var images = document.querySelectorAll(".storyTrack img");

    index = index + 1;

    if (index >= images.length) {
        CONTENT_DISPLAY.content01.style.display = "none";
        CONTENT_DISPLAY.content02.style.display = "none";
        CONTENT_DISPLAY.content03.style.display = "none";
        CONTENT_DISPLAY.content04.style.display = "none";
        CONTENT_DISPLAY.content05.style.display = "flex";

    }

    track.style.transform = "translateX(-" + (index * 100) + "%)";
}

function notizbuchButton() {
    document.getElementById('buttonBuch').style.animation = "animateButton 0.9s ease";

    setTimeout(() => {
        notizbuch();
    }, 700);
}

function notizbuch() {

    CONTENT_DISPLAY.content01.style.display = "none";
    CONTENT_DISPLAY.content02.style.display = "none";
    CONTENT_DISPLAY.content03.style.display = "none";
    CONTENT_DISPLAY.content04.style.display = "none";
    CONTENT_DISPLAY.content05.style.display = "none";
    CONTENT_DISPLAY.content06.style.display = "flex";

}

function back() {
    CONTENT_DISPLAY.content04.style.display = "none";
    CONTENT_DISPLAY.content05.style.display = "flex";
    CONTENT_DISPLAY.content06.style.display = "none";
}

function inventar() {
    CONTENT_DISPLAY.content05.style.display = "none";
    CONTENT_DISPLAY.content06.style.display = "none";
    CONTENT_DISPLAY.content07.style.display = "flex";

}

function ausweis() {

    CONTENT_DISPLAY.content06.style.display = "none";
    CONTENT_DISPLAY.content15.style.display = "grid";
}

function befragungen() {
    CONTENT_DISPLAY.content05.style.display = "none";
    CONTENT_DISPLAY.content06.style.display = "none";
    CONTENT_DISPLAY.content09.style.display = "flex";
}


// DIALOGE

function besucher() {
    CONTENT_DISPLAY.content09.style.display = "none";
    CONTENT_DISPLAY.content10.style.display = "flex";
}

function museumFrau() {
    CONTENT_DISPLAY.content09.style.display = "none";
    CONTENT_DISPLAY.content11.style.display = "flex";
}

function techniker() {
    CONTENT_DISPLAY.content09.style.display = "none";
    CONTENT_DISPLAY.content12.style.display = "flex";
}

function wachmann() {
    CONTENT_DISPLAY.content09.style.display = "none";
    CONTENT_DISPLAY.content13.style.display = "flex";
}

function arbeiterin() {
    CONTENT_DISPLAY.content09.style.display = "none";
    CONTENT_DISPLAY.content14.style.display = "flex";
}

function backToChoose() {
    res = 3;
    CONTENT_DISPLAY.content09.style.display = "flex";
    CONTENT_DISPLAY.content10.style.display = "none";
    CONTENT_DISPLAY.content11.style.display = "none";
    CONTENT_DISPLAY.content12.style.display = "none";
    CONTENT_DISPLAY.content13.style.display = "none";
    CONTENT_DISPLAY.content14.style.display = "none";
}

// -------------------------------------------

function verdaechtigeWahl() {
    CONTENT_DISPLAY.content06.style.display = "none";
    CONTENT_DISPLAY.content08.style.display = "flex";
}

function backToBook() {
    CONTENT_DISPLAY.content06.style.display = "flex";
    CONTENT_DISPLAY.content08.style.display = "none";
    CONTENT_DISPLAY.content07.style.display = "none";
    CONTENT_DISPLAY.content09.style.display = "none";
    CONTENT_DISPLAY.content15.style.display = "none";
}


document.querySelector(".ueberFragen").innerText = "Übrige Fragen: " + rest;
/*
function show(el) {
    if (rest <= 0) return;

    let p = el.querySelector("p");

    if (p.style.display === "none") {
        p.style.display = "block";
        rest--;
        document.querySelector(".ueberFragen").innerText =
            "Übrige Fragen: " + rest;
    }
}

*/



const data = {
    frage0: "Wo waren Sie?",
    antwort0: "Zu Hause",

    frage1: "Kennen Sie das Opfer?",
    antwort1: "Nein",

    frage2: "Haben Sie ein Alibi?",
    antwort2: "Ja",

    frage3: "Warum dort?",
    antwort3: "Spazieren",

    frage4: "Etwas gesehen?",
    antwort4: "Nein",

    frage5: "Warum dort?",
    antwort5: "Spazieren",

    frage6: "Warum dort?",
    antwort6: "Spazieren",

    frage7: "Warum dort?",
    antwort7: "Spazieren",

    frage8: "Warum dort?",
    antwort8: "Spazieren",

    frage9: "Warum dort?",
    antwort9: "Spazieren"
};



function load() {
    for (let i = 0; i < 9; i++) {
        document.getElementById("f" + i).innerText = data["frage" + i];
        document.getElementById("a" + i).innerText = data["antwort" + i];
    }
}
load();

function show(el, i) {
  document.querySelector(".ueberFragen").innerText = "Übrige Fragen: " + rest;

    if (rest <= 0) return;

    let p = document.getElementById("a" + i);

    if (p.style.display === "none") {
        p.style.display = "block";
        rest--;

        document.querySelector(".ueberFragen").innerText =
            "Übrige Fragen: " + rest;
    }
}