function positiveSum(arr) {
  return arr.filter((num) => num > 0).reduce((num1, num2) => num1 + num2, 0);
}

positiveSum([2, 4, 6, 8]);
positiveSum([0, -3, 5, 7]);
