import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  margin: 20px 0;
`;

const Label = styled.label`
  font-weight: 300;
  font-size: 12px;
  color: var(--label-color);
`;

const Input = styled.input`
  background: unset;
  color: var(--theme-primary-light);

  border: 0;
  border-bottom: 1px solid var(--label-color);
  outline: 0;

  resize: vertical;
`;

const FormInput = ({ textarea, id, label, value, setValue }) => (
  <Wrapper style={{
    '--label-color': "#ffffffcc"
  }}>
    <Label htmlFor={id}>{label}</Label>
    <Input
      as={textarea ? "textarea" : "input"}
      id={id}
      type="text"
      rows="3"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  </Wrapper>
);

export default FormInput;