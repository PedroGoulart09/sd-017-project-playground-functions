// Desafio 10
function techList(arr, name) {
  arr = arr.sort();
  let res = [];
  if (arr.length >= 1) {
    for (let tech of arr) {
      res.push({ tech: `${tech}`, name: `${name}` });
    }
  } else {
    res = 'Vazio!';
  }

  return res;
}



// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length != 11) {
    return "Array com tamanho incorreto."
  }
  let number = '(xx) xxxxx-xxxx'
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (arr[i] < 0 || arr[i] > 9 || count >= 3) {
      return "não é possível gerar um número de telefone com esses valores"
    }

    number = number.replace('x', arr[i])
  }
  return number;

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (
    lineA < Math.abs(lineB + lineC)
    && lineB < Math.abs(lineA + lineC)
    && lineC < Math.abs(lineA + lineB)
  ) {
    return true;
  }
  return false;


}

// Desafio 13
function hydrate(string) {
  let regex = /\d+/g;
  let match = string.match(regex)
  let count = 0;
  for (let i = 0; i < match.length; i++) {
    count += Number(match[i])
  }
  if (count > 1) {
    return `${count} copos de água`
  }
  return `${count} copo de água`

}




module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
