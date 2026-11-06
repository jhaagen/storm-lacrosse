import React from 'react';
import { ArrowIcon } from './Icons';
import { steps } from '../data/season';

// The three join steps as black link rows. The <ol> numbers them, so the visible digits are aria-hidden.
function StepsList({ withSublabels = false }) {
  return (
    <ol className={`plain-list steps${withSublabels ? ' steps--large' : ''}`}>
      {steps.map((step, index) => (
        <li key={step.href}>
          <a className="steps__link" href={step.href}>
            <span className="steps__num" aria-hidden="true">{index + 1}</span>
            <span className="steps__text">
              <span className="steps__label">
                {withSublabels ? step.label : step.labelWithFee || step.label}
              </span>
              {withSublabels && <span className="steps__sublabel">{step.sublabel}</span>}
            </span>
            {step.logo && (
              <span className="steps__chip">
                <img src="/assets/usa-lacrosse.png" alt="" width="388" height="161" />
              </span>
            )}
            <ArrowIcon className="steps__arrow" />
          </a>
        </li>
      ))}
    </ol>
  );
}

export default StepsList;
