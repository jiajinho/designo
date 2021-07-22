import React, { useContext } from 'react';
import styled from 'styled-components';

import { viewport } from '../../common/config.json';
import hardString from '../../common/hard-string';
import MediaContext from '../../common/MediaContext';
import DesignLink, { Wrapper as _DesignLink } from '../../common/jsx/DesignLink';

const Wrapper = styled.div`
  padding: 0 var(--horizontal-gap);
  padding-top: var(--vertical-gap);

  & ${_DesignLink}{
    margin-bottom: var(--design-link-gap);
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    padding: 0 var(--horizontal-gap-laptop);
    padding-top: var(--vertical-gap);
    display: flex;

    & ${_DesignLink} {
      margin-bottom: 0;
    }

    & > ${_DesignLink}:first-child {
      height: unset;
      margin-right: var(--design-link-gap);
    }
  }
`;

const Container = styled.div`
  @media screen and (min-width: ${viewport.min.laptop}) {
    width: 100%;

    & > ${_DesignLink}:first-child {
      margin-bottom: var(--design-card-gap);
    }
  }
`;

const DesignContainer = () => {

  const { isTablet, isLaptop } = useContext(MediaContext);
  const { design } = hardString;

  const imageURL = {
    web: isLaptop ?
      design.web.imageURL.laptopLarge :
      isTablet ?
        design.web.imageURL.tablet :
        design.web.imageURL.mobile,

    app: isLaptop ?
      design.app.imageURL.laptop :
      isTablet ?
        design.app.imageURL.tablet :
        design.app.imageURL.mobile,

    graphic: isLaptop ?
      design.graphic.imageURL.laptop :
      isTablet ?
        design.graphic.imageURL.tablet :
        design.graphic.imageURL.mobile
  }

  return (
    <Wrapper>
      <DesignLink
        title="WEB DESIGN"
        toURL="/web"
        imageURL={imageURL.web}
      />

      <Container>
        <DesignLink
          title="APP DESIGN"
          toURL="/app"
          imageURL={imageURL.app}
        />

        <DesignLink
          title="GRAPHIC DESIGN"
          toURL="/graphic"
          imageURL={imageURL.graphic}
        />
      </Container>
    </Wrapper>
  );
}

export default DesignContainer;