import React from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import StepsList from './StepsList';
import { fees } from '../data/season';

function RegisterBlock() {
  return (
    <Section tone="green" angle="both" className="register-block" aria-labelledby="register-block-title">
      <div className="row">
        <div className="col">
          <h2 id="register-block-title" className="eyebrow">Spring 2027 registration</h2>
          <p className="display register-block__price">${fees.early}</p>
          <p className="register-block__deadline">Per player if you register by {fees.earlyDeadline}</p>
          <p className="register-block__detail">
            ${fees.regular} starting {fees.regularStartLong}. Covers winter training, outdoor practices, about 10 spring games and a tournament.
          </p>
        </div>
        <div className="col">
          <h3 className="display register-block__steps-title">Three steps to join</h3>
          <StepsList />
          <Link to="/registration/" className="text-link register-block__details">Registration details</Link>
        </div>
      </div>
    </Section>
  );
}

export default RegisterBlock;
