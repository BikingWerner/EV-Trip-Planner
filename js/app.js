alert("app.js geladen");


document.addEventListener(
    "DOMContentLoaded",
    function () {

        alert("pagina klaar");


        const button = document.getElementById(
            "calculateButton"
        );


        alert(button);


        button.addEventListener(
            "click",
            function () {

                alert("Knop werkt!");

            }
        );

    }
);
