import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

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
  const { hash } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
    if (hash) document.querySelector(hash).scrollIntoView();
  });

  return (
    <Wrapper>

      {locations.map((item, i) =>
        <LocationCard
          key={item.id}
          id={item.id}
          name={item.name}
          hq={item.hq}
          address={item.address}
          phone={`P : ${item.phone}`}
          email={`M : ${item.email}`}
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