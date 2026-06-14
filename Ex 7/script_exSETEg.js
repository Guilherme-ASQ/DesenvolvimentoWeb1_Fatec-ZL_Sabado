function gerarTabuada(){
    document.getElementById('resultado').innerHTML = '';
    const numeroDigitado = document.getElementById('campoTabuada').value;
    const numeroBase = parseFloat(numeroDigitado);
    for(let i = 1; i < 11; i++){
        const resultadoConta = i * numeroBase;
        const novoLI = document.createElement('li');
        novoLI.textContent = i + " * " + numeroBase+ " = " + resultadoConta;
        document.getElementById('resultado').appendChild(novoLI);
    }
}