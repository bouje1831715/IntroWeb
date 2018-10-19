function btnCalculer_onclick()
{ 
 	var ACan, Euro;
	
    ACan =  parseFloat(document.getElementById("txtCan").value);	
	Euro = ACan*0.67;
	
	console.log("Vous aurez "+Euro+" Euros");

}