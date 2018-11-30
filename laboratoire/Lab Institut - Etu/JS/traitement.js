function frmMembre_onclick()
{
    var result
    if (valideChampsObligatoires() === true)
    {
        document.getElementById("lblMessageErreur").innerHTML="";
        if (valideFormats() === true)
        {
            result = confirme();
            if(result === true)
            {

                prix = traitement();
                document.getElementById("lblPrix").innerHTML="Cela vous couterai " + prix + " $";
            }
        }
    }
    else
    {
        document.getElementById("lblMessageErreur").innerHTML="Tous les champs ayant une étoiles sont obligatoires";
    }

}

//____________________________________________________SAISIR__________________________
/*function saisir()
{
    var nom, prenom, adresse, ville, codePostal, tel, codePermanent, type;

    nom = document.getElementById("txtNom").value;
    prenom = document.getElementById("txtPrenom").value;
    adresse = document.getElementById("txtAdresse").value;
    ville = document.getElementById("txtVille").value;
    codePostal = document.getElementById("txtCodePostal").value;
    tel = document.getElementById("txtTel").value;
    codePermanent = document.getElementById("txtCodePerm").value;
    type = document.getElementById("type").value;

}
*/
//______________________________________________TRAITEMENT_____________________________
function traitement(type)
{
    var prix, type;
    type = document.getElementById("type").value;
    switch(type)
    {
        case"adulte":
        {
            prix = 90;
            break;
        }
        case"retraité":
        {
            prix = 80;
            break;
        }
        case "étudiant":
        {
            prix = 60;
            break;
        }
    }
    return prix;

}
//____________________________________________________CHAMP_OBLIGATOIRES__________________________
function valideChampsObligatoires()
{
    var valide = true;
    var  TabDonnesEntre = new Array("txtNom", "txtPrenom", "txtVille", "txtTel");


    for (i = 0 ; i < TabDonnesEntre.length ; i++)
    {
        if (valideExiste(TabDonnesEntre[i]) === false)
        {
            valide = false;
        }


    }
    return valide;

}

function valideExiste(Case)
{
    var valide= false;

    if (document.getElementById(Case).value === "")
    {
        valide = false;
        document.getElementById(Case).style.borderColor = "red";
    }
    else{
        valide = true;
        document.getElementById(Case).style.borderColor = "";
    }
    return valide;
}

//____________________________________________________FORMATS__________________________

function valideFormats()
{
    var valide = true;
    var  TabDonnesEntre = new Array("txtNom", "txtPrenom", "txtAdresse", "txtVille", "txtTel", "txtCodePostal");

    if(valideNom(TabDonnesEntre[0])=== false)
    {
        valide = false;
        document.getElementById("txtNom").style.borderColor = "red";
    }
    else if (valideNom(TabDonnesEntre[0])=== true)
    {
        document.getElementById("txtNom").style.borderColor = "";
    }
    //-------------
    if(validePrénom(TabDonnesEntre[1])=== false)
    {
        valide = false;
        document.getElementById("txtNom").style.borderColor = "red";
    }
    else if (valideNom(TabDonnesEntre[1])=== true)
    {
        document.getElementById("txtNom").style.borderColor = "";
    }
    //-------------
    if(valideVille(TabDonnesEntre[3])=== false)
    {
        valide = false;
        document.getElementById("txtNom").style.borderColor = "red";
    }
    else if (valideNom(TabDonnesEntre[3])=== true)
    {
        document.getElementById("txtNom").style.borderColor = "";
    }
    //-------------
    if(valideTel(TabDonnesEntre[4])=== false)
    {
        valide = false;
        document.getElementById("txtNom").style.borderColor = "red";
    }
    else if (valideCodePostal(TabDonnesEntre[4])=== true)
    {
        document.getElementById("txtNom").style.borderColor = "";
    }
    //-------------

    return valide;
}

function valideNom(chaine)
{
    return /^[A-é]+|\-?[A-é]+$/.test(document.getElementById(chaine).value);
}
function validePrénom(chaine)
{
    return /^[A-é]+|\-?[A-é]+$/.test(document.getElementById(chaine).value);
}
function valideVille(chaine)
{
    return /^[A-é]+|\-?[A-é]+$/.test(document.getElementById(chaine).value);
}
function valideCodePostal(chaine)
{
    return /^[A-é][0-9][A-é] [0-9][A-é][0-9]$/.test(document.getElementById(chaine).value);
}
function valideTel(chaine)
{
    return /^(\([0-9]{3}\) [0-9]{3}\-[0-9]{4})|([0-9]{3}\-[0-9]{3}\-[0-9]{4})$/.test(document.getElementById(chaine).value);
}

//_______________________________________________CONFIRM____________________________

function confirme()
{
    var result;
    var r = confirm("est-ce que vous avez rentrez les bonnes informations");

    if (r === true)
    {
        result = true;
    }
    else
    {
        result = false;
    }
    return result;
}

//___________________________________________________onsubmit__________________
function frmMembre_onsubmit()
{

}

