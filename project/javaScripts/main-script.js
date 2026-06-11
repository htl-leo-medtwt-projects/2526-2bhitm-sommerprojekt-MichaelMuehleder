$('#sliderAusweise').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

let buttonClick = new Audio('audio/button03.mp3');
let writing = new Audio('audio/writing.mp3');
let win = new Audio('audio/win.mp3');
let lost = new Audio('audio/lost.mp3');

let backgroundMusic = new Audio('audio/piano.mp3');

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
    content15: document.getElementById('content15'),
    content16: document.getElementById('content16'),
    content17: document.getElementById('content17'),
    content18: document.getElementById('content18')
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
CONTENT_DISPLAY.content16.style.display = "none";
CONTENT_DISPLAY.content17.style.display = "none";
CONTENT_DISPLAY.content18.style.display = "none";


function animatePlayButton() {
    document.getElementById('playButton').style.animation = "animateButton 1.3s ease";

    buttonClick.play();
    backgroundMusic.loop = true;
    backgroundMusic.play();


    setTimeout(() => {
        level01();
    }, 1000);
}

function animatTutorialButton() {
    document.getElementById('tutorialButton').style.animation = "animateButton 1.3s ease";

    buttonClick.play();
    backgroundMusic.loop = true;
    backgroundMusic.play();



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
    buttonClick.play();


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
    buttonClick.play();


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
    buttonClick.play();

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
    buttonClick.play();

    CONTENT_DISPLAY.content04.style.display = "none";
    CONTENT_DISPLAY.content05.style.display = "flex";
    CONTENT_DISPLAY.content06.style.display = "none";
}

let inventoryEnabled = true;

document.addEventListener("keydown", function (event) {

    if (!inventoryEnabled) return;

    if (event.key === "e" || event.key === "E") {
        inventar();
    }
});

function inventar() {
    buttonClick.play();

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
    buttonClick.play();

    CONTENT_DISPLAY.content06.style.display = "none";
    CONTENT_DISPLAY.content15.style.display = "grid";
}

function befragungen() {

    if (!ausweisGesehen) {
        document.getElementById('print-warning').innerHTML = "Du hast dir die Ausweise nicht angesehen!";
        return;
    }
    buttonClick.play();

    verdaechtigeBefragt = true;
    CONTENT_DISPLAY.content05.style.display = "none";
    CONTENT_DISPLAY.content06.style.display = "none";
    CONTENT_DISPLAY.content09.style.display = "flex";
}


// DIALOGE

function besucher() {
    buttonClick.play();
    CONTENT_DISPLAY.content09.style.display = "none";
    CONTENT_DISPLAY.content10.style.display = "flex";
}

function museumFrau() {
    buttonClick.play();
    CONTENT_DISPLAY.content09.style.display = "none";
    CONTENT_DISPLAY.content11.style.display = "flex";
}

function techniker() {
    buttonClick.play();
    CONTENT_DISPLAY.content09.style.display = "none";
    CONTENT_DISPLAY.content12.style.display = "flex";
}

function wachmann() {
    buttonClick.play();
    CONTENT_DISPLAY.content09.style.display = "none";
    CONTENT_DISPLAY.content13.style.display = "flex";
}

function arbeiterin() {
    buttonClick.play();
    CONTENT_DISPLAY.content09.style.display = "none";
    CONTENT_DISPLAY.content14.style.display = "flex";
}

function backToChoose() {
    res = 3;
    buttonClick.play();

    CONTENT_DISPLAY.content09.style.display = "flex";
    CONTENT_DISPLAY.content10.style.display = "none";
    CONTENT_DISPLAY.content11.style.display = "none";
    CONTENT_DISPLAY.content12.style.display = "none";
    CONTENT_DISPLAY.content13.style.display = "none";
    CONTENT_DISPLAY.content14.style.display = "none";
}

// -------------------------------------------

