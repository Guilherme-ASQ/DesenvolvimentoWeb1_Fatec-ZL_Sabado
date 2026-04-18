//Muda a cor de fundo do Container
//const corFundo = document.getElementsByClassName('div-container-center');

//Testar ver se funciona com o ID
const corFundo = document.getElementById('teste');

//Função para mudar a cor de fundo do container
function mudarCor(cor){
    corFundo.style.backgroundColor = cor;
}

//Pega o ID dos textos
const text1 = document.getElementById('texto1');
const text2 = document.getElementById('texto2');
const textB = document.getElementById('textoBotao');
//Função para mudar a cor do texto
function mudaTextoCor(color){
    text1.style.color = color;
    text2.style.color = color;
    textB.style.color = color;
}

/*const testos = document.getElementsByClassName(p);
mudarTextoCor(color){
    testos[0].style.color = color;
}*/

/*const text = document.getElementById('texto1');
function mudarTextoCor(color){
    text.style.color = color;
}*/