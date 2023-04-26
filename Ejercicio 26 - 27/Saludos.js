'use strict';

var color = 'white';


function obtieneColor(identificador) {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);    
    color = getComputedStyle(cuadro).backgroundColor;
    console.log(color);
}

function saludar(identificador) {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}
