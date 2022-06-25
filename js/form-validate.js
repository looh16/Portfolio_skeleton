const email = document.querySelector('input[name=user_email]');
const button = document.querySelector('#btn-get-touch');
const text = document.querySelector('#message');

const validateEmail = (email) => {
  /* eslint-disable no-useless-escape */
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

const validateLowerCaseEmail = (email) => {
  /* eslint-disable no-useless-escape */
  const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  return regex.test(email);
};

button.addEventListener('click', (event) => {
  event.preventDefault();

  if (validateLowerCaseEmail(email.value)) {
    text.innerText = '';
  } else {
    text.innerText = 'Please the email must be in lowercase';
  }

  if (!validateEmail(email.value)) {
    text.innerText = 'Please provide a valid email address';
  }
});
