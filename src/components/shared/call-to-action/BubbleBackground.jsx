import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from '@react-spring/web';
import { useGesture } from 'react-use-gesture';

import MediaContext from '../../../common/MediaContext';
import { normalizeValue } from '../../../common/helper';

const Wrapper = styled(animated.div)`
  height: 100%;
  width: 100%;

  background-image: url(./static/common/bg-pattern-call-to-action.svg);
  background-position-y: 50%;
  background-repeat: no-repeat;
`;

const getInitialBackgroundPosition = (isDesktop, immediate) => ({
  backgroundPositionX: isDesktop ? "100%" : "50%",
  immediate
});

const BubbleBackground = ({ children }) => {

  const dom = useRef();
  const { isDesktop } = useContext(MediaContext);
  const [spring, api] = useSpring(() => getInitialBackgroundPosition(isDesktop, false));

  useGesture({
    onMove: ({ event, xy }) => {
      if (event.currentTarget && isDesktop) {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = normalizeValue(xy[0] - rect.left, rect.width, 0);

        api.start({ backgroundPositionX: `${x * 100}%` });
      }
    },
    onHover: ({ hovering }) => {
      if (!hovering) api.start(getInitialBackgroundPosition(isDesktop, false));
    }
  }, { domTarget: dom });

  useEffect(() => {
    api.start(getInitialBackgroundPosition(isDesktop, true));
  }, [isDesktop]);

  return (
    <Wrapper ref={dom} style={spring}>
      {children}
    </Wrapper>
  );
}

export default React.memo(BubbleBackground);