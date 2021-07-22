import React from 'react';

import styled from 'styled-components';
import MediaLocations from '../shared/MediaLocations';
import Form from './form/Form';

const Wrapper = styled.div``;

const Contact = () => (
  <Wrapper>
    <Form />
    <MediaLocations />
  </Wrapper>
);

export default Contact;