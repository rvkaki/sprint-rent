import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

const getCoordinates = async address => {
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${address.replace(
        '/',
        '%2'
      )}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}&country=PT`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getStaticMap = (center, zoom, overlay) => {
  return `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${overlay}/${center[0]},${center[1]},${zoom}/600x900?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;
};

const LocationMap = props => {
  const [mapURL, setMapURL] = useState('');

  useEffect(() => {
    const getURL = async () => {
      let overlay = [];
      for (let i = 0; i < props.locations.length; i++) {
        const l = props.locations[i];
        const data = await getCoordinates(l.address);
        if (data.features) {
          const marker = `pin-s+000(${data.features[0].center[0]},${data.features[0].center[1]})`;
          overlay.push(marker);
        }
      }

      const url = getStaticMap([-7.8536599, 39.557191], 6, overlay.join(','));
      return url;
    };
    getURL().then(res => setMapURL(res));
  }, [props.locations]);

  return <Box {...props} as="img" src={mapURL} objectFit="cover" alt="map" />;
};

export default LocationMap;
