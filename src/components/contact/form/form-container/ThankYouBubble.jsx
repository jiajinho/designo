import React, { useEffect } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from '@react-spring/web';
import { config } from 'react-spring';

const Wrapper = styled(animated.div)`
  display: inline;
  background: var(--theme-secondary-peach);
  color: var(--theme-primary-light);
  border-radius: 15px;

  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) scale(0);
  transform-origin: center bottom;
`;

const Text = styled.p`
  padding: 10px 20px;
  white-space: pre-line;
  font-size: 12px;
  font-weight: 400;
  width: 130px;
  text-align: center;
`;

const ThankYouBubble = ({ setAnimation }) => {

  const [opacity, opacityAPI] = useSpring(() => ({ opacity: 1 }));
  const [float, floatAPI] = useSpring(() => ({ y: '0px', x: '-50%' }));
  const [scale, scaleAPI] = useSpring(() => ({ scale: 0 }));

  const animate = () => {
    opacityAPI.start({
      from: { opacity: 1 },
      to: { opacity: 0 },
      config: {
        duration: 3000,
        easing: x => x === 0 ? 0 : Math.pow(2, 10 * x - 10)
      }
    });

    scaleAPI.start({
      from: { scale: 0 },
      to: { scale: 1 }
    });

    floatAPI.start({
      from: { y: '0px' },
      to: { y: '-100px' },
      config: {
        tension: 221,
        friction: 180
      }
    });
  }

  useEffect(() => {
    setAnimation(() => animate);
  }, []);

  return (
    <Wrapper
      style={{
        ...float, ...opacity, ...scale
      }}>
      <Text>
        Thanks for your feedback! ✔️
      </Text>
    </Wrapper >
  );
}


export default ThankYouBubble;