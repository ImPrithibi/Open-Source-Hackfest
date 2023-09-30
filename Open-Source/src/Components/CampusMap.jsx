
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const CampusMap = () => {
    const center = [ 40.736329, -73.820070]; // Lat, Long for initial map center (change as needed)

    return (
        <MapContainer center={center} zoom={20} style={{ height: "500px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Url for fetching tile from OpenStreetMap
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center}>
                <Popup>
                    A sample marker!
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default CampusMap;
