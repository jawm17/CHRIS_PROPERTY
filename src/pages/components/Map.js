import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix marker icon path
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon,
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const Map = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Create map instance
      const map = L.map(mapContainerRef.current, {
        scrollWheelZoom: false, // Disable scroll wheel zoom
      }).setView([34.5199, -105.8701], 7); // Coordinates for New Mexico

      // Add tile layer to the map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add marker to the map for New Mexico
      const marker = L.marker([34.5199, -105.8701]).addTo(map);
      marker.bindPopup('New Mexico');

      mapRef.current = map;
    }
  }, []);

  return <div ref={mapContainerRef} style={{ margin: "auto", width: '75%', height: '700px' }} />;
};

export default Map;

