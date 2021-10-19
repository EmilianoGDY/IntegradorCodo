const email = document.getElementById('email')
const user = document.getElementById('user')
const pass = document.getElementById('contra')
const pass2 = document.getElementById('contra2')
const form = document.querySelector('.formulario')
const parrafo = document.querySelector('.warnings')
const boton = document.querySelector('button')

boton.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "" ;
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    parrafo.innerHTML = "";
    if(user.value.length < 6){
        warnings += 'El nombre no es valido <br>';
        entrar = true ; 
    };

    if(!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>';
        entrar = true;
    };


    if(pass.value.length < 8){
        warnings += 'La contraseña no es valida <br>';
        entrar = true ;
    };


    if(entrar){
        parrafo.innerHTML = warnings ;
    };
})

