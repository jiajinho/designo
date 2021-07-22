import React from 'react';
import styled from 'styled-components';

import CallToAction from '../shared/call-to-action/CallToAction';
import Advantages from './Advantages';
import DesignContainer from './DesignContainer';
import Greeting from './greeting/Greeting';

const Wrapper = styled.div`
`;

const Home = () => (
  <Wrapper>
    <Greeting />
    <DesignContainer />
    <Advantages />

    <CallToAction />
  </Wrapper>
);

export default Home;