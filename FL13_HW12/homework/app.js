const booksArray = JSON.parse(localStorage.getItem('book'));

function idLastSavedBook() {
  return booksArray[booksArray.length - 1].id;
}

function createButton(text) {
  const button = document.createElement('button');
  button.innerHTML = text;
  return button;
}

function createLabel(id, text) {
  const label = document.createElement('label');
  label.setAttribute('for', id);
  label.innerHTML = text;
  return label;
}

function createInput(id) {
  const input = document.createElement('input');
  input.setAttribute('id', id);
  return input;
}

function appendFormField(form, id, text) {
  form.append(createLabel(id, text));
  form.append(createInput(id));
  form.append(document.createElement('br'));
}

function createForm() {
  const form = document.createElement('form');
  form.setAttribute('id', 'form');

  appendFormField(form, 'book-name', `Book's name: `);
  appendFormField(form, 'book-author', `Book's author: `);
  appendFormField(form, 'img-url', `Book's url: `);
  appendFormField(form, 'book-plot', `Book's plot: `);

  const saveButton = createButton('Save');
  saveButton.setAttribute('id', 'save');
  form.append(saveButton);
  const cancelButton = createButton('Cancel');
  form.append(cancelButton);

  saveButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(validateForm()) {
      form.classList.add('hide');
      if (document.getElementById('form').hasAttribute('data-form-edit')) {
        console.log(true)
        update();
      } else {
        const book = createBookEntity();
        createLi(book);
        setBook(book);
        clearForm();
      }
    }
  });

  cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    const discardChanges = confirm('Discard changes?');
    if(discardChanges){
      window.history.back();
    } else {
      return false;
    }
  })

  return form;
}

function createBookEntity() {
  const book = {
    id: idLastSavedBook() + 1,
    name: document.getElementById('book-name').value,
    author: document.getElementById('book-author').value,
    url: document.getElementById('img-url').value,
    plot: document.getElementById('book-plot').value
  };
  return book;
}

function validateForm() {
  if (
    document.getElementById('book-name').value &&
    document.getElementById('book-author').value &&
    document.getElementById('img-url').value &&
    document.getElementById('book-plot').value
  ) {
    return true;
  } else {
    return false;
  }
}

function clearForm() {
    document.getElementById('book-name').value = '';
    document.getElementById('book-author').value = '';
    document.getElementById('img-url').value = '';
    document.getElementById('book-plot').value = '';
}

function createLi(book) {
  const li = document.createElement('li');
  li.innerHTML = book.name;
  const description=createDescription(book);
  li.append(description);
  bookList.append(li);

  li.addEventListener('click', function(e) {
    if (this === e.target) {
      description.classList.toggle('hide');
    }
  });
}

function createDescription(book) {
  const description = document.createElement('div');
  description.setAttribute('id', 'description');
  description.classList.add('hide');
  description.innerHTML = `Author: ${book.author}` + '<br>' + `Image: ${book.url}` + 
                          '<br>' + `Plot: ${book.plot}` + '<br>';

  const editButton = createButton('Edit');
  description.append(editButton);

  editButton.addEventListener('click', (e) => {
    e.preventDefault();
    const formElement = document.getElementById('form');
    formElement.classList.remove('hide');
    formElement.classList.add('show');
    console.log(book.id);
     setInputsField(book);
    formElement.setAttribute('data-form-edit', 'true');
    console.log(formElement);

  });

  return description;
}

function setInputsField(book) {
  document.getElementById('book-name').value = book.name;
  document.getElementById('book-author').value = book.author;
  document.getElementById('img-url').value = book.url;
  document.getElementById('book-plot').value = book.plot;
}

function update(book) {
book.name.innerHTML = document.getElementById('book-name').value;
book.author.innerHTML = document.getElementById('book-author').value;
book.url.innerHTML = document.getElementById('img-url').value;
book.plot.innerHTML = document.getElementById('book-plot').value;
}

function setBook(book) {
  booksArray.push(book);
  localStorage.setItem('book', JSON.stringify(booksArray));
}

function initBooksList() {
  booksArray.forEach(book => {
    createLi(book);
  });
}

const root = document.getElementById('root');
const bookListBlock = document.createElement('div');
bookListBlock.setAttribute('id', 'book-list-block');
root.append(bookListBlock);

const modifyBlock = document.createElement('div');
modifyBlock.setAttribute('id', 'modify-block');
root.append(modifyBlock);

const bookList = document.createElement('ol');
bookListBlock.append(bookList);

const addButton = createButton('Add book');
modifyBlock.append(addButton);

addButton.addEventListener('click', () => {
  form.classList.remove('hide');
  form.classList.add('show');
});

const form = createForm();
modifyBlock.append(form);

initBooksList();

