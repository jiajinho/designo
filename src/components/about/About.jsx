import React, { useEffect } from 'react';
import styled from 'styled-components';

import { viewport } from '../../common/config.json';
import hardStrings from '../../common/hard-string';
import CallToAction, { Wrapper as _CallToAction } from '../shared/call-to-action/CallToAction';
import MediaLocations from '../shared/MediaLocations';
import Greeting, { Wrapper as _Greeting } from './greeting/Greeting';
import MoreAbout from './MoreAbout';

const Wrapper = styled.div` 
  & ${_CallToAction} {
    margin-top: var(--vertical-gap);
  }

  @media screen and (min-width: ${viewport.min.tablet}) {
    & ${_Greeting} {
      margin-bottom: var(--vertical-gap);
    }
  }
`;

const About = () => {

  const { worldClassTalent, realDeal } = hardStrings.about.more;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <Wrapper>
      <Greeting />

      <MoreAbout
        title={worldClassTalent.title}
        desc={worldClassTalent.descriptions}
        mobileURL={worldClassTalent.imageURL.mobile}
        tabletURL={worldClassTalent.imageURL.tablet}
        laptopURL={worldClassTalent.imageURL.laptop}
      />

      <MediaLocations />

      <MoreAbout
        title={realDeal.title}
        desc={realDeal.descriptions}
        mobileURL={realDeal.imageURL.mobile}
        tabletURL={realDeal.imageURL.tablet}
        laptopURL={realDeal.imageURL.laptop}
        reverseOnLaptop={true}
      />

      <CallToAction />
    </Wrapper>
  );
}

export default About;