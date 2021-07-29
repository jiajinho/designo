import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';

import MediaLocations from '../shared/MediaLocations';
import FormContext from '../../common/FormContext';
import Cactus from './cactus/Cactus';
import Form from './form/Form';

const Wrapper = styled.div``;

const Contact = () => {

  const { cactus } = useContext(FormContext);
  const cactusSlideAwayAnimationRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Wrapper>
      <Form cactusSlideAwayAnimationRef={cactusSlideAwayAnimationRef} />
      <MediaLocations />

      {!cactus.greeted && <Cactus cactusSlideAwayAnimationRef={cactusSlideAwayAnimationRef} />}
    </Wrapper>
  );
}

export default Contact;