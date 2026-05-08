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
let score = 0;
let ausweisGesehen = false;
let verdaechtigeBefragt = false;

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
        level01();
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

document.addEventListener("keydown", function (event) {
    if (event.key === "e" || event.key === "E") {
        inventar();
    }
});

function inventar() {

    CONTENT_DISPLAY.content01.style.display = "none";
    CONTENT_DISPLAY.content02.style.display = "none";
    CONTENT_DISPLAY.content03.style.display = "none";
    CONTENT_DISPLAY.content04.style.display = "none";
    CONTENT_DISPLAY.content05.style.display = "none";
    CONTENT_DISPLAY.content06.style.display = "none";
    CONTENT_DISPLAY.content07.style.display = "flex";
    CONTENT_DISPLAY.content08.style.display = "none";
    CONTENT_DISPLAY.content09.style.display = "none";
    CONTENT_DISPLAY.content10.style.display = "none";
    CONTENT_DISPLAY.content11.style.display = "none";
    CONTENT_DISPLAY.content12.style.display = "none";
    CONTENT_DISPLAY.content13.style.display = "none";
    CONTENT_DISPLAY.content14.style.display = "none";
    CONTENT_DISPLAY.content15.style.display = "none";

}

function ausweis() {
    ausweisGesehen = true;

    CONTENT_DISPLAY.content06.style.display = "none";
    CONTENT_DISPLAY.content15.style.display = "grid";
}

function befragungen() {
    verdaechtigeBefragt = true;

    if (!ausweisGesehen) {
        document.getElementById('print-warning').innerHTML = "Du hast dir die Ausweise nicht angesehen!";
        return;
    }


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

    if (!verdaechtigeBefragt) {
        document.getElementById('print-warning').innerHTML = "Du musst die Verdächtigen befragen und Hinweise sammeln!"
        return;
    }

    CONTENT_DISPLAY.content06.style.display = "none";
    CONTENT_DISPLAY.content08.style.display = "flex";
}

function backToBookFromChoose() {

    showOnlySelected();
    startRoundTwo();

    CONTENT_DISPLAY.content06.style.display = "flex";
    CONTENT_DISPLAY.content08.style.display = "none";
    CONTENT_DISPLAY.content07.style.display = "none";
    CONTENT_DISPLAY.content09.style.display = "none";
    CONTENT_DISPLAY.content15.style.display = "none";
}

function backToBook() {
    CONTENT_DISPLAY.content06.style.display = "flex";
    CONTENT_DISPLAY.content08.style.display = "none";
    CONTENT_DISPLAY.content07.style.display = "none";
    CONTENT_DISPLAY.content09.style.display = "none";
    CONTENT_DISPLAY.content15.style.display = "none";
}

document.querySelector(".ueberFragen").innerText = "Übrige Fragen: " + rest;

function updateUI() {
    let boxes = document.querySelectorAll(".ueberFragen");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML =
            `Übrige Fragen: ${rest}
            <br>
            Hinweise: ${score}`;
    }
}

function load() {
    for (let i = 0; i < 26; i++) {
        let f = document.getElementById("f" + i);
        let a = document.getElementById("a" + i);

        if (f && a) {
            f.innerText = data["frage" + i];
            a.innerHTML =
                data["antwort" + i] +
                " --> " +
                `<span style="color:red;">${data["score" + i]}</span>`  + 
                    `<div id="AddToInventarButton"> Inventar Hinzufügen </div>`;
        }
    }
}

// -----------------------------

let selectedSuspects = [];
let roundTwo = false;



