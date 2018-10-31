function btnCalculer_onclick()
{
    var Nb1, Nb2, Msg;
    Nb1 = parseInt(document.getElementById("txtNbre1").value);
    Nb2 = parseInt(document.getElementById("txtNbre2").value);

    if(((Nb1 >= 0)&&( Nb2 >= 0))||(( Nb1 < 0)&&( Nb2 < 0)))
    {
        msg = document.getElementById("lblMessage").innerHTML="positif";
    }
    else
    {
        msg = document.getElementById("lblMessage").innerHTML="negatif";
    }




}