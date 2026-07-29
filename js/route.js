async function calculateRoute(from, to) {


const fromResponse = await fetch(
    "https://api.openrouteservice.org/geocode/search?text=" +
    encodeURIComponent(from),
    {
        headers: {
            "Authorization": window.ORS_API_KEY,
            "Accept": "application/json"
        }
    }
);

console.log("From response:", fromResponse);


    const fromData =
        await fromResponse.json();


    console.log("Geocoding to:", to);

    
    const toResponse = await fetch(
    "https://api.openrouteservice.org/geocode/search?text=" +
    encodeURIComponent(to),
    {
        headers: {
            "Authorization": window.ORS_API_KEY,
            "Accept": "application/json"
        }
    }
);



    const fromCoords =
        fromData.features[0].geometry.coordinates;


    const toCoords =
        toData.features[0].geometry.coordinates;



    console.log("Requesting route...");
    const routeResponse =
        await fetch(
            "https://api.openrouteservice.org/v2/directions/driving-car/geojson",
            {
                method: "POST",

                headers: {
                    "Authorization": window.ORS_API_KEY,
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
