/* 
  Capture 10 items para compor a lista de um supermercado.

  Apos capturar os 10 items, imprima-os, separando por virgula.
  */

// "for" usado como estrutura de repeticao 


let items = []

for (let item = 0; item < 10; item++) {
  let itemName = prompt("Qual os 10 items da lista?" + (item + 1))

  items[item] = itemName
}

alert(items)