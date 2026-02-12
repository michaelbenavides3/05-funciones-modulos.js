
import promptSync from 'prompt-sync';
import {calSubTotal, calIva, calTotal} from "./index.js";

const prompt = promptSync();

const porcentajeIva = 19; //varaiable oara defirnir el porcentaje del iva

let cantidad = parseInt(prompt("ingrese la cantidad de productos: "),10)
let precio = parseInt(prompt("ingrese el precio del producto: "),10)

//mostramos los resultado

console.log("subtotal: " + calSubTotal(cantidad,precio)); 
console.log("iva: " + calIva(calSubTotal(cantidad,precio),porcentajeIva));
console.log("total: " + calTotal(cantidad, precio, porcentajeIva)); 



