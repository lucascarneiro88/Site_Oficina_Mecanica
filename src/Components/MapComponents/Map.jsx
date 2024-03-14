import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";

function Map() {
  const [route, setRoute] = useState(null); 
  const [userLocation, setUserLocation] = useState(null); 

  useEffect(() => {
    function getUserLocation() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = [position.coords.latitude, position.coords.longitude];
          setUserLocation(userLocation);
        },
        (error) => {
          console.error("Erro ao obter a localização:", error);
        }
      );
    }

    getUserLocation(); 
  }, []);

  useEffect(() => {
    if (userLocation) {
      const workshopLocation = [-27.4663988, -48.7154905];
      fetchRoute(userLocation, workshopLocation);
    }
  }, [userLocation]);

  async function fetchRoute(startPoint, endPoint) {
    try {
      const response = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${startPoint[1]},${startPoint[0]};${endPoint[1]},${endPoint[0]}?overview=full&geometries=geojson`
      );
      const data = await response.json();
      setRoute(data.routes[0].geometry);
    } catch (error) {
      console.error("Erro ao obter rota:", error);
    }
  }

  return (
    <div className="map-container">
      <MapContainer center={userLocation || [-27.4663988, -48.7154905]} zoom={13} scrollWheelZoom={true} className="map">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        {route && (
          <Polyline 
            positions={route.coordinates.map(coord => [coord[1], coord[0]])} 
            color="blue" 
            weight={5} 
            opacity={0.7} 
          />
        )}

        {userLocation && (
          <Marker position={userLocation}>
            <Popup>Sua localização atual</Popup>
          </Marker>
        )}

<Marker position={[-27.4663988, -48.7154905]}>
  <Popup>
    <div>
      <h3>Mauro Mecânico</h3>
      <img src="../img/logo-mecanico.png" alt="Logo Mecânico" style={{ width: '100px' }} />
    </div>
  </Popup>
</Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
