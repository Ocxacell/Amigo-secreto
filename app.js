// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[]

function asignarTextoElement(elemento,texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML= texto;
}

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value
    if (nombre === "") {
    alert("Por favor escribe un nombre válido");
    return;
    }
    amigos.push(nombre)
    console.log(amigos)
    limpiarInput('amigo')
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function limpiarInput(elementoID){
    document.getElementById(elementoID).value=''
}