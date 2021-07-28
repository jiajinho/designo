import React, { useEffect } from 'react';

import styled from 'styled-components';
import MediaLocations from '../shared/MediaLocations';
import Cactus from './cactus/Cactus';
import Form from './form/Form';

const Wrapper = styled.div``;

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Wrapper>
      <Form />
      <MediaLocations />

      <Cactus />
    </Wrapper>
  );
}

export default Contact;