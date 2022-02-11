//
let nombre = prompt('Hola, Ingresa tu nombre: ');
let edad = parseInt(prompt('Ingresa tu edad'))
if (edad<18){
  alert(`${nombre} estás en la edad perfecta para jugar!`)
  console.log(`${nombre} estás en la edad perfecta para jugar!`)
} else if (edad<35){
  alert(`${nombre} debes estar estresado con las labores, asi que este juego es ideal para ti! `)
  console.log(`${nombre} debes estar estresado con las labores, asi que este juego es ideal para ti! `)
} else{
  alert(`${nombre} no te preocupes para este juego no  existe barreras de edad! `)
  console.log(`${nombre} no te preocupes para este juego no  existe barreras de edad! `)
}

alert('HAZ CLICK EN EMPEZAr A JUGAR' )



//en esta seccion estoy tomando los ID de los colores y tambien del bonton empezar 
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego {
  constructor() {
    this.inicializar()
    this.generarSecuencia()
  }

  inicializar() {
    btnEmpezar.classList.add('hide')
    //Para el nivel del juego 
    this.nivel = 1;
    this.colores ={
      //celeste: celeste,
      celeste,
      violeta,
      naranja,
      verde,

    }

  }
  generarSecuencia(){
    //definiendo la secuencia internamente e un atributo del juego 
    //gerando array de numeros random
    // en esta parte estoy generando 10 numeros randon del 0 al 3 
    this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));

  }
}
//Esta funcion se ejecuta despues de haber dado click en empezar jueg 
function empezarJuego() {
  //en esta parte ya tendra una secuencia de 10 numeros de 0 al 3 en un array 
  alert('INGRESA LA PALABRA juego EN CONSOLA' )
  window.juego = new Juego()

}


