const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');

const httpRequestDone = 4;
const postStatus = 201;
const getStatus = 200;
const deleteAnaUpdateStatus = 204

const fullName = document.createElement('input');
fullName.setAttribute('placeholder', 'Name');
fullName.setAttribute('id', 'name');
appContainer.append(fullName);

const userName = document.createElement('input');
userName.setAttribute('placeholder', 'Full Name');
userName.setAttribute('id', 'user-full-name');
appContainer.append(userName);

const submitBtn = document.createElement('button');
submitBtn.setAttribute('id', 'submit');
submitBtn.innerHTML = 'Add New User';
appContainer.append(submitBtn);

const saveChangesBtn = document.createElement('button');
saveChangesBtn.setAttribute('id', 'save');
saveChangesBtn.classList.add('hide');
saveChangesBtn.innerHTML = 'Save';
appContainer.append(saveChangesBtn);

const table = document.createElement('table');
table.classList.add('hide');
appContainer.append(table);

function getUsersList() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === httpRequestDone && xhr.status === getStatus) {
      const usersData = JSON.parse(xhr.responseText);

      for (let i = 0; i < usersData.length; i++) {
        createRow(usersData, i);
      }
    }
  };

  xhr.open('GET', baseUrl + '/users', true);
  xhr.send();
}

function createRow(usersData, index) {
  const userRow = document.createElement('tr');
  table.classList.remove('hide');
  table.classList.add('show-table');
  table.append(userRow);

  createCell(userRow).innerHTML = JSON.stringify(usersData[index].id);
  createCell(userRow).innerHTML = JSON.stringify(usersData[index].name);
  createCell(userRow).innerHTML = JSON.stringify(usersData[index].username);

  deleteButton(userRow, usersData[index].id);
  createUpdateButton(userRow, usersData[index].id, usersData[index]);
}

function createCell(container) {
  const cell = document.createElement('td');
  container.append(cell);
  return cell;
}

function deleteButton(userRow, id) {
  const deleteBtn = document.createElement('button');
  userRow.append(deleteBtn);
  deleteBtn.innerHTML = 'DELETE';

  deleteBtn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === httpRequestDone && xhr.status === deleteAnaUpdateStatus) {
        userRow.remove();
        console.log('User was deleted');
      }
    };

    xhr.open('DELETE', baseUrl + '/users/' + id, false);
    xhr.setRequestHeader('Authorization', 'admin');
    xhr.send();
  });
}

function createUpdateButton(userRow, id, obj) {
  const updateBtn = document.createElement('button');
  userRow.append(updateBtn);
  updateBtn.innerHTML = 'UPDATE';

  updateBtn.addEventListener('click', () => {
    submitButton.classList.remove('show');
    submitButton.classList.add('hide');
    saveChangesBtn.classList.add('show');
    fullName.value = obj.name;
    userName.value = obj.username;

    saveChangesBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const putRequest = new XMLHttpRequest();
      putRequest.onreadystatechange = function () {
        if (putRequest.readyState === httpRequestDone && putRequest.status === deleteAnaUpdateStatus) {
          console.log('User is updated');
          table.innerHTML = null;
          getUsersList();
        }
      };

      const updatedUserData = JSON.stringify({
        name: `${document.getElementById('name').value}`,
        username: `${document.getElementById('user-full-name').value}`
      });

      putRequest.open('PUT', baseUrl + '/users/' + id, false);
      putRequest.setRequestHeader('content-type', 'application/json');
      putRequest.send(updatedUserData);

      saveChangesBtn.classList.remove('show');
      saveChangesBtn.classList.add('hide');
      submitButton.classList.remove('hide');
      submitButton.classList.add('show');
    });
  });
}

getUsersList();

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
  const request = new XMLHttpRequest();

  request.onreadystatechange = () => {
    if (request.readyState === httpRequestDone && request.status === postStatus) {
      console.log('User successfully added');
      const getRequest = new XMLHttpRequest();

      getRequest.onreadystatechange = function () {
        if (getRequest.readyState === httpRequestDone && getRequest.status === postStatus) {
          const usersData = JSON.parse(getRequest.responseText);
          const lastUserIndex = usersData.length - 1;

          createRow(usersData, lastUserIndex);
        }
      };
      getRequest.open('GET', baseUrl + '/users', true);
      getRequest.send();
    }
  };

  const requestData = JSON.stringify({
    name: `${document.getElementById('name').value}`,
    username: `${document.getElementById('user-full-name').value}`
  });

  request.open('POST', 'http://localhost:3000/users', false);
  request.setRequestHeader('content-type', 'application/json');
  request.send(requestData);
});
