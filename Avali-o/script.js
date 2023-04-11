function Converter() {
    var valorCotacaoDolar = document.getElementById("dolar").value;
    var valorCotacaoEuro = document.getElementById("euro").value;
    var valorCotacaoLibra = document.getElementById("libra").value;

    var valor = document.getElementById("valor").value;
    

    var valorEmReais = valor * valorCotacaoLibra;
    var valorEmReaisEuro = valor * valorCotacaoEuro;
    var valorEmReaisDolar = valor * valorCotacaoDolar;
    var valorEmReais = valorEmReais.toFixed(2)
    
    var elementoValorConvertido = document.getElementById("valorConvertido")
  
    var valorConvertido = "O resultado em real é R$" + valorEmReais
    elementoValorConvertido.innerHTML = valorConvertido
    var elementoValorConvertido = document.getElementById("valorConvertido2")
  
    var valorConvertido = "O resultado em real é R$" + valorEmReaisEuro
    elementoValorConvertido.innerHTML = valorConvertido
    var elementoValorConvertido = document.getElementById("valorConvertido3")
  
    var valorConvertido = "O resultado em real é R$" + valorEmReaisDolar
    elementoValorConvertido.innerHTML = valorConvertido
  }
  