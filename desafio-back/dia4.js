//Escreva um programa que realize a conversão de graus Celsius (C) para graus Fahrenheit (F). Utilize a fórmula abaixo:
//F = ( 9 * C) / 5

var cal = prompt('digite uma temperatura!')

function cOUf(celsius) {   
    var f = (celsius * 9) / 5 + 32;
    return f;
}

var c = cal;
var f = cOUf(c);
alert(c + 'c° convertido para f° ' + f);

