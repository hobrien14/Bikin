
document.addEventListener('DOMContentLoaded', function() {
    var map = L.map("map").setView([39.767482, -105.219832], 10);

    L.esri.basemapLayer("Topographic").addTo(map);

    var trails = L.esri.featureLayer({
        url:"http://maps.jeffco.us/arcgis/rest/services/jMap/OpenSpaceParkTrails/MapServer/3",
        style: function (feature) {
            var c;
            switch (feature.properties.TRAIL_DIFFICULTY_RATING) {
                case 'Least Difficult':
                    c = '#a0b27f';
                    break;
                case 'More Difficult':
                    c = '#FFEB00';
                    break;
                case 'Most Difficult':
                    c = '#e70000';
                    break;
                default:
                    c = '#FFEB00';
                    break;
                                                              }
            return { color: c, opacity: 1, weight: 3 }
        }
    }).addTo(map);

    trails.bindPopup(function (layer) {
        return L.Util.template('<p><h2>{TRAIL_NAME}</h2><h5>{TRAIL_DIFFICULTY_RATING}</h5><h5>{USER_TYPE}</h5></p>', layer.feature.properties);
    });

    L.esri.featureLayer({
        url: 'http://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Tracks/FeatureServer/0',
        style: function (feature) {
            return { color: '#dfa855', opacity: 1, weight: 3 }
        }
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

});
