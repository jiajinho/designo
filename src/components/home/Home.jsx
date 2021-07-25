import React, { useEffect } from 'react';
import styled from 'styled-components';

import CallToAction from '../shared/call-to-action/CallToAction';
import Advantages from './Advantages';
import DesignContainer from './DesignContainer';
import Greeting from './greeting/Greeting';
import LeafImage from '../shared/LeafImage';

const LeafContainer1 = styled.div`
  position: absolute;
  z-index: -1;
  height: 400px;
  top: 300px;

  left: 0;
`;

const LeafContainer2 = styled.div`
  position: absolute;
  z-index: -1;
  height: 500px;
  top: 1150px;

  transform: rotateY(180deg) rotateX(180deg);
  right: 0;
`;

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <LeafContainer1>
        <LeafImage />
      </LeafContainer1>

      <LeafContainer2>
        <LeafImage />
      </LeafContainer2>

      <Greeting />
      <DesignContainer />
      <Advantages />

      <CallToAction />
    </div>
  );
}

export default Home;