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

function validNumber(arr) {
  for (let n of arr) {
    if (n < 0 || n > 9) {
      return false;
    }
  }
  return true;
}

function repetedNumber(arr) {
  let count = 0;
  for (let n of arr) {
    for (let n2 of arr) {
      if (n2 === n) {
        count += 1;
      }
    }
    if (count > 2) {
      return false;
    }
    count = 0;
  }
  return true;
}








// Desafio 11
function generatePhoneNumber(arr) {
  // seu código aqui
  
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
  // seu código aqui
  
}




module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
