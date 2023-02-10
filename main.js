// Criando a função:

function tocaSom(IdElementoAudio){
    document.querySelector(IdElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');
    

//enquanto
for(let contado = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];

    const instrumento =  tecla.classList[1];
    console.log(instrumento)

    
    const idAudio = `#som_${instrumento}`;  //template string
    

   tecla.onclick =  function(){
        tocaSom(idAudio);
   };

   
}




