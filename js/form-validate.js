const userName = document.querySelector('#name');
const userEmail = document.querySelector('#mail');
const userMessage = document.querySelector('#msg');

const formFields = {
  userName: userName.value,
  userEmail: userEmail.value,
  userMessage: userMessage.value,
};

function getNameData() {
  formFields.userName = userName.value;
  localStorage.setItem('name', formFields.userName);
}

function getMailData() {
  formFields.userEmail = userEmail.value;
  localStorage.setItem('mail', formFields.userEmail);
}

function getMessageData() {
  formFields.userMessage = userMessage.value;
  localStorage.setItem('message', formFields.userMessage);
}

function lowerCase() {
  userEmail.value = userEmail.value.toLowerCase();
}

userName.onkeyup = function () { getNameData(); };
userEmail.onkeyup = function () { getMailData(); lowerCase(); };
userMessage.onkeyup = function () { getMessageData(); };

userName.value = localStorage.getItem('name');
userEmail.value = localStorage.getItem('mail');
userMessage.value = localStorage.getItem('message');
