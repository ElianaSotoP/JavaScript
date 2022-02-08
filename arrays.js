
// Creando Objetos un objeto por cada producto 

//objetos de la categoria lacteos 

let lecheGloriAzulGrande= {
  nombreProducto :'Leche Gloria azul 400ml',
  cantidad: 5,
  precio: 3.4,
  descripcion: 'Leche en tarro clasica tamaño grande de 400ml',
  categoria: 'Lacteos'
}
let lecheGloriAzulPequenia= {
  nombreProducto :'Leche Gloria azul pequeña',
  cantidad: 3,
  precio: 2,
  descripcion: 'Leche en tarro clasica tamaño pequeño',
  categoria: 'Lacteos'
}

let lecheGloriaLightGrande= {
  nombreProducto :'Leche Gloria light400ml',
  cantidad: 4,
  precio: 3.7,
  descripcion: 'Leche en tarro light  tamaño grande de 400ml',
  categoria: 'Lacteos'
}
let lecheGloriaNinioGrande= {
  nombreProducto :'Leche Gloria niño 400ml',
  cantidad: 7,
  precio: 3.7,
  descripcion: 'Leche en tarro niño tamaño grande de 400ml',
  categoria: 'Lacteos'
}
let lecheGloriaNinioPequenio= {
  nombreProducto :'Leche Gloria niño 400ml',
  cantidad: 7,
  precio: 3.7,
  descripcion: 'Leche en tarro niño tamaño pequeño de 400ml',
  categoria: 'Lacteos'
}



//Objetos de la categoría cuidado Personal

let shampooPanteneSachet = {
  nombreProducto :'shampoo Pantene Sachet',
  cantidad: 7,
  precio: 1.3,
  descripcion: 'Shampu pantene anticaspa clasico',
  categoria: 'Cuidado Personal'

}
let shampooHeadAndShoulderSachet = {
  nombreProducto :'shampoo HeadAndShoulder Sachet',
  cantidad: 2,
  precio: 1.2,
  descripcion: 'Shampu HeadAndShoulder clasico',
  categoria: 'Cuidado Personal'

}
let jabonJhonsonBaby = {
  nombreProducto :'jabon Jhonson Baby ',
  cantidad: 2,
  precio: 1.2,
  descripcion: 'jabon en barra Jhonson Baby en barra',
  categoria: 'Cuidado Personal'

}

//Objetos de la categoría bebes
let PanialPampersRN= {
  nombreProducto :'Pañal Pampers talla RN ',
  cantidad: 10,
  precio: 1,
  descripcion: 'Pañal Pampers RN para bebés recién nacidos ',
  categoria: 'Bebes'

}
let PanialPampersP= {
  nombreProducto :'Pañal Pampers talla P ',
  cantidad: 7,
  precio: 1,
  descripcion: 'Pañal Pampers P para bebes de tres meses',
  categoria: 'Bebes'

}
let PanialPampersM= {
  nombreProducto :'Pañal Pampers talla M ',
  cantidad: 12,
  precio: 1.2,
  descripcion: 'Pañal Pampers M para bebes de medio año',
  categoria: 'Bebes'

}
let PanialPampersG= {
  nombreProducto :'Pañal Pampers talla G',
  cantidad: 12,
  precio: 1.2,
  descripcion: 'Pañal Pampers G para bebes de un año',
  categoria: 'Bebes'

};
let PanialPampersXG= {
  nombreProducto :'Pañal Pampers talla XG ',
  cantidad: 7,
  precio: 1.2,
  descripcion: 'Pañal Pampers XG para bebes de dos años',
  categoria: 'Bebes'

};
let PanialPampersXXG= {
  nombreProducto :'Pañal Pampers talla XXG ',
  cantidad: 7,
  precio: 1.2,
  descripcion: 'Pañal Pampers XXG para bebes de tres años ',
  categoria: 'Bebes'

};


//CREANDO UN ARRAY PARA ALMACENAR TODOS LOS PRODUCTOS 

const productos =[
  lecheGloriAzulGrande, 
  lecheGloriAzulPequenia,
  lecheGloriaLightGrande,
  lecheGloriaNinioGrande,
  lecheGloriaNinioPequenio,
  shampooPanteneSachet ,
  shampooHeadAndShoulderSachet,
  jabonJhonsonBaby,
  PanialPampersRN,
  PanialPampersP,
  PanialPampersM,
  PanialPampersG,
  PanialPampersXG,
  PanialPampersXXG

];
console.log(productos);

//FILTRAR POR CATEGORIA UTILIZANDO EL METODO DE BUSQUEDA FILTER 
console.log('LOS PRODUCTOS DE LA CATEGORIA CUUIDADO PERSONAL SON:');
const resultadoCategoria = productos.filter((category) => category.categoria.includes('Cuidado Personal'));
//const resultadoCategoria = productos.filter((category) => category.categoria ==='Cuidado Personal')
console.log(resultadoCategoria);

// MOSTRAR LOS PRODUCTOS MAS BARATOS  UTILIZANDO EL METODO DE BUSQUEDA FILTER 
const PRECIO_BARATO = 1.2;
console.log('Los productos mas baratos son:');
const precioBarato = productos.filter((price) => price.precio <PRECIO_BARATO);
console.log(precioBarato);

// MOSTRAR EL NOMBRE DE TODOS LOS PRODUCTOS UTILIZANDO EL METODO MAP 
console.log('los productos disponibles son:');
const listaNombres = productos.map(nombre => nombre.nombreProducto);
console.log(listaNombres);


