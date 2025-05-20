import { useState, useEffect } from 'react';

export default function useUserLocation() {
  const [location, setLocation] = useState(null);  
  const [error, setError] = useState(null);        

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('This browser does not support Geolocation.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        setError(`Failed Location: ${err.message}`);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  return { location, error };
}
