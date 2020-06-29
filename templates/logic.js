
var myMap = L.map("map", {
    center: [39.8719, 11.5674],
    zoom: 3
  });
  

  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

  var marker = L.marker([60.1699, 24.9384], {
    draggable: true,
    title: "My First Marker"
  }).addTo(myMap);
  
  // Binding a pop-up to our marker
  marker.bindPopup("Hello There!");