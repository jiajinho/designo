import React, { useEffect } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from '@react-spring/web';

const Wrapper = styled(animated.div)`
  position: absolute;
  display: inline;
  padding: 7px 15px;
  bottom: 100%;
  right: 50%;
  background: #eee;
  border-radius: var(--border-radius);

  transform-origin: 60% bottom;

  &:after {
    content: '';
    border-style: solid;
    border-width: 15px 5px;
    border-color: #eee #fff0 #fff0 #fff0;

    position: absolute;
    top: 100%;
    left: 60%;
    z-index: -1;

    transform: rotateZ(-20deg) translateY(-6px);
  }
`;

const Speech = styled.p`
  font-size: 12px;
  display: inline;
  white-space: pre;
`;

const Button = styled.button`
  display: block;
  margin: 10px auto;
  padding: 10px 25px;
  cursor: pointer;

  background: var(--theme-primary-peach);
  color: var(--theme-primary-light);

  border-radius: var(--border-radius);
  border: none;
  outline: none;
  font-size: 12px;
  
  transition: .25s;

  &:hover {
    background: var(--theme-secondary-peach);
  }
`;

const SpeechBubble = ({ bubbleAnimationRef, slideAway }) => {

  const [pop, api] = useSpring(() => ({
    scale: 0
  }));

  const animate = (expand, delay = 0) => {
    api.start({
      from: { scale: expand ? 0 : 1 },
      to: { scale: expand ? 1 : 0 },
      delay
    });
  }

  useEffect(() => {
    bubbleAnimationRef.current = animate;
  }, []);

  return (
    <Wrapper style={pop}>
      <Speech>
        Leave a feedback! Your opinion
        <br />
        will be greatly appreciated.
      </Speech>

      <Button onClick={slideAway}>
        Go Away
      </Button>
    </Wrapper>
  );
}

export default SpeechBubble;