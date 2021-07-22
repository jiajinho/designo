import React from 'react';
import styled from 'styled-components';

import { viewport } from '../../../common/config.json';
import DescriptiveTitle, { Wrapper as DescriptiveTitleWrapper } from '../../../common/jsx/DescriptiveTitle';
import Designo, { Wrapper as DesignoWrapper } from '../../../common/jsx/Designo';
import NavLinks from './NavLinks';
import { FacebookIcon, InstagramIcon, TwitterIcon, PinterestIcon, YoutubeIcon } from './Icons';

const Wrapper = styled.div`
  padding: 60px var(--horizontal-gap);
  
  background: var(--theme-primary-dark);
  color: white;

  @media screen and (min-width: ${viewport.min.laptop}) {
    padding: 60px var(--horizontal-gap-laptop);
  }
`;

const LinkContainer = styled.div`
  & ${DesignoWrapper} {
    padding-bottom: 30px;
    border-bottom: 1px solid white;
    
    justify-content: center;
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    display: flex;
    border-bottom: 1px solid white;
    justify-content: space-between;

    & ${DesignoWrapper} {
      border-bottom: 0;
    }
  }
`;

const SocialMediaContainer = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: center;
`;

const ContactContainer = styled.div`
  & > ${DescriptiveTitleWrapper} {
    margin-top: 35px;
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    display: flex;
    
    & > ${DescriptiveTitleWrapper} {
      width: 32%;
      text-align: left;
    }

    & > ${SocialMediaContainer} {
      width: 36%;
      
      align-items: flex-end;
      justify-content: flex-end;
    }
  }
`;

const Footer = () => (
  <Wrapper>
    <LinkContainer>
      <Designo light />

      <NavLinks />
    </LinkContainer>

    <ContactContainer>
      <DescriptiveTitle
        light
        title="Designo Central Office"
        addr1="3886 Wellington Street"
        addr2="Toronto, Ontario M9C 3J5"
      />
      <DescriptiveTitle
        light
        title="Contact Us (Central Office)"
        phone="P : +1 253-863-8967"
        email="M : contact@designo.co"
      />

      <SocialMediaContainer>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YoutubeIcon />
        <PinterestIcon />
      </SocialMediaContainer>
    </ContactContainer>
  </Wrapper>
);

export default React.memo(Footer);