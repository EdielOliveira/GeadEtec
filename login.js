
function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "Usuario" && senha == "12345") {
        sessionStorage.setItem('autenticado', 'true');
        location.href = "login.html";
    } else {
        alert('Usuario ou senha incorretos')

    }
}

