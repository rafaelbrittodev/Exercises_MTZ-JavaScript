/* Invoke-Expression "node 004.js"
Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua
média e a sua classificação confome a tabela abaixo.

Média = (nota1 + nota2 + nota3) / 3;

Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

let alunoNotas = [5, 5, 5, 'Joãozinho', 50485,]

media = (alunoNotas[0] + alunoNotas[1] + alunoNotas[2]) / 3
fechamento = '';

if (media < 5) {
    fechamento = 'Reprovado';
} else if (media >= 5 && media <= 7) {
    fechamento = 'Em recuperação';
} else if (media >= 8) {
    fechamento = 'Aprovado';
}

console.clear();
console.log('Nome: ' + alunoNotas[3])
console.log('Turma: ' + alunoNotas[4])
console.log('Média: ' + media)
console.log('Situação: ' + fechamento) 

