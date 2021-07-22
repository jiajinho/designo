import React from 'react';
import styled from 'styled-components';

import { viewport } from '../../../common/config.json';
import Button from '../../../common/jsx/Button';

const Wrapper = styled.div`
  position: relative;
  padding: 70px 5vw;
  text-align: center;
  color: var(--theme-primary-light);

  @media screen and (min-width: ${viewport.min.laptop}) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div {
      width: 60%;
      text-align: left;
    }
  }
`;

const Heading = styled.h2`
  font-size: 28px;
  line-height: 28px;
  font-weight: 500;

  @media screen and (min-width: ${viewport.min.tablet}) {
    font-size: 38px;
    line-height: 38px;
  }
`;

const Description = styled.p`
  padding: 30px 0;
  font-weight: 300;
`;

const MessageContent = ({ heading, description }) => (
  <Wrapper>
    <div>
      <Heading as="h2">{heading}</Heading>
      <Description as="p">{description}</Description>
    </div>

    <Button light text="GET IN TOUCH" url="/" />
  </Wrapper>
);

export default MessageContent;