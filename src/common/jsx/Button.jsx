import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { theme } from '../config.json';

export const Wrapper = styled.button`
  border-radius: var(--border-radius);
  border: none;
  overflow: hidden;
  cursor: pointer;

  max-width: 160px;
  width: 160px;
  max-height: 53px;
  height: 53px;
  flex-grow: 0;
  flex-shrink: 0;
`;

const _Link = styled(Link)`
  text-decoration: none;
  color: var(--color);
`;

const Text = styled.p`
  display: block;
  padding: 15px;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 500;

  color: var(--color);
  background: var(--background);

  transition: .25s;
  will-change: background color;

  &:hover {
    background: var(--theme-secondary-peach);
    color: var(--theme-primary-light);
  }
`;

const Button = ({ light, url, text, onClick }) => {

  const background = light ?
    theme.primary.light :
    theme.primary.peach;

  const color = light ?
    theme.primary.dark :
    theme.primary.light;

  return (
    <Wrapper
      onClick={onClick ? e => onClick(e) : () => { }}
      style={{
        '--color': color,
        '--background': background
      }}
    >
      {url ?
        <_Link to={url}>
          <Text>{text}</Text>
        </_Link>
        :
        <Text>{text}</Text>
      }
    </Wrapper>

  );
}

export default React.memo(Button);