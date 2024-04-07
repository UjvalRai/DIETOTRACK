import React, { useState } from 'react';
import axios from 'axios';

const LocationData = ({ latitude, longitude }) => {
  const [locationData, setLocationData] = useState(null);

  const fetchLocationData = async () => {
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?key=YOUR_API_KEY&q=${latitude}+${longitude}&pretty=1`);
      setLocationData(response.data.results[0].components);
    } catch (error) {
      console.error('Error fetching location data:', error);
    }
  };

  // Fetch location data when component mounts
  useState(() => {
    fetchLocationData();
  }, []);

  return (
    <div>
      {locationData && (
        <div>
          <p>Country: {locationData.country}</p>
          <p>State: {locationData.state}</p>
          <p>City: {locationData.city}</p>
        </div>
      )}
    </div>
  );
};

export default LocationData;
