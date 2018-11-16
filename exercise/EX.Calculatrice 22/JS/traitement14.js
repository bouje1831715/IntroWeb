function btnCalculer_onclick()
{
    var Nb1, Nb2, Op, result, valide;
    if (valideChampObligatoires() === true)
    {
        saisir();
    }

}

function traitement(Nb1, Nb2, Op)
{

    result = calculer(Nb1, Nb2, Op) ;
    Msg = document.getElementById("lblMessage").innerHTML=result;


}
function saisir()
{
    var Nb1, Nb2, Op, result;

    Nb1 = parseInt(document.getElementById("txtNbre1").value);
    Nb2 = parseInt(document.getElementById("txtNbre2").value);
    Op = document.getElementById("txtOperateur").value;

    traitement(Nb1, Nb2, Op);
}
function calculer(Nb1, Nb2, Op)
{


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


function valideChampObligatoires()
{
    var valide;
    if (valideExiste("txtNbre1")=== true && valideExiste("txtNbre2")=== true && valideExiste("txtOperateur")=== true)
    {
        valide = true;
    }
    else {
        valide = false;
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






/*
function valideChampsObligatoires()
{
    var valide1, valide2, valideOp;

    valide1 = valideExiste1();
    valide2 = valideExiste2();
    valideOp = valideExisteOp();


    if (valide1 === false)
    {
        document.getElementById("txtNbre1").style.backgroundColor = "red";
    }
    else if (valide2 === false)
    {
        document.getElementById("txtNbre2").style.backgroundColor = "red";
    }
    else if (valideOp === false)
    {
        document.getElementById("txtOperateur").style.backgroundColor = "red";
    }


    if (valide1 === true)
    {
        document.getElementById("txtNbre1").style.backgroundColor = "white";
    }
    else if (valide2 === true)
    {
        document.getElementById("txtNbre2").style.backgroundColor = "white";
    }
    else if (valideOp === true)
    {
        document.getElementById("txtOperateur").style.backgroundColor = "white";
    }


}

function valideExiste1()
{

    var valide;

    if (document.getElementById("txtNbre1").value === "")
    {
        valide = false;
    }
    else
    {
        valide = true;
    }
    return valide;

}
function valideExiste2()
{

    var valide;

    if (document.getElementById("txtNbre2").value === "")
    {
        valide = false;
    }
    else
    {
        valide = true;
    }
    return valide;

}
function valideExisteOp()
{

    var valide;

    if (document.getElementById("txtOperateur").value === "")
    {
        valide = false;
    }
    else
    {
        valide = true;
    }
    return valide;

}
*/