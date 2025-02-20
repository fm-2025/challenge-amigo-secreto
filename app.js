let listaDeAmigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaDeAmigos.push(nombreAmigo);
    inputAmigo.value = "";

    actualizarLista();
}

function actualizarLista() {
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";

    listaDeAmigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaHTML.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSecreto = listaDeAmigos[indiceAleatorio];

    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
