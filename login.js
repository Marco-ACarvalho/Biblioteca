function verificaDados(){
    var login = document.getElementById("InputUserName").value;
    var senha = document.getElementById("InputPassword").value;
    
    console.log("Login: " + login + "\nSenha: " + senha);
}

module.exports = function() {
    verificaDados();
}