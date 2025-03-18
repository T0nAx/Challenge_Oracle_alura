//se crea una lista vacia para almacenar los nombres

let amigos = [];

// se crean las funciones

//funcion de ingresar los nombres

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        actualizarLista();
        input.value = '';
    }
}

// funcion que almacena nombres en la lista vacia

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');

        li.textContent = `${index + 1}. ${amigo}`;

        // para eliminar los nombres
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'borrar';
        botonEliminar.classList.add('btn-eliminar'); // Añade una clase específica al boton para poder editarlo mediante css
        botonEliminar.onclick = () => eliminarAmigo(index);

        
        li.appendChild(botonEliminar);

        lista.appendChild(li);
    });
}

function eliminarAmigo(indice) {
    amigos.splice(indice, 1);
    actualizarLista(); 
}

//estructura copndicional que exige tener mas de un nombre en la lista 
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("escribir mas de un nombre");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos.splice(indiceAleatorio, 1)[0];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;

    
    actualizarLista();
}

//se puede reiniciar el juego tras el resultado
function reiniciarAplicacion(){
    amigos = [];
    actualizarLista();
    
    const resultado = document.getElementById('resultado');
    if (resultado) {
        resultado.innerHTML = '';
    }
}
//se vuelve a empezar el juego tras el resultado

document.getElementById('reinicio').onclick = reiniciarAplicacion;

