import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: 100%;
  left: var(--tooltip-icon-size-half);
  transform: translateX(-50%);

  margin-bottom: var(--tooltip-margin-bottom);
  padding: var(--tooltip-padding);

  background: var(--theme-primary-dark);
  color: var(--theme-primary-light);
  border-radius: var(--border-radius);

  transition: .25s;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;

    border: 4px solid black;
    border-color: black transparent transparent transparent;
    margin-left: -4px;
  }
`;

const Tooltip = ({ text }) => (
  <Wrapper>
    {text}
  </Wrapper>
);

export default Tooltip;