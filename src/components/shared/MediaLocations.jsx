import React from 'react';
import styled from 'styled-components';

import { viewport } from '../../common/config.json';
import hardString from '../../common/hard-string';
import Button from '../../common/jsx/Button';
import MediaObject, { Wrapper as MediaWrapper, Container as MediaContainer } from '../../common/jsx/MediaObject';

const Wrapper = styled.div`
  padding: var(--vertical-gap) var(--horizontal-gap);

  @media screen and (min-width: ${viewport.min.laptop}) {
    padding: var(--vertical-gap) var(--horizontal-gap-laptop);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  & ${MediaWrapper}:not(:first-child) { margin-top: var(--media-object-gap); }

  @media screen and (min-width: ${viewport.min.laptop}) {
    text-align: center;
    flex-direction: row;
    justify-content: space-around;

    & ${MediaWrapper}:not(:first-child) { margin-top: 0px; }

    & ${MediaWrapper} { 
      display: block; 
      width: 30%;
    }
    & ${MediaContainer} { margin-left: unset; }
  }
`;

const MediaLocations = () => {

  const locations = hardString.locations;

  return (
    <Wrapper>
      <Container>
        {locations.map((item, i) =>
          <MediaObject
            key={item.id}
            imageURL={item.imageURL}
            title={item.nameCaps}
            jsx={<Button url={`/locations#${item.id}`} text="SEE LOCATION" />}
          />
        )}
      </Container>
    </Wrapper>
  )
}

export default MediaLocations;