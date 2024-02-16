//Desenvolva um programa que execute a leitura de um valor numérico inteiro, caso o valor esteja
//entre 1 e 9 apresentar a mensagem “Dentro do valor permitido” e caso contrário apresentar a
//mensagem “Fora do Valor Permitido”.


function num() {
    var valor = prompt('digite um numero dentro do valor permitido');
    valor = parseFloat(valor)
    

    if (valor >= 1 && 9) {
        alert('Dentro do valor permitido')
    } else {
        alert('Fora do Valor Permitido')
    }
}