var apiDomain = formatApiDomain();

/**
 * If domain match *cgmus.local function returns api. + domain
 * Else it returns only clean domain
 * @returns {*}
 */
function formatApiDomain() {
  var domain = document.location.hostname;
  var domainAndPort = document.location.host;
  return (domain.indexOf('cgmus.local') !== -1) ? ('http://api.' + domain) : ('http://' + domainAndPort);
}


var cgmAuth = {
  /**
   * To login you need to send loginSting: '=user=useName,password=password'
   * Server sets session into cookies, after that we can send request to backend
   * @param loginString
   */
  login: function (loginString) {
    return $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: apiDomain + '/Nucleus/services/cgm/helix/mib/server/Session/login',
      data: JSON.stringify({loginString: loginString}),
      dataType: 'json',
      xhrFields: { withCredentials: true }
    });
  },

  /**
   * To logout - removes session cookies
   */
  logout: function () {
    return $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: apiDomain + '/Nucleus/services/cgm/helix/mib/server/Session/logout',
      xhrFields: { withCredentials: true }
    });
  },

  /**
   * Check if user is isAuthenticated
   */
  isAuthenticated: function () {
    return $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: apiDomain + '/Nucleus/services/cgm/helix/mib/server/Session/isAuthenticated',
      xhrFields: { withCredentials: true }
    });
  },

  /**
   * Get user preferences
   */
  getCurrentContext: function () {
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: apiDomain + '/Nucleus/services/cgm/g3/bas/security/SecurityComponent/getCurrentContext',
      xhrFields: { withCredentials: true },
      success: function (data) {
        console.log(data);
      }
    });
  }
};
