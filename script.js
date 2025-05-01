function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'GameCuans' && password === 'Juli172022') {
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('error').innerText = 'Username atau password salah.';
  }
}