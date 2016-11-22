var cgmAuthModule = require('./cgm_auth'),
  cgmAuth = cgmAuthModule.cgmAuth;

// cgmAuth.isAuthenticated().then(
//   function (isAuthenticated) {
//     if (isAuthenticated) {
//       cgmAuth.getCurrentContext();
//     } else {
//       window.location.href = 'login.html';
//     }
//   },
//   function () {
//     window.location.href = 'login.html';
//   }
// );