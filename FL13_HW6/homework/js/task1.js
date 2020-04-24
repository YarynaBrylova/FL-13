let checkNumber = parseFloat(prompt('Enter check number:', '')).toFixed(2);
let tipPercentage = parseFloat(prompt('Enter tip percentage:', '')).toFixed(2);

let tipAmount = Math.round(+checkNumber * +tipPercentage / 100).toFixed(2);
let total = Math.round(+checkNumber + +tipAmount).toFixed(2);

if (isNaN(tipAmount) ||
    isNaN(total) || 
    total < 0 || 
    tipAmount < 0 || 
    tipPercentage > 100 || 
    checkNumber == null || 
    tipPercentage == null
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




