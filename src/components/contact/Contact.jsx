import React, { useEffect } from 'react';

import styled from 'styled-components';
import MediaLocations from '../shared/MediaLocations';
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
    </Wrapper>
  );
}

export default Contact;