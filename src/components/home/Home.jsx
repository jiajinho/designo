import React, { useEffect } from 'react';

import CallToAction from '../shared/call-to-action/CallToAction';
import Advantages from './Advantages';
import DesignContainer from './DesignContainer';
import Greeting from './greeting/Greeting';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Greeting />
      <DesignContainer />
      <Advantages />

      <CallToAction />
    </div>
  );
}

export default Home;