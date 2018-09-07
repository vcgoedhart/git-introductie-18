/*//////////////////////////////
|                              |
|  Voornaam: Vincent           |
|  Achternaam: Goedhart        |
|                              |
|  Opdracht: Pizza calculator  |
|                              | 
//////////////////////////////*/


function onClickSubmit(){ // Als je op submit klikt

	var amountSmall = parseInt(document.getElementById("amountSmall").value); // Hoeveelheid 'Small Pizza'
	var amountMedium = parseInt(document.getElementById("amountMedium").value); // Hoeveelheid 'Medium Pizza'
	var amountLarge = parseInt(document.getElementById("amountLarge").value); // Hoeveelheid 'Large Pizza'

	var boolSmall = document.getElementById("smallPizza").checked; // Checkbox statement 'Small Pizza'
	var boolMedium = document.getElementById("mediumPizza").checked; // Checkbox statement 'Medium Pizza'
	var boolLarge = document.getElementById("largePizza").checked; // Checkbox statement 'Large Pizza'

	var amountTotal = 0; // Hoeveelheid pizza's in totaal

	if (amountSmall < 0 || amountMedium < 0 || amountLarge < 0){ // Als de hoeveelheid onder de nul zit

		document.getElementById("finalPrice").innerHTML = "The pizza amounts cannot be negative!!!!!!!!!!!!!!!!!!!!!!!!!!" // Stuur een bericht
		return; // Stopt de code
	}

	if (boolSmall == true){ // Als de checkbox gechecked is
		amountTotal += amountSmall*6.49; // Voeg de hoeveelheid * de prijs toe
	}

	if (boolMedium == true){ // Als de checkbox gechecked is
		amountTotal += amountMedium*8.49; // Voeg de hoeveelheid * de prijs toe
	}

	if (boolLarge == true){ // Als de checkbox gechecked is
		amountTotal += amountLarge*11; // Voeg de hoeveelheid * de prijs toe
	}

	if (amountTotal != null){ // Als de hoeveelheid in totaal niet 'null' is
	document.getElementById("finalPrice").innerHTML = "Price: €" + amountTotal.toFixed(2); // Stuur een bericht en rond af op 2 decimalen
	} else { // Als de hoeveelheid in totaal wel 'null' is
	document.getElementById("finalPrice").innerHTML = "Price: €0";	// Stuur een bericht
	}

}