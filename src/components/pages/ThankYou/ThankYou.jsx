import React from 'react';
import MasterPage from '../MasterPage';
import ThankYouButton from '../../ThankYouButton/ThankYouButton';
import ThankYouText from '../../ThankYouText/ThankYouText';

const displayName = 'ThankYou';

export default function ThankYou() {
  return (
    <MasterPage pageTitle="Thank you!">
      <ThankYouText>Thank you!</ThankYouText>
      <ThankYouButton to="/">Go to Catalog</ThankYouButton>
    </MasterPage>
  );
}

ThankYou.displayName = displayName;
