import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { theme } from '../config.json';

const Text = styled.p`
  display: block;
  padding: 15px;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 500;

  color: var(--color);
  background: var(--background);
  transition: .25s;

  &:hover {
    background: var(--theme-secondary-peach);
    color: var(--theme-primary-light);
  }
`;

const _Link = styled(Link)`
  text-decoration: none;
  color: var(--color);
`;

export const Wrapper = styled.button`
  border-radius: var(--border-radius);
  border: none;
  outline: none;
  overflow: hidden;
  cursor: pointer;

  max-width: 160px;
  width: 160px;
  max-height: 53px;
  height: 53px;
  flex-grow: 0;
  flex-shrink: 0;

  &[disabled] > ${Text} {
    background: #ddd;
    color: var(--theme-primary-dark);
    cursor: auto;
  }
`;

const Button = ({ light, url, text, onClick, disable }) => {

  const background = light ?
    theme.primary.light :
    theme.primary.peach;

  const color = light ?
    theme.primary.dark :
    theme.primary.light;

  return (
    <Wrapper
      onClick={onClick ? e => onClick(e) : null}
      disabled={disable}
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