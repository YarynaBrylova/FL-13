let login = prompt('Please enter your login', '');

const minLength = 4;
const eveningHours = 20;
const morningHours = 8;
const currentHours = new Date().getHours();

if (login === '' || login === null) {
  alert('Canceled.');
} else if (login.length < minLength) {
  alert("I don't know any users having name length less than 4 symbols");
} else if (login === 'User' || login === 'Admin') {
  let password = prompt('Enter your password');
  if (password === '' || password === null) {
    alert('Canceled.');
  } else if (login === 'User' && password === 'UserPass') {
    if (currentHours >= morningHours && currentHours < eveningHours) {
      alert('Good day, dear User!');
    } else {
      alert('Good evening, dear User!');
    }
  } else if (login === 'Admin' && password === 'RootPass') {
    if (currentHours >= eveningHours && currentHours < morningHours) {
      alert('Good day, dear Admin!');
    } else {
      alert('Good evening, dear Admin!');
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert("I don't know you");
}
