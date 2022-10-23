function formulario(){
    prof = document.getElementById("txtprof").value;
    navpag = document.getElementById("navpag").value;
    estpag = document.getElementById("estpag").value;
    comppag = document.getElementById("comppag").value;
    contpag = document.getElementById("contpag").value;
    txtnota = document.getElementById("txtnota").value;
    txtnota1 = parseFloat(document.getElementById("txtnota").value);
    txtcomit = document.getElementById("txtcomit").value;
    txtemail = document.getElementById("txtemail").value;

    if(prof==""){
        window.alert("Digite o nome do professor!");
        document.getElementById("txtprof").style.border=" 1px solid #ed145b";
        document.getElementById("txtprof").focus();
        return false;
    }
    else if(txtemail==""){
        window.alert("Digite o email!");
        document.getElementById("txtemail").style.border=" 1px solid #ed145b";
        document.getElementById("txtemail").focus();
        return false;
    }
    else if(email.indexOf("@")==-1){
        window.alert("email Incorreto!");
        document.getElementById("txtemail").style.borderColor="#ed145b";
        document.getElementById("txtemail").focus();
        return false;
    }
    else if(navpag==""){
        window.alert("Escolher uma opção sobre a navegação entre as páginas!");
        document.getElementById("navpag").style.border=" 1px solid #ed145b";
        document.getElementById("navpag").focus();
        return false;
    }
    else if(estpag==""){
        window.alert("Escolher uma opção sobre a estética básica das páginas!");
        document.getElementById("estpag").style.border=" 1px solid #ed145b";
        document.getElementById("estpag").focus();
        return false;
    }
    else if(comppag==""){
        window.alert("Escolher uma opção sobre  a comprensão dos textos do trabalho!");
        document.getElementById("comppag").style.border=" 1px solid #ed145b";
        document.getElementById("comppag").focus();
        return false;
    }
    else if(contpag==""){
        window.alert("Escolher uma opção sobre o conteúdo do trabalho de forma qualitativa!");
        document.getElementById("contpag").style.border=" 1px solid #ed145b";
        document.getElementById("contpag").focus();
        return false;
    }
    else if(txtnota==""){
        window.alert("Digite a nota do trabalho!");
        document.getElementById("txtnota").style.border=" 1px solid #ed145b";
        document.getElementById("txtnota").focus();
        return false;
    }
    else if(txtnota1 <=1 || txtnota1 >=8){
        window.alert("Digite de 1 até 7");
        document.getElementById("txtnota").style.border=" 1px solid #ed145b";
        document.getElementById("txtnota").focus();
        return false;
    }
    else if(isNaN(txtnota)){
        window.alert("Digite apenas numero na nota do trabalho!");
        document.getElementById("txtnota").style.border=" 1px solid #ed145b";
        document.getElementById("txtnota").value="";
        return false;
    }
    else if(txtcomit==""){
        window.alert("Faça um comentário!");
        document.getElementById("txtcomit").style.border=" 1px solid #ed145b";
        document.getElementById("txtcomit").focus();
        return false;
    }
    else{
            windonw.alert("O formulario foi enviado!");
            return true;
    }
}