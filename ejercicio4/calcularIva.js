//segunda funcion para calcular el iva
function calIva(subtotal, porcentajeIva){
    return subtotal * (porcentajeIva / 100);
}

export {calIva};