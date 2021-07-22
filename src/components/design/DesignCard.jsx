import React from 'react';
import styled from 'styled-components';

import { viewport } from '../../common/config.json';

const Panel = styled.div`
  padding: 30px 20px;
  text-align: center;
  background: var(--background);
  transition: .25s;

  & > h2 { 
    color: var(--theme-primary-peach);
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 4px;
    margin-bottom: 15px;
  }

  @media screen and (min-width: ${viewport.min.tablet}) {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    width: unset;
    height: 190px;
  }
`;

const Image = styled.div`
  height: 270px;
  background-image: var(--image-url);
  background-size: cover;
  background-position: 50%;

  @media screen and (min-width: ${viewport.min.tablet}) {
    width: 45%;
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    width: unset;
  }
`;

export const Wrapper = styled.div`
  border-radius: var(--border-radius);
  overflow: hidden;
  cursor: pointer;
  transition: .25s;

  &:hover {
    transform: scale(1.05);
  }

  &:hover ${Panel} {
    background: var(--theme-primary-peach);
    color: var(--theme-primary-light);
  }

  &:hover ${Panel} > h2 {
    color: var(--theme-primary-light);
  }

  @media screen and (min-width: ${viewport.min.tablet}) {
    display: flex;
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    display: block;
    width: 280px;
  }
`;

const DesignCard = ({ title, desc, imageURL }) => (
  <Wrapper style={{
    '--image-url': `url('${imageURL}')`,
    '--background': "rgba(255, 173, 155, .2)"
  }} onClick={() => console.log(`Redirect to ${title}!`)}>
    <Image />

    <Panel>
      <h2>{title}</h2>
      <p>{desc}</p>
    </Panel>
  </Wrapper>
);

export default DesignCard;