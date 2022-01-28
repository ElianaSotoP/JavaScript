// Programa que simula un tiket de compra de productos , donde muestra el producto, el precio, cantidad y el total de la compra
//Lo realize pensando en que tengo un negocio familiar (grocery store ) 

 let producto 
 let precio 
 let cantidad 
 let aumentarProducto=0;
 let total
 let precioConIGV=0;
 let total1=0;
 let contador= 0;
 let precioConIGV1=0;
 document.write(`BODEGA SOTO <br>`);
 document.write(`<br>`);
 document.write(`╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂<br>`);
 document.write(`<br>`);
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
    document.write(`El precio es: S/.${precio }<br>`);
    document.write(`La cantidad es: ${cantidad}<br>`);
   
    total= precio * cantidad;
    precioConIGV= total* 1.18;
    
    document.write(`El total de la compra ${contador} es ${total } soles <br>`);

  document.write(`<br>`);

  }
  total1= total1 + total;
  parseFloat(precioConIGV1 = precioConIGV1 + precioConIGV);
   
  } while(aumentarProducto=== 1);
  document.write(`********************************************<br>`);
  document.write(`El monto total de la compra sin IGV es: S/. ${total1}  soles <br>`);
  document.write(`El monto total de la compra con IGV es: S/. ${ precioConIGV1}  soles <br>`);
  document.write(`<br>`);
  document.write(`<br>`);
  document.write(`********************************************<br>`);
  document.write(`GRACIAS POR TU COMPRA Y TU PREFERENCIA! <br>`);
 
 
 
