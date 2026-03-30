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

function validarFormulari() {

}

// Calcula la nota: examen 60%, practiques 30%, actitud 10%
function calcularNotaFinal(examen, practiques, actitud) {
    let nota = (examen * 0.6) + (practiques * 0.3) + (actitud * 0.1);
    return nota;
}

function afegirAlumne() {

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