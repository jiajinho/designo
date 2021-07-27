import React from 'react';
import styled from 'styled-components';

import { viewport } from '../../common/config.json';
import hardString from '../../common/hard-string';
import Button from '../../common/jsx/Button';
import MediaObject, { Wrapper as _MediaObject, Container as _MediaContainer } from '../../common/jsx/MediaObject';

const Wrapper = styled.div`
  padding: var(--vertical-gap) var(--horizontal-gap);

  @media screen and (min-width: ${viewport.min.laptop}) {
    padding: var(--vertical-gap) var(--horizontal-gap-laptop);
  }
`;

const Container = styled.div`
  ${_MediaObject}:not(:first-child) {
    margin-top: var(--media-object-vertical-gap);
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    display: flex;

    & ${_MediaContainer} {
      flex-direction: column;
      margin: 0 var(--media-object-horizontal-gap);
    }

    & ${_MediaObject} {
      width: 33%;
    }

    ${_MediaObject}:not(:first-child) {
      margin-top: 0;
    }
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