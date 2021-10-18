// Desafio 1
function compareTrue(num1, num2) {
  return num1 && num2
}

// Desafio 2
function calcArea(base,heigth) {
    return (base*heigth)/2
}

// Desafio 3
function splitSentence(string) {
   return string.split(' ')

  }

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}` 
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins,ties) {
   return ((wins * 3) + ties ++)
}

// Desafio 6
function highestCount(arr) {
  let numeroRepetido = arr[0]
  let contador = 0
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j] && arr[i] > numeroRepetido){
        numeroRepetido = arr[i]

      }
    }
  }
  for(let k = 0; k < arr.length; k++){
    if(arr[k] === numeroRepetido){
          contador ++
    }
  }
  return contador
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
