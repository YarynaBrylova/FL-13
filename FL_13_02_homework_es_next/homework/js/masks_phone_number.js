const phoneNumber = '0123456789';

function hideNumber(phoneNumber) {
    const last4Digits = phoneNumber.slice(-4);
    const maskedNumber = last4Digits.padStart(phoneNumber.length, '*');
    return maskedNumber;
}

console.log(hideNumber(phoneNumber));