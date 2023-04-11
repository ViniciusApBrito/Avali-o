function calculo() {
    var valor = parseFloat(document.getElementById("valor").value);
    var converter = document.getElementById("converter").value;
    var resultado;

    switch (converter) {
        case "euro":
            resultado = 5.46
            break;
        case "dolar":
            resultado =  5.01
            break;
        case "libra":
            resultado =  6.21
            break;
    }

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em real é R$" + valorEmReais
    elementoValorConvertido.innerHTML = valorConvertido

}