'use strict'


function encode() {
    //var n = parseInt(prompt ("introduce el desplzamiento"));
    var resultado ="";
    var n = parseInt(document.getElementById("numero").value);
    //var texto = prompt ("introduce tu texto");
    var texto = document.getElementById("contenido").value;
    texto = String(texto).toUpperCase();
    for (var x = 0; x < texto.length; x++) {
        var code = (texto.charCodeAt(x) - 65 + n) % 26 + 65;
        resultado = resultado+String.fromCharCode(code);
        
    }
    document.getElementById("resultado").value=resultado;
}

function decode() {
    //var n = parseInt(prompt ("introduce el desplzamiento"));
    var resultado ="";
    var n = parseInt(document.getElementById("numero").value);
    //var texto = prompt ("introduce tu texto");
    var texto = document.getElementById("contenido").value;
    texto = String(texto).toUpperCase();
    for (var x = 0; x < texto.length; x++) {
        var code = (texto.charCodeAt(x) + 65 - n) % 26 + 65;
        resultado = resultado+String.fromCharCode(code);
        
    }
    document.getElementById("resultado").value=resultado;
}
