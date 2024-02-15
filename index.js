/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const toConvert = document.getElementById("input-el")
const lengthConv = document.getElementById("length-conv")
const volumeConv = document.getElementById("volume-conv")
const massConv = document.getElementById("mass-conv")
const convBtn = document.getElementById("convert-btn")

toConvert.value = ""

convBtn.addEventListener("click", function() {
    let inputMF = toConvert.value * 3.281
    let inputFM = toConvert.value / 3.281
    let inputLG = toConvert.value * 0.264
    let inputGL = toConvert.value / 0.264
    let inputKGLB = toConvert.value * 2.204
    let inputLBKG = toConvert.value / 2.204
    
    lengthConv.innerHTML = `${toConvert.value} meters = ${inputMF.toFixed(3)} feet | ${toConvert.value} feet = ${inputFM.toFixed(3)} meters`
    
    volumeConv.innerHTML = `${toConvert.value} liters = ${inputLG.toFixed(3)} gallons | ${toConvert.value} gallons = ${inputGL.toFixed(3)} liters`
    
    massConv.innerHTML = `${toConvert.value} kilograms = ${inputKGLB.toFixed(3)} pounds | ${toConvert.value} pounds = ${inputLBKG.toFixed(3)} kilograms`
})