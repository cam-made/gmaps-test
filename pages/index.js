import React, { useState, useEffect, useRef } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import styles from "../styles/Home.module.css";

function MyMapComponent({ center, zoom, latLngs }) {
  const ref = useRef();
  const mapRef = useRef();
  const markersRef = useRef([]);

  useEffect(() => {
    mapRef.current = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  useEffect(() => {
    if (mapRef.current) {
      latLngs.map((myLatlng) => {
        const marker = new window.google.maps.Marker({
          position: myLatlng,
          map: mapRef.current,
          title: "Hello World!",
        });
        markersRef.current.push(marker);
      });

      const bounds = new window.google.maps.LatLngBounds();
      if (markersRef.current.length >= 1) {
        for (var i = 0; i < markersRef.current.length; i++) {
          bounds.extend(markersRef.current[i].getPosition());
        }
        mapRef.current.fitBounds(bounds);
      }
    }
  }, [latLngs]);

  return <div ref={ref} className={styles.map} />;
}

export default function App() {
  const [collectionPoints, setCollectionPoints] = useState([
    { lat: -34.397, lng: 150.644 },
  ]);

  const addCollectionPoint = () => {
    const lastPoint = collectionPoints[collectionPoints.length - 1];
    const newCollectionPoints = [
      ...collectionPoints,
      {
        lat: lastPoint.lat + Math.random() * 2 - 1,
        lng: lastPoint.lng + Math.random() * 2 - 1,
      },
    ];

    setCollectionPoints(newCollectionPoints);
  };

  return (
    <div className={styles.container}>
      <button onClick={addCollectionPoint}>Add marker</button>
      <Wrapper apiKey={process.env.gmapsApiKey}>
        <MyMapComponent
          latLngs={collectionPoints}
          center={collectionPoints[0]}
          zoom={8}
        />
      </Wrapper>
    </div>
  );
}
