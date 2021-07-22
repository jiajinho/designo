import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { useMove } from 'react-use-gesture';

import { viewport, css } from '../../../common/config.json';
import MediaContext from '../../../common/MediaContext';

const Wrapper = styled(animated.div)`
  background: var(--theme-primary-peach);
  background-image: url(/static/common/bg-pattern-small-circle.svg);
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: ${viewport.min.tablet}) {
    border-radius: var(--border-radius);
    background-size: 650px;
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    background-size: var(--bubble-px);
  }
`;

const getInitialSpring = isLaptop => ({
  backgroundPositionX: isLaptop ? "50%" : "20vw",
  backgroundPositionY: "50%",
  immediate: true
});

const BubbleBackground = ({ children }) => {

  const dom = useRef();
  const { isLaptop } = useContext(MediaContext);
  const bubblePx = css.home.bubblePx;

  const [spring, api] = useSpring(() => getInitialSpring(isLaptop));

  useMove(({ event, xy }) => {
    if (event.currentTarget && isLaptop) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = xy[0] - rect.left - (bubblePx / 2);
      const y = xy[1] - rect.top - (bubblePx / 2);

      //Check for conversion from % to px unit value
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
    api.start(getInitialSpring(isLaptop));
  }, [isLaptop]);

  return (
    <Wrapper ref={dom} style={{
      '--bubble-px': `${bubblePx}px`,
      ...spring
    }}>
      {children}
    </Wrapper>
  )
}

export default BubbleBackground;