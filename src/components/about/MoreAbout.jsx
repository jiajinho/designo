import React, { useContext } from 'react';
import styled from 'styled-components';

import { viewport } from '../../common/config.json';
import MediaContext from '../../common/MediaContext';

export const Wrapper = styled.div`
  @media screen and (min-width: ${viewport.min.tablet}) {
    margin: 0 var(--horizontal-gap);
    border-radius: var(--border-radius);
    overflow: hidden;
  } 

  @media screen and (min-width: ${viewport.min.laptop}) {
    margin: 0 var(--horizontal-gap-laptop);
  }

  @media screen and (min-width: ${viewport.min.desktop}) {
    display: flex;
    flex-direction: var(--flex-direction-desktop);
  }
`;

const Image = styled.div`
  background-image: var(--image-url);
  background-size: cover;
  background-position: center bottom;
  height: 100vw;

  @media screen and (min-width: ${viewport.min.tablet}) {
    height: 250px;
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    background-position: center center;
  }

  @media screen and (min-width: ${viewport.min.desktop}) {
    width: 40%;
    height: unset;
  }
`;

const Container = styled.div`
  padding: 60px var(--horizontal-gap);
  background: var(--background);
  text-align: center;
  background-image: url(/static/common/bg-pattern-three-circles.svg);

  & > h2 {
    font-size: 30px;
    font-weight: 500;
    line-height: 30px;
    color: var(--theme-primary-peach);
  }

  & > p { 
    margin-top: 20px;
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    padding: 60px 60px;
  }

  @media screen and (min-width: ${viewport.min.desktop}) {
    padding: 100px;
    text-align: left;
    width: 60%;
  }
`;

const MoreAbout = ({ title, desc, mobileURL, tabletURL, laptopURL, reverseOnLaptop }) => {

  const { isDesktop, isTablet } = useContext(MediaContext);
  const imageURL = isDesktop ? laptopURL : isTablet ? tabletURL : mobileURL;

  return (
    <Wrapper style={{
      '--image-url': `url("${imageURL}")`,
      '--flex-direction-desktop': reverseOnLaptop ? "row-reverse" : "row",
      '--background': "rgba(255, 173, 155, .2)"
    }}>
      <Image />

      <Container>
        <h2>{title}</h2>

        {desc.map((item, index) =>
          <p key={index}>{item}</p>
        )}
      </Container>
    </Wrapper>
  );
}

export default MoreAbout;