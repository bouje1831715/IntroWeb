var  prixBase, age, rabais, prixFinal, temps, film, img;




function calculerPrix()
{
    prixBase=parseFloat(document.getElementById("txtBasePrix").value);
    trouverAge();
    prixFinal=prixBase-(prixBase*rabais);
}

function btnCalculer_onclick()
{
    calculerPrix();
    film=document.getElementById("lstOptions").value;

    document.getElementById("lblMessage").innerHTML = "Un billet pour le "+temps+" pour une personne aggée de "+age+" ans coûterai " +prixFinal+"$ pour visualliser le film "+film;

}
function trouverAge()
{
    age=parseInt(document.getElementById("txtAge").value);

    if(document.getElementById("chkMiSession").checked==true)
    {


        if (age<=16)
        {
            if(document.getElementById("radMidi").checked==true)
            {
                rabais=0.6;
                temps="midi";
            }
            else {
                rabais=0.4;
                temps="soir";
            }
        }
        else{
            if(document.getElementById("radMidi").checked==true)
            {
                rabais=0.3;
                temps="midi";
            }
            else{
                rabais=0;
                temps="soir"
            }
        }
    }
    else{
        rabais=0;

        if(document.getElementById("radMidi").checked==true)
        {
            temps="midi";
        }
        else{
            temps="soir"
        }

    }
}


function img_onchange()
{
    var img;

    img=document.getElementById("lstOptions").value;

      document.getElementById("imgFilm").src="img/"+img+".jpg";


}