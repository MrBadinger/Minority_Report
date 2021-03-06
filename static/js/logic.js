var data_path = "incident_data/yearly_incident_data/GeoObs.json"

// Creating map object
var myMap = L.map("map", {
    center: [44.9778, -93.2650],
    zoom: 11
  });
  
  // Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/dark-v10",
    accessToken: API_KEY
}).addTo(myMap);


d3.json(data_path, function(data) {

   console.log(data.features);
   var markers = L.markerClusterGroup();

   features = data.features

    for (var i = 0; i < features.length; i++) {
        var location = features[i].geometry;
        //console.log(location)
    if (location) {
       markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]]))
        
    }

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});

           
