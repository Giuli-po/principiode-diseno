// BUSCADOR
const formBusqueda = document.getElementById("form-busqueda");
const busqueda = document.getElementById("busqueda");
const mensajeBusqueda = document.getElementById("mensaje-busqueda");

formBusqueda.addEventListener("submit", function(event) {
  event.preventDefault();

  const texto = busqueda.value.trim();

  if (texto === "") {
    mensajeBusqueda.textContent =
      "Escribí un título, autor o tema para iniciar la búsqueda.";

    busqueda.focus();
    return;
  }

  mensajeBusqueda.textContent =
    `Búsqueda preparada para: “${texto}”.`;
});


// CONSULTA DE DISPONIBILIDAD
const formDisponibilidad =
  document.getElementById("form-disponibilidad");

const nombre = document.getElementById("nombre");
const curso = document.getElementById("curso");
const codigo = document.getElementById("codigo");

const mensajeDisponibilidad =
  document.getElementById("mensaje-disponibilidad");

formDisponibilidad.addEventListener("submit", function(event) {
  event.preventDefault();

  if (
    nombre.value.trim() === "" ||
    curso.value.trim() === "" ||
    codigo.value.trim() === ""
  ) {
    mensajeDisponibilidad.textContent =
      "Completá nombre, curso y código del libro para consultar.";

    return;
  }

  mensajeDisponibilidad.textContent =
    "Datos completos. La consulta de disponibilidad está lista para procesarse.";
});


// BOTONES DE ACCESO DIRECTO
const acciones = document.querySelectorAll(".accion");

acciones.forEach(function(accion) {

  accion.addEventListener("click", function() {

    const destino = accion.dataset.destino;
    const seccion = document.getElementById(destino);

    if (seccion) {
      seccion.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }

  });

});