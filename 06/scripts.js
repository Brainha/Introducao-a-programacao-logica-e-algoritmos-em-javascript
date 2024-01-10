/*
  ** Jogo da advinhacao

    Apresente a mensagem ao usuario:
    "Advinhe o numero que estou pensando? esta entre 0 e 10"

    Crie uma logica para gerar um numero aleatorio e verificar se o numero digitado e o mesmo que o aleatorio gerado pelo sistema

    Enquanto o usuario nao adivinhar o numero, mostra a mensagem:"ERRo, tente novamente:"

    Caso o usuario acerte o numero, apresentar a mensagem: "Parabens! Voce adivinhou o numero em x tentativas"

    Substitua o "x" da m1ensagem, pelo numero de tentativas
  */

let result = prompt("Adivinhe o numero que estou pensando? esta entre 0 a 10")
const randomNumber = Math.round(Math.random() * 10)

xAttempts = 0

while (Number(result) != randomNumber) {
  result = prompt("erro, tente novamente")
  xAttempts++
}

alert(`Parabens! voce adivinhou o numero em ${xAttempts} tentativas`)