const loginName = document.querySelector('#login-form input');
const loginDiv = document.querySelector('#Login');
const loginButton = document.querySelector('#login-form button');

if (window.localStorage.getItem('name') == null) {
  loginDiv.classList.remove('hidden');
  loginDiv.classList.add('visible');
} else {
  loginDiv.classList.remove('visible');
  loginDiv.classList.add('hidden');
}

function loginSubmit(e) {
  window.localStorage.setItem('name', loginName.value);
}

loginButton.addEventListener('click', loginSubmit);
