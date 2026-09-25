document.addEventListener("DOMContentLoaded", () => {

    const orari = {
        "lunedi.html": [
            "Informatica",
            "Informatica",
            "TPSI - Lab",
            "Lettere",
            "Inglese",
            "GPOI"
        ],
        "martedi.html": [
            "Sistemi e reti - Lab",
            "Sistemi e reti - Lab",
            "TPSI - Lab",
            "TPSI - Lab",
            "Matematica",
            "Matematica"
        ],
        "mercoledi.html": [
            "Matematica",
            "Informatica - Lab",
            "Lettere",
            "Lettere",
            "Inglese",
            "Sistemi e reti",
            "Religione"
        ],
        "giovedi.html": [
            "Informatica - Lab",
            "Informatica - Lab",
            "GPOI - Lab",
            "Scienze Motorie",
            "Scienze Motorie",
            "Lettere",
            "Lettere"
        ],
        "venerdi.html": [
            "Lettere",
            "TPSI",
            "Informatica - Lab",
            "Sistemi e reti",
            "Inglese",
            "GPOI"
        ]
    };

    const teachers = {
        "TPSI" : "Cr.",
        "TPSI - Lab" : "Cr. - Bi.",

        "Sistemi e reti - Lab": "Bo. - Mar.",
        "Sistemi e reti": "Bo.",

        "Inglese": "Mal.",
        "Lettere" : "Pr.",
        "Matematica" : "Sp.",

        "GPOI" : "Sch.",
        "GPOI - Lab" : "Sch. - Mar.",

        "Informatica" : "Mu.",
        "Informatica - Lab" : "Mu. - Bi."
    };

    // ORARI SPECIALI
    const ore = {
        "mercoledi.html" : {
            "minutoInizio" : ["00","50","45","40","45","30","20"],
            "minutoFine"   : ["50","35","40","35","30","20","10"]
        },
        "giovedi.html" : {
            "minutoInizio" : ["00","50","45","40","45","30","20"],
            "minutoFine"   : ["50","35","40","35","30","20","10"]
        }
    };

    const correntFile = window.location.pathname.split("/").pop();
    const orarioGroup = document.querySelector(".orario-group");

    let ora = 8;

    for (let index = 0; index < orari[correntFile].length; index++) {

        const materiaCompleta = orari[correntFile][index];
        const prof = teachers[materiaCompleta];

        let minutiInizio = "00";
        let minutiFine = "00";
        let addHour = 1;
        let addHourSp;


        if (correntFile === "mercoledi.html" || correntFile === "giovedi.html") {
            minutiInizio = ore[correntFile]["minutoInizio"][index];
            minutiFine   = ore[correntFile]["minutoFine"][index];
            if (index === 1) {
                addHour = 1;
                ora--;
            }
        }
        else {
            if (index === 1 || index === 3) {
                minutiFine = "55";
                addHour = 0;
            }
            else if (index === 2 || index === 4) {
                minutiInizio = "05";
            }
        }

        orarioGroup.innerHTML += `
            <div class="ora">
                <div class="oraLezione">${index + 1}</div>
                <div class="lezione">${ora}:${minutiInizio} - ${ora + addHour}:${minutiFine} ${materiaCompleta} (${prof})</div>
            </div>
        `;

        ora++;
    }

});
