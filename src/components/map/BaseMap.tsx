"use client";

import {
  MapContainer as LeafletMapContainer,
  TileLayer as LeafletTileLayer,
} from "react-leaflet";
import type { LatLngExpression } from "leaflet";

const BELEM_CENTER: LatLngExpression = [-1.455833, -48.503889];

const MapContainer: any = LeafletMapContainer;
const TileLayer: any = LeafletTileLayer;

export default function BaseMap() {
  return (
    <div className="w-full h-[80vh]">
      <MapContainer
        center={BELEM_CENTER}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
