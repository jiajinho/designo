import React from 'react';
import styled from 'styled-components';

import { viewport, css } from '../../common/config.json';
import Button, { Wrapper as _Button } from '../../common/jsx/Button';
import TangledThought, { Wrapper as _TangledThought } from './TangledThought';
import DescriptiveTitle, { Title, Wrapper as _DescriptiveTitle } from '../../common/jsx/DescriptiveTitle';


const Wrapper = styled.div`
  padding: var(--vertical-gap) var(--horizontal-gap);
  
  display: flex;
  flex-direction: column;
  align-items: center;

  & ${_DescriptiveTitle}, & ${_TangledThought} { max-width: 500px; }

  & ${_Button}, & ${Title} { margin-top: 35px; }

  & ${Title} {
    margin-bottom: 10px;
    font-size: 28px;
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    padding-left: var(--horizontal-gap-laptop);
    padding-right: var(--horizontal-gap-laptop);
  }
`;

const NotFound = () => {

  return (
    <Wrapper>
      <TangledThought />

      <DescriptiveTitle
        title="Opps! Something's missing..."
        desc1={`
          It seems like the page you were looking for doesn't 
          exist, isn't available or was loading incorrectly.
        `}
      />

      <Button dark text="GO BACK" url="/" />
    </Wrapper>
  );
}

export default NotFound;