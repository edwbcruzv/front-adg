import React from 'react'
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Mapa.css'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Mapa = () => {

  const MarkerIcon = L.icon({
          iconUrl: icon,
          shadowUrl: iconShadow
  });

  const position=[19.4134913,-99.2486602]
  return (
    
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={MarkerIcon}>
          <Popup>
            Señaal
          </Popup>
        </Marker>
      </MapContainer>
    
  )
}

export default Mapa