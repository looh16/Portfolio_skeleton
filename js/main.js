const btn = document.querySelector('#menu-btn');
const hamburger = document.querySelector('#hamburger');

function showItens() {
  const list = document.getElementById('languages');

  if (list.style.display === 'none') {
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
}

function toggleHamburgerMenu(menu) {
  menu.classList.toggle('show-menu');
}

btn.addEventListener('click', showItens);
hamburger.addEventListener('click', toggleHamburgerMenu);
