let nome= document.querySelector('#nome');
let labelnome = document.querySelector('#labelnome');
let validnome = false;

let numero = document.querySelector('#numero');
let labelnumero = document.querySelector('#labelnumero');
let validnumero = false;

let exp = document.querySelector('#valid');
let labelexp = document.querySelector('#labelexp');
let validexp = false;

let cvc = document.querySelector('#cvc');
let labelcvc = document.querySelector('#labelcvc');
let validcvc = false;


btn.addEventListener('click', cadastrar);

nome.addEventListener("keyup", () => {
    if (nome.value.length <=10) {
        labelnome.setAttribute("style", "color: red");
        labelnome.innerHTML = "nome *Insira um nome valido";
        nome.setAttribute("style", "background:#eb5757e8");
        validnome = false;
    } else {
        labelnome.setAttribute("style", "color:blue");
        labelnome.innerHTML = "aprovado";
        nome.setAttribute("style", "background:#2FBD6A");
        validnome = true;
    }

})

numero.addEventListener("keyup", ()=> {
    if(numero.value.length <= 13){
        labelnumero.setAttribute("style", "color: red");
        labelnumero.innerHTML = "nome *Insira um numero valido";
        numero.setAttribute("style", "background:#eb5757e8");
        validnumero = false;
    } else {
        labelnumero.setAttribute("style", "color:blue");
        labelnumero.innerHTML = "aprovado";
        numero.setAttribute("style", "background:#2FBD6A");
        validnumero = true;
    }
})




function dados(){
    if(validnome && validnumero ){
        let dadosUser = JSON.parse(localStorage.getItem('dadosUser') || '[]');

        dadosUser.push({
            nome: nome.value,
            numero: numero.value,
            exp: exp.value,
            cvc: cvc.value
        })

        localStorage.setItem('dadosUser', JSON.stringify(dadosUser));
        msgSuces.style.display = "block";
        msgSuces.innerHTML = "Aguarde...";
        msgError.style.display = "none";
        msgError.innerHTML = "";        

        redirecionar()
    }else{
        msgError.style.display = "block";
        msgError.innerHTML = "Preencha os campos corretamente";
        msgSuces.style.display = "none";
        msgSuces.innerHTML = "";
    }
}
function redirecionar(){
    if(validnome && validnumero ){
    window.location.href = "index.html";
    }
}