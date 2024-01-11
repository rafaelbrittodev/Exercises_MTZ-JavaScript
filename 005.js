/* Invoke-Expression "node 005.js"

Elabora um algorit que dado o peso e altura de um adulto mostre sua condição de IMC de acordo com a tabela abaixo:

IMC em adulto condição:
- Abaixo de 18.5 = Abaixo do peso;
- Entre 18.5 e 25 = Peso normal;
- Entre 25 e 30 = Acima do peso;
- Entre 30 e 40 = Obeso;
- Acima de 40 = Obesidade grave;
*/

let peso = 66;
let altura = 1.74;
let imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log('IMC = Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('IMC = Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('IMC = Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('IMC = Obeso');
} else {
    console.log('IMC = Obesidade grave')
}