function verdaechtigeWahl() {
    buttonClick.play();

    if (!verdaechtigeBefragt) {
        document.getElementById('print-warning').innerHTML = "Du musst die Verdächtigen befragen und Hinweise sammeln!"
        return;
    }

    document.getElementById('print-warning').innerHTML = "";

    CONTENT_DISPLAY.content06.style.display = "none";
    CONTENT_DISPLAY.content08.style.display = "flex";
}

function backToBookFromChoose() {
    buttonClick.play();

    document.getElementById('warningChoose').innerHTML = "";

    showOnlySelected();
    startRoundTwo();

    CONTENT_DISPLAY.content06.style.display = "flex";
    CONTENT_DISPLAY.content08.style.display = "none";
    CONTENT_DISPLAY.content07.style.display = "none";
    CONTENT_DISPLAY.content09.style.display = "none";
    CONTENT_DISPLAY.content15.style.display = "none";
}

function backToBook() {
    buttonClick.play();
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
                `<span style="color:red;">${data["score" + i]}</span>` +
                `<div id="AddToInventarButton" onclick="addToInventar(${i})">
                    Notizblock Hinzufügen
                </div>`;
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
            f.parentElement.style.display = "none";
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
        12, 13, 14,     // Arbeiterin
        15, 16, 17,
        18, 19, 20,
        21, 22, 23,
        24
    ];

    for (let i = 0; i < erlaubteFragen.length; i++) {
        let index = erlaubteFragen[i];
        let f = document.getElementById("f" + index);
        let a = document.getElementById("a" + index);

        if (f && a) {
            f.parentElement.style.display = "block";
            f.innerText = data02["frage" + index];
            a.innerHTML =
                data02["antwort" + index] +
                " --> " +
                `<span style="color:red;">${data02["score" + index]}</span>` +
                `<div id="AddToInventarButton" onclick="addToInventar(${index})"> Notizblock Hinzufügen </div>`;
            a.style.display = "none";
        }
    }

    console.log("Round 2 geladen: 3 Fragen pro Person");
}
load();
updateUI();

// -----------------------------

function show(el, i) {
    buttonClick.play();

    if (rest <= 0) return;

    let p = document.getElementById("a" + i);

    if (p.style.display === "none") {
        p.style.display = "block";
        rest--;

        if (!roundTwo) {
            score += data["score" + i];
        } else {
            score += data02["score" + i];
        }

        updateUI();
        checkEnd();
    }
}

document.querySelectorAll('.befragungWarning').forEach(el => {
    el.style.display = "none";
});

function checkEnd() {
    if (rest == 0) {

        if (score >= 3) {
            document.querySelectorAll('.befragungWarning').forEach(el => {
                el.style.display = "flex";
            });
        } else {
            alert("Zu wenig Hinweise… der Täter bleibt unentdeckt.");
        }
    }
}

//---------------------------------------------------------------------------------------------------------------------

let roundOneDone = false;
let roundTwoUnlocked = false;
let finalSuspectChosen = false;
let finalSuspectChosenFINAL = false;
let finalChosenId = "";

