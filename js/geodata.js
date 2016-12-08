var mymap = L.map('mapid').setView([52.5, 13.5], 10);

var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>',
maxZoom: 18
}).addTo(mymap);

var marker = L.marker([52.49038, 13.4133]).addTo(mymap);



