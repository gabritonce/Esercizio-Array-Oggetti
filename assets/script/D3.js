/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

var a = 20;
var b = 12;
 
if(a>b){
  console.log('A più grande di B')
}else{
  console.log('B più grande di A')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

var c = 5;
var d = 32;

if(c!==d){
console.log('not equal')
} else {
  console.log('equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var numero = 50;

if(numero % 5 == 0){
  console.log('divisibile per 5')
}else{
  console.log('non divisibile per 5')
}




/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

var numero1 = 4;
var numero2 = 4;
console.log(numero1 + numero2 || numero1, numero2 != 8 )

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
var totalShoppingCart = 55
if(totalShoppingCart>=50){
  console.log('Spedizione Gratuita')
}else{
  console.log('Costo spedizione 10 euro ')
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

var totalShoppingCart = 55
if(totalShoppingCart*20/100>=50){
  console.log('Spedizione Gratuita')
}else{
  console.log('Costo spedizione 10 euro')
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
var number1 = 20;
var number2 = 56;
var number3 = 9;

if(number1 > number2 && number2 >number3){
console.log('number1,number2,number3')
}else if(number2 > number3 && number3 > number1 ){
  console.log('number2,number3,number1')
}else if (number3 > number1 && number1 > number2){
  console.log('number3,number2,number1')
}else if(number1>number3 && number3 > number2){
  console.log('number1,number3,number2')
} else if(number2>number1 && number1 > number3){
  console.log('number2,number1,number3')
}else{
  console.log('boh')
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

var tipo = 3
if(typeof tipo){
  console.log('number')
}else{
  console.log('string')
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
var pari = 44
if(pari % 2 == 0){
  console.log('Il numero è Pari')
}else{
  console.log('Il numero è dispari')
}

// ESERCIZIO 10
  // Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. 
  var val = 7
  if (val <= 10) {
      console.log("Meno di 5");
    } else if (val <= 5) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me)


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.splice(2,1)
console.log(me)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

var mioArray = [];
mioArray.push(1,2,3,4,5,6,7,8,9,10);
console.log(mioArray)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

mioArray.splice(9,1,100)
console.log(mioArray)
