const orari = {
    "lunedi.html": [
        "8:00 / 9:00 Italiano",
        "9:00 / 9:55  Informatica - Lab",
        "10:05 / 11:00 Informatica - Lab",
        "11:00 / 11:55 Inglese"
    ],
    "martedi.html": [
        "7:50 / 8:40 Informatica - Lab",
        "8:40 / 9:25 TPSI - Lab",
        "9:35 / 10:30 Sistemi e Reti",
        "10:30 / 11:25 GPOI - Lab"
    ],
    "mercoledi.html": [
        "8:00 / 8:50  GPOI",
        "8:50 / 9:35  Matematica",
        "9:45 / 10:40 Informatica",
        "10:40 / 11:35 Sistemi e Reti"
    ],
    "giovedi.html": [
        "8:00 / 8:50 Informatica - Lab",
        "8:50 / 9:35  Lettere",
        "9:45 / 10:40 Lettere",
        "10:40 / 11:35 Inglese"
    ],
    "venerdi.html": [
        "8:00 / 9:00 TPSI - Lab",
        "9:00 / 9:55 TPSI - Lab",
        "10:05 / 11:00 Lettere",
        "11:00 / 11:55 Sistemi - Lab"
    ]
}

const teachers = {
    "TPSI" : "Cr.",
    "TPSI - Lab" : "Cr. - Bi.",

    "Sistemi - Lab": "Bo. - Mar.",
    "Sistemi": "Bo.",

    "Inglese": "Mal.",
    "Lettere" : "Pr.",
    "Matematica" : "Sp.",

    "GPOI" : "Sch.",
    "GPOI - Lab" : "Sch. - Mar.",

    "Informatica" : "Mu.",
    "Informatica - Lab" : "Mu. - Bi."
    
}

const correntFile = window.location.pathname.split("/").pop();

document.addEventListener("DOMContentLoaded", () => {

    const orarioGroup = document.querySelector(".orario-group");

    function trovaProf(materiaCompleta) {
        const keys = Object.keys(teachers).sort((a, b) => b.length - a.length);
        for (const key of keys) {
            if (materiaCompleta.includes(key)) {
                return teachers[key];
            }
        }
        return "";
    }

    for (let index = 0; index < orari[correntFile].length; index++) {

        const materiaCompleta = orari[correntFile][index];
        let prof;

        if (correntFile === "lunedi.html" && index === 0) {
            prof = "Pr.";
        } else {
            prof = trovaProf(materiaCompleta);
        }

        orarioGroup.innerHTML += `
            <div class="ora">
                <div class="oraLezione">${index + 1}</div>
                <div class="lezione">${materiaCompleta} (${prof})</div>
            </div>
        `;
    }

});
