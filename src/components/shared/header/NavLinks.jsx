import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';

import { theme, viewport, css } from '../../../common/config.json';
import MediaContext from '../../../common/MediaContext';

const Wrapper = styled(animated.div)`
  position: absolute;
  width: 100%;
  text-align: end;
  padding: 15px var(--horizontal-gap);
  bottom: 0;
  z-index: -1;

  background: var(--theme-primary-dark);

  @media screen and (min-width: ${viewport.min.laptop}) {
    top: 0;
    right: 0;
    bottom: auto;
    padding-right: var(--horizontal-gap-laptop);
    z-index: 1;

    height: 100%;
    width: auto;
    display: inline-flex;
    align-items: center;

    background: #ffffff00;
  }
`;

const _Link = styled(Link)`
  display: block;
  padding: 10px 0;
  cursor: pointer;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;
  color: var(--theme-primary-light);

  &::after {
    display: block;
    content: '';
    border-bottom: 1px solid #ffffff00;
    transform: scaleX(0);
    transition: .25s;
  }

  &:hover::after { transform: scaleX(1); }

  @media screen and (min-width: ${viewport.min.laptop}) {
    display: inline;
    margin-left: 40px;
    color: var(--theme-primary-dark);

    &::after { border-bottom: 1px solid black };
  }
`;

const getInitialSpring = immediate => ({ y: "0%", immediate });

const NavLinks = ({ expand }) => {

  const { isLaptop } = useContext(MediaContext);
  const [spring, api] = useSpring(() => getInitialSpring(true));

  useEffect(() => {
    api.start({
      y: expand ? "100%" : "0%"
    });
  }, [expand]);

  useEffect(() => {
    api.start(getInitialSpring(true));
  }, [isLaptop]);

  return (
    <Wrapper style={spring}>
      <_Link to="/about">OUR COMPANY</_Link>
      <_Link to="/locations">LOCATIONS</_Link>
      <_Link to="/contact">CONTACT</_Link>
    </Wrapper>
  );
}

export default NavLinks;