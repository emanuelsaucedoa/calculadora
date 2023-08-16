//variables

let cero = document.getElementById("cero");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let sumar = document.getElementById("sumar");
let restar = document.getElementById("restar");
let multiplicar = document.getElementById("multiplicar");
let dividir = document.getElementById("dividir");
let reset = document.getElementById("reset");
let igual = document.getElementById("igual");
let resultado = document.getElementsByTagName('span')[0];

let operadorUno; 
let operadorDos;
let operacion;
let operacionCompletada = false;

//eventos

cero.onclick = function(e){
    if (operacionCompletada){
        operacionCompletada = false;
        resultado.textContent = '';
    }
    resultado.textContent = resultado.textContent + 0;
}

uno.onclick = function(e){
    if (operacionCompletada){
        operacionCompletada = false;
        resultado.textContent = '';
    }
    resultado.textContent = resultado.textContent + 1;
}

dos.onclick = function(e){
    if (operacionCompletada){
        operacionCompletada = false;
        resultado.textContent = '';
    }
    resultado.textContent = resultado.textContent + 2;
}

tres.onclick = function(e){
    if (operacionCompletada){
        operacionCompletada = false;
        resultado.textContent = '';
    }
    resultado.textContent = resultado.textContent + 3;
}

cuatro.onclick = function(e){
    if (operacionCompletada){
        operacionCompletada = false;
        resultado.textContent = '';
    }
    resultado.textContent = resultado.textContent + 4;
}

cinco.onclick = function(e){
    if (operacionCompletada){
        operacionCompletada = false;
        resultado.textContent = '';
    }
    resultado.textContent = resultado.textContent + 5;
}

seis.onclick = function(e){
    if (operacionCompletada){
        operacionCompletada = false;
        resultado.textContent = '';
    }
    resultado.textContent = resultado.textContent + 6;
}

siete.onclick = function(e){
    if (operacionCompletada){
        operacionCompletada = false;
        resultado.textContent = '';
    }
    resultado.textContent = resultado.textContent + 7;
}

ocho.onclick = function(e){
    if (operacionCompletada){
        operacionCompletada = false;
        resultado.textContent = '';
    }
    resultado.textContent = resultado.textContent + 8;
}

nueve.onclick = function(e)
    {if (operacionCompletada){
        operacionCompletada = false;
        resultado.textContent = '';
    }
    resultado.textContent = resultado.textContent + 9;
}

sumar.onclick = function(e){
    operadorUno = resultado.textContent;
    operacion = '+';
    resultado.textContent = '';
}

restar.onclick = function(e){
    operadorUno = resultado.textContent;
    operacion = '-';
    resultado.textContent = '';
}

dividir.onclick = function(e){
    operadorUno = resultado.textContent;
    operacion = '/';
    resultado.textContent = '';
}

multiplicar.onclick = function(e){
    operadorUno = resultado.textContent;
    operacion = '*';
    resultado.textContent = '';
}

reset.onclick = function(e){
    resultado.textContent = '';
    operadorUno = 0;
    operadorDos = 0;
    operacion = '';
}

igual.onclick = function(e){
    operadorDos = resultado.textContent;
    resolucion();
    operacionCompletada = true;
}

//resolucion

function resolucion(){
    switch(operacion){
        case '+':{
            resultado.textContent = parseFloat(operadorUno) + parseFloat(operadorDos);
            return resultado.textContent
        }
        case '-':{
            resultado.textContent = parseFloat(operadorUno) - parseFloat(operadorDos);
            return resultado.textContent
        }
        case '*':{
            resultado.textContent = parseFloat(operadorUno) * parseFloat(operadorDos);
            return resultado.textContent
        }
        case '/':{
            resultado.textContent = parseFloat(operadorUno) / parseFloat(operadorDos);
            return resultado.textContent
        }
        default:
            return resultado.textContent = 'ERROR';
    }   
}





