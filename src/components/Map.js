"use client";
import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 45.9630011,
  lng: 14.5302547,
};

const mapStyles = [
  {
    elementType: "geometry",
    stylers: [{ color: "#181818" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#fcf4c5" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#181818" }],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#81807c" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#d3d3d3" }],
  },
];

const Map = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAX0ePeW-44NQvzTRQR3QA8qFE_IziOnDw",
  });

  const [marker, setMarker] = useState(null);

  const onLoad = useCallback((mapInstance) => {
    console.log("Map loaded", mapInstance);
    mapInstance.setZoom(19);
    mapInstance.setCenter(center);

    const newMarker = new google.maps.Marker({
      position: center,
      map: mapInstance,
      title: "Hello World!",
    });
    setMarker(newMarker);
  }, []);

  const onUnmount = useCallback(() => {
    console.log("Map unmounted");
    setMarker(null);
  }, []);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={19}
      options={{ styles: mapStyles }}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {marker && <Marker position={center} />}
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
};

export default Map;
