import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { useMove } from 'react-use-gesture';

import { viewport, css } from '../../../common/config.json';
import MediaContext from '../../../common/MediaContext';

const Wrapper = styled(animated.div)`
  background: var(--theme-primary-peach);
  background-image: url(/static/common/bg-pattern-two-circles.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 50%;

  @media screen and (min-width: ${viewport.min.tablet}) {
    border-radius: var(--border-radius);
    background-image: url(/static/common/bg-pattern-small-circle.svg);
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    background-size: var(--bubble-px);
  }
`;

const getInitialSpring = (isLaptop, isTablet) => ({
  backgroundPositionX: isLaptop ? "50%" : isTablet ? "202px" : "50%",
  backgroundPositionY: isLaptop ? "50%" : isTablet ? "-202px" : "unset",
  immediate: true
});

const BubbleBackground = ({ children }) => {

  const dom = useRef();
  const { isLaptop, isTablet } = useContext(MediaContext);
  const bubblePx = css.contact.bubblePx;

  const [spring, api] = useSpring(() => getInitialSpring(isLaptop, isTablet));

  useMove(({ event, xy }) => {
    if (event.currentTarget && isLaptop) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = xy[0] - rect.left - (bubblePx / 2);
      const y = xy[1] - rect.top - (bubblePx / 2);

      //Conversion 
      const { backgroundPositionX: { animation } } = spring;
      if (animation.to.charAt(animation.to.length - 1) === "%") {
        api.start({
          backgroundPositionX: `${rect.width / 2 - (bubblePx / 2)}px`,
          backgroundPositionY: `${rect.height / 2 - (bubblePx / 2)}px`,
          immediate: true
        });
      }

      api.start({
        backgroundPositionX: `${x}px`,
        backgroundPositionY: `${y}px`
      });
    }
  }, { domTarget: dom });

  useEffect(() => {
    api.start(getInitialSpring(isLaptop, isTablet));
  }, [isLaptop, isTablet]);

  return (
    <Wrapper ref={dom} style={{
      '--bubble-px': `${bubblePx}px`,
      ...spring
    }}>
      {children}
    </Wrapper>
  );
}

export default BubbleBackground;