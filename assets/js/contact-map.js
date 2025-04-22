// Initialize the Esri map
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
        center: [30.0619, -1.9441], // Kigali, Rwanda coordinates
        zoom: 15
    });
    
    // Add a graphics layer for the police station marker
    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
    
    // Create a point for the police station
    const point = {
        type: "point",
        longitude: 30.0619,
        latitude: -1.9441 // Use actual coordinates for your police station
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
    
    // Create a graphic with the point and symbol
    const pointGraphic = new Graphic({
        geometry: point,
        symbol: markerSymbol,
        popupTemplate: {
            title: "Smart Police Services Headquarters",
            content: "P.O. Box 6304, Kigali, Rwanda"
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