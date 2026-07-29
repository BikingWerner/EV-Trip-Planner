async function geocode(place) {

    const url =
        "https://nominatim.openstreetmap.org/search?format=jsonv2&q="
        + encodeURIComponent(place);

    const response = await fetch(url, {
        headers: {
            "Accept": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error("Plaats niet gevonden.");
    }

    const data = await response.json();

    if (data.length === 0) {
        throw new Error("Plaats niet gevonden.");
    }

    return [
        parseFloat(data[0].lon),
        parseFloat(data[0].lat)
    ];

}



async function calculateRoute(from, to) {

    // Plaatsnamen omzetten naar coördinaten
    const fromCoords = await geocode(from);
    const toCoords = await geocode(to);

    // Route opvragen
    const response = await fetch(
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

    if (!response.ok) {
        throw new Error("Route kon niet worden berekend.");
    }

    return await response.json();

}
