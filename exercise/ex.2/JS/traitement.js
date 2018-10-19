function btnCalculer_onclick()
{ 
 	var MoyKmMois, TotKM;
	
    MoyKmMois =  parseFloat(document.getElementById("txtKMMois").value);	
	TotKM = MoyKmMois*60;
	
	console.log("Vous ferez "+TotKM+" KM en 5 ans");


}