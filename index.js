
let number = parseInt(prompt("Insert number to convert: "));  //Prompt to insert number to convert

let numberInserted = document.getElementById("input")
numberInserted.textContent = number

// Converting Length
let meterToFeet = number * 3.28084
let feetToMeter = number / 3.28084
let mTF = meterToFeet.toFixed(3)  //Reducing decimal numbers to 3
let fTM = feetToMeter.toFixed(3)

let lengthResult = document.getElementById("length")
lengthResult.textContent = number + " meters = " + mTF + " feet | " + number + " feet = " + fTM + " meters"
 

// Converting Volume
let litreToGallon = number * 0.264172
let gallonToLitre = number / 0.264172
let lTG = litreToGallon.toFixed(3)
let gTL = gallonToLitre.toFixed(3)

let volumeResult = document.getElementById("volume")
volumeResult.textContent = number + " litres = " + lTG + " gallons | " + number + " gallons = " + gTL + " litres"

// Converting Mass
let kiloToPound = number * 2.2046
let poundToKilo = number / 2.2046
let kTP = kiloToPound.toFixed(3)
let pTK = poundToKilo.toFixed(3)

let massResult = document.getElementById("mass")
massResult.textContent = number + " kilos = " + kTP + " pounds | " + number + " pounds = " + pTK + " kilos" 

