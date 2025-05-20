

var botaoEntrar = document.getElementById("button-submit")


function login() {
    console.log("entrou na função")
    var campousuario = document.getElementById("usuario").value

    var campoSenha = document.getElementById("senha").value

    var campocodigoInstalacao = document.getElementById("codigo").value

console.log(campousuario)
console.log(campoSenha)
console.log(campocodigoInstalacao)

    if(campousuario == "admin" && 
       campoSenha == "admin1234" &&
       campocodigoInstalacao== "tplink2025" 
       
    ) {
    
        window.location.replace("dashboard.html")

}else {

    alert("usuario, senha ou codigo de verificacao incorretos");
}
    console.log("Entrou na função login")
}

botaoEntrar.addEventListener("click" , login )

