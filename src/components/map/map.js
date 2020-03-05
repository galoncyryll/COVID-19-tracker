import React from "react";
import { Map, TileLayer, Circle, Popup } from "react-leaflet";

const calculateRadius = (cases, multiplier, min, max) => {
  // Calculate radius.
  const radius = cases * multiplier;

  // Check for min and max.
  if (radius < min) return min;
  if (radius > max) return max;

  // Return radius.
  return radius;
}

const LeafletMap = ({ data: { confirmed, deaths, recovered } }) => {
  const position = [ 35.0000, 103.0000 ];
  return (
    <div id="mapid">
      <Map center={position} zoom={4}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {confirmed.locations.map((loc, i) => (
          <Circle
            center={[loc.coordinates.lat, loc.coordinates.long]}
            radius={calculateRadius(loc.latest, 25, 15000, 500000)}
            color="red"
            key={i}
          >
            <Popup>
              <div>
                <h3>{`${loc.province ? loc.province : 'Province not specified'}, ${loc.country}`}</h3>
                <p>{`Confirmed Cases: ${loc.latest}`}</p>
                <p>{`Deaths: ${deaths.locations[i].latest}`}</p>
                <p>{`Recovered: ${recovered.locations[i].latest}`}</p>
              </div>
            </Popup>
          </Circle>
        ))}
      </Map>
    </div>
  );
};

export default LeafletMap;
