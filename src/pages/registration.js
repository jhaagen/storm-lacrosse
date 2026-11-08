import React from 'react';
import Eyebrow from '../components/Eyebrow';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import StepsList from '../components/StepsList';
import { feeCovers, fees, teams } from '../data/season';

function Registration() {
  return (
    <>
      <PageHero
        eyebrow="Spring 2027 · 10U · 12U · 14U"
        title={<><span className="line">Registration</span>{' '}<span className="line">is <span className="text-green">open.</span></span></>}
        lead="Teams are capped so playing time isn't diluted. Lock in your spot and the early rate before December 31."
        outlineWord="2027"
      />

      <Section tone="green" className="reg-price">
        <div className="row">
          <div className="col">
            <div className="reg-price__pair">
              <p className="reg-price__item">
                <span className="eyebrow">Through {fees.earlyDeadline}</span>
                <span className="display reg-price__early">${fees.early}</span>
              </p>
              <p className="reg-price__item">
                <span className="eyebrow">From {fees.regularStart}</span>
                <span className="display reg-price__regular">${fees.regular}</span>
              </p>
            </div>
            <p className="reg-price__covers">Per player. Your fee covers:</p>
            <ul className="plain-list reg-price__list">
              {feeCovers.map((item, index) => (
                <li key={item}>
                  <span className="reg-price__num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h2 className="display reg-price__title">Complete all three</h2>
            <StepsList withSublabels />
          </div>
        </div>
      </Section>

      <Section className="birthdates">
        <Eyebrow>Find your team</Eyebrow>
        <h2 className="display h2-section">Birthdate ranges</h2>
        <div className="birthdates__region" role="region" aria-label="Birthdate ranges by team" tabIndex="0">
          <table className="birthdates__table">
            <thead>
              <tr>
                <th scope="col">Team</th>
                <th scope="col">Born on or after</th>
                <th scope="col">Born on or before</th>
                <th scope="col">Note</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.name}>
                  <th scope="row">{team.name}</th>
                  <td>{team.start}</td>
                  <td>{team.end}</td>
                  <td>{team.note || ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="paper" angle="top" className="parents">
        <div className="row">
          <div className="col">
            <Eyebrow>For parents</Eyebrow>
            <h2 className="display h2-section">
              <span className="line">What we</span>{' '}
              <span className="line">count on.</span>
            </h2>
            <div className="parents__item">
              <h3 className="parents__title">Watch GameChanger</h3>
              <p>All club communication goes through the GameChanger app. Check it often and add every email address in your family.</p>
            </div>
            <div className="parents__item">
              <h3 className="parents__title">Volunteer at games</h3>
              <p>The club relies 100% on volunteers to run. Every family is expected to help out on game days.</p>
            </div>
          </div>
          <div className="col">
            <div className="parents__code cut-corner">
              <h3 className="display parents__code-title">The sideline <span className="text-green">code</span></h3>
              <ol className="parents__rules">
                <li>Parents watch from the spectator area behind the outer fence.</li>
                <li>No coaching from the sidelines. Let the coaches coach.</li>
                <li>Criticizing athletes, referees or other adults is not tolerated.</li>
              </ol>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Registration;
