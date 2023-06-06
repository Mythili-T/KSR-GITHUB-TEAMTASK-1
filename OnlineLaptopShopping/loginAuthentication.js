window.onload = function() {
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "block";
    }
    if (isLoggedIn === 'false') {
        document.getElementById("login").style.display = "block";
        document.getElementById("logout").style.display = "none";
    }
  };
  function logout() {
    localStorage.setItem('isLoggedIn', 'false');
    document.getElementById("login").style.display = "block";
    document.getElementById("logout").style.display = "none";
      window.location.href = 'index.html';
  }
 