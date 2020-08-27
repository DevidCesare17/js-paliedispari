// 2. PARI E PARIEDISPARI

// 2.1 L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var sceltaUtente = prompt("Scegli: pari o dispari?");
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

if (sceltaUtente !== "pari" && sceltaUtente !== "dispari") {
  alert("Inserisci pari o dispari!");
} else if (numeroUtente < 1 || numeroUtente > 5) {
  alert("Inserisci solo numeri da 1 a 5!");
}
// 2.2 Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function pcGenerator (max, min) {
  var numeroRandom = Math.floor(Math.random() * max) + min;
  return numeroRandom;
}

var numeroComputer = pcGenerator(5, 1);
console.log(numeroComputer);

// 2.3 Sommiamo i due numeri
var somma = numeroUtente + numeroComputer;
console.log(somma);

// 2.4 Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function winner (pari, dispari) {
  if (somma % 2 == 0) {
    var winner = "Hai vinto!";
    return winner;
  } else {
    var winner = "Hai perso!";
    return winner;
  }
}
var vincitore = winner();

// 2.5 Dichiariamo chi ha vinto.
if (winner) {
  alert("La somma dei due numeri è: " + somma + "\n" + "Il numero del computer era: " + numeroComputer + "\n" + vincitore);
} else {
  alert("La somma dei due numeri è: " + somma + "\n" + "Il numero del computer era: " + numeroComputer + "\n" + vincitore);
}
