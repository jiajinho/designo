import React from 'react';
import styled from 'styled-components';

import Tooltip, { Wrapper as _Tooltip } from '../../../shared/Tooltip';
import Error from './Error';

const Label = styled.label`
  font-weight: 300;
  font-size: 12px;
  color: var(--label-color);
  
  display: flex;
  align-items: center;

  & > p {
    display: inline-block;
    margin-right: 7px;
  }
`;

const Icon = styled.div(({ name }) => `
  position: relative;
  height: var(--tooltip-icon-size);
  aspect-ratio: 1/1;
  width: auto;
  margin-right: 5px;

  background: url(/static/common/${name}.svg);
  background-size: contain;
  background-repeat: no-repeat;

  &:hover ${_Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`);

const Input = styled.input(({ as: _as }) => `
  background-color: #0000;
  background-image: none;
  color: var(--theme-primary-light);

  border: 0;
  outline: 0;

  resize: vertical;

  /*  Auto fill transparent background fix, 
      https://developpaper.com/how-to-better-remove-the-input-auto-fill-background-in-google-browser/ 
  */
  background-clip: content-box;
  height: ${_as === "textarea" ? "unset" : 0};
  padding: ${_as === "textarea" ? "0.6em" : "1.2em"} 0;

  &:first-line {
    color: var(--theme-primary-light);
  }
`);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 20px 0;

  border-bottom: 1px solid var(--label-color);
`;

const FormInput = ({ id, label, data, setData, textarea, optional, disable, disableData }) => (
  <Wrapper style={{
    '--label-color': "#ffffffcc"
  }}>
    <Label>
      <p>{label}</p>

      {optional &&
        <Icon name="question">
          <Tooltip text="Optional" />
        </Icon>
      }

      {disable &&
        <Icon name="approved">
          <Tooltip text="Thanks for your feedback!" />
        </Icon>
      }

      <Error
        text={data.error}
        setData={setData}
        hidden={data.error ? false : true}
      />
    </Label>

    <Input
      as={textarea ? "textarea" : "input"}
      id={id}
      type="text"
      rows="3"
      disabled={disable}
      value={disable ? disableData : data.value}
      onChange={e => setData({ ...data, value: e.target.value, error: '' })}
    />
  </Wrapper>
);

export default FormInput;