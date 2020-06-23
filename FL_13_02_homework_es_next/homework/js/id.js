const user = {name: 'Tom'};

function addUniqueId(obj) {
    const id = Symbol('id');
    const newObj = Object.assign({}, obj);
    newObj.id = id;
    return newObj;
}

const updatedUser = addUniqueId(user);

console.log(updatedUser);
console.log(user === updatedUser);


