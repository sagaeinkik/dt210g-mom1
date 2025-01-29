# Fördjupad Frontend-utveckling

av S.E.K

## Uppgift

Uppgiften var att använda React för att skapa en enkel sida av valfri design, där man representerar sitt fritidsintresse i minst tre instanser.

Man skulle ha komponenter som sidhuvud, sidfot och huvudinnehåll, och skriva ut en array till skärmen. Arrayen skulle innehålla minst en textsträng, ett nummer och en boolean.

## Lösning

Jag valde skidåkning som intresse, och listade några backar som finns i Åres skidsystem.

Varje back-objekt innehåller namn och svårighetsgrad som textsträngar, fallhöjdsmeter som nummer, och backbelysning som boolean.

Jag gjorde ett interface för backen och lade i src/assets/models, och sedan gjorde jag en SlopeItem-komponent för själva objektet.  
I ListCollection-komponenten skapade jag en array med olika backar, loopade igenom den och skrev ut varje objekt som en SlopeItem-tagg.

Jag skriver ut "ja" eller "nej" baserat på booleans värde istället för själva boolean själv.
