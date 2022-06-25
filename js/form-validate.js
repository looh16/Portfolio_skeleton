let userName = document.querySelector("#name")
let userEmail = document.querySelector("#mail")
let userMessage = document.querySelector("#msg")

const formFields = {
  userName: userName.value,
  userEmail: userEmail.value,
  userMessage: userMessage.value,
};


userName.onkeyup = function() {getNameData()};
userEmail.onkeyup = function() {getMailData(), lowerCase()};
userMessage.onkeyup = function() {getMessageData()};


function getNameData() {
  formFields.userName = userName.value;
  localStorage.setItem("name", formFields.userName)
}

function getMailData() {
  formFields.userEmail = userEmail.value;
  localStorage.setItem("mail", formFields.userEmail)
}

function getMessageData() {
  formFields.userMessage = userMessage.value;
  localStorage.setItem("message", formFields.userMessage)
}

function lowerCase() {
  userEmail.value = userEmail.value.toLowerCase();
}

userName.value = localStorage.getItem("name");
userEmail.value = localStorage.getItem("mail");
userMessage.value = localStorage.getItem("message");


