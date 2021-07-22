import React from 'react';
import styled from 'styled-components';

import { theme } from '../config.json';

export const Wrapper = styled.div`
  color: var(--color);
  text-align: center;

  & > p:not(:first-child) {
    font-weight: 300;
  }
`;

export const Title = styled.p`
  font-weight: 500;
`;

const DescriptiveTitle = ({ light, dark, title, ...desc }) => {

  const color =
    light ?
      '#ffffffaa' :
      dark ?
        theme.primary.dark :
        "inherit";

  return (
    <Wrapper style={{
      '--color': color
    }}>
      <Title>{title}</Title>

      {Object.entries(desc).map(([key, value]) =>
        <p key={key} className={key}>{value}</p>
      )}
    </Wrapper>
  );
}

export default React.memo(DescriptiveTitle);