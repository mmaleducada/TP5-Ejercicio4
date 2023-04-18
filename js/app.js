const fechaElemento = document.querySelector('#fecha');
const horaElemento = document.querySelector('#hora');
fechaElemento.className = "text-light";
horaElemento.className = "text-light";

function actualizarReloj() {

const fechaActual = new Date();

const fecha = fechaActual.toLocaleDateString('es-AR');
const hora = fechaActual.toLocaleTimeString('es-AR');

fechaElemento.textContent = fecha;
horaElemento.textContent = hora;
}

actualizarReloj();

setInterval(actualizarReloj, 1000);
