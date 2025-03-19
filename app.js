// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const NombresAmigos = document.getElementById ("amigo");
const ListadoAmigos = [];
const ListaAmigos = document.getElementById ("listaAmigos");
const Asecreto = document.getElementById("resultado");

function agregarAmigo() {
    
    if (!NombresAmigos.trim){
        alert("Escribe un nombre valido")
    }

    ListadoAmigos.push(NombresAmigos.value);
    ListaAmigos.innerHTML += `<li>${NombresAmigos.value}</li>`;

};

function sortearAmigo(){
    const random = Math.floor(Math.random()*ListadoAmigos.length);
    const amigoSecreto = ListadoAmigos[random];
    Asecreto.innerHTML= `<li>Tu amigo secreto es:${amigoSecreto}</li>`;
};

