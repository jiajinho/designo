import React, { useContext } from 'react';
import styled from 'styled-components';

import { viewport } from '../../../common/config.json';
import hardString from '../../../common/hard-string';
import MediaContext from '../../../common/MediaContext';
import DescriptiveTitle, { Title, Wrapper as _DescriptiveTitle } from '../../../common/jsx/DescriptiveTitle';
import BubbleBackground, { Wrapper as _BubbleBackground } from './BubbleBackground';

export const Wrapper = styled.div`
  & ${_BubbleBackground} {
    padding: 60px var(--horizontal-gap);
    color: var(--theme-primary-light);
  }

  & ${Title} {
    font-size: 30px;
    line-height: 30px;
    color: var(--theme-primary-light);
  }

  & .desc {
    padding: 25px 0;
    color: var(--theme-primary-light);
  }

  @media screen and (min-width: ${viewport.min.tablet}) {
    padding: 0 var(--horizontal-gap);

    & ${_BubbleBackground} {
      border-radius: 0 0 var(--border-radius) var(--border-radius);
    }

    & ${Title} {
      font-size: 40px;
      line-height: 40px;
    }
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    padding: 0 var(--horizontal-gap-laptop);

    & ${_DescriptiveTitle} { padding: 0 60px; }
  }
  
  @media screen and (min-width: ${viewport.min.desktop}) {
    display: flex;
    flex-direction: row-reverse;

    & ${_DescriptiveTitle} { text-align: left; }

    & ${_BubbleBackground} {
      padding: 100px 0;
      width: 60%;
      border-radius: var(--border-radius) 0 0 var(--border-radius);
    }
  }
`;

const Image = styled.div`
  height: 300px;
  background-image: var(--image-url);
  background-size: cover;
  background-position: 50%;

  @media screen and (min-width: ${viewport.min.tablet}) {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }

  @media screen and (min-width: ${viewport.min.desktop}) {
    width: 40%;
    height: unset;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }
`;

const Greeting = () => {

  const { isDesktop, isTablet } = useContext(MediaContext);

  const imageURL = isDesktop ?
    "url('/static/about/laptop/image-about-hero.jpg')" :
    isTablet ?
      "url('./static/about/tablet/image-about-hero.jpg')" :
      "url('./static/about/mobile/image-about-hero.jpg')";

  return (
    <Wrapper>

      <Image style={{ '--image-url': imageURL }} />

      <BubbleBackground>
        <DescriptiveTitle
          title={hardString.about.greeting.title}
          desc={hardString.about.greeting.description}
        />
      </BubbleBackground>

    </Wrapper>
  );
}

export default Greeting;