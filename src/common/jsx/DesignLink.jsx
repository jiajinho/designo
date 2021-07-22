import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { viewport } from '../config.json';

export const Wrapper = styled.div`
  width: 100%;
  height: 220px;
  border-radius: var(--border-radius);
  background-image: var(--image-url);
  background-size: cover;
  background-position: 50%;

  @media screen and (min-width: ${viewport.min.tablet}) {
    height: 160px;
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    width: 100%;
  }
`;

const Caret = styled.img`
  margin-left: 5px;
  width: 8px;
  aspect-ratio: 1/1;
  transition: .25s;
`;

const _Link = styled(Link)`
  position: relative;
  height: 100%;
  text-decoration: none;
  border-radius: var(--border-radius);
  color: var(--theme-primary-light);
  background: #00000066;
  transition: .25s;

  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background: #E7816B66;
  }

  &:hover ${Caret} {
    transform: translateX(10px);
  }

  & h2 { 
    letter-spacing: 2px; 
    margin-bottom: 6px;
  }

  & p { 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    letter-spacing: 4px; 
  }
`;

const DesignLink = ({ title, toURL, imageURL }) => (
  <Wrapper style={{
    '--image-url': `url(${imageURL})`
  }}>
    <_Link to={toURL}>
      <h2>{title}</h2>

      <p>VIEW PROJECT <Caret src="./static/common/caret.svg" /></p>
    </_Link>
  </Wrapper>
);

export default DesignLink;