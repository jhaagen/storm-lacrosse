import React from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { ArrowIcon } from '../components/Icons';
import { areaTeams } from '../data/season';

function TeamLinks({ teams, green = false }) {
  return (
    <ul className="plain-list grid area__grid">
      {teams.map((team) => (
        <li key={team.name}>
          <a className={`link-card ${green ? 'link-card--green' : 'link-card--surface'}`} href={team.url}>
            <span className="display link-card__name link-card__name--md">{team.name}</span>
            <ArrowIcon diagonal className="link-card__arrow" />
          </a>
        </li>
      ))}
    </ul>
  );
}

function AreaTeams() {
  return (
    <>
      <PageHero
        eyebrow="Area teams"
        title={<><span className="line">The next</span>{' '}<span className="line text-green">level.</span></>}
        lead="Fort Wayne has several high school club teams. Storm's goal is to make sure our players are ready to compete in high school and beyond."
        outlineWord="Next"
      />
      <Section className="section--flush-top area">
        <h2 className="area__heading">High school</h2>
        <TeamLinks teams={areaTeams.highSchool} />
        <h2 className="area__heading area__heading--spaced">College</h2>
        <TeamLinks teams={areaTeams.college} green />
      </Section>
    </>
  );
}

export default AreaTeams;
