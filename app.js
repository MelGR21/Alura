// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Nombre del array donde se almacenarán los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.querySelector("#amigo"); // capturar el input en id amigo
    let nombreAmigo = input.value.trim(); // eliminar espacios en blanco

    if (nombreAmigo !== "") {
        amigos.push(nombreAmigo); // agregar al array
        input.value = ""; // limpiar el campo
        mostrarAmigos(); // actualizar la lista
    } else {
        alert("Por favor, escribe un nombre válido.");
    }
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
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Pintar la lista solo con los nombres (sin números)
    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo; // 👈 solo el nombre
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