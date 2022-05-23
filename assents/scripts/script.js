/*  var = serve para declarar variaveis de escopo global
        todos conseguem acessar
    
    let = serve para declarar declara variaveis de escopo local 
    
    const = serve para declarar declara escopo global, mas não muda seu valor
    
    
    função somaDois(){
        let idade = 25
    }
    JAVASCRIPT  - interação do usuario com o código 
    
    var nome = "Turma 49";
    
    function hello(){
        alert( nome + " está aprendendo JS")    
    }
    */

    let nome = document.getElementById("Nomecompleto:")
    let email = document.getElementById("E-mail:")
    let assunto = document.getElementById("Assunto:")

    function verifica(){
        if (nome.value == "" || email.value == "" || assunto.value ){
            alert("Todos os campos são obrigatórios")
            return false
        }

        return true
    }

    function enviar(){
        if(verifica()){
            alert("Olá " + nome.value + "! E-mail enviado com sucesso")
        }
    }

    function emailValidation(){
        let txtEmail = document.querySelector("#txtEmail")
        if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
            txtEmail.innerHTML = "Email is invalid"
            txtEmail.style.color = "red"
        }else{
            txtEmail.innerHTML = "Email is valid"
            txtEmail.style.color = "green"
            emailOk = true
        }
    }


