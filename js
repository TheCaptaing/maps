let m = document.querySelector('.find-btn')
let a = document.querySelector('#map')
m.addEventListener('click', function() {
    navigator.geolocation.getCurrentPosition(function(pos) {
        m.style.display = 'none'
        a.style.display = 'block'
        let lat = pos.coords.latittude
        let lon = pos.coords.longittude
        let map = new OpenLayers.Map('map')
        let map_layer = new OpenLayers.Layer.OSM()
        let fromProj = new OpenLayers.Projection('EPSG:4326')
        let toProj = new OpenLayers.Projection('EPSG:900913')
        let position = new OpenLayers.LonLat(lon, lat).transform(fromProj, toProj)
        let zoom = 18
        map.addLayer(map_layer)
        map.setCenter(position, zoom)
    })
})
