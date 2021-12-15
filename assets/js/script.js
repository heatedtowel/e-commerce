const cartEL = document.getElementById('cart');
const cartOpen = document.getElementById('openCart')


cartEL.addEventListener('click', () => {
  if (cartOpen.classList.contains('openEffect')) {
    cartOpen.classList.remove("openEffect");
    return cartOpen.classList.add("closeEffect");
  }
  cartOpen.classList.remove("closeEffect");
  cartOpen.classList.add("openEffect");
});