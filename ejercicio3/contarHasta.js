//crea una funcion llamada contarHasta que reciba un numero, y utilizando un ciclo, 
// imprima todos los numeros desde 1 hasta el valor ingreasdo
//convierte luego esta funciona funcion flecha

//para la funcion tradicional se utiliza fuction paralbra reservada
function contarHasta (numero){

    //creamos una variable para inciar el contador
    let contador = 1;

    while (contador <= numero) {
        console.log(contador);
        contador ++;
        
        
    }


}

//para la funcion flecha se utiliza const
const contarHastaOp = (numero) => {

    let contador = 1;

    while(contador <= numero){
        console.log(contador);
        contador++;
        
    }

}

export {contarHasta}; 
export {contarHastaOp};