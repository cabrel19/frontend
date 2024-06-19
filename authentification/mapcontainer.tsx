// MapContainer.jsx

import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps';

const MapContainer = () => {
  const apiKey = 'AIzaSyBXJ_jco0wIOiAqlGOofYipRBGTw54ut5k'; // Remplacez par votre propre clé API

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={{ lat: 48.8566, lng: 2.3522 }} // Coordonnées du centre de la carte
        zoom={10} // Niveau de zoom
      />
    </LoadScript>
  );
};

export default MapContainer;
