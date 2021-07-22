import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

import { css } from '../../../common/config.json';

const Wrapper = styled(animated.div)`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-image: url(/static/design/bg-pattern-intro.svg);
  background-position-y: 50%;
  background-size: contain;
  border-radius: var(--border-radius);
`;

const BubbleBackground = () => {

  const { rollDuration, fadeInRatio, fadeOutRatio } = css.design;

  const roll = useSpring({
    from: { backgroundPositionX: "0px" },
    to: { backgroundPositionX: "500px" },
    config: { duration: rollDuration },
    reset: true,
    loop: true
  });

  const { opacity } = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: rollDuration },
    reset: true,
    loop: true
  });

  return (
    <Wrapper style={{
      ...roll,
      opacity: opacity.to([0, fadeInRatio, fadeOutRatio, 1], [0, 1, 1, 0])
    }} />
  );
}

export default React.memo(BubbleBackground);