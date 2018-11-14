var  TabPtsJoueur = new Array(4);
var  TabNomJoueur = new Array(4);

var moy = 0;
var cpt = 1;



function saisirJoueur()
{
    TabPtsJoueur[cpt - 1] = parseInt(document.getElementById("txtPoints").value);
    TabNomJoueur[cpt - 1] = document.getElementById("txtNom").value;
}

function btnAjouter_onclick()
{
    saisirJoueur();
    cpt ++ ;
    document.getElementById("lblNbreJoueur").innerHTML="Joueur " + cpt;
    if (cpt >= 5)
    {
        document.getElementById("btnAjouter").disabled=true;
        document.getElementById("btnTrouverMoy").disabled=false;
        document.getElementById("btnTrouverMeilleur").disabled=false;
        document.getElementById("btnTrouverPire").disabled=false;
        document.getElementById("lblNbreJoueur").innerHTML="Joueur 4";
    }
}


function btnTrouverMoy_onclick()
{
    moy = (TabPtsJoueur[0]+TabPtsJoueur[1]+TabPtsJoueur[2]+TabPtsJoueur[3])/4;
    document.getElementById("lblReponse").innerHTML="La moyenne est de " + moy;
}

function btnTrouverMeilleur_onclick()
{
    if ((TabPtsJoueur[0] > TabPtsJoueur[1])&&(TabPtsJoueur[0] > TabPtsJoueur[2])&&(TabPtsJoueur[0]>TabPtsJoueur[3]))
    {
        document.getElementById("lblReponse").innerHTML = "Le meilleur joueur est " + TabNomJoueur[0];
    }
    else if ((TabPtsJoueur[1] > TabPtsJoueur[0])&&(TabPtsJoueur[1] > TabPtsJoueur[2])&&(TabPtsJoueur[1]>TabPtsJoueur[3]))
    {
        document.getElementById("lblReponse").innerHTML = "Le meilleur joueur est " + TabNomJoueur[1];
    }
    else if ((TabPtsJoueur[2] > TabPtsJoueur[1])&&(TabPtsJoueur[2] > TabPtsJoueur[0])&&(TabPtsJoueur[2]>TabPtsJoueur[3]))
    {
        document.getElementById("lblReponse").innerHTML = "Le meilleur joueur est " + TabNomJoueur[2];
    }
    else
    {
        document.getElementById("lblReponse").innerHTML = "Le meilleur joueur est " + TabNomJoueur[3];
    }

}

function btnTrouverPire_onclick()
{
    if ((TabPtsJoueur[0] < TabPtsJoueur[1])&&(TabPtsJoueur[0] < TabPtsJoueur[2])&&(TabPtsJoueur[0]<TabPtsJoueur[3]))
    {
        document.getElementById("lblReponse").innerHTML = "Le pire joueur est " + TabNomJoueur[0];
    }
    else if ((TabPtsJoueur[1] < TabPtsJoueur[0])&&(TabPtsJoueur[1] < TabPtsJoueur[2])&&(TabPtsJoueur[1]<TabPtsJoueur[3]))
    {
        document.getElementById("lblReponse").innerHTML = "Le pire joueur est " + TabNomJoueur[1];
    }
    else if ((TabPtsJoueur[2] < TabPtsJoueur[1])&&(TabPtsJoueur[2] < TabPtsJoueur[0])&&(TabPtsJoueur[2]<TabPtsJoueur[3]))
    {
        document.getElementById("lblReponse").innerHTML = "Le pire joueur est " + TabNomJoueur[2];
    }
    else
    {
        document.getElementById("lblReponse").innerHTML = "Le pire joueur est " + TabNomJoueur[3];
    }
}