function startRoundTwo() {
    if (roundOneDone) {
        roundTwoUnlocked = true;
        roundTwo = true;
        showOnlySelected();

        rest = 6;
        score = 0;
        updateUI();

        loadRoundTwo();
    }
}
function loadRoundTwo() {

    // alles resetten
    for (let i = 0; i < 26; i++) {
        let f = document.getElementById("f" + i);
        let a = document.getElementById("a" + i);

        if (f && a) {
            f.innerText = "";
            a.innerHTML = "";
            a.style.display = "none";
        }
    }

    // 👉 WICHTIG: nur 3 pro Person
    let erlaubteFragen = [
        0, 1, 2,        // Besucher
        3, 4, 5,        // MuseumFrau
        6, 7, 8,        // Techniker
        9, 10, 11,      // Wachmann
        12, 13, 14      // Arbeiterin
    ];

    let erlaubt = 0; // zählt wie viele wirklich angezeigt werden

    for (let i = 0; i < erlaubteFragen.length; i++) {

        let index = erlaubteFragen[i];

        let f = document.getElementById("f" + index);
        let a = document.getElementById("a" + index);

        if (f && a) {

            // 👉 nur 3 pro Person erlauben
            if (erlaubt % 3 === 0) {
                f.parentElement.style.display = "block";
            }

            if (erlaubt % 3 < 3) {

                f.innerText = data02["frage" + index];
                a.innerHTML =
                    data02["antwort" + index] +
                    " --> " +
                    `<span style="color:red;">${data02["score" + index]}</span>` + 
                    `<div id="AddToInventarButton"> Inventar Hinzufügen </div>`;

                a.style.display = "none";
            }

            erlaubt++;
        }
    }

    console.log("Round 2 geladen: 3 Fragen pro Person");
}
load();
updateUI();

// -----------------------------

function show(el, i) {
    if (rest <= 0) return;

    let p = document.getElementById("a" + i);

    if (p.style.display === "none") {
        p.style.display = "block";
        rest--;

        // FIX: richtige Daten je nach Runde
        if (!roundTwo) {
            score += data["score" + i];
        } else {
            score += data02["score" + i];
        }

        updateUI();
        checkEnd();
    }
}

function checkEnd() {
    if (rest === 0) {

        if (!ausweisGesehen) {
            alert("Du hast dir die Ausweise nicht angesehen!");
            return;
        }

        if (score >= 3) {
            alert("Du hast genug Hinweise gesammelt! Du kannst den Täter identifizieren.");
        } else {
            alert("Zu wenig Hinweise… der Täter bleibt unentdeckt.");
        }
    }
}

//---------------------------------------------------------------------------------------------------------------------

let roundOneDone = false;
let roundTwoUnlocked = false;

function selectSuspect(el) {

    if (el.classList.contains("used")) return;

    let boxen = [
        document.getElementById("chooseRoundOne01"),
        document.getElementById("chooseRoundOne02"),
        document.getElementById("chooseRoundOne03")
    ];

    for (let i = 0; i < boxen.length; i++) {
        if (boxen[i].innerHTML === "") {

            let img = document.createElement("img");
            img.src = el.src;
            img.style.width = "80px";

            img.onclick = function () {
                selectFinalSuspect(this);
            };

            boxen[i].appendChild(img);

            selectedSuspects.push(el.id);

            el.classList.add("used");
            el.style.opacity = "0.3";

            break;
        }
    }

    if (selectedSuspects.length === 3) {
        roundOneDone = true;
        //     unlockRoundTwo();
    }
}

function showOnlySelected() {

    let alle = document.querySelectorAll("#verdachtWahl img");

    for (let i = 0; i < alle.length; i++) {

        let id = alle[i].getAttribute("onclick");

        if (!selectedSuspects.includes(id.replace("()", "_choose"))) {
            alle[i].style.display = "none";
        }
    }
}

function unlockRoundTwo() {
    if (roundOneDone) {
        roundTwoUnlocked = true;
        console.log("Runde 2 freigeschaltet");
    }
}

function selectFinalSuspect(el) {

    if (!roundOneDone) {
        alert("Wähle zuerst 3 Verdächtige!");
        return;
    }

    if (!roundTwoUnlocked) {
        alert("Du musst zuerst den nächsten Schritt machen!");
        return;
    }

    let box = document.getElementById("chooseRoundTwo");
    box.innerHTML = "";

    let img = document.createElement("img");
    img.src = el.src;
    img.style.width = "100%";
    el.style.opacity = "0.3";

    box.appendChild(img);
}

//------------------INVENTAR--------------------------------------------------------------------------


