var turnos = 0;

function cambioColor(identificador) {
    var elem = document.getElementById(identificador);
    var colorOriginal = elem.style.backgroundColor;
    elem.style.backgroundColor = 'lightblue';
    elem.setAttribute('data-color-original', colorOriginal);
    colorOriginal;
};


function colorOriginal(identificador) {
    var elem = document.getElementById(identificador);
    var colorOriginal = elem.getAttribute('data-color-original');
    elem.style.backgroundColor = colorOriginal;
}

function partida() {
    let turnos = 0;
    for (x=0; x < turnos.lenght; x++) {
        if (identificador=='*'){
            turnos++;
        }else if (turnos==5) {
            alert ('Termino');
            reset();
        }
    }
}

function jugadorUno(identificador) {
    let elem = document.getElementById(identificador);
    elem.innerHTML = "*";
}

function jugadorDos(identificador) {
    let elem = document.getElementById(identificador);
    elem.innerHTML = "X";
}

function saludar(identificador) {
    let elem = document.getElementById(identificador);
    elem.style.color = colorfuente;
    elem.innerHTML = "HoLa";
    colorfuente = getComputedStyle(elem).backgroundColor;
}