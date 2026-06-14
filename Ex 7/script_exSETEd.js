const tarefas = ["G1","g2","h3"];//ja mostrar esse elemnetos logo de cara pra ver se da certo.
//O usuario clica no botão eu crio um novo elemento. Teoricamente não precisa de lista.
/*const quebraLinha = document.getElementsByTagName('br');*/
/*const quebraLinha = "<br>";*/

function alterarLista(){
    /*const inputTarefa = document.getElementById('campo-tarefa');
    const listaFinal = document.getElementById('resultado-lista');*/

    /*tarefas.push = inputTarefa.value; /*+ "<br>";*/
    /*tarefas.push(inputTarefa.value + "<br>");*/
    /*tarefas.push(inputTarefa.value);
    /*tarefas.join("<br>");*/
    /*listaFinal.textContent = tarefas;*/
    /*listaFinal.innerHTML = tarefas;*/

    /*listaFinal.textContent = tarefas;*/
    /*listaFinal.innerHTML = tarefas + quebraLinha;*/
    
    /*tarefas.join(quebraLinha);*/
    /*listaFinal.innerHTML = tarefas + "<br>";
    
    /*EU QUERO FAZER UMA QUEBRA DE LINHA NO PARAGRAFO DA PAGINA HTML.
    APÓS ADICIONAR UM ITEM NA LISTA DE TAREFAS ELE FICA NA LINHA DE BAIXO,
    MAS EU NÃO TO ACERTANDO ADICIONAR A TAG DE QUEBRA DE LINHA NA LISTA*/
    
    /*FAzer igual ao site do WB3 school*/
    const node = document.createElement('br');/*cria o elemento da quebra de linha*/
    //const container; criar um container?
    const textNode = document.createTextNode(document.getElementById('campo-tarefa').value);/*Cria o texto*/
    /*node.appendChild(textNode);/*Adiciona o texto no elemento html*/
    textNode.appendChild(node);
    /*listaFinal.appendChild(quebraLinha);*/
    document.getElementById('resultado-lista').appendChild(textNode);/*Adiciona na tag o conteudo da lista já com os valores e com as quebras de linha*/
    /*document.getElementById('resultado-lista').appendChild(node);/*Adiciona na tag o conteudo da lista já com os valores e com as quebras de linha*/
    /*fazer um container e adicionar OUTROS paragarafos dentro dele. Então tem varias tag p
    ou varias tag div
    AO inves de ter uma tag p, eu tenho uma div e dentro dela eu coloco novos tag p conforme o usuario digita na caixa de texto
    Pra cada elemento da lista eu crio uma nova tag p e DEPOIS eu adiciono todas as tag p dentro da div.
    innerHTML
    for

    */
}

function mudarLista(){
    /*const inputTarefa = document.getElementById('campo-tarefa');
    const listaFinal = document.getElementById('resultado-lista');*/

    const texto = document.getElementById('campo-tarefa').value;
    //Cria uma tag p
    const novoP = document.createElement('p');
    //Muda o texto desse paragrafo recem criado para o valor salvo da caixa de texto.
    novoP.textContent = texto;
    //Pega a div em que os itens da lista serao mostrados na tela.
    document.getElementById('resultado-lista').appendChild(novoP);
}

//
function alterarListaUL(){
    const textUL = document.getElementById('campoUL').value;
    //Cria uma tag li
    const novoLI = document.createElement('li');
    //Muda o texto da tag
    novoLI.textContent = textUL;
    //Pega o novoLI e adiciona ele dentro da lista que já existe na página html.
    document.getElementById('listaUL').appendChild(novoLI);
}