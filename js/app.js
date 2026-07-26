document.addEventListener(
    "DOMContentLoaded",
    function () {


        initializeMap();


        const button = document.getElementById(
            "calculateButton"
        );


        button.addEventListener(
            "click",
            function () {

const from = document.getElementById("from").value;
const to = document.getElementById("to").value;
const distance = document.getElementById("distance").value;
const detour = document.getElementById("detour").value;
const power = document.getElementById("power").value;


document.getElementById("results").innerHTML =
    `
    <strong>Trip information</strong><br><br>

    From: ${from}<br>
    Destination: ${to}<br>
    Charging interval: ${distance} km<br>
    Maximum detour: ${detour} km<br>
    Minimum charging power: ${power} kW
    `;


            }
        );


    }
);
