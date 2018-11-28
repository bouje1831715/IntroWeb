function btnCalculer_onclick()
{
    var Nb1, Nb2, Op, result, valide;
    saisir();
    if (valideChampsObligatoires() === true)
    {
        if (valideFormats() === true)
        {
            traitement(Nb1, Nb2, Op);
        }
    }
}

function traitement(Nb1, Nb2, Op)
{
    var result;
    result = calculer(Nb1, Nb2, Op) ;
    document.getElementById("lblMessage").innerHTML=result;


}
function saisir()
{
    var Nb1, Nb2, Op;

    Nb1 = parseInt(document.getElementById("txtNbre1").value);
    Nb2 = parseInt(document.getElementById("txtNbre2").value);
    Op = document.getElementById("txtOperateur").value;


}
function calculer(Nb1, Nb2, Op)
{   var result;


    switch(Op)
    {
        case "+":
            Op = 1;
            result = Nb1 + Nb2;
            break;
        case "-":
            Op = 2;
            result = Nb1 - Nb2;
            break;
        case "/":
            Op = 3;
            result = Nb1 / Nb2;
            break;
        case "*":
            Op = 4;
            result = Nb1 * Nb2;
            break;

    }

    return result;

}



function valideChampsObligatoires()
{
    var valide = true;
    var  TabDonnesEntre = new Array("txtNbre1", "txtNbre2", "txtOperateur");


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
        document.getElementById(Case).style.backgroundColor = "red";
    }
    else{
        valide = true;
        document.getElementById(Case).style.backgroundColor = "white";
    }
    return valide;
}

function valideFormats()
{
    var valide = true;
    var  TabDonnesEntre = new Array("txtNbre1", "txtNbre2", "txtOperateur");

    for (i = 0 ; i < TabDonnesEntre.length ; i++)
    {
        if (valideNo(TabDonnesEntre[i]) === false)
        {
            valide = false;
            document.getElementById(TabDonnesEntre[i]).style.backgroundColor = "red";
        }
        else
        {
            valide = true;
            document.getElementById(TabDonnesEntre[i]).style.backgroundColor = "white";
        }

    }
    return valide;
}

function valideNo(chaine)
{
    return /^[0-9]+|[+*/-]{1}$/.test(document.getElementById(chaine).value);
}



