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

const Container = styled.div`
  border-radius: var(--border-radius);
  overflow: hidden;
  cursor: pointer;
  transition: .25s;
  width: 100%;

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

    ${Panel} { text-align: left; }
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    display: block;
    width: 280px;

    ${Panel} { text-align: center; }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: ${viewport.min.laptop}) {
    width: 320px;
  }
`;

const DesignCard = ({ title, desc, imageURL, onClick }) => (
  <Wrapper style={{
    '--image-url': `url('${imageURL}')`,
    '--background': "rgba(255, 173, 155, .2)"
  }}>
    <Container onClick={onClick}>
      <Image />

      <Panel>
        <h2>{title}</h2>
        <p>{desc}</p>
      </Panel>
    </Container>
  </Wrapper>
);

export default DesignCard;