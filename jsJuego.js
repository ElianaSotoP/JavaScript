
//INTERACTUANDO CON EVENTOS 
const parentElemnet = document.getElementById("ContentDataPlayer")
const inputNombre = document.getElementById("inputNombre");
const parrafoNombre = document.createElement("p")
parentElemnet.appendChild(parrafoNombre) 
const accion = (e) => {
e.preventDefault()
parrafoNombre.innerHTML = `Hola ${inputNombre.value} dale click en  Empezar a jugar!`
  
}
parentElemnet.addEventListener('click', accion)




//En esta sección estoy tomando los ID de los colores y tambien del boton empezar
const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");


//AGREGANDO EVENTOS 
class Juego {
  constructor() {
    this.inicializar();
    this.generarSecuencia();
    this.siguienteNivel();
  }

  inicializar() {
    btnEmpezar.classList.add("hide");
    //Para el nivel del juego
    this.nivel = 1;
    //DEFINIR DE MANERA GLOBAL ---
    this.colores = {
      //celeste: celeste,
      celeste,
      violeta,
      naranja,
      verde
    };
  }
  generarSecuencia() {
    //definiendo la secuencia internamente e un atributo del juego
    //gerando array de numeros random
    // en esta parte estoy generando 10 numeros randon del 0 al 3
    this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
  }
  siguienteNivel() {
    this.iluminarSecuencia();
  }
  //Funcion que transforma de numero a color
  transformarNumeroAColor(numero) {
    switch (numero) {
      case 0:
        return "celeste";
      case 1:
        return "violeta";
      case 2:
        return "naranja";
      case 3:
        return "verde";
    }
  }
  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformarNumeroAColor(this.secuencia[i]);
      setTimeout(()=>this.iluminarColor(color),100000 * i) 
    }
  }
  iluminarColor(color){
    //En esta seccion estoy haciendo llamando mi clase light del color, de esa manera hago una aparente iluminacion  
    this.colores[color].classList.add('light')
    setTimeout(()=>this.apagarColor(color),350)

  }
  apagarColor(color){
    this.colores[color].classList.remove('light')
  }
}
//Esta funcion se ejecuta despues de haber dado click en empezar juegar
function empezarJuego() {
  //en esta parte ya tendra una secuencia de 10 numeros de 0 al 3 en un array
 // alert("INGRESA LA PALABRA juego EN CONSOLA");
  window.juego = new Juego();
}
