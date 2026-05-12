var wms_layers = [];

var format_minerroad_0 = new ol.format.GeoJSON();
var features_minerroad_0 = format_minerroad_0.readFeatures(json_minerroad_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_minerroad_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_minerroad_0.addFeatures(features_minerroad_0);
var lyr_minerroad_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_minerroad_0, 
                style: style_minerroad_0,
                popuplayertitle: 'miner road',
                interactive: true,
                title: '<img src="styles/legend/minerroad_0.png" /> miner road'
            });
var format_mainroads_1 = new ol.format.GeoJSON();
var features_mainroads_1 = format_mainroads_1.readFeatures(json_mainroads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mainroads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mainroads_1.addFeatures(features_mainroads_1);
var lyr_mainroads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mainroads_1, 
                style: style_mainroads_1,
                popuplayertitle: 'main roads',
                interactive: true,
                title: '<img src="styles/legend/mainroads_1.png" /> main roads'
            });
var format_woodloat_2 = new ol.format.GeoJSON();
var features_woodloat_2 = format_woodloat_2.readFeatures(json_woodloat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_woodloat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_woodloat_2.addFeatures(features_woodloat_2);
var lyr_woodloat_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_woodloat_2, 
                style: style_woodloat_2,
                popuplayertitle: 'woodloat',
                interactive: true,
                title: '<img src="styles/legend/woodloat_2.png" /> woodloat'
            });
var format_buildings_3 = new ol.format.GeoJSON();
var features_buildings_3 = format_buildings_3.readFeatures(json_buildings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_3.addFeatures(features_buildings_3);
var lyr_buildings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_3, 
                style: style_buildings_3,
                popuplayertitle: 'buildings',
                interactive: true,
                title: '<img src="styles/legend/buildings_3.png" /> buildings'
            });
var format_hostels_4 = new ol.format.GeoJSON();
var features_hostels_4 = format_hostels_4.readFeatures(json_hostels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hostels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hostels_4.addFeatures(features_hostels_4);
var lyr_hostels_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hostels_4, 
                style: style_hostels_4,
                popuplayertitle: 'hostels',
                interactive: true,
                title: '<img src="styles/legend/hostels_4.png" /> hostels'
            });
var format_ground_5 = new ol.format.GeoJSON();
var features_ground_5 = format_ground_5.readFeatures(json_ground_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ground_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ground_5.addFeatures(features_ground_5);
var lyr_ground_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ground_5, 
                style: style_ground_5,
                popuplayertitle: 'ground',
                interactive: true,
                title: '<img src="styles/legend/ground_5.png" /> ground'
            });
var format_parkingpoints_6 = new ol.format.GeoJSON();
var features_parkingpoints_6 = format_parkingpoints_6.readFeatures(json_parkingpoints_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parkingpoints_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parkingpoints_6.addFeatures(features_parkingpoints_6);
var lyr_parkingpoints_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parkingpoints_6, 
                style: style_parkingpoints_6,
                popuplayertitle: 'parking points',
                interactive: true,
                title: '<img src="styles/legend/parkingpoints_6.png" /> parking points'
            });
var format_points_7 = new ol.format.GeoJSON();
var features_points_7 = format_points_7.readFeatures(json_points_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_7.addFeatures(features_points_7);
var lyr_points_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_points_7, 
                style: style_points_7,
                popuplayertitle: 'points',
                interactive: true,
                title: '<img src="styles/legend/points_7.png" /> points'
            });

lyr_minerroad_0.setVisible(true);lyr_mainroads_1.setVisible(true);lyr_woodloat_2.setVisible(true);lyr_buildings_3.setVisible(true);lyr_hostels_4.setVisible(true);lyr_ground_5.setVisible(true);lyr_parkingpoints_6.setVisible(true);lyr_points_7.setVisible(true);
var layersList = [lyr_minerroad_0,lyr_mainroads_1,lyr_woodloat_2,lyr_buildings_3,lyr_hostels_4,lyr_ground_5,lyr_parkingpoints_6,lyr_points_7];
lyr_minerroad_0.set('fieldAliases', {'id': 'id', });
lyr_mainroads_1.set('fieldAliases', {'id': 'id', });
lyr_woodloat_2.set('fieldAliases', {'id': 'id', });
lyr_buildings_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'tower_type': 'tower_type', 'man_made': 'man_made', 'amenity': 'amenity', 'tourism': 'tourism', });
lyr_hostels_4.set('fieldAliases', {'id': 'id', });
lyr_ground_5.set('fieldAliases', {'id': 'id', });
lyr_parkingpoints_6.set('fieldAliases', {'id': 'id', 'shp': 'shp', });
lyr_points_7.set('fieldAliases', {'id': 'id', });
lyr_minerroad_0.set('fieldImages', {'id': 'TextEdit', });
lyr_mainroads_1.set('fieldImages', {'id': 'TextEdit', });
lyr_woodloat_2.set('fieldImages', {'id': 'TextEdit', });
lyr_buildings_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'tower_type': '', 'man_made': '', 'amenity': '', 'tourism': '', });
lyr_hostels_4.set('fieldImages', {'id': '', });
lyr_ground_5.set('fieldImages', {'id': 'TextEdit', });
lyr_parkingpoints_6.set('fieldImages', {'id': '', 'shp': '', });
lyr_points_7.set('fieldImages', {'id': '', });
lyr_minerroad_0.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_mainroads_1.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_woodloat_2.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_buildings_3.set('fieldLabels', {'full_id': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_type': 'inline label - always visible', 'building': 'inline label - always visible', 'tower_type': 'inline label - always visible', 'man_made': 'inline label - always visible', 'amenity': 'inline label - always visible', 'tourism': 'inline label - always visible', });
lyr_hostels_4.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_ground_5.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_parkingpoints_6.set('fieldLabels', {'id': 'inline label - always visible', 'shp': 'inline label - always visible', });
lyr_points_7.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_points_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});