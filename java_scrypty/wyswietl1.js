



var a;

function wyswietl1( )

{
var timerId;
var data=new Date();
var tekst;





 


var miesiac=data.getMonth()+1;
if(miesiac<10)
{miesiac="0"+miesiac;}
var dzien=data.getDate();
if(dzien<10)
{dzien="0"+dzien;}
var rok=data.getFullYear();


var dzisiaj=dzien+"."+miesiac+"."+rok;


var weekDay = new Array(7)

weekDay[0] = "Niedziela"
weekDay[1] = "Poniedz"
weekDay[2] = "Wtorek"
weekDay[3] = "środa"
weekDay[4] = "Czwartek"
weekDay[5] = "Piątek"
weekDay[6] = "Sobota"
var day=data.getDay();

tekst=weekDay[day]+":"+ dzisiaj;

if(tekst!=a);
{
document.getElementById("B2").innerHTML=tekst;

a=tekst;
return a;

}









timerId=setTimeout("wyswietl1()",50);}


