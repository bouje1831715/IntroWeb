function btnCalculer_onclick()
{
    var Nb1, Nb2, Op, Msg, Result;
    Nb1 = parseInt(document.getElementById("txtNbre1").value);
    Nb2 = parseInt(document.getElementById("txtNbre2").value);
    Op = document.getElementById("txtOperateur").value;




    switch(Op)
    {
        case "+":
            Op = 1;
            Result = Nb1 + Nb2;
            break;
        case "-":
            Op = 2;
            Result = Nb1 - Nb2;
            break;
        case "/":
            Op = 3;
            Result = Nb1 / Nb2;
            break;
        case "*":
            Op = 4;
            Result = Nb1 * Nb2;
            break;

    }



    Msg = document.getElementById("lblMessage").innerHTML=Result;



}