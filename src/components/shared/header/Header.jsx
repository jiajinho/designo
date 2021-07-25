import React, { useState } from 'react';
import styled from 'styled-components';

import { viewport } from '../../../common/config.json';
import Designo from '../../../common/jsx/Designo';
import HamburgerIcon from './HamburgerIcon';
import NavLinks from './NavLinks';

const Wrapper = styled.div`
  position: relative;
  height: 90px;
  z-index: 2000;
`;

const Banner = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 var(--horizontal-gap);

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: white;

  @media screen and (min-width: ${viewport.min.laptop}) {
    background: #ffffff00;
    padding: 0 var(--horizontal-gap-laptop);
  }
`;

const Header = () => {
  const [expand, setExpand] = useState(false);

  return (
    <Wrapper>
      <Banner>
        <Designo dark animatable />

        <HamburgerIcon
          expand={expand}
          setExpand={setExpand}
        />
      </Banner>

      <NavLinks
        expand={expand}
        setExpand={setExpand}
      />
    </Wrapper>
  );
}

export default Header;