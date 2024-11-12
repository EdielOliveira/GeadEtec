
function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "ediel.silva5@etec.com" && senha == "edieletec") {
        sessionStorage.setItem('autenticado', 'true');
        location.href = "index.html";
    } else {
        alert('Usuario ou senha incorretos')

    }
}

