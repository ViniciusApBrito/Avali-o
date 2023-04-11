function converter(){
        var valor = parseFloat(document.getElementById("valor").value);
        var converter = document.getElementById("converter").value;
        var resultado;
    
        switch (converter) {
            case "Quilometro":
                resultado = valor / 1000
                break;
            case "Centimetro":
                resultado = valor * 100
                break;
            case "Milimetro":
                resultado = valor * 1000
                break;
            case "Milha":
                resultado = valor / 1609
                break;
        }

}