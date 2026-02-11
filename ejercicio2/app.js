
//importamos la libreria para preguntarle por medio de la terminar (para pedir datos al usuario)
import promptSync from 'prompt-sync';
import {calcularNota} from "./index.js";

//inicilaimzo promptsync y se guarda en una constante
const prompt = promptSync();

//pedimos las notas al usuario


const n1 = parseFloat(prompt("ingresar nota 1: "));
const n2 = parseFloat(prompt("ingresar nota 2: "));
const n3 = parseFloat(prompt("ingresar nota 3: "));

const resultado = calcularNota(n1, n2, n3);

console.log(resultado);


