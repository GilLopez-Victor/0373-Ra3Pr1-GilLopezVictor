// Agafo els elements del HTML
const formulari = document.getElementById("formulariAlumne");
const inputNom = document.getElementById("nom");
const inputExamen = document.getElementById("examen");
const inputPractiques = document.getElementById("practiques");
const inputActitud = document.getElementById("actitud");
const missatge = document.getElementById("missatge");
const cosTaula = document.getElementById("cosTaula");
const botoOrdenarAsc = document.getElementById("ordenarAsc");
const botoOrdenarDesc = document.getElementById("ordenarDesc");

// Array on guardare els alumnes
let alumnes = [];

// Funcions
// Mostra un missatge a la pantalla, tipus pot ser "error" o "correcte"
function mostrarMissatge(text, tipus) {
    missatge.textContent = text;
    missatge.className = tipus;
}

// Comprova que tots els camps siguin correctes abans de continuar
function validarFormulari(event) {
    event.preventDefault();
 
    // Llegeixo els valors dels inputs
    let nom = inputNom.value;
    let examen = inputExamen.value;
    let practiques = inputPractiques.value;
    let actitud = inputActitud.value;
 
    // Comprovo el nom
    if (nom == "") {
        mostrarMissatge("Error: Has de posar el nom de l'alumne", "error");
        return;
    }
 
    // Comprovo l'examen
    if (examen == "") {
        mostrarMissatge("Error: Has de posar la nota de l'examen", "error");
        return;
    }
    if (isNaN(examen)) {
        mostrarMissatge("Error: La nota de l'examen ha de ser un numero", "error");
        return;
    }
    if (examen < 0 || examen > 10) {
        mostrarMissatge("Error: La nota de l'examen ha d'estar entre 0 i 10", "error");
        return;
    }
 
    // Comprovo les practiques
    if (practiques == "") {
        mostrarMissatge("Error: Has de posar la nota de practiques", "error");
        return;
    }
    if (isNaN(practiques)) {
        mostrarMissatge("Error: La nota de practiques ha de ser un numero", "error");
        return;
    }
    if (practiques < 0 || practiques > 10) {
        mostrarMissatge("Error: La nota de practiques ha d'estar entre 0 i 10", "error");
        return;
    }
 
    // Comprovo l'actitud
    if (actitud == "") {
        mostrarMissatge("Error: Has de posar la nota d'actitud", "error");
        return;
    }
    if (isNaN(actitud)) {
        mostrarMissatge("Error: La nota d'actitud ha de ser un numero", "error");
        return;
    }
    if (actitud < 0 || actitud > 10) {
        mostrarMissatge("Error: La nota d'actitud ha d'estar entre 0 i 10", "error");
        return;
    }
 
    // Converteixo a numero perque els inputs donen text
    let examNum = parseFloat(examen);
    let practNum = parseFloat(practiques);
    let actNum = parseFloat(actitud);
 
    // Calculo la nota i afegeixo l'alumne
    let notaFinal = calcularNotaFinal(examNum, practNum, actNum);
    afegirAlumne(nom, examNum, practNum, actNum, notaFinal);
 
    mostrarMissatge("Alumne " + nom + " afegit correctament", "correcte");
 
    // Borro el formulari per poder afegir un altre
    formulari.reset();
}
 

// Calcula la nota: examen 60%, practiques 30%, actitud 10%
function calcularNotaFinal(examen, practiques, actitud) {
    let nota = (examen * 0.6) + (practiques * 0.3) + (actitud * 0.1);
    return nota;
}

// Crea un objecte alumne i el guarda a l'array
function afegirAlumne(nom, examen, practiques, actitud, notaFinal) {
    let alumne = {
        nom: nom,
        examen: examen,
        practiques: practiques,
        actitud: actitud,
        notaFinal: notaFinal
    };
 
    // Afegeixo l'objecte a l'array
    alumnes.push(alumne);
 
    mostrarAlumnes();
}

function mostrarAlumnes() {

}

function ordenarAlumnes() {

}

// Events dels botons
formulari.addEventListener("submit", validarFormulari);

botoOrdenarAsc.addEventListener("click", function() {
    ordenarAlumnes("asc");
});

botoOrdenarDesc.addEventListener("click", function() {
    ordenarAlumnes("desc");
});