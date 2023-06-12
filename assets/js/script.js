
/*
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySeletor()
*/

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

let nomeOk = false;
let emailOk = false;
let mensagemOk = false;
let cepOk = false;

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido!"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido!"
        txtNome.style.color = "green"
        
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

        if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
            txtEmail.innerHTML = "E-mail Inválido"
            txtEmail.style.color ="red"
        } else {
            txtEmail.innerHTML = "E-mail Válido"
            txtEmail.style.color ="green"
        }
        function enviarForm() {
            if (nomeOk === true && emailOk === true && mensagemOk === true) {
                alert(nome.value + ", obrigado pelo contato, aguarde nosso retorno.");
            } else {
                alert("Por favor, preencha todos os campos corretamente.");
            }
        }
        
        const eNumero = (numero) => /^[0-9]+$/.test(numero);
        
        const cepValido = (cep) => cep.length == 8 && eNumero(cep);
        
        function validarCep() {
            const cep = document.getElementById("cep").value.replace("-", "");
        
            if (cepValido(cep)) {
                txtCep.innerHTML = "✔";
                txtCep.style.color = "green";
                cepOk = true;
            } else {
                txtCep.innerHTML = "CEP Inválido";
                txtCep.style.color = "red";
                cepOK = false;
            }
        }
        
        function consultarCep() {
            document.getElementById("dados").innerHTML = "";
            const cep = document.getElementById("cep").value.replace("-", "");
            const url = `https://viacep.com.br/ws/${cep}/json/`;
        
            if (cepOk === true || cepValido(cep)) {
        
                fetch(url)
                    .then((response) => response.json())
                    .then((jsonBody) => {
                        if (jsonBody.erro === true || jsonBody.logradouro === undefined) {
                            alert("CEP não encontrado!");
                        } else {
                            document.getElementById("dados").innerHTML =
                                jsonBody.logradouro +
                                "\n" +
                                jsonBody.bairro +
                                "\n" +
                                jsonBody.localidade +
                                "\n" +
                                jsonBody.uf;
                        }
                    })
                    .catch((error) => {
                        alert("CEP não encontrado!");
                    });
            }
        }
    }
