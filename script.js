// Create the interactive map
const map = L.map("map").setView(
    [41.4993, -81.6944],
    13
);

// Add the map background
L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    {
        maxZoom: 19,
        attribution: "Tiles &copy; Esri"
    }
).addTo(map);

// Add a sample marker
const marker = L.marker(
    [41.4993, -81.6944]
).addTo(map);

// Show information when clicked
marker.bindPopup(`
    <h3>Welcome to SoleMate!</h3>
    <p>Your sidewalk safety map is working!</p>
`)