var cartEL = document.getElementById('cart');
let cartOpen = document.getElementById('openCart')

let isOpen = false;

cartEL.addEventListener('click', () => {
  switch (isOpen) {
    case false:
      cartOpen.classList.add('openEffect');
      isOpen = true;
      break;
    case true:
      cartOpen.classList.remove('openEffect');
      isOpen = false;
      break;
  }
});