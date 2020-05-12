const data = [
  {
    folder: true,
    title: 'Pictures',
    children: [
      {
        title: 'logo.png'
      },
      {
        folder: true,
        title: 'Vacations',
        children: [
          {
            title: 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Desktop',
    children: [
      {
        folder: true,
        title: 'screenshots',
        children: null
      }
    ]
  },
  {
    folder: true,
    title: 'Downloads',
    children: [
      {
        folder: true,
        title: 'JS',
        children: null
      },
      {
        title: 'nvm-setup.exe'
      },
      {
        title: 'node.exe'
      }
    ]
  },
  {
    title: 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

//-----create tree starts -----
function createTreeDom(arr) {
  if (!arr.length) {
    return;
  }

  let ul = document.createElement('ul');

  arr.forEach((el) => {
    let li = document.createElement('li');
    li.innerHTML = `${el['title']}`;

    if (el['children']){
      let childrenUl = createTreeDom(el['children']);
      li.append(childrenUl);
    }
    ul.append(li);
  })

return ul;
}

function createTree(container, arr) {
  container.append(createTreeDom(arr));
}

createTree(rootNode, data);

//create element- context menu
let menuBlock = document.createElement('ul');
let remove = null;
let edit = null;

function createContextMenu() {
  menuBlock.classList.add('context-menu');
  edit = document.createElement('li');
  edit.innerHTML = 'Rename';
  menuBlock.append(edit);
  remove = document.createElement('li');
  remove.innerHTML = 'Delete item';
  menuBlock.append(remove);

 return menuBlock;
}

rootNode.append(createContextMenu());

//open context menu
rootNode.addEventListener('contextmenu', event => {
  event.preventDefault();
  menuBlock.style.top = `${event.clientY}px`;
  menuBlock.style.left = `${event.clientX}px`;
  menuBlock.classList.add('active');

  let currentitem = event.target;
  remove.addEventListener('click', () => {
    currentitem.classList.add('hidden');
  })
})

//close context menu
document.addEventListener('click', () => {
  menuBlock.classList.remove('active');
})

//don't close menu when you press to menu options
menuBlock.addEventListener('click', event => {
  event.stopPropagation();
})

//hide and show elements
for (let li of rootNode.querySelectorAll('li')) {
  let span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling); 
}

rootNode.onclick = function(event) {

  if (event.target.tagName !== 'SPAN') {
    return;
  }

  let childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
}


 


