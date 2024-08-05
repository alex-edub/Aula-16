function verificaIdade(){
    var valor=document.getElementById("valor").value;
    if(valor>=18){
        console.log("Pessoa maior de idade.");
    }else{
        console.log("Pessoa menor de idade")
    }
}