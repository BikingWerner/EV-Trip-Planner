async function calculateRoute(from, to) {


    const url =
        "https://api.openrouteservice.org/geocode/search?api_key="
        + window.ORS_API_KEY
        + "&text=";


console.log("Geocoding from:", from);

const fromResponse =
    await fetch(url + encodeURIComponent(from));

console.log("From response:", fromResponse);


    const fromData =
        await fromResponse.json();


    console.log("Geocoding to:", to);

const toResponse =
    await fetch(url + encodeURIComponent(to));

console.log("To response:", toResponse);


    const toData =
        await toResponse.json();



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