function selectSuspect(el) {
    buttonClick.play();

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

let richtigerTaeter = false;

function selectFinalSuspect(el) {

    document.querySelectorAll('.befragungWarning').forEach(el => {
                el.style.display = "none";
            });

    finalSuspectChosenFINAL = true;

    if (!roundOneDone) {
        alert("Wähle zuerst 3 Verdächtige!");
        return;
    }

    if (!roundTwoUnlocked) {
        document.getElementById('warningChoose').innerHTML =
            "Befrage die Verdächtigen nochmal!";
        return;
    }

    if (finalSuspectChosen) return;

    finalSuspectChosen = true;

    let box = document.getElementById("chooseRoundTwo");
    box.innerHTML = "";

    let img = document.createElement("img");
    img.src = el.src;
    img.style.width = "100%";
    box.appendChild(img);

    // 👉 HIER ENTSCHEIDUNG
    if (el.src.includes("besucher_choose.png")) {
        richtigerTaeter = true;
    } else {
        richtigerTaeter = false;
    }

    // optisch alles abdunkeln
    let alle = document.querySelectorAll("#chooseRoundOne img");

    for (let i = 0; i < alle.length; i++) {
        alle[i].style.opacity = "0.3";
        alle[i].style.pointerEvents = "none";
    }
}

//------------------INVENTAR--------------------------------------------------------------------------


function addToInventar(i) {
    writing.play();

    if (document.getElementById("item-" + i)) {
        return;
    }
    let items = document.getElementById("items");
    items.innerHTML += `
        <li id="item-${i}">
            ${data["summary" + i]}
        </li>
    `;
}


/* ------------------------------------ */

let startTime = 0;
let elapsedTime = 0;

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let interval;
let running = false;
let locked = false;

function startStopwatch() {

    if (locked) return;

    if (!running) {

        startTime = Date.now() - elapsedTime;

        interval = setInterval(() => {

            elapsedTime = Date.now() - startTime;

            minutes = Math.floor(elapsedTime / 60000);
            seconds = Math.floor(elapsedTime / 1000) % 60;
            milliseconds = elapsedTime % 1000;

            document.getElementById("clock").innerText =
                `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        }, 10);

        running = true;

    } else {
        clearInterval(interval);
        running = false;
        locked = true;
    }
}

// ------------------------------------------------------------
document.getElementById('youSure').style.display = "none";

function onclickYouSure() {
    startStopwatch();
    document.getElementById('printTime').innerHTML = "Deine Zeit: <br>" + minutes + ":" + seconds + ":" + milliseconds;
    delayFinal();
}

function check() {

    if (roundTwoUnlocked) {
        document.getElementById('youSure').style.display = "flex";
        return;
    }
}

function delayFinal() {

    buttonClick.play();
    setTimeout(() => {
        finalContent();
    }, 1000);

}

function finalContent() {

    CONTENT_DISPLAY.content01.style.display = "none";
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
    CONTENT_DISPLAY.content16.style.display = "none";
    CONTENT_DISPLAY.content17.style.display = "none";

    // RICHTIG
    if (richtigerTaeter) {
        CONTENT_DISPLAY.content16.style.display = "flex";
        win.play();
    } else {
        CONTENT_DISPLAY.content17.style.display = "flex";
        lost.play();
    }
}


// ------------------------Mit KI---------------------------------------

let finalTime = "";

document.getElementById('nameInputContainer').style.display = "flex";
document.getElementById('thanksForPlaying').style.display = "none";


function saveTimeLocal() {

    finalTime = minutes + ":" + seconds + ":" + milliseconds;

    CONTENT_DISPLAY.content16.style.display = "none";
    CONTENT_DISPLAY.content18.style.display = "flex";

    inventoryEnabled = false;


    loadScores();
}

function savePlayerTime() {
    buttonClick.play();

    let name = document.getElementById("playerName").value;

    if (name === "") return;

    let scores = JSON.parse(localStorage.getItem("scores")) || [];

    scores.push({
        name: name,
        time: finalTime
    });

    scores.sort((a, b) => {

        const [ma, sa] = a.time.split(":").map(Number);
        const [mb, sb] = b.time.split(":").map(Number);

        return (ma * 60 + sa) - (mb * 60 + sb);
    });

    localStorage.setItem("scores", JSON.stringify(scores));

    document.getElementById("playerName").value = "";
    document.getElementById('nameInputContainer').style.display = "none";
    document.getElementById('thanksForPlaying').style.display = "flex";

    loadScores();
}

function loadScores() {

    let table = document.getElementById("scoreTable");

    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Zeit</th>
        </tr>
    `;

    let scores = JSON.parse(localStorage.getItem("scores")) || [];

    scores.forEach(score => {

        table.innerHTML += `
            <tr>
                <td>${score.name}</td>
                <td>${score.time}</td>
            </tr>
        `;

    });

}

loadScores();