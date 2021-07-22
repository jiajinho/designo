import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div``;

const Image = styled.img`
  background-image: url(/static/common/bg-pattern-small-circle.svg);
`;

export const Container = styled.div``;

export const Title = styled.h3`
  letter-spacing: 4px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const MediaObject = ({ imageURL, title, jsx }) => (
  <Wrapper>
    <Image src={imageURL} />

    <Container>
      <Title>{title}</Title>

      {jsx}
    </Container>
  </Wrapper>
);

export default MediaObject;