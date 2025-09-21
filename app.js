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
    mostrarAmigos()
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function limpiarInput(elementoID){
    document.getElementById(elementoID).value=''
}

function mostrarAmigos(){
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; 
  amigos.forEach((nombre) => {
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
    })
}