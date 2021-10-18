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

// Desafio 5
function footballPoints(wins,ties) {
   return ((wins * 3) + ties ++)
}

// Desafio 6
function highestCount(arr) {
  let highestNumber = Math.max(...arr)
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === highestNumber) {
      count += 1
    }
  }
  return count
}


// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
   let distanciaCat1 = Math.abs(cat1 - mouse)
   let distanciaCat2 = Math.abs(cat2 - mouse)
   
   console.log(distanciaCat1, distanciaCat2)
  if(distanciaCat1 > distanciaCat2) {
    return 'cat2'
  }
  if(distanciaCat2 > distanciaCat1) {
    return 'cat1'
  }
  if(distanciaCat1 == distanciaCat2) {
    return 'os gatos trombam e o rato foge'
  }
  

}
console.log(catAndMouse(1,0,2))


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
