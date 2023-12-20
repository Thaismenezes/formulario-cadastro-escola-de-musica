const formulario = document.querySelector('#formLogin');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email'); 
const senhaInput = document.querySelector('#senha');
const senhaConfInput = document.querySelector('#senhaConfirmacao');
const nivelSelect = document.querySelector('#nivel');
const grupoSelect = document.querySelector('#grupo');
const msgTextarea = document.querySelector('#mensagem');


formulario.addEventListener('submit', (event) => {
    event.preventDefault();
  
    if (nameInput.value.trim() === "") {
        alert("Por favor, escolha um Nome!");;
        return;
    }
    //validando email
    if (emailInput.value.trim() === "" || !validaEmail(emailInput.value)) {
        alert("Email inválido! Por favor, corrija!");
        return;
    }
    //validando senha
    if (senhaInput.value === "" || !validaTamanhoCampo(senhaInput.value, 8)){
        alert("A senha precisa ter no mínimo 8 dígitos!");
        return;
    }
    //validando confirmação de senha
    if (senhaConfInput.value !== senhaInput.value){
        alert("As senhas não coincidem! Por favor, corrija!");
        return;
    }

    //validando nivel
    if (nivelSelect.value === "") {
        alert("Por favor, escolha um nível de aprendizado!");
        return;
    }
    //validando grupo
    if (grupoSelect.value  === ""){
        alert("Por favor, escolha um grupo!");
        return;
    }
    
    if(!validaTamanhoCampo(msgTextarea.value, 30)){
        alert("Por favor, escreva um pouco mais sobre você!");
        return;
    }

    formulario.submit();
    alert("Informações enviadas, entraremos em contato via e-mail!")
});

function validaEmail(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    return emailRegex.test(email);
}


function validaTamanhoCampo(mensagem ,digitos){
    if(mensagem.length >= digitos){
        return true;
    }
    return false;
}



