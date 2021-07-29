import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { animated, useSprings } from 'react-spring';
import { useHover } from 'react-use-gesture';

import { theme } from '../config.json';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  height: 20px;
  margin-right: 10px;
`;

const Title = styled.h2`
  display: inline-block;
  letter-spacing: 2px;
  color: var(--color);
`;

const getAnimationProps = (marginRight, delay, cancel) => ({
  marginRight,
  delay,
  cancel,
  config: { duration: 100 }
});

const Designo = ({ light, animatable }) => {

  const chars = "DESIGNO".split("");
  const delayMs = 40;
  const cancel = animatable ? false : true;

  const dom = useRef();
  const [springs, api] = useSprings(chars.length, () => getAnimationProps("2px", 0, cancel));

  useHover(({ hovering }) => {
    const marginRight = hovering ? "4px" : "2px";
    api.start(i => getAnimationProps(marginRight, i * delayMs, cancel));
  }, { domTarget: dom });

  return (
    <Wrapper style={{
      '--color': light ? theme.primary.light : theme.primary.dark
    }}>
      <Link to="/" onClick={() => window.scrollTo(0, 0)}>

        <Logo as="img" src='/logo48.png' />
        <Title as="h2" ref={dom}>
          {springs.map((item, i) =>
            <animated.span key={i} style={item}>{chars[i]}</animated.span>
          )}
        </Title>

      </Link>
    </Wrapper>
  );
}

export default React.memo(Designo);