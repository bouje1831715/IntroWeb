var Vet, Msg, PrixT, Toilet, Jour, Prix, HJour, VetP;

Vet = 0;
PrixT = 0;
Toilet = 0;
Jour = 0;
Prix = 0;
HJour = 0;
VetP = 0;




function prix_animal()
{
    if (document.getElementById("radChien").Checked == true)
    {
        Prix = 18,50

    }
    else{
        Prix = 16,95
    }

}
function toiletage()
{
    Toilet = document.getElementById("chkServ").value;
    if (document.getElementById("chkServ").Checked == true)
    {
        Toilet = 5

    }
}
function taux_horaire()
{
    Vet = document.getElementById("lstVeterinaire").value;
    if (Vet == "Audrey Bouchard")
    {
        VetP = 45;
    }
    else if (Vet == "Maxime Simard")
    {
        vetP = 25;
    }
    else if (Vet == "Stéphane Tremblay")
    {
        VetP = 35;
    }
    else if (Vet == "Mélissa Caron")
    {
        VetP = 40;
    }

}

function nb_heure_jour()
{


    Jour = parseInt(document.getElementById("txtNbreJours").value);
    HJour = parseInt(document.getElementById("txtHJours").value);
    switch(HJour)
    {
        case 1:
            VetP*1;
            break;
        case 2:
            VetP*2;
            break;
        case 3:
            VetP*3;
            break;
        case 4:
            VetP*4;
            break;
        case 5:
            VetP*5;
            break;
        case 6:
            VetP*6;
            break;
        case 7:
            VetP*7;
            break;
        case 8:
            VetP*8;
            break;
        case 9:
            VetP*9;
            break;
        case 10:
            VetP*10;
            break;



    }

}



function btnCalculer_onclick()
{
    nb_heure_jour();
    taux_horaire();
    toiletage();
    prix_animal();


    PrixT = (Prix*Jour)+VetP;


    //rabais jour
        if (Jour<=5 && Jour>= 10)
        {
            PrixT = PrixT*0,95
        }
        else if (Jour<=10 && Jour>= 30)
        {
            PrixT = PrixT*0,90
        }
        else if ( Jour> 30)
        {
            PrixT = PrixT*0,85
        }
        Msg = document.getElementById("lblMessage").innerHTML="Cela vous couterai " + PrixT + " $";



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
