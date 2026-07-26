
alert("map.js geladen");

let map;


function initializeMap() {

    map = L.map("map").setView(
        [50.8503, 4.3517],
        8
    );


    L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
            "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);

}
