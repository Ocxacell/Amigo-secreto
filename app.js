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
  document.getElementById("resultado").innerHTML=""
  amigos.forEach((nombre) => {
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
    })
}

function sortearAmigo(){
    let largo = amigos.length;
    console.log(largo)
    if (largo == 0){
        alert("No ha ingresado ningun amigo");
        return
    }
    let numero = Math.floor(Math.random()*(largo+1));
    
    console.log(numero)
    let resultado = document.getElementById("resultado");
    resultado.innerHTML="";
    let li = document.createElement("li");
    li.textContent = "El amigo secreto sorteado es: " + amigos[numero];
    resultado.appendChild(li);
    amigos=[]
    document.getElementById("listaAmigos").innerHTML=''
}