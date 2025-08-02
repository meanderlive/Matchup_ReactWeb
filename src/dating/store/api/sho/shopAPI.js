// cartAPI.js

const CART_KEY = 'cart';

export const getCartFromLocalStorage = () => {
  const cartData = localStorage.getItem(CART_KEY);
  return cartData ? JSON.parse(cartData) : [];
};

export const updateCartInLocalStorage = (cartItems) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
};
