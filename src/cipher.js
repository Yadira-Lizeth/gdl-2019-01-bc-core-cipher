window.cipher = {
 
  encode:(offset, string) => {

    var resultado ="";
    texto = String(texto).toUpperCase();
    for (var x = 0; x < texto.length; x++) {
        var code = (texto.charCodeAt(x) - 65 + n) % 26 + 65;
        resultado = resultado+String.fromCharCode(code);
        
    }
    document.getElementById("resultado").value=resultado;
},

decode:(offset, string) => {
    var resultado ="";
    texto = String(texto).toUpperCase();
    for (var x = 0; x < texto.length; x++) {
        var code = (texto.charCodeAt(x) + 65 - n) % 26 + 65;
        resultado = resultado+String.fromCharCode(code);
        
    }
    document.getElementById("resultado").value=resultado;
}
};
