import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import useMeasure from 'react-use-measure';

import { viewport } from '../../../common/config.json';
import MediaContext from '../../../common/MediaContext';

const Wrapper = styled(animated.div)`
  background-image: url(./static/home/image-hero-phone.png);
  background-repeat: no-repeat;
  background-position: 50% 300px;
  background-size: 600px auto;

  @media screen and (min-width: ${viewport.min.laptop}) {
    background-position: 50% 225px;
  }
`;

const getInitialBackgroundPosition = (isDesktop, isLaptop, rect, initialY) => ({
  backgroundPositionX: isDesktop ? `${rect.width - 493}px` : "50%",

  backgroundPositionY: isDesktop ?
    `${initialY.desktop}px` :
    isLaptop ?
      `${initialY.laptop}px` :
      `${initialY.mobile}px`,

  immediate: true
});

const PhoneBackground = ({ children }) => {

  const initialY = {
    desktop: -50,
    laptop: 225,
    mobile: 300
  };

  const { isLaptop, isDesktop } = useContext(MediaContext);
  const [dom, rect] = useMeasure();
  const [spring, api] = useSpring(() => getInitialBackgroundPosition(isDesktop, isLaptop, rect, initialY));

  useScroll(({ xy }) => {
    const y = xy[1] / 4;
    const _initialY = isDesktop ? initialY.desktop : isLaptop ? initialY.laptop : initialY.mobile;

    api.start({ backgroundPositionY: `${_initialY - y}px` });
  }, { domTarget: window });

  useEffect(() => {
    api.start(getInitialBackgroundPosition(isDesktop, isLaptop, rect, initialY));
  }, [isDesktop, isLaptop, rect, api]);

  return (
    <Wrapper ref={dom} style={spring}>
      {children}
    </Wrapper>
  )
}

export default PhoneBackground;