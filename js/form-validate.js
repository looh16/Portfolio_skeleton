const email = document.querySelector('input[name=user_email]');

function lowerCase() {
  email.value = email.value.toLowerCase();
}
email.addEventListener('keyup', lowerCase);
document.addEventListener('click', formSubmit);
