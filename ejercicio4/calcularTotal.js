
//importamos las funciones anteriroes para porder llamarlsas
import { calSubTotal } from "./compra.js";
import { calIva } from "./calcularIva.js";

//3funcion para calcular el total, que recibe 3 parametros
function calTotal(cantidad, precio, porcentajeIva) {
    //se guarda en una constante el subtotal que es la cantidad por el precio
    const subtotal = calSubTotal(cantidad, precio);
    //contante que, se iva, se llama a la funcion calIva, con los parametros 
    //el iva se obtiene multiplicacndo el subtotal * iva y divido en 100
    const iva = calIva(subtotal, porcentajeIva);
    //el total es la suma del subtotal + iva
    return subtotal + iva;

}

export{calTotal};