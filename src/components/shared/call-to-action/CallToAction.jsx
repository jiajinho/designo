import React from 'react';
import styled from 'styled-components';

import { viewport } from '../../../common/config.json';
import BubbleBackground from './BubbleBackground';
import MessageContent from './MessageContent';

export const Wrapper = styled.div`
  position: relative;
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  background: var(--theme-primary-peach);
  border-radius: var(--border-radius);
  margin: 0 var(--horizontal-gap);

  @media screen and (min-width: ${viewport.min.laptop}) {
    margin: 0 var(--horizontal-gap-laptop);
  }
`;

const DarkBackground = styled.div`
  background: var(--theme-primary-dark);
  position: absolute;
  height: 50%;
  width: 100%;
  bottom: 0;
  z-index: -1;

  @media screen and (min-width: ${viewport.min.laptop}) {
    height: 25%;
  }
`;

const CallToAction = () => (
  <Wrapper>
    <Container>
      <BubbleBackground>
        <MessageContent
          heading="Let's talk about your project"
          description={`
            Ready to take it to the next level?
            Contact us today and find out how our expertise can help your business grow.
          `}
        />
      </BubbleBackground>
    </Container>

    <DarkBackground />
  </Wrapper>
);

export default CallToAction;