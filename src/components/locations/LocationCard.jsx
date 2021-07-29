import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import L from 'leaflet';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import retinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

import { viewport, css } from '../../common/config.json';
import DescriptiveTitle, { Wrapper as _DescriptiveTitle, Title } from '../../common/jsx/DescriptiveTitle';

const defaultIconOptions = { ...L.Icon.Default.prototype.options };
defaultIconOptions.iconUrl = iconUrl;
defaultIconOptions.iconRetinaUrl = retinaUrl;
defaultIconOptions.shadowUrl = shadowUrl;

export const Wrapper = styled.div`
  @media screen and (min-width: ${viewport.min.tablet}) {
    margin: 0 var(--horizontal-gap);
    border-radius: var(--border-radius);
    overflow: hidden;
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    margin: 0 var(--horizontal-gap-laptop);
  }

  @media screen and (min-width: ${viewport.min.desktop}) {
    display: flex;
    flex-direction: var(--flex-direction-laptop);
    justify-content: space-between;
  }
`;

const Map = styled.div(({ leftSide }) => `
  height: 300px;
  background: lightpink;

  @media screen and (min-width: ${viewport.min.desktop}) {
    width: 40%;
    border-radius: var(--border-radius);
    margin-left: ${leftSide ? css.map.horizontalGapPx : 0}px;
    margin-right: ${leftSide ? 0 : css.map.horizontalGapPx}px;
  }
`);

const Content = styled.div`
  padding: 60px 0;
  text-align: center;
  background: var(--background);
  background-image: url(/static/common/bg-pattern-three-circles.svg);

  & > h1 { 
    color: var(--theme-primary-peach);
    font-weight: 500; 
  }

  @media screen and (min-width: ${viewport.min.tablet}) {
    background-size: cover;
    padding: 60px var(--horizontal-gap-laptop);

    & > h1 { text-align: left; }
  }

  @media screen and (min-width: ${viewport.min.desktop}) {
    border-radius: var(--border-radius);
    padding: 60px 50px;
    flex-grow: 1;
  }
`;

const InfoContainer = styled.div`
  & > ${_DescriptiveTitle} {
    margin-top: 20px;
  }

  & ${Title} {
    font-weight: 600;
  }

  @media screen and (min-width: ${viewport.min.tablet}) {
    display: flex;

    & > ${_DescriptiveTitle} { 
      text-align: left; 
      width: 100%
    }
  }
`;

const LocationCard = ({ id, name, hq, address, phone, email, lat, lng, tileLayer, flexDirectionLaptop }) => {

  const dom = useRef();

  useEffect(() => {
    const map = L.map(dom.current).setView([lat, lng], 14);
    map.addLayer(tileLayer);
    map.addLayer(L.marker([lat, lng], { icon: L.icon(defaultIconOptions) }));

    return () => map.remove();
  }, []);

  return (
    <Wrapper id={id} style={{
      '--background': "rgba(255, 173, 155, .2)",
      '--flex-direction-laptop': flexDirectionLaptop
    }}>
      <Map ref={dom} leftSide={(flexDirectionLaptop === "row-reverse") ? true : false} />

      <Content>
        <h1>{name}</h1>

        <InfoContainer>
          <DescriptiveTitle dark title={hq} {...address} />
          <DescriptiveTitle dark title="Contact" phone={phone} email={email} />
        </InfoContainer>
      </Content>

    </Wrapper>
  );
}

export default LocationCard;