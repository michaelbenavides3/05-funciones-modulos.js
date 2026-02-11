//Ejercicio 2 – Función con parámetros y retorno
//• Diseña una función llamada calcularPromedio que reciba tres notas y retorne el
//promedio final del estudiante.

//• Si el promedio es mayor o igual a 3.0, muestra un mensaje indicando que aprobó;
//de lo contrario, que reprobó.
//• Aplica operadores lógicos y condicionales.

//creamos la fucnione para calcular las notas

function calcularNota(n1, n2, n3) {

    const promedio = (n1 + n2 + n3) / 3;

    if (promedio >= 3.3) {
        return  `promedio, ${promedio} el estudiante aprobo` ;
    }
    else{
        return `promedio ${promedio} el estudiante reprobo`
    }
    
}

//exportamos la funcion hacia el archivo barril

export {calcularNota};