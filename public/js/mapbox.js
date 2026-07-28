/* global mapboxgl */

const mapElement = document.getElementById('map');

if (mapElement) {
  const locations = JSON.parse(mapElement.dataset.locations);

  mapboxgl.accessToken =
    'pk.eyJ1IjoicGFyaXNhbW9udGlpIiwiYSI6ImNtczRtdW9vczBreW4yeHFzYTgxaDB6dm8ifQ.KLJlYygJ1OfjDux5wp00ag';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((location) => {
    const markerElement = document.createElement('div');
    markerElement.className = 'marker';

    new mapboxgl.Marker({
      element: markerElement,
      anchor: 'bottom',
    })
      .setLngLat(location.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
      closeOnClick: false,
    })
      .setLngLat(location.coordinates)
      .setHTML(`<p>Day ${location.day}: ${location.description}</p>`)
      .addTo(map);

    bounds.extend(location.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
}
