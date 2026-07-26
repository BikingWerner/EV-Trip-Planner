async function calculateRoute(from, to) {


    const url =
        "https://api.openrouteservice.org/geocode/search?api_key="
        + ORS_API_KEY
        + "&text=";


    const fromResponse =
        await fetch(url + encodeURIComponent(from));


    const fromData =
        await fromResponse.json();


    const toResponse =
        await fetch(url + encodeURIComponent(to));


    const toData =
        await toResponse.json();



    const fromCoords =
        fromData.features[0].geometry.coordinates;


    const toCoords =
        toData.features[0].geometry.coordinates;



    const routeResponse =
        await fetch(
            "https://api.openrouteservice.org/v2/directions/driving-car/geojson",
            {
                method: "POST",

                headers: {
                    "Authorization": ORS_API_KEY,
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    coordinates: [
                        fromCoords,
                        toCoords
                    ]
                })

            }
        );


    const routeData =
        await routeResponse.json();


    return routeData;

}
