import React, { useContext } from 'react';
import styled from 'styled-components';

import hardString from '../../common/hard-string';
import TileLayerContext from '../../common/TileLayerContext';
import CallToAction, { Wrapper as _CallToAction } from '../shared/call-to-action/CallToAction';
import LocationCard, { Wrapper as _LocationCard } from './LocationCard';

const Wrapper = styled.div`
  & > ${_LocationCard}:not(:first-child) {
    margin-top: 60px;
  }

  & > ${_CallToAction} {
    margin-top: var(--vertical-gap);
  }
`;

const Locations = () => {

  const { locations } = hardString;
  const tileLayers = useContext(TileLayerContext);

  return (
    <Wrapper>
      {locations.map((item, i) =>
        <LocationCard
          key={i}
          name={item.name}
          hq={item.hq}
          address={item.address}
          phone={`P: ${item.phone}`}
          email={`M: ${item.email}`}
          lat={item.lat}
          lng={item.lng}
          tileLayer={tileLayers[i]}
          flexDirectionLaptop={i % 2 === 0 ? "row-reverse" : "row"}
        />
      )}


      <CallToAction />
    </Wrapper>
  );
}

export default Locations;