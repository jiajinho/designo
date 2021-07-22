import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { viewport } from '../../../common/config.json';
import MediaContext from '../../../common/MediaContext';

const Wrapper = styled.svg`
  height: 20px;
  width: 20px;
  overflow: visible;

  @media screen and (min-width: ${viewport.min.laptop}) {
    display: none;
    visibility: hidden;
  }
`;

const Line = styled(animated.line)`
  transform-origin: center;
  transform-box: fill-box;
`;

const getInitialBunSprings = immediate => ({ y: "0px", rotateZ: "0deg", immediate });

const HamburgerIcon = ({ expand, setExpand }) => {

  const { isLaptop } = useContext(MediaContext);
  const [topSpring, topAPI] = useSpring(() => getInitialBunSprings(false));
  const [midSpring, midAPI] = useSpring(() => ({ opacity: 1 }));
  const [bottomSpring, bottomAPI] = useSpring(() => getInitialBunSprings(false));

  useEffect(() => {
    topAPI.start({
      y: expand ? "20px" : "0px",
      rotateZ: expand ? "45deg" : "0deg"
    });

    midAPI.start({
      opacity: expand ? 0 : 1
    });

    bottomAPI.start({
      y: expand ? "-20px" : "0px",
      rotateZ: expand ? "-45deg" : "0deg"
    });
  }, [expand]);

  useEffect(() => {
    if (isLaptop) {
      topAPI.start(getInitialBunSprings(true));
      midAPI.start({ opacity: 1, immediate: true });
      bottomAPI.start(getInitialBunSprings(true));

      setExpand(false);
    }
  }, [isLaptop]);

  return (
    <Wrapper
      onClick={() => setExpand(!expand)}
      as="svg"
      width={70}
      height={47}
      viewBox="0 0 70 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Line style={topSpring} x1="3.5" y1="3.5" x2="66.5" y2="3.5" stroke="black" strokeWidth={7} strokeLinecap="round" />
      <Line style={bottomSpring} x1="3.5" y1="43.5" x2="66.5" y2="43.5" stroke="black" strokeWidth={7} strokeLinecap="round" />
      <Line style={midSpring} x1="3.5" y1="23.5" x2="66.5" y2="23.5" stroke="black" strokeWidth={7} strokeLinecap="round" />
    </Wrapper>
  );
}

export default React.memo(HamburgerIcon);