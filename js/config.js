```javascript
// EV Trip Planner
// Configuration
// Version 0.2


// OpenRouteService API key
//
// Vul hier jouw persoonlijke API key in.
// Deel deze sleutel niet publiek.
//
// Voorbeeld:
// const ORS_API_KEY = "abc123";


const ORS_API_KEY = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImIzM2U2Y2E1NDc0YjQ0MDc4NjFiZTY2YmE2MDQyOTdkIiwiaCI6Im11cm11cjY0In0=";


// Standaard instellingen voor de planner

const DEFAULT_SETTINGS = {

    // gewenste afstand tussen laadstops (km)
    chargingDistance: 200,

    // maximale afwijking van de route (km)
    maxDetour: 5,

    // minimum laadvermogen (kW)
    minimumPower: 150

};
```
