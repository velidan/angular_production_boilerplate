$(function () {
  $('#formLogin').on('submit', function (e) {
    e.preventDefault();
    var loginString = "=user=" + $('#user').val() + ",password=" + $('#pass').val();

    cgmAuth.login(loginString).then(
      function () {
        window.location.href = '/';
      },
      function () {
        $('#formLogin').find('.form-group.error-msg').removeClass('invisible');
      }
    );
  });
});
