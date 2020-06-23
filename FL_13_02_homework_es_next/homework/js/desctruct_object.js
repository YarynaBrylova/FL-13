const oldObj  = {
    name: 'Someone',
    details: {
        id: 1, 
        age: 11, 
        university: 'UNI'
    }
}

function regroupObject(obj) {
    let {name: firstName, details: {id, age, university}} = obj;
    return { university,
         user: {
            age, 
            firstName, 
            id
        }
    }
}

console.log(regroupObject(oldObj));