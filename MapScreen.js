import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { IoMdNavigate, IoMdPin } from 'react-icons/io';
import L from 'leaflet';

const MapScreen = () => {
  const mockLocation = { lat: 40.7128, lng: -74.0060 };
  const mockRoute = [
    { lat: 40.7128, lng: -74.0060, name: 'Start Point' },
    { lat: 40.7180, lng: -74.0020, name: 'Checkpoint 1' },
    { lat: 40.7250, lng: -73.9950, name: 'Finish Line' },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Route Map</h1>
      
      <div className="bg-fr-card p-4 rounded-xl border border-fr-border">
        <div className="flex items-center gap-2 mb-3">
          <IoMdNavigate className="text-fr-green text-xl" />
          <span className="font-semibold">Live Route</span>
        </div>
        
        <div className="h-64 rounded-lg overflow-hidden border border-fr-border bg-black/30">
          <MapContainer 
            center={[mockLocation.lat, mockLocation.lng]} 
            zoom={14} 
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
            {mockRoute.map((point, idx) => (
              <Marker key={idx} position={[point.lat, point.lng]}>
                <Popup>{point.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-fr-card p-3 rounded-lg border border-fr-border">
          <div className="text-xs text-fr-gray-text mb-1">DISTANCE</div>
          <div className="text-2xl font-bold">2.4 km</div>
        </div>
        <div className="bg-fr-card p-3 rounded-lg border border-fr-border">
          <div className="text-xs text-fr-gray-text mb-1">ELEVATION</div>
          <div className="text-2xl font-bold">+45 m</div>
        </div>
      </div>

      <div className="bg-fr-card p-4 rounded-lg border border-fr-border">
        <h3 className="font-semibold mb-3">Checkpoints</h3>
        <div className="space-y-2">
          {mockRoute.map((point, idx) => (
            <div key={idx} className="flex items-center gap-3 p-2 bg-black/20 rounded-lg">
              <IoMdPin className="text-fr-green" />
              <div>
                <div className="text-sm font-medium">{point.name}</div>
                <div className="text-xs text-fr-gray-text">{idx === 0 ? 'Start' : idx === mockRoute.length - 1 ? 'Finish' : `Checkpoint ${idx}`}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapScreen;