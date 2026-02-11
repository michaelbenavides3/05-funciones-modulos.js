
import promptSync from 'prompt-sync';
import {contarHasta} from "./index.js";

const prompt = promptSync();

let numero = parseInt(prompt("Ingresar numero: "),10)

//console.log(numero);

contarHasta(numero);
contarHastaOp(numero);
