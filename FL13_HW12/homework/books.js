let book = [{
    id: 0,
    name: 'Angels and Demons',
    author: 'Dan Brown',
    url:  'https://rb.gy/bydzx7',
    plot: 'detective'
},
{
    id: 1,
    name: 'Inferno',
    author: 'Dan Brown',
    url: 'https://rb.gy/ktkt8e',
    plot: 'adventure'
}, 
{
    id: 2,
    name: 'it',
    author: 'Stephen King',
    url: 'https://rb.gy/nki5ps',
    plot: 'horror'
}
]

if (localStorage.getItem('book') === null) {
    localStorage.setItem(`book`, JSON.stringify(book));
}
