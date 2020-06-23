const required = () => {
    throw new Error('Missing property');
  }

const add = (a = required(), b = required()) => a + b;

console.log(add(5));