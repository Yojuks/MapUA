/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Map from 'components/Map/index';
import BigPopup from 'components/BigPopup/index';

import BigPopupLocation from 'components/design/BigPopupLocation';
import CreateLocation from 'components/CreateLocation/CreateLocation';
import { locationType } from '../../types';

function HomeScreen() {
  const [isAuth] = useState(true);
  const [isOpenLocationPopup, setIsOpenLocationPopup] = useState(false);
  const [isOpenLocationForm, setIsOpenLocationForm] = useState(false);

  const [location, setLocation] = useState<locationType | null>(null);
  const [coordinate, setCoordinate] = useState<any>([]);

  const onOpenBigPopup = (locationData: locationType) => {
    setLocation(locationData);
    setIsOpenLocationPopup(true);
  };

  const onOpenLocationForm = () => {
    setIsOpenLocationForm(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <BigPopup
        isOpen={isOpenLocationPopup}
        toggleClose={() => setIsOpenLocationPopup(false)}
        location={location}
      />

      <BigPopupLocation
        isOpen={isOpenLocationForm}
        toggleClose={() => setIsOpenLocationForm(false)}
      >
        <CreateLocation coordinate={coordinate} />
      </BigPopupLocation>
      <Box
        sx={{ height: '100%' }}
        onClick={() => setIsOpenLocationPopup(false)}
      >
        <Map
          onOpenBigPopup={onOpenBigPopup}
          onOpenLocationForm={onOpenLocationForm}
          isAuth={isAuth}
          setCoordinate={setCoordinate}
          isOpen={isOpenLocationForm}
        />
      </Box>
    </Box>
  );
}

export default HomeScreen;
