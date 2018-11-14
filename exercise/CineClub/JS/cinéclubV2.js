var  prixBase, age, rabais, prixFinal, temps, film, img;


film=document.getElementById("lstOptions").value;

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

function calculerPrix()
{
    prixBase=parseFloat(document.getElementById("txtBasePrix").value);
    trouverAge();
    prixFinal=prixBase-(prixBase*rabais);
}

function btnCalculer_onclick()
{
    calculerPrix();

    document.getElementById("lblMessage").innerHTML = "Un billet pour le "+temps+" pour une personne aggée de "+age+" ans coûterai " +prixFinal+"$ pour visualliser le film "+film;

}

function img_onchange()
{

    img=parseInt(document.getElementById("lstOptions").value);

    if (img == 1)
    {
        document.getElementById("imgFilm").src="JS/barney.jpg";
    }
    if (img == 2)
    {
        document.getElementById("imgFilm").src="JS/barney.jpg";
    }
    if (img == 3)
    {
        document.getElementById("imgFilm").src="JS/barney.jpg";
    }
    if (img == 4)
    {
        document.getElementById("imgFilm").src="JS/barney.jpg";
    }

}