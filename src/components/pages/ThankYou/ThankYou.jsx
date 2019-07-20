import React from 'react';
import MasterPage from '../MasterPage';
import ButtonWrapper from '../../ButtonWrapper';
import ThankYouButton from '../../ThankYouButton/ThankYouButton';
import ThankYouText from '../../ThankYouText/ThankYouText';

const displayName = 'ThankYou';

export default function ThankYou() {
  return (
    <MasterPage pageTitle="Thank you!">
      <ThankYouText>Thank you!</ThankYouText>
      <ButtonWrapper>
        <ThankYouButton to="/">Go to Catalog</ThankYouButton>
      </ButtonWrapper>
    </MasterPage>
  );
}

ThankYou.displayName = displayName;
