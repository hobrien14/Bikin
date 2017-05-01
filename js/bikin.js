document.addEventListener('DOMContentLoaded', function () {
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
    /*
        your code will go here
        */

});