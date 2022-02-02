// Programa que simula un tiket de compra de productos , donde muestra el producto, el precio, cantidad y el total de la compra
//Agregue que esta compra solo pueden realizar personas que son mayores de edad, si son menores de edad no lo podran realizar.
//Ademas, si el total de la compra es mayor a 100 y menor a 150, tienen un 5% de descuento. El segundo caso si la compra es mayor a 150 y menor a 200, tiene un 8% de descuento y por ultimo si su compra es mayor a 200 tiene un 10% de descuento. 
//Lo realize pensando en que tengo un negocio familiar (grocery store ) 


//Declaracion de variables 
 let producto 
 let precio 
 let cantidad 
 let aumentarProducto=0;
 let total
 let precioConIGV=0;
 let total1=0;
 let contador= 0;
 var precioConIGV1=0;
 let descuento=0;

 document.write(`BODEGA SOTO <br>`);
 document.write(`<br>`);
 document.write(`╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂╠⌂<br>`);
 document.write(`<br>`);
 //Preguntamos al usuario su edad para que pueda realizar la compra
 edad = parseInt(prompt("Cual es tu edad?"));
 //Si el usuario es mayor de edad podra realizar la compra 
 if (edad>=18){
  do{
  //Mediante Promps pedir el nombre del producto, la cantidad, el precio y si desea llevar algun producto adicional, si su respuesta es SI, te pide rellenar e producto, cantidad y precio.
      producto = prompt("Ingresa el nombre del producto");
      precio = parseFloat(prompt("Ingresa el precio del producto"));
      cantidad = parseInt(prompt("Ingresa la cantidad"));
      aumentarProducto = parseInt(prompt("Desea agregar algun producto? Escriba  1 si su respuesta es SI o 2 si su respuesta es NO "));
      //Agregué un contador para que pueda imprimirse en orden 
      contador=contador + 1;
      document.write(`El ${contador} Producto <br>` );
      document.write(`${producto }<br>`);
      document.write(`El precio es: S/.${precio }<br>`);
      document.write(`La cantidad es: ${cantidad}<br>`);
     //Multiplicación de la cantidad por el precio 
      total= precio * cantidad;
      //Agregandole el IGV(Impuesto genearal a las ventas, que en Peru es el 18%)
      precioConIGV= total* 1.18;
      
      document.write(`El total de la compra ${contador} es ${total } soles <br>`);
  
    document.write(`<br>`);
  
   //Calculo del total de la compra 
    total1= total1 + total;
    parseFloat(precioConIGV1 = precioConIGV1 + precioConIGV);
     
    } while(aumentarProducto=== 1);
    document.write(`********************************************<br>`);
    document.write(`El monto total de la compra sin IGV es: S/. ${total1}  soles <br>`);
    document.write(`El monto total de la compra con IGV es: S/. ${ precioConIGV1}  soles <br>`);
    document.write(`<br>`);
    document.write(`<br>`);
    document.write(`********************************************<br>`);
//AGREGANDO CONDICIONALES PARA CALCULAR DESCUENTO 
//Descuento del 5%
    if(precioConIGV1>100 && precioConIGV1<151 ){
      descuento= precioConIGV1*0.95;
      document.write(`Felicidades llegaste al nivel de 5% de descuento, porque tus compras fueron mayores a S/100.00. Usted solo tendra que pagar S/.${descuento} soles.`);
      //Descuento del 8%
    } else if(precioConIGV1>150&& precioConIGV1<201 ){
      descuento=precioConIGV1*0.92;
      document.write(`Felicidades llegaste al nivel de 8% de descuento, porque tus compras fueron mayores a S/150.00. Usted solo tendra que pagar S/.${descuento} soles`);
      //Descuento del 10%
    }else if(precioConIGV1>200){
      descuento=precioConIGV1*0.90;
      document.write(`Felicidades llegaste al nivel de 10% de descuento, porque tus compras fueron mayores a S/200.00. Usted solo tendra que pagar S/. ${descuento} soles`);

    }else{
      //Ningun descuento
      document.write(`No accediste a ningun descuento!<br>`);
    }
    
    
    document.write(`GRACIAS POR TU COMPRA Y TU PREFERENCIA! <br>`);

 }else{
   document.write(`Lo sentimos pero no podemos venderte ningún producto porque eres menor de edad. Sin embargo puedes pedirle a tus padres que realicen la compra por ti :) ,<br>`)
    document.write(`GRACIAS POR TU PREFERENCIA! <br>`);
 }


 
 
 
