document.addEventListener("DOMContentLoaded", () => {

    const orari = {
        "lunedi.html": [
            "Religione",
            "Lettere",
            "Lettere",
            "TPSI",
            "Inglese",
            "Informatica - Lab"
        ],

        "martedi.html": [
            "TPSI - Lab",
            "TPSI - Lab",
            "Inglese",
            "GPOI",
            "Sistemi e reti - Lab",
            "Sistemi e reti - Lab"
        ],

        "mercoledi.html": [
            "Informatica - Lab",
            "Informatica - Lab",
            "Matematica",
            "Lettere",
            "Sistemi e reti",
            "Scienze Motorie",
            "Scienze Motorie"
        ],

        "giovedi.html": [
            "Informatica",
            "Informatica",
            "Lettere",
            "Matematica",
            "Matematica",
            "Sistemi e reti",
            "GPOI - Lab"
        ],

        "venerdi.html": [
            "TPSI - Lab",
            "GPOI",
            "Inglese",
            "Informatica - Lab",
            "Lettere",
            "Lettere"
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
        "Informatica - Lab" : "Mu. - Bi.",

        "Religione" : "Sch.",
        "Scienze Motorie" : "Gan."
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
                <div class="lezione">${ora}:${minutiInizio} - ${((correntFile === "mercoledi.html" || correntFile === "giovedi.html") && index === 0)? 8:ora + addHour}:${minutiFine} ${materiaCompleta} (${prof})</div>
            </div>
        `;

        ora++;
    }

});
