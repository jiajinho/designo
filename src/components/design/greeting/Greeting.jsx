import React from 'react';
import styled from 'styled-components';

import { viewport, css } from '../../../common/config.json';
import DescriptiveTitle, { Title, Wrapper as _DescriptiveTitle } from '../../../common/jsx/DescriptiveTitle';
import BubbleBackground from './BubbleBackground';

const Wrapper = styled.div`
  position: relative;
  background: var(--theme-primary-peach);
  margin-bottom: 70px;
  height: 300px;

  @media screen and (min-width: ${viewport.min.tablet}) {
    margin: 0 var(--horizontal-gap);
    margin-bottom: 70px;
    border-radius: var(--border-radius);
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    margin: 0 var(--horizontal-gap-laptop);
    margin-bottom: 70px;
    height: 250px;
  }
`;

const MessageContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
  padding: 0 var(--horizontal-gap);

  text-align: center;
  color: var(--theme-primary-light);

  display: flex;
  flex-direction: column;
  justify-content: center;

  & ${Title} {
    font-size: 30px;
    line-height: 30px;
    color: var(--theme-primary-light);
  }

  & .desc {
    padding: 25px 0;
    color: var(--theme-primary-light);
  }

  @media screen and (min-width: ${viewport.min.tablet}) {
    padding: 60px var(--horizontal-gap-laptop);

    & ${Title} {
      font-size: 40px;
      line-height: 40px;
    }
  }
`;

const Greeting = ({ title, desc }) => (
  <Wrapper>
    <BubbleBackground />

    <MessageContent>
      <DescriptiveTitle
        title={title}
        desc={desc}
      />
    </MessageContent>



  </Wrapper>
);

export default Greeting;