/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// console.log("js ok");

//elementi del form
var nameField = document.getElementById("name");
var kmsField = document.getElementById("kms");
var ageField = document.getElementById("age");
var button = document.getElementById("generated-ticket");

// elementi ticket
var ticketSection = document.getElementById("ticket-section");
var passagerNameElement = document.getElementById("passeger-name");
var discountElement = document.getElementById("discount");
var carElement = document.getElementById("car");
var trainCodElement = document.getElementById("train-code");
var priceElement = document.getElementById("price");

button.addEventListener("click", function () {
  var nameValue = nameField.value;
  var kmsvalue = kmsField.value;
  var ageValue = ageField.value;

  var price = 0.21 * kmsvalue;
  var discountDisplay = "tariffa ordinaria";
  if (ageValue == "min") {
    price *= 0.8;
    discountDisplay = "Tariffa minori";
  }
  if (ageValue == "over65") {
    price *= 0.6;
    discountDisplay = "Tariffa over 65";
  }
  price = "Euro " + price.toFixed(2);

  var carNumber = Math.floor(Math.random() * 12) + 1;
  passagerNameElement.innerHTML = nameValue;
  discountElement.innerHTML = discountDisplay;
  carElement.innerHTML = carNumber;
  trainCodElement.innerHTML = "98989889";
  priceElement.innerHTML = price;

  ticketSection.classList.remove("hidden");
});
