const botaoExibir = document.getElementById('botao-exibir');

function alterarTexto(){
    const inputNome = document.getElementById('campo-nome');
    console.log(inputNome);
    console.log("Funciona?");
    //const N = document.getElementById('campo-nome').textContent;
    const resultado = document.getElementById('container');

    const nomeDigitado = inputNome.value;

    resultado.textContent = nomeDigitado;
}

function limparTexto(){
    document.getElementById('container').textContent = "";
}

/*botaoExibir.addEventListener("click", function (e) {
    const inputNome = document.getElementById('campo-nome');
    const resultado = document.getElementById('resultado-nome');

    const nomeDigitado = inputNome.value;

    resultado.textContent = `Olá, ${nomeDigitado}! Bem-vindo ao DOM.`;
});*/