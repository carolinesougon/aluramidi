// Criando a função:

function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

// Chamando a função:

// document.querySelector('.tecla_pom').onclick = tocaSomPom;

// ---------------------------------------------------------



const listaDeTeclas = document.querySelectorAll('.tecla');
    listaDeTeclas[0].onclick = tocaSomPom;




