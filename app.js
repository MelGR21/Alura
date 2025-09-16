// Nombre del array donde se almacenarán los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.querySelector("#amigo"); // capturar el input en id amigo
    let nombreAmigo = input.value.trim(); // eliminar espacios en blanco

    if (nombreAmigo === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // Validar que el nombre no se repita (sensible a mayúsculas y minúsculas)
    if (amigos.includes(nombreAmigo)) {
        alert("Ese nombre ya está en la lista. Ingresa otro diferente.");
        input.value = "";
        return;
    }

    amigos.push(nombreAmigo); // agregar al array
    input.value = ""; // limpiar el campo
    mostrarAmigos(); // actualizar la lista
}

// Función para mostrar la lista de amigos en el HTML
function mostrarAmigos() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.append(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos 2 nombres para poder jugar.");
        return;
    }

    // Mostrar lista sin números
    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo; 
        lista.append(li);
    });

    // Elegir un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Limpiar resaltados previos
    const items = lista.querySelectorAll("li");
    items.forEach(li => {
        li.style.color = "";
        li.style.fontWeight = "";
        li.style.fontSize = "";
    });

    // Leyenda en cursiva
    const ganador = items[indiceAleatorio];
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = `<em>Tu amigo secreto es: ${ganador.textContent}</em>`;
}

// Función para eliminar todos los amigos y reiniciar 
function eliminarAmigos() {
    amigos = []; // vacía el array
    mostrarAmigos(); // limpia la lista en HTML
    document.querySelector("#resultado").innerHTML = ""; // limpia el resultado
}

// Asignar la función al botón con id "eliminarb"
document.querySelector("#eliminarb").addEventListener("click", eliminarAmigos);
