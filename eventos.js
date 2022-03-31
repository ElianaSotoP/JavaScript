//INTERACTUANDO CON EVENTOS
parentElement.appendChild(parrafoNombre);
const accion = (e) => {
  e.preventDefault();
  parrafoNombre.innerHTML = `Hola ${inputNombre.value} tienes ${inputEdad.value} años`;
  
};
parentElement.addEventListener("click", accion);