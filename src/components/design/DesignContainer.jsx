import React, { useContext } from 'react';
import styled from 'styled-components';

import { viewport } from '../../common/config.json';
import hardString from '../../common/hard-string';
import MediaContext from '../../common/MediaContext';
import DesignLink, { Wrapper as _DesignLink } from '../../common/jsx/DesignLink';

const Wrapper = styled.div`
  margin: var(--vertical-gap) var(--horizontal-gap);

  & ${_DesignLink}:first-child {
    margin-bottom: var(--design-link-gap);
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    margin: var(--vertical-gap) var(--horizontal-gap-laptop);

    display: flex;

    & ${_DesignLink}:first-child {
      margin-bottom: 0;
      margin-right: var(--design-link-gap);
    }

    & ${_DesignLink} {
      height: 220px;
    }
  }
`;

const getTypeInfo = type => {
  for (const [k, v] of Object.entries(hardString.design)) {
    if (type === k) return v;
  }
}

const DesignContainer = ({ type1, type2 }) => {

  const { isLaptop, isTablet } = useContext(MediaContext);

  const typeInfo1 = getTypeInfo(type1);
  const imageURL1 = isLaptop ?
    typeInfo1.imageURL.laptop :
    isTablet ?
      typeInfo1.imageURL.tablet :
      typeInfo1.imageURL.mobile;

  const typeInfo2 = getTypeInfo(type2);
  const imageURL2 = isLaptop ?
    typeInfo2.imageURL.laptop :
    isTablet ?
      typeInfo2.imageURL.tablet :
      typeInfo2.imageURL.mobile;

  return (
    <Wrapper>
      <DesignLink title={typeInfo1.title} toURL={typeInfo1.toURL} imageURL={imageURL1} />
      <DesignLink title={typeInfo2.title} toURL={typeInfo2.toURL} imageURL={imageURL2} />
    </Wrapper>
  )
}

export default DesignContainer;