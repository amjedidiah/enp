/* eslint-disable no-undef */
// !main.js

window.addEventListener('load', () => {
  loadComponent(['header', 'footer']);
});

window.addEventListener('offline', () =>
  showToast(store.lib.toasts.connection),
);

window.addEventListener('online', () =>
  hideToast(store.lib.toasts.connection),
);

// Disable console logging
console.log = () => null;
console.info = () => null;
