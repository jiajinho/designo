import React from 'react';
import styled from 'styled-components';

import { viewport } from '../../common/config.json';
import { advantages } from '../../common/hard-string.json';
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

  @media screen and (min-width: ${viewport.min.tablet}) {
    text-align: left;

    & ${MediaWrapper} { display: flex; }
    & ${MediaContainer} { margin-left: 50px; }
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    text-align: center;
    flex-direction: row;
    justify-content: space-between;

    & ${MediaWrapper} { 
      display: block; 
      width: 30%;
    }

    & ${MediaWrapper}:not(:first-child) { margin-top: unset; }
    & ${MediaContainer} { margin-left: unset; }
  }
`;

const Advantages = () => {

  const _advantages = advantages;

  return (
    <Wrapper>
      <Container>
        {_advantages.map(({ imageURL, title, description }, index) =>
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