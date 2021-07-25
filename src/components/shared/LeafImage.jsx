import React from 'react';
import styled from 'styled-components';

export const Image = styled.img`
  height: 100%;
`;

const LeafImage = () => {
  return (
    <Image src="/static/common/bg-pattern-leaf.svg" />
  );
}

export default LeafImage;