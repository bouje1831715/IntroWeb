var Vet, Msg, PrixT, Toilet, Jour, Prix, HJour, VetP, valide;


PrixT = 0;
Toilet = 0;
Jour = 0;
Prix = 0;
HJour = 0;
VetP = 0;
NbHTot = 0;




function saisirPrix_animal()
{

    if (document.getElementById("radChien").checked === true)
    {
        Prix = 18.50

    }
    else{
        Prix = 16.95
    }

}
function saisirToiletage()
{
    Toilet = document.getElementById("chkServ").value;
    if (document.getElementById("chkServ").checked === true)
    {
        Toilet = 5

    }
}
function saisirTaux_horaire()
{
    Vet = document.getElementById("lstVeterinaire").value;


    switch(Vet)
    {
        case "Audrey Bouchard":
            VetP = 45;
            break;
        case "Maxime Simard":
            VetP = 25;
            break;

        case "Stéphane Tremblay":
            VetP = 35;
            break;

        case "Mélissa Caron":
            VetP = 40;
            break;


    }
}

function saisirNb_heure_jour()
{
    Jour = parseInt(document.getElementById("txtNbreJours").value);
    HJour = parseInt(document.getElementById("txtHJours").value);
}




function btnCalculer_onclick()
{

    saisirNb_heure_jour();
    saisirTaux_horaire();
    saisirToiletage();
    saisirPrix_animal();
    if(valideChampsObligatoires() === true)
    {
        NbHTot = HJour*VetP;
        PrixT = Prix*Jour+Toilet;


        //rabais jour
        if (Jour>=5 && Jour<= 10)
        {
            PrixT = PrixT*0.95
        }
        else if (Jour>=10 && Jour<= 30)
        {
            PrixT = PrixT*0.90
        }
        else if ( Jour> 30)
        {
            PrixT = PrixT*0.85
        }

        PrixT =  PrixT+NbHTot;
        Msg = document.getElementById("lblMessage").innerHTML="Cela vous couterai " + PrixT + " $";
    }







         //18,5$ chien
         // 16,95$ chat
        //donc:
        //  37$ 2 jour chien
       // 67,8$ 4 jour chat
        //  donc:
       //     audrey = 3,145$ jour (toilletage inclus)
      //  maxime = 2,5175$ jour
}
function radChat_onclick()
{
       document.getElementById("img").src="img/Cute-Cat.jpg"
}
function radChien_onclick()
{
       document.getElementById("img").src="img/Barney.jpg"
}

function valideChampsObligatoires()
{
    var valide;
    var  TabDonnesEntre = new Array(4);


    TabDonnesEntre[0] = valideExiste("txtHJours");
    TabDonnesEntre[1] = valideExiste("txtNbreJours");
    TabDonnesEntre[2] = valideExiste("txtNomClient");
    TabDonnesEntre[3] = valideExiste("txtNomAni");


    for (i = 0 ; i > TabDonnesEntre.Length ; i++)
    {
        if (TabDonnesEntre[i] === true)
        {
            valide = true;
        }
        else
        {
            valide = false;
        }

    }
    return valide;




}

function valideExiste(Case)
{
    var valide= false;

    if (document.getElementById(Case).value === "")
    {
        valide = false;
        document.getElementById(Case).style.backgroundColor = "red";
    }
    else{
        valide = true;
        document.getElementById(Case).style.backgroundColor = "white";
    }
    return valide;

}
