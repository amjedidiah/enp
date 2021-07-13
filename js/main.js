// !main.js

window.addEventListener('load', () => {});

window.addEventListener('offline', () =>
  showToast(store.lib.toasts.connection),
);

window.addEventListener('online', () =>
  hideToast(store.lib.toasts.connection),
);

// Disable console logging
console.log = function() {};
console.info = function() {};
