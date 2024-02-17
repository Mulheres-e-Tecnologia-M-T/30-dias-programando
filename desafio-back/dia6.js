/*Apresentar ao usuário uma tela solicitando um login e depois uma senha, o usuário e senha
corretos devem estar armazenados em constantes no seu programa. Se o usuário acertar o
usuário e a senha exibir a mensagem ACESSO CONCEDIDO, caso contrário exibir a mensagem
ACESSO NEGADO e voltar a pedir o usuário e senha, essa condição deve-se repetir até que o
usuário acerte a combinação.*/
prompt('digite seu login')
const login = ''
const senha = ''
function login() {


    if (login >= 10) {
        alert('salvo');
    } else {
        prompt('invalido')
    };

    prompt('digite uma senha')
    if (senha >= 8) {
        alert('ACESSO CONCEDIDO')
    } else {
        alert('ACESSO NEGADO')
    }
}
