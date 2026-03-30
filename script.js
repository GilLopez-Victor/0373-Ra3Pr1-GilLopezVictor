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
function mostrarMissatge() {

}

function validarFormulari() {

}

function calcularNotaFinal() {

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