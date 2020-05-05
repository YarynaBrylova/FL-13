function convert(...args) {
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'number') {
      args[i] = `${args[i]}`;
    } else if (typeof args[i] === 'string') {
      args[i] = parseInt(args[i]);
    }
  }
  return args;
}


function executeforEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}


function mapArray(arr, callback) {
  const result = [];

  executeforEach(arr, function (el) {
    if (typeof el === 'string') {
      el = Number(el);
    }
    result.push(callback(el));
  });

  return result;
}


function filterArray(arr, callback) {
  const result = [];

  executeforEach(arr, function (el) {
    if (callback(el)) {
      result.push(el);
    }
  });

  return result;
}


function containsValue(arr, value) {
  let result = false;

  executeforEach(arr, function (el) {
    if (el === value) {
      result = true;
    }
  });

  return result;
}


function flipOver(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}


function makeListFromRange(arr) {
  if (arr[0] === arr[1]) {
    return [arr[0]];
  } else if (arr[0] < arr[1]) {
    const lastArrayElement = arr[arr.length - 1];
    for (let i = 0; arr[i] < lastArrayElement; i++) {
      arr[i + 1] = arr[i] + 1;
    }
    return arr;
  } else {
    const lastArrayElement = arr[arr.length - 1];
    for (let i = 0; arr[i] > lastArrayElement; i++) {
      arr[i + 1] = arr[i] - 1;
    }
    return arr;
  }
}


const fruits = [
  { name: 'apple', weight: 0.5 },
  { name: 'pineapple', weight: 2 }
];

function getArrayOfKeys(arr, property) {
  const propertyArray = [];

  executeforEach(arr, function (el) {
    for (let key in el) {
      if (key === property) {
        propertyArray.push(el[key]);
      }
    }
  });

  return propertyArray;
}


function substitute(arr) {
  const minNumber = 10;
  const maxNumber = 20;

  return mapArray(arr, function (el) {
    if (el > minNumber && el < maxNumber) {
      return '*';
    }
    return el;
  });
}


const date = new Date();
function getPastDay(date, days) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  date.setDate(date.getDate() - days);
  return `${date.getDate()} ${
    monthNames[date.getMonth()]
  } ${date.getFullYear()}`;
}


function formatDate(date) {
  const twoDigitsNumber = 10;
  const year = date.getFullYear();
  const month =
    date.getMonth() < twoDigitsNumber
      ? `0${date.getMonth() + 1}`
      : date.getMonth();
  const day =
    date.getDate() < twoDigitsNumber ? `0${date.getDate()}` : date.getDate();
  const hour =
    date.getHours() < twoDigitsNumber ? `0${date.getHours()}` : date.getHours();
  const minute =
    date.getMinutes() < twoDigitsNumber
      ? `0${date.getMinutes()}`
      : date.getMinutes();

  return `${year}/${month}/${day} ${hour}:${minute}`;
}
