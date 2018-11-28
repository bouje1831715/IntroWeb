function btnValider_onclick()  //mettre la fonction dans un IF tester une fonction à la fois
{
    var mot, verif;
    mot = avoirLaChaine();
    verif = validerNAS(mot);
    if (verif === true)
    {
        alert("Correct");
    }
    else
    {
        alert("Mauvais");
    }
}

function validerNAS( Chaine )  // numéro d'assurance social 418 789 123
{
    var reg = new RegExp("^[0-9]{3} [0-9]{3} [0-9]{3}$");
    var resultat = reg.test(Chaine);
    return resultat;
}

function validerTel( Chaine )  // au format (418) 876-8373  un numéro ça change
{

    var reg = new RegExp("^\([0-9]{3}\) [0-9]{3}-[0-9]{3}$");
    var resultat = reg.test(Chaine);
    return resultat;
}

function validerCar( Chaine ) // des chaînes de caractères alphabétiques majuscule et minuscule et accepte le trait d'union pas obligatoire
{

    var reg = new RegExp("([A-z],-)*");
    var resultat = reg.test(Chaine);
    return resultat;
}

function validerNo( Chaine )   // un chiffre peut etre 0 5 25 200 etc..
{

    var reg = new RegExp("^666$");
    var resultat = reg.test(Chaine);
    return resultat;
}

function verifierEntreDixTrente( Chaine ) //un chiffre entre 10 et 30
{

    var reg = new RegExp("^([1-2][0-9]|30)$");
    var resultat = reg.test(Chaine);
    return resultat;
}

function verifierEntreUnVingt( Chaine ) //un chiffre entre 1 et 20
{

    var reg = new RegExp("^(1[0-9]|20)$");
    var resultat = reg.test(Chaine);
    return resultat;
}

function avoirLaChaine()
{
   var Chaine;
   Chaine = document.getElementById("txtValidation").value;
   return Chaine;
}