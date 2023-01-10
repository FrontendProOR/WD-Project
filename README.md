## Ime projekta: WD-SR-16-2022

##Email i kontakt: 
radic.sr16.2022@uns.ac.rs

## Ime Prezime studenta:
Ognjen Radić  

## Broj indeksa: 
SR16/2022

## Projektni zadatak se pokrece otvaranjem index.html fajla tj. index.html je glavna stranica preko koje se pristupa drugim stranicama u projektu.

## Tehnologije koriscene u projektu su :
HTML5 , CSS3 , Javascript ES6+(korisceno var radi ceste potrebe redeklarisanja istih imena dinamickih elemenata stranice), Bootstrap 5.2.3 (Stavka o Bootstrapu 5.2.3 vazi za verziju 2.0 starije verzije nisu ukljucivale ovu biblioteku a to su verzije pre prvog pregleda domaceg zadatka),JSON bazu podataka,JQuery(dodano par funkcionalnosti na admin page-u oko prikaza bootstrap modala)

## Dodatno od materijala koriscenog za izradu sajta:
Koriscene ikonice iz Font-awesome,I slike sa sajtova Unsplash i Pexels.   

## DODATNO: 
ZA pregledati SVE stavke prethodnog domaceg zadatka
-POPRAVLJENO SA PRVOG DOMACEG 
1.GLAVNI NAVIGACIONI MENI SADRZI SAMO STVARI PO SPECIFIKACIJI I RESPONSIVE JE NA SVIM UREDJAJIMA 
2.TERETANE STAVKA TJ. GLAVNA STRANA JE UREDNIJA I CITLJIVIJA NEGO PRE
3.TRENINZI POPRAVLJENI UCITAVAJU SE BOLJE I CITLJIVIJI SU
4.IZMENIO KOMPLETNO RESPONSIVE JE I CITLJIVIJE JE 
5.DODAO SAM POP UP REGISTRACIJU KORISNIKA I PRIJAVLJIVANJE KORISNIKA(LOG IN & SIGN UP pop up-ovi)



-STRANICE ZA MENJANJE PODATAKA I KORISNIKA SA UCITANIM NJIHOVIM PODATCIMA SU IMPLEMENTIRANE U ADMIN PAGE-U UNUTAR TABELE KAO MODAL KOJI SE PRIKAZE NA ODABIR NA DUGME IZMENI

-Biblioteka bootstrap koriscena sa ovih linkova(nisu ukljucene kao lokalni fajl nego kao cdn link jer je brze,...):
#CSS bootstrap
Klikom na ovaj link ->[LINK](https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css) idete na oficijalni bootstrap fajl za css.

#JS bundle bootstrap-a
Klikom na ovaj link ->[LINK](https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js) idete na oficijalni bootstrap fajl za javascript.

-Biblioteka JQuery koriscena verzija 3.6.1 minimalna sa ovog linka:
[lINK DO JQUERY VERZIJE](https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js)


-ZA NAPOMENUT:
-Od dodatnih funkcionalnosti:
O nama i O teretani sekcije sa malo teksta koje ucitavaju iz baze duzi opis teretane ovo je takodje stavljeno kao link u glavni navigacioni meni


-U ovom projektu sam se koristio sintaksom drugacijom od one na vezbama tj. nisam se koristio kreiranjem XMLHttpRequest-a i izmene podataka u bazi uz pomoc GET,PUT,DELETE metoda nego sam implementirao firebase aplikaciju sa dva linka u head-u i postavio apiKey,projectId i databaseURL samog projekta koristeci se tako ugradjenim funkcijama koje su poblize objasnjene u firebase dokumentaciji dobio sam rezultate koji se traze po specifikaciji.Za vise informacija o funkcijama firebase-a mozete procitati u komentarima koda ili na linku:
https://firebase.google.com/docs/database/admin/save-data  cuvanje podataka iz baze
https://firebase.google.com/docs/database/admin/retrieve-data  Ucitavanje podataka iz baze

