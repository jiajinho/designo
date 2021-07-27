import React, { useEffect } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from '@react-spring/web';

const Required = styled.div`
  position: relative;
  height: var(--tooltip-icon-size);
  width: var(--tooltip-icon-size);
  margin: 0 5px;

  background: url(/static/common/exclamation.svg);
  background-size: contain;
`;

const Wrapper = styled(animated.div)`
  display: flex;
  justify-content: flex-end;

  align-items: center;
  flex-grow: 1;
`;

const Error = ({ text, setData, hidden }) => {

  const [{ x }, api] = useSpring(() => ({
    from: { x: 0 },
    x: 1,
    reset: true
  }));

  useEffect(() => {
    setData(prev => ({ ...prev, wiggleAnimation: () => api.start({ reset: true }) }));
  }, []);


  return (
    <Wrapper style={{
      opacity: hidden ? 0 : 1,
      transform: x.to([0, .25, .5, .75, 1], [0, 3, -3, 3, 0]).to(x => `translateX(${x}px)`)
    }}>
      <Required onClick={() => api.start({ reset: true })} />
      <i>{text}</i>
    </Wrapper >
  );
}

export default Error;