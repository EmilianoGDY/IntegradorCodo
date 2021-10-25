const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
}

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false
}


const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            if(expresiones.usuario.test(e.target.value)){
                document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__usuario').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__usuario .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['usuario'] = true;
            }else{
                document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__usuario .formulario__input-error').classList.add('formulario__input-error-activo');
            }
        break
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos["nombre"] = true;
            }else{
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo');
            }
        break
        case "password":
            if(expresiones.password.test(e.target.value)){
                document.getElementById('grupo__password').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__password').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__password .formulario__input-error').classList.remove('formulario__input-error-activo');
            }else{
                document.getElementById('grupo__password').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__password .formulario__input-error').classList.add('formulario__input-error-activo');
            }
            validarPass();
        break
        case "password2":
            validarPass();
        break
        case "correo":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('grupo__correo').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__correo').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__correo .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['correo'] = true;
            }else{
                document.getElementById('grupo__correo').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__correo .formulario__input-error').classList.add('formulario__input-error-activo');
            }
        break
    
    
    }   
}

const validarPass = () =>{
    const pass = document.getElementById('password');
    const pass2 = document.getElementById('password2');

    if(pass.value !== pass2.value){
        document.getElementById('grupo__password2').classList.add('formulario__grupo-incorrecto');
        document.querySelector('#grupo__password2 .formulario__input-error').classList.add('formulario__input-error-activo');
        campos['password'] = false;
    }else{
        document.getElementById('grupo__password2').classList.remove('formulario__grupo-incorrecto');
        document.getElementById('grupo__password2').classList.add('formulario__grupo-correcto');
        document.querySelector('#grupo__password2 .formulario__input-error').classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }

}


inputs.forEach( (input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.usuario && campos.nombre && campos.password && campos.correo){
        formulario.reset();
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(()=>{
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')


        document.querySelectorAll('.formulario__grupo-correcto').forEach((inp)=>{
            inp.classList.remove('formulario__grupo-correcto');
        })
    }else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
})