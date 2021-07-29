import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #bbb9;
  background-image: url(/static/common/rolling-spinner.gif);
  background-size: 25px;
  background-position: 50%;
  background-repeat: no-repeat;
  
  border-radius: var(--border-radius);
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = () => (
  <Wrapper />
);

export default Spinner;