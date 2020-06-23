async function showUserNames(data) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersData = await response.json();
    const sortedUserNames = await usersData.map(arrElement => arrElement.name).sort()
        
    console.log(sortedUserNames);
}

showUserNames();
