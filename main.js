const menuExpend = document.querySelector('#open-nav-menu');
menuExpend.addEventListener('click', expendMenu);
function expendMenu() {
  document.querySelector('header nav .wrapper').classList.add('nav-open');
}

const close = document.querySelector('#close-nav-menu');
close.addEventListener('click', closeButton);
function closeButton() {
  document.querySelector('header nav .wrapper').classList.remove('nav-open');
}

// Greating Section

function celsiusToFahr(temeperature) {
  console.log(temeperature);
}

celsiusToFahr(25);
