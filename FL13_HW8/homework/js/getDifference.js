const isBigger = (num1, num2) => num1 > num2;

function getDifference(num1, num2) {
  if (isBigger(num1, num2)) {
    return num1 - num2;
  }
  return num2 - num1;
}

getDifference(5, 3);
getDifference(5, 8);
