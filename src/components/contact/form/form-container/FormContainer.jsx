import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import { viewport } from '../../../../common/config.json';
import hardString from '../../../../common/hard-string';
import Button from '../../../../common/jsx/Button';
import FormInput from './FormInput';
import ThankYouBubble from './ThankYouBubble';

import firebase from 'firebase/app';
import 'firebase/database';

const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

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

  const { contact } = hardString;
  const emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,})+)$/);

  const [name, setName] = useState({ value: '', error: '', wiggleAnimation: '' });
  const [email, setEmail] = useState({ value: '', error: '', wiggleAnimation: '' });
  const [message, setMessage] = useState({ value: '', error: '', wiggleAnimation: '' });

  const [animateThankYouBubble, setAnimation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate
    let error = false;

    if (name.value === '') {
      error = true;
      name.wiggleAnimation(); //Perform wiggle animation when value is invalid
      setName({ ...name, error: contact.error.common.required });
    }

    if (message.value === '') {
      error = true;
      setMessage({ ...message, error: contact.error.common.required });
      message.wiggleAnimation();
    }

    if (email.value !== '' && !emailRegex.test(email.value)) {
      error = true;
      setEmail({ ...email, error: contact.error.email });
      email.wiggleAnimation();
    }

    //Post process
    if (!error) {
      firebase.database().ref('/').push({
        name: name.value,
        email: email.value,
        message: message.value
      }, (error) => {
        if (error) toast.error(error);

        animateThankYouBubble();
      });
    }
  }

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCxA1bab-rC03M3nnydO876wQKSSIH-7UE",
        authDomain: "designo-0722.firebaseapp.com",
        databaseURL: "https://designo-0722-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "designo-0722",
        storageBucket: "designo-0722.appspot.com",
        messagingSenderId: "63495139288",
        appId: "1:63495139288:web:9c922564a1b430cf908cad"
      });
    } else {
      firebase.app();
    }
  }, []);

  return (
    <Wrapper>

      <div>
        <Title as="h2">{contact.title}</Title>
        <Description as="p">{contact.description}</Description>
      </div>

      <div>
        <FormInput
          id="name"
          label="Name"
          data={name}
          setData={setName}
        />

        <FormInput
          id="email"
          label="Email Address"
          data={email}
          setData={setEmail}
          optional
        />

        <FormInput
          id="message"
          label="Your Message"
          data={message}
          setData={setMessage}
          textarea
        />

        <ButtonContainer>
          <Button light text="SUBMIT" onClick={handleSubmit} />
          <ThankYouBubble setAnimation={setAnimation} />
        </ButtonContainer>
      </div>

    </Wrapper>
  );
}

export default FormContainer;