import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useState } from "react";
import { useUser } from "../../../context/UserContext";

interface MapProps {
  destination: string | undefined;
}

const Map: React.FC<MapProps> = ({ destination }) => {
  const { user } = useUser();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_KEY,
  });

  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);

  if (!isLoaded) return null;

  async function calculateRoute() {
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: user?.postal_code ?? "",
      destination: destination ?? "",
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
  }
  calculateRoute();

  return (
    <GoogleMap
      zoom={15}
      mapContainerStyle={{ width: "40vw", height: "40vh" }}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      {directionsResponse && (
        <DirectionsRenderer directions={directionsResponse} />
      )}
    </GoogleMap>
  );
};

export default Map;
