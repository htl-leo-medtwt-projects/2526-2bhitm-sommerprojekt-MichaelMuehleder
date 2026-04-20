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
    frage0: "Wie lange waren Sie ungefähr im Ausstellungsraum?",
    antwort0: "Ich glaube… länger als geplant. Ich wollte eigentlich nur kurz hineinsehen, aber dieses eine Gemälde hat mich irgendwie festgehalten. Ich habe die Zeit ein wenig aus den Augen verloren.",
    score0: 1,

    frage1: "Warum haben Sie sich gerade dieses eine Gemälde so genau angesehen?",
    antwort1: "Es hatte eine besondere Ausstrahlung… schwer zu erklären. Die Technik wirkte fast zu perfekt, fast so, als hätte jemand sehr viel Kontrolle darüber gehabt, was man sieht.",
    score1: 1,

    frage2: "Ist Ihnen aufgefallen, dass das Personal Sie mehrfach beobachtet hat?",
    antwort2: "Vielleicht… ich bin mir nicht sicher. Ich habe mich nicht wirklich beobachtet gefühlt, eher… als würde jemand sicherstellen wollen, dass alles korrekt abläuft.",
    score2: 0,

    frage3: "Haben Sie schon einmal ähnliche Werke gesehen?",
    antwort3: "Ja, einige. Ich beschäftige mich privat ein wenig mit Kunst… Fälschungen, Originale, solche Unterschiede sind manchmal interessanter als das Werk selbst.",
    score3: 2,

    frage4: "Warum haben Sie den Raum so plötzlich verlassen?",
    antwort4: "Ich wollte nicht auffallen. Außerdem hatte ich das Gefühl, dass ich genug gesehen hatte… mehr als ich eigentlich geplant hatte.",
    score4: 1,

    // -------------------------

    frage5: "Wie verlief die Führung zur Tatzeit?",
    antwort5: "Die Führung verlief ganz normal. Ich habe den Besuchern die wichtigsten Werke gezeigt und bin dabei wie üblich durch die Haupt- und Nebenräume gegangen. Es gab keine besonderen Vorkommnisse.",
    score5: 0,

    frage6: "Hatten Sie während der Führung Zugang zu allen Bereichen?",
    antwort6: "Ja, ich habe als leitende Kunsthistorikerin Zugang zu den relevanten Ausstellungs- und Vorbereitungsräumen. Das ist notwendig, damit ich die Führung korrekt durchführen kann.",
    score6: 0,

    frage7: "Ist Ihnen im Museum etwas Ungewöhnliches aufgefallen?",
    antwort7: "Nein, nichts Auffälliges. Alles war wie gewohnt vorbereitet, die Sicherheits- und Lichtsysteme haben normal funktioniert.",
    score7: 0,

    frage8: "Wie gut kennen Sie die Abläufe im Museum?",
    antwort8: "Sehr gut. Ich arbeite seit vielen Jahren hier und kenne sowohl die Kunstwerke als auch die organisatorischen Abläufe sehr genau.",
    score8: 0,

    frage9: "Gab es während der Führung Probleme oder Unterbrechungen?",
    antwort9: "Nein, die Führung lief ruhig und ohne Zwischenfälle ab. Die Besucher waren interessiert und alles verlief wie geplant.",
    score9: 0,

    // -------------------------

    frage10: "Warum dort?",
    antwort10: "Spazieren",
    score10: 0,

    frage11: "Warum dort?",
    antwort11: "Spazieren",
    score11: 0,

    frage12: "Warum dort?",
    antwort12: "Spazieren",
    score12: 0,

    frage13: "Warum dort?",
    antwort13: "Spazieren",
    score13: 0,

    frage14: "Warum dort?",
    antwort14: "Spazieren",
    score14: 0,

    // -------------------------

    frage15: "Warum dort?",
    antwort15: "Spazieren",
    score15: 0,

    frage16: "Warum dort?",
    antwort16: "Spazieren",
    score16: 0,

    frage17: "Warum dort?",
    antwort17: "Spazieren",
    score17: 0,

    frage18: "Warum dort?",
    antwort18: "Spazieren",
    score18: 0,

    frage19: "Warum dort?",
    antwort19: "Spazieren",
    score19: 0,

    // -------------------------

    frage20: "Warum dort?",
    antwort20: "Spazieren",
    score20: 0,

    frage21: "Wo waren Sie genau zur Tatzeit?",
    antwort21: "Ich war im Archiv unten… es ist dort immer etwas still und kühl, fast schon beruhigend. Ich musste mich auf die Unterlagen konzentrieren, aber ehrlich gesagt… war ich auch ein wenig nervös wegen der bevorstehenden Führung.",
    score21: 1,

    frage22: "Warum hat Sie niemand im Archiv gesehen?",
    antwort22: "Das ist nicht ungewöhnlich… ich arbeite dort oft alleine. Ich schätze diese Ruhe, wissen Sie. Es gibt Tage, da verbringe ich Stunden dort, ohne einer einzigen Person zu begegnen.",
    score22: 1,

    frage23: "Ihr Zugang wurde beim Ausstellungsraum registriert…",
    antwort23: "Ja… das hat mich selbst überrascht. Vielleicht bin ich kurz daran vorbeigegangen, ohne es bewusst wahrzunehmen. An solchen Abenden ist man ständig in Bewegung, alles verschwimmt ein wenig.",
    score23: 1,

    frage24: "Sie kennen die Sicherheitsbereiche sehr gut, stimmt das?",
    antwort24: "Nun ja… nach all den Jahren wäre es eher seltsam, wenn ich es nicht täte. Ich habe mich immer sehr für die Abläufe interessiert… man entwickelt mit der Zeit ein Gefühl dafür, wie das System funktioniert.",
    score24: 0,

    frage25: "Warum wirkt es, als würde Sie der Fall persönlich beschäftigen?",
    antwort25: "Weil es mich auch betrifft. Dieses Museum ist mehr als nur ein Arbeitsplatz für mich… ich habe so viel Zeit hier verbracht. Der Gedanke, dass so etwas hier passieren konnte… lässt mich einfach nicht los.",
    score25: 0
};



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


    //Mit Hilfe von KI
    for (let i = 0; i < 26; i++) {
        let f = document.getElementById("f" + i);
        let a = document.getElementById("a" + i);

        if (f && a) {
            f.innerText = data["frage" + i];
            a.innerHTML =
                data["antwort" + i] +
                " --> " +
                `<span style="color:red;">${data["score" + i]}</span>`;
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

        score += data["score" + i];

        updateUI();
        checkEnd();
    }
}

function checkEnd() {
    if (rest === 0) {
        if (score >= 3) {
            alert("Du hast genug Hinweise gesammelt! Du kannst den Täter identifizieren.");
        } else {
            alert("Zu wenig Hinweise… der Täter bleibt unentdeckt.");
        }
    }
}
