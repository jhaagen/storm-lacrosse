import React from 'react';
import ButtonLink from '../components/ButtonLink';
import Eyebrow from '../components/Eyebrow';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { BoltIcon } from '../components/Icons';
import { practices } from '../data/season';

function PracticeCard({ practice, eyebrow, title, tone }) {
  return (
    <article className={`practice cut-corner practice--${tone}`}>
      <BoltIcon className="practice__bolt" />
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display practice__title">{title}</h2>
      <dl className="practice__details">
        <div><dt>When</dt><dd>{practice.when}</dd></div>
        <div><dt>Time</dt><dd>{practice.time}</dd></div>
        <div><dt>Dates</dt><dd>{practice.dates}</dd></div>
        <div><dt>Where</dt><dd>{practice.where}</dd></div>
      </dl>
      <ButtonLink href={practice.mapUrl} variant={tone === 'green' ? 'onGreen' : 'primary'} arrow>
        Map to {practice.where}
      </ButtonLink>
    </article>
  );
}

function Schedule() {
  return (
    <>
      <PageHero
        eyebrow="Spring 2027 season"
        title={<><span className="line">Where to be.</span>{' '}<span className="line text-green">When to be there.</span></>}
        outlineWord="Jan–May"
      />

      <Section className="section--flush-top practices">
        <div className="grid practices__grid">
          <PracticeCard practice={practices.winter} eyebrow="Phase 01 · Indoors" title="Winter training" tone="dark" />
          <PracticeCard practice={practices.spring} eyebrow="Phase 02 · Outdoors" title="Spring practice" tone="green" />
        </div>
      </Section>

      <Section tone="paper" angle="top" className="gameday">
        <div className="row">
          <div className="col">
            <Eyebrow>Phase 03 · Game day</Eyebrow>
            <h2 className="display h2-section">
              <span className="line">2027 games</span>{' '}
              <span className="line">coming soon.</span>
            </h2>
            <p className="gameday__copy">
              The spring game schedule will be posted here and on GameChanger. Turn on GameChanger notifications so you don't miss a change.
            </p>
          </div>
          <div className="col">
            <div className="gameday__stat">
              <span className="display gameday__big" aria-hidden="true">~10</span>
              <p className="gameday__label">About 10 spring games, plus a tournament</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Schedule;
