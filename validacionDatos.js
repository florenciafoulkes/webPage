function Controlar(event) {
    var Enviar = true;
    let aux = "";

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const sexo = document.querySelector('input[name="sexo"]:checked');
    const emailInput = document.getElementById('email').value.trim();
    const celInput = document.getElementById('celular').value.trim();
    const mensaje = document.getElementById('textarea').value.trim();

    if (nombre.length <= 2) {
        aux += "- Nombre debe contener más de 2 caracteres\n";
        Enviar = false;
    }

    if (/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(nombre)) {
        aux += "- Nombre no puede contener números o caracteres especiales\n";
        Enviar = false;
    }

    if (/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(apellido)) {
        aux += "- Apellido no puede contener números o caracteres especiales\n";
        Enviar = false;
    }

    if (apellido.length <= 2) {
        aux += "- Apellido debe contener más de 2 caracteres\n";
        Enviar = false;
    }
    if(!sexo){
        aux += "- Debe seleccionar un sexo\n";
        Enviar = false;
    }

    if(emailInput.length === 0){
        aux += "- Email es un campo obligatorio\n";
        Enviar = false;
    } else if(!validarEmail(emailInput)){
        aux+= "- Formato de email inválido\n";
        Enviar = false;
    }
    if(celInput === "" || !validarTelefono(celInput)){
        aux += "- Celular nulo o formato inválido. +549##########\n";
        Enviar = false;
    }
    if(document.getElementById('textarea').value.trim().length <= 5){
        aux += "- Mensaje debe tener al menos 6 caracteres\n";
        Enviar = false;
    }
    
    if(Enviar){
        alert("Mensaje enviado. Nos comunicaremos a la brevedad.");
    }
    else{
        event.preventDefault();
        alert("Campos inválidos:\n" + aux + "Intente otra vez.");
    }

}

function validarEmail(emailInput){
    const emailPrueba = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPrueba.test(emailInput);
}

function validarTelefono(celInput){
    const celRegex = /^\+549\d{9,10}$/;
    return celRegex.test(celInput);
}