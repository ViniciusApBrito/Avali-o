function Converter() {
    var CotacaoDolar = document.getElementById("dolar").value;
    var CotacaoEuro = document.getElementById("euro").value;
    var CotacaoLibra = document.getElementById("libra").value;

    var valor = document.getElementById("valor").value;


    var valorEmReais = valor * CotacaoLibra;
    var valorEuro = valor * CotacaoEuro;
    var valorDolar = valor * CotacaoDolar;
    var valorEmReais = valorEmReais.toFixed(2)

    var elementoValorConvertido = document.getElementById("Libra")
    var valorConvertido = "£ " + valorEmReais + " Libras"
    elementoValorConvertido.innerHTML = valorConvertido

    var elementoValorConvertido = document.getElementById("Euros")
    var valorConvertido = "€ " + valorEuro + " Euros"
    elementoValorConvertido.innerHTML = valorConvertido
    var elementoValorConvertido = document.getElementById("Dolares")

    var valorConvertido = "US$ " + valorDolar + " Dolares"
    elementoValorConvertido.innerHTML = valorConvertido
}
