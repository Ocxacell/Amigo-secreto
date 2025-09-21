// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[]

function asignarTextoElement(elemento,texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML= texto;
}

function agregarAmigo(amigos){
    amigos.push(document.getElementById('amigo').value)
    console.log(amigos)
    return amigos
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
