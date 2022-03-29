let input = document.getElementById("input-el");
// input * 3,281 // Gallons * 3,785 // Kilos - 2,205
let mass = document.getElementById("mass-el")
let volume = document.getElementById("volume-el")
let length = document.getElementById("length-el")

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      convert();
    }
});

function convert() {
    let newInput = Number(input.value)
    console.log(newInput)
    
    let feet = newInput * 3.281;
    let gallons = newInput * 3.785;
    let pounds = newInput * 2.205;
    let metres = newInput / 3.281;
    let liters = newInput / 3.785;
    let kilos = newInput /  2.205;
    //  let newNum = Number(input.textContent)
    length.textContent = `${newInput} meters = ${feet.toFixed(3)} feet | ${newInput} feet = ${metres.toFixed(3)} meters`;
    volume.textContent = `${newInput} liters = ${gallons.toFixed(3)} gallons | ${newInput} gallons = ${liters.toFixed(3)} liters`;
    mass.textContent = `${newInput} kilos = ${pounds.toFixed(3)} pounds | ${newInput} pounds = ${kilos.toFixed(3)} kilos`;
}