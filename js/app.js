document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeMap();


        const button =
            document.getElementById("calculateButton");


        button.addEventListener(
            "click",
            function () {

                document.getElementById("results").innerHTML =
                "Knop werkt!";

            }
        );

    }
);
