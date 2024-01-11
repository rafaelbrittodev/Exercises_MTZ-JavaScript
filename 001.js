// Invoke-Expression "node 001.js"

// Faça um programa para calcular o valor da viagem.
// Você terá 3 variáveis, elas são:
// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em KM da viagem;

let valor_combustível = 4.90;
let km_por_litro = 11;
let distancia = 490;

let valor = (distancia / km_por_litro) * valor_combustível

console.log('O valor total da viagem é R$ ' + valor)