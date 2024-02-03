let email = document.querySelector('#email');
let labelEmail = document.querySelector('#labelEmail');
let validEmail = false;


let password = document.querySelector('#senha');
let labelPassword = document.querySelector('#labelSenha');
let validSenha = false;

let msgError = document.querySelector("#msgError");
let msgSuces = document.querySelector("#msgSuces");

let btn = document.querySelector("#btn");

btn.addEventListener("click", cadastrar);


email.addEventListener("keyup", () => {
    if (email.value.length <= 15) {
        labelEmail.setAttribute("style", "color: red");
        labelEmail.innerHTML = "email *Insira um email valido";
        email.setAttribute("style", "background:#eb5757e8");
        validEmail = false;
    } else {
        labelEmail.setAttribute("style", "color:blue");
        labelEmail.innerHTML = "email";
        email.setAttribute("style", "background:pink");
        validEmail = true;
    }

})
password.addEventListener('keyup', () => {
    if (password.value.length <= 7) {
        labelPassword.setAttribute("style", "color: red");
        labelPassword.innerHTML = "*Insire uma senha de 8 digitos";
        password.setAttribute("style", "background:#eb5757e8");
        validSenha = false;
    } else {
        labelPassword.setAttribute("style", "color:blue");
        labelPassword.innerHTML = "email";
        password.setAttribute("style", "background:#F3EFEF");
        validSenha = true;
    }

})

function cadastrar() {
    if (validEmail && validSenha) {
        let cadastroUser = JSON.parse(localStorage.getItem('cadastrarUser') || '[]');

        cadastroUser.push({
            email: email.vlaue,
            senha: senha.value
        });

        localStorage.setItem('cadastroUser', JSON.stringify('cadastroUser'));

        msgSuces.style.display = "block";
        msgSuces.innerHTML = "Aguarde...";
        msgError.style.display = "none";
        msgError.innerHTML = "";
    }else{
        msgError.style.display = "block";
        msgError.innerHTML = "Preencha os campos corretamente";
        msgSuces.style.display = "none";
        msgSuces.innerHTML = "";
    }
}