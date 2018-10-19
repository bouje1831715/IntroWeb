function btnCalculer_onclick()
{ 
 	var PLivres, Kg;
	
    PLivres =  parseFloat(document.getElementById("txtPoids").value);	
	Kg = PLivres/2.2;
	
	console.log("Le poids est maintenant de "+Kg+" Kilogrammes");

}