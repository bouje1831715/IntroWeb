function btnCalculer_onclick()
{
    var CT1, CT5, CT10, CT25, Total;

    CT1 = parseFloat(document.getElementById("txtCT1").value);
    CT5 = parseFloat(document.getElementById("txtCT5").value);
    CT10 = parseFloat(document.getElementById("txtCT10").value);
    CT25 = parseFloat(document.getElementById("txtCT25").value);

    Total = ((CT1)+(CT5*5)+(CT10*10)+(CT25*25))/100;
    console.log("Il vous reste " + Total + " $");

}