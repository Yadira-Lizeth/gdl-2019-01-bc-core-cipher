'use strict'

function encode() {
    var offset = parseInt(document.getElementById("offset").value);
    var texto = document.getElementById("string").value;
    texto = String(texto).toUpperCase();
    document.getElementById("resultado").value = window.cipher.encode(offset, texto);
}

function decode() {
    var offset = parseInt(document.getElementById("offset").value);
    var texto = document.getElementById("string").value;
    texto = String(texto).toUpperCase();
    document.getElementById("resultado").value = window.cipher.decode(offset, texto);
}
