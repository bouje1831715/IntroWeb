function btnCalculer_onclick()
{ 
 	var Dest, Dist, Cons, Prix, Cout, Boite;
 	Dist = parseFloat(document.getElementById("txtDist").value);
    Cons = parseFloat(document.getElementById("txtCons").value);
    Prix = parseFloat(document.getElementById("txtPrix").value);
    Dest = (document.getElementById("txtDest").value);

    Boite = 100/Dist;
    Boite = Cons/Boite;
    Cout=Prix*Boite;

    console.log("Pour aller a " + Dest + " cela vous coutera " + Cout + " $");



}