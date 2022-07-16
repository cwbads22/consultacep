let rua = document.querySelector('#rua');
let cidade = document.querySelector('#cidade');
let uf = document.querySelector('#estado');
let btnCep = document.querySelector('#btnBuscarCep');
let listaCep = document.querySelector('#listaCep');

rua.value = "Digite o nome da rua ou parte dele sem n.º";
cidade.value = "Digite a Cidade";
uf.value = "Digite o Estado";

btnCep.addEventListener('click', function (e){
    e.preventDefault();
    
    let urlBase = 'https://viacep.com.br/ws/';
    let parametros = uf.value + '/' + cidade.value + '/' + rua.value + '/' + '/json';
    let callback = '?callback=popularDescubraoCep';

    let script = document.createElement('script');
    script.src = urlBase + parametros + callback;
    document.body.appendChild(script);
});

function popularDescubraoCep(resposta) {

    if(!Array.isArray(resposta)) {
        alert('O retorno não é uma lista de CEPs');

    }

    resposta.forEach(function(i) {
        
        let li = document.createElement('li');
        let endereco = i.logradouro + ' | ' + i.bairro + ' | ' + i.localidade + ' | ' + i.uf + ' | ' + i.cep;
        li.innerHTML = endereco;
        listaCep.appendChild(li);

    });

}