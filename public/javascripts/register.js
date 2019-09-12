function toValid(){
    let userlength=document.getElementById("user").value.length;
    let passValue=document.getElementById("pass").value;
    let passTwoValue=document.getElementById("passtwo").value;
    if(userlength<8){
        document.getElementById("usererr").innerHTML="user length must longer than eight";
    }
    else{
        document.getElementById("usererr").innerHTML=" ";
    }

    if(passValue.length<8){
        document.getElementById("passerr").innerHTML="password length must longer than eight";
    }
    else{
        document.getElementById("passerr").innerHTML=" ";
    }
    if(passValue!=passTwoValue){
        document.getElementById("passerr1").innerHTML="password length must be the same ";
    }
    else{
        document.getElementById("passerr1").innerHTML=" ";
    }
    if(userlength>8&&passTwoValue.length>8&&passValue==passTwoValue){
        return true;

    }
    else{
        return false;
    }
}
