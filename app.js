// Array para almacenar los nombres de los amigos ingresados
let listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del campo de texto
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array y limpiar el campo de texto
    listaDeAmigos.push(nombreAmigo);
    inputAmigo.value = "";

    // Actualizar la lista visible en la página
    actualizarLista();
}

// Función para actualizar la lista visible en la página
function actualizarLista() {
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // Limpiar la lista actual

    // Recorrer el array de amigos y agregar cada nombre como un elemento <li>
    listaDeAmigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaHTML.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya al menos un nombre en la lista
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Seleccionar un nombre aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSecreto = listaDeAmigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}