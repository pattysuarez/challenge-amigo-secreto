// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica 
// para resolver el problema.
//Claudia Patricia Suarez pattysuarezsantos@gmail.com
//
let amigos = [];

function agregarAmigo() {
    //ingresa el nombre del texto dede HTML
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    //console.log(amigo);
    // valida si NO ha ingresado nombre
    if(!nombreAmigo){
        alert ("Por favor, inserte un nombre");
        return;
    }

    //adicionar los nombres en un arreglo cada vez que se añade
    amigos.push(nombreAmigo);
    console.log(amigos);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
}

function renderizarAmigos(){
    //mostrar la lista de nombres de amigos como una lista dinamica
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let index = 0; index < amigos.length; index++) {
        const element = amigos[index];
    
        let listaHTML = document.createElement("li");
        listaHTML.textContent = element;
        listaAmigos.appendChild(listaHTML);
    }
}

function sortearAmigo() {
    //sortear los nombres
    if(amigos.length == 0){
        alert("No hay amigos para sortear");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `el amigo sorteado es: ${amigoSorteado}`;
    
    //limpia la lista de los nombres 
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML="";

}

