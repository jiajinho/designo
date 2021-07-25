import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { viewport } from '../../../common/config.json';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: ${viewport.min.laptop}) {
    flex-direction: row;
    align-items: center;
    padding-bottom: 30px;
  }
`;

const _Link = styled(Link)`
  margin-top: 25px;
  font-weight: 300;
  letter-spacing: 2px;
  text-decoration: none;
  color: var(--theme-primary-light);

  &::after {
    display: block;
    content: '';
    border-bottom: 1px solid white;
    transform: scaleX(0);
    will-change: transform;
    transition: .25s;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media screen and (min-width: ${viewport.min.laptop}){
    margin: 0;
    margin-left: 40px;
  }
`;

const NavLinks = () => {

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <Wrapper>
      <Container>
        <_Link to="/about" onClick={scrollToTop}>OUR COMPANY</_Link>
        <_Link to="/locations" onClick={scrollToTop}>LOCATIONS</_Link>
        <_Link to="/contact" onClick={scrollToTop}>CONTACT</_Link>
      </Container>
    </Wrapper>
  );
}

export default React.memo(NavLinks);