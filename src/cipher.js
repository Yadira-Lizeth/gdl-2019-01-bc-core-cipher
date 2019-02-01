window.cipher = {

    encode: (offset, string) => {

        var resultado = "";
        var texto = String(string).toUpperCase();
        for (var x = 0; x < texto.length; x++) {
            if (texto.charCodeAt(x) == 32) {
                code = 32;
            }else {
            var code = (texto.charCodeAt(x) - 65 + offset) % 26 + 65;
            }
            resultado = resultado + String.fromCharCode(code);

        }
        return resultado;
    },

    decode: (offset, string) => {
        var resultado = "";
        var texto = String(string).toUpperCase();
        for (var x = 0; x < texto.length; x++) {
            if (texto.charCodeAt(x) == 32) {
                code = 32;
            }else {
                var code = (texto.charCodeAt(x) + 65 - offset) % 26 + 65;
            }
            resultado = resultado + String.fromCharCode(code);
        }
        return resultado;
    }
};
