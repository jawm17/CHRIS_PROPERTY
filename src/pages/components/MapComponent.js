import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MapComponent = (props) => {
  const [center, setCenter] = useState([27.797673835318935, -97.08721339030625]);

  useEffect(() => {
    if (props.mapCenter) {
      setCenter(props.mapCenter);
    } else {
      setCenter([27.797673835318935, -97.08721339030625]);
    }
  }, [props.mapCenter])

  const markerIcon = L.icon({
    iconUrl: 'https://www.pngall.com/wp-content/uploads/10/Map-Marker-PNG-Image.png', // Replace with the URL or path to your marker icon image
    iconSize: [35, 35],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
  });

  const markerPosition = [27.797673835318935, -97.08721339030625]; // Specify the latitude and longitude of the marker position
  const Location1 = [27.829460881886035, -97.08473664349712]; // Port A Nature Preserve // 8 Min drive
  const Location2 = [27.79685292375124, -97.08761306786688] // Palmilla Beach Golf Club // 3 min drive
  const Location3 = [27.80780654696457, -97.0863515205597] // The Phoenix Restaurant & Bar // 4 min drive
  const Location4 = [27.67468665345304, -97.17639163670216] // Mustang Island State Park // 12 min drive


  return (
    <MapContainer zoomControl={false} key={center.toString()} center={center} zoom={12} style={{ margin: "auto", width: '75%', height: '300px', borderRadius: 8 }} >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* Add other map components, markers, etc. */}
      <Marker position={markerPosition} icon={markerIcon}>
      </Marker>
      <Marker position={Location1} icon={markerIcon}>
      </Marker>
      {/* <Marker position={Location2} icon={markerIcon}>
      </Marker> */}
      <Marker position={Location3} icon={markerIcon}>
      </Marker>
      <Marker position={Location4} icon={markerIcon}>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

