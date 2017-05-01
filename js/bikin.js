document.addEventListener('DOMContentLoaded', function() {
    var map = L.map("map").setView([39.767482, -105.219832], 10);

    L.esri.basemapLayer("Topographic").addTo(map);
    
    L.esri.featureLayer({
        url: 'http://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Tracks/FeatureServer/0'
    }).addTo(map);

    L.esri.featureLayer({
        url: 'http://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Tracks/FeatureServer/1'
    }).addTo(map);

    L.esri.featureLayer({
        url: 'http://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Tracks/FeatureServer/2'
    }).addTo(map);

    L.esri.featureLayer({
        url: 'http://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Tracks/FeatureServer/3'
    }).addTo(map);

    L.esri.featureLayer({
        url: 'http://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Tracks/FeatureServer/4'
    }).addTo(map);
    
    var trails = L.esri.featureLayer({url:"http://maps.jeffco.us/arcgis/rest/services/jMap/OpenSpaceParkTrails/MapServer/3"}).addTo(map);

trails.bindPopup(function (layer) {
  return L.Util.template('<p><h2>{TRAIL_NAME}</h2><h5>{TRAIL_DIFFICULTY_RATING}</h5><h5>{USER_TYPE}</h5></p>', layer.feature.properties);
});
    
    function showLatLng(e) {
  document.getElementById("whatIsThis").innerText =  "Bell Joy Ride is a program that encourages women to get out and mountain bike. The trails shown are the group ride trails that will be happening in the summer of 2017."
}
map.on('mousemove', showLatLng);
    /*
        your code will go here
        */

});   /*
    your code will go here
    */
    
});