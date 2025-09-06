let amigos = [];

function agregarAmigo() {
    let nombreInput = document.getElementById("amigo");
    let nombre = nombreInput.value.trim();

    if (nombre === '') {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);

    nombreInput.value = '';

    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    
    let listaHTML = document.getElementById('listaAmigos');

    listaHTML.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaHTML.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `¡El amigo secreto es: ${amigoSorteado}!`;

    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
}