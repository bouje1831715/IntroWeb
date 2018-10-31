function btnCalculer_onclick()
{
    var Nb1, Nb2, Nb3, Nb4, Msg;
    Nb1 = parseInt(document.getElementById("txtNbre1").value);
    Nb2 = parseInt(document.getElementById("txtNbre2").value);
    Nb3 = parseInt(document.getElementById("txtNbre3").value);


    Nb4 = 3;

    if ((Nb1>= Nb2)&&(Nb2!=Nb3))
    {
        Nb4 = Nb4 + 2*Nb1;
    }
    else
    {
        if((Nb1=Nb2)||(Nb2>Nb3))
        {
            Nb4 = Nb4 + Nb1
        }
        else
        {
            Nb4 = Nb4*Nb2/Nb1-Nb3;
        }
    }
    msg = document.getElementById("lblMessage").innerHTML=Nb4;




}