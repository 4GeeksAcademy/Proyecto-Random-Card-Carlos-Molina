/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {};

const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const simbolos = ["&#9829;", "&#9830;", "&#9827;", "&#9824;"]; // Corazón, Diamante, Trébol, Pica

function obtenerCartaAleatoria() {
  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
  const simboloAleatorio =
    simbolos[Math.floor(Math.random() * simbolos.length)];

  return `
        <div class="carta-cabecera">${valorAleatorio}</div>
        <div class="simbolo">${simboloAleatorio}</div>
        <div class="carta-pie">${valorAleatorio}</div>
    `;
}

document.getElementById("boton").addEventListener("click", function() {
  document.getElementById("carta").innerHTML = obtenerCartaAleatoria();
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("carta").innerHTML = obtenerCartaAleatoria();
});
