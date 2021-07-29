import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import firebase from 'firebase/app';
import 'firebase/database';

import { viewport } from '../../../../common/config.json';
import hardString from '../../../../common/hard-string';
import FormContext from '../../../../common/FormContext';
import Button from '../../../../common/jsx/Button';
import Spinner from '../../../shared/Spinner';
import FormInput from './FormInput';
import ThankYouBubble from './ThankYouBubble';

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

const FormContainer = ({ cactusSlideAwayAnimationRef }) => {

  const { contact } = hardString;
  const emailRegex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,})+)$/;

  const { form, cactus } = useContext(FormContext);
  const [name, setName] = useState({ value: '', error: '', wiggleAnimation: '' });
  const [email, setEmail] = useState({ value: '', error: '', wiggleAnimation: '' });
  const [message, setMessage] = useState({ value: '', error: '', wiggleAnimation: '' });

  const [animateThankYouBubble, setAnimation] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const disableForm = form.data.name && true;

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
      setSubmitting(true);

      firebase.database().ref('/').push({
        name: name.value,
        email: email.value,
        message: message.value,
        timestamp: Date.now()
      }, (error) => {
        if (error) toast.error(error);
        else {
          setSubmitting(false);

          form.setData(() => ({
            name: name.value,
            email: email.value,
            message: message.value
          }));

          if (!cactus.greeted) cactusSlideAwayAnimationRef.current();

          animateThankYouBubble();
        }
      });
    }
  }

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
        databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID
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

          disable={disableForm}
          disableData={form.data.name}
        />

        <FormInput
          id="email"
          label="Email Address"
          data={email}
          setData={setEmail}
          optional

          disable={disableForm}
          disableData={form.data.email}
        />

        <FormInput
          id="message"
          label="Your Message"
          data={message}
          setData={setMessage}
          textarea

          disable={disableForm}
          disableData={form.data.message}
        />

        <ButtonContainer>
          {submitting && <Spinner />}
          <Button light text="SUBMIT" onClick={handleSubmit} disable={disableForm} />
          <ThankYouBubble setAnimation={setAnimation} />
        </ButtonContainer>
      </div>

    </Wrapper>
  );
}

export default FormContainer;