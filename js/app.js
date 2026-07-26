```javascript
// EV Trip Planner
// Application controller
// Version 0.2


// Start de applicatie zodra de pagina klaar is

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

                const from =
                    document.getElementById("from").value;


                const to =
                    document.getElementById("to").value;


                document.getElementById("results").innerHTML =
                `
                <b>Route requested</b>
                <br><br>
                From: ${from}
                <br>
                To: ${to}
                <br><br>
                Next step:
                connect OpenRouteService.
                `;

            }
        );

    }
);
```
