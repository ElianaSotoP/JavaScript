/* 



if (aumentarProducto="no"){
  for(let total=0 ;i < 100; i++){

  }

}
 */

/* 
do{
let producto = prompt("Ingresa el nombre del producto");
let precio = parseFloat(prompt("Ingresa el precio del producto"));
let cantidad = parseInt(prompt("Ingresa la cantidad"));
let aumentarProducto = prompt("Desea agregar algun producto, escriba solo 1 si su respuesta es si o 2 si su respuesta es no ");
  
  if(aumentarProducto= "si"){
  
  }
  alert();

}while() */



// de hacer funcionar el primero 

/* let producto = prompt("Ingresa el nombre del producto");
let precio = parseFloat(prompt("Ingresa el precio del producto"));
let cantidad = parseInt(prompt("Ingresa la cantidad"));
let aumentarProducto = parseInt(prompt("Desea agregar algun producto? Escriba  1 si su respuesta es SI o 2 si su respuesta es NO "));
  document.write(`Primer Producto <br>` );
  document.write(`${producto }<br>`);
  document.write(`${precio }<br>`);
  document.write(`${cantidad}<br>`);
 let total= cantidad * precio;
 if(aumentarProducto === 1){
   
do{
  producto = prompt("Ingresa el nombre del producto");
 precio = parseFloat(prompt("Ingresa el precio del producto"));
 cantidad = parseInt(prompt("Ingresa la cantidad"));
 document.write(`segundo Producto <br>` );
 document.write(`${producto }<br>`);
 document.write(`${precio }<br>`);
 document.write(`${cantidad}<br>`);
  let total1= total + total
 document.write(`El total es ${total1}`);
 } while(aumentarProducto=== 1);

 } else{
  document.write(`El total de tu compra es : ${total }<br>`);
 }
  */


/*  let producto = prompt("Ingresa el nombre del producto");
 let precio = parseFloat(prompt("Ingresa el precio del producto"));
 let cantidad = parseInt(prompt("Ingresa la cantidad"));
 let aumentarProducto = parseInt(prompt("Desea agregar algun producto? Escriba  1 si su respuesta es SI o 2 si su respuesta es NO "));
   document.write(`Primer Producto <br>` );
   document.write(`${producto }<br>`);
   document.write(`${precio }<br>`);
   document.write(`${cantidad}<br>`);
  let total= cantidad * precio;
  let aumentarProducto2
    
 do{
  if(aumentarProducto === 1){
  producto = prompt("Ingresa el nombre del producto");
  precio = parseFloat(prompt("Ingresa el precio del producto"));
  cantidad = parseInt(prompt("Ingresa la cantidad"));
  document.write(`segundo Producto <br>` );
  document.write(`${producto }<br>`);
  document.write(`${precio }<br>`);
  document.write(`${cantidad}<br>`);
   let total1= total + total
  document.write(`El total es ${total1}`);
  }else if (aumentarProducto =!1){
    document.write(`El total de tu compra es : ${total }<br>`);
  break;
}
    aumentarProducto2 = parseInt(prompt("Desea agregar algun producto? Escriba  1 si su respuesta es SI o 2 si su respuesta es NO "));
    
   
  } while(aumentarProducto2=== 1); */

//MEJOR EJEMPLAR 

/*   


 let producto 
 let precio 
 let cantidad 
 let aumentarProducto=0;
 let total
 let total1=0;
 let contador= 0;

 do{

  if(aumentarProducto ===2){

    
  }else {

    producto = prompt("Ingresa el nombre del producto");
    precio = parseFloat(prompt("Ingresa el precio del producto"));
    cantidad = parseInt(prompt("Ingresa la cantidad"));
    aumentarProducto = parseInt(prompt("Desea agregar algun producto? Escriba  1 si su respuesta es SI o 2 si su respuesta es NO "));
    contador=contador + 1
    document.write(`El ${contador} Producto <br>` );
    document.write(`${producto }<br>`);
    document.write(`${precio }<br>`);
    document.write(`${cantidad}<br>`);
    total= precio * cantidad;
    
    document.write(`El total de la compra ${contador} es ${total } soles <br>`);
  }
  total1= total1 + total
  document.write(`El monto total de la compra ${total1}  soles <br>`);
   
  } while(aumentarProducto=== 1);
  
 
 
 
 
 
 

 */
  

  let producto 
  let precio 
  let cantidad 
  let aumentarProducto=1;
  let total
  let total1=0;
  let contador= 0;
 
  do{
 
  if (aumentarProducto===1){
    
    producto = prompt("Ingresa el nombre del producto");
    precio = parseFloat(prompt("Ingresa el precio del producto"));
    cantidad = parseInt(prompt("Ingresa la cantidad"));
    aumentarProducto = parseInt(prompt("Desea agregar algun producto? Escriba  1 si su respuesta es SI o 2 si su respuesta es NO "));
    contador=contador + 1
    document.write(`El ${contador} Producto <br>` );
    document.write(`${producto }<br>`);
    document.write(`${precio }<br>`);
    document.write(`${cantidad}<br>`);
    total= precio * cantidad;
    
    document.write(`El total de la compra ${contador} es ${total } soles <br>`);
    total1= total1 + total

  }else{
    document.write(`El monto total de la compra ${total1}  soles <br>`);  
  }
  
   } while(aumentarProducto=== 1);
   
  





