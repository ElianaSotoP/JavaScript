//INTERACTUANDO CON EVENTOS
const parentElemnet = document.getElementById("ContentDataPlayer");
const inputNombre = document.getElementById("inputNombre");
const parrafoNombre = document.createElement("p");
parentElemnet.appendChild(parrafoNombre);
const accion = (e) => {
  e.preventDefault();
  parrafoNombre.innerHTML = `Hola ${inputNombre.value} si deseas cambiar el color de fondo dale dale click en cambiar de color y dspues  en  Empezar a jugar!`;
};
parentElemnet.addEventListener("click", accion);

// LOCAL STORAGE

//variables globales
const BtnBotones = document.querySelector("#BtnBotones");
const botones = document.querySelector("#botones");
const fondo = document.querySelector("#fondo");

(() => {
  BtnBotones.addEventListener("click", agregarBotones);
  botones.addEventListener("click", delegacion);
})();

//ESTOY OBTENIENDO EL COLOR DE FONDO UTILIZANDO LOCAL STORAGE, AL MOMENTO DE REFRESCAR YA SE QUEDARA EL COLOR QUE HE SELECCIONADO

(() => {
  const color = localStorage.getItem("colorFondo");
  if (color === null) {
    fondo.className = "bg-dark";
  } else {
    fondo.className = color;
  }
})();
//ESTOY UTILIZANDO DELEGACIONES
function delegacion(e) {
  e.preventDefault();
  //e.target-> me detecta el boton en especifico
  //con esta sentencia estoy accediendo a cada elemento
  //console.log(e.target.classList[1])

  const colorBoton = e.target.classList[1];
  switch (colorBoton) {
    case "rosado":
      fondo.className = `rosado`;
      localStorage.setItem("colorFondo", `rosado`);
      break;
    case "verdecito":
      fondo.className = "verdecito";
      localStorage.setItem("colorFondo", "verdecito");
      break;
    case "amarillo":
      fondo.className = "amarillo";
      localStorage.setItem("colorFondo", "amarillo");
      break;
    case "celesteBebe":
      fondo.className = "celesteBebe";
      localStorage.setItem("colorFondo", "celesteBebe");
      break;
    case "naranjaClaro":
      fondo.className = "naranjaClaro";
      localStorage.setItem("colorFondo", "naranjaClaro");
      break;
  }
}

//AGREGAR LOS BOTONES DE COLORES
function agregarBotones(e) {
  e.preventDefault();
  botones.innerHTML = `<button class="btn rosado">Lila </button>
  <button class="btn verdecito">Verde</button>
  <button class="btn amarillo">Amarillo</button>
  <button class="btn celesteBebe">Azul</button>
  <button class="btn naranjaClaro">Naranja</button>`;
}

//En esta sección estoy tomando los ID de los colores y tambien del boton empezar
const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");
const ULTIMO_NIVEL = 10;

class Juego {
  constructor() {
    this.inicializar = this.inicializar.bind(this)
    this.inicializar();
    this.generarSecuencia();
    setTimeout(this.siguienteNivel, 500);
  }

  inicializar() {
    this.siguienteNivel = this.siguienteNivel.bind(this);
    this.elegirColor = this.elegirColor.bind(this);
    this.toggleBtnEmpezar()
    //btnEmpezar.classList.add("hide");
    //Para el nivel del juego
    this.nivel = 1;
    //DEFINIR DE MANERA GLOBAL ---
    this.colores = {
      //OPERADOR AVANZADO
      //celeste: celeste,
      celeste,
      violeta,
      naranja,
      verde,
    };
  }
  toggleBtnEmpezar(){
    if (btnEmpezar.classList.contains('hide')){
      btnEmpezar.classList.remove('hide');

    }else{
      btnEmpezar.classList.add('hide');
    }
  }
  generarSecuencia() {
    //definiendo la secuencia internamente e un atributo del juego
    //gerando array de numeros random
    // en esta parte estoy generando 10 numeros randon del 0 al 3
    this.secuencia = new Array(ULTIMO_NIVEL)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }
  siguienteNivel() {
    this.iluminarSecuencia();
    this.agregarEventosClick();
    this.subnivel = 0;
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
  //transformando de numero a color 

  transformarColorANumero(color) {
    switch (color) {
      case "celeste":
        return 0;
      case "violeta":
        return 1;
      case "naranja":
        return 2;
      case "verde":
        return 3;
    }
  }
  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformarNumeroAColor(this.secuencia[i]);
      setTimeout(() => this.iluminarColor(color), 1000 * i);
    }
  }
  iluminarColor(color) {
    //En esta seccion estoy haciendo llamando mi clase light del color, de esa manera hago una aparente iluminacion
    this.colores[color].classList.add("light");
    setTimeout(() => this.apagarColor(color), 350);
  }
  apagarColor(color) {
    this.colores[color].classList.remove("light");
  }
  agregarEventosClick() {
    this.colores.celeste.addEventListener("click", this.elegirColor);
    this.colores.verde.addEventListener("click", this.elegirColor);
    this.colores.violeta.addEventListener("click", this.elegirColor);
    this.colores.naranja.addEventListener("click", this.elegirColor);
  }
  eliminarEventosClick() {
    this.colores.celeste.removeEventListener("click", this.elegirColor);
    this.colores.verde.removeEventListener("click", this.elegirColor);
    this.colores.violeta.removeEventListener("click", this.elegirColor);
    this.colores.naranja.removeEventListener("click", this.elegirColor);
  }
  elegirColor(ev) {
    const nombreColor = ev.target.dataset.color;
    const numeroColor = this.transformarColorANumero(nombreColor);
    this.iluminarColor(nombreColor);
    if (numeroColor === this.secuencia[this.subnivel]) {
      this.subnivel++;
      if (this.subnivel === this.nivel) {
        //OPERADOR AVANZADO 
        //this.nivel=this.nivel+1
        this.nivel++;
        //this.eliminarEventosClick()

       this.nivel === ULTIMO_NIVEL + 1 ?  this.ganoElJuego():setTimeout(this.siguienteNivel, 1500);
        /* if (this.nivel === ULTIMO_NIVEL + 1) {
          //GANO
          this.ganoElJuego()
        } else {
          setTimeout(this.siguienteNivel, 1500);
        } */
      }
    } else {
      //perdio
      this.perdioElJuego()
    }
  }
  ganoElJuego(){
  swal('YES','GANASTE! 🎉😃','success')
  .then(this.inicializar)
  }
  perdioElJuego(){
    swal('OH NO!','lo lameto, perdiste 😢','error')
    .then(()=>{
        this.eliminarEventosClick();
        this.inicializar()
    })
    }
}
//Esta funcion se ejecuta despues de haber dado click en empezar juegar
function empezarJuego() {
  //en esta parte ya tendra una secuencia de 10 numeros de 0 al 3 en un array
  // alert("INGRESA LA PALABRA juego EN CONSOLA");
  window.juego = new Juego();
}
