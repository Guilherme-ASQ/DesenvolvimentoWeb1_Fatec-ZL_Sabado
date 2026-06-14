const cor = 49;
let minhaCor = `rgb(${cor}, ${cor}, ${cor})`;

function mudarCOR(id){
    //Cria uma lista com os elementos com a classe circulo
    const listaSEMAFORO = document.getElementsByClassName('circulo');
    //Laço for que muda todos os elementos pra cinza. Os elementos são os circulos que representam o semaforo
    for(let i = 0; i < listaSEMAFORO.length; i++){
        listaSEMAFORO[i].style.backgroundColor = minhaCor;
    }
    //console.log(id);
    document.getElementById(id).style.backgroundColor = id;
    if(id == 'red'){
        document.getElementById('estadoATUAl').textContent = "PARAR!!!";
    }else if(id == 'yellow'){
        document.getElementById('estadoATUAl').textContent = "ATENCAO!";
    } else{
        document.getElementById('estadoATUAl').textContent = "Siga em frente.";
    }
    /*if(id == 'red'){
        document.getElementById(red).style.backgroundColor = 'red';
    }*/
    /*document.getElementById(id).style.backgroundColor = id;*/
    /*document.getElementById(nomeid).classList.add(nomeid)*/;
}