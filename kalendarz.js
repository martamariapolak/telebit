function Miesiace() {
this.IleDni=new Array("", 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
this.Nazwa=new Array("", "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "wrze¶nia", "pa¼dziernika", "listopada", "grudnia")
this.Dzien=new Array("", "Pn", "Wt", "Sr", "Cz", "Pt", "Sb", "N");
}

function Kalendarz(){
Kolumna=0;
nTydzien=Teraz1.getDay(Teraz1.setDate(1));
nTydzien=(nTydzien==0 ? 7 : nTydzien)
Rok=Teraz.getYear()+"";
Rok=20+""+Rok.substring(Rok.length-2,Rok.length);
if (Rok%4==0) Czas.IleDni[2]=29;

document.write("<TABLE BORDER=0 CELLPADDING=1 CELLSPACING=2>");
document.write("<TR><TH COLSPAN=7><NOBR><FONT SIZE=2 COLOR=#AC0823> "+Teraz.getDate()+"&nbsp;"+Czas.Nazwa[Teraz.getMonth()+1]+"&nbsp;"+Rok+"</FONT></NOBR><BR><BR></TH></TR><TR>");
for (i=1; i<=7; i++) document.write("<TH><FONT SIZE=1 COLOR=#003333>"+Czas.Dzien[i]+"</FONT></TH>");
document.write("</TR><TR>");
for (i=1; i<nTydzien; i++) {
document.write("<TD></TD>");
Kolumna++};
for (i=1; i<=Czas.IleDni[Teraz.getMonth()+1]; i++) {
document.write("<TH");
if (i==Teraz.getDate()) document.write(" BGCOLOR=#CCCCCC");
if (Kolumna==6) document.write(" BGCOLOR=#DC143C");
document.write("><FONT SIZE=1 COLOR=#003399>"+i+"</FONT></TH>");
Kolumna++;
if (Kolumna==7) {
document.write("</TR><TR>");
Kolumna=0};
};
document.write("</TR></TABLE>");
}