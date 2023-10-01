
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const CampusMap = () => {
    const center = [40.736238, -73.818048]; // Lat, Long for initial map center (change as needed)

    return (
        <MapContainer center={center} zoom={20} style={{ height: "100svh", width: "100svw" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Url for fetching tile from OpenStreetMap
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center}>
                <Popup>
                    Queens College Center!
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default CampusMap;
