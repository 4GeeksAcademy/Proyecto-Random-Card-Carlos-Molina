/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {};

const numeros = [
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

const simbolos = [
  { simbolo: "&#9829;", clase: "simbolo-rojo" },
  { simbolo: "&#9830;", clase: "simbolo-rojo" },
  { simbolo: "&#9827;", clase: "" },
  { simbolo: "&#9824;", clase: "" }
];

function obtenerCartaAleatoria() {
  const numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
  const simboloAleatorio =
    simbolos[Math.floor(Math.random() * simbolos.length)];

  return `
        <div class="simboloArriba ${simboloAleatorio.clase}">${simboloAleatorio.simbolo}</div>
        <div class="numero">${numeroAleatorio}</div>
        <div class="simboloAbajo ${simboloAleatorio.clase}">${simboloAleatorio.simbolo}</div>
    `;
}

document.getElementById("boton").addEventListener("click", function() {
  document.getElementById("carta").innerHTML = obtenerCartaAleatoria();
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("carta").innerHTML = obtenerCartaAleatoria();
});
