/* global mapboxgl */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicGFyaXNhbW9udGlpIiwiYSI6ImNtczRtdW9vczBreW4yeHFzYTgxaDB6dm8ifQ.KLJlYygJ1OfjDux5wp00ag';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((location) => {
    const marker = document.createElement('div');
    marker.className = 'marker';

    new mapboxgl.Marker({
      element: marker,
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
    padding: 200,
  });
};
