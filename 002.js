// Invoke-Expression "node 002.js"

// Faça um programa para descobrir se um número é par

let n = 3;

let nPar = (n % 2) === 0;

if (nPar) {
    console.clear();
    console.log('O número ' + n + ' é PAR.')
} else {
    console.clear();
    console.log ('O número ' + n + ' é IMPAR.')
}