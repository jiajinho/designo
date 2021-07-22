import React, { useState } from 'react';
import styled from 'styled-components';

import { viewport } from '../../../common/config.json';
import Button, { Wrapper as _Button } from '../../../common/jsx/Button';
import FormInput from './FormInput';

const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;

  @media screen and (min-width: ${viewport.min.tablet}) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  font-weight: 300;
  margin: 15px 0;
`;

const Wrapper = styled.form`
  padding: 70px var(--horizontal-gap);
  color: var(--theme-primary-light);

  text-align: center;

  @media screen and (min-width: ${viewport.min.tablet}) {
    text-align: right;
    & ${Title}, & ${Description} { text-align: left; }
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    padding: 70px 60px;
  }

  @media screen and (min-width: ${viewport.min.desktop}) {
    display: flex;

    & > div { width: 100%; }

    & > div:first-child { 
      margin-right: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;


const FormContainer = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  }

  return (
    <Wrapper>
      <div>
        <Title as="h2">Contact Us</Title>

        <Description as="p">
          Ready to take it to the next level? Let's talk about your project or idea and find out how
          we can help your business grow. If you are looking for unique digital experiences that's
          relatable to your users, drop us a line.
        </Description>
      </div>

      <div>
        <FormInput id="name" label="Name" value={name} setValue={setName} />
        <FormInput id="email" label="Email Address" value={email} setValue={setEmail} />
        <FormInput textarea id="message" label="Your Message" value={message} setValue={setMessage} />

        <Button light text="SUBMIT" onClick={handleSubmit} />
      </div>

    </Wrapper>
  );
}

export default FormContainer;