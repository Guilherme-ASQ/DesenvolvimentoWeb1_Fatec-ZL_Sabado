function exibirResposta(nID){
    //const elemento = document.getElementById(nID);
    const textoResposta = document.getElementById('resposta');
    if (nID == 2) {
        textoResposta.innerText = 'Sua resposta está CORRETA!';
        textoResposta.classList.remove('respostaErrada');
        textoResposta.classList.add('respostaCerta');
    }else{
        textoResposta.innerText = 'Sua resposta está INCORRETA!!! 😭';
        textoResposta.classList.remove('respostaCerta');
        textoResposta.classList.add('respostaErrada');
    }
}

function efeito(nomeID){
    /*const elemento = document.getElementById(nomeID);
    if (elemento.classList.contains('effect')) {
        elemento.classList.remove('effect');
    }else{
        elemento.classList.add('effect');
    }*/
    
    /*SEM LAÇO DE REPETIÇÃO*/
    //nomeID.classList.add('effect');
    /*document.getElementById(nomeID).classList.add('effect');
    if (nomeID == 'bt1') {
        document.getElementById('bt2').classList.remove('effect');
        document.getElementById('bt3').classList.remove('effect');
    }else if(nomeID == 'bt2'){
        document.getElementById('bt1').classList.remove('effect');
        document.getElementById('bt3').classList.remove('effect');
    }else if(nomeID == 'bt3'){
        document.getElementById('bt1').classList.remove('effect');
        document.getElementById('bt2').classList.remove('effect');
    }*/

    /*const botao1 = document.getElementById('bt1');
    const botao2 = document.getElementById('bt2');
    const botao3 = document.getElementById('bt3');
    
    if (botao1.classList.contains('effect')) {
        botao1.classList.remove('effect');
    }else{
        botao1.classList.add('effect');
    }

    if (botao2.classList.contains('effect')) {
        botao2.classList.remove('effect');
    }else{
        botao2.classList.add('effect');
    }

    if (botao3.classList.contains('effect')) {
        botao3.classList.remove('effect');
    }else{
        botao3.classList.add('effect');
    }*/

    /*COM LAÇO DE REPETIÇÃO*/
    //const listaBotoes = document.getElementsByTagName("button");
    //const tamanho = listaBotoes.length;
    //for(let i = 0; i < tamanho; i++){
        /*if(listaBotoes[i].classList.contains('effect')){
            listaBotoes[i].classList.remove('effect');
        }else{
            listaBotoes[i].classList.add('effect');
        }*/
       //listaBotoes[i].classList.remove('effect');
    //}
    //document.getElementById(nomeID).classList.add('effect');

    /*Terceira forma*/
    //Aqui vai ser uma lista mesmo que tenha só 1 elemento.
    const btNegrito = document.getElementsByClassName('effect');
    if(btNegrito.length > 0){
        btNegrito[0].classList.remove('effect');
    }
    document.getElementById(nomeID).classList.add('effect');
}