```javascript
// EV Trip Planner
// Map module
// Version 0.2


let map;
let routeLayer;


// Initialiseer de kaart

function initializeMap() {

    map = L.map('map').setView(
        [50.8503, 4.3517],   // België (centrum)
        8
    );


    L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution:
            '&copy; OpenStreetMap contributors'
        }
    ).addTo(map);


    routeLayer = L.layerGroup().addTo(map);

}



// Teken een route op de kaart

function drawRoute(coordinates) {


    // verwijder vorige route

    routeLayer.clearLayers();


    const route = L.polyline(
        coordinates,
        {
            weight: 5
        }
    );


    route.addTo(routeLayer);


    // zoom kaart naar route

    map.fitBounds(
        route.getBounds()
    );

}
```
