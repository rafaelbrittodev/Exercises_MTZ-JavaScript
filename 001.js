// Invoke-Expression "node 001.js"

// Faça um programa para calcular o valor da viagem.
// Você terá 3 variáveis, elas são:
// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em KM da viagem;
// Imprima no console o valor que será gasto para realizar esta viagem.

let valor_combustível = 4.90;
let kmPorLitro = 11;
let distanciaKm = 490;

let valor = (distanciaKm / kmPorLitro) * valor_combustível

console.clear();
console.log('O valor do combustível está R$ ' + valor_combustível)
console.log('O veículo consome 1 litro de combustível a cada ' + kmPorLitro + ' KM')
console.log('A distância percorrida será de ' + distanciaKm + ' KM')
console.log('O valor total da viagem é R$ ' + valor.toFixed(2))