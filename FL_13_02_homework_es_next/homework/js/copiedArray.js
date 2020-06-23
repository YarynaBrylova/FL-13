const arr = [1, 2, 3, 4, 5];

const copiedArray = (arr) => arr.flat();

console.log(copiedArray(arr));
console.log(arr === copiedArray(arr));