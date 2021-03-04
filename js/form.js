
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    
    var formulario = document.querySelector("#form-adiciona");
    var paciente = obterPacienteDoFormulario(formulario);    
    
    var erros =  validaPaciente(paciente);
    if(erros.length > 0){
        exibemensagemDeErro(erros);
        return false;
    }
    adicionaPacienteNaTabela(paciente);

    formulario.reset();
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
});

function obterPacienteDoFormulario(formulario){
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaImc(formulario.peso.value,formulario.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");   

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));    
    pacienteTr.appendChild(montaTd(paciente.imc, "info-nome"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erros = [];

    if (paciente.nome.length == 0) erros.push("Campo nome obrigatório");
    if (!validaPeso(paciente.peso) || paciente.peso.length == 0) erros.push("Peso é inválido");
    if (!validaAltura(paciente.altura)  || paciente.altura.length == 0) erros.push("Altura é inválido");   
    if (paciente.gordura.length == 0) erros.push("Campo gordura obrigatório"); 
    return erros;
}

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);  
}

function exibemensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}