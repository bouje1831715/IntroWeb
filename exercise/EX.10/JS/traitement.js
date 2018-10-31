function btnCalculer_onclick()
{
    var age, catagorie, msg;
    age = parseInt(document.getElementById("txtAge").value);

    if((age >= 6) && (age <=8))
    {
        msg = document.getElementById("lblMessage").innerHTML="poussin";
    }
    else
    {
        if((age >= 9) && (age <=10))
        {
            msg = document.getElementById("lblMessage").innerHTML="puppille";
        }
        else
        {
            if((age >= 11) && (age <=12))
            {
                msg = document.getElementById("lblMessage").innerHTML="minime";
            }
            else
            {
                msg = document.getElementById("lblMessage").innerHTML="cadet";
            }
        }
    }


}