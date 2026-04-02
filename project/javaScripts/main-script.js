let CONTENT_DISPLAY = {
    content01: document.getElementById('content01'),
    content02: document.getElementById('content02'),
    content03: document.getElementById('content03'),
    content04: document.getElementById('content04'),
    content05: document.getElementById('content05'),
    content06: document.getElementById('content06'),
    content07: document.getElementById('content07')
}

CONTENT_DISPLAY.content01.style.display = "flex";
CONTENT_DISPLAY.content02.style.display = "none";
CONTENT_DISPLAY.content03.style.display = "none";
CONTENT_DISPLAY.content04.style.display = "none";
CONTENT_DISPLAY.content05.style.display = "none";
CONTENT_DISPLAY.content06.style.display = "none";
CONTENT_DISPLAY.content07.style.display = "none";


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
        index = 0;
    }

    track.style.transform = "translateX(-" + (index * 100) + "%)";
}