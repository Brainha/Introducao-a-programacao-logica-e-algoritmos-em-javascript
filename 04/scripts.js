/*
  Solicitar o nome do aluno e as 3 notas do bimestre calcular a media daquele aluno.

  A media positiva devera ser maior que 6

  Se o aluno passou no bimestre, dar os parabens.

  Se o aluno nao passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperacao.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota

*/

let student = prompt("Qual seu nome? ")
let n1 = prompt("Qual a nota do primeiro bimestre?")
let n2 = prompt("Qual a nota do segundo bimestre?")
let n3 = prompt("Qual a nota do terceiro bimestre?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

if (result) {
  alert("Parabens! " + student + " sua media foi: " + average)

} else if (average < 3) {
  alert("reprovado")


} else {
  alert(student + " Voce ficou de recuperacao, sua media foi de :" + average)
}