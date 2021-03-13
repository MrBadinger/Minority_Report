var data_path = "resources/GeoIncident.json"
var shape_file = "resources/Minneapolis_Neighborhoods.geojson"

//retrieve json data and execute createMap function
d3.json(data_path, function(data) {
  var crimeData = data.features;
  
  d3.json(shape_file, function(data) {
    // Store plate tectonic JSON response object into variable
    var shapeData = data.features;

    createMap(crimeData, shapeData);
  });
});

function createMap(crimeData, shapeData) {     

  d3.json(data_path, function(data) {

    // console.log(data.features);
     var markers = L.markerClusterGroup();
  
     var features = data.features
  
      for (var i = 0; i < features.length; i++) {
          var location = features[i].geometry;        
  
      if (location) {
         markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
         .bindPopup("Crime: " + features[i].properties.description + "<br>Date:" + features[i].properties.incidentDate))
          
      }
  
    }  

   // create tetonic plates layer
   shapeLayer = L.geoJSON(shapeData, {
    onEachFeature: makePolyline,
      style: {
        color: 'purple',
        opacity: 0.9
      }
  }); 
  
  // create street map layer
  var streetLayer = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });  

  // create dark map layer
  var darkLayer = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
  });

  // create light map layer
  var lightLayer = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
  });

  // create satellite map layer
  var satelliteLayer = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "satellite-v9",
  accessToken: API_KEY
  });

  // generate the tetonic plate polyline
  function makePolyline(feature, layer){
    L.polyline(feature.geometry.coordinates);
  }

  // create overlay maps
  var overlayMaps = {
    Incidents: markers,
    Neighborhoods : shapeLayer
  };

  // Create and center map
  var myMap = L.map("map", {
    center: [44.9778, -93.2650],
    zoom: 11,
    layers: [satelliteLayer,shapeLayer]
  });

  myMap.addLayer(markers);

  // create base map variable
  var baseMaps = {
    "Street Map": streetLayer,
    "Dark Map": darkLayer,
    "Light Map": lightLayer, "Satellite Layer" : satelliteLayer
  };

   ///////////////////////////////////////////////////////////////////////////////////////////
  // add layer control 
  ///////////////////////////////////////////////////////////////////////////////////////////
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);



});

}

