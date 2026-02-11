//funcion para asignar un saludo personalizado

function saludarGente(nombre) {

    return `bienvenido, ${nombre}!`;
    
}

//exportamos la funcion para que pueda se utilziada en otros archivos
//si no la exportamos o mas bien queremos decir que si no la scamos de esta caja invisible la funcion
//quedaria encerrada em este archivo
export {saludarGente};