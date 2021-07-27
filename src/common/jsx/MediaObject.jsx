import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
`;

export const Container = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 210px;
  background-image: url(/static/common/bg-pattern-small-circle.svg);
  background-size: contain;
  text-align: center;
`;

export const Title = styled.h3`
  letter-spacing: 4px;
  font-weight: 600;
  height: 3.5em;
  margin-top: 10px;
  margin-bottom: 10px;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div``;

const MediaObject = ({ imageURL, title, jsx }) => (
  <Wrapper>
    <Container>

      <Image src={imageURL} />

      <Content>
        <Title>
          {title}
        </Title>

        {jsx}
      </Content>

    </Container>
  </Wrapper>
);

export default MediaObject;