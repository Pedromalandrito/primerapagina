/*elabore un programa en js q permita ingresar los siguientes datos; 
rif, apellido, nombres, precio del producto, cantidad a llevar del producto,
si lleva entre 1 y 10 productos se otorga 5% de descuento, pero si lleva de 11 productos en adelante se le otorga 8% de descuento,
mostrar en pantalla datos personales, pago bruto y neto */
let nombre=prompt(`Nombre del Cliente: `);
let apellido=prompt(`Apellido del cliente: `);
let rif=prompt(`Rif del cliente: `);
let precioInicial=parseFloat(prompt(`Precio del producto: `));
let cantidad=parseFloat(prompt(`Cantidad del producto: `));
let precioBruto=precioInicial*cantidad;
let precioNeto=0;
if(cantidad>1&&cantidad<10){
    precioNeto=precioBruto*(0.95);
    document.write(`El cliente ${nombre} ${apellido} Titular del RIF=${rif} tiene un descuento del 5%, por lo tanto debera pagar: ${precioNeto} Bolivares`);
}else{
    precioNeto=precioBruto*(0.92);
    document.write(`El cliente ${nombre} ${apellido} Titular del RIF=${rif} tiene un descuento del 8%, por lo tanto debera pagar: ${precioNeto} Bolivares`);
}