function showUserNames(data) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const sortedUserName = data.map(userData => userData.name).sort()
        console.log(sortedUserName);
    })
}

showUserNames();
