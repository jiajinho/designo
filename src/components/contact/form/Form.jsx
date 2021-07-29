import React from 'react';
import styled from 'styled-components';

import { viewport } from '../../../common/config.json';
import BubbleBackground from './BubbleBackground';
import FormContainer from './form-container/FormContainer';

const Wrapper = styled.div`
  @media screen and (min-width: ${viewport.min.tablet}) {
    padding: 0 var(--horizontal-gap);
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    padding: 0 var(--horizontal-gap-laptop);
  }
`;

const Contact = ({ cactusSlideAwayAnimationRef }) => (
  <Wrapper>
    <BubbleBackground>
      <FormContainer cactusSlideAwayAnimationRef={cactusSlideAwayAnimationRef} />
    </BubbleBackground>
  </Wrapper>
);


export default Contact;