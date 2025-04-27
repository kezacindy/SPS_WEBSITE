require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Search",
    "esri/Graphic",
    "esri/layers/GraphicsLayer"
], function(Map, MapView, Search, Graphic, GraphicsLayer) {
    
    // Create a map
    const map = new Map({
        basemap: "streets-navigation-vector"
    });
    
    // Create the map view
    const view = new MapView({
        container: "esriMap",
        map: map,
        center: [30.1133, -1.9563], // Centered on Remera area
        zoom: 15
    });
    
    // Add a graphics layer for the police station marker
    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
    
    // Create a point for the police station at KG 178 ST (Zigama CSS branch in Remera)
    const point = {
        type: "point",
        longitude: 30.1133, // Coordinates for Zigama CSS in Remera
        latitude: -1.9563
    };
    
    // Create a symbol for the point
    const markerSymbol = {
        type: "simple-marker",
        color: [0, 70, 173], // Blue color matching your theme
        outline: {
            color: [255, 255, 255],
            width: 2
        },
        size: 15
    };
    
    // Create a graphic with the point and symbol with left-aligned popup content
    const pointGraphic = new Graphic({
        geometry: point,
        symbol: markerSymbol,
        popupTemplate: {
            title: "<span style='font-weight: bold; color: #00468D; font-size: 16px; text-align: left; display: block;'>Smart Police Services Kiosk</span>",
            content: [
                {
                    type: "text",
                    text: "<div style='font-family: Arial, sans-serif; padding: 10px 0; text-align: left;'>" +
                          "<p style='margin: 5px 0;'><strong>Address:</strong> KG 178 ST, Remera</p>" +
                          "<p style='margin: 5px 0;'><strong>P.O. Box:</strong> 6304, Kigali, Rwanda</p>" +
                          "</div>"
                }
            ]
        }
    });
    
    // Add the graphic to the layer
    graphicsLayer.add(pointGraphic);
    
    // Add a search widget
    const search = new Search({
        view: view
    });
    
    // Add the search widget to the top right corner of the view
    view.ui.add(search, {
        position: "top-right"
    });
    
    // When the view is ready, show the marker popup
    view.when(function() {
        // Wait for the view to load
        setTimeout(function() {
            view.popup.open({
                features: [pointGraphic],
                location: point
            });
        }, 1000);
    });
});