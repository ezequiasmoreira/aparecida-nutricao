var titulo = document.querySelector(".titulo");	
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");	

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValido) {
        alturaEhValido = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if( alturaEhValido && pesoEhValido){
        tdImc.textContent = calculaImc(peso,altura);
    }
}

function calculaImc(peso,altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2); 
}

function validaPeso(peso){
    if (peso >= 0 && peso < 1000) {
        return true;
    }
    return false;
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.00) {
        return true;
    }
    return false;
}