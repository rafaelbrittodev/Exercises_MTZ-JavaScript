// Invoke-Expression "node 003.js"

// Faça um programa para calcular o valor da viagem.
// Você terá 5 variáveis, elas são:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em KM da viagem;
// Imprima no console o valor que será gasto para realizar esta viagem.

let valor_etanol = 3.10;
let valor_gasolina = 4.90;
let tipoCombustivel = 'etanol'
let kmPorEtanol = 7;
let kmPorGasolina = 11;
let distanciaKm = 490;

if (tipoCombustivel === 'gasolina') {
    console.clear();
    let valor = (distanciaKm / kmPorGasolina) * valor_gasolina
    console.log('O valor do combustível ' + tipoCombustivel + ' está R$ ' + valor_gasolina.toFixed(2))
    console.log('O veículo consome 1 litro de combustível a cada ' + kmPorGasolina + ' KM')
    console.log('A distância percorrida será de ' + distanciaKm + ' KM')
    console.log('A quantidade de litros gasto será de ' + (distanciaKm / kmPorGasolina).toFixed(2) + ' Litros.')
    console.log('O valor total da viagem é R$ ' + valor.toFixed(2))
} else if (tipoCombustivel === 'etanol') {
    console.clear();
    let valor = (distanciaKm / kmPorEtanol) * valor_etanol
    console.log('O valor do combustível ' + tipoCombustivel + ' está R$ ' + valor_etanol.toFixed(2))
    console.log('O veículo consome 1 litro de combustível a cada ' + kmPorEtanol + ' KM')
    console.log('A distância percorrida será de ' + distanciaKm + ' KM')
    console.log('A quantidade de litros gasto será de ' + (distanciaKm / kmPorEtanol).toFixed(2) + ' Litros.')
    console.log('O valor total da viagem é R$ ' + valor.toFixed(2))
}