function validation() {
    var nom =document.querySelector("#nom").value ;
    var prenom =document.querySelector("#prenom").value ;
    var date =document.querySelector("#date").value ;
    var adresse =document.querySelector("#adresse").value ;
    var mail =document.querySelector("#mail").value ;
    if(nom=="" || nom.length < 5 ){
        document.querySelector("#error").textContent="le nom est obligatoire et doit contenir au moins 5 caractères ";
        document.getElementById("error").style.display= "block";
        document.getElementById("resultat").style.display= "none";
    }else if(prenom=="" || prenom.length < 5 ){
        document.querySelector("#error").textContent="le prenom est obligatoire et doit contenir au moins 5 caractères ";
        document.getElementById("error").style.display= "block";
        document.getElementById("resultat").style.display= "none";
    }else if(date=="" || date.length < 5 ){
        document.querySelector("#error").textContent="la date est obligatoire et doit contenir au moins 5 caractères ";
        document.getElementById("error").style.display= "block";
        document.getElementById("resultat").style.display= "none";
    }else if(adresse=="" || adresse.length < 5 ){
        document.querySelector("#error").textContent="l'adresse est obligatoire et doit contenir au moins 5 caractères ";
        document.getElementById("error").style.display= "block";
        document.getElementById("resultat").style.display= "none";
    }else if(mail=="" || mail.length < 5 ){
        document.querySelector("#error").textContent="l'email est obligatoire et doit contenir au moins 5 caractères ";
        document.getElementById("error").style.display= "block";
        document.getElementById("resultat").style.display= "none";
    } 
    else{
    document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
    document.getElementById("resultat").style.display= "block";
    document.getElementById("error").style.display= "none";
    }
}