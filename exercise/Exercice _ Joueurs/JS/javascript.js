var  TabPtsJoueur = new Array(4);
var  TabNomJoueur = new Array(4);

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
        document.getElementById("btnRechercher").disabled=false;

    }
}

//--------------------------------------------------------------------------------------------------------------------------------------------

function btnTrouverMoy_onclick()
{
    moy = calculerMoyenne();
    document.getElementById("lblReponse").innerHTML="La moyenne est de " + moy;
}

function calculerMoyenne()
{
    var moy;
    moy = (TabPtsJoueur[0]+TabPtsJoueur[1]+TabPtsJoueur[2]+TabPtsJoueur[3])/4;

    return moy;
}

//-------------------------------------------------------------------------------------------------------------------------------------------

function btnTrouverMeilleur_onclick()
{
    meilleur = calculerMeilleur();
    document.getElementById("lblReponse").innerHTML = "Le meilleur joueur est " + TabNomJoueur[meilleur];
}

function calculerMeilleur()
{
    var meilleur;
    if ((TabPtsJoueur[0] > TabPtsJoueur[1])&&(TabPtsJoueur[0] > TabPtsJoueur[2])&&(TabPtsJoueur[0]>TabPtsJoueur[3]))
    {
        meilleur = 0;
    }
    else if ((TabPtsJoueur[1] > TabPtsJoueur[0])&&(TabPtsJoueur[1] > TabPtsJoueur[2])&&(TabPtsJoueur[1]>TabPtsJoueur[3]))
    {
        meilleur = 1;
    }
    else if ((TabPtsJoueur[2] > TabPtsJoueur[1])&&(TabPtsJoueur[2] > TabPtsJoueur[0])&&(TabPtsJoueur[2]>TabPtsJoueur[3]))
    {
        meilleur = 2;
    }
    else
    {
        meilleur = 3;
    }
    return meilleur;
}

//---------------------------------------------------------------------------------------------------------------------------------------------
function btnTrouverPire_onclick()
{
    pire = calculerPire();
    document.getElementById("lblReponse").innerHTML = "Le pire joueur est " + TabNomJoueur[pire];
}


function calculerPire()
{
    var pire;
    if ((TabPtsJoueur[0] < TabPtsJoueur[1])&&(TabPtsJoueur[0] < TabPtsJoueur[2])&&(TabPtsJoueur[0]<TabPtsJoueur[3]))
    {
        pire = 0;
    }
    else if ((TabPtsJoueur[1] < TabPtsJoueur[0])&&(TabPtsJoueur[1] < TabPtsJoueur[2])&&(TabPtsJoueur[1]<TabPtsJoueur[3]))
    {
        pire = 1;
    }
    else if ((TabPtsJoueur[2] < TabPtsJoueur[1])&&(TabPtsJoueur[2] < TabPtsJoueur[0])&&(TabPtsJoueur[2]<TabPtsJoueur[3]))
    {
        pire = 2;
    }
    else
    {
        pire = 3;
    }
    return pire;
}

//---------------------------------------------------------------------------------------------------------------------------------------------

function btnRechercher_onclick()
{
    var nomRechercher, trouver;
    nomRechercher = document.getElementById("txtNom").value;

    trouver = trouverJoueur();
    if (trouver == 5)
    {
        document.getElementById("lblReponse").innerHTML = nomRechercher + " n'est pas un joueur";
    }
    else
    {
        document.getElementById("lblReponse").innerHTML = nomRechercher + " est le joueur " + trouver;
    }

}

function trouverJoueur()
{
    var nomRechercher;

    nomRechercher = document.getElementById("txtNom").value;
    var trouver;
    if ( nomRechercher === TabNomJoueur[0])
    {
        trouver = 1;
    }
    else if ( nomRechercher === TabNomJoueur[1])
    {
        trouver = 2;
    }
    else if ( nomRechercher === TabNomJoueur[2])
    {
        trouver = 3
    }
    else if ( nomRechercher === TabNomJoueur[3])
    {
        trouver = 4;
    }
    else
    {
        trouver = 5;
    }

    return trouver;
}