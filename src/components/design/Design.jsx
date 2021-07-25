import React, { useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import { viewport } from '../../common/config.json';
import hardString from '../../common/hard-string';
import DesignCard, { Wrapper as _DesignCard } from './DesignCard';
import CallToAction from '../shared/call-to-action/CallToAction';
import DesignContainer from './DesignContainer';
import Greeting from './greeting/Greeting';

const CardContainer = styled.div`
  padding: 0 var(--horizontal-gap);

  & ${_DesignCard} {
    margin-top: var(--design-card-gap);
  }

  @media screen and (min-width: ${viewport.min.laptop}) {
    padding: 0 var(--horizontal-gap-laptop);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const getTypeInfo = type => {
  for (const [k, v] of Object.entries(hardString.design)) {
    if (type === k) return v;
  }
}

const Design = ({ type }) => {

  const typeInfo = getTypeInfo(type);
  const types = ["web", "app", "graphic"];

  for (let i = 0; i < types.length; i++) {
    if (types[i] === type) {
      types.splice(i, 1);
      break;
    }
  }

  const showInfoToast = message => toast.info(message);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Greeting title={typeInfo.titleNoCap} desc={typeInfo.description} />

      <CardContainer>
        {typeInfo.cards.map((item, index) =>
          <DesignCard
            key={index}
            title={item.title}
            desc={item.description}
            imageURL={item.imageURL}
            onClick={() => showInfoToast(`🔔 Clicked on ${item.titleNoCap}!`)}
          />
        )}
      </CardContainer>

      <DesignContainer type1={types[0]} type2={types[1]} />

      <CallToAction />
    </div>
  );
}

export default Design;