// Desafio 1
function compareTrue(num1, num2) {
  return num1 && num2
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2
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
function footballPoints(wins, ties) {
  return ((wins * 3) + ties++)
}

// Desafio 6
function highestCount(arr) {
  let highestNumber = Math.max(...arr)
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === highestNumber) {
      count += 1
    }
  }
  return count
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse)
  let distanciaCat2 = Math.abs(cat2 - mouse)

  console.log(distanciaCat1, distanciaCat2)
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2'
  }
  if (distanciaCat2 > distanciaCat1) {
    return 'cat1'
  }
  if (distanciaCat1 == distanciaCat2) {
    return 'os gatos trombam e o rato foge'
  }


}
console.log(catAndMouse(1, 0, 2))


// Desafio 8
function auxDivide(number) {

  let mold5 = number % 5;
  let mold3 = number % 3;
  if (mold3 == 0 && mold5 == 0) {
    return 'fizzBuzz'
  } else if (mold3 == 0) {
    return 'fizz'
  } else if (mold5 == 0) {
    return 'buzz'
  }

  return 'bug!';

}

function fizzBuzz(arrayNumbers) {
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    arrayNumbers[i] = auxDivide(arrayNumbers[i]);
  }
  return arrayNumbers;

}

console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(string) {
  string = string
    .replace(/a/g,'1')
    .replace(/e/g,'2')
    .replace(/i/g,'3')
    .replace(/o/g,'4')
    .replace(/u/g,'5')
 
  return string
}
function decode(string) {
  string = string
  .replace(/1/g,'a')
  .replace(/2/g,'e')
  .replace(/3/g,'i')
  .replace(/4/g,'o')
  .replace(/5/g,'u')

return string
  
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
