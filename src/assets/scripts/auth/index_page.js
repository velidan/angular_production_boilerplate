cgmAuth.isAuthenticated().then(
  function (isAuthenticated) {
    if (isAuthenticated) {
      cgmAuth.getCurrentContext();
    } else {
      window.location.href = 'login.html';
    }
  },
  function () {
    window.location.href = 'login.html';
  }
);