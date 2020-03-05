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

const LeafletMap = ({ data: { confirmed } }) => {
  const position = [ 35.0000, 103.0000 ];

  return (
    <div id="mapid">
      <Map center={position} zoom={4}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {confirmed.locations.map(loc => (
          <Circle
            center={[loc.coordinates.lat, loc.coordinates.long]}
            radius={calculateRadius(loc.latest, 25, 15000, 500000)}
            color="red"
          >
            <Popup>
              <div>
                <h3>{`${loc.province ? loc.province : 'Province not specified'}, ${loc.country}`}</h3>
                <p>{`Confirmed Cases: ${loc.latest}`}</p>
              </div>
            </Popup>
          </Circle>
        ))}
      </Map>
    </div>
  );
};

export default LeafletMap;
