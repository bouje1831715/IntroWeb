function btnCalculer_onclick()
{ 
 	var Reste, Rev, Loyer, Nour, Dep;
    Rev = parseFloat(document.getElementById("txtRev").value);
    Loyer = parseFloat(document.getElementById("txtLoyer").value);
    Nour = parseFloat(document.getElementById("txtNour").value);
    Dep = parseFloat(document.getElementById("txtDep").value);


    Reste = Rev-Loyer-Nour-Dep;
    Reste = Reste/4.33

    console.log("Il vous resterais " + Reste + " $ par semaine")

}