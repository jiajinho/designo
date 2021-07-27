import React from 'react';
import styled from 'styled-components';

import { viewport } from '../../common/config.json';
import hardString from '../../common/hard-string';
import MediaObject, { Wrapper as _MediaObject, Container as _MediaContainer, Title as _MediaTitle, Content } from '../../common/jsx/MediaObject';

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
    & ${Content} {
      margin-left: var(--media-object-horizontal-gap);
      text-align: left;
    }

    & ${_MediaContainer} {
      display: flex;
    }

    & ${_MediaTitle} {
      justify-content: flex-start;
    }
  }
  
  @media screen and (min-width: ${viewport.min.desktop}) {
    display: flex;
    text-align: center;

    & ${Content} {
      margin-left: 0;
      margin: 0 var(--media-object-horizontal-gap);
      text-align: center;
    }

    & ${_MediaContainer} {
      flex-direction: column;
      align-items: center;
    }

    ${_MediaObject}:not(:first-child) {
      margin-top: 0;
    }

    & ${_MediaTitle} {
      justify-content: center;
    }
  }
}`;

const Advantages = () => {

  const advantages = hardString.advantages;

  return (
    <Wrapper>
      <Container>
        {advantages.map(({ imageURL, title, description }, index) =>
          <MediaObject
            key={index}
            imageURL={imageURL}
            title={title}
            jsx={<p>{description}</p>}
          />
        )}
      </Container>
    </Wrapper>
  );
}

export default Advantages;