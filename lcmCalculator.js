function calculate() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;

  let primeNumbers = [2, 3, 5, 7]; //Array with firts prime numbers

  let factorsN1 = []; //Array with number1 prime factors
  let factorsN2 = []; //Array with number2 prime factors

  //Variables to Count how many times factors are in factorsN1 array
  let count2_N1 = 0;
  let count3_N1 = 0;
  let count5_N1 = 0;
  let count7_N1 = 0;
  //Variables to Count how many times factors are in factorsN2 array
  let count2_N2 = 0;
  let count3_N2 = 0;
  let count5_N2 = 0;
  let count7_N2 = 0;
  //Variables with the result of elevate factors for number 1
  let result2_N1, result3_N1, result5_N1, result7_N1;
  //Variables with the result of elevate factors for number 2
  let result2_N2, result3_N2, result5_N2, result7_N2;

  //Touring the array to find number1 factors
  while (number1 != 1) {
    for (let factorN1 of primeNumbers) {
      if (number1 % factorN1 == 0) {
        factorsN1.push(factorN1);
        number1 = number1 / factorN1;
        break;
      }
    }
  }
  console.log(factorsN1);
  //Touring the array to find number2 factors
  while (number2 != 1) {
    for (let factorN2 of primeNumbers) {
      if (number2 % factorN2 == 0) {
        factorsN2.push(factorN2);
        number2 = number2 / factorN2;
        break;
      }
    }
  }
  console.log(factorsN2);
  //Finding which factors repeats in number 1
  for (let n1 of factorsN1) {
    if (n1 == 2) {
      count2_N1 += 1;
    }
    if (n1 == 3) {
      count3_N1 += 1;
    }
    if (n1 == 5) {
      count5_N1 += 1;
    }
    if (n1 == 7) {
      count7_N1 += 1;
    }
  }

  if (count2_N1 >= 2) {
    result2_N1 = Math.pow(2, count2_N1);
  } else {
    result2_N1 = 1;
  }
  if (count3_N1 >= 2) {
    result3_N1 = Math.pow(3, count3_N1);
  } else {
    result3_N1 = 1;
  }
  if (count5_N1 >= 2) {
    result5_N1 = Math.pow(5, count5_N1);
  } else {
    result5_N1 = 1;
  }
  if (count7_N1 >= 2) {
    result7_N1 = Math.pow(7, count7_N1);
  } else {
    result7_N1 = 1;
  }
  let resultN1 = result2_N1 * result3_N1 * result5_N1 * result7_N1;

  //Finding which factors repeats in number 2
  for (let n2 of factorsN2) {
    if (n2 == 2) {
      count2_N2 += 1;
    }
    if (n2 == 3) {
      count3_N2 += 1;
    }
    if (n2 == 5) {
      count5_N2 += 1;
    }
    if (n2 == 7) {
      count7_N2 += 1;
    }
  }

  if (count2_N2 >= 2) {
    result2_N2 = Math.pow(2, count2_N2);
  } else {
    result2_N2 = 1;
  }
  if (count3_N2 >= 2) {
    result3_N2 = Math.pow(3, count3_N2);
  } else {
    result3_N2 = 1;
  }
  if (count5_N2 >= 2) {
    result5_N2 = Math.pow(5, count5_N2);
  } else {
    result5_N2 = 1;
  }
  if (count7_N2 >= 2) {
    result7_N2 = Math.pow(7, count7_N2);
  } else {
    result7_N2 = 1;
  }
  let resultN2 = result2_N2 * result3_N2 * result5_N2 * result7_N2;

  let result = resultN1 * resultN2;

  console.log(result2_N1, result3_N1, result5_N1, result7_N1);
  console.log(result2_N2, result3_N2, result5_N2, result7_N2);

  document.getElementById("result").innerHTML = "<strong>RESULT:</strong><br />" + "Number 1 factors: " +
    factorsN1 + "<br />" + "Number 2 factors: " + factorsN2 + "<br />" + "LCM: " + result;
}
