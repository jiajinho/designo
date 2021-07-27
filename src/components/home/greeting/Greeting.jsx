import React from 'react';
import styled from 'styled-components';

import { viewport } from '../../../common/config.json';
import DescriptiveTitle, { Title, Wrapper as _DescriptiveTitle } from '../../../common/jsx/DescriptiveTitle';
import Button from '../../../common/jsx/Button';
import BubbleBackground from './BubbleBackground';
import PhoneBackground from './PhoneBackground';

const Wrapper = styled.div`
  position: relative;

  @media screen and (min-width: ${viewport.min.tablet}) {
    padding: 0 var(--horizontal-gap);
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    padding: 0 var(--horizontal-gap-laptop);
  }
`;

const MessageContent = styled.div`
  height: 850px;
  padding: 60px var(--horizontal-gap);
  text-align: center;

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
    padding: 60px var(--horizontal-gap-laptop);

    & ${Title} {
      font-size: 40px;
      line-height: 40px;
    }
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    height: 725px;
  }

  @media screen and (min-width: ${viewport.min.desktop}) {
    height: 450px;
    width: 550px;
    padding: 0 5vw;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    & ${_DescriptiveTitle} {
      text-align: left;
    }
  }
`;

const Greeting = () => {
  return (
    <Wrapper>
      <BubbleBackground>
        <PhoneBackground>

          <MessageContent>
            <DescriptiveTitle
              title="Award-winning custom designs and digital branding solutions"
              desc={`
              With over 10 years in the industry, we are experienced in creating fully responsive
              websites, app design, and engaging brand experiences. Find out more about our services.
            `}
            />

            <Button light text="LEARN MORE" url="/about" />
          </MessageContent>

        </PhoneBackground>
      </BubbleBackground>
    </Wrapper>
  )
};

export default Greeting;