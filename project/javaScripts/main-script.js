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
let rest = 15;

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
    antwort9: "Spazieren",

    frage10: "Warum dort?",
    antwort10: "Spazieren",

    frage11: "Warum dort?",
    antwort11: "Spazieren",

    frage12: "Warum dort?",
    antwort12: "Spazieren",

    frage13: "Warum dort?",
    antwort13: "Spazieren",

    frage14: "Warum dort?",
    antwort14: "Spazieren",

    frage15: "Warum dort?",
    antwort15: "Spazieren",

    frage16: "Warum dort?",
    antwort16: "Spazieren",

    frage17: "Warum dort?",
    antwort17: "Spazieren",

    frage18: "Warum dort?",
    antwort18: "Spazieren",

    frage19: "Warum dort?",
    antwort19: "Spazieren",

    frage20: "Warum dort?",
    antwort20: "Spazieren",

    frage21: "Wo waren Sie genau zur Tatzeit?",
    antwort21: "Ich war im Archiv unten… es ist dort immer etwas still und kühl, fast schon beruhigend. Ich musste mich auf die Unterlagen konzentrieren, aber ehrlich gesagt… war ich auch ein wenig nervös wegen der bevorstehenden Führung.",

    frage22: "Warum hat Sie niemand im Archiv gesehen?",
    antwort22: "Das ist nicht ungewöhnlich… ich arbeite dort oft alleine. Ich schätze diese Ruhe, wissen Sie. Es gibt Tage, da verbringe ich Stunden dort, ohne einer einzigen Person zu begegnen.",

    frage23: "Ihr Zugang wurde beim Ausstellungsraum registriert…",
    antwort23: "Ja… das hat mich selbst überrascht. Vielleicht bin ich kurz daran vorbeigegangen, ohne es bewusst wahrzunehmen. An solchen Abenden ist man ständig in Bewegung, alles verschwimmt ein wenig.",

    frage24: "Sie kennen die Sicherheitsbereiche sehr gut, stimmt das?",
    antwort24: "Nun ja… nach all den Jahren wäre es eher seltsam, wenn ich es nicht täte. Ich habe mich immer sehr für die Abläufe interessiert… man entwickelt mit der Zeit ein Gefühl dafür, wie das System funktioniert.",

    frage25: "Warum wirkt es, als würde Sie der Fall persönlich beschäftigen?",
    antwort25: "Weil es mich auch betrifft. Dieses Museum ist mehr als nur ein Arbeitsplatz für mich… ich habe so viel Zeit hier verbracht. Der Gedanke, dass so etwas hier passieren konnte… lässt mich einfach nicht los."

};



function updateUI() {
    let boxes = document.querySelectorAll(".ueberFragen");

    // KI - Hilfe
    boxes.forEach(box => {
        box.innerText = "Übrige Fragen: " + rest;
    });
}

function load() {


    //Mit Hilfe von KI
    for (let i = 0; i < 26; i++) {
        let f = document.getElementById("f" + i);
        let a = document.getElementById("a" + i);

        if (f && a) {
            f.innerText = data["frage" + i];
            a.innerText = data["antwort" + i];
        }
    }
}
load();
updateUI();


function show(el, i) {
    if (rest <= 0) return;

    let p = document.getElementById("a" + i);

    if (p.style.display === "none") {
        p.style.display = "block";
        rest--;

        updateUI();

    }
}