const maximumTipPercentage = 100;
const numberForFixing = 2;


let checkNumber = parseFloat(prompt('Enter check number:', '')).toFixed(numberForFixing);
let tipPercentage = parseFloat(prompt('Enter tip percentage:', '')).toFixed(numberForFixing);

const tipAmount = Math.round(+checkNumber * +tipPercentage / maximumTipPercentage).toFixed(numberForFixing);
const total = (+checkNumber + +tipAmount).toFixed(numberForFixing);


if (
  isNaN(tipAmount) ||
  isNaN(total) ||
  total < 0 ||
  tipAmount < 0 ||
  tipPercentage > maximumTipPercentage ||
  checkNumber === null ||
  tipPercentage === null
) {
  alert('Invalid input data');
} else {
  alert(`
    Check number: ${checkNumber}
    Tip: ${tipPercentage}%
    Tip amount: ${tipAmount}
    Total sum to pay:  ${total}
    `);
}
