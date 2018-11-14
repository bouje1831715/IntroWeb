function btnCalculer_onclick()
{
    var NumSem, Msg;
    NumSem = parseInt(document.getElementById("txtNumSem").value);


    switch(NumSem)
    {
        case 1:
            Msg = "Dimanche";
            break;
        case 2:
            Msg = "Lundi";
            break;
        case 3:
            Msg = "Mardi";
            break;
        case 4:
            Msg = "Mercredi";
            break;
        case 5:
            Msg = "Jeudi";
            break;
        case 6:
            Msg = "Vendredi";
            break;
        case 7:
            Msg = "Samedi";
            break;
    }

    document.getElementById("lblMessage").innerHTML=Msg;







}